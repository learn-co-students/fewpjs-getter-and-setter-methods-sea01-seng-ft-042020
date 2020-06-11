class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter 
    }

    get area() {
        return (Math.PI * Math.pow(this.radius, 2))
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }
// circumference = Math.PI * diameter
// circumference = Math.PI * 2 * radius
// radius = circumference/(2 * Math.PI)

    set circumference(circumference) {
        this.radius = circumference/(Math.PI * 2)
    }

// area = Math.PI * radius^2
// area / Math.PI = radius^2
// sqrt(area / Math.PI) = radius

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}