import Color from './color'
class Tier {
    tier_name: string;
    tier_number: number;
    colors: Color[];
    pixels: number;
    to_next_pixel: number;
    pixel_speed: number;
    color_cost: number;
    isUpgrade: boolean;

    constructor(pixels: number = 100, tier_number: number = 1) {
        this.tier_number = tier_number;
        this.tier_name = "Tier " + tier_number;
        this.colors = [];
        this.pixels = pixels;
        this.to_next_pixel = 0;
        this.pixel_speed = 5;
        this.color_cost = 2;
        this.isUpgrade = false;
    }

}
export default Tier;