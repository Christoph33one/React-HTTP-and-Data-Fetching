import React, { Component } from 'react'
import axios from 'axios';
// fetching API data usig componentDidMount in a class component with Axios
export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
    // using the axios fetch url.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            // call setState to update the componet in the state
            this.setState({
                posts: response.data
            })
        })
    }
  render() {
    return (
        // render the data (JSON)
      <div>
        <h2>Posts:</h2>
        {JSON.stringify(this.state.posts)}
      </div>
    )
  }
}

export default HTTPRequests