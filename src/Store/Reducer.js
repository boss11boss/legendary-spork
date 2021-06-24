let initialStore = {
    directory:[],
    activeDirectory:null
}
let directoryReducer = (state=initialStore,action) =>{
    switch (action.type){
        case 'READ':
            return{
                directory:action.payload
            }
        case 'FIND':
            const C3 = [...state.directory]  
            let C4 = C3.filter(r=>r.email === action.payload)
            return{
                ...state,
                activeDirectory:C4
            }    
        default:
            return state
    }
}
    


export default directoryReducer