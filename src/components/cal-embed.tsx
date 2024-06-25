"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type Props = {
  calLink: string;
};

export function CalEmbed({ calLink }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      calLink={calLink}
      calOrigin="https://i.cal.com"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
