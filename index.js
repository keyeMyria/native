import {AppRegistry, YellowBox} from 'react-native'

import App from '@/containers/App'
import Provider from '@/containers/Provider'

// Temporary fix for
// https://github.com/facebook/react-native/issues/
// https://github.com/facebook/react-native/issues/17504
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader'
])

AppRegistry.registerComponent('EmCasa', () => App)

AppRegistry.setWrapperComponentProvider(() => Provider)
