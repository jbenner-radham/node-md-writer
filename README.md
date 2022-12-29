md-writer
=========
[![CI Status][CI BADGE]][CI PAGE]

A utility module for writing [Markdown][MARKDOWN] adhering to the [CommonMark][COMMONMARK] spec.

Install
-------
```sh
yarn add md-writer # Or alternatively: `npm install md-writer`
```

Usage
-----
```js
import {
    codeSpan,
    fencedCodeBlock,
    fencedJsCodeBlock,
    fencedShCodeBlock,
    fencedTsCodeBlock,
    h1,
    h2,
    h3,
    h4
} from 'md-writer';

codeSpan('<span>Hello world!</span>');
// > `<span>Hello world!</span>`

fencedCodeBlock('5 + 5');
// > ```
// > 5 + 5
// > ```

fencedCodeBlock(`print('Hello world!')`, 'python');
// > ```python
// > print('Hello world!')
// > ```

fencedJsCodeBlock('console.log("Hello world!");');
// > ```js
// > console.log("Hello world!");
// > ```

fencedShCodeBlock(`print 'Hello world!'`);
// > ```sh
// > print 'Hello world!'
// > ```

fencedTsCodeBlock('console.log("Hello world!");');
// > ```ts
// > console.log("Hello world!");
// > ```

h1('Header One');
// > Header One
// > ==========

h2('Header Two');
// > Header Two
// > ----------

h3('Header Three');
// > ### Header Three

h4('Header Four');
// > #### Header Four
```

**NOTE**: This is a pure ESM package. See [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for details.

Testing
-------
```sh
yarn test # Or alternatively: `npm test`
```

Reference
---------
- [CommonMark Spec](http://spec.commonmark.org/)

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.


[CI BADGE]: https://github.com/jbenner-radham/node-md-writer/actions/workflows/ci.yaml/badge.svg
[CI PAGE]: https://github.com/jbenner-radham/node-md-writer/actions/workflows/ci.yaml
[COMMONMARK]: http://commonmark.org/
[MARKDOWN]: https://daringfireball.net/projects/markdown/
