class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return 2 * Math.PI * this.radius
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    set diameter(x) {
        return this.radius = x/2
    }

    set circumference(x) {
        return this.radius = x/(2 * Math.PI)
    }
}