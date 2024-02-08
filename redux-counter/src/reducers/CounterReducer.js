export function CounterReducer(state, action) {
    if(action.type === "INCREMENT") {
       return {
        ...state,
        value: state.value + 1
       }
    } else if(action.type === "DECREMENT") {
        return {
            ...state,
            value: state.value - 1
        }
    } else if(action.type === "ADDFIVE") {
        return {
            ...state,
            value: state.value + 5
    }
    } else {
        return state;
    }

}