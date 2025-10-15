import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.Footermain}>
      <div className={styles.FooterWrapper}>
        <div className={styles.FooterTop}>
          <div className="FooterTopLeft">
            <div className={styles.Logo}>
              {/* ✅ Use absolute path from /public to avoid hydration errors */}
              <img src="/assets/Logo/coachlete1.png" alt="Coachlete Logo" />
            </div>
          </div>

          <div className={styles.FooterTopRight}>
            {/* Office Section */}
            <div className={styles.officeAddressWrapper}>
              <div className={styles.Officehead}>
                <span>Office</span>
              </div>

              <div className={styles.OfficeAddress}>
                <span>
                  No 116, 4th cross, Prakruthinagar, Bharathnagar - 560091
                </span>
              </div>

              <div className={styles.Officemail}>
                <Link
                  href="mailto:support@coachlete.co.in"
                  className={styles.SocialLinks}
                >
                  support@coachlete.co.in
                </Link>
              </div>

              <div className={styles.OfficePhone}>+91 8105397773</div>
            </div>

            {/* Links Section */}
            <div className={styles.Links}>
              <div className={styles.LinkHead}>
                <span>Links</span>
              </div>

              <div className={styles.LinksList}>
                <ul>
                  <Link href="/" className={styles.aLink}>
                    <li>Home</li>
                  </Link>
                  <Link href="/About" className={styles.aLink}>
                    <li>About Us</li>
                  </Link>
                  <Link href="/Contactus" className={styles.aLink}>
                    <li>Contact Us</li>
                  </Link>
                  <Link href="/TermsCondition" className={styles.aLink}>
                    <li>Terms & Conditions</li>
                  </Link>
                  <Link href="/PrivacyPolicy" className={styles.aLink}>
                    <li>Privacy Policy</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Social Section */}
            <div className={styles.Links}>
              <div className={styles.LinkHead}>
                <span>Stay Connected</span>
              </div>

              <div className={styles.LinksList}>
                <ul>
                  <Link
                    href="https://www.instagram.com/coachlete_app?igsh=anVrY2Z1bmMzeHlu"
                    className={styles.SocialLinks}
                  >
                    <li className={styles.socialItem}>
                      <svg
                        className={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                        />
                      </svg>
                      Instagram
                    </li>
                  </Link>

                  <Link
                    href="https://www.facebook.com/profile.php?id=61570320432392"
                    className={styles.SocialLinks}
                  >
                    <li className={styles.socialItem}>
                      <svg
                        className={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                        />
                      </svg>
                      Facebook
                    </li>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@Coachlete-q9n"
                    className={styles.SocialLinks}
                  >
                    <li className={styles.socialItem}>
                      <svg
                        className={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                        />
                      </svg>
                      YouTube
                    </li>
                  </Link>

                  <li className={styles.socialItem}>
                    <svg
                      className={styles.svg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
                      />
                    </svg>
                    Twitter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.hrWrapper}>
          <hr className={styles.hr} />
        </div>

        <div className={styles.FooterBottom}>
          <div className={styles.Allrights}>
            <span>© 2025 Coachlete. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
