"use strict";
// @flow

import React, { useState, useRef } from "react";

export default function HomePage() {
  /*
    Includes code for Dynamic Home Page Title
    Adapted from: https://www.sliderrevolution.com/resources/css-text-animation/
    Animation: Cross Color Text Reveal
    Developer: Kenny
  */

  // TODO: Add dynamic quotes
  const darkRef = useRef(null);
  const lightRef = useRef(null);

  setupDynamicTitle(darkRef, lightRef);

  return (
    <div id="home_page_container">
      <div className="outer-container">
        <div id="home-image" className="image-container">
          <h2 className="section-title on-dark">
            <span className="paralax-title" ref={darkRef}>
              Iglesia de Dios Ebenezer
            </span>
          </h2>
        </div>
        <h2 className="section-title">
          <span className="paralax-title" ref={lightRef}>
            Iglesia de Dios Ebenezer
          </span>
        </h2>
      </div>
      <div id="home_intro">
        <figure className="text-center">
          <blockquote className="blockquote">
            <h6 className="display-6">
              "Tomó luego Samuel una piedra y la puso entre Mizpa y Sen, y le
              puso por nombre Eben-ezer"
            </h6>
          </blockquote>
          <figcaption className="blockquote-footer">"1 Samuel 7:12"</figcaption>
        </figure>
      </div>
    </div>
  );
}

/// Use black and white identical title elements to add cool animation
///
/// @param darkRef A useRef return value reqpresenting the black title
/// @param lightRef A useRef return value reqpresenting the white title
function setupDynamicTitle(darkRef, lightRef) {
  let didScroll = false;

  /*
    When the user scrolls, trigger the conditional statement
    inside the infinetly repeating computeFrame function
  */
  const scrollInProgress = () => {
    didScroll = true;
  };

  const computeFrame = () => {
    if (didScroll) {
      darkRef.current.style.transform =
        "translateX(" + window.scrollY / 10 + "%)";
      lightRef.current.style.transform =
        "translateX(" + window.scrollY / 10 + "%)";
      didScroll = false;
    }
    // Recursively call computeFrame to cause constant frame computation
    requestAnimationFrame(computeFrame);
  };

  // Begin animation
  requestAnimationFrame(computeFrame);
  window.addEventListener("scroll", scrollInProgress);
}
