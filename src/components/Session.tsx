import { useState, useEffect } from "react";
import { SessionType, SettingsType, TimeState } from "../types";

type PropsType = {
  settings: SettingsType;
  session: SessionType;
};

const Session: React.FC<PropsType> = ({ settings, session }) => {
  const [times, setTimes] = useState<TimeState>({
    pomodoro: settings.pomodoro * 60,
    longBreak: settings.longBreak * 60,
    shortBreak: settings.shortBreak * 60,
  });

  const [timer, setTimer] = useState<number | null>(null);

  const startTimer = () => {
    const time = setInterval(() => {
      setTimes((prevTimes) => {
        const clone = { ...prevTimes };
        clone[session] = clone[session] - 1;
        return clone;
      });
    }, 1000);

    setTimer(time);
  };

  const pauseTimer = () => {
    clearInterval(timer!);
    setTimer(null);
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

  const color =
    settings.color === "semi-red"
      ? "#F87070"
      : settings.color === "sky"
      ? "#70F3F8"
      : "#D881F8";

  return (
    <div className="w-[267.805px] h-[267.805px] mt-12 rounded-full bg-dark-blu flex justify-center items-center relative">
      <svg width="267.805px" height="267.805px" className="absolute -rotate-90">
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
      <div className="w-[238.049px] h-[238.049px] rounded-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-semi-grey text-[60px] font-bold tracking-[-4px]">
          {displayTime()}
        </h1>
        <button
          className={`text-semi-grey text-sm font-bold border-none tracking-[13.125px] ${settings.font}`}
          onClick={intervalStateHandler}
        >
          {timer ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </div>
  );
};

export default Session;
