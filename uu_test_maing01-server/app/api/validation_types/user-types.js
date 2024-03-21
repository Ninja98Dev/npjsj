/* eslint-disable */
const userCheckDtoInType = shape({
    id: string(20).isRequired(),
    name: string(50),
    preferences: shape({
        theme: string(20),
        color: shape()
    })
});

const userCreateDtoInType = shape({
    id: string(20).isRequired(),
    name: string(50),
    preferences: shape({
        theme: string(20),
        color: shape()
    })
});

const userGetDtoInType = shape({
    id: string(20).isRequired()
});

const userUpdateDtoInType = shape({
    id: string(20).isRequired(),
    preferences: shape({
        theme: string(20),
        color: shape()
    })
});

const userListDtoInType = shape({
    id: string(20),
    name: string(50),
    preferences: shape({
        theme: string(20),
        color: shape()
    })
});

const userDeleteDtoInType = shape({
    id: string(20).isRequired()
});
