import styled from 'styled-components';
import { breakpoint } from '../style-util';

export const MainBody = styled.div`
	width: 100%;

	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    width: 70%;
		margin: 0 auto;

		${breakpoint.sm`
			width: 90%;
  	`}
		
		h1 {
	    font-size: 32px;
	    font-weight: 500;
			margin-top: 90px;
			text-align: center;

			${breakpoint.sm`
				margin-top: 40px;
				font-size: 24px;
  		`}
		}

		.converter-container {
			width: 80%;
			border-radius: 12px;
			margin: 50px 0;
			padding: 25px;
			box-sizing: border-box;
			box-shadow: 1px 0px 6px 0px rgba(90,89,89,0.75);
			-webkit-box-shadow: 1px 0px 6px 0px rgba(90,89,89,0.75);
			-moz-box-shadow: 1px 0px 6px 0px rgba(90,89,89,0.75);

			${breakpoint.sm`
				width: 100%;
				margin: 20px 0;
				padding: 25px 15px;
  		`}

			.converter-top {
				width: 100%;
				display: flex;
				justify-content: center;

				.toggle-container {
					display: inline-block;
					border-radius: 15px;
					overflow: hidden;
					box-sizing: border-box;
					box-shadow: 1px 0px 6px 0px rgba(90,89,89,0.75);
					-webkit-box-shadow: 1px 0px 6px 0px rgba(90,89,89,0.75);
					-moz-box-shadow: 1px 0px 6px 0px rgba(90,89,89,0.75);
	
					.toggle {
						padding: 10px 25px;
						display: inline-block;
						cursor: pointer;
	
						&.active {
							background: #00B3EC;
							color: #FFFFFF;
						}
	
						&:hover {
							background: #a1e5fb;
						}
					}
				}
			}

			.converter-main {
				margin-top: 30px;
				.intro-text {
					text-align: center;
				}
			}
		}
	}
`;
