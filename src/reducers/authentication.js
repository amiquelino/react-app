const initialState = {
    email: "",
    password: ""
}

const authentication = (state = initialState, action) => {
    switch (action.type){
        case 'ON_LOGIN':
            return {
                ...state,
                token: action.payload.jwt
            }
        default:
            return state
    }
}

export default authentication