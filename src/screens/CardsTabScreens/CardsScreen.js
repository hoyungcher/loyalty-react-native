import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import CardsTabCard from "../../components/CardsTabCard";

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
        <SafeAreaView style={styles.container}>
            <ScreenHeader pageTitle="My Loyalty Cards"/>
            <View>
                <FlatList
                    data={dummyData.data.stores}
                    keyExtractor={store => store.id}
                    renderItem={store => {                        
                        return (
                        <CardsTabCard
                            id={store.item.id}
                            name={store.item.name}
                            description={store.item.description}
                            stamps={store.item.stamps}
                            stampsToRedeem={store.item.stampsToRedeem}
                            redeemAvailable={store.item.redeemAvailable}
                        />
                    )}}
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    }
});

export default CardsScreen;