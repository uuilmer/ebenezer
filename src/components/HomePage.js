import React, { useState } from "react";

export default function HomePage() {
  // TODO: Add dynamic quotes
  return (
    <div>
      <video autoPlay muted loop id="desktop_home_background">
        <source src="../media/pexels_pixabay_background.mp4" type="video/mp4" />
      </video>
      <img
        id="mobile_home_background"
        src="../media/mobile_home_background.png"
        type="img/png"
      />
      <div className="content" className="full-parent-height">
        <h1 className="display-1" id="church_name">
          "Iglesia de Dios Ebenezer"
        </h1>
        <div id="home_intro">
          <figure className="text-center">
            <blockquote className="blockquote">
              <h6 className="display-6">
                "Tomó luego Samuel una piedra y la puso entre Mizpa y Sen, y le
                puso por nombre Eben-ezer"
              </h6>
            </blockquote>
            <figcaption className="blockquote-footer">
              "1 Samuel 7:12"
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
