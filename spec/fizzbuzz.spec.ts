import { FizzBuzz } from "../src/fizzbuzz";
describe("FizzBuzz", function () {
    it("Should return a number", function () {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.of(0)).toBe("0");
        expect(fizzBuzz.of(1)).toBe("1");
        expect(fizzBuzz.of(2)).toBe("2");
        expect(fizzBuzz.of(4)).toBe("4");
        expect(fizzBuzz.of(7)).toBe("7");
        expect(fizzBuzz.of(8)).toBe("8");
    });
    it("Should return Fizz", function () {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.of(3)).toBe("Fizz");
        expect(fizzBuzz.of(6)).toBe("Fizz");
        expect(fizzBuzz.of(9)).toBe("Fizz");
    });
    it("Should return Buzz", function () {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.of(5)).toBe("Buzz");
        expect(fizzBuzz.of(10)).toBe("Buzz");
    });
    it("Should return FizzBuzz", function () {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.of(15)).toBe("FizzBuzz");
    });
});