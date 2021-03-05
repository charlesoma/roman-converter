import styled from 'styled-components';
import { breakpoint } from '../style-util';

export const ConverterMain = styled.div`
	input {
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
		box-sizing: border-box;
		width: 100%;
		font-size: 18px;
		text-align: center;
		text-transform: uppercase;
		text-align: center;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	  margin: 0;
	}

	input[type=number] {
	  -moz-appearance: textfield;
	}

	.error-message {
		color: red;
		font-size: 12px;
		text-align: center;
		align-self: center;
		margin: 0 0 -15px 0;
	}

	button {
		width: 100%;
		padding: 10px 20px;
		background: #00b3ec;
		border: none;
		color: #FFFFFF;
		font-weight: 600;
		border-radius: 8px;
		cursor: pointer;
		outline: none;
		margin-top: 30px;
	}

	p {
		margin-top: 30px;
		text-align: center;
	}

	.result {
		width: 100%;
		height: 80px;
		border: 1px solid #000000;
		text-align: center;
		padding: 10px 20px;
		box-sizing: border-box;
		font-size: 18px;
		word-wrap: break-word;
		overflow: auto;
	}
`;
