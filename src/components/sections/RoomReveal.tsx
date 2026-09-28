"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    number: "01",
    eyebrow: "The Arrival",
    title: "Step into a different perspective.",
    description:
      "A considered entrance introduces the character of the space before the journey unfolds.",
  },
  {
    number: "02",
    eyebrow: "The Interior",
    title: "Space shaped around living.",
    description:
      "Open proportions, natural light and refined details come together in a calm, contemporary interior.",
  },
  {
    number: "03",
    eyebrow: "The Experience",
    title: "Every detail has a purpose.",
    description:
      "Designed as a continuous experience, each view reveals another layer of the residence.",
  },
];

export default function RoomReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeStory, setActiveStory] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let trigger: ScrollTrigger | null = null;

    const startVideo = async () => {
      video.loop = true;
      video.muted = true;
      video.playbackRate = 0.82;

      try {
        await video.play();
      } catch {
        // Browser can retry once the video is ready.
      }

      setReady(true);

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",

        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.34) {
            setActiveStory(0);
          } else if (progress < 0.67) {
            setActiveStory(1);
          } else {
            setActiveStory(2);
          }
        },
      });

      ScrollTrigger.refresh();
    };

    if (video.readyState >= 3) {
      startVideo();
    } else {
      video.addEventListener("canplay", startVideo, {
        once: true,
      });
    }

    return () => {
      trigger?.kill();

      video.removeEventListener("canplay", startVideo);
      video.pause();
    };
  }, []);

  const story = stories[activeStory];

  return (
    <section
      ref={sectionRef}
      id="interior"
      className="relative h-[300vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Normal-playing cinematic video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/envato/videos/room-reveal.mp4" type="video/mp4" />
        </video>

        {/* Readability grading */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,8,0.68)_0%,rgba(7,8,8,0.30)_38%,rgba(7,8,8,0.03)_70%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,transparent_55%,rgba(0,0,0,0.22)_100%)]" />

        {/* Story content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[620px]">
              <div
                key={activeStory}
                className="animate-[storyReveal_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[9px] font-medium tracking-[0.24em] text-white/45">
                    {story.number}
                  </span>

                  <span className="h-px w-10 bg-white/35" />

                  <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-white/65 md:text-[10px]">
                    {story.eyebrow}
                  </p>
                </div>

                <h2 className="max-w-[600px] text-[clamp(44px,5.5vw,88px)] font-light leading-[0.92] tracking-[-0.055em] text-white">
                  {story.title}
                </h2>

                <div className="mt-7 max-w-[440px] border-t border-white/20 pt-5">
                  <p className="text-[12px] leading-[1.75] text-white/60 md:text-[13px]">
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story progress */}
        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 md:flex md:right-12 lg:right-16">
          {stories.map((item, index) => (
            <div
              key={item.number}
              className={`h-px transition-all duration-700 ${
                index === activeStory ? "w-12 bg-white" : "w-5 bg-white/25"
              }`}
            />
          ))}
        </div>

        {!ready && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#111]">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/45">
              Entering
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
