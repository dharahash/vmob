const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// 💗 Heart particle
class Heart {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = 10 + Math.random() * 10;
    this.speed = 0.5 + Math.random() * 1.2;
    this.opacity = 0.6 + Math.random() * 0.4;
    this.drift = (Math.random() - 0.5) * 0.6;

    const pinks = ["#ff5fa2", "#ff85c1", "#ff3d81", "#ff9acb"];
    this.color = pinks[Math.floor(Math.random() * pinks.length)];
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.size / 15, this.size / 15);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-10, -10, -20, 5, 0, 20);
    ctx.bezierCurveTo(20, 5, 10, -10, 0, 0);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  update() {
    this.y -= this.speed;
    this.x += this.drift;

    if (this.y < -50) {
      this.reset();
    }
  }
}

const hearts = [];
const HEART_COUNT = Math.min(120, Math.floor(window.innerWidth / 10));

for (let i = 0; i < HEART_COUNT; i++) {
  hearts.push(new Heart());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });

  requestAnimationFrame(animate);
}

animate();
