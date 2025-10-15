"use client";
import Homesection from "./HomeSection/Homesection";
import Info from "./Info/Info";
import Blogs from "./Blogs/Blogs";
import Testimonials from "./Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Homesection />
      <Info />
      <Blogs />
      {/* <Testimonials /> */}
    </main>
  );
}
