import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';
import { colors } from './constants';
import { NavigationBar } from './components/navbar/NavigationBar';
import { Track } from './components/track/Track';

export default function App() {
  return (
    <>
      <StatusBar barStyle='default' />
      <SafeAreaView style={styles.container}>
        <ReduxProvider store={store}>
          <NavigationBar />
          <Track />
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.mainColor,
    minHeight: '100%',
  },
});
