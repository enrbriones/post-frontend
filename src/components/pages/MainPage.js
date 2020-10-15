import React from 'react'
import { PostsFilter } from '../ui/PostsFilter'
import { PostsList } from '../ui/PostsList'
import { PostForm } from '../ui/PostForm'
import { Header } from '../ui/Header'

export const MainPage = () => {
    return (
        <div className='container'>
            <Header />
            <PostsFilter />
            <PostsList />
            <PostForm />
        </div>
    )
}
