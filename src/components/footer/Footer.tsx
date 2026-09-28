import Link from "next/link";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Architecture", href: "#architecture" },
  { label: "Interior", href: "#interior" },
  { label: "Experience", href: "#experience" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#e9e7e1] text-[#171714]">
      {/* Soft architectural background glow */}
      <div className="pointer-events-none absolute -right-[12%] -top-[45%] h-[700px] w-[700px] rounded-full bg-white/60 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-8 pt-20 md:px-12 md:pb-10 md:pt-28 lg:px-16 xl:px-20">
        {/* Top content */}
        <div className="grid gap-16 border-b border-black/15 pb-16 md:pb-20 lg:grid-cols-[1.5fr_0.5fr] lg:gap-24">
          {/* Main statement */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-black/35" />

              <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-black/45">
                The journey continues
              </p>
            </div>

            <h2 className="max-w-[900px] text-[clamp(50px,6.5vw,108px)] font-light leading-[0.88] tracking-[-0.06em]">
              Experience spaces
              <span className="block font-serif italic">
                beyond the ordinary.
              </span>
            </h2>

            <Link
              href="#overview"
              className="group mt-10 inline-flex items-center gap-5"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                Explore again
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-500 group-hover:bg-[#171714] group-hover:text-white">
                ↑
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-col justify-end lg:pb-2">
            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.3em] text-black/35">
              Navigate
            </p>

            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between border-t border-black/10 py-4 text-[12px] uppercase tracking-[0.16em] text-black/55 transition-colors duration-300 hover:text-black"
                >
                  {item.label}

                  <span className="-translate-x-[6px] text-[14px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* 3D ENVATO wordmark */}
        <div className="relative overflow-hidden border-b border-black/15 py-12 md:py-16">
          <div className="relative flex justify-center">
            {/* Deep extrusion */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute translate-x-[2px] translate-y-[9px] select-none whitespace-nowrap text-center text-[clamp(78px,16vw,250px)] font-black leading-[0.78] tracking-[-0.075em] text-black/[0.07] blur-[1px]"
            >
              ENVATO
            </span>

            {/* Secondary depth */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute translate-y-[4px] select-none whitespace-nowrap text-center text-[clamp(78px,16vw,250px)] font-black leading-[0.78] tracking-[-0.075em] text-black/[0.10]"
            >
              ENVATO
            </span>

            {/* Main 3D lettering */}
            <p
              className="relative z-10 select-none whitespace-nowrap text-center text-[clamp(78px,16vw,250px)] font-black leading-[0.78] tracking-[-0.075em] text-transparent"
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #f1f0eb 17%, #d5d3cc 34%, #a9a8a1 51%, #777771 66%, #454542 81%, #171714 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.9), 0 3px 0 rgba(0,0,0,0.04), 0 7px 8px rgba(0,0,0,0.07), 0 18px 28px rgba(0,0,0,0.08)",
              }}
            >
              ENVATO
            </p>

            {/* Upper metallic highlight */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-20 select-none whitespace-nowrap text-center text-[clamp(78px,16vw,250px)] font-black leading-[0.78] tracking-[-0.075em] text-transparent opacity-80"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 24%, rgba(255,255,255,0.08) 47%, transparent 57%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ENVATO
            </span>

            {/* Subtle center reflection */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-20 select-none whitespace-nowrap text-center text-[clamp(78px,16vw,250px)] font-black leading-[0.78] tracking-[-0.075em] text-transparent opacity-30"
              style={{
                background:
                  "linear-gradient(180deg, transparent 35%, rgba(255,255,255,0.8) 48%, transparent 58%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ENVATO
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-7 text-[8px] font-medium uppercase tracking-[0.22em] text-black/35 md:flex-row md:items-center md:justify-between">
          <p>Architecture · Interior · Landscape</p>

          <p>© {new Date().getFullYear()} ENVATO</p>
        </div>
      </div>
    </footer>
  );
}
