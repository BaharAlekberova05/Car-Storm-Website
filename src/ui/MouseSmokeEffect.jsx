import { useEffect } from "react";

const createSmoke = (x, y) => {
  const smoke = document.createElement("div");
  smoke.classList.add("smoke-effect");
  document.body.appendChild(smoke);
  smoke.style.left = `${x}px`;
  smoke.style.top = `${y}px`;

  setTimeout(() => {
    smoke.remove();
  }, 2000);
};
const MouseSmokeEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!e.target.closest("nav, button, a, input, textarea")) {
        createSmoke(e.clientX, e.clientY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <style>
      {`
        .smoke-effect {
          position: absolute;
          width: 25px;
          height: 25px;
          background: radial-gradient(circle, rgba(220, 220, 220, 0.6) 10%, rgba(255, 255, 255, 0) 90%);
          pointer-events: none;
          opacity: 1;
          transform: scale(1);
          filter: blur(6px);
          animation: smokeAnim 2s ease-out;
        }

        @keyframes smokeAnim {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.8); }
          100% { opacity: 0; transform: scale(3); }
        }
      `}
    </style>
  );
};

export default MouseSmokeEffect;
