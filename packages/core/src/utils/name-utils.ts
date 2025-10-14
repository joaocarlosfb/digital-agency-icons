/**
 * Convert snake_case to PascalCase
 * Example: arrow_right_fill -> ArrowRightFill
 */
export function toPascalCase(str: string): string {
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Convert snake_case to camelCase
 * Example: arrow_right_fill -> arrowRightFill
 */
export function toCamelCase(str: string): string {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/**
 * Extract icon name without variant suffix
 * Example: arrow_right_fill -> arrow_right
 */
export function getIconBaseName(fileName: string): string {
  return fileName.replace(/_(fill|line)$/, '');
}

/**
 * Get variant from file name
 * Example: arrow_right_fill -> fill
 */
export function getIconVariant(fileName: string): 'fill' | 'line' {
  return fileName.endsWith('_fill') ? 'fill' : 'line';
}
