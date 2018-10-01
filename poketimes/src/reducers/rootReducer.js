const initState = {
    posts: [
        {id: '1', title: 'Charmander goes to school', body: 'Lorem Ipsum has been the industry'},
        {id: '2', title: 'Billy goes to school', body: '2Lorem Ipsum has been the industry'},
        {id: '3', title: 'Mandy goes to school', body: '3Lorem Ipsum has been the industry'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id != post.id 
        });

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer