import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import ButtonComponent from '../../components/ButtonComponent/Button';
import {Component} from 'react';
import {editList} from '../../appState/actions/action';
interface EditProps {
  navigation?: any;
  style: string;
  onPress: any;
  ADD: any;
  route: any;
  EDIT: any;
}
interface EditState {
  noteTitle: string;
  noteDescription: string;
  date: any;
  time: any;
  id: any;
}
class Edit extends Component<EditProps, EditState> {
  constructor(props: EditProps) {
    super(props);
    this.state = {
      id: this.props.route.params.id,
      noteTitle: this.props.route.params.title,
      noteDescription: this.props.route.params.description,
      date: new Date(this.props.route.params.date),
      time: new Date(this.props.route.params.time),
    };
  }
  titleCall = (e: any) => {
    this.setState({noteTitle: e});
  };
  DescriptionCall = (e: any) => {
    this.setState({noteDescription: e});
  };
  edit() {
    this.props.EDIT({
      id: this.state.id,
      title: this.state.noteTitle,
      description: this.state.noteDescription,
      date: this.state.date,
      time: this.state.time,
    });
  }
  render() {
    console.log(this.props.route.params.title);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ToDoApp</Text>
        <TextInput
          placeholder="enter title"
          style={styles.input}
          value={this.state.noteTitle}
          onChangeText={e => {
            this.titleCall(e);
          }}
        />
        <TextInput
          placeholder="type description"
          value={this.state.noteDescription}
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
          <ButtonComponent onPress={() => this.edit()} title="save" />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    EDIT: (data: any) => dispatch(editList(data)),
  };
};
export default connect(null, mapDispatchToProps)(Edit);
