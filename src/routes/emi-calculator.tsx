import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EMICalculator } from "@/components/site/EMICalculator";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/emi-calculator")({
  head: () => ({
    meta: [
      { title: "What's the monthly payment? — Solara" },
      {
        name: "description",
        content:
          "Play around with the numbers to see what your monthly payment might look like for a solar system.",
      },
      { property: "og:title", content: "Solar EMI Calculator" },
      { property: "og:description", content: "Estimate your monthly payments for going solar." },
    ],
  }),
  component: EMICalculatorPage,
});

function EMICalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <EMICalculator />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

