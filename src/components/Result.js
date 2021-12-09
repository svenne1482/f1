import { React, useState } from 'react'
import './Result.css'


function Result({ getCountryCode, resultData }) {

    return (
        <div className="Result">
            <p className="Position">{resultData.position}.</p>
            <div className="FullName">
                <img
                    src={`https://flagcdn.com/16x12/${getCountryCode(resultData.Driver.nationality)}.png`}
                    width="16"
                    height="12"
                    alt="South Africa" />
                <p>{resultData.Driver.givenName} {resultData.Driver.familyName}</p>
            </div>
            <div className="Constructor">
                <img
                    src={`https://flagcdn.com/16x12/${getCountryCode(resultData.Constructor.nationality)}.png`}
                    width="16"
                    height="12"
                    alt="South Africa" />
                <p>{resultData.Constructor.name}</p>
            </div>
        </div>
    );
}


export default Result