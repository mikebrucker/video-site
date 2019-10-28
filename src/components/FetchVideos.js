import React, { Component } from "react";
import YoutubeVideo from "./YoutubeVideo";

export default class FetchVideos extends Component {
  componentDidMount() {
    // Fetch video data
  }

  render() {
    const fetchedVideosArray = [
      {
        id: "1234",
        youtubeUrl: "_sjMMszoGig",
        title: "Skydive B.I.G. - Jana B"
      },
      {
        id: "5678",
        youtubeUrl: "ceHdJgxsF8Q",
        title: "Skydive B.I.G. - Mike B"
      }
    ]; // fetched data

    const displayFetchedVideos =
      fetchedVideosArray && fetchedVideosArray.length > 0
        ? fetchedVideosArray.map(video => (
            <YoutubeVideo
              key={video.id
                .split("")
                .reverse()
                .join("")}
              youtubeUrl={video.youtubeUrl}
              title={video.title}
            />
          ))
        : "";

    return <div className="FetchVideos">{displayFetchedVideos}</div>;
  }
}
