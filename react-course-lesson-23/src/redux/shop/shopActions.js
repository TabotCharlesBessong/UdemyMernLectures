
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase';
import shopActionTypes from './shopTypes';

export const fetchCollectionStart = () => ({
  type:shopActionTypes.FETCH_COLLECTIONS_START,
  // payload:collectionsMap 
})

export const fetchCollectionSuccess = (collectionsMap) => ({
  type:shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsMap
})

export const fetchCollectionError = (errorMsg) => ({
  type:shopActionTypes.FETCH_COLLECTIONS_ERROR,
  payload:errorMsg
})

export const fetchCollectionStartAsync = () => {
  return dispatch =>  {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionStart());

		collectionRef.get().then(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap))
			// this.setState({ loading: false }); 
		}).catch(error =>  dispatch(fetchCollectionError(error.message)))
    
  }
}

