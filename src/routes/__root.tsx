import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground opacity-20">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Oops. Are you lost?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We looked everywhere, but we can't find this page. Maybe there's a typo in the link, or maybe we moved it. 
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#EAB308] px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow hover:opacity-90"
          >
            Take me back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Solara Energy | Top Solar Company in Assam & Northeast India" },
      { name: "description", content: "The premier solar energy company in Assam and Northeast India. We provide expert residential, commercial, and utility-scale solar installations. Get a free quote today." },
      { name: "keywords", content: "solar company Assam, solar panels Assam, solar installation Northeast India, best solar company Northeast, rooftop solar Assam, commercial solar Assam, residential solar Northeast India, solar power Assam" },
      { name: "author", content: "Solara Energy" },
      { property: "og:title", content: "Solara Energy | Top Solar Company in Assam & Northeast India" },
      { property: "og:description", content: "The premier solar energy company in Assam and Northeast India. We provide expert residential, commercial, and utility-scale solar installations." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Solara Energy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Solara Energy | Top Solar Company in Assam & Northeast India" },
      { name: "twitter:description", content: "The premier solar energy company in Assam and Northeast India. Expert solar installations." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

