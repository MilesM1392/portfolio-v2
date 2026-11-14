import { useEffect, useState } from "react";
import "./TypeWriter.css";

function TypeWriter({ texts, speed = 100 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      // On écrit
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex((c) => c + 1);
        } else {
          // Pause avant d'effacer
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }

      // On efface
      else {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 1.5 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="typewriter">
      {currentText.slice(0, charIndex)}
      <span className="cursor">|</span>
    </span>
  );
}

export default TypeWriter;