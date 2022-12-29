/**
 * A line feed control character.
 *
 * @type {string}
 */
export const LF = '\n';

/**
 * Create a Markdown code fence.
 *
 * @param {string} [infoString='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#code-fence
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function codeFence(infoString = '') {
    return `${'`'.repeat(3)}${infoString}`;
}

/**
 * Create a Markdown code span.
 *
 * @param {string} [code='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#code-span
 */
export function codeSpan(code = '') {
    return '`' + code + '`';
}

/**
 * Create a Markdown fenced code block.
 *
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
 * Create a Markdown fenced code block with a JavaScript info string.
 *
 * @param {string} [code='']
 * @returns {string}
 * @see fencedCodeBlock
 */
export function fencedJsCodeBlock(code = '') {
    return fencedCodeBlock(code, 'js');
}

/**
 * Create a Markdown fenced code block with a TypeScript info string.
 *
 * @param {string} [code='']
 * @returns {string}
 * @see fencedCodeBlock
 */
export function fencedTsCodeBlock(code = '') {
    return fencedCodeBlock(code, 'ts');
}

/**
 * Create a Markdown fenced code block with a shell script info string.
 *
 * @param {string} [code='']
 * @returns {string}
 * @see fencedCodeBlock
 */
export function fencedShCodeBlock(code = '') {
    return fencedCodeBlock(code, 'sh');
}

/**
 * Create a level 1 Markdown header.
 *
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#setext-headings
 */
export function h1(text = '') {
    return `${text}${LF}${'='.repeat(text.length)}`;
}

/**
 * Create a level 2 Markdown header.
 *
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#setext-headings
 */
export function h2(text = '') {
    return `${text}${LF}${'-'.repeat(text.length)}`;
}

/**
 * Create a level 3 Markdown header.
 *
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#atx-heading
 */
export function h3(text = '') {
    return `### ${text}`;
}

/**
 * Create a level 4 Markdown header.
 *
 * @param {string} [text='']
 * @returns {string}
 * @see https://spec.commonmark.org/0.30/#atx-heading
 */
export function h4(text = '') {
    return `#### ${text}`;
}
