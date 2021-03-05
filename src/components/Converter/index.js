import React, { useState, useEffect } from 'react';
import { ConverterMain } from './style';
import RomanNumerals from '../helper/RomanNumerals';

const Converter = ({conversionType}) => {
	const [text, setText] = useState('');
	const [result, setResult] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		setText('');
		setResult('');
		setError('');
	}, [conversionType])

	const handleTextChange = (e) => {
		setText(e.target.value);
		setError('');
		setResult('');
	}

	const onKeyUpForEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleConversion();
    }
  }

	const handleConversion = () => {
		if (conversionType === 'toRoman') {
			const value = RomanNumerals.toRoman(text);
			if (!value) {
				setError('Invalid input entered. Please enter only integers');
				setResult('');
				return;
			}
			setResult(value);
		} else {
			const value = RomanNumerals.fromRoman(text.toUpperCase());
			if (!value) {
				setError('Invalid input entered. Please enter valid roman numerals');
				setResult('');
				return;
			}
			setResult(value);
		}
	}

	return (
		<ConverterMain>
			<input value={text} type={conversionType === 'toRoman' ? 'number' : 'text'} onKeyUp={onKeyUpForEnter} onChange={handleTextChange} />
			{error !== '' && <p className="error-message">{error}</p>}
			<button onClick={handleConversion}>Convert</button>
			<p>Result</p>
			<div className='result'>{result}</div>
		</ConverterMain>
	);
}

export default Converter;
