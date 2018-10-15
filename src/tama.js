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
     this.hunger === 100;
    } else if(this.energy >= 100){
    this.energy === 100;
    } else if(this.attention >= 100){
    this.attention === 100;
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
    this.hunger -= 10, this.energy -= 10;
  }

}

