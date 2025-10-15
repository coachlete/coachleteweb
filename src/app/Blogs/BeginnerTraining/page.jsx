import React from "react";
import styles from "./page.module.css";

export default function BeginnerTraining() {
  return (
    <>
      <div className={styles.blogContainer}>
        <header className={styles.blogheader}>
          <div className={styles.headercontent}>
            <h1 className={styles.pagetitle}>Beginner's Training</h1>
            <div className={styles.breadcrumb}>
              <a href="/">HOME</a>
              <span className={styles.separator}>-</span>
              <span>BEGINNER'S TRAINING</span>
            </div>
          </div>
        </header>

        <main className={styles.blogmain}>
          <article className={styles.blogarticle}>
            <h2 className={styles.articletitle}>
              Beginner's Training: Your First Step Towards Becoming an Athlete
            </h2>

            <div className={styles.featuredimage}>
              <img
                src="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Volleyball in sports hall"
              />
              <div className={styles.imageoverlay}></div>
            </div>

            <div className={styles.articlecontent}>
              <div className={styles.contentsection}>
                <p className={styles.leadparagraph}>
                  Every champion you've ever admired started the same way as a
                  beginner. The first run, the first practice, the first
                  training session always feets uncertain, but it's also the
                  most important step of your journey.
                </p>
                <p>
                  At Coachlete, we believe that no dream is too small and no
                  starting line is too late. With the right coach, every athlete
                  can build the foundation to achieve greatness.
                </p>
              </div>

              <div className={styles.quoteblock}>
                <blockquote>
                  "Beginners often struggle with doubts: "Am I good enough?" or
                  "What if I fail?"."
                </blockquote>
              </div>

              <div className={styles.contentsection}>
                <h3>The Role of Coaches in Beginner Training</h3>
                <p>
                  Coaches not only teach skills but also guide your mindset,
                  motivate you on tough days, and push you when you don't
                  believe in youself. Coachlete helps you find verified coaches
                  in 20+ sports, so your beginner journey is sage, structured
                  and inspiring.
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
                <img src="/assets/BeginnerTraining/beginner1.jpg" alt="" />
                <img src="../assets/BeginnerTraining/beginner2.jpg" alt="" />
              </div>

              <div className={styles.contentsection}>
                <h3>Tips for Beginners</h3>
                <div className={styles.tipsgrid}>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>⏳</div>
                    <h4>Start Small, Stay Consistant</h4>
                    <p>10 minutes a day is better than 2 hours once a week</p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🧘‍♀️</div>
                    <h4>Listen to Your Body</h4>
                    <p>
                      Fatigue is normal, pain is not. Learn to differentiate.
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>📈</div>
                    <h4>Set Realistic Goals</h4>
                    <p>
                      Instead of "I want to win a medal," start with "I want to
                      improve my timing by 10 seconds."
                    </p>
                  </div>
                  <div className={styles.tipcard}>
                    <div className={styles.tipicon}>🎉</div>
                    <h4>Celebrate Progress</h4>
                    <p>
                      Every session you complete takes you closer to your dream.
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
