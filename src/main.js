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
    console.log(userTama);
    userTama.PassTime();
    $("#tamaName").text(userTama.name); 
    
    setInterval(function(){
      $("#tamaHunger").text(userTama.hunger); 
      $("#tamaSleep").text(userTama.energy); 
      $("#tamaPlay").text(userTama.attention); 
      userTama.CheckOver();
      userTama.CheckDead();
     
  
    },100);
     

    $("#play").click(function(){
      userTama.Play();
      
    });

    $("#feed").click(function(){
      userTama.Feed();
      //userTama.CheckOver();
    });

    $("#sleep").click(function(){
      userTama.Sleep();
     // userTama.CheckOver();
    });
   
      $("#hiddenForm").show();
      $("#tamaForm").hide();

});

});