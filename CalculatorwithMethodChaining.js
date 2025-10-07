// Calculator With Method Chaining

class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
};




// Example usage:
const calculator = new Calculator(10);

const result = calculator
.add(5)
.subtract(3)
.multiply(4)
.divide(2)
.power(2)
.getResult();

console.log(result);