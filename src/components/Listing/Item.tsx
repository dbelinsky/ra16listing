import TDataObject from '../../types/DataObject.type';

type TItemProps = {
  item: TDataObject;
};

const Item = (props: TItemProps): JSX.Element | undefined => {
  const item: TDataObject = props.item;

  if (!item) {
    return;
  }

  let level: string;

  if (!item.quantity || item.quantity <= 10) {
    level = 'level-low';
  } else if (item.quantity <= 20) {
    level = 'level-medium';
  } else {
    level = 'level-high';
  }

  let priceString: string;
  if (!item.price) {
    priceString = '';
  } else {
    switch (item.currency_code) {
      case 'USD':
        priceString = '$' + item.price;
        break;
      case 'EUR':
        priceString = '€' + item.price;
        break;
      default:
        priceString = item.price + ' ' + item.currency_code;
    }
  }

  let title: string = item.title ? item.title : '';
  if (title.length > 50) {
    title = title.substring(0, 50) + '...';
  }

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={item.url}>
          <img
            src={!item.MainImage ? '' : item.MainImage.url_570xN}
            alt={item.listing_id.toString()}
          />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{title}</p>
        <p className='item-price'>{priceString}</p>
        <p className={'item-quantity' + ' ' + level}>
          {item.quantity ?? item.quantity} left
        </p>
      </div>
    </div>
  );
};

export default Item;
