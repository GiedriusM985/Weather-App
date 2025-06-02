async function fetchData(latitude, longitude, callback) {
    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,precipitation,relative_humidity_2m,wind_speed_10m&wind_speed_unit=ms`;
    const API_HEADERS = {
        method: 'GET'
    };

    try {
        const response = await fetch(API_URL, API_HEADERS);
        const data = await response.json();
        callback(data) 
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; 
    }
}

function getImage(prec, hum) {
    let imageUrl = "";
    if (prec < 1 && hum < 90) 
        imageUrl = "https://cdn-icons-png.flaticon.com/512/3222/3222691.png";
    else if (prec < 1 && hum >= 90) 
        imageUrl = "https://cdn-icons-png.flaticon.com/512/5903/5903939.png";
    
    else imageUrl = "https://cdn-icons-png.flaticon.com/512/4834/4834585.png";

    return imageUrl;
}

function getMaxValue(arr){
    let max = -99;
    arr.map((el) => { 
        if (el > max)
            max = el;
    })   
        return max;       
    }
function getMinValue(arr){
    let min = 99;
    arr.map((el) => {
        if (el < min)
            min = el;
    })
        return min;    
}

export {
    fetchData,
    getImage,
    getMaxValue,
    getMinValue    
}