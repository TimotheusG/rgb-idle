import ColorPart from './color-part';
class Color
{
    Red: ColorPart;
    Green: ColorPart;
    Blue: ColorPart;

    constructor(red: number, green: number, blue: number)
    {
        this.Red = new ColorPart(red);
        this.Green = new ColorPart(green);
        this.Blue = new ColorPart(blue);
    }

    getColorString()
    {
        return this.rgbToHex(this.Red.Hex, this.Green.Hex, this.Blue.Hex);
    }

    rgbToHex = (r:number, g:number, b:number) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')


}
export default Color;