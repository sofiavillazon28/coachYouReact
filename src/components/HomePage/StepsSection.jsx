import React from 'react'

import { Link } from 'react-router-dom';

import signup from "../../assets/images/images/signup_job.svg"
import search from "../../assets/images/images/search_job.svg"
import resume from "../../assets/images/images/resume_job.svg"

const StepsSection = () => {
    return (
    <article className="learnbox">
      <div className="container px-15 flex flex-column items-center md:px-0">
        <p className="learnbox-subtitle caption text-grey">Para estudiantes</p>
        <h2 className="learnbox-title text-primary">Crece en tu carrera aprendiendo de los mejores</h2>
        <p className="learnbox-text p1 text-primary">Crece en tu carrera aprendiendo de los mejores</p>

        <section className="learnbox-steps flex flex-column items-center justify-evenly w-full md:flex-row mb-48">
          <article className="flex flex-column items-center justify-center">
            <img className="stepbox-icon" src={signup} alt="Step 1: Signup Job" width="80" height="72"/>
            <p className="stepbox-subtitle caption text-grey">STEP 1</p>
            <h4 className="stepbox-title text-primary">Ingresa</h4>
            <p className="stepbox-text p3 text-primary text-center">Nunc nonummy metus.<br />Donec elit libero</p>
          </article>
          <article className="stepbox flex flex-column items-center justify-center">
            <img className="stepbox-icon" src={search} alt="Step 2: Search Job" width="80" height="72"/>
            <p className="stepbox-subtitle caption text-grey">STEP 2</p>
            <h4 className="stepbox-title text-primary">Busca tu Coach</h4>
            <p className="stepbox-text p3 text-primary text-center">Nunc nonummy metus.<br />Donec elit libero</p>
          </article>
          <article className="flex flex-column items-center justify-center">
            <img className="stepbox-icon" src={resume} alt="Step 3: Resume Job" width="80" height="72"/>
            <p className="stepbox-subtitle caption text-grey">STEP 3</p>
            <h4 className="stepbox-title text-primary">¡Solicita un cita!</h4>
            <p className="stepbox-text p3 text-primary text-center">Nunc nonummy metus.<br />Donec elit libero</p>
          </article>
        </section>

        <div className=''>
          <Link className="button text-white" to="/list">Inicia tu búsqueda</Link>
        </div>
      </div>
    </article>
    );
  };
  
  export default StepsSection;