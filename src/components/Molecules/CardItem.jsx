import IMG from "../../assets/images/images/IMG.jpg"
import pin from "../../assets/images/icons/pin.svg"
import increase_level from "../../assets/images/icons/increase_level.svg"
import clock from "../../assets/images/icons/clock.svg"
import cash from "../../assets/images/icons/cash.svg"
import user from "../../assets/images/icons/user.svg"
import React from 'react'

const CardItem = () => {
    return (
        <article className="card">
        <div className="card__image">
            <img src={IMG} alt=""/>
        </div>

        <div className="card__content">

            <div className="card__content-title">
                <h5 className="text-primary">Mathew Smith</h5>
                <p className="p3 text-alternate">Product Designer & Design research</p>
                <div className="f-elements gap-xs">
                    <img className="card__content-image" src={pin} alt="pin" />
                    <p className="p3 text-grey">New York</p>
                </div>
            </div>

            <div className="divider-dotted"></div>

            <div className="card__content-row f-elements ">
                <div className="card__content-column f-elements gap-xs">
                    <img src={increase_level} alt="increase" />
                    <p className="p3 text-grey">5 year exp</p>
                </div>
                <div className="card__content-column f-elements gap-xs">
                    <img src={clock} alt="clock" />
                    <p className="p3 text-grey">150h</p>
                </div>
            </div>

            <div className="card__content-row f-elements ">
                <div className="card__content-column f-elements gap-xs">
                    <img src={cash} alt="cash" />
                    <p className="p3 text-grey">$30/por hora</p>
                </div>
                <div className="card__content-column f-elements gap-xs">
                    <img src={user} alt="user" />
                    <p className="p3 text-grey">57 sesiones</p>
                </div>
            </div>
        </div>
    </article>
    );
};

export default CardItem;