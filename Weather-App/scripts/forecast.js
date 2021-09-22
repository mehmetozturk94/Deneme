const AccuweatherKey = 'SnmAHOb5DfOy3AVKXAEZ6AGmWfiZDFwB';

//get Weather Situation with location key(318290)
const getWeatherSituation =async (id)=>{
        const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
        const weatherQuery = `${id}?apikey= ${AccuweatherKey}`;

        const sendReqWeather = await fetch(weatherUrl+weatherQuery);
        const WeatherJson = await sendReqWeather.json();
        return WeatherJson[0];
}

//get City Conditions
const getCityConditions = async(location)=>{
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search'; 
    const query = `?apikey=${AccuweatherKey}&q=${location} `;
    const sendReq = await fetch(url+query);
    const response= await sendReq.json();
    return response[0];
}
/*
getCityConditions('izmir').then(data=>{
    return getWeatherSituation(data.Key)
}).then(data => {
    console.log(data)
}).catch(err=>{
    console.log("error occured",err)
})
*/
/*
getWeatherSituation('318290').then(data=>{
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/