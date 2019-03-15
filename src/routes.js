import { createStackNavigator } from 'react-navigation';
import Main from './components/Main';

export default createStackNavigator ({
    Main
}, {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#191414"
        },
        headerTintColor: "#FFD700"
            
    }
})