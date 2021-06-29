import React from "react";
import {Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {

  const friends = [
    { name: "Friend #1", age: Math.floor(Math.random()*100) },
    { name: "Friend #2", age: Math.floor(Math.random()*100) },
    { name: "Friend #3", age: Math.floor(Math.random()*100) },
    { name: "Friend #4", age: Math.floor(Math.random()*100) },
    { name: "Friend #5", age: Math.floor(Math.random()*100) },
    { name: "Friend #6", age: Math.floor(Math.random()*100) },
  ];
  return <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friends.name}
      data={friends}
      renderItem={({item}) => {
        return (
            <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
        );
      }
      }
  />;
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
