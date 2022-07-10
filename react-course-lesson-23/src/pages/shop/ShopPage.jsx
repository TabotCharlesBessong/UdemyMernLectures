import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import { firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';

class  ShopPage extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      convertCollectionsSnapshotToMap(snapshot);
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

export default ShopPage;
