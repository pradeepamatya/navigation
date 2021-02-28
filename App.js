import React from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  if (!isReady)
    return (
      <AppLoading
        onError={(err) => console.log(err)}
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
      />
    );
  return (
    <View style={{ margin: 50 }}>
      <Text>Hello world</Text>
    </View>
  );
}
