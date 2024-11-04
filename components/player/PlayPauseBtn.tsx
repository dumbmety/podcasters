interface PlayPauseBtnProps {
  isPlaying: boolean;
  onClick: () => void;
}

export default function PlayPauseBtn({
  isPlaying,
  onClick,
}: PlayPauseBtnProps) {
  return (
    <button
      onClick={onClick}
      className="w-[64px] h-[64px] bg-brand hover:bg-brand-hover transition-all rounded-full grid place-items-center"
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={28}
          height={28}
        >
          <path
            fillRule="evenodd"
            d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-[1px]"
        >
          <path
            d="M7.27343 24.0625C6.93766 24.0619 6.60784 23.9739 6.3164 23.8071C5.66015 23.4352 5.25218 22.7134 5.25218 21.9297V6.07032C5.25218 5.28446 5.66015 4.56477 6.3164 4.1929C6.61478 4.02142 6.95374 3.93323 7.29785 3.93756C7.64197 3.94189 7.9786 4.03857 8.27257 4.21751L21.8269 12.3309C22.1093 12.5081 22.3422 12.754 22.5036 13.0458C22.6651 13.3375 22.7497 13.6655 22.7497 13.9989C22.7497 14.3323 22.6651 14.6603 22.5036 14.952C22.3422 15.2438 22.1093 15.4898 21.8269 15.6669L8.27038 23.7825C7.96955 23.9644 7.62497 24.0612 7.27343 24.0625Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}
