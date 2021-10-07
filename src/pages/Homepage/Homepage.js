import React, { Component } from 'react';
import './Homepage.scss'
import ClothesMenuItem from '../../components/clothesMenuItem/ClothesMenuItem';
import GenderMenuItem from '../../components/genderMenuItem/GenderMenuItem';
import sneakersimage from "./images/SNEAKERS.jpg";
import jacketsimage from "./images/jackets.jpg";
import hatsimage from "./images/hats.jpg";
import maleimage from "./images/MEN.jpg";
import femaleimage from "./images/WOMEN.jpg";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothesMenuSections : [
        {
          id: 1,
          title: 'HATS',
          image: hatsimage,
          position: '50% 37%',
          size: '470px auto',
          linkUrl: 'hats'
        },
        {
          id: 2,
          title: 'JACKETS',
          image: jacketsimage,
          position: '50% 37%',
          size: '470px auto',
          linkUrl: ''
        },
        {
          id: 3,
          title: 'SNEAKERS',
          image: sneakersimage,
          position: 'center',
          size: '470px auto',
          linkUrl: ''
        }
      ],

      genderMenuSections: [
        {
          id: 4,
          gender: "WOMEN",
          image: femaleimage,
          position: '50% 30%',
          size: '705px auto',
          linkUrl: ''
        },
        {
          id: 5,
          gender: "MEN",
          image: maleimage,
          position: '50% 10%',
          size: '705px auto',
          linkUrl: ''
        }
      ]
    }
  }
  render() {
    return (
      <div className="homepage-directory">
        <div className="homepage-clothes-menu">
          {
            this.state.clothesMenuSections.map(({ id, ...menuProps }) => {
              return(
                <ClothesMenuItem key={id} {...menuProps} />
              )
            })
          }
          
        </div>
        <div className="homepage-gender-menu">
        {
          this.state.genderMenuSections.map(({gender, id, image, position, size, linkUrl}) => {
            return(
              <GenderMenuItem gender={gender} key={id} image={image} position={position} size={size} linkUrl={linkUrl} />
            )
          })
        }    
        </div>  
      </div>
    );
  }
}

export default Homepage;