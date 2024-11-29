import { GDrive } from '@robinbobin/react-native-google-drive-api-wrapper'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  }
})

export const App: React.FC = () => {
  useEffect(() => {
    const init = (): void => {
      const gdrv = new GDrive()
      gdrv.files.accessParameters.fetchTimeout.toString()

      // try {
      //   console.log(await gdrv.about.get('*'))
      // } catch (error) {
      //   console.log(error)
      // }
    }

    init()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  )
}
