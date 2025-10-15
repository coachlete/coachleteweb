"use client";

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { motion, FramerMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavBar({ setOpenDot, openDot }) {
  function handleDotMenu() {
    setOpenDot(true);
  }

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className={styles.NavBarmain}>
        <div
          className={`${
            mobileMenu ? styles.NavBarWrapperOpen : styles.NavBarWrapper
          }`}
        >
          <div className={styles.NavBarLogo}>
            <img src="/assets/Logo/coachlete1.png" alt="" />
          </div>
          <div className={styles.NavBarLinks}>
            <ul>
              <Link href={"/"} id={styles.links}>
                <li>HOME</li>
              </Link>
              <Link href={"/About"} id={styles.links}>
                <li>ABOUT US</li>
              </Link>
              <Link href={"/Contactus"} id={styles.links}>
                <li>CONTACT</li>
              </Link>
              <li onClick={handleDotMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.menuIcon}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div
            className={styles.MobileMenuIcon}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            {mobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.mobileMenu}
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.mobileMenu}
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                />
              </svg>
            )}
          </div>
        </div>
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              key="mobilemenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className={styles.MobileMenuLinksWrapper}
            >
              <div className={styles.MobileMenuLinks}>
                <ul>
                  <Link
                    href={"/"}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                    id={styles.links}
                  >
                    <li>HOME</li>
                  </Link>

                  <Link
                    href={"/About"}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                    id={styles.links}
                  >
                    <li>ABOUT US</li>
                  </Link>
                  <Link
                    href={"/Contactus"}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                    id={styles.links}
                  >
                    <li>CONTACT</li>
                  </Link>
                </ul>
              </div>

              <hr className={styles.hr} />

              <div className={styles.MobileSocialMediaLinks}>
                <ul>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61570320432392"
                    className={styles.SocialLinks}
                  >
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8vw"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                        />
                      </svg>
                    </li>
                  </Link>
                  <Link
                    href="https://www.instagram.com/coachlete_app?igsh=anVrY2Z1bmMzeHlu"
                    className={styles.SocialLinks}
                  >
                    <li>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8vw"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@Coachlete-q9n"
                    className={styles.SocialLinks}
                  >
                    <li>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8vw"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </Link>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6vw"
                      viewBox="0 0 14 14"
                    >
                      <g fill="none">
                        <g clipPath="url(#SVGG1Ot4cAD)">
                          <path
                            fill="currentColor"
                            d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                          />
                        </g>
                        <defs>
                          <clipPath id="SVGG1Ot4cAD">
                            <path fill="#fff" d="M0 0h14v14H0z" />
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
