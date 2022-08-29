import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 1000,
            theme: {
              primary: "#4aed88",
            },
          },
          error: {
            duration: 2500,
          },
        }}
      />

      <Home />
    </div>
  );
}

export default App;
