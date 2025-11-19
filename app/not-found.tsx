import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <div className="w-screen h-dvh flex flex-col gap-7 items-center justify-center ">
      <FuzzyText 
        baseIntensity={0.26} 
        hoverIntensity={0.5} 
        enableHover={true}
      >
        404
      </FuzzyText>
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.26} 
        enableHover={true}
        fontSize={"2.5rem"}
      >
        Page Not Found
      </FuzzyText>
    </div>
  )
}