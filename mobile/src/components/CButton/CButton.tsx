import React from 'react';
import {Button, Alert} from 'react-native';

interface CButtonParams {
  title: string;
}
const CButton = (params: CButtonParams) => (
  <Button
    title={params.title}
    onPress={() => Alert.alert('Simple Button pressed')}
  />
);
export default CButton;
