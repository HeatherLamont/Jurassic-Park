const Dinosaur = require('./dinosaur')
const Park = function(name, ticketPrice,dinosaurs=[]) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [dinosaurs];
}

Park.prototype.addDinosaur = function(newDinosaur){
    this.dinosaurs.push(newDinosaur);
}

Park.prototype.removeDinosaur = function(dinoToRemove){
    // const toBeReomvedList = [];
    for (dino of this.dinosaurs){
        if (dino === dinoToRemove){
            // toBeReomvedList.push(dino)
            this.dinosaurs.pop(dino)
        }
    }
    // const removeUs = toBeReomvedList.indexOf(dinoToRemove)
}

Park.prototype.DinoMostVisited = function(){
    // let mostVisited = Math.max.apply(null, this.dinosaurs.guestsAttractedPerDay)
    // return mostVisited
    const guestNumOfEachDino =[];
    for (dino of this.dinosaurs){
        guestNumOfEachDino.push(dino.guestsAttractedPerDay)
    }
    let largestNum = Math.max.apply(0,guestNumOfEachDino)
   if (dino.guestsAttractedPerDay === largestNum){
       return dino
   }
}

Park.prototype.findDinoBySpecies = function(whichSpecies){
    const listOfDinos =[];
    for (dino of this.dinosaurs){
     if(dino.species == whichSpecies)
      listOfDinos.push(dino);
    }
    return listOfDinos
}

Park.prototype.totalNumOfVisitorsPerDay = function(){
    const listOfTotals =[];
    for (dino of this.dinosaurs){
      listOfTotals.push(dino.guestsAttractedPerDay);
    }
    const initialValue = 0;
    const sumWithInitial = listOfTotals.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue );
    return sumWithInitial
    
}

Park.prototype.totalNumOfVisitorsPerYear = function(){
    const total = this.totalNumOfVisitorsPerDay()*365
    return total
}

// Park.prototype.totalNumOfVisitorsPerYear = function(){ 
//     const listOfTotals =[];
//     for (dino of this.dinosaurs){
//       listOfTotals.push(dino.guestsAttractedPerDay);
//     }
//     const initialValue = 0;
//     const sumWithInitial = listOfTotals.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue );
//     const total = sumWithInitial*365
//     return total
// }

Park.prototype.totalRevenuePerYear = function(){
    const totalRevenue = this.totalNumOfVisitorsPerYear()*this.ticketPrice
    return totalRevenue
}

// Park.prototype.totalRevenuePerYear = function(){
//     const listOfTotals =[];
//     for (dino of this.dinosaurs){
//         listOfTotals.push(dino.guestsAttractedPerDay);
//       }
//       const initialValue = 0;
//       const sumWithInitial = listOfTotals.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue );
//       const total = sumWithInitial*365
//       return total * this.ticketPrice
    
// }

Park.prototype.removeSpeciesOfDinosaur = function(speciesToRemove){
    const dinosToRemove =[];
    for (dino of this.dinosaurs){
      if (dino.species == speciesToRemove)
      dinosToRemove.push(dino);
      indexToRemove = dinosToRemove.indexOf(speciesToRemove)
      this.dinosaurs.splice(indexToRemove, 1)
    
    }
}

Park.prototype.getDietTypeNums = function(){
    const dietTypes = {
        'Carnivore': 0,
        'Herbivore': 0,
        'Omnivore': 0,
    };
    let carnivoreList = []
    for (dino of this.dinosaurs){
        if (dino.diet == 'Carnivore'){
        carnivoreList.push(dino);
        dietTypes.Carnivore = carnivoreList.length
        }else{
            let herbivoreList = []
            for (dino of this.dinosaurs){
            if (dino.diet == 'Herbivore'){
                herbivoreList.push(dino);
                dietTypes.Herbivore = herbivoreList.length
                
            }
        }
        }

    }
    return dietTypes
}


// tRex = new Dinosaur ('T-Rex', "Carnivore", 50);
// bronto = new Dinosaur("Brontosaurus", "Herbivore", 20);
// park = new Park ("Jurassic Park", 10.00, [tRex, bronto]);

// const listOfDinos2 =[];
//     for (dino of park.dinosaurs){
//       listOfDinos2.push(dino);
//     }
//     listOfDinos2.forEach(dinosaurs.guestsAttractedPerDay => console.log(dinosaurs.guestsAttractedPerDay));
    

module.exports = Park;