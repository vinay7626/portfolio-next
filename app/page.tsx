import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <div className="w-screen h-dvh bg-transparent flex items-center justify-center">
      <DotGrid
        dotSize={4}
        gap={15}
        baseColor="#494450"
        activeColor="#ffffff"
        proximity={150}
        shockRadius={250}
        shockStrength={6}
        resistance={750}
        returnDuration={0.5}
      />
    </div>
  );
}
