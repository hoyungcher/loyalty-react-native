import { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenHeader from "../../components/ScreenHeader";

const CardScreen = ({ route, navigation }) => {
    const dummyData = {
        data: {
            stores: [
                {
                    id: 1,
                    name: "Gali's Bakery",
                    description: "Collect a stamp for every drink or load you buy. Get your 10th one free on us!",
                    stamps: 4,
                    stampsToRedeem: 9,
                    redeemAvailable: false
                },
                {
                    id: 2,
                    name: "Coast Cafe",
                    description: "Collect a stamp for every drink you buy. Get your 10th one free on us!",
                    stamps: 3,
                    stampsToRedeem: 6,
                    redeemAvailable: false
                },
                {
                    id: 3,
                    name: "Fortune Supermarket",
                    description: "Collect a stamp for every $10 spend in our supermarkets. Enjoy 10% off your shopping when you have 9 stamps.",
                    stamps: 9,
                    stampsToRedeem: 9,
                    redeemAvailable: true
                }
            ]
        }
    }

    const [store, setStore] = useState({});
    const [stamps, setStamps] = useState([]);

    const navigateToCode = (collect) => {
        navigation.navigate('Code', {
            collect: collect
        });

    }

    useEffect(() => {
        const { storeId } = route.params;
        setStore(dummyData.data.stores.find(store => store.id === storeId));
        const data = new Array(store.stampsToRedeem).fill(false)
        data.fill(true, 0, store.stamps);
        setStamps([...data]);
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <ScreenHeader pageTitle={store.name}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {store.description}
                </Text>
            </View>
            <View style={styles.stampsContainer}>
                {stamps.map((stamp, index) => {
                    return (
                        <View key={index} style={styles.circle}>
                            {stamp ? <MaterialCommunityIcons name="baguette" size={40} color="black" /> : null}
                        </View>
                    )
                })}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigateToCode(store.stamps < store.stampsToRedeem)}>
                    <Text style={styles.buttonText}>
                    {
                        store.stamps >= store.stampsToRedeem ?
                        "Redeem reward" :
                        `Collect ${store.stampsToRedeem - store.stamps} more stamps`
                    }                    
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    textContainer: {
        alignSelf: "center",
        maxWidth: "80%",
        marginBottom: 20
    },
    text: {
        textAlign: "center",
        fontSize: "16px"
    },
    stampsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 20
    },
    circle: {
        backgroundColor: "#AAAAAA",
        height: 80,
        width: 80,
        borderRadius: "50%",
        margin: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        alignItems: "center"
    },
    button: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 6,
        alignItems: "center",
        width: "85%"
    },
    buttonText: {
        fontSize: 16,
        margin: 10
    }
})

export default CardScreen;