import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { RESOLVED_BOARD } from '../constants';
import { shuffle, move, getGameOver } from '../helpers/board';

function App() {
	const [board, setBoard] = useState([...RESOLVED_BOARD]);

	useEffect(() => {
		setBoard(shuffle(board));
		window.addEventListener('keyup', handleKey);
	}, []);

	useEffect(() => {
		if (getGameOver(board)) {
			console.log('Game over');
			setBoard(shuffle(board));
		}
	}, [board]);

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
