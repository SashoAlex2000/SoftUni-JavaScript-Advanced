

function areaAndVolumeCalc(area, vol, data) { 

    let arr = JSON.parse(data);
    let result = []

    for (let data of arr) {
        // console.log(data);
        let currentObj = {

        }
        currentObj['area'] = area.call(data);
        
        // console.log(area.call(data))
        currentObj['volume'] = vol.call(data);
        // console.log(currentObj)
        result.push(currentObj);
    }

    return result;

}


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};




console.log(areaAndVolumeCalc(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
))