import { useState, useEffect, useRef } from "react";
import { SessionType, SettingsType, TimeState } from "../types";
import Voice from "../assets/voice.mp4";

type PropsType = {
  settings: SettingsType;
  session: SessionType;
  setSession: React.Dispatch<React.SetStateAction<SessionType>>;
};

const Session: React.FC<PropsType> = ({ settings, session, setSession }) => {
  const [times, setTimes] = useState<TimeState>({
    pomodoro: settings.pomodoro * 60,
    longBreak: settings.longBreak * 60,
    shortBreak: settings.shortBreak * 60,
  });

  useEffect(() => {
    setTimes({
      pomodoro: settings.pomodoro * 60,
      longBreak: settings.longBreak * 60,
      shortBreak: settings.shortBreak * 60,
    });
  }, [settings]);

  const [timer, setTimer] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pauseTimer = () => {
    clearInterval(timer!);
    setTimer(null);
  };

  useEffect(() => {
    if (timer && session !== "pomodoro" && times[session] === 0) {
      const timeoutId = setTimeout(() => {
        setSession("pomodoro");
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [session, timer, times, setSession]);

  const startTimer = () => {
    const time = setInterval(() => {
      setTimes((prevTimes) => {
        const clone = { ...prevTimes };
        if (clone[session] > 0) {
          clone[session] = clone[session] - 1;
        }

        if (clone["pomodoro"] === 0) {
          pauseTimer();
        }

        if (clone[session] <= 3) {
          audioRef.current?.play();
          setTimeout(() => {
            audioRef.current?.pause();
          }, 3000);
        }
        return clone;
      });
    }, 1000);

    setTimer(time);
  };

  useEffect(() => {
    if (timer) {
      pauseTimer();
      startTimer();
    }
  }, [session]);

  const displayTime = () => {
    let minutes: string | number = Math.floor(times[session] / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let seconds: string | number = times[session] % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  const intervalStateHandler = () => {
    if (timer) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  const calculateDashoffset =
    753 -
    (753 * (settings[session] * 60 - times[session])) /
      (settings[session] * 60);
  const calculateDashoffsetTablet =
    1161 -
    (1161 * (settings[session] * 60 - times[session])) /
      (settings[session] * 60);

  const color =
    settings.color === "semi-red"
      ? "#F87070"
      : settings.color === "sky"
      ? "#70F3F8"
      : "#D881F8";

  return (
    <div className="w-[267.805px] md:w-[410px] h-[267.805px] md:h-[410px] my-auto rounded-full shadow-mobile-shadow bg-dark-blu flex justify-center items-center relative">
      <audio src={Voice} className="hidden" ref={audioRef}></audio>
      <svg
        width="267.805px"
        height="267.805px"
        className="absolute -rotate-90 md:hidden"
      >
        <circle
          id="circle1"
          cx="133.9025px"
          cy="133.9025px"
          r="120px"
          fill="transparent"
          stroke={color}
          strokeWidth="10px"
          strokeDasharray="753px"
          strokeDashoffset={calculateDashoffset}
        ></circle>
        <circle
          id="circle2"
          cx="133.9025px"
          cy="133.9025px"
          r="120px"
          fill="transparent"
        ></circle>
      </svg>
      <svg
        width="410px"
        height="410px"
        className="absolute -rotate-90 hidden md:block"
      >
        <circle
          id="circle1"
          cx="205px"
          cy="205px"
          r="185px"
          fill="transparent"
          stroke={color}
          strokeWidth="20px"
          strokeDasharray="1161px"
          strokeDashoffset={calculateDashoffsetTablet}
        ></circle>
        <circle
          id="circle2"
          cx="205px"
          cy="205px"
          r="185px"
          fill="transparent"
        ></circle>
      </svg>
      <div className="w-[238.049px] md:w-[366px] h-[238.049px] md:h-[366px] rounded-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-semi-grey text-[60px] md:text-[80px] font-bold tracking-[-4px] md:tracking-[-5px]">
          {displayTime()}
        </h1>
        <button
          className={`text-semi-grey text-sm md:mt-5 md:text-base font-bold border-none tracking-[13.125px] ${
            settings.font
          } ${
            settings.color === "semi-red"
              ? "hover:text-semi-red"
              : settings.color === "sky"
              ? "hover:text-sky"
              : "hover:text-violet"
          }`}
          onClick={intervalStateHandler}
        >
          {timer ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </div>
  );
};

export default Session;
