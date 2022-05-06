import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../feature/posts/postsSlice'
import usersReducer from '../feature/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})
