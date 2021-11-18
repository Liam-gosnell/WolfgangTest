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
                </div>
            </div>
        </div>
       
    )
}

export default Awards
