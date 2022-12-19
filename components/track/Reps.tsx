import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, textStyle } from '../../constants';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

export const Reps = () => {
  const [repsInput, setRepsInput] = useState<string>('');

  return (
    <View style={s.container}>
      <Text style={s.reps}>Reps</Text>
      <View style={s.buttonsWrapper}>
        <Feather
          style={s.btn}
          name='minus-circle'
          size={30}
          color={colors.whiteColor}
          onPress={() => {
            setRepsInput((prev) => {
              if (Number(repsInput) < 1) return '';
              return (Number(prev) - 0.5).toString();
            });
          }}
        />
        <View style={s.inputWrapper}>
          <TextInput
            style={s.input}
            value={repsInput}
            onChangeText={(value) => {
              setRepsInput(value.replace(/[^0-9]/g, ''));
            }}
            keyboardType='numeric'
          />
          <AntDesign
            style={[
              s.clearInputBtn,
              !repsInput ? s.isClearInputBtnVisible : null,
            ]}
            onPress={() => {
              setRepsInput('');
            }}
            name='closecircleo'
            size={20}
            color='#a83264'
          />
        </View>

        <Ionicons
          style={s.btn}
          name='add-circle'
          size={30}
          color={colors.whiteColor}
          onPress={() => {
            setRepsInput((prev) => {
              return (Number(prev) + 0.5).toString();
            });
          }}
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
  reps: {
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
  inputWrapper: {
    position: 'relative',
    width: '65%',
    borderWidth: 1,
    borderColor: colors.whiteColor,
    margin: '1%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    color: colors.defaultTextColor,
    fontSize: 16,
  },
  clearInputBtn: {
    position: 'absolute',
    right: 5,
    top: 3,
  },
  isClearInputBtnVisible: {
    display: 'none',
  },
});
