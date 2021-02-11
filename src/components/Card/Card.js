import React from "react";
import "./Card.css";

function Card({ list }) {
    console.log(list);
    return (
        <div className="card">
            <div className="card__leftSide">
                <img src={list?.picture.large} />

                <h2 className="card__lefSide__personalInfo">
                    {list?.name.first} {list?.name.last}{" "}
                </h2>
                <h3 className="card__lefSide__personalInfo">
                    <span>Title:</span>
                    <span>{list?.name.title}</span>
                </h3>

                <div className="card__leftSide__personalInfo__mobile">
                    <h2 className="card__lefSide__personalInfo__mobile">
                        {list?.name.first} {list?.name.last}{" "}
                    </h2>
                    <h3 className="card__lefSide__personalInfo__mobile">
                        <span>Title:</span>
                        <span>{list?.name.title}</span>
                    </h3>
                </div>
            </div>
            <div className="card__rightSide">
                <h1>Details</h1>
                <div className="card__rightSide__personalInfoContainer">
                    <div className="card__rightSide__personalInfo">
                        <span>Country:</span>
                        <span>{list?.location.country}</span>
                    </div>
                    <div className="card__rightSide__personalInfo">
                        <span>State:</span>
                        <span>{list?.location.state}</span>
                    </div>
                    <div className="card__rightSide__personalInfo">
                        <span>City:</span>
                        <span>{list?.location.city}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
