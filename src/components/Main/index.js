import React, { useState } from 'react';
import Header from '../Header';
import { MainBody } from './style';
import Converter from '../Converter';

const Main = () => {
	const [toggleState, setToggleState] = useState('toRoman');

	const handleToggleState = (value) => {
		setToggleState(value)
	}

	return (
		<MainBody>
			<Header />
			<div className='body'>
				<h1>Best way to convert to and from roman numerals</h1>
				<div className='converter-container'>
					<div className='converter-top'>
						<div className='toggle-container'>
							<div onClick={() => handleToggleState('toRoman')} className={`toggle ${toggleState === 'toRoman' && 'active'}`}>To Roman</div>
							<div onClick={() => handleToggleState('toInteger')} className={`toggle ${toggleState === 'toInteger' && 'active'}`}>To Integer</div>
						</div>
					</div>
					<div className='converter-main'>
						{toggleState === 'toRoman' ?
						<p className='intro-text'>Input integers to convert to Roman numerals</p> :
						<p className='intro-text'>Input Roman numerals to convert to integers</p>}
						<Converter conversionType={toggleState} />
					</div>
				</div>
			</div>
		</MainBody>
	);
}

export default Main;
