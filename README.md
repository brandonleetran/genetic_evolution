Genetic Evolution Algorithm

Brute Force Search

Input: "To Be or Not To Be"

Assuming we have a standard keyboard with 104 keys...
'T' Likelihood: 1/104 
'To' Likelihood: 1/104 * 1/104
Entire Phrase Likelihood: (1/104)^39

This is equivalent to 1 in 4.616366e+78
approximately 1 in 4,616,366,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000

Conclude: VERY LOW CHANCE!

---------------------------------------------------------------------------------------------

Solution: GENETIC EVOLUTION

Darwinian Natural Selection
Heredity: Children receive the properties of their parents
Variation: Must be a variety of traits within a population
Selection: Parents pass down their genetic information - "Survial of the fittest"
The higher the fitness rate, the more likelihood genetic information will be passed down to the next generation (vise versa)

Algorithm:
1. Create a population with random N elements (VARIATION)
2. Calculate the fitness for N elements (SELECTION)
    I. Reproduction/Selection
    II.
        i. Pick "two" parents (two is arbitrary) (SELECTION)
        ii. Make a new element 
            a. Crossover
            b. Mutation

---------------------------------------------------------------------------------------------

Example:
"starbucks"

Random N Elements:
"starcorn" = 4/8 = 50%
"ftafdfbb" = 1/8 = 12.5%
"bucksstar" = 0%
"coolbucks" = 4/8 = 50%

ie: "starcorn" and "coolbucks" each has a 50% chance of being the parents

Parent 1: starcorn (11110000)
Parent 2: coolbucks (00001111)

CROSSOVER using Binary:

MUTATION on New Element: 1% to 10% chance that the binary number will mutate to a different letter



