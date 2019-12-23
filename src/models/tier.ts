class Tier {
    id: number;
    colors: string[];
    pixels: number;
    to_next_pixel: number;
    pixel_speed: number;
    color_cost: number;
    isUpgraded: boolean;

    constructor(id: number)
    {
        this.id = id;
        this.colors = [];
        this.pixels = 100
        this.to_next_pixel = 0;
        this.pixel_speed = 5;
        this.color_cost = 2;
        this.isUpgraded = false
    }
}

export default Tier;