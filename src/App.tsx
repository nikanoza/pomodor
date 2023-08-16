import { Panel } from "./components";
import { Logo } from "./svg";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-semi-blu pt-8 pb-12">
      <Logo />
      <Panel />
    </div>
  );
}

export default App;
