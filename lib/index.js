module.exports = class MdWriter {
    /**
     * @type {String}
     * @readonly
     */
    static get LF() {
        return '\n';
    }

    /**
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#code-fence
     * @see http://spec.commonmark.org/0.27/#info-strings
     */
    static codeFence(infoString = '') {
        return `${'`'.repeat(3)}${infoString}`;
    }

    /**
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#fenced-code-blocks
     * @see http://spec.commonmark.org/0.27/#info-string
     */
    static fencedCodeBlock(code, infoString = '') {
        return [
            MdWriter.codeFence(infoString),
            code,
            MdWriter.codeFence()
        ].join(MdWriter.LF);
    }

    /**
     * @returns {String}
     * @see fencedCodeBlock
     */
    static fencedShCodeBlock(code) {
        return MdWriter.fencedCodeBlock(`$ ${code}`, 'sh');
    }

    /**
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#setext-headings
     */
    static h1(text = '') {
        return `${text}${MdWriter.LF}${'='.repeat(text.length)}`;
    }

    /**
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#setext-headings
     */
    static h2(text = '') {
        return `${text}${MdWriter.LF}${'-'.repeat(text.length)}`;
    }
};
