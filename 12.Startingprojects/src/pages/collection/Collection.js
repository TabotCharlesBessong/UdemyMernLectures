import React from 'react';
import { connect } from 'react-redux';
import CardItem from '../../components/cardItem/CardItem';

import { selectCollection } from '../../redux/shop/shopSelector';

import './Collection.scss';

const Collection = ({ collection }) => {
  console.log(collection)
  // const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'></h2>
      <div className='items'>
        {/* {items.map(item => ( */}
          <CardItem key={item.id} item={item} />
        {/* ))} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);