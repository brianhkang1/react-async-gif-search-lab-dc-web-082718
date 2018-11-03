import React from 'react'

const GifList = (props) => {

  const renderGIF = (gif) => {
    return (
      <li key={gif.id}>
        <p>{gif.title}</p>
        <img src={gif.images.original.url} alt={gif.id} />
      </li>
    )
  }

  return(
    <ul>
    {props.fetchedGIFs.map(gif => {
      return renderGIF(gif)
    })}
    </ul>
  )
}

export default GifList
