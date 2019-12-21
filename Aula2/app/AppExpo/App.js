import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './screens/home'
import Contato from './screens/contato'
import Cursos from './screens/cursos'


const Stack = createStackNavigator({
  Home : {
    navigationOptions: {
      title: 'Home'
    },
    screen: Home
  },
  Contato : {
    navigationOptions: {
      title: 'Contatos'
    },
    screen: Contato
  },
  Cursos : {
    navigationOptions: {
      title: 'Cursos'
    },
    screen: Cursos
  }
})

export default createAppContainer(Stack)