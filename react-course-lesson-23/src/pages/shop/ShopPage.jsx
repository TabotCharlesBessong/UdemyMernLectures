import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverviewContainer from '../../components/collections-overview/CollectionOverviewContainer';
import CollectionContainer from '../collection/CollectionContainer';
import { fetchCollectionStartAsync } from '../../redux/shop/shopActions';


class  ShopPage extends Component {
  
  
  componentDidMount() {
    const {fetchCollectionStartAsync} = this.props;
    fetchCollectionStartAsync();

  }
  render() {
    const { match } = this.props;
    // const loading = isCollectionFetching 
    // const {loading} = this.state
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage)
