/**
 * A line feed control character.
 */
export const LF: '\n';

/**
 * Create a Markdown code fence.
 *
 * @see https://spec.commonmark.org/0.30/#code-fence
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function codeFence(infoString?: string): string;

/**
 * Create a Markdown code span.
 *
 * @see https://spec.commonmark.org/0.30/#code-span
 */
export function codeSpan(code?: string): string;

/**
 * Create a Markdown fenced code block.
 *
 * @see https://spec.commonmark.org/0.30/#fenced-code-blocks
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function fencedCodeBlock(code?: string, infoString?: string): string;

/**
 * Create a Markdown fenced code block with a JavaScript info string.
 *
 * @see https://spec.commonmark.org/0.30/#code-fence
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function fencedJsCodeBlock(code?: string): string;

/**
 * Create a Markdown fenced code block with a TypeScript info string.
 *
 * @see https://spec.commonmark.org/0.30/#code-fence
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function fencedTsCodeBlock(code?: string): string;

/**
 * Create a Markdown fenced code block with a shell script info string.
 *
 * @see https://spec.commonmark.org/0.30/#code-fence
 * @see https://spec.commonmark.org/0.30/#info-string
 */
export function fencedShCodeBlock(code?: string): string;

/**
 * Create a level 1 Markdown header.
 *
 * @see https://spec.commonmark.org/0.30/#setext-headings
 */
export function h1(text?: string): string;

/**
 * Create a level 2 Markdown header.
 *
 * @see https://spec.commonmark.org/0.30/#setext-headings
 */
export function h2(text?: string): string;

/**
 * Create a level 3 Markdown header.
 *
 * @see https://spec.commonmark.org/0.30/#atx-heading
 */
export function h3(text?: string): string;

/**
 * Create a level 4 Markdown header.
 *
 * @see https://spec.commonmark.org/0.30/#atx-heading
 */
export function h4(text?: string): string;
