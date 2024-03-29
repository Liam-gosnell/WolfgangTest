import React, { useState } from "react";
import "./Awards.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import data from "./awards.json";

function Awards() {
  const cleanData = () => {
    const yearsArray = [...new Set(data.map((award) => award.year))];
    const dataWithIds = data.map((item, index) => {
      const newItem = { ...item, id: index };
      return newItem;
    });

    const dataByYearObj = {};
    yearsArray.forEach((year) => {
      dataByYearObj[year] = dataWithIds.filter((award) => award.year === year);
    });

    return dataByYearObj;
  };

  const awardsData = cleanData();
  const [toggledYears, setToggledYears] = useState({});

  const onToggle = (year) => {
    setToggledYears({ ...toggledYears, [year]: !toggledYears[year] });
  };

  return (
    <div className="awards">
      <div className="wrapper">
        <div className="flexbox">
          <div className="filters">
            <div className="filter-controls">
              <label htmlFor="">FILTER</label>
              <button>CLEAR FILTERS</button>
            </div>
            <div className="category">
              <button
                className="button-toggle"
                onClick="toggleCategoryList('#ceremonies')"
              >
                <span>By Awards Ceremony</span>
                <span id="ceremonies-icon" className="--closed">
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
            <div className="category">
              <button className="button-toggle">
                <span>By Year</span>
                <span id="years-icon" className="--closed">
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
            <div className="category">
              <button
                className="button-toggle"
                onClick="toggleCategoryList('#channels')"
              >
                <span>By Channel</span>
                <span id="channels-icon" className="--closed">
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
            <div className="category">
              <button
                className="button-toggle"
                onClick="toggleCategoryList('#industries')"
              >
                <span>By Industry</span>
                <span id="industries-icon" className="--closed">
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="awards-container">
            <p>
              Viewing 0 of 15 awards
            </p>

            <div className="award-list">
              {Object.keys(awardsData).map((year) => {
                return (
                  <div
                    key={year}
                    className="awards-group"
                    onClick={() => onToggle(year)}
                  >
                    <h2 className="year">
                      {year}
                      <span>
                        Click on the award to read more about the winning entry
                      </span>

                      <span>
                        {toggledYears[year] ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </span>
                    </h2>

                    {toggledYears[year]
                      ? awardsData[year].map((award) => (
                          <div className="row">
                            <div key={award.id} className="award-details">
                                <div className="double-column">
                                <div className="details__left">
                                    <h3 className="ceremony-heading">{award.ceremony}</h3>
                                    <p className="ceremony-para">
                                        <span className="winner">Winner - </span> {award.award}
                                    </p>
                                </div>
                                </div>
                                <div className="column">
                                <div className="details__right">
                                <img src={`${award.logo}`} alt={award.ceremony} />
                                </div>
                                </div>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
