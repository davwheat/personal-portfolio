/**
 * Color tokens for use in React components
 * Each color has an "on-" variant for content displayed on that background
 */

export enum HeroColorVariant {
  Primary = 'primary',    // #51c5dd with black text
  Secondary = 'secondary', // #f04c63 with white text
  Text = 'text',          // #000 with white text
}

export interface ColorToken {
  bg: string  // CSS variable for background color
  on: string  // CSS variable for content/text color on that background
}

export const ColorTokens: Record<HeroColorVariant, ColorToken> = {
  [HeroColorVariant.Primary]: {
    bg: 'var(--color-primary-blue)',
    on: 'var(--color-on-primary-blue)',
  },
  [HeroColorVariant.Secondary]: {
    bg: 'var(--color-primary-red)',
    on: 'var(--color-on-primary-red)',
  },
  [HeroColorVariant.Text]: {
    bg: 'var(--color-text)',
    on: 'var(--color-on-text)',
  },
}

/**
 * Get the appropriate color token for a Hero section
 */
export function getHeroColor(variant: HeroColorVariant): ColorToken {
  return ColorTokens[variant]
}

export default HeroColorVariant
