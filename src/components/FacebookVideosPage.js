// @flow
import React, { useState } from "react";

export default function FacebookVideosPage() {
  const [videos, onVideosChange] = useState();

  const urlParams = new URLSearchParams(window.location.search);
  const userCode = urlParams.get("code");

  const updateVideos = (token: string) => {
    let bearer = "Bearer " + token;
    fetch("https://www.facebook.com/100018914979976/videos", {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onVideosChange(data);
      });
  };

  const updateToken = () => {
    if (userCode === null) {
      return;
    }
    let tokenUrl =
      "https://graph.facebook.com/v10.0/oauth/access_token?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FVivo&client_id=500102691353311&client_secret=de6da569969ab8ef4e700be28cf78a9a&code=" +
      userCode;
    fetch(tokenUrl)
      .then((response) => response.json())
      .then((data) => {
        updateVideos(data.access_token);
      });
  };

  useState(() => {
    updateToken();
  });

  return (
    <>
      {!userCode && (
        <button
          onClick={() => {
            window.location.href =
              "https://facebook.com/v10.0/dialog/oauth?client_id=500102691353311&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FVivo&state=23443";
          }}
        >
          Click
        </button>
      )}
      {videos &&
        videos.map((video, index) => {
          return (
            <div
              className="fb-video"
              data-href={
                "https://www.facebook.com/100018914979976/videos/" + video.id
              }
              data-width="1000"
              data-show-text="false"
              key={index}
            >
              <blockquote
                cite={
                  "https://developers.facebook.com/100018914979976/videos/" +
                  video.id +
                  "/"
                }
                className="fb-xfbml-parse-ignore"
              >
                <a
                  href={
                    "https://developers.facebook.com/100018914979976/videos/" +
                    video.id +
                    "/"
                  }
                >
                  Culto de Adoracion, 4 de Abril, 2021
                </a>
                <p></p>Posted by{" "}
                <a href="https://www.facebook.com/people/Iglesia-De-Dios-Ebenezer-Snellville/100018914979976/">
                  Iglesia De Dios Ebenezer - Snellville
                </a>{" "}
                on Sunday, April 4, 2021
              </blockquote>
            </div>
          );
        })}
    </>
  );
}
