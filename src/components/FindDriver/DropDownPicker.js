import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MyDropDown = (items, setItems) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { label: '사과', value: 'apple' },
    { label: '바나나', value: 'banana' },
    { label: '딸기', value: 'strawberry' },
  ];

  return (
    <View>
      <Text>선택한 과일: {selectedValue}</Text>
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



