import Link from "next/link";
import { Button } from "../ui/button";

export function Section1() {
  return (
    <div className="min-h-screen">
      <span className="absolute right-4 md:right-8 top-4 text-lg">
        Deck/2024
      </span>

      <div className="container min-h-screen relative flex-col flex w-full items-center justify-center">
        <div className="flex gap-8">
          <img
            className="invert w-full max-h-8"
            src="https://app.cal.com/product-cards/product-of-the-day.svg"
            alt=""
          />
          <img
            className="invert w-full max-h-8"
            src="https://app.cal.com/product-cards/product-of-the-week.svg"
            alt=""
          />
          <img
            className="invert w-full max-h-8"
            src="https://app.cal.com/product-cards/product-of-the-month.svg"
            alt=""
          />
        </div>

        <h1 className="text-[200px] font-display">Cal.com</h1>

        <div className="flex gap-8">
          <img
            className="w-full max-h-12"
            src="https://app.cal.com/product-cards/producthunt.svg"
            alt=""
          />
          <img
            className="w-full max-h-12"
            src="https://app.cal.com/product-cards/google-reviews.svg"
            alt=""
          />
          <img
            className="w-full max-h-12"
            src="https://app.cal.com/product-cards/g2.svg"
            alt=""
          />
        </div>

        <div className="flex gap-2 mt-8">
          <Button asChild variant="default">
            <Link href="https://cal.com/signup">Sign up for free</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://cal.com/sales">Contact Sales</Link>
          </Button>
        </div>

        {/*  <Script id="start">
          {`
           window.VIDEOASK_EMBED_CONFIG = {
              kind: "widget",
              url: "https://www.videoask.com/f32kxm15y",
              options: {
                widgetType: "VideoThumbnailWindowTall",
                text: "Hey 👋",
                backgroundColor: "#1E1E20",
                position: "bottom-left",
                dismissible: false,
                videoPosition: "center center",
              },
            };`}
        </Script>
        <Script id="videoask" src="https://www.videoask.com/embed/embed.js" /> */}
      </div>
    </div>
  );
}
