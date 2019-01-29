import styled, { css, ThemedStyledProps } from '../../style/themes'
import { Props } from './index'

function defaultSmall (
  defaultValue: any,
  smallValue: any
) {
  return (p: Props) => {
    switch (p.size) {
      case 'default':
        return defaultValue
      case 'small':
        return smallValue
    }
  }
}

const getThemeColors = (p: ThemedStyledProps<Props>) => {
  let mainColor = p.theme.color.white
  let activeColor = p.theme.color.grey100
  let sliderColor = p.theme.color.grey300

  if (p.checked) {
    mainColor = p.theme.color.primary500
    activeColor = p.theme.color.primary600
  }

  return css`
  --toggle-bullet-mainColor: ${mainColor};
  --toggle-bullet-activeColor: ${activeColor};
  --toggle-slider-color: ${sliderColor}
  `
}

const moveBullet = (p: Props) => {
  let translate = '22px'
  if (p.size === 'small') {
    translate = '16px'
  }
  if (!p.checked) {
    translate = '0'
  }

  return css`
  --toggle-bullet-translate: translateX(${translate});
  `
}

export const StyledWrapper = styled<Props, 'div'>('div')`
  display: flex;
`

export const StyleToggle = styled<Props, 'div'>('div')`
  position: relative;
  display: inline-block;
  height: ${(p) => p.size === 'small' ? '16px' : '20px'};
  width: ${(p) => p.size === 'small' ? '28px' : '42px'};
  opacity: ${(p) => p.disabled ? '.65' : ''};
`

export const StyledSlider = styled<Props, 'div'>('div')`
  ${getThemeColors};
  position: absolute;
  border-radius: 4px;
  background-color: var(--toggle-slider-color);
  top: ${defaultSmall('6px', '5px')};
  height: ${defaultSmall('8px', '6px')};
  width: ${(p) => p.size === 'small' ? '28px' : '42px'};
`

export const StyledBullet = styled<Props, 'div'>('div')`
  ${getThemeColors};
  ${moveBullet};
  position: absolute;
  cursor: pointer;
  height: ${defaultSmall('20px', '16px')};
  width: ${defaultSmall('20px', '16px')};
  background-color: var(--toggle-bullet-mainColor);
  border-radius: 50%;
  transition: all .4s ease;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: var(--toggle-bullet-translate);

  ${(p) => p.disabled ? css` pointer-events: none;` : ''};

  :focus {
    box-shadow: 0 0 0 2px rgba(251, 84, 43, 01);
    outline: 0;
  }

  :active {
    background-color: var(--toggle-bullet-activeColor);
  }
  `
