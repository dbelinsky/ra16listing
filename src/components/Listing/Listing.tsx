import TListingProps from "../../types/ListingProp.type";
import TDataObject from "../../types/DataObject.type";
import Item from "./Item";

const Listing = (props: TListingProps<TDataObject>): JSX.Element => {

  const items: Array<TDataObject> | [] = props.items

  return (
    <div className="item-list">{
      items.map((item: TDataObject): JSX.Element => (
        <Item key={item.listing_id} item={item} />
      ))
    }</div>
  )
}

export default Listing
