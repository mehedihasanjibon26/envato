"use client";

import { useEffect, useRef, useState } from "react";

export default function ConstructionHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const startVideo = () => {
      video.muted = true;
      video.loop = true;
      video.playbackRate = 0.9;

      setReady(true);

      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      startVideo();
    } else {
      video.addEventListener("canplay", startVideo, {
        once: true,
      });
    }

    return () => {
      video.pause();

      video.removeEventListener("canplay", startVideo);
    };
  }, []);

  return (
    <section
      id="overview"
      className="relative h-screen w-full overflow-hidden bg-[#dce4e6]"
    >
      {/* HERO VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/envato/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Soft cinematic atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,transparent_42%,rgba(10,12,11,0.18)_100%)]" />

      {/* Left/bottom readability */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(235,233,227,0.20)_0%,transparent_52%)]" />

      {/* Subtle warm sunlight */}
      <div
        className="pointer-events-none absolute -right-[15%] -top-[25%] h-[75vw] w-[75vw] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,229,187,0.34) 0%, rgba(255,216,166,0.12) 30%, transparent 68%)",
          filter: "blur(16px)",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 150px rgba(20,24,22,0.08)",
        }}
      />

      {/* HERO CONTENT */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="flex h-full flex-col justify-end px-6 pb-10 md:px-12 md:pb-14 lg:px-16 lg:pb-16 xl:px-20">
          <div className="max-w-[940px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4 md:mb-7">
              <span className="h-px w-10 bg-[#171714]/40 md:w-14" />

              <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-[#171714]/55 md:text-[10px]">
                A new standard of living
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(54px,7.2vw,118px)] font-light leading-[0.84] tracking-[-0.065em] text-[#171714]">
              <span className="block">Where Vision</span>

              <span className="block font-serif italic tracking-[-0.055em]">
                Takes Form.
              </span>
            </h1>

            {/* Description */}
            <div className="mt-7 flex max-w-[780px] flex-col gap-6 border-t border-black/15 pt-5 md:mt-9 md:flex-row md:items-end md:justify-between md:gap-12 md:pt-6">
              <p className="max-w-[410px] text-[12px] leading-[1.7] text-[#171714]/60 md:text-[13px]">
                Crafted from the ground up. Designed to become something
                extraordinary.
              </p>

              {/* Scroll indicator */}
              <div className="flex shrink-0 items-center gap-4">
                <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#171714]/45">
                  Scroll to discover
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20">
                  <span className="animate-bounce text-[15px] font-light text-[#171714]/65">
                    ↓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      {!ready && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#ebe9e3]">
          <span className="text-[9px] uppercase tracking-[0.3em] text-black/40">
            Preparing experience
          </span>
        </div>
      )}
    </section>
  );
}
