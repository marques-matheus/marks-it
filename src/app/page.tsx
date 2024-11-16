'use client'
import { ContextProvider, useMyContext } from "./context/Context";

import Header from "./organisms/header";
import Home from "./organisms/home/home";

export default function App() {

  return (
    <ContextProvider>
      <Header />
      <Home />
     
    </ContextProvider >
  );
}
