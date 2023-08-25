class Shape {
    constructor(){
        this.color = "";
        this.text = "";
        this.textColor = "";
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }


    render() {
        console.log("Rendering shape...");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = 50;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    render() {
        console.log("Rendering circle...");
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text>
    </svg>`;

    return svg;
    }
}

class Square extends Shape { 
    constructor() {
        super();
    }


    render(){
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text>
    </svg>`;

        return svg;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    render(){
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,30 90,170 210,170" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text>
    </svg>`;

        return svg;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
};