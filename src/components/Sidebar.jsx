import React, { useEffect, useState } from "react";

const Sidebar = ({ getData }) => {
  const [year, setYear] = useState();
  const [launch, setLaunch] = useState();
  const [landed, setLanded] = useState();

  useEffect(() => {
    getData(year, launch, landed);
  }, [year, landed, launch]);

  const yearsArray = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  return (
    <div className="sidebar">
      <div className="heading">Filters</div>
      <div className="years">
        <div className="title">Launch Year</div>
        <div>
          {yearsArray.map((y, i) => {
            return (
              <button
                className="yearTab"
                key={i}
                onClick={() => {
                  setYear(y);
                }}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>
      <div className="launching">
        <div className="title">Successful Launch</div>
        <div>
          <button
            onClick={() => {
              setLaunch(true);
            }}
          >
            True
          </button>
          <button
            onClick={() => {
              setLaunch(false);
            }}
          >
            False
          </button>
        </div>
      </div>
      <div className="landing">
        <div className="title">Successful Landing</div>
        <div>
          <button
            onClick={() => {
              setLanded(true);
            }}
          >
            True
          </button>
          <button
            onClick={() => {
              setLanded(false);
            }}
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
