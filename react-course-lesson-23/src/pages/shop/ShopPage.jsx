import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import { firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/withSippner/WithSpinner'; 

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class  ShopPage extends Component {
  state = {
    loading: true,
  }
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const {updateCollections} = this.props 
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      const collectionsMap =   convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap)
      this.setState({loading: false}) // this is to stop the spinnerOverlay from showing up 
    })
  }
  render() {
    const { match } = this.props;
    const {loading} = this.state
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) 
})

export default connect(null,mapDispatchToProps)(ShopPage)
