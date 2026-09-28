export type CinematicVideo = {
  id: string;
  src: string;
  alt: string;
};

export const cinematicVideos: readonly CinematicVideo[] = [
  { id: "estate-journey", src: "/envato/videos/estate-journey.mp4", alt: "Continuous journey through an estate" },
  { id: "grounds-to-gate", src: "/envato/videos/grounds-to-gate.mp4", alt: "Journey from the swimming pool to the main gate" },
  { id: "room-reveal", src: "/envato/videos/room-reveal.mp4", alt: "Room reveal through an opening door" },
  { id: "interior-panorama", src: "/envato/videos/interior-panorama.mp4", alt: "Panoramic modern room walkthrough" },
  { id: "watermarked-preview", src: "/envato/videos/watermarked-preview.mp4", alt: "Watermarked cinematic preview" },
];
