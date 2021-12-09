import react, { useState } from 'react';
import Race from './Race'
import './RaceSeason.css'

function RaceSeason({raceArray,handleSelectRace})
{
    let races;
    if(raceArray != null)
    {
        races = raceArray.MRData.RaceTable.Races.map(race => <Race raceData={race} handleSelectRace={handleSelectRace}/>)
    }

    return(
        <div className="RaceSeason">
            {races}
        </div>
        
    );
}

export default RaceSeason