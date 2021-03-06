import * as types from './../constants/ActionType'

export const resUser = (userName,email) =>{
    return {
        type: types.RES_USER,
        userName,
        email
    }
}

export const nextBtn = (number)=>{
    return {
        type: types.NEXT_BTN,
        number
    }
}

export const load = ()=>{
    return {
        type: types.LOAD
    }
}

export const showQuestion = (id) =>{
    return {
        type: types.SHOW_QUESTION,
        id
    }
}

export const chooseAns = (questionId,ans)=>{
    return {
        type: types.CHOOSE_ANS,
        questionId,
        ans
    }
}

export const tick = () =>{
    return {
        type: types.TICK
    }
}

export const stop = () =>{
    return {
        type: types.STOP
    }
}