import { View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { BarData } from "@/constants/Types";
import BarDisplay from "./BarDisplay";

export default function BarCard(props: {barData: BarData}) {
    const [ barValue, setBarValue ] = useState(0);

    const onButtonPress = (action: string) => {
        switch(action){
            case 'increment': setBarValue((prev) => (Math.min(prev + 1, props.barData.maxValue))); break;
            case 'decrement': setBarValue((prev) => (Math.max(prev - 1, 0))); break;
            case 'fill': setBarValue(() => (props.barData.maxValue)); break;
            case 'empty': setBarValue(() => 0); break;
        }
    }

    return (
        <View style={styles.card}>
            <BarDisplay barData={props.barData} barValue={barValue} />
            <View style={styles.buttonRow}>
                <Pressable style={styles.button} onPress={ () => {onButtonPress("empty")} }>0 Empty</Pressable>
                <Pressable style={styles.button} onPress={ () => {onButtonPress("increment")} }>+ Increment</Pressable>
                <Pressable style={styles.button} onPress={ () => {onButtonPress("decrement")} }>- Decrement</Pressable>
                <Pressable style={styles.button} onPress={ () => {onButtonPress("fill")} }># Fill</Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#aaddff',
        borderRadius: 6,
        padding: 6,
        margin: 4,
    },
    button: {
        backgroundColor: '#22ccff',
        borderRadius: 6,
        color: '#ffffff',
        padding: 6,
        margin: 4,
    },
    buttonRow: {
        flexDirection: 'row',
    },
});