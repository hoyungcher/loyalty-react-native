import { Text, View, StyleSheet, SafeAreaView } from "react-native";

const CardsScreen = () => {
    const dummyData = {
        data: {
            stores: [
                {
                    id: 1,
                    name: "Gali's Bakery",
                    description: "Bakery and cafe",
                    stamps: 4,
                    stampsToRedeem: 9,
                    redeemAvailable: false
                },
                {
                    id: 2,
                    name: "Coast Cafe",
                    description: "Artesan Coffee",
                    stamps: 3,
                    stampsToRedeem: 6,
                    redeemAvailable: false
                },
                {
                    id: 3,
                    name: "Fortune Supermarket",
                    description: "Asian supermarket",
                    stamps: 9,
                    stampsToRedeem: 9,
                    redeemAvailable: true
                }
            ]
        }
    }
    return(
        <SafeAreaView>
            <Text>Loyalty</Text>
        </SafeAreaView>

    );
}

export default CardsScreen;