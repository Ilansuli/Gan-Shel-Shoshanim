import { Route, redirect } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { HomePage } from "../pages";

const catchAllRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: HomePage,
});

export default catchAllRoute;
