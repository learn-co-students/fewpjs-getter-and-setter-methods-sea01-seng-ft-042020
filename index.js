// // Add your Circle class here
// class Circle{
//     constructor(radius){
//         this.radius = radius
//     }
//     get diameter(){
//         return this.radius * 2
//     }

//     set diameter(diameter){
//         this.radius = diameter / 2
//     }

//     get circumference(){
//         return Math.PI * this.diameter
//     }

//     set circumference(circumference){
//         this.radius = (circumference / Math.PI) / 2
//         }

//     get area(){
//         return Math.PI * (this.radius**2)
//     }

//     set area(area){
//         this.radius = Math.sqrt((area / Math.PI))
//     }
// }
const pi = Math.PI;
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference(){
      return (this.radius * 2) * pi
  }
  set circumference(circumference){
      this.radius = circumference / (pi * 2)
  }

  get area(){
      return pi *( this.radius**2)
  }
  set area(area){
      this.radius = Math.sqrt(area/pi)
  }
}
