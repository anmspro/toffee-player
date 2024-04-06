import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [selectedNavigation, setSelectedNavigation] = useState('movies');
  function onNavigationChange(changedNavigation) {
    setSelectedNavigation(prevState => changedNavigation);
    console.log(selectedNavigation)
  }
  return (
    <div className="">
      <NavigationBar onNavigationChange={onNavigationChange} />
      <Content selectedNavigation={selectedNavigation} />
    </div>
  );
}

export default App;
