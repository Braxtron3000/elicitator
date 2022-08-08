import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const QuestionCard = (props: {title: string; subtitle?: string}) => {
  return (
    <>
      <Card>
        <Card.Title title={props.title} subtitle={props.subtitle} />
      </Card>
    </>
  );
};

export default QuestionCard;
