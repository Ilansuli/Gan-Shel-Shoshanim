import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { SubGalleryPage } from "../pages";

const subGalleryPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/gallery/category/$categoryId",
  component: SubGalleryPage,
});

export default subGalleryPageRoute;
