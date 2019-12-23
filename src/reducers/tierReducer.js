import Color from '../models/color';
import Tier from '../models/tier'

var tierCount = 1;
var arr = [new Tier(0)];
const initialState = { tiers: arr };

const tierReducer = (state = initialState, action) => {
    var thisTier = state.tiers[action.id];
    switch (action.type) {
        case 'UPDATE_PIXEL':
            {
                if (thisTier.to_next_pixel >= 100) {
                    return {
                        ...state,
                        tiers: state.tiers.map(
                            (tier, i) => i === action.id ? { ...tier, to_next_pixel: tier.to_next_pixel - 100, pixels: tier.pixels + 1 }
                                : tier
                        )
                    }
                }
                else {
                    return {
                        ...state,
                        tiers: state.tiers.map(
                            (tier, i) => i === action.id ? { ...tier, to_next_pixel: tier.to_next_pixel + 5 }
                                : tier
                        )
                    }
                }
            }
        case 'ADD_COLOR':
            {
                var a = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                var c = Math.floor(Math.random() * 255);
                var col = new Color(a, b, c);
                var colStr = col.getColorString();
                if (thisTier.pixels >= thisTier.color_cost) {
                    return {
                        ...state,
                        tiers: state.tiers.map(
                            (tier, i) => i === action.id ? {
                                ...tier,
                                colors: [...tier.colors, colStr],
                                pixels: tier.pixels - tier.color_cost,
                                color_cost: tier.color_cost + 1
                            }
                                : tier
                        )
                    }

                }
                else {
                    return state;
                }
            }
        case 'ADD_TIER':
            {
                var t2 = new Tier(tierCount);
                tierCount++;
                return Object.assign({}, state, {
                    tiers: [...state.tiers, t2]
                });
            }
        case 'UPGRADE':
            {
                return {
                    ...state,
                    tiers: state.tiers.map(
                        (tier, i) => i === action.id ? { ...tier, isUpgraded: true }
                            : tier
                    )
                }
            }
        default:
            return state;
    }
}
export default tierReducer;