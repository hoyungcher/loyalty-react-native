import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

const CardsTabCard = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.descriptionText}>{props.description}</Text>
            </View>
            <View style={styles.rightBox}>
                { props.stamps < props.stampsToRedeem ? 
                    <Text>{props.stamps} / {props.stampsToRedeem}</Text> : 
                    <Text>Redeem</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BBBBBB",
        marginVertical: 4,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
        
    },
    nameText: {
        fontSize: 16,
        fontWeight: "700"
    },
    descriptionText: {
        fontSize: 12
    },
    leftBox: {
        marginLeft: 8,
        marginVertical: 8
    },
    rightBox: {
        marginRight: 8
    }
})

export default CardsTabCard;