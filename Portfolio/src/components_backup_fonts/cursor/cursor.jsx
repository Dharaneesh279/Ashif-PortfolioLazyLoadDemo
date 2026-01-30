import React, { useEffect, useRef } from "react";
import "./cursor.css";

const Cursor = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circleElement = circleRef.current;

    const mouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    const speed = 0.17;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;

      circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="circle" ref={circleRef}></div>;
};

export default Cursor;
