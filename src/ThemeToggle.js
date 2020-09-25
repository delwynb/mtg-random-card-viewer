import React, { useState, useEffect } from 'react';

const DARK_MODE = 'DARK_MODE';

export const useTheme = () => {
    const [darkMode, setDarkMode] = useState(false);

    const switchModes = () => {
        if (!darkMode) {
            document.body.style.backgroundColor = "#212124";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "#212124";
        }

        setMode(!darkMode);
    }

    const setMode = (mode) => {
        window.localStorage.setItem(DARK_MODE, mode);
        setDarkMode(mode);
    }

    useEffect(() => {
        const isDarkMode = window.localStorage.getItem(DARK_MODE);
        isDarkMode && switchModes(isDarkMode);
    }, []);

    return [darkMode, switchModes];
}

const ThemeToggle = ({ darkMode, switchModes }) => {

    return (<div className={`theme-toggles ${darkMode ? 'theme-dark' : ''}`}>
        <b>{darkMode ? 'Dark Mode' : 'Light Mode'}</b><br />
        <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={switchModes} />
            <span className="slider"></span>
        </label>
    </div>);
};

export default ThemeToggle;