import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async (year, launch, landed) => {
    let url = `https://api.spacexdata.com/v3/launches?limit=100`;
    if (year || launch || landed) {
      if (year) {
        url = url + `&launch_year=${year}`;
      }
      if (launch === false) {
        url = url + `${launch !== false ? `&launch_success=${launch}` : ""}`;
      } else {
        url = url + `${launch !== undefined ? `&launch_success=${launch}` : ""}`;
      }
      if (landed === false) {
        url = url + `${landed !== false ? `&land_success=${landed}` : ""}`;
      } else {
        url = url + `${landed !== undefined ? `&land_success=${landed}` : ""}`;
      }
    }
    let res = await fetch(url);
    let d = await res.json();

    setData(d);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <Sidebar getData={getData} />
        <CardContainer data={data} />
      </div>
      <Footer name={"Yogesh Pal"} />
    </div>
  );
};

export default App;
