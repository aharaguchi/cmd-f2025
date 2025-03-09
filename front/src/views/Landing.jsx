import React from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import UseCases from "../components/shared/UseCases";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Projects />
      <UseCases />
      <Contact />
      <Footer />
    </>
  );
}
