// the interface for our DNA objects
interface DNA {
    word : string,
}

// the population of our generation (the higher the population, the higher the variance)
const POPULATION = 1000

// the character set of which we are using (note: I am not using integer values)
const charset = "abcdefghijklmnopqrstuvwxyz";

// the list of DNAs that will be generated using natural selection
const array = [] as DNA[];

// program starts here
function init() {

    let stringLength = 5;
    for (let i = 0; i < this.POPULATION; i++)
    {
        let obj = {word: randomString(stringLength)} as DNA
        this.array.push(obj)
        console.log(array)
    }

}

// pure function
function stringLength(obj : DNA) : number {
    return obj.word.length;
}

// function that generates a random string based on string length
function randomString(stringLength : number) : string {
    let result = '';
    for (let i = 0; i < stringLength; i++)
    {
        result += this.charset[Math.floor(Math.random() * this.charset.length)];
    }
    return result;
}

init()

console.log("end")