class Shape
{
  
  constructor(){ }
  // An attempt to explain ENCAPSULATION
  setBreath(breath){ this.breath = breath; }
  setLength(length){ this.length = length; }
  setRadius(radius){ this.radius = radius; }
  
  //ABSTRACTION shown via Math.floor
  getLength(){ return Math.floor(this.length); } 
  getBreath(){ return Math.floor(this.breath); }
  getRadius(){ return Math.floor(this.radius); }
  
}

//INHERITANCE shown via extends keyword
class Square extends Shape 
{
  constructor(length, breath)
  {
    super();
    super.setLength(length);
    super.setBreath(breath);
  }
  
  calculateArea()
  {
    return super.getLength()*super.getBreath();
  }
  
}

class Circle extends Shape
{
  constructor(radius)
  {
    super();
    super.setRadius(radius);
  }
  
  calculateArea()
  {
    return 3.14*super.getRadius()*super.getRadius();
  }
  
}


const s = new Square(10.909987,2.98870);
s.calculateArea();

const c = new Circle(7);
c.calculateArea(); // POLYMORPHISM where the method for area can be overidden if it was a square we were to calculate.