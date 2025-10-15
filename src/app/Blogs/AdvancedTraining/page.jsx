import React from "react";
import styles from "./page.module.css";

export default function AdvancedTraining() {
  return (
    <>
      <div className={styles.blogContainer}>
        <header className={styles.blogheader}>
          <div className={styles.headercontent}>
            <h1 className={styles.pagetitle}>Advanced Training</h1>
            <div className={styles.breadcrumb}>
              <a href="/">HOME</a>
              <span className={styles.separator}>-</span>
              <span>ADVANCED TRAINING</span>
            </div>
          </div>
        </header>

        <main className={styles.blogmain}>
          <article className={styles.blogarticle}>
            <h2 className={styles.articletitle}>
              Advanced Training: Turning Athletes into Champions
            </h2>

            <div className={styles.featuredimage}>
              <img src="/assets/Advance/advance2.jpg" alt="" />
              <div className={styles.imageoverlay}></div>
            </div>

            <div className={styles.articlecontent}>
              <div className={styles.contentsection}>
                <p className={styles.leadparagraph}>
                  You've mastered the basics, pushed through the intermediate
                  grind and now stand at the advanced training stage. This is
                  where athletes stop playing for fun ad start training like
                  professionals. At this level, every detail matters - diet,
                  mindset, recovery and even the smallest technical adjustments.
                </p>
                <p>
                  Advanced training is not just about working harder, it's about
                  working smarter and sharper.
                </p>
              </div>

              <div className={styles.quoteblock}>
                <blockquote>
                  "Advanced training isn't just about being better than others.
                  It's about being the best version of yourself, every single
                  day."
                </blockquote>
              </div>

              <div className={styles.contentsection}>
                <h3>The Role of Coaches in Advanced Training</h3>
                <div>
                  <p>
                    At the advanced stage, athletes need mentors, not just
                    trainers. Coaches provide
                  </p>
                  <ul className={styles.contentsectionList}>
                    <li>
                      Tactical Mastery - Game strategies and insights specific
                      to competition.
                    </li>
                    <li>
                      Data Griven Training - Performance analysis, video
                      feedback and precision corrections.
                    </li>
                    <li>
                      Pathway to Opportunities - Guidance to trials, leagues,
                      scholarships and professional exposure
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className={styles.statsgrid}>
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
              </div> */}

              <div className={styles.imagegallery}>
                <img src="/assets/Advance/advance1.jpg" alt="" />
                <img src="/assets/Advance/advance3.jpg" alt="" />
              </div>

              <div className={styles.contentsection}>
                <h3>Tips for Advanced Athletes</h3>
                <div className={styles.tipsgrid}>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🧩</div>
                    <h4>Set Micro-Goals</h4>
                    <p>
                      At this level, small improvements can mean winning or
                      losing. Track details.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🛌</div>
                    <h4>Focus on Recovery</h4>
                    <p>
                      Ice baths, physiotherapy, yoga, and mental rest are as
                      important as the grind.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>♟️</div>
                    <h4>Develop Game IQ</h4>
                    <p>
                      Study opponents, analyze matches, and refine strategy with
                      your coach.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🦅</div>
                    <h4>Build a Winning Mindset</h4>
                    <p>
                      Confidence, discipline, and emotional resilience define
                      champions.
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
                <a href="YouthDevelopment" className={styles.relatedpost}>
                  <img
                    src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Training"
                  />
                  <div>
                    <h4>Youth Development</h4>
                    {/* <span className={styles.postdate}>Oct 5, 2025</span> */}
                  </div>
                </a>
                <a href="BeginnerTraining" className={styles.relatedpost}>
                  <img
                    src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Nutrition"
                  />
                  <div>
                    <h4>Beginner's Training</h4>
                    {/* <span className={styles.postdate}>Oct 3, 2025</span> */}
                  </div>
                </a>
                <a href="IntermediateTraining" className={styles.relatedpost}>
                  <img
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Coaching"
                  />
                  <div>
                    <h4>Intermediate Training</h4>
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
