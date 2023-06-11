import React, { useEffect } from 'react';
import './styles.css'; // Assuming you have a CSS file for styling

const FlexBoxExample = () => {
  useEffect(() => {
    // Initialize the draggable buttons
    const buttons = document.querySelectorAll('.button');
    const flexItems = document.querySelectorAll('.flex-item');

    buttons.forEach((button) => {
      button.addEventListener('dragstart', (event) => {
        // Set the data to be transferred during drag
        event.dataTransfer.setData('text/plain', event.target.id);
      });
    });

    flexItems.forEach((item) => {
      item.addEventListener('dragstart', (event) => {
        // Set the data to be transferred during drag
        event.dataTransfer.setData('text/plain', event.target.id);
      });

      item.addEventListener('dragover', (event) => {
        // Prevent default to allow drop
        event.preventDefault();
      });

      item.addEventListener('drop', (event) => {
        // Get the dragged element's id
        const elementId = event.dataTransfer.getData('text/plain');

        // Check if the flex item is empty before appending the element
        if (item.children.length === 0) {
          // Clone the dragged element and append the clone to the target flex item
          const draggedElement = document.getElementById(elementId);
          const clonedElement = draggedElement.cloneNode(true);
          item.appendChild(clonedElement);
        } else {
          // Remove the existing button in the flex item
          item.innerHTML = '';

          // Clone the dragged element and append the clone to the target flex item
          const draggedElement = document.getElementById(elementId);
          const clonedElement = draggedElement.cloneNode(true);
          item.appendChild(clonedElement);
        }
      });
    });
  }, []);

  return (
    <div>
      <div className="flex-container">
        <div className="flex-item" id="box1" draggable="false"></div>
        <div className="flex-item" id="box2" draggable="false"></div>
        <div className="flex-item" id="box3" draggable="false"></div>
        <div className="flex-item" id="box4" draggable="false"></div>
        <div className="flex-item" id="box5" draggable="false"></div>
        <div className="flex-item" id="box6" draggable="false"></div>
        <div className="flex-item" id="box7" draggable="false"></div>
        <div className="flex-item" id="box8" draggable="false"></div>
        <div className="flex-item" id="box9" draggable="false"></div>
        <div className="flex-item" id="box10" draggable="false"></div>
        <div className="flex-item" id="box11" draggable="false"></div>
        <div className="flex-item" id="box12" draggable="false"></div>
        <div className="flex-item" id="box13" draggable="false"></div>
        <div className="flex-item" id="box14" draggable="false"></div>
      </div>
      <div className="button-container">
        <button className="button" draggable="true" id="button1">
          Up
        </button>
        <button className="button" draggable="true" id="button2">
          Down
        </button>
        <button className="button" draggable="true" id="button3">
          Left
        </button>
        <button className="button" draggable="true" id="button4">
          Right
        </button>
      </div>
    </div>
  );
};

export default FlexBoxExample;
