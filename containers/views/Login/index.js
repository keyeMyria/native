import {Component} from 'react'
import {connect} from 'react-redux'

import {getUser} from '@/redux/modules/auth/selectors'
import Shell from '@/containers/shared/Shell'
import LoginForm from '@/containers/auth/LoginForm'

connect((state) => ({
  user: getUser(state)
}))
class BaseLoginScreen extends Component {
  componentWillReceiveProps({user, navigation}) {
    // Return to homepage on success
    if (user !== this.props.user && user) {
      navigation.navigate('home')
    }
  }

  render() {
    return (
      <Shell>
        <LoginForm />
      </Shell>
    )
  }
}

const LoginScreen = BaseLoginScreen

export default LoginScreen

export const screen = LoginScreen

export const navigationOptions = () => ({
  title: 'EmCasa | Login'
})
