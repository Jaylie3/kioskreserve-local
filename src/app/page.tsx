import { logger } from "@/lib/logger";
import { COPY, ROUTES } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, ShoppingCart, Activity, Info } from "lucide-react";

logger.info({ page: "home" }, "KioskReserve landing page rendered");

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-3xl"
      />

      {/* Subtle grid texture */}
      <div aria-hidden="true" className="grid-pattern pointer-events-none absolute inset-0" />

      {/* Content */}
      <header className="relative flex flex-col items-center mb-12 text-center">
        <div className="mb-4 rounded-2xl bg-slate-800/60 p-4 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl">
          <Store className="h-14 w-14 text-indigo-400 drop-shadow-lg" aria-hidden="true" />
        </div>
        <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-xl">
          {COPY.HERO_TITLE}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-indigo-100">{COPY.HERO_SUBTITLE}</p>
      </header>

      <section
        className="relative grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
        aria-label="Kiosk actions"
      >
        {/* Order Now */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer ring-1 ring-white/10">
          <ShoppingCart
            className="mb-4 h-14 w-14 text-indigo-300"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-bold text-white mb-2">{COPY.ORDER_TITLE}</h2>
          <p className="mb-6 text-center text-indigo-100">{COPY.ORDER_DESCRIPTION}</p>
          <Button asChild className="w-full rounded-xl py-6 text-lg">
            <a href={ROUTES.ORDER}>{COPY.ORDER_CTA}</a>
          </Button>
        </Card>

        {/* Reservations */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer ring-1 ring-white/10">
          <Activity
            className="mb-4 h-14 w-14 text-indigo-300"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-bold text-white mb-2">{COPY.RESERVATION_TITLE}</h2>
          <p className="mb-6 text-center text-indigo-100">{COPY.RESERVATION_DESCRIPTION}</p>
          <Button asChild className="w-full rounded-xl py-6 text-lg">
            <a href={ROUTES.RESERVATIONS}>{COPY.RESERVATION_CTA}</a>
          </Button>
        </Card>

        {/* Information */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer ring-1 ring-white/10">
          <Info
            className="mb-4 h-14 w-14 text-indigo-300"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-bold text-white mb-2">{COPY.INFO_TITLE}</h2>
          <p className="mb-6 text-center text-indigo-100">{COPY.INFO_DESCRIPTION}</p>
          <Button asChild className="w-full rounded-xl py-6 text-lg">
            <a href={ROUTES.INFO}>{COPY.INFO_CTA}</a>
          </Button>
        </Card>
      </section>
    </main>
  );
}
