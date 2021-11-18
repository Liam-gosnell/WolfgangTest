import React from 'react';
import './Awards.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Awards() {
    return (
        <div className="awards wrapper">
            <div className="flexbox">
                <div className="filters">
                    <div className="filter-controls">
                        <label htmlFor="">FILTER</label>
                        <button>CLEAR FILTERS</button>
                    </div>
                    <div className="category">
                        <button className="button-toggle" onClick="toggleCategoryList('#ceremonies')">
                            <span>By Awards Ceremony</span>
                            <span id="ceremonies-icon" className="--closed">
                                <KeyboardArrowDownIcon />
                            </span>
                        </button>
                    </div>
                    <div className="category">
                        <button className="button-toggle" onClick="toggleCategoryList('#years')">
                            <span>By Year</span>
                            <span id="years-icon" className="--closed">
                                <KeyboardArrowDownIcon />
                            </span>
                        </button>
                    </div>
                    <div className="category">
                        <button className="button-toggle" onClick="toggleCategoryList('#channels')">
                            <span>By Channel</span>
                            <span id="channels-icon" className="--closed">
                                <KeyboardArrowDownIcon />
                            </span>
                        </button>
                    </div>
                    <div className="category">
                        <button className="button-toggle" onClick="toggleCategoryList('#industries')">
                            <span>By Industry</span>
                            <span id="industries-icon" className="--closed">
                                <KeyboardArrowDownIcon />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="awards">
                    <p> Viewing <span id="award-count">13</span> of 75 awards </p>
                    <div className="awards-group">
                        <h2 className="year">
                            2021 
                        <span>Click on the award to read more about the winning entry</span>
                        <span><KeyboardArrowDownIcon /></span>
                        </h2>
                        <div className="container-2021">
                            {/* <div className="ceremony">
                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Awards
