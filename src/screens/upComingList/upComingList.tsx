import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {deleteList} from '../../appState/actions/action';
import ButtonComponent from '../../components/ButtonComponent/Button';
import {styles} from './style';

interface upCoimgProps {
  navigation?: any;
  data: any;
  DELETE: any;
}
interface upCoimgState {
  data: any;
}
class UpcomingList extends Component<upCoimgProps, upCoimgState> {
  delete = (id: any) => {
    this.props.DELETE({
      id,
    });
  };
  render() {
    console.log(this.props.data);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.fix}>
              {new Date().getTime() < new Date(item.date).getTime() && (
                <>
                  <View style={styles.show}>
                    <Text style={styles.text}>Title : {item.title}</Text>
                    <Text style={styles.text}>
                      Descrption : {item.description}
                    </Text>
                    <Text style={styles.text}>
                      Date:{item.date.toDateString()}
                    </Text>
                    <Text style={styles.text}>
                      Time:{item.time.toLocaleTimeString('en-US')}
                    </Text>
                  </View>
                  <ButtonComponent
                    onPress={() => this.delete(item.id)}
                    title="delete"
                  />
                  <ButtonComponent
                    onPress={() =>
                      this.props.navigation.navigate('Edit', {
                        title: item.title,
                        description: item.description,
                        date: item.date,
                        time: item.time,
                      })
                    }
                    title="Edit"
                  />
                </>
              )}
            </View>
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: state.lists,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    DELETE: (data: any) => dispatch(deleteList(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpcomingList);
