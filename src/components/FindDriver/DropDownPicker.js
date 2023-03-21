import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MyDropDown = (items, setItems) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { label: '���', value: 'apple' },
    { label: '�ٳ���', value: 'banana' },
    { label: '����', value: 'strawberry' },
  ];

  return (
    <View>
      <Text>������ ����: {selectedValue}</Text>
      <DropDownPicker
        items={items}
        defaultValue={selectedValue}
        containerStyle={{ height: 40 }}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
    </View>
  );
};

export default MyDropDown;



