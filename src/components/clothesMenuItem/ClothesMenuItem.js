import './ClothesMenuItem.scss';
import { withRouter } from 'react-router';

const ClothesMenuItem = ({title, image, position, size, history, match, linkUrl}) => {
  return(
    <div 
      className="menu-section"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(ClothesMenuItem);