import colors from '../color/colorPalette'
import { TinyColor } from '../color/tinycolor'
import ITheme from './themeInterface'

// Define colors, fonts, and sizes by purpose.
// Keys should not describe the value, but what they are to be used for.

const theme: ITheme = {
  color: {

    // Initial Color Variables
    primaryColor: colors.orange500,
    infoColor: colors.blue500,
    successColor: colors.green500,
    errorColor: colors.red500,
    warningColor: colors.yellow500,
    white: colors.white,
    black: colors.grey900,

    // Primary Color Scale - used by default to control hover and active backgrounds
    get primary000 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 1) },
    get primary100 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 2) },
    get primary200 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 3) },
    get primary300 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 4) },
    get primary400 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 5) },
    get primary500 () { return this.primaryColor },
    get primary600 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 7) },
    get primary700 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 8) },
    get primary800 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 9) },
    get primary900 () { return new TinyColor(this.primaryColor).makeColor(this.primaryColor, 10) },

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
  },

  // Base Scaffolding Variables
  // ------------------------------------

  base: {
    // Background color for `<body>`
    bodyBackground: '#FFFFFF',
    // Base background color for most components
    componentBackground: '#FFFFFF',
    //
    get headingColor () { return new TinyColor(theme.color.black).setAlpha(.90).toHslString() },
    get textColor () { return new TinyColor(theme.color.black).setAlpha(.65).toHslString() },
    get textColorSecondary () { return new TinyColor(theme.color.black).setAlpha(.40).toHslString() },
    get textColorInverse () { return theme.color.white },
    // iconColorHover:
    get headingColorDark () { return new TinyColor(theme.color.white).setAlpha(1).toHexString() },
    get textColorDark () { return new TinyColor(theme.color.white).setAlpha(.85).toHexString() },
    get textColorSecondaryDark () { return new TinyColor(theme.color.white).setAlpha(.65).toHexString() },
    // fontVariantBase: tabular - nums,
    fontSizeSm: '12px',
    fontSizeBase: '14px',
    get fontSizeLg () { return theme.base.fontSizeBase + '2px' }
    // lineHeightBase: 1.5,
    // lineHeightLarge: 1.75,

    // // border radius
    // borderRadiusBase: 8px,
    // borderRadiusSm: 4px,

    // // vertical paddings
    // paddingLg: 24px, // containers
    // paddingMd: 16px, // small containers and buttons
    // paddingSm: 12px, // Form controls and items
    // paddingXs: 8px, // small items

    // // vertical padding for all form controls
    // controlPaddingHorizontal: padding - sm,
    // controlPaddingHorizontalSm: padding - xs,

    // // The background colors for active and hover states for things like
    // // list items or table cells.
    // itemActiveBg: primary - 1,
    // itemHoverBg: primary - 1,

    // // LINK
    // linKColor: primary - color,
    // linkHoverColor: color(~`colorPalette("{link-color}", 5)`),
    // linkActiveColor: color(~`colorPalette("{link-color}", 7)`),
    // linkDecoration: none,
    // linkHoverDecoration: none,

    // // Border color
    // borderColorBase: hsv(0, 0, 85 %), // base border outline a component
    // borderColorSplit: hsv(0, 0, 91 %), // split border inside a component
    // borderColorInverse: white,
    // borderWidthBase: 1px, // width of the border for a component
    // borderStyleBase: solid, // style of a components border

    // // Outline
    // outlineBlurSize: 0,
    // outlineWidth: 2px,
    // outlineColor: primary - color,

    // backgroundColorLight: hsv(0, 0, 98 %), // background of header and selected item
    // backgroundColorBase: hsv(0, 0, 96 %), // Default grey background color

    // // Disabled states
    // disabledColor: fade(#000, 25 %),
    // disabledBg: background - color - base,
    // disabledColorDark: fade(#fff, 35 %),

    // // Shadow
    // shadowColor: rgba(0, 0, 0, .15),
    // shadowColorInverse: component - background,
    // boxShadowBase: shadow - 1 - down,
  }
}

export default theme
