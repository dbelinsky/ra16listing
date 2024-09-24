type TDataObject = {
  listing_id: number;
  title?: string | undefined;
  description?: string | undefined;
  price?: string | undefined;
  currency_code?: string | undefined;
  quantity?: number | undefined;
  url?: string | undefined;
  MainImage?: {
    url_570xN: string | undefined;
  };
};

export default TDataObject;
