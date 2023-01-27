import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CollectRedeemTab from "./CollectRedeemTab";

const CollectRedeemTabBar = (props) => {
    // const handleCollectMode = () => {
    //     props.changeTab(true);
    // }

    // const handleRedeemMode = () => {
    //     props.changeTab(false);
    // }
    

    return (
        <View style={styles.tabBar}>
            <TouchableOpacity style={styles.touchable} onPress={() => props.changeTab(true)}>
                <CollectRedeemTab text="Collect" active={props.collect} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={() => props.changeTab(false)}>
                <CollectRedeemTab text="Redeem" active={!props.collect} />   
            </TouchableOpacity>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        borderColor: "#AAAAAA",
        borderWidth: 1,
        width: "70%",
        alignSelf: "center",
        borderRadius: 6,
        overflow: "hidden"
    },
    tabText: {
        fontSize: "16px"
    },
    touchable: {
        flex: 1
    }

});

export default CollectRedeemTabBar;