

function rectangle(width, height, color) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    color = capitalizeFirstLetter(color);

    let currObj = {
        width,
        height,
        color,
        calcArea: () => {
            let result = width * height;
            return result;
        }
    };

    return currObj;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.width * rect.height)
console.log(rect.calcArea());
