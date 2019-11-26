
class ColorPart {
    Hex: number;
    constructor(hex: number)
    {
        this.Hex = hex;
    }
    getString() : string
    {
        return this.Hex.toString();
    }
}

export default ColorPart;