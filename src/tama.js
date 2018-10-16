export class Tamagotchi  {
 constructor (name, hunger = 10, energy = 100, attention = 100){
  this.name = name;
  this.hunger = hunger;
  this.energy = energy;
  this.attention = attention;
  }
  CheckStatus(){
    this.hunger;
    this.energy;
    this.attention;
  }

  CheckDead(){
    let falg=true;
    if(this.hunger <= 0 || this.energy <= 0 || this.attention <= 0){
      falg= true;
    }else{
      falg= false;
    }
    return falg;
  }

  CheckOver(){
    if(this.hunger >= 100){
     this.hunger = 100;
    } 
    if(this.energy >= 100){
    this.energy = 100;
    } 
    if(this.attention >= 100){
    this.attention = 100;
    } 
  }
//6,7,8
 
  CheckUnder(){
    if(this.hunger <= 0){
      
    
    //  alert("Game Over!!!!check under");
      this.hunger = 0;

     } 
     if(this.energy <= 0){
     this.energy = 0;
   // alert("Game Over!!!!check under");
     } 
     if(this.attention <= 0){
     this.attention = 0;
    // alert("Game Over!!!!check under");
     } 
  }


  PassTime() {
    setInterval(() => {
      this.hunger--;
      this.energy--;
      this.attention--;
      
    }, 3000);
  }

  Play(){
    this.hunger += 10, this.energy -= 10, this.attention -= 10;
  }

  Feed(){
    this.hunger += 10, this.energy += 10, this.attention += 5;

  }

  Sleep(){
    this.hunger -= 10, this.energy += 10;
  }

}

