console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
//239

function arraySum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums [i];
    }
    return sum;
}

console.log(arraySum(numbers));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};

book.title = "Harry Potter and the Goblet of Fire";
book.numpages = 450;
book.readCount = 2;

book.info = function () {
    return `${this.title} by J.K. Rowling, ${this.numPages}, read ${this.readCount}times`;
}

console.log(book.info());


// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.split(" "));
const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    //Convert the individual work into an array
    const letters = words[i].split("");
    console.log(letters);
    // use built in reverse array
    letters.reverse();
    console.log(letters);
    //update the words array as we go
    words[i] = letters.join("");

}

console.log(words);

//Join array into one string
const result = words.join(" ");
console.log(result);

// Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

//make an array to hold all the finalized objects
const resultArray = [];
const rows = csvData.split("\n");
console.log(rows);
const headers = rows[0].split(",");
console.log(headers);
//Iterate over the rest of the rows

for(let i = 0; i < rows.length; i++) {
    // Split each row on the comma
    const values = rows[i].split(",");
    console.log(values);

    const temporaryObject = {
        name: values[0],
        age: values[1]
    };
}

console.log(resultArray);

