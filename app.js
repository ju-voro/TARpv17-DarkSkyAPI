window.addEventListener('load', ()=> {
   //let long = 24.7037952;
   // let lat = 59.4075648;
   let long;
   let lat;

    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let locationTimeZone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".degree-section");
    let temperatureSectionSpan = document.querySelector(".degree-section span");


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log("Long: ", long);
            console.log("Lat: ", lat);
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/15252bec15e9e540c5d51fa6b0e90a66/${lat},${long}`;

            fetch(api)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                const {temperature, summary, icon} = data.currently;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimeZone.textContent = data.timezone;

                let celsius = (temperature - 32) * (5/9);

                temperatureSection.addEventListener('click', () => {
                    if(temperatureSectionSpan.textContent === "F"){
                        temperatureSectionSpan.textContent = "℃";
                        temperatureDegree.textContent = Math.floor(celsius);
                    } else {
                        temperatureSectionSpan.textContent = "F";
                        temperatureDegree.textContent = temperature;
                    }
                });
                
            });
        });


        
        
    }

    
        
    


});