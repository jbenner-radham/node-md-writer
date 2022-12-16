/**
 * @type {string}
 */
export const LF = '\n';

/**
 * @param {string} [infoString='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#code-fence
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function codeFence(infoString = '') {
    return `${'`'.repeat(3)}${infoString}`;
}

/**
 * @param {string} [code='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#code-span
 */
export function codeSpan(code = '') {
    return '`' + code + '`';
}

/**
 * @param {string} [code='']
 * @param {string} [infoString='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#fenced-code-blocks
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function fencedCodeBlock(code = '', infoString = '') {
    return [
        codeFence(infoString),
        code,
        codeFence()
    ].join(LF);
}

/**
 * @param {string} [code='']
 * @returns {string}
 * @see fencedCodeBlock
 */
export function fencedJsCodeBlock(code = '') {
    return fencedCodeBlock(code, 'js');
}

/**
 * @param {string} [code='']
 * @returns {string}
 * @see fencedCodeBlock
 */
export function fencedTsCodeBlock(code = '') {
    return fencedCodeBlock(code, 'ts');
}

/**
 * @param {string} [code='']
 * @returns {string}
 * @see fencedCodeBlock
 */
export function fencedShCodeBlock(code = '') {
    return fencedCodeBlock(code, 'sh');
}

/**
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#setext-headings
 */
export function h1(text = '') {
    return `${text}${LF}${'='.repeat(text.length)}`;
}

/**
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#setext-headings
 */
export function h2(text = '') {
    return `${text}${LF}${'-'.repeat(text.length)}`;
}

/**
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#atx-heading
 */
export function h3(text = '') {
    return `### ${text}`;
}

/**
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#atx-heading
 */
export function h4(text = '') {
    return `#### ${text}`;
}
