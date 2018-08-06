import { pet } from './../src/tamagotchi.js';
describe('Tamagotchi', function(){
  // let tama = pet;

  beforeEach(function() {
    jasmine.clock().install();
    pet.foodLevel = 75;
    pet.attentionLevel = 75;
    pet.restLevel =75;
    pet.name = "Tama";
    pet.setHunger();
    pet.setAttention();
    pet.setRest();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name and all level of 75 when its created', function(){
    expect(pet.name).toEqual("Tama");
    expect(pet.foodLevel).toEqual(75);
    expect(pet.attentionLevel).toEqual(75);
    expect(pet.restLevel).toEqual(75);
  });

  it('should have a food level of 72 attention of after 12001 milliseconds', function(){
    jasmine.clock().tick(12001);
    expect(pet.foodLevel).toEqual(63);
    expect(pet.attentionLevel).toEqual(69);
    expect(pet.restLevel).toEqual(71);
  });

  it('should get hungry if the food level drops below zero', function(){
    pet.foodLevel = 0;
    pet.attentionLevel = 0;
    pet.restLevel = 0;
    expect(pet.starved()).toEqual(true);
    expect(pet.bored()).toEqual(true);
    expect(pet.sleepy()).toEqual(true);
  })

  it('should return that the pet ate fries and the food level should go up 5', function(){
    expect(pet.eatSmall("fries")).toEqual("You fed your pet fries. Food level goes up 5.")
  });

  it('should return that the pet ate fries and the food level should go up 5', function(){
    expect(pet.playSmall("take a walk")).toEqual("You chose to take a walk, and Attention Level went up 5.")
  });

  it('should retun that the rest level goes up 50', function(){

    expect(pet.goToBed()).toEqual("Got some sleep, and Rest Level went up 50.");
  });
});
