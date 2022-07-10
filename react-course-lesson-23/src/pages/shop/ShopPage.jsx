import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import { fetchCollectionStartAsync } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/withSippner/WithSpinner'; 
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching , selectIsCollectionsLoaded } from '../../redux/shop/shopSelector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class  ShopPage extends Component {
  
  
  componentDidMount() {
    const {fetchCollectionStartAsync} = this.props;
    fetchCollectionStartAsync();

  }
  render() {
    const { match ,selectIsCollectionFetching,isCollectionLoaded} = this.props;
    // const loading = isCollectionFetching 
    // const {loading} = this.state
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={selectIsCollectionFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
      </div>
    )
  }
}

const mapStateToProps =  createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded : selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)
