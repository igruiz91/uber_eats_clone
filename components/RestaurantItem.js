import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'FarmHouse Kitchen',
    image_url:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0B36hiH4MokVWjvglw-wywHaE8%26pid%3DApi&f=1',
    categories: ['Restaurant', 'Bar'],
    price: '$',
    reviews: 126,
    rating: 4.5,
    time: '30-40min',
  },
  {
    name: 'Beachside Bar',
    image_url:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.obaoba.com.br%2FcontentFiles%2Fsystem%2Fpictures%2F2016%2F2%2F298940%2Foriginal%2Fbanana.jpg&f=1&nofb=1',
    categories: ['Cafe', 'Bar'],
    price: '$',
    reviews: 890,
    rating: 4.9,
    time: '10-20min',
  },
];

export default function RestaurantItem(props) {
  const {restaurantData} = props;
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 25}}>
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo
            name={restaurant.name}
            reviews={restaurant.reviews}
            rating={restaurant.rating}
            time={restaurant.time}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>{props.time}</Text>
    </View>
    <View
      style={{
        backgroundColor: 'white',
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
