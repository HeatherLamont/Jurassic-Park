const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let tRex;
  let bronto;
  let diplo;
  let veloci;

  beforeEach(function () {
    tRex = new Dinosaur ('T-Rex', "Carnivore", 50);
    bronto = new Dinosaur("Brontosaurus", "Herbivore", 20);
    diplo = new Dinosaur("Diplodocus", "Herbivore", 30);
    diplo2 = new Dinosaur("Diplodocus", "Herbivore", 30);
    veloci = new Dinosaur("Velociraptor", "Carnivore", 60);
    park = new Park ("Jurassic Park", 10.00, tRex);
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 10.00);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, [tRex]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(bronto);
    assert.deepStrictEqual(park.dinosaurs, [tRex, bronto]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(bronto);
    park.removeDinosaur(bronto);
    assert.deepStrictEqual(park.dinosaurs, [tRex])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(bronto);
    park.addDinosaur(diplo);
    park.addDinosaur(veloci);
    
    assert.deepStrictEqual(park.DinoMostVisited(), veloci)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(bronto);
    park.addDinosaur(diplo);
    park.addDinosaur(diplo2);
    park.addDinosaur(veloci);
    // actual =[];
    // for (dino of park.dinosaurs){
    //   if (dino.species == 'Brontosaurus')
    //   actual.push(dino);
    // }
    // park.findDinoBySpecies("Brontosaurus")
    assert.deepStrictEqual(park.findDinoBySpecies("Diplodocus"), [diplo,diplo2]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(bronto);
    park.addDinosaur(diplo);
    park.addDinosaur(diplo2);
    park.addDinosaur(veloci);

    assert.deepStrictEqual(park.totalNumOfVisitorsPerDay(), 190)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(bronto);
    park.addDinosaur(diplo);
    park.addDinosaur(diplo2);
    park.addDinosaur(veloci);

    assert.strictEqual(park.totalNumOfVisitorsPerYear(), 69350)
  });
    
  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(bronto);
    park.addDinosaur(diplo);
    park.addDinosaur(diplo2);
    park.addDinosaur(veloci);

    assert.strictEqual(park.totalRevenuePerYear(), 693500 )
  });

  it('Should remove all dinosaurs of a particular species', function(){
    
    park.addDinosaur(diplo);
    park.addDinosaur(diplo2);
   

    park.removeSpeciesOfDinosaur("Diplodocus")    
    assert.deepStrictEqual(park.dinosaurs, [tRex])
  })

  it('Should Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){
    park.addDinosaur(bronto);
    park.addDinosaur(diplo);
    park.addDinosaur(diplo2);
    park.addDinosaur(veloci);
    assert.deepStrictEqual(park.getDietTypeNums(),{ 'Carnivore': 2, 'Herbivore': 3, 'Omnivore': 0 })
  })

});
