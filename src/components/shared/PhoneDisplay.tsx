import Image from "next/image"

export function PhoneDisplay() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]" data-testid="phone-display">
      <div className="absolute inset-0 rounded-full bg-[#00e7f9] blur-[60px] opacity-60 z-0"></div>
      <div className="absolute inset-0 rounded-full bg-[#fc004e] blur-[80px] opacity-30 z-0 -translate-x-1/4"></div>
      <Image
        src="/placeholder.svg?height=600&width=300"
        alt="Fametonic App Interface"
        width={300}
        height={600}
        className="relative z-10 mx-auto"
        priority
      />
    </div>
  )
}
