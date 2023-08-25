const { Circle, Triangle, Square } = require('./shapes');


describe('Circle', () => {
    it('should generate the correct SVG for a circle', () => {
        const circle = new Circle();
        circle.setColor('blue');
        circle.setRadius(50);
        circle.setText('BLUE CIRCLE');
        circle.setTextColor('#fff');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="blue" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff">
            BLUE CIRCLE
        </text>
    </svg>`

        expect(circle.render()).toEqual(expectedSVG);
    });
});

describe('Triangle', () => {
    it('should generate the correct SVG for a triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        triangle.setText('GREEN TRIANGLE');
        triangle.setTextColor('#fff');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,30 90,170 210,170" fill="green" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff">
            GREEN TRIANGLE
        </text>
    </svg>`

        expect(triangle.render()).toEqual(expectedSVG);
    });
});

describe('Square', () => {
    it('should generate the correct SVG for a square', () => {
        const square = new Square();
        square.setColor('red');
        square.setText('RED SQUARE');
        square.setTextColor('#fff');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="red" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff">
            RED SQUARE
        </text>
    </svg>`;

        expect(square.render()).toEqual(expectedSVG);
    });
});
