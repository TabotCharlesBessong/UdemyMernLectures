import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import { firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import { updateCollections } from '../../redux/shop/shopActions';

class  ShopPage extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const {updateCollections} = this.props 
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      const collectionsMap =   convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap)
    })
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) 
})

export default connect(null,mapDispatchToProps)(ShopPage)
