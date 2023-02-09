import React from 'react'

import Header from "../PrincipalSections/Header"
import Hero from "../PrincipalSections/Hero"
import StepsSection from "../HomePage/StepsSection"
import Footer from "../PrincipalSections/Footer"
import NewsSection from "../HomePage/NewsSection"
import CoachResume from "../HomePage/CoachResume"

const HomePage = () => {
  return (
    <>
      <Header></Header>

      <main class="main">
        <Hero></Hero>
        <StepsSection></StepsSection>
        <CoachResume></CoachResume>

        <NewsSection></NewsSection>
        <Footer></Footer>
        
      </main>
    </>
  );
};

export default HomePage;