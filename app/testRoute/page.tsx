import Image from "next/image";
import { gsap } from 'gsap';
import DotGrid from "../../components/DotGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent font-sans">
        <div className="w-screen h-dvh relative">
          <DotGrid
            dotSize={4}
            gap={15}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={150}
            shockRadius={250}
            shockStrength={6}
            resistance={750}
            returnDuration={0.5}
          />
        </div>
    </div>
  );
}
