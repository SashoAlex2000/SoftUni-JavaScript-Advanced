

function timeToWalk(steps, footprint, speed){

    let distance = steps * footprint;
    speed = speed / 3.6;

    let bonus = Math.floor(distance / 500);
    bonus *= 60;

    let result = distance / speed;
    result += bonus;

    // console.log(result)
    let hours = Math.floor(result / 3600);
    result = result - hours * 3600;

    let minutes = Math.floor(result / 60);
    result  = result - minutes * 60;

    hours = Math.ceil(hours);
    minutes = Math.ceil(minutes);
    result = Math.ceil(result);

    let printHours;
    let printMinutes;
    let printSeconds;

    if ((hours.toString()).length == 1){
        printHours = `0${Math.ceil(hours)}`;
    }
    else{
        printHours = `${Math.ceil(hours)}`;
    }

    if ((minutes.toString()).length == 1){
        printMinutes = `0${Math.ceil(minutes)}`;
    }
    else{
        printMinutes = `${Math.ceil(minutes)}`;
    }

    if ((result.toString()).length == 1){
        printSeconds = `0${Math.ceil(result)}`;
    }
    else{
        printSeconds = `${Math.ceil(result)}`;
    }


    console.log(`${printHours}:${printMinutes}:${printSeconds}`);


}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)