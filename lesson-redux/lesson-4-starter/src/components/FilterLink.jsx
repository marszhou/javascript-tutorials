import {connect} from 'react-redux'
import Link from './Link'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})

const mapDispatachToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatachToProps)(Link)
