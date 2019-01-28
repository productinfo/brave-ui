import { TinyColor } from './tinycolor'
import baseColors from './baseColors'

/* this is the Brave color palette
 * that is systematically generated from Brave baseColors.
 * The makeColor function will generate a relatively cohesive palette
 * scale from any HEX but works best when the source value naturally falls
 * around the 500 region of the scale.
 */

const scaleGrey = {
  grey000: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 1),
  grey100: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 2),
  grey200: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 3),
  grey300: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 4),
  grey400: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 5),
  grey500: baseColors.grey,
  grey600: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 7),
  grey700: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 8),
  grey800: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 9),
  grey900: new TinyColor(baseColors.grey).makeColor(baseColors.grey, 10)
}

const scaleOrange = {
  orange000: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 1),
  orange100: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 2),
  orange200: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 3),
  orange300: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 4),
  orange400: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 5),
  orange500: baseColors.orange,
  orange600: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 7),
  orange700: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 8),
  orange800: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 9),
  orange900: new TinyColor(baseColors.orange).makeColor(baseColors.orange, 10)
}

const scaleBlurple = {
  blurple000: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    1
  ),
  blurple100: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    2
  ),
  blurple200: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    3
  ),
  blurple300: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    4
  ),
  blurple400: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    5
  ),
  blurple500: baseColors.blurple,
  blurple600: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    7
  ),
  blurple700: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    8
  ),
  blurple800: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    9
  ),
  blurple900: new TinyColor(baseColors.blurple).makeColor(
    baseColors.blurple,
    10
  )
}

const scaleBlue = {
  blue000: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 1),
  blue100: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 2),
  blue200: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 3),
  blue300: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 4),
  blue400: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 5),
  blue500: baseColors.blue,
  blue600: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 7),
  blue700: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 8),
  blue800: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 9),
  blue900: new TinyColor(baseColors.blue).makeColor(baseColors.blue, 10)
}

const scaleYellow = {
  yellow000: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 1),
  yellow100: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 2),
  yellow200: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 3),
  yellow300: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 4),
  yellow400: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 5),
  yellow500: baseColors.yellow,
  yellow600: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 7),
  yellow700: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 8),
  yellow800: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 9),
  yellow900: new TinyColor(baseColors.yellow).makeColor(baseColors.yellow, 10)
}

const scaleGreen = {
  green000: new TinyColor(baseColors.green).makeColor(baseColors.green, 1),
  green100: new TinyColor(baseColors.green).makeColor(baseColors.green, 2),
  green200: new TinyColor(baseColors.green).makeColor(baseColors.green, 3),
  green300: new TinyColor(baseColors.green).makeColor(baseColors.green, 4),
  green400: new TinyColor(baseColors.green).makeColor(baseColors.green, 5),
  green500: baseColors.green,
  green600: new TinyColor(baseColors.green).makeColor(baseColors.green, 7),
  green700: new TinyColor(baseColors.green).makeColor(baseColors.green, 8),
  green800: new TinyColor(baseColors.green).makeColor(baseColors.green, 9),
  green900: new TinyColor(baseColors.green).makeColor(baseColors.green, 10)
}

const scaleRed = {
  red000: new TinyColor(baseColors.red).makeColor(baseColors.red, 1),
  red100: new TinyColor(baseColors.red).makeColor(baseColors.red, 2),
  red200: new TinyColor(baseColors.red).makeColor(baseColors.red, 3),
  red300: new TinyColor(baseColors.red).makeColor(baseColors.red, 4),
  red400: new TinyColor(baseColors.red).makeColor(baseColors.red, 5),
  red500: baseColors.red,
  red600: new TinyColor(baseColors.red).makeColor(baseColors.red, 7),
  red700: new TinyColor(baseColors.red).makeColor(baseColors.red, 8),
  red800: new TinyColor(baseColors.red).makeColor(baseColors.red, 9),
  red900: new TinyColor(baseColors.red).makeColor(baseColors.red, 10)
}

const scalePurple = {
  purple000: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 1),
  purple100: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 2),
  purple200: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 3),
  purple300: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 4),
  purple400: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 5),
  purple500: baseColors.purple,
  purple600: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 7),
  purple700: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 8),
  purple800: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 9),
  purple900: new TinyColor(baseColors.purple).makeColor(baseColors.purple, 10)
}

const scaleTeal = {
  teal000: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 1),
  teal100: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 2),
  teal200: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 3),
  teal300: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 4),
  teal400: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 5),
  teal500: baseColors.teal,
  teal600: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 7),
  teal700: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 8),
  teal800: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 9),
  teal900: new TinyColor(baseColors.teal).makeColor(baseColors.teal, 10)
}

const scaleMagenta = {
  magenta000: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    1
  ),
  magenta100: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    2
  ),
  magenta200: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    3
  ),
  magenta300: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    4
  ),
  magenta400: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    5
  ),
  magenta500: baseColors.magenta,
  magenta600: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    7
  ),
  magenta700: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    8
  ),
  magenta800: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    9
  ),
  magenta900: new TinyColor(baseColors.magenta).makeColor(
    baseColors.magenta,
    10
  )
}

const white = '#FFFFFF'

export default {
  ...scaleBlue,
  ...scaleBlurple,
  ...scaleGreen,
  ...scaleGrey,
  ...scaleMagenta,
  ...scaleOrange,
  ...scalePurple,
  ...scaleRed,
  ...scaleTeal,
  ...scaleYellow,
  white
}
