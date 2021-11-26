import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './style';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import ButtonComponent from '../../components/ButtonComponent/Button';
import {addList} from '../../appState/actions/action';
import RNCalendarEvents from 'react-native-calendar-events';
interface HomeProps {
  navigation?: any;
  style: string;
  onPress: any;
  ADD: any;
}
interface HomeState {
  noteTitle: string;
  noteDescription: string;
  date: any;
  time: any;
}
class HomePage extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      noteTitle: '',
      noteDescription: '',
      date: new Date(),
      time: '',
    };
  }
  titleCall = (e: any) => {
    this.setState({noteTitle: e});
  };
  DescriptionCall = (e: any) => {
    this.setState({noteDescription: e});
  };
  onPress() {
    this.props.ADD({
      id: Math.floor(Math.random() * 9999999),
      title: this.state.noteTitle,
      description: this.state.noteDescription,
      date: this.state.date,
      time: this.state.time,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ToDoApp</Text>
        <TextInput
          placeholder="enter title"
          style={styles.input}
          onChangeText={e => {
            this.titleCall(e);
          }}
        />
        <TextInput
          placeholder="type description"
          style={styles.input}
          onChangeText={d => {
            this.DescriptionCall(d);
          }}
          multiline={true}
          scrollEnabled={true}
        />
        <DatePicker
          style={styles.date}
          mode="date"
          date={this.state.date}
          onDateChange={e => this.setState({date: e})}
        />
        <DatePicker
          style={styles.time}
          mode="time"
          date={this.state.date}
          onDateChange={e => this.setState({time: e})}
        />
        <View style={styles.view}>
          <ButtonComponent onPress={() => this.onPress()} title="Save" />
        </View>
        <View style={styles.view}>
          <ButtonComponent
            onPress={() =>
              RNCalendarEvents.saveEvent('Title of event', {
                id: '150',
                startDate: '2021-10-11T19:26:00.000Z',
                endDate: '2021-10-12T19:26:00.000Z',
                location: 'Los Angeles, CA',
                notes: 'Bring sunglasses',
              })
            }
            title="Event"
          />
        </View>
        <View style={styles.view}>
          <ButtonComponent
            onPress={() => RNCalendarEvents.removeEvent('150')}
            title="remove"
          />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    ADD: (data: any) => dispatch(addList(data)),
  };
};
export default connect(null, mapDispatchToProps)(HomePage);
