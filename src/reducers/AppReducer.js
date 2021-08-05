const AppReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_APP":
            return action.data
        default:
            return null
    }
}

export default AppReducer