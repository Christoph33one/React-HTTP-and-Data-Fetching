import React, { Component } from 'react'
import axios from 'axios';
// fetching API data usig componentDidMount in a class component with Axios
export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: null
      }
    }
    // using the axios fetch url.
    // line 20 - 22 - to post one item in the data array
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response)
            // call setState to update the componet in the state
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                :[response.data]
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
        })
    }
  render() {
    const posts = this.state.posts;
    return (
        // render the data (JSON)
        // rendering data as a list 
      <div>
        <h2>Posts:</h2>
        {
            posts.length ?  (
                posts.map(post => (
                    <div key={post.di}>
                        <h2>{post.id}. {post.title}</h2>
                        <h4>User id{post.userId}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
                ) : ( // render an error of post is not found using the catch method - line 25
                    this.state.error
                    ? <p>{this.state.error}</p>
                    : <h4>Loading posts ...</h4>
                )
        }
      </div>
    )
  }
}

export default HTTPRequests