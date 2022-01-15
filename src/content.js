import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import Navbar from "./navbar";
import React from "react";

const Content = () => {
  const [CovidItem, setCovidItem] = useState(null);
  const [vacItem, setVacItem] = useState(null);
  const [CovidItemDeaths, setCovidItemDeaths] = useState(null);
  const [CovidItemRecovered, setCovidItemRecovered] = useState(null);
  const [CovidItemAbb, setCovidItemAbb] = useState(null);
  const [CovidItemCapital, setCovidItemCapital] = useState(null);
  const [CovidItemPopulation, setCovidItemPopulation] = useState(null);
  const [CovidItemLife, setCovidItemLife] = useState(null);
  const [CovidItemArea, setCovidItemArea] = useState(null);
  const [CovidItemUpdate, setCovidItemUpdate] = useState(null);

  const [loading, setLoading] = useState(false);
  let country = "Czechia";
  <Navbar />;
  const covFunction = async () => {
    try {
      const data = await axios
        .get(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)

        .then((res) => {
          console.log(res);
          setCovidItem(res.data.All.confirmed);
          setCovidItemDeaths(res.data.All.deaths);
          setCovidItemRecovered(res.data.All.recovered);
          setCovidItemAbb(res.data.All.abbreviation);
          setCovidItemCapital(res.data.All.capital_city);
          setCovidItemPopulation(res.data.All.population);
          setCovidItemLife(res.data.All.life_expectancy);
          setCovidItemArea(res.data.All.sq_km_area);
          setCovidItemUpdate(res.data.All.updated);
        });

      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  const vacFunction = async () => {
    try {
      const data = await axios
        .get(`https://covid-api.mmediagroup.fr/v1//vaccines?country=${country}`)

        .then((res) => {
          console.log(res);
          setVacItem(res.data.All.people_vaccinated);
        });

      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  setTimeout(() => {
    covFunction();
    vacFunction();
  }, 2000);

  // function getCountry() {
  //   var selectedCountry = document.getElementById("country").value;
  //   console.log({ selectedCountry });
  // }

  return (
    <div className="App">
      <div className="selection mt-24 pb-5">
        <label className="text-blue-200 font-medium p-2" for="cars">
          Select country:
        </label>

        <select
          id="country"
          className="bg-blue-100 country font-medium rounded-md"
          name="cars"
          id="cars"
        >
          <option value="Czechia">Czechia</option>
          <option value="Germany">Germany</option>
          <option value="Poland">Poland</option>
          <option value="Slovakia">Slovakia</option>
        </select>
      </div>

      {/* <button onClick={getCountry}>Select</button> */}

      <div className=" bg-bgContent shadow-2xl bg-cover rounded-xl w-1/2 m-auto h-full  ">
        <div className="wrapper border-b-2 m-auto border-blue-300 pb-4 flex justify-between w-11/12">
          <h1 className=" text-5xl text-left font-semibold ml-10 text-white pt-8">
            Czech republic
          </h1>
          <p className="font-normal text-sm mt-6 text-white pr-10 pt-8">
            Updated: {loading ? CovidItemUpdate : "Loading..."}
          </p>
        </div>

        <div className="wrapper w-full text-white font-semibold leading-7 p-20 flex justify-around">
          <div className="covidstats border-l-2 border-blue-300 pl-5">
            <p>Confirmed: {loading ? CovidItem : "Loading..."}</p>
            <p>Deaths: {loading ? CovidItemDeaths : "Loading..."}</p>
            <p>Recovered: {loading ? CovidItemRecovered : "Loading..."}</p>
            <p>Vaccinated: {loading ? vacItem : "Loading..."}</p>
          </div>

          <div className="countrystats border-l-2 h-60 border-blue-300 pl-5">
            <p>Abbreviation: {loading ? CovidItemAbb : "Loading..."}</p>
            <p>Capital city: {loading ? CovidItemCapital : "Loading..."}</p>
            <p>Population: {loading ? CovidItemPopulation : "Loading..."}</p>
            <p>Life expectancy: {loading ? CovidItemLife : "Loading..."}</p>
            <p>Km2 area: {loading ? CovidItemArea : "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
