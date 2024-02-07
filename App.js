import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";
const Stack = createNativeStackNavigator();
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWUMsnuGhxttD85Pd9dl_RelnFE8QD5bI",
  authDomain: "mobileapp-6ebd4.firebaseapp.com",
  projectId: "mobileapp-6ebd4",
  storageBucket: "mobileapp-6ebd4.appspot.com",
  messagingSenderId: "665171281214",
  appId: "1:665171281214:web:c1431b92ab87945022186f",
  measurementId: "G-DBMVXEXYRF"
};

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}  
