import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
      <View>
        <Text style={styles.text}>This is a test</Text>
        <Button
          onPress={() => props.navigation.navigate('Components')}
          title="Components"
        />
        <Button
          onPress={() => props.navigation.navigate('List')}
          title="List"
        />
        <Button
          onPress={() => props.navigation.navigate('Image')}
          title="Image"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
