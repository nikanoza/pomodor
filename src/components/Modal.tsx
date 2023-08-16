import { useRef } from "react";
import { Close, DownArrow, UpArrow } from "../svg";

type PropsType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<PropsType> = ({ setShowModal }) => {
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
      className="w-screen h-screen absolute top-0 left-0 bg-modal flex flex-col justify-center items-center"
    >
      <div className="pt-9 pb-14 bg-light rounded-3xl">
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
                <h3 className="text-sm text-semi-blu font-bold">25</h3>
                <div className="flex flex-col gap-2 mt-2">
                  <UpArrow />
                  <DownArrow />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between gap-20">
              <h3 className="text-xs text-semi-blu font-bold opacity-40">
                short break
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-semi-white">
                <h3 className="text-sm text-semi-blu font-bold">5</h3>
                <div className="flex flex-col gap-2 mt-2">
                  <UpArrow />
                  <DownArrow />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between gap-20">
              <h3 className="text-xs text-semi-blu font-bold opacity-40">
                long break
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-semi-white">
                <h3 className="text-sm text-semi-blu font-bold">15</h3>
                <div className="flex flex-col gap-2 mt-2">
                  <UpArrow />
                  <DownArrow />
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
              <button className="border-none w-10 h-10 rounded-full text-base text-semi-blu font-base text-opacity-70 bg-semi-white flex items-center justify-center kumbh">
                Aa
              </button>
              <button className="border-none w-10 h-10 rounded-full text-base text-semi-blu font-base text-opacity-70 bg-semi-white flex items-center justify-center roboto">
                Aa
              </button>
              <button className="border-none w-10 h-10 rounded-full text-base text-semi-blu font-base text-opacity-70 bg-semi-white flex items-center justify-center mono">
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
              <button className="border-none w-10 h-10 rounded-full  bg-semi-red flex items-center justify-center kumbh"></button>
              <button className="border-none w-10 h-10 rounded-full  bg-sky flex items-center justify-center roboto"></button>
              <button className="border-none w-10 h-10 rounded-full  bg-violet flex items-center justify-center mono"></button>
            </div>
          </div>
        </div>
      </div>
      <button className="-mt-[26px] border-none px-12 py-4 text-xs text-light font-bold bg-semi-red rounded-[26.5px]">
        Apply
      </button>
    </div>
  );
};

export default Modal;
