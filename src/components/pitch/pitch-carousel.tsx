"use client";

import { SectionBook } from "@/components/pitch/section-book";
import { SectionDemo } from "@/components/pitch/section-demo";
import { SectionNext } from "@/components/pitch/section-next";
import { Section2 } from "@/components/pitch/2";
import { Section5 } from "@/components/pitch/5";
import { Section1 } from "@/components/pitch/1";
import { SectionSubscription } from "@/components/pitch/section-subscription";
import { SectionTeam } from "@/components/pitch/section-team";
import { Section3 } from "@/components/pitch/3";
import { SectionVision } from "@/components/pitch/section-vision";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { CarouselToolbar } from "./carousel-toolbar";

export function PitchCarusel({
  mau,
  bookings,
  totalUniqueGuests,
}: {
  mau: JSX.Element;
  bookings: JSX.Element;
  totalUniqueGuests: JSX.Element;
}) {
  const [views, setViews] = useState(0);
  const called = useRef(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [video, setVideo] = useState(1);

  useEffect(() => {
    async function fetchViewsCount() {
      try {
        // const data = await setViewCount("pitch");
        // setViews(data);
        setViews(18000);
      } catch {}
    }

    if (!called.current) {
      fetchViewsCount();
      called.current = true;
    }
  }, [called.current]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    console.log("current", current);
    if (current === 2) {
      console.log(video);
      setVideo(2);
    }
  });

  return (
    <>
      <Carousel
        className="w-full select-none min-h-full relative"
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <Section1 />
          </CarouselItem>
          <CarouselItem>
            <Section2 />
          </CarouselItem>
          <CarouselItem>
            <Section3
              mau={mau}
              bookings={bookings}
              totalUniqueGuests={totalUniqueGuests}
            />
          </CarouselItem>
          <CarouselItem>
            <SectionDemo playVideo={current === 4} />
          </CarouselItem>
          <CarouselItem>
            <Section5 />
          </CarouselItem>
          <CarouselItem>
            <SectionTeam />
          </CarouselItem>
          <CarouselItem>
            <SectionSubscription />
          </CarouselItem>
          <CarouselItem>
            <SectionVision />
          </CarouselItem>
          <CarouselItem>
            <SectionNext />
          </CarouselItem>
          <CarouselItem>
            <SectionBook />
          </CarouselItem>
        </CarouselContent>

        <CarouselToolbar views={views} />
      </Carousel>

      {/* {video === 1 ? (
        <>
          <Script id="1">
            {`
          console.log("got here");
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
          <Script id="videoask" src="https://www.videoask.com/embed/embed.js" />
        </>
      ) : null} */}

      {/* {video === 2 ? (
        <>
          <Script id="1">
            {`
          console.log("got here");
           window.VIDEOASK_EMBED_CONFIG = {
              kind: "widget",
              url: "https://www.videoask.com/fdtpbyg4m",
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
          <Script id="videoask" src="https://www.videoask.com/embed/embed.js" />
        </>
      ) : null} */}
    </>
  );
}
