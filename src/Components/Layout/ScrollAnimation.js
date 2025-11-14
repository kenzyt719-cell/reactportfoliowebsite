import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children, direction = "up", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let x = 0, y = 0;
    if (direction === "up") y = 50;
    if (direction === "down") y = -50;
    if (direction === "left") x = 50;
    if (direction === "right") x = -50;

    gsap.from(ref.current, {
      opacity: 0,
      x,
      y,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, [direction, delay]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollAnimation;