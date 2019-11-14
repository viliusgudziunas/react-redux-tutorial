import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
// import CakeContainer from "./components/CakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import HooksWaffleContainer from "./components/HooksWaffleContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <HooksWaffleContainer />
        {/* <CakeContainer /> */}
        {/* <IceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
