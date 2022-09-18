import React, { useEffect } from "react";

const Canvas = (props) => {
  const list = props.list;
  // To Make Circles in Canvas according to the Radom list
  // Main Focus for where to draw circle depends on "i" and Random number value "list[i]"
  const draw = (ctx) => {
    for (let i = 0; i < list.length; i++) {
      var random = list[i];
      ctx.strokeStyle = "rgba(127, 127, 255, 1.0)";
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(i, random, random / 10, random / 10, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    // Clear Canvas everytime the list is generated again
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Draw Circles in Canvas
    draw(context);
    // Capture Canvas image according to Max Value which decide full frame of Canvas
    document.getElementById("canvas-id").style.background =
      "url(" + canvas.toDataURL() + ")";
    document.getElementById("canvas-id").style.backgroundSize = "contain";
  }, [list]);

  return <canvas id={"canvas"} {...props} />;
};

export default Canvas;
