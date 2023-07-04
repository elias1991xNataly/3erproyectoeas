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




	return (
		<div className="CountryDetails">



			{/* <img src={`https://flagpedia.net/data/flags/icon/72x54/${props.country.alpha2Code.toLowerCase()}.png`}></img> */}

			{/* <h1>{country.name.common}</h1> */}





			{props.countriesData.map((country, index) => {
				const borders = country.borders;
				// borders.map((border)=>{props.countriesData.alpha3code.filter(border); return })



					;
				return (
					<div>

						<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
						<p>{country.name.common}</p>
						<p>Capital: {country.capital}</p>
						<p>Area: {country.area} km2</p>
						<p>Borders:
							{borders.map((border)=><p><Link to={`/${country.alpha3Code}`}>{border}</Link></p>)}
							{/* {props.countriesData.borders.map((border) => {
								return <p><Link to={``}>{country.border}</Link></p>
							})} */}

						</p>
					</div>

				)


			})



			}


		</div>
	)
}

export default CountryDetails;
