import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      fetchedGIFs: [],
      searchInput: ""
    }
  }

  inputChangeHandler = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    if (this.state.searchInput){
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => {
        console.log(json.data.slice(0, 3))
        this.setState({
          fetchedGIFs: json.data.slice(0, 3)
        })
      })
    }
  }

  render(){
    return(
      <div>
      <GifSearch inputChangeHandler={this.inputChangeHandler} submitHandler={this.submitHandler} />
      <GifList fetchedGIFs={this.state.fetchedGIFs} />
      </div>
    )
  }
}

export default GifListContainer
