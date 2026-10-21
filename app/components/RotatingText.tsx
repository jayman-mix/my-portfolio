"use client";

import { useEffect, useState } from "react";

const words = ["Web Developer", "WordPress Developer", "Next.js Learner", "Problem Solver", "Obervant", "Team Leader", "Graphic Artist, sometimes", ];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="text-6xl font-medium">
      <span key={words[index]} className="rotating-word inline-block text-accent">
        {words[index]}
      </span>
    </h2>
  );
}