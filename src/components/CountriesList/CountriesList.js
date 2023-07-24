import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryDetails from "../CountryDetails";
import axios from "axios";

const CountriesList = ({ url }) => {
	const [countries, setCountries] = useState([]);
	const [countryChosen, setCountryChosen] = useState([]);

	useEffect(() => {
		axios.get(url).then(response => {
			setCountries(response.data)
		});
	}, );
	const showInformation = (country) => {
		setCountryChosen(country);
	}
	console.log(countries);

	return (
		<div className="overflow-y-scroll vh-100 d-flex justify-content-start position-relative">
			<div id="nations" className="w-25 ">
				{countries.map((country, index) => {
					return (
						<div key={index} id='main' className="border d-flex justify-content-center align-items-center align-self-center p-3">
							<Link className="country" to={`/${country.alpha3Code}`} onClick={() => showInformation(country)}  >
								<img  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="countryListFlag"/>
								<p>{country.name.common}</p>
							</Link>
						</div>



					)


				})}

			</div>
			<CountryDetails info={countryChosen} countries={countries} />
		</div>






	)
};



export default CountriesList;
