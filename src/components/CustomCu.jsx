import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Skip on touch devices (no real pointer)
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      // dot is pinned exactly to the pointer
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const render = () => {
      // ease the ring toward the pointer — lower = more lag/trail
      ring.x += (target.x - ring.x) * 0.15;
      ring.y += (target.y - ring.y) * 0.15;
      circle.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    render();

    // grow the ring over clickable things
    const interactive = "a, button, input, textarea, label, [data-cursor]";
    const onOver = (e) => {
      if (e.target.closest(interactive))
        circle.classList.add("cursor-circle--hover");
    };
    const onOut = (e) => {
      if (e.target.closest(interactive))
        circle.classList.remove("cursor-circle--hover");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={circleRef} className="cursor-circle" />
    </>
  );
};

export default CustomCursor;
