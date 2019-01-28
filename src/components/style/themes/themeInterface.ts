import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  color: {
    //
    primaryColor: string
    infoColor: string
    successColor: string
    errorColor: string
    warningColor: string
    white: string
    black: string
    //
    primary000: string
    primary100: string
    primary200: string
    primary300: string
    primary400: string
    primary500: string
    primary600: string
    primary700: string
    primary800: string
    primary900: string
    //

    //
    brandBraveInteracting: string
    brandBraveActive: string
    brandBraveLight: string
    brandBatInteracting: string
    brandBatActive: string
    detailDescription: string
    disabled: string
    primaryBackground: string
    secondaryBackground: string
    modalOverlayBackground: string
    defaultControl: string
    defaultControlInteracting: string
    defaultControlActive: string
    warn: string
    warnInteracting: string
    warnActive: string
    subtle: string
    subtleBackground: string
    subtleExclude: string
    subtleInteracting: string
    subtleActive: string
  }
  fontFamily: {
    heading: string
    body: string
    code: string
    system: string
  },
  base: {
    bodyBackground: string
    componentBackground: string,
    //
    headingColor: string
    textColor: string
    textColorSecondary: string
    textColorInverse: string
    // iconColorHover: string
    headingColorDark: string
    textColorDark: string
    textColorSecondaryDark: string
    // fontVariantBase: string
    fontSizeBase: string
    fontSizeLg: string
    fontSizeSm: string
    // lineHeightBase: string
    // lineHeightLarge: string
    // borderRadiusBase: string
    // borderRadiusSm: string

    // // vertical paddings
    // paddingLg: string
    // paddingMd: string
    // paddingSm: string
    // paddingXs: string

    // // vertical padding for all form controls
    // controlPaddingHorizontal: string
    // controlPaddingHorizontalSm: string

    // // The background colors for active and hover states for things like
    // // list items or table cells.
    // itemActiveBg: string
    // itemHoverBg: string

    // // LINK
    // linKColor: string
    // linkHoverColor: string
    // linkActiveColor: string
    // linkDecoration: string
    // linkHoverDecoration: string

    // // Border color
    // borderColorBase: string
    // borderColorSplit: string
    // borderColorInverse: string
    // borderWidthBase: string
    // borderStyleBase: string

    // // Outline
    // outlineBlurSize: string
    // outlineWidth: string
    // outlineColor: string

    // backgroundColorLight: string
    // backgroundColorBase: string

    // // Disabled states
    // disabledColor: string
    // disabledBg: string
    // disabledColorDark: string

    // // Shadow
    // shadowColor: string
    // shadowColorInverse: string
    // boxShadowBase: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
