async function getData(value) {

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=581f6f2b7f6bd62d71f24d9c1c756500`
    //fetch(api,options)
    let response = await fetch(api,
        { method: 'GET' })
    let realData = await response.json();
    console.log(realData);
    cityName.textContent = 'Shahar nomi: ' + realData.name
    country.textContent = 'Mamlakat: ' + realData.sys.country;
    img.src = `http://openweathermap.org/img/wn/${realData.weather[0].icon}@2x.png`
    const date = new Date()
    let time = date.toTimeString()
    times.textContent =  time
    temps.textContent = "Havo harorati: " + (realData.main.temp - 273 | 0) + ' C'
    description.textContent = 'Ayni vaqtda: ' + realData.weather[0].description
    humidity.textContent = 'Namlik: ' + realData.main.humidity + '%'
    speed.textContent = 'Shamol tezligi: ' + realData.wind.speed + 'm/s'
    pressure.textContent = 'Bosim : ' + realData.main.pressure + 'Pa'
    seaLevel.textContent = "Dengiz sathi: " + realData.main.pressure + 'mbar'
}

// getData() 

btn.onclick = () => {
    if (input.value != '') {
        getData(input.value);
    }
}