import { Board } from '../interfaces';
import { ArrowCodes, RESOLVED_BOARD } from '../constants';

export const shuffle = (board: Board): Board => [...board.sort(() => Math.random() - 0.5)];

function getTargetIndex(direction: ArrowCodes, activeIndex: number) {
    switch (direction) {
        case ArrowCodes.LEFT:
            if (activeIndex !== 3 && activeIndex !== 7 && activeIndex !== 11) {
                return activeIndex + 1;
            }
            return activeIndex;
        case ArrowCodes.RIGHT:
            if (activeIndex !== 4 && activeIndex !== 8 && activeIndex !== 12) {
                return activeIndex - 1;
            }
            return activeIndex;
        case ArrowCodes.DOWN:
            return activeIndex - 4;
        case ArrowCodes.UP:
            return activeIndex + 4;    
        default:
            return activeIndex;
    }
}

export function move(board: Board, direction: ArrowCodes) {
    const activeIndex = board.indexOf('');
    const targetIndex = getTargetIndex(direction, activeIndex);
    if (targetIndex >=0 && targetIndex <= 15) {
        [board[activeIndex], board[targetIndex]] = [board[targetIndex], board[activeIndex]];
        return [...board];
    }
    return board;
}

export const getGameOver = (board: Board): boolean => board.length === RESOLVED_BOARD.length && board.every((el, i)=> el === RESOLVED_BOARD[i]);
