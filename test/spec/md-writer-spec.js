'use strict';

const any = jasmine.any;
const mdWriter = require('../../');

describe('md-writer', function () {
    it('is a function', function () {
        expect(mdWriter).toEqual(any(Function));
    });

    describe('.h1', function () {
        it('is a function', function () {
            expect(mdWriter.h1).toEqual(any(Function));
        });

        it('returns a string', function () {
            expect(mdWriter.h1()).toEqual(any(String));
        });
    });

    describe('.h2', function () {
        it('is a function', function () {
            expect(mdWriter.h2).toEqual(any(Function));
        });

        it('returns a string', function () {
            expect(mdWriter.h2()).toEqual(any(String));
        });
    });
});
