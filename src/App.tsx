// src/App.tsx
import React from "react";
import ScreenShare from "./components/ScreenShare";
import { WebSocketProvider } from "./components/WebSocketProvider";

const App: React.FC = () => {
  return (

    <WebSocketProvider url="ws://0.0.0.0:9084">
{/* <WebSocketProvider url="wss://rein-backend-iept.onrender.com"> */}
      <div className="container mx-auto p-4">
        <ScreenShare />
      </div>
    </WebSocketProvider>
  );
};

export default App;