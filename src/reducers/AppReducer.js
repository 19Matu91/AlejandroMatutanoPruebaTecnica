const AppReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_APP":
            return { ...state, ...action.data }
        case "VALORATE":
            // Si ya esta en el listado la pelicula, añado la nueva valoracion sino añado la pelicula
            return { ...state, mylist: state.mylist.find(x => x.id === action.data.id) ? state.mylist.map(x => x.id === action.data.id ? action.data : x) : [...state.mylist, action.data] }
        default:
            return null
    }
}

export default AppReducer