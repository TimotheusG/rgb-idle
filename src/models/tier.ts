import Color from './color'
class Tier {
    colors: Color[];
    pixels: number;
    to_next_pixel: number;
    pixel_speed: number;
    color_cost: number;
    isUpgrade: boolean;

    constructor(pixels: number = 100) {
        this.colors = [];
        this.pixels = pixels;
        this.to_next_pixel = 0;
        this.pixel_speed = 5;
        this.color_cost = 2;
        this.isUpgrade = false;
    }

}
export default Tier;