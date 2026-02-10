import { BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "./shared/components/SharedLayout";
import Home from "./features/home/Home";
import Error from "./shared/components/error/Error";
import Dashboard from "./features/dashboard/Dashboard";
import About from "./features/about/About";
import Connect from "./features/contact/Contact"
import Gallery from "./features/gallery/Gallery";
import SharedGalleryLayout from "./features/gallery/components/SharedGalleryLayout";
import SingleImage from "./features/gallery/components/SingleImage";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import Login from "./features/auth/Login";

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
