import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { HomePage } from "../pages";

const homePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export default homePageRoute;
