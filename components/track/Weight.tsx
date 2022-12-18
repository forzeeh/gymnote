import { isRejectedWithValue } from '@reduxjs/toolkit';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, textStyle } from '../../constants';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

export const Weight = () => {
  return (
    <View style={s.container}>
      <Text style={s.weight}>Weight (kgs)</Text>
      <View style={s.buttonsWrapper}>
        <Feather
          style={s.btn}
          name='minus-circle'
          size={30}
          color={colors.whiteColor}
        />
        <TextInput style={s.input}>
          <AntDesign
            style={s.clearInput}
            name='closecircleo'
            size={24}
            color='#a83264'
          />
        </TextInput>

        <Ionicons
          style={s.btn}
          name='add-circle'
          size={30}
          color={colors.whiteColor}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  weight: {
    paddingBottom: 3,
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: textStyle.fontSize,
    color: colors.defaultTextColor,
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '15%',
    color: colors.whiteColor,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  input: {
    position: 'relative',
    width: '65%',
    borderWidth: 1,
    borderColor: colors.whiteColor,
    fontSize: 16,
    margin: '1%',
    paddingHorizontal: 10,
    color: colors.defaultTextColor,
    borderRadius: 10,
  },
  clearInput: {
    position: 'absolute',
  },
});
