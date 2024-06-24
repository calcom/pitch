import Balancer from "react-wrap-balancer";
import Link from "next/link";

export function Section2() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Mission</span>
        <span className="text-[#878787] hover:text-white">
          <Link target="_blank" className="font-display" href="https://cal.com">
            Cal.com
          </Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <h2 className="max-w-5xl mx-auto text-center font-display text-4xl">
          <Balancer>
            Our mission is to connect a billion people by 2031 through calendar
            scheduling.
          </Balancer>
        </h2>
      </div>
    </div>
  );
}
