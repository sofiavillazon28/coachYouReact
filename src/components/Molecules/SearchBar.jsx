import React from 'react'

import search from "../../assets/images/icons/search-1.svg"
import inventory_management from "../../assets/images/icons/inventory_management.svg"
import pin from "../../assets/images/icons/pin-1.svg"
import search2 from "../../assets/images/icons/search.svg"

const SearchBar = () => {
  return (
    <>
      <section className="section">
        <form className="search flex flex-column justify-content md:flex-row resp-flex mt-2 stats">
          <div className="search-field flex items-center gap-sm w-176">
            <img src={search} alt="¿Qué couch buscas?" width="20" height="20" />
            <input className="search-input p2 appearance-none" type="text" placeholder="¿Qué couch buscas?" />
          </div>
          <span className="divider-line hidden md:block"></span>
          <div className="search-field flex items-center gap-sm w-134 ">
            <img src={pin} alt="País" width="20" height="20" />
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
            <img src={inventory_management} alt="Expecialidad" width="20" height="20" />
            <select className="search-input p2 appearance-none" placeholder="Especialidad">
              <option value="" disabled selected>Especialidad</option>
              <option value="peru">Desarrollo</option>
              <option value="mexico">Design</option>
              <option value="colombia">Ciencia de datos</option>
            </select>
          </div>
          <button className="button square-button">
            <img src={search2} alt="search" />
          </button>
        </form>
      </section>

    </>
  );
};

export default SearchBar;