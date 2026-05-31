import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return <Outlet />;
}

