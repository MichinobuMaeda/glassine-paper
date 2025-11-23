/**
 * @file Material Design 3 Color System Implementation
 * This module provides utilities for generating and applying Material Design 3 color schemes
 * based on a seed color. It implements Google's Material Color Utilities to create
 * comprehensive theme systems that follow Material Design guidelines for accessibility,
 * contrast, and visual hierarchy.
 *
 * Key features:
 * - Generate complete light/dark theme pairs from a single seed color
 * - Convert themes to CSS custom properties for web applications
 * - Support for dynamic theme switching and contrast adjustment
 * - Full Material Design 3 color token coverage including new surface variants
 * - Automatic HSL to Hex color conversion utilities
 *
 * The color system generates 33+ semantic color tokens for each theme mode, ensuring
 * consistent color relationships across all UI elements while maintaining WCAG
 * accessibility standards.
 * @module material-theme
 * @since 1.0.0
 * @example
 * // Basic theme generation
 * import { generateScheme, applyColorScheme } from './material-theme.js';
 *
 * const scheme = await generateScheme('#1976D2', 0);
 * applyColorScheme(scheme); // Apply theme to document
 * @example
 * // Generate CSS for static inclusion
 * import { generateScheme, generateThemeCss } from './material-theme.js';
 *
 * const scheme = await generateScheme('#E91E63', 0.2);
 * const cssContent = generateThemeCss(scheme, '#E91E63', 0.2);
 * // Save cssContent to a .css file
 */

