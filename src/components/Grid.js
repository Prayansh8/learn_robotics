import React, { useState, useEffect } from "react";
import "./GridBoxes.css"; // CSS file for styling
import Robot from "./Robot";
import {
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { BiReset } from "react-icons/bi";
import { SiReadthedocs } from "react-icons/si";
import Navbar from "./Navbar";
import Learn from "./Learn";

const Grid = () => {
  const gridSize = 5; // Number of rows and columns
  const totalBoxes = gridSize * gridSize;

  const [isRestarted, setIsRestarted] = useState(true);

  const initialPosition = { row: 0, col: 0 };

  const [robotPosition, setRobotPosition] = useState(initialPosition);
  const [directions, setDirections] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragStart = (e, direction) => {
    e.dataTransfer.setData("text/plain", direction);
  };

  const handleDrop = (e) => {
    const direction = e.dataTransfer.getData("text/plain");
    setDirections((prevDirections) => [...prevDirections, direction]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentIndex(0);
    setIsRestarted(false);
  };

  const handleReset = () => {
    setRobotPosition(initialPosition);
    setDirections([]);
    setIsPlaying(false);
    setCurrentIndex(0);
    setIsRestarted(true);
  };

  useEffect(() => {
    const handleMove = (direction) => {
      const { row, col } = robotPosition;
      let newRow = row;
      let newCol = col;

      switch (direction) {
        case "up":
          newRow = row === 0 ? gridSize - 1 : row - 1;
          break;
        case "down":
          newRow = row === gridSize - 1 ? 0 : row + 1;
          break;
        case "left":
          newCol = col === 0 ? gridSize - 1 : col - 1;
          break;
        case "right":
          newCol = col === gridSize - 1 ? 0 : col + 1;
          break;
        default:
          return;
      }
      setRobotPosition({ row: newRow, col: newCol });
    };
    if (isPlaying) {
      if (currentIndex < directions.length) {
        const direction = directions[currentIndex];
        setTimeout(() => {
          handleMove(direction);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 500);
      } else {
        setIsPlaying(false);
        setCurrentIndex(0);
      }
    }
  }, [currentIndex, directions, isPlaying, robotPosition]);

  // Generate an array of box elements
  const boxes = [];
  for (let i = 0; i < totalBoxes; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    const boxContent =
      row === robotPosition.row && col === robotPosition.col ? (
        <Robot />
      ) : row === gridSize - 1 && col === gridSize - 1 ? (
        <div
          style={{ backgroundColor: "red", width: "100%", height: "100%" }}
        ></div>
      ) : null;
    const boxClass = boxContent ? "box with-content" : "box";
    boxes.push(
      <div key={i} className={boxClass}>
        {boxContent}
      </div>
    );
  }

  const dropZones = [];
  for (let i = 1; i <= 14; i++) {
    const direction = directions[i - 1] || ""; // Get the direction value or an empty string if it doesn't exist
    dropZones.push(
      <div
        key={i}
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {direction === "up" ? (
          <FaLongArrowAltUp />
        ) : direction === "down" ? (
          <FaLongArrowAltDown />
        ) : direction === "left" ? (
          <FaLongArrowAltLeft />
        ) : direction === "right" ? (
          <FaLongArrowAltRight />
        ) : (
          direction
        )}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="maincontainer">
        <div className="rightbox">
          <Learn />
        </div>

        <div className="leftbox">
          <div className="buildtext">
            <p>
              <SiReadthedocs /> Build
            </p>
          </div>
          <div className="buildcontainer">
            <div className="grid-container">{boxes}</div>
            <div className="instruction">
              <div className="inctiontext">
                <p>Instructions Implemented</p>
              </div>
              <div className="robotmove">
                <p>Robot Move Left</p>
                <p>Robot Move Up</p>
                <p>Robot Move Left</p>
                <p>Robot Move Left</p>
                <p>Robot Move Down</p>
                <p>Robot Move Left</p>
                <p>Robot Move Up</p>
                <h4>
                  <FaLongArrowAltLeft />
                  Robot reached the destination.
                </h4>
              </div>
            </div>
          </div>
          <div className="logicpanel">
            <p>Logic Panel ( Drag the arrows and drop here. )</p>
            <div className="drop-zones-container">{dropZones}</div>
          </div>
          <div className="buttonslp">
            <div className="logic-panel">
              <div
                className="arrow-button"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, "left")}
              >
                <FaLongArrowAltLeft />
              </div>
              <div
                className="arrow-button"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, "up")}
              >
                <FaLongArrowAltUp />
              </div>
              <div
                className="arrow-button"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, "down")}
              >
                <FaLongArrowAltDown />
              </div>

              <div
                className="arrow-button"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, "right")}
              >
                <FaLongArrowAltRight />
              </div>
              <button
                onClick={handlePlay}
                disabled={!isRestarted}
                className="playbtn"
              >
                <BsFillPlayFill /> <span>Play</span>
              </button>
              <button onClick={handleReset} className="deletebtn">
                <BiReset />
              </button>
            </div>
            <div className="robotmovingtext">
              <span>
                ( The robot will run after clicking the play button. )
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
