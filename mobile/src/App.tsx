/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import CHeader from './components/CHeader/Cheader';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CHeader title="Header" />
        </View>
        <View>
          <Text>Oi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
