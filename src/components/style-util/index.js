import { css } from 'styled-components';

export const deviceBreakpoints = {
	xs: '425px',
	sm: '768px',
	md: '1280px',
	lg: '1440px',
	xlg: '1440px',
	xxlg: '1650px',
};

export const deviceBreakpointsWithoutUnit = {
	xs: 425,
	sm: 768,
	md: 1280,
	lg: 1440,
	xlg: 1440,
	xxlg: 1650,
};

const isSafariMobile = () => {
	if (
		typeof window === 'undefined' ||
		typeof window.navigator === 'undefined'
	) {
		return false;
	}
	const {
		navigator: { userAgent },
	} = window;

	return /iP(ad|od|hone)/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

// if min-width is 768px, max-width should be 767px
export const breakpoint = Object.keys(deviceBreakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
      @media (max-width: ${deviceBreakpointsWithoutUnit[label] - 1}px) {
        ${css(...args)};
      }

      ${label == 'md' &&
			isSafariMobile() &&
			`
        @media screen and (orientation: landscape) {
          ${css(...args)};
        }
      `}
    `;
		return accumulator;
	},
	{},
);
