import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from ' ../../axios';

class Blog extends Component {
    state={
        posts:[],
        selectedPostId : null,
        error: null
    }
    componentDidMount() {
        axios.get('/posts')
        .then(Response=>{
            const posts= Response.data.slice(0,4);
            const updatedPosts=posts.map(post=>{
                return{
                    ...post,
                    author:'max'
                }
            })
            this.setState({posts:updatedPosts});
        }).catch(error=>{
            this.setState({error:error})
        });
    }
    postSelectedHandler=(id)=>{
        this.setState({selectedPostId:id})
    }
    // https://jsonplaceholder.typicode.com/pots
    render () {
        let posts =<p style={{textAlign:"center"}}> Something went wrong </p>
        if( !this.state.error){
             posts =this.state.posts.map(post=>{
                return <Post 
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={()=>this.postSelectedHandler(post.id)} />
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts }
                  
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;