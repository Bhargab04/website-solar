import { useState, useEffect } from "react";
import "../../styles/emi-calculator.css";

/* ── Formatters ─────────────────────────────────────── */
const formatCurrency = (val: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);

const formatLakh = (val: number) => {
  if (val >= 10_000_000) return `₹${(val / 10_000_000).toFixed(2)} Cr`;
  if (val >= 100_000) return `₹${(val / 100_000).toFixed(2)} L`;
  return formatCurrency(val);
};

/* ── SliderInput ────────────────────────────────────── */
interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string | number;
  unit?: string;
  editable?: boolean;
  freeType?: boolean;
  prefix?: string;
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  unit,
  editable,
  freeType,
  prefix,
}: SliderInputProps) {
  const clamped = Math.min(Math.max(value, min), max);
  const pct = ((clamped - min) / (max - min)) * 100;
  const [typing, setTyping] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const handleDisplayClick = () => {
    setTyping(true);
    setInputVal(String(value));
  };

  const handleInputBlur = () => {
    const parsed = parseFloat(inputVal.replace(/[^0-9.]/g, ""));
    if (!isNaN(parsed))
      onChange(freeType ? Math.max(parsed, min) : Math.min(Math.max(parsed, min), max));
    setTyping(false);
  };

  const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") e.currentTarget.blur();
    if (e.key === "Escape") setTyping(false);
  };

  return (
    <div className="emi-slider-wrap">
      <div className="emi-slider-header">
        <span className="emi-slider-label">{label}</span>

        {editable && typing ? (
          <div className="emi-slider-input-wrap">
            {prefix && <span className="emi-slider-input-prefix">{prefix}</span>}
            <input
              autoFocus
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKey}
              className="emi-slider-input"
            />
            {unit && <span className="emi-slider-value-unit">{unit}</span>}
          </div>
        ) : (
          <span
            onClick={editable ? handleDisplayClick : undefined}
            title={editable ? "Click to type" : undefined}
            className={`emi-slider-value${editable ? "" : " readonly"}`}
          >
            {format(clamped)}
            {unit && <span className="emi-slider-value-unit">{unit}</span>}
            {editable && <span className="emi-slider-edit-icon">✎</span>}
          </span>
        )}
      </div>

      <div className="emi-track-wrap">
        <div className="emi-track-fill" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={clamped}
          onChange={(e) => onChange(Number(e.target.value))}
          className="emi-track-input"
        />
        <div className="emi-track-thumb" style={{ left: `${pct}%` }} />
      </div>

      <div className="emi-track-minmax">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

/* ── DonutChart ─────────────────────────────────────── */
function DonutChart({ principal, interest }: { principal: number; interest: number }) {
  const total = principal + interest;
  const r = 68;
  const cx = 88, cy = 88;
  const circ = 2 * Math.PI * r;
  const principalDash = (principal / total) * circ;
  const interestDash = circ - principalDash;

  return (
    <svg width="176" height="176" viewBox="0 0 176 176">
      <defs>
        <linearGradient id="emi-blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="emi-skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" strokeWidth="18" />
      <circle
        cx={cx} cy={cy} r={r} fill="none" stroke="url(#emi-skyGrad)" strokeWidth="18"
        strokeDasharray={`${interestDash} ${principalDash}`}
        strokeDashoffset={-principalDash}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
      <circle
        cx={cx} cy={cy} r={r} fill="none" stroke="url(#emi-blueGrad)" strokeWidth="18"
        strokeDasharray={`${principalDash} ${interestDash}`}
        strokeDashoffset="0"
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#1e3a8a" fontSize="10" fontWeight="600" letterSpacing="1">
        SPLIT
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="800">
        {((principal / total) * 100).toFixed(0)}%
      </text>
      <text x={cx} y={cy + 24} textAnchor="middle" fill="#EAB308" fontSize="9">
        principal
      </text>
    </svg>
  );
}

