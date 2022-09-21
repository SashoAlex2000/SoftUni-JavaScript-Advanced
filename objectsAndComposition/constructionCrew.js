

function constructionCrew(workerObj) {

    if (workerObj.dizziness == false) {
        return workerObj;
    }else {

        let neededHydration = workerObj.experience * workerObj.weight * 0.1;
        workerObj.levelOfHydrated += neededHydration;
        workerObj.dizziness = false;
        return workerObj;

    }


}


console.log(constructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }
))

console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ))