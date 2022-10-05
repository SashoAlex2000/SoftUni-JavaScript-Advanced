function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        let lines = document.getElementById('inputs').children[1].value;
        console.log(typeof lines)
        let arr = JSON.parse(lines)
        console.log(arr)

        let restaurants = []

        function calculateAverageSalary(someObj) {
            let totalSalary = 0;
            // let numberOfworkers = someObj.workers.length;
            let numberOfworkers = 0;
        
            for (let key in someObj.workers) {
                // let split = double.split(" ")
                let salary = Number(someObj.workers[key]);
                totalSalary += salary;
                numberOfworkers ++;
            }
            let average = totalSalary / numberOfworkers;
            return average
        }
        
        
        function hellsKitchen(arr) {
            let restaurants = [
        
            ] 
            // ^ an array of restaurant objects --> {
            //     name: restaurant name,
            //     workers: list of workers
            //     }
        
            for (let line of arr) {
                let restaurantName;
                let workers;
                let second;
                [restaurantName, second] = line.split(" - ")
                workers = second.split(", ")
                let exists = false;
        
                for (let restaurant of restaurants) {
                    if (restaurant.name == restaurantName) {
                        exists = true;
                        break;
                    }
                }
        
                if (exists === true) {
                    for (let restaurant of restaurants) {
                        if (restaurant.name == restaurantName) {
                            for (let pair of workers) {
                                let shreddedPair = pair.split(" ");
                                let workerName;
                                let WorkerSalary;
                                [workerName, WorkerSalary] = [shreddedPair[0], Number(shreddedPair[1])]
                                restaurant.workers[workerName] = WorkerSalary;
                            }
                            let avgSalary = calculateAverageSalary(restaurant);
                            restaurant.average = avgSalary;

                        }
                    }
                }else {
                    let workersObj = {
        
                    }
                    for (let pair of workers) {
                        let shreddedPair = pair.split(" ");
                        let workerName;
                        let WorkerSalary;
                        [workerName, WorkerSalary] = [shreddedPair[0], Number(shreddedPair[1])]
                        workersObj[workerName] = WorkerSalary;
                    }
                    console.log(workersObj);
        
                    let currentObj = {
                        name: restaurantName,
                        // workers: workers
                        workers: workersObj
                    }
                    let avgSalary = calculateAverageSalary(currentObj);
                    currentObj.average = avgSalary;
                    restaurants.push(currentObj)
                }
        
            }
        
            for (let restaurant of restaurants) {
                let entries = Object.entries(restaurant.workers);
                
                entries.sort((a,b) => b[1] - a[1]);
                // for (let th of entries) {
                //     console.log(th)
                // }
                restaurant.workers = entries
            }
            restaurants.sort((a,b) => b.average - a.average);
        
            // for (let res of restaurants) {
            //     console.log(res.name);
            //     console.log(res.workers);
            //     // console.log(calculateAverageSalary(res));
            //     console.log(res)
            // }   
            let bestRestaurant = restaurants[0];
            let restaurantOutput = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.average.toFixed(2)} Best Salary: ${bestRestaurant.workers[0][1].toFixed(2)}`;
            // document.getElementById('bestRestaurant').children[2].innerHTML += restaurantOutput;
            document.getElementById('bestRestaurant').children[2].textContent = restaurantOutput;  //!!! HAS TO BE children[1] for JUDGE!!
            
            let bestWorkers = ``;
            console.log(bestRestaurant.workers);
            for (let double of bestRestaurant.workers) {
                console.log(double)
                bestWorkers += `Name: ${double[0]} With Salary: ${double[1]} `
            } 
            // document.getElementById('workers').children[2].innerHTML += bestWorkers;
            document.getElementById('workers').children[2].textContent = bestWorkers;    //!!! HAS TO BE children[1] for JUDGE!!
        }
        
        // document.getElementById('bestRestaurant').innerHTML += `<p>${currText}</p>`;
        // console.log(document.getElementById('bestRestaurant').children)
        // let testBest = document.getElementById('bestRestaurant').children[2];
        // testBest.innerHTML += `TEST`

        hellsKitchen(arr);        
        console.log(document.querySelector("#outputs #bestRestaurant p").textContent.trim());
    }
}

