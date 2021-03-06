import withNavigation from 'react-navigation/src/views/withNavigation'

import Shell, {Section} from '@/components/shared/Shell'
import Header from './Header'

function ShellApp({...props}) {
  if (typeof props.header === 'undefined') {
    props.header = <Header />
  }
  return <Shell {...props} />
}

export {Section}

export default withNavigation(ShellApp)
