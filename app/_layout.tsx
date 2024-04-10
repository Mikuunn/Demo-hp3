import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Stack } from 'expo-router';

// http://192.168.11.237:3000/api/graphql

//codegen martw
const client = new ApolloClient({
  uri: 'http://192.168.11.237:3000/api/graphql',
  cache: new InMemoryCache(),
});

const RootLayoutNav: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ApolloProvider>
  );
};

export default RootLayoutNav;

//tabs gargj irehed hergtei code shuu

// export default function App() {
//   return (
//     <Container>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Tabs" component={Tabs} />
//         <Drawer.Screen name="Piano" component={Piano} />
//         <Drawer.Screen name="SixtySeconds" component={SixtySeconds} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
