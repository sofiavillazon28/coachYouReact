import React from 'react'
import Header from "../PrincipalSections/Header"
import Footer from "../PrincipalSections/Footer"

import SearchBar from "../Molecules/SearchBar"
import CardItem from "../Molecules/CardItem"

const CoachList = () => {

  const totalItems = 12;
  const items = new Array(totalItems).fill(null);

  return (
    <>
      <Header></Header>

      <div className='container'>
        <div className='section'>
          <SearchBar/>
        </div>
      </div>

      <section className="section section-cards">
            <div className="container g-elements gap-md">
                
                {items.map((_, idx) => <CardItem></CardItem>)}

            </div>
        </section>

      <Footer></Footer>
    </>
  );
};

export default CoachList;