import {SwitchNavigator} from 'react-navigation'

import * as form from './Form'
import * as calendly from './Calendly'
import * as message from './Message'

export const screen = SwitchNavigator(
  {form, calendly, message},
  {
    initialRouteName: 'form',
    resetOnBlur: false
  }
)

export default screen
