import { Board } from '../interfaces';
import { ArrowCodes } from '../constants/Main';

export const shuffle = (board: Board): Board => [...board.sort(() => Math.random() - 0.5)];

function getTargetIndex(direction: ArrowCodes, activeIndex: number) {
    switch (direction) {
        case ArrowCodes.LEFT:
            return activeIndex + 1;
        case ArrowCodes.RIGHT:
            return activeIndex - 1;
        case ArrowCodes.DOWN:
            return activeIndex - 4;
        case ArrowCodes.UP:
            return activeIndex + 4;    
        default:
            console.log('def');
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
