import styled from 'styled-components';
import { breakpoint } from '../style-util';

export const HeaderMain = styled.div`
	background: #00b3ec;
	width: 100%;

	.header {
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	    width: 70%;
	    margin: 0 auto;
			padding: 10px 0;

			${breakpoint.sm`
				width: 90%;
  		`}
			
			.logo {
				text-decoration: none;
				font-weight: 800;
				color: #FFFFFF;
			}

			.built-with {
				font-size: 12px;
				color: #FFFFFF;
				font-weight: 600;
			}
	}
`;