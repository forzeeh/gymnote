import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    <TouchableOpacity
      style={[s.button, activeTab === title ? s.active : null]}
      onPress={() => {
        onChangeTab(title);
      }}>
      <Text style={[s.text, activeTab === title ? s.activeText : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    marginHorizontal: 1,
    width: '33%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: textStyle.tabs.activeTab.borderBottomColor,
    borderWidth: 1,
    borderBottomWidth: 3,
  },
  text: {
    color: colors.defaultTextColor,
    fontSize: textStyle.fontSize,
    fontWeight: '600',
  },
  active: {
    backgroundColor: colors.tabsColor,
  },
  activeText: {
    fontWeight: '900',
    color: textStyle.tabs.activeTab.fontColor,
  },
});
