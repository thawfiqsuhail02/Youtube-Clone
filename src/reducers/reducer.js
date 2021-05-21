const initstate=[]

export const reducering=(state=initstate,action)=>{
    if(action.type=="add"){
        return action.payload
    }
    return state
}
