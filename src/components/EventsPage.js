import React, { useState } from "react";
import EbenezerTimeline from "./EbenezerTimeline";

export default function EventsPage() {
  const [date, onNewDate] = useState(new Date());
  // https://developers.facebook.com/docs/plugins/page-plugin/
  // TODO: The Facebook iframe seems to not appear on Safari
  return (
    <div id="events_container" className="cover-vh">
      <div className="half-parent-width center-children">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          style={{
            border: "none",
            overflow: "hidden",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          height={500}
          width={340}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="half-parent-width scrollable">
        <EbenezerTimeline />
      </div>
    </div>
  );
}
