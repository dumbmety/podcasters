export default function Player() {
  return (
    <section className="flex space-x-8 items-center">
      <button className="w-[64px] h-[64px] bg-brand hover:bg-brand-hover transition-all rounded-full grid place-items-center">
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
      </button>

      <div className="flex-1 space-y-0.5">
        <div className="relative w-full h-1.5">
          <div className="absolute top-0 left-0 w-[25%] bg-white h-0.5 rounded-full" />
          <div className="absolute -top-1/2 left-[25%] transform -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
          <div className="absolute top-0 left-0 w-full bg-white/30 h-0.5 rounded-full" />
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-light">29:31</span>
          <span className="text-xs font-light">51:31</span>
        </div>
      </div>
    </section>
  );
}
