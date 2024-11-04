import React from "react";

interface ProgressBarProps {
  progress: number; // Current progress in seconds
  duration: number; // Total duration in seconds
  onSeek: (newTime: number) => void; // Function to handle seeking
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  duration,
  onSeek,
}) => {
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const newProgress = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
    onSeek(newProgress * duration); // Convert to seconds
  };

  const progressPercentage = (progress / duration) * 100;

  return (
    <div className="relative w-full h-1.5" onClick={handleSeek}>
      <div
        style={{ width: `${progressPercentage}%` }}
        className="absolute top-0 left-0 bg-white h-0.5 rounded-full"
      />
      <div
        style={{ left: `${progressPercentage}%` }}
        className="absolute -top-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
      />
      <div className="absolute top-0 left-0 w-full bg-white/30 h-0.5 rounded-full" />
    </div>
  );
};

export default ProgressBar;
