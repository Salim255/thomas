import { BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Connect from "./components/Connect"
import Gallery from "./components/Gallery";
import SharedGalleryLayout from "./components/SharedGalleryLayout";
import SingleImage from "./components/SingleImage";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

import "./App.scss";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="connect" element={<Connect />} />
            <Route path="about" element={<About />} />

            <Route path="gallery" element={<SharedGalleryLayout />}>
              <Route index element={<Gallery />} />
              <Route path=":imageId" element={<SingleImage />} />
            </Route>

            <Route path="login" element={<Login setUser={setUser} />} />

            <Route
              path="dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
