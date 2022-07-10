
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector'
import WithSpinner from '../../components/withSippner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading:selectIsCollectionFetching
})

const CollectionOverviewContainer  = compose(
  connect(mapStateToProps),
  WithSpinner
  
)(CollectionsOverview)


export default CollectionOverviewContainer
