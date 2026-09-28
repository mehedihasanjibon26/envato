"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    id: "room-reveal",
    number: "01",
    label: "The Arrival",
    title: "Step inside.",
    description:
      "A quiet transition from architecture into a more intimate experience.",
    video: "/videos/room-reveal.mp4",
  },
  {
    id: "estate-journey",
    number: "02",
    label: "The Residence",
    title: "Designed around living.",
    description:
      "Natural light, open proportions and refined details shape every view.",
    video: "/videos/estate-journey.mp4",
  },
  {
    id: "grounds-to-gate",
    number: "03",
    label: "The Grounds",
    title: "Beyond the walls.",
    description:
      "The journey continues outdoors, where architecture, landscape and arrival become one.",
    video: "/videos/grounds-to-gate.mp4",
  },
];

export default function ExperienceJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let ticking = false;

    const updateScene = () => {
      const rect = section.getBoundingClientRect();

      const scrollableDistance = section.offsetHeight - window.innerHeight;

      const travelled = Math.min(Math.max(-rect.top, 0), scrollableDistance);

      const progress =
        scrollableDistance > 0 ? travelled / scrollableDistance : 0;

      let nextScene = 0;

      if (progress >= 0.66) {
        nextScene = 2;
      } else if (progress >= 0.33) {
        nextScene = 1;
      }

      setActiveScene((current) =>
        current === nextScene ? current : nextScene,
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(updateScene);
    };

    updateScene();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScene);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", updateScene);
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeScene) {
        video.muted = true;
        video.loop = true;

        if (video.currentTime > 0.25) {
          video.currentTime = 0;
        }

        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeScene]);

  const scene = scenes[activeScene];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative h-[500vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* VIDEO SCENES */}
        {scenes.map((item, index) => (
          <video
            key={item.id}
            ref={(element) => {
              videoRefs.current[index] = element;
            }}
            autoPlay={index === 0}
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out ${
              activeScene === index
                ? "z-[2] scale-100 opacity-100"
                : "pointer-events-none z-[1] scale-[1.025] opacity-0"
            }`}
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ))}

        {/* CINEMATIC OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(90deg,rgba(5,6,5,0.62)_0%,rgba(5,6,5,0.24)_40%,transparent_72%)]" />

        <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,transparent_50%,rgba(0,0,0,0.28)_100%)]" />

        {/* TEXT */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
            <div
              key={scene.id}
              className="max-w-[680px] animate-[journeyText_900ms_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[9px] tracking-[0.25em] text-white/45">
                  {scene.number}
                </span>

                <span className="h-px w-12 bg-white/40" />

                <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-white/65 md:text-[10px]">
                  {scene.label}
                </p>
              </div>

              <h2 className="max-w-[720px] text-[clamp(50px,6vw,100px)] font-light leading-[0.88] tracking-[-0.06em] text-white">
                {scene.title}
              </h2>

              <div className="mt-7 max-w-[440px] border-t border-white/20 pt-5">
                <p className="text-[12px] leading-[1.75] text-white/60 md:text-[13px]">
                  {scene.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="pointer-events-none absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between md:left-12 md:right-12 lg:left-16 lg:right-16">
          <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/40">
            Scroll to explore
          </p>

          <div className="flex items-center gap-3">
            {scenes.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2">
                <span
                  className={`text-[8px] tracking-[0.18em] transition-colors duration-500 ${
                    activeScene === index ? "text-white/80" : "text-white/25"
                  }`}
                >
                  {item.number}
                </span>

                <span
                  className={`block h-px transition-all duration-500 ${
                    activeScene === index ? "w-12 bg-white" : "w-5 bg-white/20"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
