import React from "react";

interface TimeDisplayProps {
  progress: number;
  duration: number;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ progress, duration }) => {
  return (
    <div className="flex justify-between">
      <span className="text-xs font-light">{formatTime(progress)}</span>
      <span className="text-xs font-light">{formatTime(duration)}</span>
    </div>
  );
};

export default TimeDisplay;
