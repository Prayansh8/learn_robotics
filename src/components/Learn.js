import React from "react";
import { GiOpenBook } from "react-icons/gi";

const Learn = () => {
  return (
    <div>
      <div className="learntext">
        <div className="leransvg">
          <GiOpenBook />
        </div>
        <p>Learn</p>
      </div>
      <div className="learnpera">
        <p>
          1. Set the starting position: Drag and place the sprite on the stage
          to set its initial position. Click and drag the sprite to position it
          where you want it to start.
        </p>
        <p>
          2. Add movement blocks: In the block palette on the left side of the
          screen, locate the "Motion" category. You will find blocks like "Move
          10 steps," "Turn 15 degrees," and "Go to x: [] y: []."{" "}
        </p>
        <p>
          3. Use the "Go to x: [] y: []" block: Drag the "Go to x: [] y: []"
          block into the scripting area. Set the x and y values of the block to
          the coordinates of the target position you want the sprite to move to.
          For example, if you want the sprite to move to position (200, 100),
          set the x value to 200 and the y value to 100.
        </p>
      </div>
    </div>
  );
};

export default Learn;
