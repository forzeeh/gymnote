import { StyleSheet, View, Text } from 'react-native';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const RepsList = () => {
  const users = useSelector((state: RootState) => state.repeatsList.repeats);

  return (
    <View>
      {users.map((it) => {
        return (
          <View style={s.container}>
            <Text>{it.id}</Text>
            <Text>{it.weight}</Text>
            <Text>{it.reps}</Text>
          </View>
        );
      })}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
});
