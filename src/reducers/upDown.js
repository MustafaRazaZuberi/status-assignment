const InitialState = 0;

const changeTheNumber = (state = InitialState , action) =>  {
    switch(action.type){
        case "Increment" : return state+1
        case "decrement" : return state-1
        default: return state
    }
}


export default changeTheNumber