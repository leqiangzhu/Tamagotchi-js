export class Tamagotchi {
 constructor (name, hunger = 100, energy = 100, attention = 100){
  this.name = name;
  this.hunger = hunger;
  this.energy = energy;
  this.attention = attention;
  }

  CheckDead(){
    if(this.hunger <= 0 || this.energy <= 0 || this.attention <= 0){
      return true;
    }else{
      return false;
    }
  }

  CheckOver(){
    if(this.hunger >= 100){
     return this.hunger === 100;
    // } else if(this.energy >= 100){
    //   this.energy === 100;
    // } else if(this.attention >= 100){
    //   this.attention === 100;
    // }
     } 
  }


  // Passtime(){

  // }

  // Play(){

  // }

  // Feed(){

  // }

}

