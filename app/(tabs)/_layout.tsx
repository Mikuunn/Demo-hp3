import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Index from '.';
import LoginScreen from './login';
import Quiz from './quiz';

const Tabs = createBottomTabNavigator();

const TabLayout: React.FC = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false, headerTitle: '' }}>
      <Tabs.Screen name="index" component={Index} />
      <Tabs.Screen name="login" component={LoginScreen} />
      <Tabs.Screen name="quiz" component={Quiz} />
    </Tabs.Navigator>
  );
};

export default TabLayout;
