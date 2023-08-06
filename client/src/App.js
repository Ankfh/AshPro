import { Data } from "./components/Data";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./features/apiSlice";
import Topbar from "./components/Topbar";
import SignIn from "./components/Singup";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/" element={<SignIn />} />
            <Route path="/products" element={<Topbar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
