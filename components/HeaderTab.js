import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function HeaderTab({activeTab, setActiveTab}) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        btnColor="black"
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        btnColor="black"
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
