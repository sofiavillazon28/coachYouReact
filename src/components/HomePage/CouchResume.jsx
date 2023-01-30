import React from 'react'

import CardItem from "../Molecules/CardItem"

const CouchResume = () => {

    const totalItems = 6;
    const items = new Array(totalItems).fill(null);

    return (
        <article id="couchList" className="couchexbox">
            <div className="container px-15 flex flex-column items-center md:px-0">
                <p className="couchexbox-subtitle caption text-grey">Couches</p>
                <h2 className="couchexbox-title text-primary">Tenemos Couches en todo el mundo</h2>
                <section className="section section-cards">
                    <div className="container g-elements gap-md">
                 
                    {items.map((_, idx) => <CardItem></CardItem>)}

                    </div>
                </section>
                <a className="button button-primary flex justify-between gap-sm" href="/list">
                    Ver todos los Couch
                    <img src="./assets/images/icons/direction_straight_right.svg" alt="" />
                </a>
            </div>
        </article>

    );
};

export default CouchResume;