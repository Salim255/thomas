// routes.js
import SharedLayout from "./../shared/components/SharedLayout";
import Home from "../features/home/Home";
import Error from "./../shared/components/error/Error";
import About from "./../features/about/About";
import Connect from "./../features/contact/Contact";
import Gallery from "./../features/gallery/Gallery";
import SharedGalleryLayout from "./../features/gallery/components/SharedGalleryLayout";
import SingleImage from "./../features/gallery/components/SingleImage";
import Login from "./../features/auth/Login";
import type { RouteObject } from "react-router-dom";


export const routes: RouteObject[] = [
  {
    path: "/",
    Component: SharedLayout,
    children: [
      { index: true, Component: Home },
      { path: "connect", Component: Connect  },
      { path: "about", Component: About },

      {
        path: "gallery",
        Component: SharedGalleryLayout ,
        children: [
          { index: true, Component: Gallery },
          { path: ":imageId", Component: SingleImage },
        ],
      },

      { path: "login", Component: Login },
      { path: "*", Component: Error  },
    ],
  },
];
