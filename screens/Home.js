import {SafeAreaView, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem, {localRestaurants} from '../components/RestaurantItem';

const YELP_API_KEY =
  'vNJ6rX0bIyV2TV59ZCKe7cxBNMrBFYozkLcw5Wf61QgQvqxrFATww-gZBJQZYq9Xi0wsau3WEhn31FaDxlTp2DEU9A-xvZrNbWafHXazB4JxISS6n2grLgQiZ6QXYnYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Manresa');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter((business) => (
            business.transactions.includes(activeTab.toLowerCase()))),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
