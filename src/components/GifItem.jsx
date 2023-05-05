import PropTypes from 'prop-types'

export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

//requisitos obligatorios
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}
