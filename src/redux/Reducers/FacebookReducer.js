const initialState = {
    arrComment:[
        // Sau khi ham chay duoc roi co the comment noi dung array duoi day de ban dau se khong hien thi gi het
        // {name:'Nguyen Nguyen', content:'Ahihi', image:'https://picsum.photos/id/1/200/200'},
        // {name:'Nguyen Hien', content:'Ahuhu', image:'https://picsum.photos/id/2/200/200'}
    ]
}

export const FacebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT': {
            state.arrComment = [...state.arrComment, action.userComment];
            return {...state};
        }

    default:
        return state
    }
}
