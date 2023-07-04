import React from "react";
import countriesdataJSON from "../../countries-data.json";
import { Routes, Route, useParams } from "react-router-dom";
import CountriesList from "../CountriesList/CountriesList";
import { Link } from "react-router-dom";
import { useState } from "react";

function CountryDetails(props) {
	const { id } = useParams()
	console.log(id);
	console.log(props.algo, props.otraCosa);
	{ console.log(props.countriesData) }
	{ console.log(props.countryID) }
	{ console.log(props) }




	return (
		<div className="CountryDetails">



			{/* <img src={`https://flagpedia.net/data/flags/icon/72x54/${props.country.alpha2Code.toLowerCase()}.png`}></img> */}

			{/* <h1>{country.name.common}</h1> */}

			{/* <p>{props.countryID}</p> */}




			{/* {props.countriesData.map((country, index) => {
				return (
					<div>

						<p>{country.name.common}</p>
						<p>Capital: {country.capital}</p>
						<p>Area: {country.area} km2</p>
						<p>Borders:
							<p>{country.borders}</p>
							{props.countriesData.borders.map((border) => {
								return <p><Link to={``}>{country.border}</Link></p>
							})}

						</p>
					</div>

				)


			})



			} */}


		</div>
	)
}

export default CountryDetails;
