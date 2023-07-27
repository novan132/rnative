import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { FocusedStatusBar, HomeHeader, NFTHeader } from '../components';
import { COLORS, NFTData } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  );
};
export default Home;
