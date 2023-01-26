import { View, Text, StyleSheet } from "react-native";

const CollectRedeemTab = (props) => {

    return (
        props.active ? 
            <View style={[styles.tab, styles.activeTab]}>
                <Text style={styles.tabText}>{props.text}</Text>
            </View> :
            <View style={[styles.tab, styles.inactiveTab]}>
                <Text style={styles.tabText}>{props.text}</Text>
            </View>
        
        
    )
}

const styles = StyleSheet.create({
    tab: {
        alignItems: "center",
        borderRadius: 4
    },
    activeTab: {
        backgroundColor: "#AAAAAA"
        
    }, 
    inactiveTab: {
        backgroundColor: "#FFFFFF"

    },
    tabText: {
        fontSize: "16px",
        marginVertical: 4
    }
});

export default CollectRedeemTab;