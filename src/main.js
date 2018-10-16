import{Tamagotchi}from './tama.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){

  $("#createTama").submit(function(event){
    event.preventDefault();
    let tamagotchi = $("#name").val();
    let userTama= new Tamagotchi(tamagotchi);
    userTama.PassTime();
    $("#tamaName").text(userTama.name); 
    
  let run= setInterval(function(){
      
      $("#tamaHunger").text(userTama.hunger); 
      $("#tamaSleep").text(userTama.energy); 
      $("#tamaPlay").text(userTama.attention); 
      userTama.CheckOver();
      userTama.CheckStatus();
      userTama.CheckUnder();
     // userTama.CheckDead();

      if(userTama.CheckDead()){
       
        // userTama.hunger = 0;
        // userTama.energy = 0;
        // userTama.attention = 0;
       alert("GAME OVER");
        clearInterval(run);
      
      }

      // if(this.hunger <= 0 || this.energy <= 0 || this.attention <= 0){
  
      //   clearInterval(run);
      // }
      console.log(userTama.hunger);
    },100);
    
   
   
    $("#play").click(function(){
      userTama.Play();
    });

    $("#feed").click(function(){
      userTama.Feed();
    });

    $("#sleep").click(function(){
      userTama.Sleep();
    });
   
      $("#hiddenForm").show();
      $("#tamaForm").hide();

});

});