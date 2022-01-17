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
  const [CovidItemCountry, setCovidItemCountry] = useState(null);

  const [loading, setLoading] = useState(false);
 const [country, setCountry] = useState("Czechia");

 
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
          setCovidItemCountry(res.data.All.country);
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
useEffect(() => {

  covFunction();
  vacFunction();
}, [country])

function getCountry(event)
{
  setCountry(event.target.value);
  setLoading(false)
  console.log("change select", event.target.value)
}

  // function getCountry() {
  //   country = "Czechia";
  //   console.log(country);
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
          onChange={getCountry}
        >
        
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>

          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas	">Bahamas	</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          
          <option value="Barbados">Barbados</option>
          <option value="Belarus	">Belarus	</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>

          <option value="Benin">Benin</option>
          <option value="Bhutan	">Bhutan	</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Botswana">Botswana</option>

          <option value="Brazil">Brazil</option>
          <option value="Brunei	">Brunei	</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burundi">Burundi</option>

          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon	">Cameroon	</option>
          <option value="Canada">Canada</option>
          <option value="Chad">Chad</option>
          
          <option value="Chile">Chile</option>
          <option value="China	">China	</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>

          <option value="Croatia">Croatia</option>
          <option value="Cuba	">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option selected value="Czechia ">Czechia </option>

          <option value="Denmark">Denmark</option>
          <option value="Djibouti	">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option  value="Ecuador ">Ecuador</option>

          <option value="Egypt">Egypt</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option  value="Ethiopia ">Ethiopia</option>

          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option  value="Gabon ">Gabon</option>

          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option  value="Ghana ">Ghana</option>

          <option value="Greece">Greece</option>
          <option value="Grenada">Grenada</option>
          <option value="Guatemala">Guatemala</option>
          <option  value="Guinea ">Guinea</option>

          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Honduras">Honduras</option>
          <option  value="Hungary ">Hungary</option>

          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option  value="Iran ">Iran</option>

          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option  value="Italy ">Italy</option>

          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option  value="Kazakhstan ">Kazakhstan</option>

          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Kuwait">Kuwait</option>
          <option  value="Kyrgyzstan ">Kyrgyzstan</option>

          
          <option value="Laos">Laos</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option  value="Liberia ">Liberia</option>

          
          <option value="Libya">Libya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option  value="Luxembourg">Luxembourg</option>

          
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option  value="Maldives ">Maldives</option>

          
          <option value="Malta">Malta</option>
          <option value="Mexico">Mexico</option>
          <option value="Monaco">Monaco</option>
          <option  value="Mongolia ">Mongolia</option>

          
          <option value="Montenegro">Montenegro</option>
          <option value="Morocco">Morocco</option>
          <option value="Nepal">Nepal</option>
          <option  value="Netherlands ">Netherlands</option>

          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option  value="North Korea">North Korea</option>

          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option  value="Paraguay ">Paraguay</option>

          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option  value="Portugal ">Portugal</option>

          <option value="Qatar">Qatar</option>
          <option value="Romania">Romania</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option  value="Serbia">Serbia</option>

          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option  value="Somalia">Somalia</option>

          <option value="Spain">Spain</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option  value="Syria">Syria</option>

          <option value="Thailand">Thailand</option>
          <option value="Turkey">Turkey</option>
          <option value="Uganda">Uganda</option>
          <option  value="Ukraine">Ukraine</option>

          <option value="United Kingdom">United Kingdom</option>
          <option value="United States of America">United States of America</option>
          <option value="Uruguay">Uruguay</option>
          <option  value="Vietnam">Vietnam</option>
          <option  value="Zimbabwe">Zimbabwe</option>




        </select>
      </div>

      {/* {<button onClick={getCountry}>Select</button>} */}

      <div className=" bg-bgContent shadow-2xl bg-cover rounded-xl w-1/2 m-auto h-full  ">
        <div className="wrapper border-b-2 m-auto border-blue-300 pb-4 flex flex-col lg:flex-row lg:justify-between w-11/12">
          <h1 className=" text-4xl lg:text-5xl  font-semibold text-center lg:ml-10 text-white lg:pt-8">
            {loading ? CovidItemCountry : "Loading..."}
          </h1>
          <p className="font-normal text-[10px]  lg:text-sm mt-6 text-white lg:pr-10 lg:pt-8">
            Updated: {loading ? CovidItemUpdate : "Loading..."}
          </p>
        </div>

        <div className="wrapper w-full text-white font-semibold text-center leading-10 lg:p-20 flex flex-col lg:flex-row text-[0.75rem] lg:text-[0.9rem] justify-around">
          <div className="covidstats lg:border-l-2 lg:border-blue-300 lg:pl-5">
            <p>Confirmed: {loading ? CovidItem : "Loading..."}</p>
            <p>Deaths: {loading ? CovidItemDeaths : "Loading..."}</p>
            <p>Recovered: {loading ? CovidItemRecovered : "Loading..."}</p>
            <p>Vaccinated: {loading ? vacItem : "Loading..."}</p>
          </div>

          <div className="countrystats lg:border-l-2 lg:pt-0 pt-8 pb-10 leading-10 lg:border-blue-300 lg:pl-5">
            <p>Abbreviation: {loading ? CovidItemAbb : "Loading..."}</p>
            <p>Capital city: {loading ? CovidItemCapital : "Loading..."}</p>
            <p>Population: {loading ? CovidItemPopulation : "Loading..."}</p>
            <p>Life expectancy: {loading ? CovidItemLife : "Loading..."}</p>
            <p>Area (km²): {loading ? CovidItemArea : "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
