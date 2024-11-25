"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Califa from "@/assets/Califa.png";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Znajdź następny poniedziałek o 00:00
      const nextMonday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + ((1 - now.getDay() + 7) % 7 || 7), // Poniedziałek
        0, 0, 0, 0 // Godzina 00:00
      );

      const difference = nextMonday - now;

      // Zamień milisekundy na dni, godziny, minuty, sekundy
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${days} dni, ${hours} godz, ${minutes} min, ${seconds} sek.`
      );
    };

    calculateTimeLeft(); // Oblicz od razu
    const timer = setInterval(calculateTimeLeft, 1000); // Aktualizuj co sekundę

    return () => clearInterval(timer); // Wyczyszczenie interwału
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-neutral-950 p-4">
      {/* Sekcja "Cwel Tygodnia" */}
      <div className="text-center p-8 bg-neutral-900 shadow-lg rounded-lg w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          CWELEM TYGODNIA ZOSTAJE:
        </h1>
        <div className="flex items-center justify-center">
          <Image
            src={Califa}
            alt="Cwel Tygodnia"
            className="rounded-lg"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Sekcja odliczania */}
      <div className="text-center p-8 bg-neutral-900 shadow-lg rounded-lg w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Do następnego "Cwela Tygodnia" zostało:
        </h2>
        <p className="text-2xl md:text-3xl text-white mt-4">{timeLeft}</p>
      </div>
    </div>
  );
}
