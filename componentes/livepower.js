import { Power } from './power.js';
export class LivePower extends Power {
  constructor(scene, diamonds) {
    super(scene, diamonds, 'bluediamond');//mando datos al constructor de otra clase sin instanciarla
  }

  givePower() {
    this.relatedScene.increaseLives();
  }
}