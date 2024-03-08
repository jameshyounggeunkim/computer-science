//Sum To Zero
//Space Complexity: O(n)
function sumToZero(arr) {
    const sumPair = {};
    for (const num of arr) {
        if (sumPair[-num]) {
            return true;
        }
        sumPair[num] = true;
        console.log(sumPair);
    }
    return false;
}

const arr = [1, -3, 2, 3];
console.log(sumToZero(arr));


//Unique Characters
//Space Complexity: ???
function hasUniqueCharacters(word) {
    const uniqueWords = {};
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (uniqueWords[char]) {
            return false;
        }
        uniqueWords[char] = true;
    }
    return true;
}

const word1 = "bullet";
const word2 = "crazy";
console.log(hasUniqueCharacters(word1));
console.log(hasUniqueCharacters(word2));


//Pangram Sentence
//Space Complexity: O(1)
function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    sentence = sentence.toLowerCase();

    for (const char of alphabet) {
        if (!sentence.includes(char)) {
            return false;
        }
    }

    return true;
}

const pangramSentence = "The quick brown fox jumps over the lazy dog.";
const nonPangramSentence = "This is not a pangram.";

console.log(isPangram(pangramSentence));
console.log(isPangram(nonPangramSentence));


//Longest Word
//Space Complexity: O(1)
function find_longest_word(words) {
    let longestLength = 0;

    for (const word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
}

const words = ["amy", "tom", "suzy", "jacob"];
console.log(find_longest_word(words)); 