"use client";

import Link from "next/link";

export function Section6() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Empowering Efficiency</span>
        <span className="text-[#878787] hover:text-white">
          <Link target="_blank" className="font-display" href="https://cal.com">
            Cal.com
          </Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="group">TBD</div>
      </div>
    </div>
  );
}
