import Link from "next/link";
import { Card } from "./ui";

export function Section9() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Build for everyone</span>
        <span className="text-[#878787] hover:text-white">
          <Link target="_blank" className="font-display" href="https://cal.com">
            Cal.com
          </Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="px-4 pt-14 md:px-0 md:pt-0 md:h-auto overflow-auto">
          <div className="grid md:grid-cols-3 gap-8 px-4">
            <Card className="pb-8">
              <span></span>
              <h2 className="text-2xl">+45 Languages</h2>
              <p className="text-[#878787] text-sm text-center">
                Cal.com is currently available in 45+ languages and constantly
                growing.
              </p>
            </Card>

            <Card className="pb-8">
              <h2 className="text-2xl">Battle-Grade Security</h2>
              <p className="text-[#878787] text-sm text-center">
                We are the fastest scheduling company to achieve SOC 2 Type 2,
                ISO 27001, and HIPAA compliance.
              </p>
            </Card>

            <Card className="pb-8">
              <h2 className="text-2xl">Open-Source</h2>
              <p className="text-[#878787] text-sm text-center">
                The majority of our code is open-source, so you can see exactly
                what we do and how we work.
              </p>
            </Card>
            <Card className="pb-8">
              <h2 className="text-2xl">Self Hosting Capabilities</h2>
              <p className="text-[#878787] text-sm text-center">
                Cal.com allows self-hosting as needed anywhere in the world.
                You’re able to control and own your data.
              </p>
            </Card>
            <Card className="pb-8">
              <h2 className="text-2xl">40+ API Routes</h2>
              <p className="text-[#878787] text-sm text-center">
                Powerful APIs such as availability, booking and payment APIs
                ensure your data is securely exchanged with 99.99% uptime.
              </p>
            </Card>
            <Card className="pb-8">
              <h2 className="text-2xl">Fully Customizable</h2>
              <p className="text-[#878787] text-sm text-center">
                Customize the platform to reflect your unique brand identity,
                seamlessly integrating it into your own platforms with full dev
                support.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
