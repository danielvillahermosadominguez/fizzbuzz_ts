export class FizzBuzz {
    private isMultipleOf(n: number, m: number): boolean {
        return n != 0 && n % m == 0;
    }

    private combineInputIfMultiple(itext: string, n: number, m: number, otext: string) {
        var result = itext;
        if (this.isMultipleOf(n, m)) {
            result += otext;
        }

        return result;
    }

    public of(n: number): string {
        if (!(this.isMultipleOf(n, 3) || this.isMultipleOf(n, 5))) {
            return n.toString();
        }
        var result = this.combineInputIfMultiple("", n, 3, "Fizz");

        return this.combineInputIfMultiple(result, n, 5, "Buzz");
    }
}