import {
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Scale,
  Lock,
} from "lucide-react";
import styles from "./page.module.css";

function TermsConditions() {
  return (
    <div className={styles.termsContainer}>
      <header className={styles.termsHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerIcon}>
            <Scale size={48} />
          </div>
          <h1 className={styles.pageTitle}>Terms and Conditions</h1>
          <p className={styles.headerSubtitle}>
            Please read these terms carefully before using our platform
          </p>
          <div className={styles.lastUpdated}>
            <AlertCircle size={16} />
            <span>Last updated: September 23, 2025</span>
          </div>
        </div>
      </header>

      <main className={styles.termsMain}>
        <div className={styles.contentWrapper}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Quick Navigation</h3>
              <nav className={styles.tocNav}>
                <a href="#acceptance" className={styles.tocLink}>
                  1. Acceptance of Terms
                </a>
                <a href="#privacy" className={styles.tocLink}>
                  2. Privacy Policy
                </a>
                <a href="#eligibility" className={styles.tocLink}>
                  3. Eligibility and Account Registration
                </a>
                <a href="#services" className={styles.tocLink}>
                  4. Our Services
                </a>
                <a href="#permitteduse" className={styles.tocLink}>
                  5. Permitted Use and Prohibited Conduct
                </a>
                <a href="#ServiceBooking" className={styles.tocLink}>
                  6. Services, Bookings, and Role of Coachlete
                </a>
                <a href="#payments" className={styles.tocLink}>
                  7. Payments
                </a>
                <a href="#Cancellation" className={styles.tocLink}>
                  8. Cancellations and Refunds
                </a>
                <a href="#userContent" className={styles.tocLink}>
                  9. User Content and License
                </a>
                <a href="#thirdparty" className={styles.tocLink}>
                  10. Third-Party Links and Services
                </a>
                <a href="#access" className={styles.tocLink}>
                  11. Access, Availability, and Security
                </a>
                <a href="#mobileappstore" className={styles.tocLink}>
                  12. Mobile App Store Terms
                </a>
                <a href="#dispute" className={styles.tocLink}>
                  13. Dispute Resolution and Governing Law
                </a>
                <a href="#limitedofliability" className={styles.tocLink}>
                  14. Limitation of Liability
                </a>
                <a href="#indemnity" className={styles.tocLink}>
                  15. Indemnity
                </a>
                <a href="#suspension" className={styles.tocLink}>
                  16. Suspension and Termination
                </a>
                <a href="#governing" className={styles.tocLink}>
                  17. Governing Law and Dispute Resolution
                </a>
                <a href="#changestoterms" className={styles.tocLink}>
                  18. Changes to These Terms
                </a>

                <a href="#contact" className={styles.tocLink}>
                  19. Contact Us
                </a>
              </nav>
            </div>

            {/* <div className={styles.helpCard}>
              <div className={styles.helpIcon}>
                <FileText size={32} />
              </div>
              <h4>Need Help?</h4>
              <p>
                If you have questions about these terms, our legal team is here
                to help.
              </p>
              <a href="/contact" className={styles.helpButton}>
                Contact Legal Team
              </a>
            </div> */}
          </aside>

          {/* Main Terms Content */}
          <article className={styles.termsContent}>
            {/* Intro */}
            <div className={styles.introBox}>
              <div className={styles.introIcon}>
                <Shield size={32} />
              </div>
              <div className={styles.introText}>
                <h2>Welcome to Coachlete</h2>
                <p>
                  Welcome to <strong>Coachlete</strong>, operated by{" "}
                  <strong>
                    Lunovia Innovation and Technology Private Limited
                  </strong>
                  . These Terms and Conditions (“Terms”) govern your access to
                  and use of the Coachlete mobile application (“App”). By
                  downloading, accessing, or using the App, you agree to these
                  Terms.
                </p>
              </div>
            </div>

            {/* Sections */}
            <section id="acceptance" className={styles.section}>
              <div className={styles.sectionNumber}>01</div>
              <h2>Acceptance of Terms</h2>
              <p>
                These Terms and Conditions of Use (“Terms”) govern your access
                to and use of the Coachlete mobile application and related
                websites (collectively, the “Platform”). By installing,
                accessing, or using the Platform, you agree to be bound by these
                Terms and our Privacy Policy.
              </p>
              {/* <div className={styles.highlightBox}>
                <CheckCircle size={20} />
                <p>
                  These Terms constitute a legally binding agreement between you
                  and Lunovia Innovation and Technology Private Limited.
                </p>
              </div> */}
            </section>

            <section id="privacy" className={styles.section}>
              <div className={styles.sectionNumber}>02</div>
              <h2>Privacy Policy</h2>
              <div className={styles.privacyBox}>
                <Lock size={24} />
                <div>
                  <p>
                    Your use of the Platform is also governed by our Privacy
                    Policy . Please review it carefully.
                  </p>
                  <a href="PrivacyPolicy" className={styles.privacyLink}>
                    View Privacy Policy →
                  </a>
                </div>
              </div>
            </section>

            <section id="eligibility" className={styles.section}>
              <div className={styles.sectionNumber}>03</div>
              <h2>Eligibility and Account Registration</h2>
              <p>
                To access certain features, you must create an account using
                your name, mobile number and/or email address, and a password.
                By registering, you confirm that you are legally capable of
                entering into a binding contract. You are responsible for
                safeguarding your password and for all activity under your
                account. Notify us immediately of any unauthorized use.
                Coachlete does not offer social logins; authentication is
                limited to the methods provided in the app.
              </p>
              <p>
                Coachlete does not offer social logins; authentication is
                limited to the methods provided in the app.
              </p>
            </section>

            <section id="services" className={styles.section}>
              <div className={styles.sectionNumber}>04</div>
              <h2>Our Services</h2>
              <p>
                Coachlete is a platform that connects players with coaches,
                helping users book verified coaching sessions, trials, and
                tournaments nearby. We act only as a facilitator and do not
                directly employ or control the coaches listed on the platform.
              </p>
              <ul className={styles.listStyled}>
                <li>Coaches are independent service providers.</li>
                <li>
                  Ratings and reviews are for guidance only, not professional
                  guarantees.
                </li>
                <li>
                  Coachlete does not offer direct coaching or health advice.
                </li>
              </ul>
            </section>

            <section id="permitteduse" className={styles.section}>
              <div className={styles.sectionNumber}>05</div>
              <h2>Permitted Use and Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul className={styles.listStyled}>
                <li>
                  Post content that is unlawful, harmful, defamatory, obscene,
                  hateful, infringing, or invasive of privacy.
                </li>
                <li>
                  {" "}
                  Impersonate any person or entity, or misrepresent your
                  affiliation.
                </li>
                <li>
                  Attempt to gain unauthorized access to the Platform or related
                  systems, or probe/scan/test vulnerabilities.
                </li>
                <li>
                  {" "}
                  Introduce viruses, trojans, worms, logic bombs, or other
                  malicious material.
                </li>
                <li>
                  Use automated means (robots, spiders, scrapers) to access the
                  Platform without prior written consent.
                </li>
                <li>
                  {" "}
                  Copy, modify, distribute, sell, rent, lease, or create
                  derivative works from the Platform or its content, except as
                  expressly permitted.
                </li>
                <li>
                  {" "}
                  Engage in activities that could damage, disable, overburden,
                  or impair the Platform or interfere with others’ use.
                </li>
              </ul>
            </section>

            <section id="ServiceBooking" className={styles.section}>
              <div className={styles.sectionNumber}>06</div>
              <h2>Services, Bookings, and Role of Coachlete</h2>
              <p>
                The Platform enables users to discover and book sports coaching
                sessions with independent coaches and providers (“Service
                Providers”). Coachlete is a facilitator of bookings and does not
                itself provide coaching services. Service Providers are solely
                responsible for their offerings, qualifications, schedules,
                pricing, and compliance with applicable laws and safety
                standards.
              </p>
              <p>
                Participation in sports activities involves inherent risks; you
                participate at your own risk.
              </p>
            </section>

            <section id="payments" className={styles.section}>
              <div className={styles.sectionNumber}>07</div>
              <h2>Payments</h2>
              <p>
                Payments are processed by third-party payment processors such as
                Razorpay. You agree to provide accurate payment information and
                authorize charges for bookings and applicable taxes/fees.
                Coachlete does not store full card or UPI credentials. Payment
                receipts may be issued by the Service Provider and/or payment
                processor.
              </p>
              <ul className={styles.listStyled}>
                <li>
                  Razorpay Privacy Policy:{" "}
                  <a href="https://razorpay.com/privacy/">
                    {" "}
                    https://razorpay.com/privacy/{" "}
                  </a>
                </li>
                <li>
                  Buyer Privacy Notice:{" "}
                  <a href="https://razorpay.com/buyer-privacy-notice/">
                    {" "}
                    https://razorpay.com/buyer-privacy-notice/
                  </a>
                </li>
              </ul>
            </section>

            <section id="Cancellation" className={styles.section}>
              <div className={styles.sectionNumber}>08</div>
              <h2>Cancellations and Refunds</h2>
              <p>
                Cancellation and refund terms may vary by Service Provider.
                Unless otherwise stated at booking, refunds (if any) are at the
                discretion of the Service Provider. Coachlete may facilitate
                communications but is not the merchant of record for coaching
                services.
              </p>
            </section>

            <section id="userContent" className={styles.section}>
              <div className={styles.sectionNumber}>09</div>
              <h2>User Content and License</h2>
              <p>
                If you submit content (e.g., profile photo, bio,
                certifications), you retain ownership. You grant Coachlete a
                non-exclusive, worldwide, royalty-free license to host, store,
                reproduce, and display such content solely to operate and
                improve the Platform. You represent that you have all necessary
                rights and that your content does not infringe any third-party
                rights.
              </p>
            </section>

            <section id="thirdparty" className={styles.section}>
              <div className={styles.sectionNumber}>10</div>
              <h2> Third-Party Links and Services</h2>
              <p>
                The Platform may contain links to third-party websites,
                services, or SDKs. Coachlete is not responsible for third-party
                content, terms, or privacy practices. Use of third-party
                services is at your own risk and may be subject to separate
                terms.
              </p>
            </section>

            {/* <section id="privacy" className={styles.section}>
              <div className={styles.sectionNumber}>09</div>
              <h2>Privacy</h2>
              <div className={styles.privacyBox}>
                <Lock size={24} />
                <div>
                  <p>
                    Your data is handled in accordance with our Privacy Policy,
                    which explains how we collect and protect your information.
                  </p>
                  <a href="PrivacyPolicy" className={styles.privacyLink}>
                    View Privacy Policy →
                  </a>
                </div>
              </div>
            </section> */}

            <section id="access" className={styles.section}>
              <div className={styles.sectionNumber}>11</div>
              <h2>Access, Availability, and Security</h2>
              <p>
                We aim to keep the Platform available and secure, but we do not
                guarantee uninterrupted or error-free operation. Access may be
                suspended or restricted from time to time due to maintenance or
                network issues.
              </p>
            </section>

            <section id="mobileappstore" className={styles.section}>
              <div className={styles.sectionNumber}>12</div>
              <h2>Mobile App Store Terms</h2>
              <p>
                When you download the app from Apple App Store or Google Play,
                you also agree to the applicable store terms. Coachlete, not the
                store operator, is responsible for the app and its content to
                the extent required by law. The license granted to you is
                non-transferable and limited to a device you own or control.
              </p>
            </section>

            <section id="dispute" className={styles.section}>
              <div className={styles.sectionNumber}>13</div>
              <h2>Dispute Resolution and Governing Law</h2>
              <p>
                THE PLATFORM AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS
                AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, COACHLETE
                DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. COACHLETE DOES NOT WARRANT THE QUALITY OR
                SUITABILITY OF ANY SERVICE PROVIDER OR VENUE.
              </p>
            </section>

            <section id="limitedofliability" className={styles.section}>
              <div className={styles.sectionNumber}>14</div>
              <h2>Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COACHLETE SHALL NOT BE
                LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR
                BUSINESS, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE
                PLATFORM OR SERVICES. IN NO EVENT SHALL COACHLETE’S TOTAL
                LIABILITY EXCEED THE AMOUNTS PAID BY YOU FOR BOOKINGS THAT GAVE
                RISE TO THE CLAIM DURING THE THREE (3) MONTHS PRECEDING THE
                EVENT.
              </p>
            </section>

            <section id="indemnity" className={styles.section}>
              <div className={styles.sectionNumber}>15</div>
              <h2>Indemnity</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Coachlete and
                its directors, officers, employees, and affiliates from and
                against any claims, liabilities, damages, losses, and expenses
                (including reasonable legal fees) arising out of or connected
                with your breach of these Terms, your misuse of the Platform, or
                your interaction with Service Providers.
              </p>
            </section>

            <section id="suspension" className={styles.section}>
              <div className={styles.sectionNumber}>16</div>
              <h2>Suspension and Termination</h2>
              <p>
                We may suspend or terminate your account or access to the
                Platform at any time, with or without notice, if we believe you
                have violated these Terms or applicable law, or to protect the
                Platform or other users. Upon termination, the rights and
                licenses granted to you will cease.
              </p>
            </section>

            <section id="governing" className={styles.section}>
              <div className={styles.sectionNumber}>17</div>
              <h2>Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by the laws of India. Subject to the
                dispute resolution process below, the courts at Bengaluru,
                Karnataka, India shall have exclusive jurisdiction.
              </p>
              <p>
                Dispute Process: (a) good-faith negotiation (initiate within 7
                days of written notice), (b) escalation to senior management
                (meet within 7 days; attempt resolution within 10 days), (c)
                optional mediation within 30 days, and (d) if unresolved,
                litigation/arbitration in Bengaluru, Karnataka, India. Nothing
                prevents Coachlete from seeking interim injunctive relief.
              </p>
            </section>

            <section id="changestoterms" className={styles.section}>
              <div className={styles.sectionNumber}>18</div>
              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. When we do, we will
                revise the “Last updated” date above and, where appropriate,
                notify you via in-app notice or email. Continued use of the
                Platform after changes indicates your acceptance of the updated
                Terms.
              </p>
            </section>

            <section id="contact" className={styles.section}>
              <div className={styles.sectionNumber}>19</div>
              <h2>Contact Us</h2>
              <p>
                For questions or concerns about these Terms, please contact:
              </p>
              <div className={styles.contactBox}>
                <div className={styles.contactItem}>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@coachlete.co.in">
                    support@coachlete.co.in
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <strong>Phone:</strong>
                  <span>+91 8105397773</span>
                </div>
                <div className={styles.contactItem}>
                  <strong>Address:</strong>
                  <span>
                    No 116, 4th cross, Prakruthinagar, Bharathnagar - 560091
                    <br />
                    Bengaluru, Karnataka, India
                  </span>
                </div>
              </div>
            </section>

            <div className={styles.acknowledgment}>
              <div className={styles.acknowledgmentIcon}>
                <CheckCircle size={32} />
              </div>
              <div className={styles.acknowledgmentText}>
                <h3>Acknowledgment</h3>
                <p>
                  By using Coachlete, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* <footer className={styles.termsFooter}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 Coachlete. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default TermsConditions;
