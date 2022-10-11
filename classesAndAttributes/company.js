

class Company {

    constructor () {
        this.departments = {
            'testName': [],
        }
    }

    checkIfValid(param) {
        let valid = true

        if (param == null || param == "" || param == undefined) {
            valid = false;
        }

        return valid;
    }

    addEmployee(name, salary, position, department) {
        if (!this.checkIfValid(name) || !this.checkIfValid(salary) ||!this.checkIfValid(position) ||!this.checkIfValid(department)){
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        let newObj = {
            name,
            salary,
            position,
            department
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = []
        }

        this.departments[department].push(newObj);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        function calculateAvgSalaryForDepartment(array) {
            let totalSalary = 0;
            let numberOfWorkers = 0;

            for (let employee of array) {
                totalSalary += employee.salary;
                numberOfWorkers ++;
            }

            return (totalSalary / numberOfWorkers).toFixed(2);
        }

        let bestDeptKey = "";
        let highestAvgSalary = -99999;

        for (let [key, value] of Object.entries(this.departments)) {
            // console.log(key)
            let currentAverage = calculateAvgSalaryForDepartment(this.departments[key])
            // console.log(currentAverage)

            if (currentAverage > highestAvgSalary) {
                highestAvgSalary = currentAverage;
                bestDeptKey = key;
            }
        }

        // console.log('THE BEST DEPT IS:')
        // console.log(bestDeptKey)
        // console.log(this.departments[bestDeptKey])

        let result = `Best Department is: ${bestDeptKey}\n`;
        result += `Average salary: ${highestAvgSalary}\n`;

        let outputDept = this.departments[bestDeptKey];
        outputDept.sort((a,b) => a.name.localeCompare(b.name))
        outputDept.sort((a,b) => {
            if (a.salary < b.salary) {
                return 1
            }
            else if (a.salary > b.salary) {
                return -1;
            }
            
            return a.name.localeCompare(b.name)
            // if (a.name < b.name) {
            //     return 1;
            // }
            // else if (a.name > b.name) {
            //     return -1
            // }
            // else {
            //     return 0
            // }
            
        });

        for (let emp of outputDept) {
            if (outputDept.indexOf(emp) < outputDept.length -1 ){
                result += `${emp.name} ${emp.salary} ${emp.position}\n`
            }else{
                result += `${emp.name} ${emp.salary} ${emp.position}`
            }
        }

        return result

    }
}



let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// for (let employee of c.departments) {
//     console.log(employee)
// }

// for (let [key, value] of Object.entries(c.departments)) {
//     console.log(`${key}`)
//     console.log()
//     for (let employee of value) {
//         console.log(employee)
//     }
// }