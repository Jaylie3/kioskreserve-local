"use client";

import { logger } from "@/lib/logger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Store, ShoppingCart, Activity, Info } from "lucide-react";
import React, { useState } from "react";

type DialogType = "order" | "reservation" | "information" | null;

logger.info("KioskReserve landing page rendered");

export default function Home() {
  const [openDialog, setOpenDialog] = useState<DialogType>(null);

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
          <Button
            className="w-full text-lg py-6 rounded-xl"
            onClick={() => setOpenDialog("order")}
          >
            Start Order
          </Button>
        </Card>
        {/* Reservations Card */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer">
          <Activity className="w-14 h-14 text-indigo-300 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Reservations</h2>
          <p className="text-indigo-100 mb-6 text-center">Book your spot or check your reservation.</p>
          <Button
            className="w-full text-lg py-6 rounded-xl"
            onClick={() => setOpenDialog("reservation")}
          >
            Reserve Now
          </Button>
        </Card>
        {/* Information Card */}
        <Card className="flex flex-col items-center justify-between p-8 bg-slate-800/50 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 cursor-pointer">
          <Info className="w-14 h-14 text-indigo-300 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Information</h2>
          <p className="text-indigo-100 mb-6 text-center">Learn more about our services and support.</p>
          <Button
            className="w-full text-lg py-6 rounded-xl"
            onClick={() => setOpenDialog("information")}
          >
            More Info
          </Button>
        </Card>
      </section>

      {/* Order Now Dialog */}
      <Dialog open={openDialog === "order"} onOpenChange={(open) => !open && setOpenDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start Your Order</DialogTitle>
            <DialogDescription>
              Place a new order quickly and easily at the kiosk.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-2">
            <p className="text-indigo-200 text-sm">Add your order items below to get started.</p>
            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Item name"
              aria-label="Item name"
            />
            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Quantity"
              type="number"
              min={1}
              aria-label="Quantity"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={() => setOpenDialog(null)}>Confirm Order</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reservations Dialog */}
      <Dialog open={openDialog === "reservation"} onOpenChange={(open) => !open && setOpenDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Make a Reservation</DialogTitle>
            <DialogDescription>
              Book your spot or check an existing reservation.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-2">
            <p className="text-indigo-200 text-sm">Enter your details to reserve your spot.</p>
            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              aria-label="Your name"
            />
            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Date (e.g. 2026-03-25)"
              type="date"
              aria-label="Reservation date"
            />
            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Time (e.g. 10:00 AM)"
              type="time"
              aria-label="Reservation time"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={() => setOpenDialog(null)}>Confirm Reservation</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Information Dialog */}
      <Dialog open={openDialog === "information"} onOpenChange={(open) => !open && setOpenDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>About KioskReserve</DialogTitle>
            <DialogDescription>
              Learn more about our services and support.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-2 text-indigo-200 text-sm">
            <p>
              <strong className="text-white">KioskReserve</strong> is a fast, secure, and
              easy-to-use queueing and reservation system designed for clinics, government
              offices, and service centers.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Walk up and place orders or book appointments instantly.</li>
              <li>Real-time queue tracking with minimal wait times.</li>
              <li>Works offline — no internet required at the kiosk.</li>
              <li>Secure and private — your data stays on-site.</li>
            </ul>
            <p>For support, please speak to a staff member or call our helpdesk.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={() => setOpenDialog(null)}>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
