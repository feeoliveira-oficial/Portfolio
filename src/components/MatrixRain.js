import React, { useEffect } from 'react';
import p5 from 'p5';

function MatrixRain() {
  useEffect(() => {
    const sketch = (p) => {
      let drops = [];
      let droplets = [];
      let spawnTimeRate = 25;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.background(0);

        drops.forEach((drop, index) => {
          drop.update();
          if (drop.destroyed) {
            let n = Math.floor(p.random(8, 15));
            for (let i = 0; i < n; i++) {
              droplets.push(
                new Droplets(p, drop.position.x, drop.position.y, {
                  velocity: p5.Vector.random2D().setMag(p.random(8, 10)),
                  gravity: p.createVector(0, 0.1),
                  radius: p.random(6, 8),
                  timeToLive: 180,
                  friction: 0.2,
                })
              );
            }
            drops.splice(index, 1);
          }
        });

        droplets.forEach((droplet, index) => {
          droplet.update();
          if (droplet.timeToLive <= 0) droplets.splice(index, 1);
        });

        if (p.frameCount % spawnTimeRate === 0) {
          drops.push(new Drop(p, p.random(p.width), p.random(-100, -200)));
          spawnTimeRate = Math.floor(p.random(45, 100));
        }
      };

      p.windowResized = () => {
        drops = [];
        droplets = [];
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      class Drop {
        constructor(p, x, y, options = {}) {
          this.p = p;
          this.velocity = options.velocity || p.createVector(p.random(0, 0), p.random(-2, 2));
          this.position = options.position || p.createVector(x, y);
          this.gravity = options.gravity || p.createVector(0, 0.65);
          this.friction = options.friction || 0.45;
          this.radius = options.radius || Math.floor(p.random(30, 40));
          this.decreaseInRadius = options.decreaseInRadius || 10;
          this.value = String.fromCharCode(0x30a0 + Math.round(p.random(0, 96)));
          this.destroyed = false;
          this.angle = p.random(p.TWO_PI);
          this.color = options.color || "#00ff00";
        }

        draw() {
          this.p.push();
          this.p.translate(this.position.x, this.position.y);
          this.p.rotate(this.angle);
          this.p.fill(this.color);
          this.p.noStroke();
          this.p.textSize(this.radius);
          this.p.text(this.value, -this.radius / 2, this.radius / 4);
          this.p.pop();
        }

        update() {
          if (this.radius <= 0) this.destroyed = true;

          this.position.add(this.velocity);
          this.velocity.add(this.gravity);

          this.draw();
          this.edge();
          this.angle += 0.05;
        }

        edge() {
          if (this.position.y + this.radius / 2 >= this.p.height) {
            this.velocity.y *= -1 * this.friction;
            this.radius -= this.decreaseInRadius;
            this.break(Math.floor(this.p.random(2)));
          }
        }

        break(n) {
          for (let i = 0; i < n; i++) {
            droplets.push(
              new Droplets(this.p, this.position.x, this.position.y, {
                velocity: this.p.createVector(
                  this.p.random(-5, 5),
                  [this.p.random(-15, -10), this.p.random(10, 15)][Math.floor(this.p.random(2))]
                ),
                gravity: this.p.createVector(0, 0.4),
                radius: this.p.random(6, 10),
                timeToLive: 200,
                friction: 0.75,
              })
            );
          }
        }
      }

      class Droplets extends Drop {
        constructor(p, x, y, options = {}) {
          super(p, x, y, options);
          this.timeToLive = options.timeToLive;
        }
        update() {
          this.color = this.p.color(this.color);
          this.color.setAlpha(this.timeToLive);

          this.position.add(this.velocity);
          this.velocity.add(this.gravity);
          super.draw();
          this.edge();
          this.timeToLive -= 1;
          this.angle -= 0.1;
        }
        edge() {
          if (this.position.y + this.radius >= this.p.height) {
            this.velocity.y = -this.velocity.y * this.friction;
          }
        }
      }
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div />;
}

export default MatrixRain;
