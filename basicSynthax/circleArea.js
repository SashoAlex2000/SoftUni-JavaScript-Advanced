

function circleArea(number){
    if (typeof number != "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof number}.`);
    }else{
        let area = Math.PI * (number ** 2);
        console.log(area.toFixed(2));
    }
}

circleArea(5)
circleArea("name")
circleArea({
    name: "Gosho"
})