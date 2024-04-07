import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [selectedNavigation, setSelectedNavigation] = useState('movies');

  const handleNavigationChange = (changedNavigation) => {
    setSelectedNavigation(changedNavigation);
  };

  return (
    <div>
      <NavigationBar onNavigationChange={handleNavigationChange} />
      <Content selectedNavigation={selectedNavigation} />
    </div>
  );
}

export default App;
