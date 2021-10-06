import './ClothesMenuItem.scss'

const ClothesMenuItem = ({title, image, position, size}) => {
  return(
    <div 
      className="menu-section"
    >
      <div 
        className='background-image'
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: position,
          backgroundSize: size
        }}
      /> 
      <div className="item-content ">
        <h1 className="title">{title}</h1>
        <p className="subtitle">shop now</p>
      </div>
    </div>
  )
}

export default ClothesMenuItem;