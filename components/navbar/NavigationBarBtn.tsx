import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import { colors, textStyle } from '../../constants';

interface ITabItem {
  title: string;
  activeTab: string;
  onChangeTab(event: string): void;
}

export const NavigationBarBtn = ({
  title,
  activeTab,
  onChangeTab,
}: ITabItem) => {
  return (
    <View style={[s.textWrapper, activeTab === title ? s.active : s.null]}>
      <Text
        style={[s.text, activeTab === title ? s.activeText : s.null]}
        onPress={() => {
          onChangeTab(title);
        }}>
        {title}
      </Text>
    </View>
  );
};

const s = StyleSheet.create({
  textWrapper: {
    width: '33%',
    backgroundColor: colors.tabsColor,
    borderColor: '#333',
    borderWidth: 1,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: colors.defaultTextColor,
    fontSize: textStyle.fontSize,
  },
  active: {
    borderColor: textStyle.tabs.activeTab.borderBottomColor,
    borderWidth: 1,
    borderBottomWidth: 3,
  },
  activeText: {
    fontSize: 22,
    color: textStyle.tabs.activeTab.fontColor,
  },
  null: {},
});
