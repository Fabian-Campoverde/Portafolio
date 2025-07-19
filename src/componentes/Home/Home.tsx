import React from "react";
import {Header} from "../Header/Header"
import type { ReactNode } from "react";

interface Props  {
    children: ReactNode;
}

export const Home = ({children}: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
    
  )
}