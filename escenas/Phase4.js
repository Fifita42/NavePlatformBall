import { Phase } from './Phase.js'
import { Diamonds } from "../componentes/diamantes.js";
import { LivePower } from '../componentes/livepower.js';
import { LargePlatformPower } from '../componentes/largePlatformPower.js';
import { GluePower } from '../componentes/gluepower.js';
export class Phase4 extends Phase {

  create() {//relatedScene esta implementada en la clase Phase
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['bluebrik', 'orangebrik', 'greenbrik', 'yellowbrick'],
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 67,
        cellHeight: 34,
        x: 95,
        y: 100
      }
    });

    this.configureColisions();//esdta implementada en la clase Phase
        
    this.diamonds = new Diamonds(this.relatedScene);
    this.setBrickCollider(this.diamonds.diamonds);

    this.powers[3] = new LivePower(this.relatedScene, this.diamonds);
    this.powers[35] = new LivePower(this.relatedScene, this.diamonds);
    this.powers[1] = new LargePlatformPower(this.relatedScene, this.diamonds);
    this.powers[24] = new LargePlatformPower(this.relatedScene, this.diamonds);
    this.powers[16] = new GluePower(this.relatedScene, this.diamonds);
    this.powers[29] = new GluePower(this.relatedScene, this.diamonds);

  }
}