import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";
import Player from "./components/Player";
import { useState, useEffect } from "react";

function App() {
  const [selectedNavigation, setSelectedNavigation] = useState('movies');
  const [showPlayer, setShowPlayer] = useState(false);

  const handleNavigationChange = (changedNavigation) => {
    setSelectedNavigation(changedNavigation);
  };

  const handleShowPlayer = (showPlayer) => {
    setShowPlayer(showPlayer)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setShowPlayer(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPlayer]);

  return (
    <div>
      {showPlayer ? (
        <Player />
      ) : (
        <>
          <NavigationBar onNavigationChange={handleNavigationChange} />
          <Content selectedNavigation={selectedNavigation} handleShowPlayer={handleShowPlayer} />
        </>
      )}
    </div>
  );
}

export default App;
