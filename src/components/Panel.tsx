const Panel = () => {
  return (
    <div className="p-2 flex items-center rounded-[31.5px] mt-11 bg-dark-blu">
      <button className="border-none px-5 py-4 text-xs text-semi-blu font-bold bg-semi-red rounded-[26.5px]">
        pomodoro
      </button>
      <button className="border-none px-5 py-4 text-xs text-semi-blu font-bold bg-semi-red rounded-[26.5px]">
        short break
      </button>
      <button className="border-none px-5 py-4 text-xs text-semi-blu font-bold bg-semi-red rounded-[26.5px]">
        long break
      </button>
    </div>
  );
};

export default Panel;
