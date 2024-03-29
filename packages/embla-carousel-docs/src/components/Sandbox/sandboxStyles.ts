import { css } from 'styled-components'
import { styledComponentsStylesToString } from 'utils/styledComponentStylesToString'
import { RESET_STYLES } from 'components/Layout/GlobalStyles/reset'
import { BASE_STYLES } from 'components/Layout/GlobalStyles/base'
import { FONT_STYLES } from 'components/Layout/GlobalStyles/font'
import { CAROUSEL_WRAPPER_RADIUS } from '../Examples/carouselWrapperStyles'
import { MEDIA } from 'consts/breakpoints'
import { BORDER_SIZES } from 'consts/border'
import { FONT_WEIGHTS } from 'consts/fontSizes'
import { COLORS, THEME_STYLES } from 'consts/themes'

const SANDBOX_WRAPPER_STYLES = css`
  .sandbox {
    width: 100%;
  }

  ${MEDIA.MIN_SM} {
    .sandbox {
      margin-left: auto;
      margin-right: auto;
      max-width: 67rem;
    }
  }
`

const SANDBOX_CAROUSEL_STYLES = css`
  .sandbox__carousel {
    position: relative;
    background-color: ${COLORS.BACKGROUND_CODE};
  }

  ${MEDIA.MAX_SM} {
    .sandbox__carousel {
      border-top: ${BORDER_SIZES.DETAIL} solid ${COLORS.DETAIL_LOW_CONTRAST};
      border-bottom: ${BORDER_SIZES.DETAIL} solid ${COLORS.DETAIL_LOW_CONTRAST};
    }
  }

  ${MEDIA.MIN_SM} {
    .sandbox__carousel {
      border-radius: ${CAROUSEL_WRAPPER_RADIUS};
      border: ${BORDER_SIZES.DETAIL} solid ${COLORS.DETAIL_LOW_CONTRAST};
    }
  }
`

const SANDBOX_HEADER_STYLES = css`
  .sandbox__header {
    font-size: 2rem;
    font-weight: ${FONT_WEIGHTS.BOLD};
    text-align: center;
    padding: 4rem 2rem 2rem 2rem;
  }
`

const SANDBOX_FOOTER_STYLES = css`
  .sandbox__footer {
    display: flex;
    justify-content: center;
    padding: 2rem 2rem 4rem 2rem;
  }

  .sandbox__footer__link {
    display: flex;
    align-items: center;
    background-color: transparent;
    text-decoration: none;
    text-align: center;
    font-weight: ${FONT_WEIGHTS.BOLD};
    color: ${COLORS.TEXT_LOW_CONTRAST};
    font-size: 1.4rem;
  }

  .sandbox__footer__link__svg {
    display: block;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    fill: currentColor;
  }
`

export const BASE_CSS = styledComponentsStylesToString(
  THEME_STYLES,
  RESET_STYLES,
  BASE_STYLES,
  FONT_STYLES
)

export const SANDBOX_CSS = styledComponentsStylesToString(
  SANDBOX_WRAPPER_STYLES,
  SANDBOX_CAROUSEL_STYLES,
  SANDBOX_HEADER_STYLES,
  SANDBOX_FOOTER_STYLES
)
