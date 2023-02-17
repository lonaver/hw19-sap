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
    path: "/hw19-sap/",
    element: <HomePage />,
  },
  publicPage: {
    id: 2,
    path: "/hw19-sap/public",
    element: <PublicPage />,
  },
  gallery: {
    id: 3,
    path: "/hw19-sap/gallery",
    element: <GalleryPage />,
  },
  contact: {
    id: 4,
    path: "/hw19-sap/contact",
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
        {
          <Route exact path="/hw19-sap/contact">
            <Route
              exact
              path="/hw19-sap/contact/:contactName"
              element={<UserSingle />}
            ></Route>
          </Route>
          // <Route exact path="/hw19-sap/contacts">
          //   <Route
          //     path="/hw19-sap/contacts/:contactName"
          //     component={() => <UserSingle />}
          //   />
          // </Route>
        }
        <Route path="*" element={<NoFound />} />
      </ReactRouterRouts>
    </div>
  );
};

export default Routs;
