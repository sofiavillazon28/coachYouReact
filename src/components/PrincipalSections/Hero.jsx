import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

import search from "../../assets/images/icons/search-1.svg"
import pin from "../../assets/images/icons/pin-1.svg"
import inventory from "../../assets/images/icons/inventory_management.svg"
import imgHero from "../../assets/images/images/imgHero.svg"
import search2 from "../../assets/images/icons/search.svg"
import SearchBar from '../Molecules/SearchBar'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const { user } = useContext(UserContext)

  const navigate = useNavigate()

    return (
      <article className="hero flex items-center">
      <div className="container px-15 flex flex-column w-full md:flex-row md:px-0">
        <div className="flex flex-column justify-center md:w-566">
          <h1 className="text-white m-0 p-0 mb-24">
            Crece y aprende<br />con nuestros <span className="text-secondary">coach</span>
            </h1>
            <p className="p1 text-grey">Reserva tus sesiones de mentoría uno a uno.</p>
            <SearchBar />
            
          <div className="stats flex flex-row gap-md items-center flex-wrap md:flex-row">
            <div className="flex flex-column">
              <h3 className="text-white">2m+</h3>
              <p className="p2 text-grey">Coaches</p>
            </div>
            <span className="divider-line h-full hidden md:block"></span>
            <div className="flex flex-column">
              <h3 className="text-white">500K+</h3>
              <p className="p2 text-grey">Sesiones dictadas</p>
            </div>
            <span className="divider-line h-full hidden md:block"></span>
            <div className="flex flex-column">
              <h3 className="text-white">250k+</h3>
              <p className="p2 text-grey">Partners</p>
            </div>
            <span className="divider-line h-full hidden md:block"></span>
            <div className="flex flex-column">
              <h3 className="text-white">1,56k +</h3>
              <p className="p2 text-grey">Alumnos</p>
            </div>
          </div>
        </div>

        <div className="flex jusxtify-end">
          <img className="w-max md:w-max" src={imgHero} width="564" height="700" alt=""/>
        </div>
      </div>
    </article>
    );
  };
  
  export default Hero;