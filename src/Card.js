import React from "react";

import ManaSymbol from "./ManaSymbol";

const cardBackImgUrl = 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg';

const matchSymbols = (manaCost) => {
    return manaCost && [...manaCost.matchAll(/{(.*?)}/g)] || [];
}

const replaceTextSymbols = (text, fn) => {
    const result = text && text.split(/{(.*?)}/g);

    if (result) {
        let curCharStart = 0;
        let curCharLen = 0;

        for (let i = 1, length = result.length; i < length; i += 2) {
            curCharLen = result[i].length;
            curCharStart += result[i - 1].length;
            result[i] = fn(result[i], i, curCharStart);
            curCharStart += curCharLen;
        }
    }

    return result;
}

const Card = ({ details, darkMode }) => {
    const {
        name,
        manaCost,
        types,
        subtypes,
        artist,
        power,
        toughness,
        text,
        flavor,
        imageUrl,
    } = details || {};

    return (
        <div className={`m-card ${darkMode ? 'theme-dark' : ''}`}>
            <div className="m-card-image">
                {imageUrl ? (
                    <img src={imageUrl} alt="MTG" />
                ) : (
                        <img
                            src={cardBackImgUrl}
                            alt="Card Back"
                            height="310"
                            width="223"
                        />
                    )}
            </div>

            <div className={`m-card-details ${darkMode ? 'theme-dark' : ''}`}>
                <div className="m-card-header">
                    <div className="m-card-header-name">{name}</div>
                    <div className="m-card-header-cost">
                        {matchSymbols(manaCost).map((match, i) => <ManaSymbol key={i} code={match[1].toLowerCase()} />)}
                    </div>
                </div>

                <div className={`m-card-types ${darkMode ? 'theme-dark' : ''}`}>
                    {types} {subtypes && subtypes.length > 0 ? `- ${subtypes}` : ""}
                </div>
                <div className={`m-card-text ${darkMode ? 'theme-dark' : ''}`}>
                    {replaceTextSymbols(text, (match, i) => (<ManaSymbol key={i} code={match.toLowerCase()} />))}
                    <hr />
                    <p style={{ fontStyle: "italic", fontSize: "small" }}>{flavor}</p>
                    {power && (
                        <h3>
                            {power}
                            {toughness ? ` / ${toughness}` : ""}
                        </h3>
                    )}
                </div>
                <div className="m-card-footer">
                    <b>Illustrated by:</b> {artist}
                </div>
            </div>
            <br />
        </div >
    );
};

export default Card;
