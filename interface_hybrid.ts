

//An example of hybrid type is an object that acts as both a function and an object, with additional properties:

interface Counter {
    (start: number): string;//Note there is no name assigned to the function signature
    interval: number;
    reset(): void;
}

var c: Counter;
c(10);
c.reset();
c.interval = 5.0;
