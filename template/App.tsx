import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Title } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Title>Hello Iteam + React Native!</Title>
      <Button
        mode="contained"
        color="blue"
        onPress={() => navigation.navigate("Home")}
      >
        Go to Home Screen
      </Button>
    </View>
  );
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Title>Hello Iteam + React Native!</Title>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn-assets-cloud.frontify.com/local/frontify/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTUzOTg2XC9lZWNmNjExMDg1YTI1YWM0MTIzZGE3NmY4M2EzZTdkNi0xNTEyNzI5Mzk3LnBuZyJ9:frontify:ANleqg1_q50wrm-EmaePRoqAtTkpInN90J70KGuqUbU?width=449",
        }}
      />
      <Button
        mode="contained"
        color="blue"
        onPress={() => navigation.navigate("Profile")}
      >
        Go to Profile Screen
      </Button>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
    margin: 20,
  },
});

export default App;
