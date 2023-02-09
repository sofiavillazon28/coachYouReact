import React from 'react'

import CardItem from "../Molecules/CardItem"

const CoachResume = () => {
    const totalItems = 6;
    const items = new Array(totalItems).fill(null);

    return (
        <article id="coachList" className="coachexbox">
            <div className="container px-15 flex flex-column items-center md:px-0">
                <p className="coachexbox-subtitle caption text-grey">Coaches</p>
                <h2 className="coachexbox-title text-primary">Tenemos Coaches en todo el mundo</h2>
                <section className="section section-cards">
                    <div className="container g-elements gap-md">
                 
                    {items.map((_, idx) => <CardItem></CardItem>)}

                    </div>
                </section>
                <a className="button button-primary flex justify-between gap-sm" href="/list">
                    Ver todos los Coach
                    <img src="./assets/images/icons/direction_straight_right.svg" alt="" />
                </a>
            </div>
        </article>

    );
};

export default CoachResume;