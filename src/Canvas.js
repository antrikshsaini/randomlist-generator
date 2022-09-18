import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const list = props.list;
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
      ctx.arc(random, i, random / 10, random / 10, 0, 2 * Math.PI, 0);
      ctx.closePath();
      ctx.fill();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //Draw
    draw(context);
  }, [list]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
