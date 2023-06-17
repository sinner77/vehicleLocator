import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {languages} from '../types.tsx';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';

interface SettingsScreenProps {
  navigation: any;
}

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const {t, i18n} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (value: string) => {
    i18n?.changeLanguage(value);
  };

  const Language = ({item}) => {
    return <Text>{item.id}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settingsScreen.settings')}</Text>
      <View style={styles.option}>
        <Text>{t('settingsScreen.languageLabel')}</Text>
        <Picker
          selectedValue={i18n.language}
          style={styles.picker}
          onValueChange={handleLanguageChange}>
          {languages.map(language => (
            <Picker.Item
              key={language.id}
              label={language.title}
              value={language.id}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  picker: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default SettingsScreen;
