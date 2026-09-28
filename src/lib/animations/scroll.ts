import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerScrollTrigger() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function createScrollContext(scope: Element | string, setup: () => void) {
  registerScrollTrigger();
  const context = gsap.context(setup, scope);
  return () => context.revert();
}

export { gsap, ScrollTrigger };
