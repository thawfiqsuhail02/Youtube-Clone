const initialstate=false

export const themereducer=(state=initialstate,action)=>{
    if(action.type=="changetheme"){
        return(
            action.payload
        )
    }
    return state
}