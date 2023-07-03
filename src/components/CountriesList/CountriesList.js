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
		<div >
			<div id="nations" className="d-flex-column mt-10 justify-content-start align-self-start ">
				{countries.map((country, index) => {
					return (
						<div key={index} id='main' className="border  d-grid gap-3  mt-10 p-3 border-dark w-25 h-50 border-1px-solid-black p-10">
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
