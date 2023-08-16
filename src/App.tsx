import { useState } from "react";
import { Modal, Panel, Session } from "./components";
import { Logo, Settings } from "./svg";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col items-center bg-semi-blu pt-8 pb-12">
      <Logo />
      <Panel />
      <Session />
      <div className="mt-auto">
        <Settings onClick={() => setShowModal(true)} />
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default App;
