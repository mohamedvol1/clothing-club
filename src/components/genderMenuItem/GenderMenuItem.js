
const GenderMenuItem = ({gender}) => {
  return(
    <div className="menu-section">
      <div className="item-content">
        <h1 className="title">{gender}</h1>
        <p className="subtitle">shop now</p>
      </div>
    </div>  
  )
}

export default GenderMenuItem;