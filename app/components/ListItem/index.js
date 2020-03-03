import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return (
      <div className="row">

          <div className="sb-product-head col-sm-5 col-xs-4">
              <a href="/products/faxtex-product-sample" className="waiting lazyloaded">
                  <img className=" lazyloaded" data-src="//cdn.shopify.com/s/files/1/0013/8815/0848/products/Printer_3fc8c45b-0f76-4627-83a8-aac5f6f023e4_90x.jpg?v=1573390509" alt="Faxtex Product Sample" src="//cdn.shopify.com/s/files/1/0013/8815/0848/products/Printer_3fc8c45b-0f76-4627-83a8-aac5f6f023e4_90x.jpg?v=1573390509" />
              </a>
          </div>
          <div className="sb-product-content col-sm-7 col-xs-8">
              <div className="bp-content-inner">
                  <a href="/collections/all/products/faxtex-product-sample">Faxtex Product Sample</a>
                  <div className="sb-price">
                      <span className="price-compare"> <span className="money" data-currency-usd="$199.00">$199.00</span></span>
                      <span className="price-sale"><span className="money" data-currency-usd="$110.00">$110.00</span></span>
                  </div>

              </div>
          </div>

      </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
