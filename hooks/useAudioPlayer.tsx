import { useRef, useState } from "react";
import ReactPlayer from "react-player";

const useAudioPlayer = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const onPlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const onSeek = (newTime: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(newTime);
    }
  };

  const onProgress = (progressData: { playedSeconds: number }) =>
    setProgress(progressData.playedSeconds);

  const onDuration = (duration: number) => setDuration(duration);

  const onReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
  };

  return {
    duration,
    isPlaying,
    onDuration,
    onPlayPause,
    onProgress,
    onSeek,
    playerRef,
    progress,
    onReset,
  };
};

export default useAudioPlayer;
