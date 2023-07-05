import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function CountryDetails({ countries, info }) {
	const { id } = useParams()
	console.log(id);
	const [CountryInfo, setCountryInfo] = useState([]);
	const [newCountryInfo, setNewCountryInfo] = useState([]);


	if (info.length !== 0 && info !== CountryInfo) {
		setCountryInfo(info);
		setNewCountryInfo([]);
	}

	function displayNewCountry(newClickedCountry) {
		setNewCountryInfo(newClickedCountry);
	}


	if (newCountryInfo.length !== 0) {
		console.log(newCountryInfo);
		return (
			<div id="info" className="border-bottom w-50">
				<img className="w-50 p-3" src={`https://flagpedia.net/data/flags/icon/72x54/${newCountryInfo.alpha2Code.toLowerCase()}.png`} alt="countryFlag" />
				<h3>{newCountryInfo.name.common}</h3>
				<div className='data border-bottom'>
					<p>Capital</p>
					<p>{newCountryInfo.capital}</p>
				</div>
				<div className="border-bottom">
					<p>Area</p>
					<p>{newCountryInfo.area} km2</p>
				</div>
				<div className="border-bottom">
					<p>Borders</p>
					<div>

						{newCountryInfo.borders.map(country => countries.map(borderCountry => {

							if (borderCountry.alpha3Code === country) {
								console.log(borderCountry);
								return (

									<p>
										<Link onClick={() => displayNewCountry(borderCountry)}>{borderCountry.name.common}</Link>

									</p>
								)
							}
						}))}

					</div>
				</div>




			</div>
		)

	}
	else if (CountryInfo.length !== 0) {
		console.log(CountryInfo);
		return (
			<div id="info" className="border-bottom w-50">
				<img className="w-50 p-3" src={`https://flagpedia.net/data/flags/icon/72x54/${CountryInfo.alpha2Code.toLowerCase()}.png`} alt="countryFlag" />
				<h3>{CountryInfo.name.common}</h3>
				<div className='data border-bottom'>
					<p>Capital</p>
					<p>{CountryInfo.capital}</p>
				</div>
				<div className="border-bottom">
					<p>Area</p>
					<p>{CountryInfo.area} km2</p>
				</div>
				<div className="border-bottom">
					<p>Borders</p>
						<div>
							{CountryInfo.borders.map(country => countries.map(borderCountry => {

								if (borderCountry.alpha3Code === country) {
									console.log(borderCountry);
									return (

										<p>
											<Link onClick={() => displayNewCountry(borderCountry)}>{borderCountry.name.common}</Link>

										</p>
									)
								}
							}))}
						</div>
				</div>




			</div>
		)

	}
}
;

export default CountryDetails;
