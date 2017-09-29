'use strict';

const any = jasmine.any;
const mdWriter = require('../../');

describe('readme-md', function () {
    it('is a function', function () {
        expect(mdWriter).toEqual(any(Function));
    });
});
