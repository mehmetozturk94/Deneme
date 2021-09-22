const getForm = document.querySelector('form');
const detail = document.querySelector('.detail');
const card = document.querySelector('.card');
const divIcon = document.querySelector('.icon');
const timePic = document.querySelector('img.time');

const updateUI=(data => {
    const getCity = data.getCity;
    const weather = data.weather;

    detail.innerHTML = `<div class="text-muted text-uppercase text-center detail">
                    <h5 class="my-3">${getCity.LocalizedName}</h5>
                    <div class="my-3">${weather.WeatherText}</div>
                        <div class="display-4 my-4">
                            <span>${weather.Temperature.Metric.Value}</span>
                            <span>&deg;C</span>
                        </div>
                </div>`;
            if(card.classList.contains('d-none')){
                card.classList.remove('d-none');
            };
    divIcon.innerHTML = `<i class="fa-solid fa-map-location-dot"></i>`;

    //Change img night or day
    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc='img/day.png'
    }else{
        timeSrc='img/night.png'
    }
    timePic.setAttribute('src',timeSrc)
    })

getForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        const getCityVal = getForm.city.value.trim();
        updateCity(getCityVal).then(data =>{
            updateUI(data)
        })
        getForm.reset();
})

const updateCity= async(getCityVal) =>{

    const getCity = await getCityConditions(getCityVal);
    const weather = await getWeatherSituation(getCity.Key);
    return {
        getCity,
        weather
    }
}
