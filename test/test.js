/**
 * Created by joelsaxton on 2/25/15.
 */

// NodeUnit tests
t9 = require('../super-t9');

// true
exports.testSetBigWordList = function(test){
    var result = t9.setWordList('big', 'csv', __dirname + '/1000-words.csv');
    test.expect(1);
    test.ok(result, "this assertion should pass");
    test.done();
};

// true
exports.testSetLittleWordList = function(test){
    var result = t9.setWordList('little', 'array', ['up', 'us', 'bye']);
    test.expect(1);
    test.ok(result, "this assertion should pass");
    test.done();
};

// true
exports.testGetBigWordList = function(test) {
    var big = t9.getWordList('big');
    test.expect(1);
    var expected = 999;
    test.equal(big.length, expected);
    test.done();
};

// ['up', 'us', 'bye']
exports.testGetLittleWordList = function(test) {
    var little = t9.getWordList('little');
    test.expect(1);
    var expected = ['up', 'us', 'bye'];
    test.equal(JSON.stringify(little), JSON.stringify(expected));
    test.done();
};

// false
exports.testGetNonexistentWordList = function(test){
    var little = t9.getWordList('nonexistent');
    test.expect(1);
    test.equal(little, false);
    test.done();
};


// ['up', 'us']
exports.testGetWordsFromNumber1 = function(test) {
    var matches = t9.getWordsFromNumber(87, 'big');
    test.expect(1);
    var expected = ['up', 'us'];
    test.equal(JSON.stringify(matches), JSON.stringify(expected));
    test.done();
};

// ['nature']
exports.testGetWordsFromNumber2 = function(test) {
    var matches = t9.getWordsFromNumber(628873, 'big');
    test.expect(1);
    var expected = ['nature'];
    test.equal(JSON.stringify(matches), JSON.stringify(expected));
    test.done();
};

// ['arrive']
exports.testGetWordsFromNumber2 = function(test) {
    var matches = t9.getWordsFromNumber(277483, 'big');
    test.expect(1);
    var expected = ['arrive'];
    test.equal(JSON.stringify(matches), JSON.stringify(expected));
    test.done();
};

// ['good', 'home', 'gone']
exports.testGetWordsFromNumber3 = function(test) {
    var matches = t9.getWordsFromNumber(4663, 'big');
    test.expect(1);
    var expected = ['good', 'home', 'gone'];
    test.equal(JSON.stringify(matches), JSON.stringify(expected));
    test.done();
};

// ['bye']
exports.testGetWordsFromNumber4 = function(test) {
    var matches = t9.getWordsFromNumber(293, 'little');
    test.expect(1);
    var expected = ['bye'];
    test.equal(JSON.stringify(matches), JSON.stringify(expected));
    test.done();
};

// []
exports.testGetWordsFromNumber5 = function(test) {
    var matches = t9.getWordsFromNumber(293, 'nonexistent');
    test.expect(1);
    var expected = [];
    test.equal(JSON.stringify(matches), JSON.stringify(expected), 'huh?');
    test.done();
};