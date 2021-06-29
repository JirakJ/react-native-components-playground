import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const greeting = 'Hi there!';

    return (
        <View>
            <Text style={styles.headerStyle}>Some text</Text>
            <Text style={styles.subheaderStyle}>{greeting}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    subheaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
