




# Super-T9

Super T9 Phone Keypad to Word Mapper


## Installation

```sh
$ npm install super-t9
```

## API

```js
var t9 = require('super-t9');

t9.setWordList('myWordList', 'csv', 'mywordlist.csv');

var matches = t9.getWordsFromNumber(628873, 'myWordList');
```

## License

[MIT](LICENSE)