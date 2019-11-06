import React from "react";
import "../../scss/YoutubeVideo.scss";

function YoutubeVideo({ youtubeUrl, title }) {
  return (
    <div className="YoutubeVideo">
      <div className="border">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeUrl}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default YoutubeVideo;
