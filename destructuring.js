//numPlanets return 8
//yearNepturn return 1846

//discoveryyears returns yearNeturnediscoverd and yearMarsDiscovered


//your name is alejandro and you like purple
//your name is melissa and you like green
//your name is undefined and you like undefined

//first returns maya
//second returns marisa
//third returns chi

//raindrops on roses
//whiskers on kittens
//bright cooper kettle, warm woolen mittens, brown paper packages tied up with strings

//let numbers = [10, 20, 30];
//[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
//console.log(numbers)
// [10, 30, 20]

const obj = {
    numbers: {
        a:1,
        b:2
    }
};
const {a,b} = obj.numbers

[arr[0], arr[1]] = [arr[1], arr[0]]

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ({first, second, thrid, rest})