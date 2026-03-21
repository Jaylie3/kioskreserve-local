import { logger } from "@/lib/logger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, ShoppingCart, Activity, Info } from "lucide-react";
import React from "react";

logger.info("KioskReserve landing page rendered");

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex flex-col items-center justify-center px-4 py-12">
      <header className="flex flex-col items-center mb-12">
        <Store className="w-16 h-16 text-indigo-400 drop-shadow-lg mb-4" />
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-xl">
          Welcome to KioskReserve
        </h1>
        <p className="text-lg text-indigo-100 max-w-xl text-center">
          Touch to begin. Fast, secure, and easy queueing and reservations for everyone.
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Order Now Card */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer">
          <ShoppingCart className="w-14 h-14 text-indigo-300 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Order Now</h2>
          <p className="text-indigo-100 mb-6 text-center">Place a new order instantly at the kiosk.</p>
          <Button className="w-full text-lg py-6 rounded-xl">Start Order</Button>
        </Card>
        {/* Reservations Card */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer">
          <Activity className="w-14 h-14 text-indigo-300 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Reservations</h2>
          <p className="text-indigo-100 mb-6 text-center">Book your spot or check your reservation.</p>
          <Button className="w-full text-lg py-6 rounded-xl">Reserve Now</Button>
        </Card>
        {/* Information Card */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer">
          <Info className="w-14 h-14 text-indigo-300 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Information</h2>
          <p className="text-indigo-100 mb-6 text-center">Learn more about our services and support.</p>
          <Button className="w-full text-lg py-6 rounded-xl">More Info</Button>
        </Card>
      </section>
    </main>
  );
}
