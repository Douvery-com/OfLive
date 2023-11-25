import {
  HashProductDetailsPriceCenter,
  HashProductDetailsPriceRightTop,
  HashProductDetailsPriceTopCenter,
} from '../hash/hash';

export function UseProductDetailsLink(product: any, ref: any) {
  function getStatusMessage() {
    switch (product?.productDetails?.pd_detailsBuyBox) {
      case HashProductDetailsPriceRightTop:
        return HashProductDetailsPriceRightTop;
      case HashProductDetailsPriceCenter:
        return HashProductDetailsPriceCenter;
      case HashProductDetailsPriceTopCenter:
        return HashProductDetailsPriceTopCenter;
      default:
        return HashProductDetailsPriceTopCenter;
    }
  }
  const slug = product.slug ? product.slug : '-';
  const refValue = ref === undefined ? 'dawno' : ref;
  return `/v/${slug}/${
    product.dui
  }/?ss_v=${getStatusMessage()}&ref=${refValue}`;
}
