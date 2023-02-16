import React from "react";
import { Route, Routes as ReactRouterRouts } from "react-router-dom";

import Nav from "../components/navigation/Nav";
import HomePage from "../pages/home/Home.page";
import PublicPage from "../pages/public/Public.page";
import GalleryPage from "../pages/gallery/Gallery.page";
import ContactPage from "../pages/contact/Contact.page";
import NoFound from "../pages/no-found/NoFound";
import UserSingle from "../pages/user-single/UserSingle";

export const appRouts = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  publicPage: {
    id: 2,
    path: "/public",
    element: <PublicPage />,
  },
  gallery: {
    id: 3,
    path: "/gallery",
    element: <GalleryPage />,
  },
  contact: {
    id: 4,
    path: "/contact",
    element: <ContactPage />,
  },
};

const Routs = () => {
  return (
    <div>
      <Nav />

      <ReactRouterRouts>
        {Object.values(appRouts).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
        <Route path="/contacts">
          <Route path=":contactName" element={<UserSingle />}></Route>
        </Route>
        <Route path="*" element={<NoFound />} />
      </ReactRouterRouts>
    </div>
  );
};

export default Routs;
