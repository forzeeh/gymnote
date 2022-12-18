import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, textStyle } from '../../constants';
import { NavigationBarBtn } from './NavigationBarBtn';

export const NavigationBar = () => {
  const tabTitles: string[] = ['Track', 'History', 'Graph'];
  const [activeTab, setActiveTab] = useState<string>(tabTitles[0]);

  const onChangeTab = (activeTab: string) => {
    setActiveTab(activeTab);
  };

  return (
    <View style={s.container}>
      {tabTitles.map((title) => (
        <NavigationBarBtn
          key={title}
          title={title}
          activeTab={activeTab}
          onChangeTab={onChangeTab}
        />
      ))}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
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
});
