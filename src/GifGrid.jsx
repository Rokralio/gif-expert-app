
export const GifGrid = ({ category }) => {

  const gifs = [1,2,3]

  return (
    <div>
      <h2>{ category }</h2>
      {
        gifs.map( gif=> (
          <p>{ gif }</p>
        ))
      }
    </div>
  )
}

export default GifGrid
