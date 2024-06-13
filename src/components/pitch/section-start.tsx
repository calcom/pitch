import Script from "next/script";

export function SectionStart() {
  return (
    <div className="min-h-screen">
      <span className="absolute right-4 md:right-8 top-4 text-lg">
        Deck/2024
      </span>

      <div className="container min-h-screen relative">
        <h1 className="text-[110px] font-display bottom-[250px] left-2 md:text-[386px] absolute md:right-0 md:bottom-8 md:left-auto">
          Cal.com
        </h1>

        <Script id="start">
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
        <Script id="videoask" src="https://www.videoask.com/embed/embed.js" />
      </div>
    </div>
  );
}
