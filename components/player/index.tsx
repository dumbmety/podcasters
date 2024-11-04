"use client";

import ReactPlayer from "react-player";
import useAudioPlayer from "@/hooks/useAudioPlayer";

import PlayPauseBtn from "./PlayPauseBtn";
import TimeDisplay from "./TimeDisplay";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

export default function Player({ url }: { url: string }) {
  const {
    duration,
    isPlaying,
    onDuration,
    onPlayPause,
    onProgress,
    onSeek,
    playerRef,
    progress,
    onReset,
  } = useAudioPlayer();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    onReset();
  }, [url]);

  return isClient ? (
    <>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={isPlaying}
        onProgress={onProgress}
        onDuration={onDuration}
        onReady={(e) => console.log("onReady:", e)}
        onBuffer={() => console.log("onBuffer:")}
        onBufferEnd={() => console.log("onBufferEnd:")}
        width="0"
        height="0"
        progressInterval={10}
      />
      <section className="flex space-x-8 items-center">
        <PlayPauseBtn isPlaying={isPlaying} onClick={onPlayPause} />

        <div className="flex-1 space-y-0.5">
          <ProgressBar
            progress={progress}
            duration={duration}
            onSeek={onSeek}
          />
          <TimeDisplay duration={duration} progress={progress} />
        </div>
      </section>
    </>
  ) : null;
}
