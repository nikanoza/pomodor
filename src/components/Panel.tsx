import { SessionType } from "../types";

type PropsType = {
  color: "semi-red" | "sky" | "violet";
  session: SessionType;
  setSession: React.Dispatch<React.SetStateAction<SessionType>>;
};

const Panel: React.FC<PropsType> = ({ color, session, setSession }) => {
  return (
    <div className="p-2 flex items-center rounded-[31.5px] mt-11 bg-dark-blu md:mt-14">
      <button
        className={`border-none px-5 md:px-6 py-4 text-xs md:text-sm  font-bold bg-${
          session === "pomodoro"
            ? color + " text-semi-blu"
            : "transparent text-semi-grey text-opacity-40 hover:text-opacity-0"
        } rounded-[26.5px]`}
        onClick={() => setSession("pomodoro")}
      >
        pomodoro
      </button>
      <button
        className={`border-none px-5 py-4 text-xs text-semi-blu font-bold bg-${
          session === "shortBreak"
            ? color + " text-semi-blu"
            : "transparent text-semi-grey text-opacity-40 hover:text-opacity-0"
        } rounded-[26.5px]`}
        onClick={() => setSession("shortBreak")}
      >
        short break
      </button>
      <button
        className={`border-none px-5 py-4 text-xs text-semi-blu font-bold bg-${
          session === "longBreak"
            ? color + " text-semi-blu"
            : "transparent text-semi-grey text-opacity-40 hover:text-opacity-0"
        } rounded-[26.5px]`}
        onClick={() => setSession("longBreak")}
      >
        long break
      </button>
    </div>
  );
};

export default Panel;
