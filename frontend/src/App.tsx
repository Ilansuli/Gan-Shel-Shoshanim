import { useEffect } from "react";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";

function App() {
  const lang = document.documentElement.lang;
  useEffect(() => {
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);
  return (
    <>
      <MainHeader />
      <Outlet />
      <ScrollRestoration getKey={(location) => location.pathname} />
      <MainFooter />
    </>
  );
}

export default App;
