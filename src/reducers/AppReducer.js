const AppReducer = (state, action) => {
    console.log({ state })
    switch (action.type) {
        case "UPDATE_APP":
            return action.data
        default:
            return null
    }
}

export default AppReducer