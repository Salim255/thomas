import "./App.scss";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./app-routes/AppRoute";

function App() {
  return<RouterProvider router={AppRoutes}></RouterProvider>
}
export default App
