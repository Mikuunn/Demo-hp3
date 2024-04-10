import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Index from '.';
import LoginScreen from './login';
import SignUpScreen from './signup';

const Tabs = createBottomTabNavigator();

const TabLayout: React.FC = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" component={Index} />
      <Tabs.Screen name="login" component={LoginScreen} />
      <Tabs.Screen name="signup" component={SignUpScreen} />
    </Tabs.Navigator>
  );
};

export default TabLayout;

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
