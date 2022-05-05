// the interface for our DNA objects
interface DNA {
    word : string,
    fitness: number,
    // the fitness score is used as the probability of getting picked by the next generation
}

// the target value
const target = "brandon tran" 

// the max population
const MAX_POPULATION = 10000

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
        // create a random word based on string length
        let word = randomString(stringLength)

        let obj = { word: word, fitness: calcFitness(word) } as DNA

        array.push(obj)
    }

    // end of initialization
    
    console.log(array)

    // reproduction/selection
    // create an array of two objs, these objs will be the parents of the next generation
    const matingPool: DNA[] = []
 
    // get parents
    // YES! it is possible to have duplicate parents (this is an arbritrary decision)
    // using a while loop because for-loops may not populate parent array 100%
    array.forEach((DNA => {
        for (let i = 0; i < DNA.fitness; i++) {
            matingPool.push(DNA)
        }
    }))

    // crossover child
    //const offSpring = crossOver(parents[0].word, parents[1].word)

    console.log(matingPool)
}

// pure function that returns a random integer between min (inclusive) and max (inclusive).
function randomNumber(max : number, min : number ) : number {
    return Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
}

// pure function that returns the length of a DNA string
function stringLength(obj : DNA) : number {
    return obj.word.length
}

// pure function that returns true or false based on probability
function pickParents(fitness : number) : boolean {
    return Math.random() < fitness  * .01 // ie: Math.random() < .10 means 10% chance it will return true
    // assuming that fitness scores is from 0 to 100 inclusively
}

// parents crossover to create a new offspring
function crossOver(chromosome_1 : string, chromosome_2 : string) : string {
    let offspring = ""

    for (let i = 0; i < target.length / 2; i++) {

    }

    return offspring
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