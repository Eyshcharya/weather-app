import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt_text: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [{ main: 'Clear' }]
  },
  {
    dt_text: '2023-02-17 12:00:00',
    main: {
      temp_max: 7.55,
      temp_min: 6.15
    },
    weather: [{ main: 'Clear' }]
  },
  {
    dt_text: '2023-02-16 12:00:00',
    main: {
      temp_max: 3.25,
      temp_min: 2.55
    },
    weather: [{ main: 'Clear' }]
  }
]

const Item = (props) => {
  const { dt_text, min, max, condition } = props
  return (
    <View>
      <Feather name="sun" size={50} color={'white'} />
      <Text>{condition}</Text>
      <Text>{dt_text}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}
const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text>UpcomingWeather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_text}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default UpcomingWeather
