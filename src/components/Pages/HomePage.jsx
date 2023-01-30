import React from 'react'

import Header from "../PrincipalSections/Header"
import Hero from "../PrincipalSections/Hero"
import StepsSection from "../HomePage/StepsSection"
import Footer from "../PrincipalSections/Footer"
import NewsSection from "../HomePage/NewsSection"
import CouchResume from "../HomePage/CouchResume"

const HomePage = () => {
  return (
    <>
      <Header></Header>

      <main class="main">
        <Hero></Hero>
        <StepsSection></StepsSection>
        <CouchResume></CouchResume>

        <NewsSection></NewsSection>
        <Footer></Footer>
        
      </main>
    </>
  );
};

export default HomePage;