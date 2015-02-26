/**
 * Created by joelsaxton on 2/24/15.
 */


"use strict";

var wordList = {};
var map = {
    2 : ['a', 'b', 'c'],
    3 : ['d', 'e', 'f'],
    4 : ['g', 'h', 'i'],
    5 : ['j', 'k', 'l'],
    6 : ['m', 'n', 'o'],
    7 : ['p', 'q', 'r', 's'],
    8 : ['t', 'u', 'v'],
    9 : ['w', 'x', 'y', 'z']
};


/**
 *
 * Sets a word list by name from a csv file or an array
 * @param name is the name given to the word list
 * @param type is 'csv' or 'array'
 * @param source is the csv file or the array
 */
module.exports.setWordList = function (name, type, source) {

    switch (type){
        case 'csv':
            var fs = require('fs');
            try {
                var contents = fs.readFileSync(source).toString();
                wordList[name] = contents.split('\r\n');
            } catch (e){
                console.error(e);
            }
            break;
        case 'array':
            if(Object.prototype.toString.call(source) !== '[object Array]') {
                throw "Param is not an array";
            }
            wordList[name] = source;
            break;
        default:
            return false;
    }

    return true;
};


/**
 *
 * @param name
 * @returns {*}
 */
module.exports.getWordList = function(name){
    return wordList[name] ? wordList[name] : false;
};


/**
 *
 * @param number
 * @param name
 * @returns {*}
 */
module.exports.getWordsFromNumber = function (number, name){
    var finalList = wordList[name];
    var digits = number.toString().split('');
    var wordLength = digits.length;
    var index = 0;

    // Search loop
    for (var digit in digits){
        if (digits[digit] <= 1) return false;
        finalList = getWordsFromLetters(digits[digit], index, wordLength, finalList);
        index++;
    }

    return finalList;
};


/**
 *
 * @param digit
 * @param index
 * @param wordLength
 * @param wordList
 * @returns {Array}
 */
function getWordsFromLetters(digit, index, wordLength, wordList) {
    var matches = [];

    for (var letter in map[digit]) {
        for (var word in wordList) {
            if (index == wordList[word].indexOf(map[digit][letter]) && wordLength == wordList[word].length){
                matches.push(wordList[word]);
            }
        }
    }
    return matches;
}