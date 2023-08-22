import { useRef } from "react";
import { Check, Close, DownArrow, UpArrow } from "../svg";
import { SettingsType, SettingsTypeKey } from "../types";

type PropsType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateSettings: <T extends SettingsTypeKey>(
    property: T,
    value: SettingsType[T]
  ) => void;
  settings: SettingsType;
};

const Modal: React.FC<PropsType> = ({
  setShowModal,
  updateSettings,
  settings,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === modalRef.current) {
      setShowModal((state) => !state);
    }
  };
  return (
    <div
      onClick={closeHandler}
      ref={modalRef}
      className="w-screen h-screen absolute top-0 left-0 bg-modal flex flex-col justify-center items-center z-40 px-6"
    >
      <div className="pt-9 pb-14 w-full bg-light rounded-3xl">
        <div className="px-6 flex justify-between items-center">
          <h3 className="text-[28px] text-dark-blu font-bold">Settings</h3>
          <Close onClick={() => setShowModal((state) => !state)} />
        </div>
        <div className="w-full h-[1px] bg-[#E3E1E1] mt-6"></div>
        <div className="px-6">
          <h3 className="mt-6 text-xs text-dark-blu font-bold tracking-[5px] text-center">
            TIME (MINUTES)
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className=" flex items-center justify-between gap-20">
              <h3 className="text-xs text-semi-blu font-bold opacity-40">
                pomodoro
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-semi-white">
                <h3 className="text-sm text-semi-blu font-bold">
                  {settings.pomodoro}
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <UpArrow
                    onClick={() => {
                      if (settings.pomodoro < 60)
                        updateSettings("pomodoro", settings.pomodoro + 1);
                    }}
                  />
                  <DownArrow
                    onClick={() => {
                      if (settings.pomodoro > 1)
                        updateSettings("pomodoro", settings.pomodoro - 1);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between gap-20">
              <h3 className="text-xs text-semi-blu font-bold opacity-40">
                short break
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-semi-white">
                <h3 className="text-sm text-semi-blu font-bold">
                  {settings.shortBreak}
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <UpArrow
                    onClick={() => {
                      if (settings.shortBreak < 10)
                        updateSettings("shortBreak", settings.shortBreak + 1);
                    }}
                  />
                  <DownArrow
                    onClick={() => {
                      if (settings.shortBreak > 1)
                        updateSettings("shortBreak", settings.shortBreak - 1);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between gap-20">
              <h3 className="text-xs text-semi-blu font-bold opacity-40">
                long break
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-semi-white">
                <h3 className="text-sm text-semi-blu font-bold">
                  {settings.longBreak}
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <UpArrow
                    onClick={() => {
                      if (settings.longBreak < 15)
                        updateSettings("longBreak", settings.longBreak + 1);
                    }}
                  />
                  <DownArrow
                    onClick={() => {
                      if (settings.longBreak > 10)
                        updateSettings("longBreak", settings.longBreak - 1);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E3E1E1] mt-6"></div>
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-xs text-dark-blu font-bold tracking-[5px] text-center">
              FONT
            </h3>
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => updateSettings("font", "kumbh")}
                className={`border-none w-10 h-10 rounded-full text-base  font-base flex items-center justify-center kumbh ${
                  settings.font === "kumbh"
                    ? "text-light bg-dark-blu"
                    : "text-semi-blu text-opacity-70 bg-semi-white"
                }`}
              >
                Aa
              </button>
              <button
                onClick={() => updateSettings("font", "roboto")}
                className={`border-none w-10 h-10 rounded-full text-base  font-base flex items-center justify-center roboto ${
                  settings.font === "roboto"
                    ? "text-light bg-dark-blu"
                    : "text-semi-blu text-opacity-70 bg-semi-white"
                }`}
              >
                Aa
              </button>
              <button
                onClick={() => updateSettings("font", "mono")}
                className={`border-none w-10 h-10 rounded-full text-base  font-base flex items-center justify-center mono ${
                  settings.font === "mono"
                    ? "text-light bg-dark-blu"
                    : "text-semi-blu text-opacity-70 bg-semi-white"
                }`}
              >
                Aa
              </button>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E3E1E1] mt-6"></div>
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-xs text-dark-blu font-bold tracking-[5px] text-center">
              COLOR
            </h3>
            <div className="flex items-center gap-4 mt-4">
              <button
                className="border-none w-10 h-10 rounded-full  bg-semi-red flex items-center justify-center"
                onClick={() => updateSettings("color", "semi-red")}
              >
                {settings.color === "semi-red" ? <Check /> : null}
              </button>
              <button
                className="border-none w-10 h-10 rounded-full  bg-sky flex items-center justify-center"
                onClick={() => updateSettings("color", "sky")}
              >
                {settings.color === "sky" ? <Check /> : null}
              </button>
              <button
                className="border-none w-10 h-10 rounded-full  bg-violet flex items-center justify-center"
                onClick={() => updateSettings("color", "violet")}
              >
                {settings.color === "violet" ? <Check /> : null}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowModal((state) => !state)}
        className={`-mt-[26px] border-none px-12 py-4 text-xs text-light font-bold bg-semi-red rounded-[26.5px] text-${settings.font}`}
      >
        Return
      </button>
    </div>
  );
};

export default Modal;
