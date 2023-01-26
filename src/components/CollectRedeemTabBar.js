import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CollectRedeemTab from "./CollectRedeemTab";

const CollectRedeemTabBar = (props) => {
    const [collectMode, setCollectMode] = useState(true);
    const [redeemMode, setRedeemMode] = useState(false);

    const handleCollectMode = () => {
        setCollectMode(true);
        setRedeemMode(false);
        props.changeTab(true);
    }

    const handleRedeemMode = () => {
        setCollectMode(false);
        setRedeemMode(true);
        props.changeTab(false);
    }

    return (
        <View style={styles.tabBar}>
            <TouchableOpacity style={styles.touchable} onPress={() => handleCollectMode()}>
                <CollectRedeemTab text="Collect" active={collectMode} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={() => handleRedeemMode()}>
                <CollectRedeemTab text="Redeem" active={redeemMode} />   
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