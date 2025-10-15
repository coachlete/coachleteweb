import React from "react";
import styles from "./page.module.css";

export default function IntermediateTraining() {
  return (
    <>
      <div className={styles.blogContainer}>
        <header className={styles.blogheader}>
          <div className={styles.headercontent}>
            <h1 className={styles.pagetitle}>Intermediate Training</h1>
            <div className={styles.breadcrumb}>
              <a href="/">HOME</a>
              <span className={styles.separator}>-</span>
              <span>INTERMEDIATE TRAINING</span>
            </div>
          </div>
        </header>

        <main className={styles.blogmain}>
          <article className={styles.blogarticle}>
            <h2 className={styles.articletitle}>
              Intermediate Training: Level Up Your Game
            </h2>

            <div className={styles.featuredimage}>
              <img
                src="/assets/Intermediate/intermediate1.jpg"
                alt="Volleyball in sports hall"
              />
              <div className={styles.imageoverlay}></div>
            </div>

            <div className={styles.articlecontent}>
              <div className={styles.contentsection}>
                <p className={styles.leadparagraph}>
                  You've already taken the first step, built your basics and
                  gained confidence as a beginner. Now comes the exciting and
                  challenging phase Intermediate Training. This stage is where
                  athletes transform from learners into competitors, refining
                  skills and pushing boundaries.
                </p>
                <p>
                  At Coachlete, we believe that intermediate phase is where
                  dreams start looking real. It's where talent meets discipline
                  and where a coach becomes your game changer.
                </p>
              </div>

              <div className={styles.quoteblock}>
                <blockquote>
                  "At this level, athletes often face plateaus feeling stuck
                  without much improvement."
                </blockquote>
              </div>

              <div className={styles.contentsection}>
                <h3>The Role of Coaches in Intermediate Training</h3>
                <p>
                  A coach helps break all the barriers by introducing advanced
                  drills, correcting finer techniques and giving tactical
                  insights that athletes can't always see themselves. More
                  importantly, coaches provide structured progression the right
                  balance between pushing harder and preventing burnout.
                </p>
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
                <img src="../assets/Intermediate/intermediate2.jpg" alt="" />
                <img src="../assets/Intermediate/intermediate3.jpg" alt="" />
              </div>

              <div className={styles.contentsection}>
                <h3>Tips for Intermediate</h3>
                <div className={styles.tipsgrid}>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>⛰️</div>
                    <h4>Increase Intensity Gradually</h4>
                    <p>
                      Add new drills, longer sessions, or tougher workouts
                      without burning out.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>📅</div>
                    <h4>Focus on Consistency</h4>
                    <p>
                      Missing training sessions slows progress more at this
                      stage than in beginner level.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>📊</div>
                    <h4>Start Tracking Performance</h4>
                    <p>
                      Note timings, reps, distances or scores measurable growth
                      keeps you motivated.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🦁</div>
                    <h4>Work on Mental Strength</h4>
                    <p>
                      Learn focus, discipline and handling pressure because
                      physical skills alone won't win games.
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
