import BlurText from "@/components/BlurText";
import DotGrid from "@/components/DotGrid";
import SplitText from "@/components/SplitText";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <div className="w-screen h-dvh bg-transparent flex flex-col items-center justify-center">
      <DotGrid
        dotSize={4}
        gap={15}
        baseColor="#494450"
        activeColor="#c7c7c7"
        proximity={150}
        shockRadius={250}
        shockStrength={6}
        resistance={750}
        returnDuration={0.5}
      />
      <BlurText
        text="Vinay Varma"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-9xl mb-8"
      />
      <SplitText
        text="Full Stack Developer"
        className="text-7xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <TextType 
        text={`I design, build, and ship modern web applications using Next.js, Node.js, PostgreSQL, and cloud platforms. My projects combine clean engineering with practical business logic — like vyascard.com, a complete subscription platform I built from scratch.`}
        typingSpeed={50}
        deletingSpeed={10}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
        className="text-4xl mt-8 max-w-[70%]"
      />
    </div>
  );
}
