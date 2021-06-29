import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    const images = [
        {title: "Forest", imageSource: require("../../assets/forest.jpg")},
        {title: "Beach", imageSource: require("../../assets/beach.jpg")},
        {title: "Mountain", imageSource: require("../../assets/mountain.jpg")}
    ]

    return (
        <View>
            {images.map(image => <ImageDetail title={image.title} imageSource={image.imageSource}/>)}
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;
