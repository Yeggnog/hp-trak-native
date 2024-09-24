import { Text, View, ScrollView } from "react-native";
import { BarData } from "@/constants/Types";
import BarCard from "@/components/BarCard";

export default function Index() {
  const testBars: BarData[] = [
    {
      name: 'Sample 1',
      defaultValue: 4,
      maxValue: 6,
      fillColor: '#2cffaa',
      BGColor: '#006f5a',
      segmented: true,
    } as BarData,
    {
      name: 'Sample 2',
      defaultValue: 3,
      maxValue: 3,
      fillColor: '#2cffaa',
      BGColor: '#006f5a',
      segmented: false,
    } as BarData,
    {
      name: 'Sample 3',
      defaultValue: 12,
      maxValue: 20,
      fillColor: '#aaff2c',
      BGColor: '#5a6f00',
      segmented: false,
    } as BarData,
    {
      name: 'Sample 1',
      defaultValue: 4,
      maxValue: 6,
      fillColor: '#2cffaa',
      BGColor: '#006f5a',
      segmented: true,
    } as BarData,
    {
      name: 'Sample 2',
      defaultValue: 3,
      maxValue: 3,
      fillColor: '#2cffaa',
      BGColor: '#006f5a',
      segmented: false,
    } as BarData,
    {
      name: 'Sample 3',
      defaultValue: 12,
      maxValue: 20,
      fillColor: '#aaff2c',
      BGColor: '#5a6f00',
      segmented: false,
    } as BarData,
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {
        testBars.map((barData) => (
          <BarCard barData={barData} />
        ))
      }
      </ScrollView>
    </View>
  );
}
