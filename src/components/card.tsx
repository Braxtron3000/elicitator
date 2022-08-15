import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {Card} from 'react-native-paper';
import {StyleProp} from 'react-native';

const QuestionCard = (props: {
  style: StyleProp<ViewStyle>;
  title: string;
  subtitle?: string;
}) => {
  return (
    <>
      <Card style={props.style}>
        <Card.Title title={props.title} subtitle={props.subtitle} />
      </Card>
    </>
  );
};

export default QuestionCard;
