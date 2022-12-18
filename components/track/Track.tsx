import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Weight} from "./Weight";

export const Track = () => {
  const users = useSelector((state: RootState) => state.userList.users)

  return (
    <View style={s.container}>
      <Weight />
    </View>
  );
}

const s = StyleSheet.create({
  container: {},
});
