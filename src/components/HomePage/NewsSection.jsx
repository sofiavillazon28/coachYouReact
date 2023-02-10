import React from 'react'
const NewsSection = () => {
    return (
        <article className="subscribebox">
            <div className="container px-15 flex flex-column items-center md:px-0">
                <h2 className="subscribebox-subtitle text-white">Suscríbete a nuestras novedades</h2>
                <p className="subscribebox-title p1 text-white">Suscríbete para recibir actualizaciones sobre los coaches más recientes y relevantes.</p>
                <form className="subscribebox-form flex mt-24">
                    <input className="" type="text" placeholder="Ingresa tu email"/>
                    <button className="button button-secondary">Suscribirme</button>
                </form>
            </div>
        </article>
    );
};

export default NewsSection;