import sneakersimage from './images/SNEAKERS.jpg';
import jacketsimage from "./images/jackets.jpg";
import hatsimage from "./images/hats.jpg";
import maleimage from "./images/MEN.jpg";
import femaleimage from "./images/WOMEN.jpg";

export const directoryData = {
  clothesMenuSections : [
    {
      id: 1,
      title: 'HATS',
      image: hatsimage,
      position: '50% 37%',
      size: '470px auto',
      linkUrl: 'shop/hats'
    },
    {
      id: 2,
      title: 'JACKETS',
      image: jacketsimage,
      position: '50% 37%',
      size: '470px auto',
      linkUrl: 'shop/jackets'
    },
    {
      id: 3,
      title: 'SNEAKERS',
      image: sneakersimage,
      position: 'center',
      size: '470px auto',
      linkUrl: 'shop/sneakers'
    }
  ],

  genderMenuSections: [
    {
      id: 4,
      title: "WOMEN",
      image: femaleimage,
      position: '50% 30%',
      size: '705px auto',
      linkUrl: 'shop/women'
    },
    {
      id: 5,
      title: "MEN",
      image: maleimage,
      position: '50% 10%',
      size: '705px auto',
      linkUrl: 'shop/men'
    }
  ]
}