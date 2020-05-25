import React from 'react';
import { AppContextProvider } from './Context/AppContext';
import MainRouter from './Router/MainRouter';
// How to use fontawesome in react
// import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { faSquare } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <AppContextProvider>
      <MainRouter />
    </AppContextProvider>
  );
}

export default App;

// export default () => <FontAwesomeIcon icon={faCamera} size="2x" />
// FontAwesomeIcon 컴포넌트에는
// fixedWidth, inverse, listItem, rotation, flip, spin, purse, border, pull 등 다양한 prop가 존재
