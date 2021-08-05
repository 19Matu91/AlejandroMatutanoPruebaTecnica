import { useReducer } from "react";
import AppReducer from "./reducers/AppReducer";
import AppContext from "./contexts/AppContext";
import NavigationRouter from "./navigations/NavigationRouter";

function App() {

  const [app, dispatchApp] = useReducer(AppReducer, {
    search: ''
  });

  return (
    <AppContext.Provider value={{ app, dispatchApp }}>
      <NavigationRouter />
    </AppContext.Provider>
  );
}

export default App;
