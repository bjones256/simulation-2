const STEP_ONE = 'STEP_ONE'
const STEP_TWO = 'STEP_TWO'
const STEP_THREE = 'STEP_THREE'
const initialState = {

}

export default function reducer(state = initialState, action){
switch(action.type){
    case STEP_ONE:
    return {...state, stepOne: action.payload}
    case STEP_TWO:
    return {...state, stepOne: action.payload}

    default:
        return state
}
}

// Action Creators
export function updateStepOne(stepOne){
    return{
        type : STEP_ONE,
        payload: stepOne
    }
}
export function updateStepTwo(stepTwo){
    return{
        type : STEP_TWO,
        payload: stepTwo
    }
}
export function updateStepThree(stepThree){
    return{
        type : STEP_THREE,
        payload: stepThree
    }
}