import React from 'react'


class GifSearch extends React.Component{

  render(){
    return(
      <form onSubmit={this.props.submitHandler}>
        <label htmlFor='search-GIF'>Search GIF: </label>
        <input type="text" id="search-GIF" onChange={this.props.inputChangeHandler}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default GifSearch
