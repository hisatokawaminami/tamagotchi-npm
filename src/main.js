import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pet } from './../src/tamagotchi.js';
$(function(){

  pet.setHunger();
  pet.setRest();
  pet.setAttention();

  setInterval(function(){
    $(".foodLevel").text(pet.foodLevel);
    $(".attentionLevel").text(pet.attentionLevel);
    $(".restLevel").text(pet.restLevel);
    $(".test").text(pet.starved());

  }, 100);

  $(".feed").click(function(){
    pet.eatSmall();
    $(".test").text(pet.eatSmall("pizza"));
  });
  $(".play").click(function(){
    pet.playSmall();
    $(".test").text(pet.playSmall());

  });
  $(".sleep").click(function(){
    pet.sleep();
    $(".test").text(pet.sleep());

  });
});
