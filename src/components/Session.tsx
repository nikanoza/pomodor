import { SessionType, SettingsType } from "../types";

type PropsType = {
  settings: SettingsType;
  session: SessionType;
};

const Session: React.FC<PropsType> = ({ settings, session }) => {
  return (
    <div className="mt-12 w-75 h-75 rounded-full bg-session flex justify-center items-center">
      <div className="w-[267.805px] h-[267.805px] rounded-full bg-dark-blu flex justify-center items-center">
        <div className="w-[238.049px] h-[238.049px] rounded-full border-[10px] border-semi-red flex flex-col justify-center items-center">
          <h1 className="text-semi-grey text-[80px] font-bold tracking-[-4px] kumbh">
            17:59
          </h1>
          <h3 className="text-semi-grey text-sm font-bold tracking-[13.125px] kumbh">
            PAUSE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Session;