/* ── Main Component ─────────────────────────────────── */
export function EMICalculator() {
  const [principal, setPrincipal] = useState(2_500_000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState<"years" | "months">("years");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 80);
    return () => clearTimeout(t);
  }, []);

  const months = tenureType === "years" ? tenure * 12 : tenure;
  const r = rate / 12 / 100;
  const emi =
    r === 0
      ? principal / months
      : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;

  const legendItems = [
    {
      label: "Principal",
      value: formatLakh(principal),
      pct: ((principal / totalAmount) * 100).toFixed(1),
      color: "#1e3a8a",
      light: "#f8fafc",
      border: "#1e3a8a",
    },
    {
      label: "Interest",
      value: formatLakh(totalInterest),
      pct: ((totalInterest / totalAmount) * 100).toFixed(1),
      color: "#EAB308",
      light: "#f0fdf4",
      border: "#EAB308",
    },
  ];

  const stripItems = [
    { label: "Principal Amount", value: formatLakh(principal), sub: "Loan borrowed", icon: "🏦" },
    { label: "Total Interest", value: formatLakh(totalInterest), sub: `Over ${months} months`, icon: "📈" },
    { label: "Total Cost", value: formatLakh(totalAmount), sub: "Principal + Interest", icon: "💰" },
  ];

  return (
    <div className="emi-root">
      <div className={`emi-wrapper${animated ? " animated" : ""}`}>
        {/* Header */}
        <div className="emi-header">
          <div className="max-w-xl">
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            See what your monthly payment might look like.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground leading-relaxed">
          Just a rough estimate to give you an idea. The actual numbers will depend on your bank, but this is pretty close.
        </p>
        </div>

        {/* Main card */}
        <div className="emi-card">
          {/* Left — Controls */}
          <div className="emi-panel-left">
            <div className="emi-section-heading">
              <div className="emi-bar" />
              <span className="emi-section-label">Loan Parameters</span>
            </div>

            <SliderInput
              label="Loan Amount" value={principal} min={1000} max={10_000_000} step={50000}
              onChange={setPrincipal} format={formatLakh} editable freeType prefix="₹"
            />
            <SliderInput
              label="Interest Rate" value={rate} min={1} max={20} step={0.01}
              onChange={setRate}
              format={(v) => {
                const rounded = Number(v).toFixed(2);
                if (rounded.endsWith(".00")) return rounded.slice(0, -3);
                if (rounded.endsWith("0")) return rounded.slice(0, -1);
                return rounded;
              }}
              unit="% p.a." editable
            />
            <SliderInput
              label="Loan Tenure"
              value={tenure}
              min={tenureType === "years" ? 1 : 12}
              max={tenureType === "years" ? 30 : 360}
              step={tenureType === "years" ? 1 : 6}
              onChange={setTenure}
              format={(v) => v}
              unit={tenureType}
              editable
            />

            {/* Toggle */}
            <div className="emi-toggle-wrap">
              {(["years", "months"] as const).map((t) => (
                <button
                  key={t}
                  className={`emi-toggle-btn${tenureType === t ? " active" : ""}`}
                  onClick={() => {
                    if (t === "months" && tenureType === "years") setTenure(Math.min(tenure * 12, 360));
                    if (t === "years" && tenureType === "months") setTenure(Math.max(1, Math.round(tenure / 12)));
                    setTenureType(t);
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Results */}
          <div className="emi-panel-right">
            <div className="emi-section-heading emi-section-heading-right">
              <div className="emi-bar" />
              <span className="emi-section-label">Repayment Breakdown</span>
            </div>

            <div className="emi-chart-area flex flex-col items-center justify-center">
              <div className="emi-chart-container mb-6">
                <DonutChart principal={principal} interest={totalInterest} />
              </div>
              <div className="emi-legend grid grid-cols-2 gap-4 w-full">
                {legendItems.map(({ label, value, pct, color, light, border }) => (
                  <div
                    key={label}
                    className="emi-legend-item"
                    style={{ background: light, borderLeft: `3px solid ${border}`, padding: '12px', borderRadius: '8px' }}
                  >
                    <div className="emi-legend-item-name text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
                    <div className="emi-legend-item-value font-display text-xl font-bold" style={{ color }}>{value}</div>
                    <div className="emi-legend-item-pct text-xs mt-1 text-slate-500">{pct}% of total</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center p-6 bg-gradient-brand rounded-2xl text-center shadow-soft">
              <div className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-2">Estimated EMI</div>
              <div className="font-display text-5xl font-bold text-primary-foreground mb-1">
                {formatCurrency(Math.round(emi))}
              </div>
              <div className="text-xs text-primary-foreground/70">per month for {months} months</div>
            </div>

            <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
              <p>
                * Remember, this is just an estimate. Banks have their own fees and exact rates.
              </p>
            </div>
          </div>
        </div>

        {/* Summary strip */}
        <div className="emi-strip mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {stripItems.map(({ label, value, sub, icon }) => (
            <div key={label} className="emi-strip-card flex items-center gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm">
              <div className="emi-strip-icon text-3xl">{icon}</div>
              <div className="emi-strip-content">
                <div className="emi-strip-label text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
                <div className="emi-strip-val font-display text-xl font-bold text-foreground">{value}</div>
                <div className="emi-strip-sub text-xs text-muted-foreground mt-1">{sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="emi-footer-note text-center mt-8 text-[10px] text-muted-foreground/50 font-semibold tracking-widest">
          FOR ILLUSTRATION PURPOSES ONLY
        </div>
      </div>
    </div>
  );
}

