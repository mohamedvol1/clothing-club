import React from 'react';
import './Directory.scss';

import MenuItem from '../MenuItem/MenuItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/Directory/directorySelector';

const Directory = ({ sections }) => {
  return (
    <div className="homepage-directory">
      <div className="homepage-clothes-menu">
        {
          sections.clothesMenuSections.map(({ id, ...menuProps }) => {
            return(
              <MenuItem key={id} {...menuProps} />
            )
          })
        }
        
      </div>
      <div className="homepage-gender-menu">
        {
          sections.genderMenuSections.map(({id, ...menuProps}) => {
            return(
              <MenuItem key={id} {...menuProps} />
            )
          })
        }    
      </div>  
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
