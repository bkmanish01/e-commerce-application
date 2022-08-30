const initialState = [];

const handleCart = (state=initialState, action) => {
    const product = action.payload;
    switch(action.type) {
        case "ADDITEM":
            const isItemExist = state.find((item) => item.id === product.id);
            if(isItemExist) {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "DELETEITEM":
            const itemExist = state.find((item) => item.id === product.id);
            if(itemExist) {
                return state.filter((y) => y.id !== itemExist.id);
            }
            else {
                return state.map((z) => z.id === product.id ? {...z, qty: z.qty-1} : z);
            }

        case "MINUSITEM":
            const exist = state.find((item) => item.id === product.id);
            if(exist) {
                return state.map((j) => j.id === product.id ? {...j, qty: j.qty-1} : j);
            }
            else {
                return 0;
            }
  
        default:
            return state;
    }
}

export default handleCart;
// .qty === 1
