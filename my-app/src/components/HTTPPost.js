import React, { Component } from 'react'
import axios from 'axios';

// sending a post request using axios
export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponce: null
      }
    }
    postToApi = () => {
        // url from the API
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            title: 'Hello world',
            body: 'It works',
            userId: 123,

        }
        ).then(response => {
            this.setState({
                apiResponce: response.data
            })
        })
    }
  render() {
    const {apiResponce} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>
            Create post
        </button>
        {
            apiResponce
            ? (<div>
                <h1>{apiResponce.title}</h1>
                <p>post id: {apiResponce.id}</p>
                <p>{apiResponce.body}</p>
                <p>user id: {apiResponce.userId}</p>
            </div>)
            : (<p>please click the button above</p>)
        }
      </div>
    )
  }
}

export default HTTPPost