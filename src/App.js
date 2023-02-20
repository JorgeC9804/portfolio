import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import Main from "./pages/Main";
import Header from "./header/Header";
import "./App.css";

/**
 * sobre esta piedra contruire mi reino
 */

function App() {
  return (
    <ContextProvider>
      <Browser>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/next" element={<>Next</>} />
          <Route path="/next-2" element={<>Next 2</>} />
          <Route path="*" element={<div>error</div>} />
        </Routes>
      </Browser>
    </ContextProvider>
  );
}

export default App;
