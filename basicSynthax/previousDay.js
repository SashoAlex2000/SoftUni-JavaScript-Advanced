

// let currentDate = new Date();

// console.log(currentDate)


function previousDay(year, month, day){
    let date = new Date(year, month -1, day - 1);
    let newMonth = date.getMonth() + 1;
    let newDay = date.getDate();
    console.log(`${year}-${newMonth}-${newDay}`);
}

previousDay(2016, 9, 30)
previousDay(2016, 10, 1)