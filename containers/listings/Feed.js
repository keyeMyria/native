import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {load, reset} from '@/redux/modules/listings/feed'
import {
  getListings,
  getPagination,
  isLoading
} from '@/redux/modules/listings/feed/selectors'
import Feed from '@/components/listings/Feed'

export class FeedLoader extends Component {
  static defaultProps = {
    length: 15
  }

  componentDidMount() {
    this.onLoad()
  }

  componentDidUpdate(prev) {
    if (!_.isEqual(prev.params, this.props.params)) {
      this.onReset()
      this.onLoad()
    }
  }

  onReset = () => {
    const {reset, type} = this.props
    if (reset) reset(type)
  }

  onLoad = (page = 1) => {
    const {load, type, length, params} = this.props
    load(type, {...params, page, pageSize: length})
  }

  renderFeed() {
    return <Feed {...this.props} />
  }

  render() {
    const {loader, pagination, loading} = this.props
    const children = this.renderFeed()
    if (!loader) return children
    return React.cloneElement(
      loader,
      {
        loading,
        pagination,
        onLoad: this.onLoad
      },
      children
    )
  }
}

const props = (...args) => ({
  data: getListings(...args),
  pagination: getPagination(...args),
  loading: isLoading(...args)
})

const actions = {
  load,
  reset
}

export const withFeed = connect(props, actions)

export default withFeed(FeedLoader)
