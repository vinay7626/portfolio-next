import Image from "next/image";
import { gsap } from 'gsap';
import DotGrid from "../components/DotGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="w-screen h-screen relative">
        <DotGrid
            dotSize={4}
            gap={18}
            baseColor="#113983"
            activeColor="#2e5dc2"
            proximity={130}
            shockRadius={170}
            shockStrength={5}
            resistance={150}
            returnDuration={1.}
        />
        </div>
    </div>
  );
}
