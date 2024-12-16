"use client";

import { useEffect, useState } from "react";

export default function Odliczanie() {
  const [countdown, setCountdown] = useState<string>("");
  const [ip, setIp] = useState<string>("");

  useEffect(() => {
    let extraTime = 0;

    function updateCountdown() {
      const now = new Date();
      const nextMonday = new Date(now);

      // Ustaw na następny poniedziałek
      nextMonday.setDate(now.getDate() + ((1 - now.getDay() + 7) % 7 || 7));
      nextMonday.setHours(0, 0, 0, 0);

      const diff = nextMonday.getTime() - now.getTime() + extraTime * 1000;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`);
    }

    async function fetchIP() {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIp(`Twoje IP: ${data.ip}`);
      } catch (error) {
        setIp("Nie udało się pobrać IP.");
        console.error(error);
      }
    }

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    fetchIP();

    return () => clearInterval(intervalId); // Usuń licznik, gdy komponent zostanie odmontowany
  }, []);

  return (
    <div>
      <div className="items-center jusitfy-center flex flex-col">
        <h3 className="text-bold text-md sm:text-3xl">Do następnego cwela tygodnia:</h3>
        <p className="text-sm sm:text-xl" id="countdown">{countdown}</p>
      </div>
    </div>
  );
}
