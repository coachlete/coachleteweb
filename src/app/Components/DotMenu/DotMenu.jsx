import React from "react";
import styles from "./DotMenu.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DotMenu({ setOpenDot, openDot }) {
  return (
    <AnimatePresence>
      {openDot && (
        <motion.div
          key="dotmenu"
          className={styles.DotMenuMain}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className={styles.DotMenuTop}>
            <div className={styles.DotMenuLogo}>
              <img src="../assets/Logo/coachlete1.png" alt="" />
            </div>
            <motion.div
              className={styles.DotMenuClose}
              whileHover={{ rotate: 90 }}
              transition={{ stiffness: 200, damping: 10 }}
              onClick={() => {
                setOpenDot(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vw"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                />
              </svg>
            </motion.div>
          </div>

          <div className={styles.DotSocialMediaLinks}>
            <ul>
              <Link
                href="https://www.facebook.com/profile.php?id=61570320432392"
                className={styles.SocialLinks1}
              >
                <li>
                  <div className={styles.Facebook}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2vw"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                      />
                    </svg>
                    Facebook
                  </div>
                </li>
              </Link>
              <Link
                href="https://www.instagram.com/coachlete_app?igsh=anVrY2Z1bmMzeHlu"
                className={styles.SocialLinks1}
              >
                <li>
                  <div className={styles.Instagram}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2vw"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                        clipRule="evenodd"
                      />
                    </svg>
                    Instagram
                  </div>
                </li>
              </Link>
              <Link
                href="https://www.youtube.com/@Coachlete-q9n"
                className={styles.SocialLinks1}
              >
                <li>
                  <div className={styles.Youtube}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2vw"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Youtube
                  </div>
                </li>
              </Link>
              <li>
                <div className={styles.Twitter}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2vw"
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
                  Twitter
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.DotPhoneNo}>
            <div className={styles.PhoneNumber}>+91 8105397773</div>
            <div className={styles.Email}>
              {" "}
              <Link
                href="mailto:support@coachlete.co.in"
                className={styles.SocialLinks}
              >
                support@coachlete.co.in
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
