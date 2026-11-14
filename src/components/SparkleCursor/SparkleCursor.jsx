import { useRef } from "react";
import "./SparkleCursor.css";

function SparkleCursor({
  children,
  as: Element = "div",
  className = "",
  primary = "#FF4FD8",
  secondary = "#ffcdf8",
  style,
  ...props
}) {
  const boxRef = useRef(null);
  const lastPosition = useRef(null);

  const handlePointerMove = (e) => {
    if (e.pointerType !== "mouse") return;

    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    box.style.setProperty("--x", `${x}px`);
    box.style.setProperty("--y", `${y}px`);

    if (lastPosition.current) {
      const dx = x - lastPosition.current.x;
      const dy = y - lastPosition.current.y;

      const distance = Math.hypot(dx, dy);

      box.style.setProperty(
        "--angle",
        `${Math.atan2(dy, dx)}rad`
      );

      box.style.setProperty(
        "--speed",
        Math.min(1, distance / 32)
      );
    }

    lastPosition.current = { x, y };

    box.classList.add("is-active");
  };

  const handlePointerLeave = () => {
    const box = boxRef.current;
    if (!box) return;

    box.classList.remove("is-active");
    box.style.setProperty("--speed", "0");

    lastPosition.current = null;
  };

  return (
    <Element
      ref={boxRef}
      className={`sparkle-cursor ${className}`}
      style={{
        ...style,
        "--sparkle-primary": primary,
        "--sparkle-secondary": secondary,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}

      <div className="sparkle-trail" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <i
            key={i}
            className="sparkle-star"
            style={{ "--i": i }}
          />
        ))}
      </div>
    </Element>
  );
}

export default SparkleCursor;
