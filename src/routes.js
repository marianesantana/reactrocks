import { createStackNavigator } from 'react-navigation';
import Main from './components/Main';
import Product from './components/Product';

export default createStackNavigator ({
    Main,
    Product
}, {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#191414"
        },
        headerTintColor: "#FFD700"
            
    }
})