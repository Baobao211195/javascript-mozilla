
var canvas = document.querySelector('canvas');

var ctx = canvas.getContext('3d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// Create đối tượng quả bóng
/**
x, y là toạn độ
velx, vely là vận tốc chuyển động theo chiều dọc và ngang

*/
function Ball(x ,y , velx, vely, color, size) {
    this.x = x;
    this.y = y;
    this.velx = velx;
    this.vely = vely;
    this.color = color;
    this.size = size;
}

// tạo một hàm vẽ quả bóng
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

// tạo một hàm update Ball
Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velx = -(this.velx);
    }

    if ((this.x - this.size) <= 0) {
        this.velx = - this.velx;
    }
    if ((this.y + this.size) >= height) {
        this.vely = - this.vely;
    }
    if ((this.y - this.size) <= 0) {
        this.vely = -this.vely;
    }

    this.x += this.velx;
    this.y += this.vely;
};
Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        balls[j].velx = -random(dx, dy);
        balls[j].vely = -random(dx, dy);;
      }
    }
  }
}
var balls = [];

function loop () {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width, height);
    while (balls.length < 10) {
        var size = random(10, 20);
        var ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
            size
        );
        balls.push(ball);
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
