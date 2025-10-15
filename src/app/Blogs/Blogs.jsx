import React from "react";
import styles from "./Blogs.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Blogs() {
  const cardVariants = {
    initial: {},
    hover: {},
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const textWrapperVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };

  const numberVariants = {
    initial: { opacity: 0, x: -10, width: 0 },
    hover: { opacity: 1, x: 0, width: "auto" },
  };

  const arrowAnimation = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 },
  };

  const Data = [
    {
      id: 1,
      no: "01",
      head: "Youth Development",
      img: "assets/OurProgram/beginner.jpg",
      url: "/Blogs/YouthDevelopment",
    },
    {
      id: 2,
      no: "02",
      head: "Beginner’s Training",
      img: "assets/OurProgram/youth.jpg",
      url: "/Blogs/BeginnerTraining",
    },
    {
      id: 3,
      no: "03",
      head: "Intermediate Training",
      img: "assets/OurProgram/intermediate.jpg",
      url: "/Blogs/IntermediateTraining",
    },
    {
      id: 4,
      no: "04",
      head: "Advanced Training",
      img: "assets/OurProgram/advance.jpg",
      url: "/Blogs/AdvancedTraining",
    },
  ];

  return (
    <div className="BlogsMain">
      <div className={styles.BlogsWrapper}>
        <div className={styles.BlogsHead}>
          <span>Our Programs</span>
        </div>

        <div className={styles.BlogImageCardsWrapper}>
          {Data.map((value, i) => {
            return (
              <Link href={value.url} key={value.id} id={styles.Links}>
                <motion.div
                  key={value.id}
                  className={styles.BlogImageCard1}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* Image responds to parent hover */}
                  <motion.div className={styles.BlogImage1}>
                    <motion.img
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                      src={value.img}
                      alt=""
                    />
                  </motion.div>

                  {/* Text responds to parent hover */}
                  <div className={styles.BlogImage1HeadWrapper}>
                    <motion.div
                      className={styles.BlogImage1Head}
                      variants={textWrapperVariants}
                    >
                      <motion.span
                        variants={numberVariants}
                        transition={{ duration: 0.3 }}
                        style={{
                          display: "inline-block",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {value.no}.
                      </motion.span>

                      <motion.span
                        style={{ whiteSpace: "nowrap" }}
                        // variants={{
                        //   initial: { x: -50 },
                        // }}
                      >
                        {value.head}
                      </motion.span>
                    </motion.div>

                    <motion.div className={styles.BlogImage1Arrow}>
                      {/* Animated border */}
                      <motion.div
                        className={styles.ArrowBorder}
                        variants={arrowAnimation}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id={styles.Arrow}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="1.5"
                          d="m14 16l4-4m0 0l-4-4m4 4H6"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      className={styles.underline}
                      variants={underlineVariants}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
