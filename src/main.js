import{ Tamagotchi } from './tama.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  
  //the GIF API
  // $.ajax({
  //   url: `https://api.giphy.com/v1/gifs/random?api_key=NdEm57rSsuTR6fy1J2k3zCWaMIyG0NtI&tag=niccage&rating=G`,
  //   type: 'GET',
  //   data: {
  //     format: 'json'
  //   },
  //   success: function(response) {
  //     $("#gif").append(`<img src=${response.data.images.fixed_height_downsampled.url} alt="some random gif">`);
  //   },
  //   error: function(){
  //     $("#error").text("There was an error processing your request. Please try again later");
  //   }
  //   });

  $("#createTama").submit(function(event){
    event.preventDefault();
    let tamagotchi = $("#name").val();
    let userTama= new Tamagotchi(tamagotchi);
    userTama.PassTime();
    $("#tamaName").text(userTama.name); 
    $("#reset").hide();
    $("#result").hide();
    $("#hiddenForm").show();
    $("#tamaForm").hide();
    
  let run= setInterval(function(){
      
      $("#tamaHunger").text(userTama.hunger); 
      $("#tamaSleep").text(userTama.energy); 
      $("#tamaPlay").text(userTama.attention); 
      userTama.CheckOver();
      userTama.CheckStatus();
      userTama.CheckUnder();

      if(userTama.CheckDead()){        
        clearInterval(run);
        $("#reset").show();
        $("#result").show();
      }
     
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

    $("#reset").click(function(){
      userTama.Reset();
    })

  });
});