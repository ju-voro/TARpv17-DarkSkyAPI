window.addEventListener('load', ()=> {
    //let long = 24.7037952;
   // let lat = 59.4075648;
   let long;
   let lat;

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
                console.log(response.json());
            });
        })
        
        
    }

    
        
    


});