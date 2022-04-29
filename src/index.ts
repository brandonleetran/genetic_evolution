// the interface for our DNA objects
interface DNA {
    word : string,
    fitness?: number // this is optional for the initial population
    // the fitness score is used as the probability of getting picked by the next generation
}

// the target value
const target = "brandon tran" 

// the max population
const MAX_POPULATION = 10

// the minimum population
const MIN_POPULATION = 1

// the population of our generation (the higher the population, the higher the variance)
const POPULATION = randomNumber(MAX_POPULATION, MIN_POPULATION)

// the character set of which we are using (note: I am not using integer values)
const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890"

// the list of DNAs that will be generated using natural selection
let array: DNA[] = []

// program starts here
function init() {

    let stringLength = target.length

    // populating the initial generation
    for (let i = 0; i < POPULATION; i++)
    {
        // create a DNA object
        let obj = {} as DNA

        // create a random word based on string length
        let word = randomString(stringLength)

        obj.word = word

        obj.fitness = calcFitness(word)

        array.push(obj)
    }

    console.log(array)

    // reproduction/selection
}

// pure function that returns a random integer between min (inclusive) and max (inclusive).
function randomNumber(max : number, min : number ) : number {
    return Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
}

// pure function that returns the length of a DNA string
function stringLength(obj : DNA) : number {
    return obj.word.length
}

// function that generates a random string based on string length
function randomString(stringLength : number) : string {
    let result = ''
    for (let i = 0; i < stringLength; i++)
    {
        // generates a random string based on the charset we are using
        result += charset[Math.floor(Math.random() * charset.length)]
    }
    return result
}

// function that calculates the fitness score of each DNA word
function calcFitness(word : string) : number {
        // we know all strings populated will have the same length as 
        // the target
        let score = 0

        for (let i = 0; i < word.length; i++) {
            // we are including white space as well
            if (word.charAt(i) === target.charAt(i)) {
                score += 1
            }
        }
        return score
}

// start
init()

console.log('The population was ' + POPULATION)