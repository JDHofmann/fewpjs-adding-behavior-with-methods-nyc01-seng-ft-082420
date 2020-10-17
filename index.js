class Cat {
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(`${this.name} says meow!`)
  }
}

class Dog {
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(`${this.name} says Woof!`)
  }
}

class Bird {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    if(this.sex == "male"){
      console.log(`It's me! ${this.name}, the parrot`)
    } else {
      console.log(`${this.name} says squak!`)
    }
  }
}