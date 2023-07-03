import countriesData from "../../countries-data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountriesList = () => {
	const [countries, setCountries] = useState(countriesData);


	const [information, setInformation] = useState();
	// useEffect(() => {
	// 	setCountries(props.countries);
	// }, [props.countries]);


	return (
		<div>
			<div id="nations">
				{countries.map((country, index) => {
					return (
						<div key={index} id='main'>
							<Link className="country" to={"/"} >
								<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
								<p>{country.name.common}</p>
							</Link>
						</div>



					)


				})}










			</div>
		</div>
	)
};



export default CountriesList;
