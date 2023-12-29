import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { ProjectPage } from "../pages";

const projectPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/$projectId",
  component: ProjectPage,
});

export default projectPageRoute;
