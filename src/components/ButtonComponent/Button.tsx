import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../../components/ButtonComponent/style';
interface ButtonProps {
  title: any;
  onPress: any;
  style?: any;
}
interface ButtonState {}
export default class ButtonComponent extends Component<
  ButtonProps,
  ButtonState
> {
  constructor(props: ButtonProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity style={[styles.buttons]} onPress={this.props.onPress}>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
