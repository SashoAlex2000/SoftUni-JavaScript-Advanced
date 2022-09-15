

function roadRadar(speed, area){

    let limit;

    switch (area) {
        case "motorway": limit = 130; break;
        case "interstate": limit = 90; break;
        case "city": limit = 50; break;
        case "residential": limit = 20; break;
    }
    let isSpeeding = true;
    isSpeeding = speed > limit ? (speed - limit):false;

    if (!isSpeeding){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }else {
        let status;
         if (isSpeeding <= 20){
            status = "speeding";
        }
        else if (isSpeeding <= 40){
            status = "excessive speeding";
        }else{
            status = "reckless driving"
        }
        
        console.log(`The speed is ${isSpeeding} km/h faster than the allowed speed of ${limit} - ${status}`);

    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')