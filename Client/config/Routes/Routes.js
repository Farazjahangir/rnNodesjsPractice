import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../../screens/Login/Login'
import Register from '../../screens/Register/Register'

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    },
    Register: {
        screen: Register
      }  
  });
  
  export default createAppContainer(AppNavigator);