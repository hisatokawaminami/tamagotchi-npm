export let pet = {
  foodLevel: 75,
  attentionLevel: 75,
  restLevel: 75,


  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.starved() == "Your pet got starved"){
        clearInterval(hungerInterval);
        return "Your pet got starved";
      }
    }, 100);
  },

  starved: function() {
    if (this.foodLevel > 0){
      return false;
    } else {
      return "Your pet got starved";
    }
  },

  setAttention: function(){
    const attentionInterval = setInterval(() => {
      this.attentionLevel--;
      if(this.bored() == true){
        clearInterval(attentionInterval);
        return "Your pet got real bored";
      }
    }, 2000);
  },

  bored: function(){
    if(this.attentionLevel > 0){
      return false;
    } else {
      return true;
    }
  },

  setRest: function(){
    const restInterval = setInterval(() => {
      this.restLevel--;
      if(this.sleepy() == true){
        clearInterval(restInterval);
        return "Your pet got sleepy";
      }
    }, 3000);
  },

  sleepy: function(){
    if(this.restLevel > 0){
      return false;
    } else {
      return true;
    }
  },

  feed: function(amount){
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `You fed your pet ${food}. Food level goes up ${amount}.`
    }
  },

  play: function(amount){
    let that = this;
    return function(play){
      that.attentionLevel += amount
      return `You chose to ${play}, and Attention Level went up ${amount}.`
    }
  },

  // sleep: function(amount){
  //   let that = this;
  //   return function (){
  //     that.restLevel += amount
  //     return `Got some sleep, and Rest Level went up ${amount}.`
  //   }
  // }
  sleep: function(){
    this.restLevel += 50;
    return "Got some sleep, and Rest Level went up 50."
  }

};

pet.eatSmall = pet.feed(5);
pet.playSmall = pet.play(5);
// pet.goToBed = pet.sleep(50);
