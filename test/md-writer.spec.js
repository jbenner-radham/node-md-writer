import { stripIndents } from 'common-tags';
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
} from '../lib/index.js';

const { any } = jasmine;

describe('md-writer', function () {
    describe('codeSpan', function () {
        it('is a function', function () {
            expect(codeSpan).toEqual(any(Function));
        });

        it('returns a level three header', function () {
            const code = '<span>Hello world!</span>';
            const expected = '`<span>Hello world!</span>`';

            expect(codeSpan(code)).toEqual(expected);
        });

        it('returns a string', function () {
            expect(codeSpan()).toEqual(any(String));
        });
    });

    describe('fencedCodeBlock', function () {
        it('is a function', function () {
            expect(fencedCodeBlock).toEqual(any(Function));
        });

        it('returns a fenced code block', function () {
            const expected = stripIndents`
                \`\`\`
                5 + 5
                \`\`\`
            `;

            expect(fencedCodeBlock('5 + 5')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(fencedCodeBlock()).toEqual(any(String));
        });
    });

    describe('fencedJsCodeBlock', function () {
        it('is a function', function () {
            expect(fencedJsCodeBlock).toEqual(any(Function));
        });

        it('returns a fenced code block', function () {
            const expected = stripIndents`
                \`\`\`js
                console.log('Hello world!');
                \`\`\`
            `;

            expect(fencedJsCodeBlock(`console.log('Hello world!');`)).toEqual(expected);
        });

        it('returns a string', function () {
            expect(fencedJsCodeBlock()).toEqual(any(String));
        });
    });

    describe('fencedTsCodeBlock', function () {
        it('is a function', function () {
            expect(fencedTsCodeBlock).toEqual(any(Function));
        });

        it('returns a fenced code block', function () {
            const expected = stripIndents`
                \`\`\`ts
                console.log('Hello world!');
                \`\`\`
            `;

            expect(fencedTsCodeBlock(`console.log('Hello world!');`)).toEqual(expected);
        });

        it('returns a string', function () {
            expect(fencedTsCodeBlock()).toEqual(any(String));
        });
    });

    describe('fencedShCodeBlock', function () {
        it('is a function', function () {
            expect(fencedShCodeBlock).toEqual(any(Function));
        });

        it('returns a fenced code block', function () {
            const expected = stripIndents`
                \`\`\`sh
                npm install @awesome/package
                \`\`\`
            `;

            expect(fencedShCodeBlock('npm install @awesome/package')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(fencedShCodeBlock()).toEqual(any(String));
        });
    });

    describe('h1', function () {
        it('is a function', function () {
            expect(h1).toEqual(any(Function));
        });

        it('returns a level one header', function () {
            const expected = stripIndents`
                Header One
                ==========
            `;

            expect(h1('Header One')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(h1()).toEqual(any(String));
        });
    });

    describe('h2', function () {
        it('is a function', function () {
            expect(h2).toEqual(any(Function));
        });

        it('returns a level two header', function () {
            const expected = stripIndents`
                Header Two
                ----------
            `;

            expect(h2('Header Two')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(h2()).toEqual(any(String));
        });
    });

    describe('h3', function () {
        it('is a function', function () {
            expect(h3).toEqual(any(Function));
        });

        it('returns a level three header', function () {
            const expected = '### Header Three';

            expect(h3('Header Three')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(h3()).toEqual(any(String));
        });
    });

    describe('h4', function () {
        it('is a function', function () {
            expect(h4).toEqual(any(Function));
        });

        it('returns a level four header', function () {
            const expected = '#### Header Four';

            expect(h4('Header Four')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(h4()).toEqual(any(String));
        });
    });
});
