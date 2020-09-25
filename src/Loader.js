import React from "react";

const carbBackImgSrc =
    "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg";

const Loader = ({ darkMode }) => {
    return (
        <div id="loading">
            <div id="card1">
                <b>L o a d i n g . . .</b> &nbsp;
            <img className="image-rotation" src={carbBackImgSrc} alt="Card Back" height="96" width="66" />
            </div>
            <div id="card2">
                <img className="image-rotation" src={carbBackImgSrc} alt="Card Back" height="96" width="66" />
            </div>
            <div id="card3">
                <img className="image-rotation" src={carbBackImgSrc} alt="Card Back" height="96" width="66" />
            </div>
        </div>
    );
};

export default Loader;
