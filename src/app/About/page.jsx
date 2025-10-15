import { Target, Users, Heart, Award, TrendingUp, Shield } from "lucide-react";
import styles from "./page.module.css";

function About() {
  return (
    <div className={styles.aboutcontainer}>
      <header className={styles.aboutheader}>
        <div className={styles.headercontent}>
          <h1 className={styles.pagetitle}>About Us</h1>
          <p className={styles.headersubtitle}>
            Empowering athletes and coaches to achieve greatness together
          </p>
        </div>
      </header>

      <main className={styles.aboutmain}>
        <section className={styles.whowearesection}>
          <div className={styles.sectioncontent}>
            <div className={styles.textcontent}>
              <h2 className={styles.sectiontitle}>Who We Are</h2>
              <div className={styles.titleunderline}></div>
              <p className={styles.sectionlead}>
                Coachlete is more than just a platform it's a movement dedicated
                to transforming the relationship between athletes and coaches.
              </p>
              <p className={styles.sectiontext}>
                Founded by passionate sports enthusiasts and technology
                innovators, we recognized a critical gap in the sports
                development ecosystem. Too many talented athletes struggle to
                find the right mentorship, while exceptional coaches remain
                hidden gems in their communities.
              </p>
              <p className={styles.sectiontext}>
                We believe that every aspiring athlete deserves access to
                quality coaching, and every dedicated coach deserves recognition
                for their expertise. Our platform bridges this gap, creating
                meaningful connections that transform potential into excellence.
              </p>
              <div className={styles.highlightbox}>
                <p>
                  "At Coachlete, we don't just connect people—we build
                  partnerships that create champions, both on and off the
                  field."
                </p>
              </div>
            </div>
            <div className={styles.imagecontent}>
              <img
                src="/assets/Aboutus/about.jpg"
                alt=""
                className={styles.mainimage}
              />
              {/* <div className={styles.floatingcard}>
                <div className={styles.cardstat}>10,000+</div>
                <div className={styles.cardlabel}>Active Athletes</div>
              </div> */}
            </div>
          </div>
        </section>

        <section className={styles.valuessection}>
          <div className={styles.sectionheader}>
            <h2 className={`${styles.sectiontitle} ${styles.centered}`}>
              Our Core Values
            </h2>
            <div
              className={`${styles.titleunderline} ${styles.centered}`}
            ></div>
            <p className={styles.sectionsubtitle}>
              The principles that guide everything we do
            </p>
          </div>

          <div className={styles.valuesgrid}>
            <div className={styles.valuecard}>
              <div className={`${styles.valueiconwrapper} ${styles.blue}`}>
                <Target size={32} />
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every interaction, ensuring that
                both athletes and coaches receive the highest quality experience
                on our platform.
              </p>
            </div>

            <div className={styles.valuecard}>
              <div className={`${styles.valueiconwrapper} ${styles.green}`}>
                <Users size={32} />
              </div>
              <h3>Community</h3>
              <p>
                Building a supportive community where athletes and coaches grow
                together, share knowledge, and celebrate each other's success.
              </p>
            </div>

            <div className={styles.valuecard}>
              <div className={`${styles.valueiconwrapper} ${styles.red}`}>
                <Heart size={32} />
              </div>
              <h3>Passion</h3>
              <p>
                Our love for sports drives us to create meaningful connections
                that fuel the dreams of athletes and honor the dedication of
                coaches.
              </p>
            </div>

            <div className={styles.valuecard}>
              <div className={`${styles.valueiconwrapper} ${styles.orange}`}>
                <Award size={32} />
              </div>
              <h3>Recognition</h3>
              <p>
                Every coach deserves recognition for their expertise, and every
                athlete deserves acknowledgment for their commitment and
                progress.
              </p>
            </div>

            <div className={styles.valuecard}>
              <div className={`${styles.valueiconwrapper} ${styles.teal}`}>
                <TrendingUp size={32} />
              </div>
              <h3>Growth</h3>
              <p>
                We believe in continuous improvement for athletes, coaches, and
                our platform always evolving to serve our community better.
              </p>
            </div>

            <div className={styles.valuecard}>
              <div className={`${styles.valueiconwrapper} ${styles.purple}`}>
                <Shield size={32} />
              </div>
              <h3>Trust</h3>
              <p>
                Building trusted relationships through transparency, security,
                and verified credentials that give confidence to our entire
                community.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.missionvisionsection}>
          <div className={styles.missionvisiongrid}>
            <div className={styles.missioncard}>
              <div className={styles.cardheader}>
                <div className={styles.cardicon}>🎯</div>
                <h3>Our Mission</h3>
              </div>
              <p>
                To ignite India’s passion for sports by empowering every
                individual to find the right coach for any sport, any place, any
                time. We’re here to make the pursuit of excellence personal,
                powerful, and possible. 
              </p>
            </div>

            <div className={styles.visioncard}>
              <div className={styles.cardheader}>
                <div className={styles.cardicon}>🌟</div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To build a nation where every dreamer has a coach, every corner
                has a champion, and every talent—no matter where it’s born—gets
                the chance to rise. We envision India where sports is not a
                privilege, but a way of life.
              </p>
            </div>
          </div>
        </section>

        {/* <section className={styles.impactsection}>
          <div className={styles.sectionheader}>
            <h2 className={`${styles.sectiontitle} ${styles.centered}`}>
              Our Impact
            </h2>
            <div
              className={`${styles.titleunderline} ${styles.centered}`}
            ></div>
            <p className={styles.sectionsubtitle}>
              Making a difference in the sports community every day
            </p>
          </div>

          <div className={styles.impactstats}>
            <div className={styles.impactstat}>
              <div className={styles.statnumber}>10,000+</div>
              <div className={styles.statlabel}>Athletes Connected</div>
              <div className={styles.statdescription}>
                Thousands of athletes have found their perfect coach match
              </div>
            </div>

            <div className="impactstat">
              <div className="statnumber">2,500+</div>
              <div className="statlabel">Verified Coaches</div>
              <div className="stat-description">
                Expert coaches across multiple sports and skill levels
              </div>
            </div>

            <div className={styles.impactstat}>
              <div className={styles.statnumber}>150+</div>
              <div className={styles.statlabel}>Sports Disciplines</div>
              <div className={styles.statdescription}>
                From mainstream to niche sports, we cover them all
              </div>
            </div>

            <div className={styles.impactstat}>
              <div className={styles.statnumber}>95%</div>
              <div className={styles.statlabel}>Satisfaction Rate</div>
              <div className={styles.statdescription}>
                Athletes and coaches love using our platform
              </div>
            </div>
          </div>
        </section> */}

        <section className={styles.teamsection}>
          <div className={styles.sectionheader}>
            <h2 className={`${styles.sectiontitle} ${styles.centered}`}>
              Our Story
            </h2>
            <div
              className={`${styles.titleunderline} ${styles.centered}`}
            ></div>
          </div>

          <div className={styles.storycontent}>
            <div className={styles.storytimeline}>
              <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinecontent}>
                  <h4>2020 - The Spark</h4>
                  <p>
                    It all began with a simple observation: talented athletes
                    across India struggled to find the right coaches, while
                    skilled coaches lacked visibility. This gap inspired our
                    vision to create a platform that empowers athletes to
                    connect with the right mentors and unlock their potential.
                  </p>
                </div>
              </div>

              <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinecontent}>
                  <h4>2022 - The Beginning</h4>
                  <p>
                    Our founders, combining their experience in sports and
                    technology, decided to turn this vision into reality.
                    Coachlete was born built on the belief that every athlete
                    deserves equal access to quality coaching, no matter where
                    they come from.
                  </p>
                </div>
              </div>

              <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinecontent}>
                  <h4>2023 - The Market Research</h4>
                  <p>
                    We spent the year studying India’s sports ecosystem,
                    interacting with athletes, coaches, and academies across the
                    country. Through deep research, we identified critical gaps
                    in accessibility, mentorship, and structured development
                    insights that shaped the foundation of Coachlete.
                  </p>
                </div>
              </div>

              <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinecontent}>
                  <h4>2024 - A Vision Registered</h4>
                  {/* <p> */}
                  <ul>
                    <li>
                      This was the year our idea transformed into a brand.
                    </li>
                    <li>
                      {" "}
                      We closely observed the global sporting scene and learned
                      from India’s challenges during the 2024 Olympic
                      preparations.
                    </li>
                    <li>
                      {" "}
                      Coachlete officially became a registered brand with a
                      single mission: “To put more Indians into sports by giving
                      them the power to choose their coach anytime anywhere for
                      any sport”
                    </li>
                  </ul>

                  {/* </p> */}
                </div>
              </div>

              <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinecontent}>
                  <h4>2025 - The Launch</h4>
                  <ul>
                    <li>
                      Our journey has just begun. We’re now focused on expanding
                      our reach to every corner of India, partnering with
                      academies, and supporting grassroots sports development.
                    </li>
                    <li>
                      Our platform introduced smart features such as online
                      booking, demo sessions, performance analytics, and real
                      time progress tracking, making professional coaching
                      accessible to all.
                    </li>
                    <li>
                      {" "}
                      Today, Coachlete is more than just an app it’s a movement
                      bringing coaches and athletes together to build India’s
                      sporting future.
                    </li>
                    <li>Coachlete Empowering India, one athlete at a time.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctasection}>
          <div className={styles.ctacontent}>
            <h2>Ready to Be Part of Our Story?</h2>
            <p>
              Whether you're an athlete looking for guidance or a coach ready to
              share your expertise, join our growing community today.
            </p>
            <div className={styles.ctabuttons}>
              <button className={`${styles.ctabutton} ${styles.primary}`}>
                Find a Coach
              </button>
              <button className={`${styles.ctabutton} ${styles.secondary}`}>
                Become a Coach
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="about-footer">
        <div className="footer-content">
          <p>&copy; 2025 Coachlete. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default About;
