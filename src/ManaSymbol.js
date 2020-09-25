import React from "react";

// All Mana icons can be found here
// https://andrewgioia.github.io/Mana/icons.html
// the class names and attributes can be found here:
// https://andrewgioia.github.io/Mana/attributes.html

const ManaSymbol = ({ code }) => {
    return (
        <div style={{ display: "inline-block" }}>
            <i className={`ms ms-${code}`}></i>
        </div>
    );
};

export default ManaSymbol;
