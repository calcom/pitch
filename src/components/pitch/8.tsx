"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Balancer from "react-wrap-balancer";
import { CalEmbed } from "@/components/cal-embed";

export function Section8() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Dynamic Group Meetings</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container !p-0">
        <div className="group">
          {!visible && (
            <h2 className="max-w-5xl mx-auto text-center font-display text-4xl">
              <Balancer>
                Combine two usernames with a &quot;+&quot; to create a dynamic
                group meeting link:
              </Balancer>
              <button
                onClick={() => setVisible(true)}
                className="mt-12 animate-bounce text-blue-500"
              >
                cal.com/peer+bailey
              </button>
            </h2>
          )}
          <div
            className={cn(
              visible ? "opacity-100 flex" : "opacity-0 hidden",
              "mt-14 transition-opacity w-full px-4 md:px-0 text-center flex-col items-center justify-center"
            )}
          >
            <CalEmbed calLink="peer+bailey" />
          </div>
        </div>
      </div>
    </div>
  );
}
