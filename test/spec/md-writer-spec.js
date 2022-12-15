'use strict';

const any = jasmine.any;
const mdWriter = require('../../');
const {stripIndents} = require('common-tags');

describe('md-writer', function () {
    it('is a function', function () {
        expect(mdWriter).toEqual(any(Function));
    });

    describe('.codeSpan', function () {
        it('is a function', function () {
            expect(mdWriter.codeSpan).toEqual(any(Function));
        });

        it('returns a level three header', function () {
            const code = '<span>Hello world!</span>';
            const expected = '`<span>Hello world!</span>`';

            expect(mdWriter.codeSpan(code)).toEqual(expected);
        });

        it('returns a string', function () {
            expect(mdWriter.codeSpan()).toEqual(any(String));
        });
    });

    describe('.fencedCodeBlock', function () {
        it('is a function', function () {
            expect(mdWriter.fencedCodeBlock).toEqual(any(Function));
        });

        it('returns a fenced code block', function () {
            const expected = stripIndents`
                \`\`\`
                5 + 5
                \`\`\`
            `;

            expect(mdWriter.fencedCodeBlock('5 + 5')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(mdWriter.fencedCodeBlock()).toEqual(any(String));
        });
    });

    describe('.fencedJsCodeBlock', function () {
        it('is a function', function () {
            expect(mdWriter.fencedJsCodeBlock).toEqual(any(Function));
        });

        it('returns a fenced code block', function () {
            const expected = stripIndents`
                \`\`\`js
                console.log('Hello world!');
                \`\`\`
            `;

            expect(mdWriter.fencedJsCodeBlock("console.log('Hello world!');")).toEqual(expected);
        });

        it('returns a string', function () {
            expect(mdWriter.fencedJsCodeBlock()).toEqual(any(String));
        });
    });

    describe('.fencedShCodeBlock', function () {
        it('is a function', function () {
            expect(mdWriter.fencedShCodeBlock).toEqual(any(Function));
        });

        it('returns a fenced code block', function () {
            const expected = stripIndents`
                \`\`\`sh
                npm install @awesome/package
                \`\`\`
            `;

            expect(mdWriter.fencedShCodeBlock('npm install @awesome/package')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(mdWriter.fencedShCodeBlock()).toEqual(any(String));
        });
    });

    describe('.h1', function () {
        it('is a function', function () {
            expect(mdWriter.h1).toEqual(any(Function));
        });

        it('returns a level one header', function () {
            const expected = stripIndents`
                Header One
                ==========
            `;

            expect(mdWriter.h1('Header One')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(mdWriter.h1()).toEqual(any(String));
        });
    });

    describe('.h2', function () {
        it('is a function', function () {
            expect(mdWriter.h2).toEqual(any(Function));
        });

        it('returns a level two header', function () {
            const expected = stripIndents`
                Header Two
                ----------
            `;

            expect(mdWriter.h2('Header Two')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(mdWriter.h2()).toEqual(any(String));
        });
    });

    describe('.h3', function () {
        it('is a function', function () {
            expect(mdWriter.h3).toEqual(any(Function));
        });

        it('returns a level three header', function () {
            const expected = '### Header Three';

            expect(mdWriter.h3('Header Three')).toEqual(expected);
        });

        it('returns a string', function () {
            expect(mdWriter.h3()).toEqual(any(String));
        });
    });
});
