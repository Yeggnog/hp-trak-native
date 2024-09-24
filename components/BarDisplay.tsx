import { Text, View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { BarData } from '../constants/Types';
import { useState } from 'react';

const borderWidth = 3;

export default function BarDisplay(props: {barData: BarData, barValue: number}){
    // set up bar segments, if applicable
    let segments = [];
    if(props.barData.segmented){
        for(let i=0; i<props.barData.maxValue; i++){
            let fillColor = (i < props.barValue) ? props.barData.fillColor : props.barData.BGColor;
            segments.push(
                <View style={{...styles.barSegment, backgroundColor: fillColor}}></View>
            );
        }
    }

    // set up bar container width, if applicable (percentage widths not working due to type errors)
    const [barWidth, setBarWidth] = useState(200);
    const getWidthString = () => {
        //return ( Math.round(props.barValue / props.barData.maxValue * 100) + "%");
        return Math.round(props.barValue / props.barData.maxValue * barWidth);
    }

    return (
        <View>
            <Text>{props.barData.name} [{props.barValue}/{props.barData.maxValue}]</Text>
            { // split for segmented / single-segment bars
            (props.barData.segmented) ? (
                <View style={styles.barContainer}>
                    {segments}
                </View>
            ) : (
                <View style={styles.barContainer} onLayout={(event) => { setBarWidth(event.nativeEvent.layout.width - (2.0 * borderWidth)) }}>
                    <View style={[ styles.barFill, { width: getWidthString() } ]}></View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    barContainer: {
        alignSelf: 'center',
        width: 300,
        height: 30,
        backgroundColor: '#2c3c4c',
        borderColor: '#6c7c8c',
        borderWidth: borderWidth,
        flexDirection: 'row',
    },
    barFill: {
        width: '50%',
        height: '100%',
        backgroundColor: '#2cffaa',
    },
    barSegment: {
        flex: 1,
        borderColor: '#6c7c8c',
        borderWidth: borderWidth,
    },
});