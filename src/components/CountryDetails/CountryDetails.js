import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function CountryDetails({ countries, info }) {
	
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
		return (
			<div id="info" className="w-50 position-fixed top-40 start-50 translate-right">
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
				<div className="border-bottom d-flex justify-content-around">
					<p className="d-flex align-items-center">Borders:</p>
					<div >

						{newCountryInfo.borders.map((country,index) => countries.map(borderCountry => {

							if (borderCountry.alpha3Code === country) {
								return (

									<p id={`${index}`}>
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
		return (
			<div id="info" className="w-50 position-fixed top-40 start-50 translate-right">
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
				<div className="border-bottom d-flex justify-content-around">
					<p className="d-flex align-items-center">Borders</p>
						<div>
							{CountryInfo.borders.map((country,index) => countries.map(borderCountry => {

								if (borderCountry.alpha3Code === country) {
									return (

										<p id={`${index}`}>
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
