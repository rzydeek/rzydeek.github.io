"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Califa from "@/assets/Califa.png";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextMonday = new Date(now);
      nextMonday.setDate(now.getDate() + ((8 - now.getDay()) % 7 || 7));
      nextMonday.setHours(0, 0, 0, 0);

      const difference = nextMonday.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const newTimeLeft = `${days} dni, ${hours} godz, ${minutes} min, ${seconds} sek.`;

      if (newTimeLeft !== timeLeft) {
        setTimeLeft(newTimeLeft);
      }
    };

    calculateTimeLeft(); // Calculate immediately
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [timeLeft]);

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-neutral-950 p-4">
      {/* Weekly Highlight Section */}
      <div className="text-center p-8 bg-neutral-900 shadow-lg rounded-lg w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          CWELEM TYGODNIA ZOSTAJE:
        </h1>
        <div className="flex items-center justify-center">
          <Image
            src={Califa}
            alt="Image representing the title of the week"
            className="rounded-lg"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Countdown Section */}
      <div className="text-center p-8 bg-neutral-900 shadow-lg rounded-lg w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Do następnego "Cwela Tygodnia" zostało:
        </h2>
        <p className="text-2xl md:text-3xl text-white mt-4">{timeLeft}</p>
      </div>
    </div>
  );
}
