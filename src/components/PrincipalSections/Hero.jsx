import React from 'react'
import search from "../../assets/images/icons/search-1.svg"
import pin from "../../assets/images/icons/pin-1.svg"
import inventory from "../../assets/images/icons/inventory_management.svg"
import imgHero from "../../assets/images/images/imgHero.svg"
import search2 from "../../assets/images/icons/search.svg"

const Hero = () => {
    return (
      <article className="hero flex items-center">
      <div className="container px-15 flex flex-column w-full md:flex-row  md:px-0">
        <div className="flex flex-column justify-center md:w-566 mt-120">
          <h1 className="text-white m-0 p-0 mb-24">
            Crece y aprende<br />con nuestros <span className="text-secondary">couch</span>
          </h1>
          <p className="p1 text-grey">Reserva tus sesiones de mentoría uno a uno.</p>
          <form className="search flex flex-column items-center  md:flex-row resp-flex">
            <div className="search-field flex items-center gap-sm w-176">
              <img src={search} alt="¿Qué couch buscas?" width="20" height="20"/>
              <input className="search-input p2 appearance-none" type="text" placeholder="¿Qué couch buscas?"/>
            </div>
            <span className="divider-line hidden md:block"></span>
            <div className="search-field flex items-center gap-sm w-134 ">
              <img src={pin} alt="País" width="20" height="20"/>
              <select className="search-input p2 appearance-none" placeholder="País">
                <option value="" disabled selected>País</option>
                <option value="peru">Perú</option>
                <option value="colombia">Colombia</option>
                <option value="mexico">México</option>
                <option value="ecuador">Ecuador</option>
                <option value="venezuela">Venezuela</option>
              </select>
            </div>
            <span className="divider-line hidden md:block"></span>
            <div className="search-field flex items-center gap-sm w-138">
              <img src={inventory} alt="Expecialidad" width="20" height="20"/>
              <select className="search-input p2 appearance-none" placeholder="Especialidad">
                <option value="" disabled selected>Especialidad</option>
                <option value="peru">Desarrollo</option>
                <option value="mexico">Design</option>
                <option value="colombia">Ciencia de datos</option>
              </select>
            </div>
            <button className="button square-button">
              <img src={search2} alt="search"/>
            </button>
          </form>
          <div className="stats flex flex-row gap-md items-center flex-wrap md:flex-row">
            <div className="flex flex-column">
              <h3 className="text-white">2m+</h3>
              <p className="p2 text-grey">Couches</p>
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
        <div className="flex w-full justify-end">
          <img className="w-max md:w-max" src={imgHero} width="485" height="582" alt=""/>
        </div>
      </div>
      
    </article>
    );
  };
  
  export default Hero;