import { StyleSheet, View, Text } from 'react-native';
import { Reps } from './Reps';
import { RepsList } from './RepsList';
import { Weight } from './Weight';

export const Track = () => {
  return (
    <View style={s.container}>
      <Weight />
      <Reps />
      {/* <RepsList />; */}
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
});
