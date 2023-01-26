import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ScreenHeader = (props) => {
    const { pageTitle } = props;
    return (
        <View style={styles.headingBox}>
            <Text style={styles.headingText}>{pageTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingBox: {
        margin: 20
    },
    headingText: {
        fontSize: 28,
        alignSelf: 'center'
    }
});

export default ScreenHeader;