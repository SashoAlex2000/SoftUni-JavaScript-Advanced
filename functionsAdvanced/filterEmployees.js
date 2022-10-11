

function filterEmployees(data, criteria) {

    let arr = JSON.parse(data);
    // console.log(arr);


    if (criteria == 'all') {
        let counter = 0;
        for (let obj of arr) {
            console.log(`${counter}. ${obj.first_name} ${obj['last_name']} - ${obj.email}`);
            counter ++;
        }
    }else {
        let shredded = criteria.split("-");
        let [sorter, value] = [shredded[0], shredded[1]];
        let counter = 0;
  
        for (let obj of arr) {
            // console.log(obj[sorter])
            if (obj[sorter] == value){
                // console.log('in the loop')
                console.log(`${counter}. ${obj.first_name} ${obj['last_name']} - ${obj.email}`);
                counter ++;
            }

        }

    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)