import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";

let state = {
    postsData: [
        {id: "1", message: "It is my first post.", likesCount: 5},
        {id: "2", message: "Hi, how have you been?", likesCount: 3},
        {id: "3", message: "The weather is nice today!", likesCount: 1},
    ],
    profile: {},
    status: ""
}
it('new post should be added', function () {

    const newState = profileReducer(state, addPostActionCreator("new post"))

    expect(newState.postsData.length).toBe(4)
});

it('Message of new post should be correct', () => {
    let newState = profileReducer(state, addPostActionCreator('new post'));

    expect(newState.postsData[3].message).toBe('new post')
})

it('After deletion, the number of posts should decrease', () => {
    let newState = profileReducer(state, deletePost("1"));

    expect(newState.postsData.length).toBe(2)
})

it('After deletion, the number of posts should remain the same if the id is incorrect', () => {
    let newState = profileReducer(state, deletePost("1000"));

    expect(newState.postsData.length).toBe(3)
})