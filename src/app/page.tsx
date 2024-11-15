'use client'
import Image from "next/image";
import { ContextProvider, useMyContext } from "./context/Context";
import Home from "./organisms/home";

export default function App() {

  return (
    <ContextProvider>
      <Home />
    </ContextProvider >
  );
}
