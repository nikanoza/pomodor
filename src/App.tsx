import { useState } from "react";
import { Modal, Panel, Session } from "./components";
import { Logo, Settings } from "./svg";
import { SessionType, SettingsType, SettingsTypeKey } from "./types";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [session, setSession] = useState<SessionType>("pomodoro");
  const [settings, setSettings] = useState<SettingsType>({
    pomodoro: 25,
    longBreak: 15,
    shortBreak: 5,
    font: "kumbh",
    color: "semi-red",
  });

  const updateSettings = <T extends SettingsTypeKey>(
    property: T,
    value: SettingsType[T]
  ) => {
    const clone = { ...settings };
    clone[property] = value;
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-semi-blu pt-8 pb-12">
      <Logo />
      <Panel color={settings.color} session={session} />
      <Session settings={settings} session={session} />
      <div className="mt-auto">
        <Settings onClick={() => setShowModal(true)} />
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default App;
