const allCountres = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    console.log(countries)
    const countryContainer = document.getElementById('country-container')
    // for(const country of countries){
    //     console.log(country)
    // }
    countries.forEach(country => {
        // console.log(country)
       const createDiv = document.createElement('div');
       createDiv.classList.add('country');
       createDiv.innerHTML = `
       <h5>Name: ${country.name.common}</h5>
       <h3>Capital: ${country.capital ? country.capital[0] : 'No capital'}</h3>
       <h5>Continents: ${country.continents[0]}</h5>
       <button onclick="countryDetails('${country.cca2}') "> Details <button>
       `
       countryContainer.appendChild(createDiv);
    });
}

// const countryDetails = (code) =>{
//     // https://restcountries.com/v2/alpha/{code}
//     const url = `https://restcountries.com/v2/alpha/${code}`
//     fetch(url)
//     .then( res => res.json())
//     .then(data => displayCountryDetails(data))
// }

// const displayCountryDetails = (country) =>{
//     console.log(country)
//     const countryDetails = document.getElementById('country-details');
//     const detailsDiv = document.createElement('div');
//     detailsDiv.innerHTML=`
//     <h2>Name: ${country.name}</h2>
//     <img src="${country.flags.svg}">
//     `
//     countryDetails.appendChild(detailsDiv)
// }
allCountres();