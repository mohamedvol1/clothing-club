import ItemCard  from "../ItemCard/ItemCard";
import './CollectionPerview.scss';
import { useHistory } from 'react-router';

const CollectionPreview = ({ title, items }) => {
  const history = useHistory();

  return (
    <div className='collection-style'>
      <h1 className='title' onClick={() => history.push('/shop/' + title.toLowerCase())}>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
            .filter((item, index) => {
              return index < 4;
            })
            .map((item)=> {
              return(
                <ItemCard key={item.id} item={item} />
              )
            })
        }
      </div>
    </div>
  )
}

export default CollectionPreview;