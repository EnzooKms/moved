/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector("#canvas");
canvas.height = 900;
canvas.width = 900;

const ctx = canvas.getContext("2d");

/**
 *
 * @param {ctx} ctx
 * @param {{ startX, startY, size, toX, toY, move }} param1
 */
const move = (ctx, { startX, startY, size, toX, toY, move }) => {
  let isX = false,
    isY = false;
  const pente = ((toY - startY) / (toX - startX)) * move;

  const t = setInterval(() => {
    ctx.clearRect(startX - size - 2, startY - size - 2, size * 2, size * 2);

    ctx.beginPath();
    ctx.arc(startX, startY, size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    const distance = Math.sqrt((toX - startX) ** 2 + (toY - startY) ** 2);

    if (startX < toX && distance > size / 10) {
      startX += move;
    } else if (startX > toX && distance > size / 10) {
      startX -= move;
    } else {
      isX = true;
    }

    if (startY < toY && distance > size / 10) {
      startY += pente;
    } else if (startY > toY && distance > size / 10) {
      startY -= pente;
    } else {
      isY = true;
    }

    if (isX && isY) {
      clearInterval(t);
    }
  }, 10);
};

move(ctx, {
  startX: 0,
  startY: 0,
  size: 30,
  toX: 500,
  toY: 700,
  move: 1,
});
