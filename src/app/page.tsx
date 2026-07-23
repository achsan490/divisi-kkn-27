"use client";

import dynamic from "next/dynamic";

const CinematicPresentation = dynamic(
  () => import("@/components/CinematicPresentation").then((mod) => mod.CinematicPresentation),
  { ssr: false }
);

export default function Home() {
  return <CinematicPresentation />;
}
