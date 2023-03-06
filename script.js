

let cities = [];
function Add() {

    let city = document.getElementById('searchInput').value;
    if (city != '') {
        if (cities.indexOf(city) == (-1)) {
            cities.unshift(city);
            document.getElementById('searchInput').value = '';

            let word = '';
            for (let i = 0; i < cities.length; i++) {
                word += '<li>' + cities[i] + '</li>';
            }

            document.getElementById('citiesList').innerHTML = word;

            console.log(cities);
        }
        else {
            alert('This city is already added!');
            document.getElementById('searchInput').value = '';
        }
    }
    else {
        alert('Write a city name please!');
    }

}
function Delete() {
    let city = document.getElementById('searchInput').value;
    cities.shift(city);
    let word = '';
    for (let i = 0; i < cities.length; i++) {
        word += '<li>' + cities[i] + '</li>';
    }

    document.getElementById('citiesList').innerHTML = word;
}
function Search() {
    let searchCity = document.getElementById('searchInput').value;
    if (searchCity != '') {
        if (cities.indexOf(searchCity) > -1) {
            alert('your city is already added, its list number is : ' + (cities.indexOf(searchCity) + 1));
            document.getElementById('searchInput').value = '';
        }
        else {
            alert('This city is not in list!')
        }
    }
    else {
        alert('Write a city name please!');
    }

}


