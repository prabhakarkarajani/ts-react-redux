import { Provider } from "react-redux";
import { store } from "../state";
import RespositoriesList from "./RespositoriesList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <h1>Search For a Packages</h1>
        <RespositoriesList />
      </>
    </Provider>
  );
}

export default App;
