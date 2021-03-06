import {Component} from 'react'
import {ScrollView} from 'react-native'

export default class InfiniteScroll extends Component {
  static defaultProps = {
    threshold: 1000
  }

  onLoad = () => {
    const {onLoad, pagination} = this.props
    onLoad(pagination.currentPage + 1)
  }

  isOverThreshold = ({contentOffset, contentSize, layoutMeasurement}) => {
    const {threshold} = this.props
    const offsetHeight = contentOffset.y
    const height = contentSize.height - layoutMeasurement.height
    const distance = height - offsetHeight
    return !isNaN(distance) && Math.abs(distance) <= threshold
  }

  onScroll = ({nativeEvent}) => {
    if (
      !this.props.loading &&
      !this.isLastPage &&
      this.isOverThreshold(nativeEvent)
    ) {
      this.onLoad()
    }
  }

  get isLastPage() {
    const {pagination} = this.props
    return pagination.totalPages <= pagination.currentPage
  }

  render() {
    const {children} = this.props
    return (
      <ScrollView onScroll={this.onScroll} scrollEventThrottle={100}>
        {children}
      </ScrollView>
    )
  }
}
