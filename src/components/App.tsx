import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { ELEMENTS } from '../constants';
import { shuffle, move } from '../helpers/board';

function App() {
	const [board, setBoard] = useState(ELEMENTS);

	useEffect(() => {
		setBoard(shuffle(board));
		window.addEventListener('keyup', handleKey);
	}, []);

	const handleKey = useCallback((e: KeyboardEvent) => {
		setBoard(move(board, e.keyCode));
	}, [board]);

	return (
		<div className="board">
			{board.map((el, index) => <div key={index} className="square">{el}</div>)}
		</div>
	);
}

export default App;
