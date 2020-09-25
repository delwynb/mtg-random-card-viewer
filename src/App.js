import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";
import Card from "./Card";
import Loader from "./Loader";

import "./styles.css";
import ThemeToggle, { useTheme } from "./ThemeToggle";

const MTG_URL = "https://api.magicthegathering.io/v1/cards";

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

const useMTGCardRandomizer = () => {
    const [card, setCard] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRandomCard();
    }, []);

    const getRandomCard = () => {
        setLoading(true);

        const randomPage = getRandomNumber(1000);
        const params = { page: randomPage };

        axios
            .get(MTG_URL, { params })
            .then((res) => {
                const cards = [...res.data.cards];
                const randomCard = cards[getRandomNumber(100)];

                setCard(randomCard);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    return [card, getRandomCard, loading];
}

const App = () => {
    const [card, getRandomCard, loading] = useMTGCardRandomizer();
    const [darkMode, switchModes] = useTheme();

    return (
        <div className="main">
            {loading ? <Loader darkMode={darkMode} /> :
                <div>
                    <ThemeToggle
                        darkMode={darkMode}
                        switchModes={switchModes}
                    />
                    <Card details={card} darkMode={darkMode} />
                </div>}
            <div className="controls">
                {!loading && <Button onClick={getRandomCard}>Show Random Card</Button>}
            </div>
        </div>
    );
};

export default App;
