import './ClothesMenuItem.scss'

const ClothesMenuItem = ({title}) => {
  return(
    <div className="menu-section">
      <div className="item-content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">shop now</p>
      </div>
    </div>
  )
}

export default ClothesMenuItem;