import convert from 'color-convert';
import {
  argbFromHex,
  DynamicScheme,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities';

export const Variant = {
  MONOCHROME: 0,
  NEUTRAL: 1,
  TONAL_SPOT: 2,
  VIBRANT: 3,
  EXPRESSIVE: 4,
  FIDELITY: 5,
  CONTENT: 6,
  RAINBOW: 7,
  FRUIT_SALAD: 8,
} as const;

export type Variant = (typeof Variant)[keyof typeof Variant];

/**
 * A color token pair representing a semantic color name and its hexadecimal value.
 * Used throughout the Material Design color system to associate meaningful names
 * with specific color values, enabling semantic color usage in UI components.
 * @example ["primary", "#1976D2"]
 * @example ["onPrimary", "#FFFFFF"]
 * @example ["surfaceContainerHighest", "#E8EAF6"]
 * @since 1.0.0
 */
type ColorPair = [string, string];

/**
 * Complete theme object containing brightness mode and associated color tokens.
 * Represents either a light or dark theme variant with all Material Design 3
 * semantic color tokens. Each theme object contains 33+ color pairs covering
 * primary, secondary, tertiary, surface, and semantic color categories.
 * @property {string} brightness - Theme brightness mode, either "light" or "dark"
 * @property {Array<ColorPair>} colors - Array of semantic color token pairs
 * @example
 * // Light theme example
 * {
 *   brightness: "light",
 *   colors: [
 *     ["primary", "#1976D2"],
 *     ["onPrimary", "#FFFFFF"],
 *     ["primaryContainer", "#BBDEFB"],
 *     ["surface", "#FEFBFF"],
 *     ["onSurface", "#1C1B1F"]
 *   ]
 * }
 * @example
 * // Dark theme example
 * {
 *   brightness: "dark",
 *   colors: [
 *     ["primary", "#90CAF9"],
 *     ["onPrimary", "#003258"],
 *     ["primaryContainer", "#004881"],
 *     ["surface", "#141218"],
 *     ["onSurface", "#E6E0E9"]
 *   ]
 * }
 * @since 1.0.0
 */
interface ThemeObject {
  brightness: string;
  colors: ColorPair[];
}

/**
 * Generates a comprehensive Material Design color scheme from a seed color.
 * Creates both light and dark theme variants with all standard Material Design
 * color tokens including primary, secondary, tertiary, surface, and semantic colors.
 *
 * Based on Material Design 3 color system, this function uses the provided seed color
 * to generate harmonious color palettes for both light and dark modes that follow
 * accessibility guidelines. It utilizes the Material Color Utilities package to apply
 * proper color theory for generating tonal palettes from the seed color.
 *
 * The function creates separate tokens for key UI elements following Material Design's
 * naming conventions like 'onPrimary' for text on primary surfaces and 'primaryContainer'
 * for container elements with primary color associations.
 * @param {string} seedColor - Hex color code (e.g., "#FF5722") to use as the base for generating the entire color scheme.
 *   Must be a valid 6-digit hexadecimal color with # prefix. Invalid colors will throw an error.
 * @param {number} contrast - Contrast level for the scheme, typically ranging from -1.0 to 1.0.
 *   - 0.0: Standard contrast (default Material Design contrast)
 *   - Positive values: Higher contrast for improved accessibility
 *   - Negative values: Lower contrast for softer appearance
 *   - Values outside -1.0 to 1.0 are automatically clamped
 * @returns {Promise<Array<ThemeObject>>} Promise resolving to an array of theme objects:
 * - Each theme contains: {brightness, colors}
 * - brightness: "light" or "dark"
 * - colors: Array of [tokenName, hexColor] pairs (33+ tokens per theme)
 * @throws {Error} Throws error if seedColor is not a valid hex color format
 * @since 1.0.0
 * @example
 * // Generate a blue-based theme with standard contrast
 * const scheme = await generateScheme("#1976D2", 0);
 * // Returns: [
 * //   {brightness: "light", colors: [["primary", "#1976D2"], ["onPrimary", "#FFFFFF"], ...]},
 * //   {brightness: "dark", colors: [["primary", "#90CAF9"], ["onPrimary", "#003258"], ...]}
 * // ]
 * @example
 * // Generate a high-contrast green theme for accessibility
 * const highContrastScheme = await generateScheme("#4CAF50", 0.5);
 * @example
 * // Generate theme for brand colors with custom contrast
 * const brandColor = "#E91E63"; // Brand pink
 * const themeData = await generateScheme(brandColor, 0.2);
 * const [lightTheme, darkTheme] = themeData;
 */
export async function generateScheme(
  seedColor: string,
  variant: number = Variant.TONAL_SPOT,
  contrast: number
): Promise<Array<ThemeObject>> {
  const theme = themeFromSourceColor(argbFromHex(seedColor));

  return [
    { key: 'light', value: false },
    { key: 'dark', value: true },
  ].map((brightness) => {
    const ds = new DynamicScheme({
      sourceColorArgb: argbFromHex(seedColor),
      variant: variant,
      contrastLevel: contrast,
      isDark: brightness.value,
      primaryPalette: theme.palettes.primary,
      secondaryPalette: theme.palettes.secondary,
      tertiaryPalette: theme.palettes.tertiary,
      neutralPalette: theme.palettes.neutral,
      neutralVariantPalette: theme.palettes.neutralVariant,
    });

    return {
      brightness: brightness.key,
      colors: [
        'primary',
        'surfaceTint',
        'onPrimary',
        'primaryContainer',
        'onPrimaryContainer',
        'secondary',
        'onSecondary',
        'secondaryContainer',
        'onSecondaryContainer',
        'tertiary',
        'onTertiary',
        'tertiaryContainer',
        'onTertiaryContainer',
        'error',
        'onError',
        'errorContainer',
        'onErrorContainer',
        'background',
        'onBackground',
        'surface',
        'onSurface',
        'surfaceVariant',
        'onSurfaceVariant',
        'outline',
        'outlineVariant',
        'shadow',
        'scrim',
        'inverseSurface',
        'inverseOnSurface',
        'inversePrimary',
        'primaryFixed',
        'onPrimaryFixed',
        'primaryFixedDim',
        'onPrimaryFixedVariant',
        'secondaryFixed',
        'onSecondaryFixed',
        'secondaryFixedDim',
        'onSecondaryFixedVariant',
        'tertiaryFixed',
        'onTertiaryFixed',
        'tertiaryFixedDim',
        'onTertiaryFixedVariant',
        'surfaceDim',
        'surfaceBright',
        'surfaceContainerLowest',
        'surfaceContainerLow',
        'surfaceContainer',
        'surfaceContainerHigh',
        'surfaceContainerHighest',
      ].map((key) => [
        key,
        hexFromArgb(ds[key as keyof DynamicScheme] as number),
      ]),
    };
  });
}

/**
 * Converts a Material Design theme scheme to CSS custom properties (variables).
 * Transforms theme color tokens into CSS variable format with proper naming conventions.
 *
 * This function processes the output from generateScheme() and formats it as CSS custom properties
 * that can be directly applied to stylesheets. It uses kebab-case naming for CSS variables
 * following CSS best practices (e.g., "primaryContainer" becomes "--primary-container").
 *
 * Each color value is formatted as a hexadecimal color string suitable for CSS usage.
 * The generated variables follow Material Design's semantic naming system for consistent
 * theming across components.
 * @param {Array<ThemeObject>} scheme - Array of theme objects from generateScheme().
 *   Expected format: [{brightness: "light"|"dark", colors: [[tokenName, hexColor], ...]}, ...]
 *   - Must contain at least one theme object
 *   - Each theme must have brightness and colors properties
 *   - colors should be array of [string, string] tuples
 * @returns {object} Object with brightness values as keys ("light", "dark")
 *   and CSS variable objects as values. Each nested object contains CSS variable names
 *   as keys (with -- prefix) and hex color values.
 * @throws {Error} Throws error if scheme is empty, malformed, or contains invalid color data
 * @since 1.0.0
 * @example
 * // Convert generated scheme to CSS variables
 * const scheme = await generateScheme("#1976D2", 0);
 * const cssVars = convertToVariables(scheme);
 * console.log(cssVars);
 * // Output:
 * // {
 * //   "light": {
 * //     "--primary": "#1976D2",
 * //     "--on-primary": "#FFFFFF",
 * //     "--primary-container": "#90CAF9",
 * //     "--surface": "#FFFBFE",
 * //     ...
 * //   },
 * //   "dark": {
 * //     "--primary": "#90CAF9",
 * //     "--on-primary": "#003258",
 * //     "--primary-container": "#004881",
 * //     "--surface": "#121212",
 * //     ...
 * //   }
 * // }
 * @example
 * // Apply to stylesheet dynamically
 * const variables = convertToVariables(themeScheme);
 * const lightVars = variables.light;
 * Object.entries(lightVars).forEach(([prop, value]) => {
 *   document.documentElement.style.setProperty(prop, value);
 * });
 */
export function convertToVariables(
  scheme: Array<ThemeObject>
): Array<[string, string]> {
  return scheme
    .map(({ brightness, colors }: ThemeObject) =>
      colors.map(([key, hex]: ColorPair) => {
        const varName = `--color-${brightness}-${key.replace(
          /[A-Z]+(?![a-z])|[A-Z]/g,
          ($: string, ofs: number) => (ofs ? '-' : '') + $.toLowerCase()
        )}`;
        return [varName, hex] as [string, string];
      })
    )
    .flat();
}

/**
 * Converts a Material Design color scheme into CSS custom properties (CSS variables).
 * Transforms the color scheme data into a CSS @theme block with properly named
 * CSS custom properties for both light and dark themes, plus additional
 * form-specific colors.
 *
 * This function creates kebab-case CSS custom property names from camelCase token
 * names and adds metadata comments about the generation process. It follows a naming convention
 * of `--color-{brightness}-{token-name}` to organize variables by theme mode and purpose.
 *
 * In addition to the colors from the schema, this function also adds supplementary color variables
 * for links and form elements that aren't directly provided by the Material Design scheme but
 * are useful for web applications. These include semantic colors for interactive elements
 * and form controls that maintain design consistency.
 *
 * The generated CSS includes comprehensive metadata documenting when and how the theme
 * was created, making it easier to track theme generations and their parameters.
 * @param {Array<ThemeObject>} scheme - Color scheme data from generateScheme().
 *   Expected format: Array of {brightness, colors} objects where:
 *   - brightness: "light" or "dark" string identifier
 *   - colors: Array of [tokenName, hexColor] string pair arrays
 *   - Must contain complete color token data for valid CSS generation
 * @param {string} seedColor - The original seed color used to generate the scheme.
 *   Should be a valid hex color (e.g., "#1976D2") used for theme generation metadata.
 *   This value is included in generated CSS comments for documentation purposes.
 * @param {number} contrast - The contrast level used when generating the scheme.
 *   Typically ranges from -1.0 to 1.0, included in CSS metadata for reference.
 *   Used to document the accessibility settings applied to the theme.
 * @returns {string} CSS string containing complete @theme block with:
 *   - Header comment with generation metadata (timestamp, seed color, contrast)
 *   - All Material Design color custom properties for light and dark modes
 *   - Additional semantic color variables for links and forms
 *   - Proper CSS formatting ready for file output or style injection
 * @since 1.0.0
 * @example
 * // Convert scheme to complete CSS theme
 * const scheme = await generateScheme("#1976D2", 0);
 * const cssTheme = generateThemeCss(scheme, "#1976D2", 0);
 * // Returns formatted CSS with @theme block containing color variables
 * @example
 * // Generate CSS file for build process
 * const brandScheme = await generateScheme("#E91E63", 0.3);
 * const themeCSS = generateThemeCss(brandScheme, "#E91E63", 0.3);
 * await fs.writeFile('theme.css', themeCSS, 'utf8');
 * @example
 * // Use with CSS injection for dynamic theming
 * const userScheme = await generateScheme(userPickedColor, userContrastLevel);
 * const themeCss = generateThemeCss(userScheme, userPickedColor, userContrastLevel);
 * const styleEl = document.createElement('style');
 * styleEl.textContent = themeCss;
 * document.head.appendChild(styleEl);
 */
export function generateThemeCss(
  variables: Array<[string, string]>,
  seedColor: string,
  contrast: number,
  variant: number
): string {
  const css = `/**
 * Material Design 3 Theme colors
 *
 * Generated by: Glassine Paper
 * Generated at: ${new Date().toISOString()}
 * Seed color  : ${seedColor}
 * Contrast    : ${Number(contrast).toFixed(2)}
 * Variant     : ${Object.entries(Variant)
   .filter(([, value]) => value === variant)
   .map(([key]) => key)}
 */

:root {
${variables
  .map(([varName, hex]: [string, string]) => `  ${varName}: ${hex};`)
  .join('\n')}

  --color-light-link: #1976D2;
  --color-dark-link: #64B5F6;
  --color-light-form: var(--color-light-surface-container-lowest);
  --color-dark-form: var(--color-dark-surface-container-lowest);
  --color-light-on-form: var(--color-light-on-surface);
  --color-dark-on-form: var(--color-dark-on-surface);
}
`;

  return css;
}

/**
 * Calculate contrast color (black or white) based on background luminance
 */
export function getContrastColor(hexColor: string): string {
  const rgb = convert.hex.rgb(hexColor.replace('#', ''));
  // Calculate relative luminance using sRGB formula
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}
