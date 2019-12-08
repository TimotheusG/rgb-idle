import Tier from './tier'
class Tiers {
    stack: Tier[];

    constructor(firstTier: Tier) {
        this.stack = [firstTier];
    }

    setAllSpeed()
    {
        var previousSpeed = 0;
        for(var i = this.stack.length - 1; i >= 0; i--)
        {
            this.stack[i].pixel_speed = this.stack[i].pixel_speed + previousSpeed;
            previousSpeed = this.stack[i].pixel_speed;
        }
    }

}
export default Tiers;