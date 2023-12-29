import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { GalleryPage } from "../pages";

const galleryPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});

export default galleryPageRoute;
