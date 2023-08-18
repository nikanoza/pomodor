import { SessionType } from "../types";

type PropsType = {
  color: "semi-red" | "sky" | "violet";
  session: SessionType;
};

const Panel: React.FC<PropsType> = ({ color, session }) => {
  return (
    <div className="p-2 flex items-center rounded-[31.5px] mt-11 bg-dark-blu">
      <button
        className={`border-none px-5 py-4 text-xs  font-bold bg-${
          session === "pomodoro"
            ? color + " text-semi-blu"
            : "transparent text-semi-grey text-opacity-40"
        } rounded-[26.5px]`}
      >
        pomodoro
      </button>
      <button
        className={`border-none px-5 py-4 text-xs text-semi-blu font-bold bg-${
          session === "shortBreak"
            ? color + " text-semi-blu"
            : "transparent text-semi-grey text-opacity-40"
        } rounded-[26.5px]`}
      >
        short break
      </button>
      <button
        className={`border-none px-5 py-4 text-xs text-semi-blu font-bold bg-${
          session === "longBreak"
            ? color + " text-semi-blu"
            : "transparent text-semi-grey text-opacity-40"
        } rounded-[26.5px]`}
      >
        long break
      </button>
    </div>
  );
};

export default Panel;
