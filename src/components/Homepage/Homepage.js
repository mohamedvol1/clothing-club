import './Homepage.scss'

const Homepage = () => {
  return(
    <div className="homepage">
      <div className="homepage-menu-clothes">
        <div className="small-item">
          <div className="item-content grey">
            <h1 className="title">Hats</h1>
            <p className="subtitle">shop now</p>
          </div>
        </div>
        <div className="small-item rr">
          <div className="item-content grey">
            <h1 className="title">JACKETS</h1>
            <p className="subtitle">shop now</p>
          </div>
        </div> 
        <div className="small-item">
          <div className="item-content grey">
            <h1 className="title">sneakers</h1>
            <p className="subtitle">shop now</p>
          </div>
        </div>
      </div>
      <div className="homepage-menu-gender">
        <div className="large-item">
          <div className="item-content grey">
            <h1 className="title">women</h1>
            <p className="subtitle">shop now</p>
          </div>
        </div>  
        <div className="large-item">
          <div className="item-content grey">
            <h1 className="title">men</h1>
            <p className="subtitle">shop now</p>
          </div>
        </div>  
      </div>  
        
        
           
    </div>
  )
}

export default Homepage;