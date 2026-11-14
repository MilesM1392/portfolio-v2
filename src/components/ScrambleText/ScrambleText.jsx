import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function ScrambleText({
  text,
  duration = 1000,
  hover = true,
}) {
  const [display, setDisplay] = useState(text);
  const [trigger, setTrigger] = useState(0);

  const scramble = () => {
    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return undefined;
    }

    let frame;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const revealed = Math.floor(progress * text.length);

      const result = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < revealed) return char;

          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(result);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [trigger, text, duration]);

  return (
    <>
      <span aria-hidden="true" onMouseEnter={hover ? scramble : undefined}>
        {display}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}

export default ScrambleText;
