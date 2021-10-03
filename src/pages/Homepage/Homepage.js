import React, { Component } from 'react';
import './Homepage.scss'
import ClothesMenuItem from '../../components/clothesMenuItem/ClothesMenuItem';
import GenderMenuItem from '../../components/genderMenuItem/GenderMenuItem';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-directory">
        <div className="homepage-menu-clothes">
          <ClothesMenuItem title={'HATS'} />
          <ClothesMenuItem title={'JACKETS'} />
          <ClothesMenuItem title={'SNEAKERS'} />
        </div>
        <div className="homepage-menu-gender">
          <GenderMenuItem gender={'WOMEN'} />
          <GenderMenuItem gender={'MEN'} />
        </div>  
      </div>
    );
  }
}

export default Homepage;