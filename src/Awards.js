import React from 'react'
import './Awards.css'

function Awards() {
    return (
        <div className="awards">
            <div className="container">
                <div className="row">
                    <div className="column col-filters">
                        <div className="column__left">
                            <p>FILTER</p>
                        </div>
                        <div className="column__right">
                            <p>CLEAR FILTERS</p>
                        </div>
                    </div>
                    <div className="column col-awards">
                        <p>Viewing 14 of 75 awards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards
