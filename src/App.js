import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import General from "./Components/General/General";
import Table from "./Components/Table/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <General/>,
  },
  {
    path: "/table",
    element: <Table/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
