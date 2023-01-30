import React from 'react'
import Header from "../PrincipalSections/Header"
import Footer from "../PrincipalSections/Footer"

import SearchBar from "../Molecules/SearchBar"
import CardItem from "../Molecules/CardItem"

import search from "../../assets/images/icons/search-1.svg"
import inventory_management from "../../assets/images/icons/inventory_management.svg"
import pin from "../../assets/images/icons/pin-1.svg"
import search2 from "../../assets/images/icons/search.svg"

const CouchList = () => {

  const totalItems = 12;
  const items = new Array(totalItems).fill(null);

  return (
    <>
      <Header></Header>
      <SearchBar/>

      <section className="section section-cards">
            <div className="container g-elements gap-md">
                
                {items.map((_, idx) => <CardItem></CardItem>)}

            </div>
        </section>

      <Footer></Footer>
    </>
  );
};

export default CouchList;