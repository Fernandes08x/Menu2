import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const drawer = createDrawerNavigator();

import TelaInicio from "./Telas/Telainicio";
import TelaContato from "./Telas/TelaContato";
import TelaSobre from "./Telas/TelaSobre";

function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator inítialRouteName="TeladeInício">
        <Drawer.Screen name="TelaInício" component={TelaInicio} />
        <Drawer.Screen name="TelaSobre" component={TelaSobre} />
        <Drawer.Screen name="TelaContato" component={TelaContato} />
      <Drawer.Navigator></Drawer.Navigator>

    </NavigationContainer>
  )
}


export default App;