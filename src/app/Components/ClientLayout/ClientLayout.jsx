"use client";

import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DotMenu from "../DotMenu/DotMenu";
import Footer from "../Footer/Footer";

export default function ClientLayout({ children }) {
  const [openDot, setOpenDot] = useState(false);
  return (
    <>
      <NavBar setOpenDot={setOpenDot} openDot={openDot} />
      <DotMenu setOpenDot={setOpenDot} openDot={openDot} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
