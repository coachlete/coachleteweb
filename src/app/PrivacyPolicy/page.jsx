import {
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Scale,
  Lock,
  User,
} from "lucide-react";
import styles from "./page.module.css";

function PrivacyPolicy() {
  return (
    <div className={styles.termsContainer}>
      <header className={styles.termsHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerIcon}>
            <Lock size={48} />
          </div>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.headerSubtitle}>
            Learn how Coachlete collects, uses, and protects your data
          </p>
          <div className={styles.lastUpdated}>
            <AlertCircle size={16} />
            <span>Last updated: October 15, 2025</span>
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
                <a href="#introduction" className={styles.tocLink}>
                  1. Introduction
                </a>
                <a href="#information" className={styles.tocLink}>
                  2. Information We Collect
                </a>
                <a href="#usage" className={styles.tocLink}>
                  3. How We Use Your Information
                </a>
                <a href="#sharing" className={styles.tocLink}>
                  4. Data Sharing & Disclosure
                </a>
                <a href="#security" className={styles.tocLink}>
                  5. Data Security
                </a>
                <a href="#retention" className={styles.tocLink}>
                  6. Data Retention
                </a>
                <a href="#rights" className={styles.tocLink}>
                  7. Your Rights
                </a>
                <a href="#cookies" className={styles.tocLink}>
                  8. Cookies & Tracking
                </a>
                <a href="#children" className={styles.tocLink}>
                  9. Children’s Privacy
                </a>
                <a href="#updating" className={styles.tocLink}>
                  10. Updating, Deleting & Amending Info
                </a>
                <a href="#updates" className={styles.tocLink}>
                  11. Updates to This Policy
                </a>
                <a href="#links" className={styles.tocLink}>
                  12. Links to Third-Party Apps
                </a>
                <a href="#contact" className={styles.tocLink}>
                  13. Contact Us
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Privacy Content */}
          <article className={styles.termsContent}>
            <div className={styles.introBox}>
              <div className={styles.introIcon}>
                <Shield size={32} />
              </div>
              <div className={styles.introText}>
                <h2>Welcome to Coachlete’s Privacy Policy</h2>
                <p>
                  This Privacy Policy describes how Lunovia Innovation and
                  Technology Private Limited (“Coachlete”, “we”, “our”, or “us”)
                  collects, uses, and protects your personal data when you use
                  our mobile application and related services that connect users
                  with sports coaches for in-person training sessions.
                </p>
                <p>
                  By using our platform, you consent to the collection and use
                  of information in accordance with this Privacy Policy.
                </p>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <div className={styles.sectionNumber}>01</div>
              <h2>1. Introduction</h2>
              <p>
                We are committed to protecting your personal information and
                your right to privacy. This policy explains what data we
                collect, why we collect it, and how you can control it.
              </p>
            </section>

            <section id="information" className={styles.section}>
              <div className={styles.sectionNumber}>02</div>
              <h2>2. Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <ul className={styles.listStyled}>
                <li>
                  Personal Information: name, email address, phone number,
                  gender, and date of birth provided during registration.
                </li>
                <li>
                  Location Data: We collect latitude and longitude to suggest
                  nearby coaches and training sessions (with your permission).
                </li>
                <li>
                  Usage Information: pages visited, session times, app
                  interactions, and device identifiers.
                </li>
                <li>
                  Payment Information: processed securely through trusted
                  third-party gateways like Razorpay. We do not store full card
                  or UPI credentials.{" "}
                  <a href="https://razorpay.com/privacy/"> Razorpay Terms.</a>
                </li>
                <li>
                  Coach Profile Data: qualifications, certifications, sport
                  expertise, and session availability (for coach users).
                </li>
                <li>
                  Photos you choose to upload: Profile picture (and, for
                  coaches, any verification documents you voluntarily upload).
                  We only receive the specific file you select.
                </li>
              </ul>
            </section>

            <section id="usage" className={styles.section}>
              <div className={styles.sectionNumber}>03</div>
              <h2>3. How We Use Your Information</h2>
              <p>We use the data we collect for purposes such as:</p>
              <ul className={styles.listStyled}>
                <li>
                  To match athletes with nearby coaches and manage bookings.
                </li>
                <li>To manage user accounts and authentication.</li>
                <li>
                  To facilitate secure payments and provide invoices/receipts.
                </li>
                <li>
                  To diagnose technical issues, improve app functionality, and
                  enhance user experience.
                </li>
                <li>
                  To process and respond to user queries and provide customer
                  support.
                </li>
                <li>
                  To carry out obligations arising from our contract with you,
                  including billing and collections.
                </li>
                <li>
                  To allow you to participate in interactive features the
                  Services may offer (if applicable).
                </li>
                <li>
                  For analytics and service improvement, and (if applicable) for
                  marketing/affiliate programs with your consent.
                </li>
                <li>
                  To comply with legal and regulatory requirements or requests
                  from competent authorities.
                </li>
                <li>
                  For any other purpose disclosed at the time of collection or
                  with your consent.
                </li>
              </ul>
            </section>

            <section id="sharing" className={styles.section}>
              <div className={styles.sectionNumber}>04</div>
              <h2>4. Data Sharing & Disclosure</h2>
              <p>
                We do not sell your personal information. We may share limited
                data only in the following cases:
              </p>
              <ul className={styles.listStyled}>
                <li>
                  With Coaches or Athletes: to enable session bookings and
                  necessary communication.
                </li>
                <li>
                  With Service Providers: who host our app, process payments,
                  provide analytics/crash reporting; they act under contracts
                  and are not permitted to use data for their own purposes.
                </li>
                <li>
                  Legal Proceedings & Law Enforcement: when required to comply
                  with law, regulation, legal process, or to protect users’
                  safety and our rights.
                </li>
                <li>
                  Aggregated/De-identified Information: We may share generic,
                  aggregated insights that do not identify individuals.
                </li>
                <li>
                  Business Transfers: In the event of a merger, acquisition, or
                  asset sale, your information may transfer subject to this
                  Policy.
                </li>
                <li>
                  With Consent: in any circumstances where you have provided
                  consent.
                </li>
              </ul>
              <p>
                We do not sell or rent your data to advertisers or third
                parties. All third parties are required to handle your data
                securely and only for the purpose of providing their service.
              </p>
            </section>

            <section id="security" className={styles.section}>
              <div className={styles.sectionNumber}>05</div>
              <h2>5. Data Security</h2>
              <p>
                We use strong technical and organizational measures to protect
                your data, including TLS/SSL encryption in transit, secure
                payment gateways, hardened infrastructure, and limited employee
                access. Our payment partners follow PCI-DSS or equivalent
                standards. However, no online platform can guarantee absolute
                security, and we continuously improve our protections.
              </p>
            </section>

            <section id="retention" className={styles.section}>
              <div className={styles.sectionNumber}>06</div>
              <h2>6. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the
                purposes outlined in this policy or as required by law. You may
                request deletion of your account and data by emailing{" "}
                <a href="mailto:support@coachlete.co.in">
                  support@coachlete.co.in
                </a>
                .
              </p>
            </section>

            <section id="rights" className={styles.section}>
              <div className={styles.sectionNumber}>07</div>
              <h2>7. Your Rights</h2>
              <p>Subject to applicable law, you have the right to:</p>
              <ul className={styles.listStyled}>
                <li>Access and review your personal data.</li>
                <li>Request corrections to inaccurate information.</li>
                <li>Request deletion of your account and data.</li>
                <li>Withdraw consent for marketing communications.</li>
              </ul>
              <p>
                These rights may be limited where fulfilling your request would
                infringe the rights or safety of others, relate to existing or
                anticipated legal proceedings, or conflict with statutory
                retention requirements.
              </p>
            </section>

            <section id="cookies" className={styles.section}>
              <div className={styles.sectionNumber}>08</div>
              <h2>8. Cookies & Tracking Technologies</h2>
              <p>
                We may use cookies, SDKs, and analytics tools to improve user
                experience and understand app usage patterns. You can disable
                cookies in your browser and limit ad tracking from your device
                settings; some features may be affected.
              </p>
              <p>We use cookies collected to: </p>
              <ul className={styles.listStyled}>
                <li>Authenticate your login information.</li>
                <li>Enable our security features.</li>
                <li>Improve and develop the features of the Website.</li>
              </ul>

              <p>
                Please feel free to change your browser settings if you do not
                wish to accept cookies. However, please note that changing your
                browser settings may affect your experience on the Platform.
              </p>
            </section>

            <section id="children" className={styles.section}>
              <div className={styles.sectionNumber}>09</div>
              <h2>9. User Privacy</h2>
              <p>
                Coachlete does not knowingly collect personal data from any
                individual without consent. If we learn that personal data was
                collected inadvertently or without valid authorization, we will
                take immediate steps to delete it. An adult may use their own
                account to book sessions for another individual; any information
                shared for the booking is used solely to provide the service and
                can be deleted upon request at{" "}
                <a href="mailto:support@coachlete.co.in">
                  support@coachlete.co.in
                </a>
                .
              </p>
            </section>

            <section id="updating" className={styles.section}>
              <div className={styles.sectionNumber}>10</div>
              <h2>10. Updating, Deleting, and Amending Your Information</h2>
              <p>
                We will take reasonable steps to accurately record the
                Information that you provide to us, including any subsequent
                updates. You can review, update, and amend the Information that
                we maintain about you, and you may request that we delete
                Information about you that is inaccurate, incomplete, or
                irrelevant for legitimate purposes, or is being processed in a
                way that infringes any applicable legal requirement.
              </p>
              <p>
                Your right to review, update, amend and delete your Information
                may be limited: (a) where the rights or safety of another person
                or persons would be encroached upon, or (b) if the information
                you request relates to existing or anticipated legal proceedings
                between you and us, or providing access to you would prejudice
                negotiations between us or an investigation of possible unlawful
                activity. Your right to review, update, amend, and delete your
                Information is also subject to applicable law, including any
                statutory retention requirements.
              </p>
            </section>

            <section id="updates" className={styles.section}>
              <div className={styles.sectionNumber}>11</div>
              <h2>11. Updates to This Policy</h2>
              <p>
                We may revise this Privacy Policy from time to time. When we do,
                we will update the “Last updated” date above and, where
                appropriate, notify you through in-app notices or email. Your
                continued use of the App after changes indicates your acceptance
                of the updated Policy.
              </p>
            </section>

            <section id="links" className={styles.section}>
              <div className={styles.sectionNumber}>12</div>
              <h2>12. Links to Third-Party Apps and Websites</h2>
              <p>
                The Platform and communications we send may contain third-party
                advertisements or links to other websites/products/services.
                These are operated by third parties and are not controlled by us
                (unless expressly stated). Their privacy practices are governed
                by their own policies; we recommend reviewing those before using
                such sites or services.
              </p>
            </section>

            <section id="contact" className={styles.section}>
              <div className={styles.sectionNumber}>13</div>
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions, complaints, or requests related to
                this Privacy Policy, you may contact us:
              </p>
              <div className={styles.contactBox}>
                <div className={styles.contactItem}>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@coachlete.co.in">
                    support@coachlete.co.in
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <strong>Phone:</strong> <span> +91 8105397773 </span>
                </div>
                <div className={styles.contactItem}>
                  <strong>Address:</strong>
                  <span>
                    {" "}
                    No. 116, 4th Cross, Prakruthinagar, Bharathnagar - 560091,
                    Bengaluru, Karnataka, India{" "}
                  </span>
                </div>
              </div>
              <p>
                Your Privacy Matters — We value your trust and are committed to
                protecting your data.
              </p>
            </section>

            <div className={styles.acknowledgment}>
              <div className={styles.acknowledgmentIcon}>
                <User size={32} />
              </div>
              <div className={styles.acknowledgmentText}>
                <h3>Your Privacy Matters</h3>
                <p>
                  We value your trust and are committed to protecting your data.
                  Please review this policy regularly to stay informed about how
                  Coachlete safeguards your privacy.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
