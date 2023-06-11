import React, { useState } from 'react';
import './GridBoxes.css'; // CSS file for styling
import Robot from './Robot';

const GridBoxes = () => {
  const gridSize = 5; // Number of rows and columns
  const totalBoxes = gridSize * gridSize;

  const [robotPosition, setRobotPosition] = useState({ row: 0, col: 0 });

  const handleMove = (direction) => {
    const { row, col } = robotPosition;
    let newRow = row;
    let newCol = col;

    // Update the robot position based on the direction
    switch (direction) {
      case 'up':
        newRow = Math.max(row - 1, 0);
        break;
      case 'down':
        newRow = Math.min(row + 1, gridSize - 1);
        break;
      case 'left':
        newCol = Math.max(col - 1, 0);
        break;
      case 'right':
        newCol = Math.min(col + 1, gridSize - 1);
        break;
      default:
        break;
    }

    // Update the robot position
    setRobotPosition({ row: newRow, col: newCol });
  };

  // Generate an array of box elements
  const boxes = [];
  for (let i = 0; i < totalBoxes; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    const isRobot = row === robotPosition.row && col === robotPosition.col;
    const boxContent = isRobot ? <Robot /> : (row === gridSize - 1 && col === gridSize - 1) ? '🟥' : null;
    const boxClass = boxContent ? 'box with-content' : 'box';
    boxes.push(<div key={i} className={boxClass}>{boxContent}</div>);
  }

  return (
    <div>
      <div className="grid-container">{boxes}</div>
      <div className="logic-panel">
        <button onClick={() => handleMove('up')}>Up</button>
        <button onClick={() => handleMove('down')}>Down</button>
        <button onClick={() => handleMove('left')}>Left</button>
        <button onClick={() => handleMove('right')}>Right</button>
      </div>
    </div>
  );
};

export default GridBoxes;
