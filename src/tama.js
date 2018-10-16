export class Tamagotchi  {
 constructor (name, hunger = 100, energy = 100, attention = 100){
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
    let flag = true;
    if(this.hunger <= 0 || this.energy <= 0 || this.attention <= 0){
      flag = true;
    }else{
      flag = false;
    }
    return flag;
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
 
  CheckUnder(){
    if(this.hunger <= 0){    
      this.hunger = 0;
     } 
     if(this.energy <= 0){
     this.energy = 0;
     } 
     if(this.attention <= 0){
     this.attention = 0;
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
    this.CheckUnder();
  }

  Feed(){
    this.hunger += 10, this.energy += 10, this.attention += 5;
    this.CheckUnder();
  }

  Sleep(){
    this.hunger -= 10, this.energy += 10;
    this.CheckUnder();
  }

}

