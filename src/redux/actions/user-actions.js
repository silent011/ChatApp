export const types = {
    CREATE_USER: 'CREATE_USER',
    CREATED_USER: 'CREATED_USER'
}

export const actions = {
    createUser: (user) => ({
        type: actionTypes.CREATE_USER,
        payload: user
    })
}