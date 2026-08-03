"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const mainRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (mainRef.current) {
        mainRef.current.style.left = mouseX - 6 + "px";
        mainRef.current.style.top = mouseY - 6 + "px";
      }
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = followerX - 18 + "px";
        followerRef.current.style.top = followerY - 18 + "px";
      }
      requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (mainRef.current) mainRef.current.style.transform = "scale(2.5)";
      if (followerRef.current) followerRef.current.style.transform = "scale(1.5)";
    };
    const onLeaveLink = () => {
      if (mainRef.current) mainRef.current.style.transform = "scale(1)";
      if (followerRef.current) followerRef.current.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    const raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={mainRef} className="cursor-main" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
