'use client'
import { ContextProvider, useMyContext } from "./context/Context";
import About from "./organisms/about";

import Header from "./organisms/header";
import Home from "./organisms/home";

export default function App() {

  return (
    <ContextProvider>

      <Header />
      <Home />
      <About />

    </ContextProvider >
  );
}
