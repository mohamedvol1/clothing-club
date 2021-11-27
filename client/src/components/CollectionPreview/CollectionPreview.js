import ItemCard  from "../ItemCard/ItemCard";
import './CollectionPerview.scss'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-style'>
      <h1 className='title'>{title.toUpperCase()}</h1>
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