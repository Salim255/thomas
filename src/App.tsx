import { RouterProvider,} from "react-router-dom";

import "./App.scss";
import AppRoutes from "./app-routes/AppRoute";

function App() {

  return (
    <RouterProvider router={AppRoutes}></RouterProvider>
    
    
/*     <>
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
    </> */
  )
}

export default App
