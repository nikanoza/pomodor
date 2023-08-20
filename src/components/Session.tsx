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

  return (
    <div className="mt-12 w-75 h-75 rounded-full bg-session flex justify-center items-center">
      <div className="w-[267.805px] h-[267.805px] rounded-full bg-dark-blu flex justify-center items-center">
        <div className="w-[238.049px] h-[238.049px] rounded-full border-[10px] border-semi-red flex flex-col justify-center items-center">
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
    </div>
  );
};

export default Session;
