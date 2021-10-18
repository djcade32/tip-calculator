import Card from "./components/Card/Card";
import TipInput from "./components/TipInput/TipInput";
import TipResults from "./components/TipResults/TipResults";

function App() {
  return (
    <Card>
      <TipInput />
      <TipResults></TipResults>
    </Card>
  );
}

export default App;
