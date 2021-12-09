import react, { useState } from 'react';
import './Race.css'

function Race({ raceData , handleSelectRace}) {

    const [hover,SetHover] = useState("");

    const handleMouseEnter = (e) =>
    {
        SetHover("hover");
    }
    const handleMouseLeave = (e) =>
    {
        SetHover("");
    }

    return (
        <div className={`Race Race-${hover}`} onMouseEnter={(e) => handleMouseEnter(e) } onMouseLeave={(e) => handleMouseLeave(e)} onClick={() => handleSelectRace(raceData)}>
            <h1>{raceData.raceName}</h1>
            <h2>{raceData.date}</h2>
        </div>
    );
}

export default Race