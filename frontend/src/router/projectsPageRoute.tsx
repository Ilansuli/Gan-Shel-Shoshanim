import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { ProjectsPage } from "../pages";

const projectsPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

export default projectsPageRoute;
