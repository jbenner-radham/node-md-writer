md-writer
=========
A utility module for writing Markdown.

Install
-------
```sh
$ yarn add md-writer # Or alternatively: `npm install --save md-writer`
```

Usage
-----
```js
'use strict';

const {fencedCodeBlock, h1, h2, h3} = require('md-writer');

fencedCodeBlock('5 + 5');
// > ```
// > 5 + 5
// > ```

h1('Header One');
// > Header One
// > ==========

h2('Header Two');
// > Header Two
// > ----------

h3('Header Three');
// > ### Header Three
```

Testing
-------
```sh
$ yarn test # Or alternatively: `npm test`
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
