import { Panel, Session } from "./components";
import { Logo, Settings } from "./svg";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-semi-blu pt-8 pb-12">
      <Logo />
      <Panel />
      <Session />
      <div className="mt-auto">
        <Settings />
      </div>
    </div>
  );
}

export default App;
