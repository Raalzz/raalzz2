"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function HeroVisualV2() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const isMobile = window.matchMedia("(max-width: 549px)").matches;
    if (isMobile) {
      video.play().catch(() => {});
    }
  }, []);

  const handleHoverStart = () => {
    const video = videoRef.current;
    const isMobile = window.matchMedia("(max-width: 549px)").matches;
    if (!video) return;
    if (!isMobile) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleHoverEnd = () => {
    const isMobile = window.matchMedia("(max-width: 549px)").matches;
    if (!isMobile) {
      videoRef.current?.pause();
    }
  };

  return (
    <div className="hero-visual-v2" aria-hidden>
      <Image
        src="/hero/upscale_static_hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[80%_center]"
      />

      <video
        ref={videoRef}
        className="hero-visual-v2__reveal"
        src="/hero/upscale_dynamic_hero.mp4"
        loop
        muted
        playsInline
      />

      <div
        className="hero-visual-v2__hotspot"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      />
      <div className="hero-visual-v2__gradient" />
    </div>
  );
}
