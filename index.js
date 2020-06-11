// Add your Circle class here
class Circle {
    constructor (radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(num){
        this.radius = num / 2
    }

    get area(){
        return (this.radius * this.radius) * Math.PI
    }

    set area(area){
        this.radius = Math.sqrt(area / Math.PI)
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    set circumference(circumference){
        this.radius = circumference / Math.PI / 2
    }
}