import { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import QRCode from "react-native-qrcode-svg";
import ScreenHeader from "../components/ScreenHeader";
import CollectRedeemTabBar from "../components/CollectRedeemTabBar";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

const CodeScreen = ({route}) => {
    const isFocused = useIsFocused();
    const [collect, setCollect] = useState(true);
    const [overrideRouteParams, setOverrideRouteParams] = useState(false);

    useFocusEffect(
        useCallback(() => {
                if (route.params) {
                    if (route.params.collect) {
                        setCollect(true);
    
                    } else {
                        setCollect(false);
                    }
                }
            
            console.log("RERENDER");
            

        })
        
    )

    const changeTab = (state) => {
        if (route.params) {
            route.params.collect = state;
        }
        setCollect(state);
    }
    console.log(collect);
    return(
        <SafeAreaView style={styles.container}>
            <ScreenHeader pageTitle="Code"/>
            <CollectRedeemTabBar
                collect={collect}
                changeTab={changeTab}
            />
            <View style={styles.codeContainer}>
                {
                    collect ? 
                    <QRCode size={200} value="collect-user1"/> : 
                    <QRCode size={200} value="redeem-user1"/>
                }
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {
                        collect? 
                        "Please show this code to the store to collect stamps" :
                        "Please show this code to the store to redeem your reward"
                    }
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    codeContainer: {
        marginVertical: 60,
        alignSelf: "center"

    },
    textContainer: {
        alignSelf: "center",
        maxWidth: "80%"
    },
    text: {
        textAlign: "center",
        fontSize: "16px"
    }
})

export default CodeScreen;