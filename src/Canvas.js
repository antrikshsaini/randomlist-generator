import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const list = props.list;
  /** To Make Circles in Canvas according to the Radom list */
  const draw = (ctx) => {
    for (let i = 0; i < list.length; i++) {
      ctx.strokeStyle = "rgba(127, 127, 255, 1.0)";
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
      ctx.lineWidth = 5;
      ctx.beginPath();
      // Position of circle in Canvas depends on "i" and Random number value "list[i]"
      // Size of Circle depends "list[i]"
      ctx.arc(i, list[i], list[i] / 10, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // Clear Canvas everytime the list is generated again
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Draw Circles in Canvas
    draw(context);
    // Capture full frame of Canvas
    props.canvas_container.current.style.background =
      "url(" + canvas.toDataURL() + ")";
    props.canvas_container.current.style.backgroundSize = "contain";
  }, [list]);

  return <canvas ref={canvasRef} id={"canvas"} {...props} />;
};

export default Canvas;
