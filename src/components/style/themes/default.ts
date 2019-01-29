import colors from '../color/colorPalette'
import { TinyColor } from '../color/tinycolor'
import ITheme from './themeInterface'

// Define colors, fonts, and sizes by purpose.
// Keys should not describe the value, but what they are to be used for.

const theme: ITheme = {
  color: {
    primaryColor: colors.orange500,
    primaryGrey: colors.grey500,
    infoColor: colors.blue500,
    successColor: colors.green500,
    errorColor: colors.red500,
    destructiveColor: colors.red500,
    warningColor: colors.yellow500,
    white: colors.white,
    black: colors.grey900,

    get primary300 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 4) },
    get primary400 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 5) },
    get primary500 () { return this.primaryColor },
    get primary600 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 7) },
    get primary700 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 8) },

    // Neutral Color Scale.
    get grey000 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 1) },
    get grey100 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 2) },
    get grey200 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 3) },
    get grey300 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 4) },
    get grey400 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 5) },
    get grey500 () { return this.primaryGrey },
    get grey600 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 7) },
    get grey700 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 8) },
    get grey800 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 9) },
    get grey900 () { return new TinyColor(this.primaryGrey).makeColor(this.primaryGrey, 10) },

    // brave controls
    brandBraveInteracting: colors.orange600,
    brandBraveActive: colors.orange200,
    brandBraveLight: colors.orange000,
    // bat controls
    brandBatInteracting: colors.blurple500,
    brandBatActive: colors.blurple200,
    // regular controls
    defaultControl: colors.grey900,
    defaultControlInteracting: colors.grey900,
    defaultControlActive: colors.grey800,
    // warning controls
    warn: colors.red500,
    warnInteracting: colors.red600,
    warnActive: colors.red700,
    // subtle controls
    subtle: colors.grey500,
    subtleBackground: colors.grey200,
    subtleExclude: colors.grey400,
    subtleInteracting: colors.grey600,
    subtleActive: colors.grey700,
    // disabled controls
    disabled: colors.grey400,
    // backgrounds
    primaryBackground: colors.white,
    secondaryBackground: colors.grey500,
    modalOverlayBackground: 'rgba(36,37,54,0.85)',
    // text
    detailDescription: colors.grey600
    //
  },
  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Muli, sans-serif',
    code: 'SFMono-Regular, monospace',
    system: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
}

export default theme
