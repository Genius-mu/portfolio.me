import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const circle = document.querySelector(".cursor-circle");

    const moveCursor = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
    </>
  );
};

export default CustomCursor;
