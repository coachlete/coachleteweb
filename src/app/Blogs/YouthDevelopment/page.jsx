import React from "react";
import styles from "./page.module.css";

export default function YouthDevelopment() {
  return (
    <>
      <div className={styles.blogContainer}>
        <header className={styles.blogheader}>
          <div className={styles.headercontent}>
            <h1 className={styles.pagetitle}>Youth Development</h1>
            <div className={styles.breadcrumb}>
              <a href="/">HOME</a>
              <span className={styles.separator}>-</span>
              <span>YOUTH DEVELOPMENT</span>
            </div>
          </div>
        </header>

        <main className={styles.blogmain}>
          <article className={styles.blogarticle}>
            <h2 className={styles.articletitle}>
              Youth Development Through Sports: Building the Next Generation
              with Coachlete
            </h2>

            <div className={styles.featuredimage}>
              <img src="/assets/YouthDevelopment/youth1.jpg" alt="" />
              <div className={styles.imageoverlay}></div>
            </div>

            <div className={styles.articlecontent}>
              <div className={styles.contentsection}>
                <p className={styles.leadparagraph}>
                  When we talk about youth development, one thing stands out
                  clearly: sports is more than just a game. It is discipline,
                  teamwork, resilience, and self belief all wrapped into one.
                  For young people, these qualities are not just skills on the
                  field, but lessons for life.
                </p>
                <p>
                  At Coachlete, we believe that every dream needs a coach, and
                  every coach matters. That's why our platform connects aspiring
                  athletes with the right mentors, ensuring that the energy of
                  today's youth transforms into the excellence of tomorrow's
                  champions.
                </p>
              </div>

              <div className={styles.quoteblock}>
                <blockquote>
                  "Behind every successful athlete stands a coach who believed,
                  guided, and pushed them to go further."
                </blockquote>
              </div>

              <div className={styles.contentsection}>
                <h3>The Role of Coaches in Youth Development</h3>
                <p>
                  Coaches shape not just skills but also values and for youth,
                  this mentorship often becomes a turning point in their
                  journey. Through Coachlete, we're ensuring that coaches are
                  visible, accessible, and recognized. And in turn, young
                  athletes get guidance that helps them grow both on and off the
                  field.
                </p>
              </div>

              <div className={styles.statsgrid}>
                <div className={styles.statcard}>
                  <div className={styles.statnumber}>95%</div>
                  <div className={styles.statlabel}>
                    Youth report improved confidence
                  </div>
                </div>
                <div className={styles.statcard}>
                  <div className={styles.statnumber}>87%</div>
                  <div className={styles.statlabel}>
                    Show better teamwork skills
                  </div>
                </div>
                <div className={styles.statcard}>
                  <div className={styles.statnumber}>92%</div>
                  <div className={styles.statlabel}>
                    Develop resilience through sports
                  </div>
                </div>
              </div>

              <div className={styles.imagegallery}>
                <img src="../assets/YouthDevelopment/KhoKho.jpg" alt="" />
                <img src="../assets/YouthDevelopment/volley.jpg" alt="" />
              </div>

              <div className={styles.contentsection}>
                <h3>Why Youth Development Through Sports Matters</h3>
                <div className={styles.tipsgrid}>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🎯</div>
                    <h4>Character Building</h4>
                    <p>
                      Sports instill discipline, accountabililty and respect,
                      preparing youth for challenges beyond the playground.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>💪</div>
                    <h4>Health & Fitness</h4>
                    <p>
                      At a time when screen time is rising, sports keeps young
                      bodies active and healthy.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🧠</div>
                    <h4>Teamwork & Leadership</h4>
                    <p>
                      Learning to win together and sometimes lose together
                      develops emotional intelligence.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🏆</div>
                    <h4>Opportunities for Growth</h4>
                    <p>
                      With the right coaching, passion turns into performance
                      and performance into opportunities at state, national or
                      international levels.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.ctasection}>
                <h3>Ready to Take Your Game to the Next Level?</h3>
                <p>
                  Connect with experienced coaches who can help you achieve your
                  athletic goals.
                </p>
                <button className={styles.ctabutton}>Find Your Coach</button>
              </div>
            </div>
          </article>

          <aside className={styles.blogsidebar}>
            <div className={styles.sidebarcard}>
              <h3>Related Articles</h3>
              <div className={styles.relatedposts}>
                <a href="BeginnerTraining" className={styles.relatedpost}>
                  <img
                    src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Training"
                  />
                  <div>
                    <h4>Beginner's Training</h4>
                    {/* <span className={styles.postdate}>Oct 5, 2025</span> */}
                  </div>
                </a>
                <a href="IntermediateTraining" className={styles.relatedpost}>
                  <img
                    src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Nutrition"
                  />
                  <div>
                    <h4>Intermediate Training</h4>
                    {/* <span className={styles.postdate}>Oct 3, 2025</span> */}
                  </div>
                </a>
                <a href="AdvancedTraining" className={styles.relatedpost}>
                  <img
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Coaching"
                  />
                  <div>
                    <h4>Advanced Training</h4>
                    {/* <span className={styles.postdate}>Sep 30, 2025</span> */}
                  </div>
                </a>
              </div>
            </div>

            {/* <div className={styles.sidebarcard}>
              <h3>Categories</h3>
              <div className={styles.categories}>
                <a href="#" className={styles.categorytag}>
                  Youth Development
                </a>
                <a href="#" className={styles.categorytag}>
                  Sports Psychology
                </a>
                <a href="#" className={styles.categorytag}>
                  Training Tips
                </a>
                <a href="#" className={styles.categorytag}>
                  Nutrition
                </a>
                <a href="#" className={styles.categorytag}>
                  Success Stories
                </a>
              </div>
            </div> */}

            <div className={`${styles.sidebarcard} ${styles.newsletter}`}>
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest articles and tips delivered to your inbox.</p>
              <form className={styles.newsletterform}>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
