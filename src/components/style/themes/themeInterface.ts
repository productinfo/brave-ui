import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  color: {
    primaryColor: string
    primaryGrey: string
    infoColor: string
    successColor: string
    errorColor: string
    warningColor: string
    destructiveColor: string
    white: string
    black: string
    //
    primary300: string
    primary400: string
    primary500: string
    primary600: string
    primary700: string
    //
    grey000: string
    grey100: string
    grey200: string
    grey300: string
    grey400: string
    grey500: string
    grey600: string
    grey700: string
    grey800: string
    grey900: string
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
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
