import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../../screens/Login/Login'

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    }
  });
  
  export default createAppContainer(AppNavigator);