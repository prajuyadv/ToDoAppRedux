import React, {Component} from 'react';
import Passedlist from './src/screens/passedList/passedList';
import UpcomingList from './src/screens/upComingList/upComingList';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './src/store';
import TodaysList from './src/screens/todaysList/todaysList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './src/screens/homePage/homePage';
import Edit from './src/screens/edit/edit';
const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="HomePage">
            <Tab.Screen name="HomePage" component={HomePage} />
            <Tab.Screen name="UpcomingList" component={UpcomingList} />
            <Tab.Screen name="PassedList" component={Passedlist} />
            <Tab.Screen name="TodaysList" component={TodaysList} />
            <Tab.Screen name="Edit" component={Edit} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

// import React, { Component } from 'react'
// import {View,StatusBar,TextInput} from 'react-native'
// export default class App extends Component{
//   constructor(){
//     super(props);
//     this.state={
//       text:'',
//     }
//   }

//   textcall(e){
//     this.setState(text:e);
//   }
//   buttonhabdle(){

//   }
//   render(){
//     return(
//       <View>
//         <StatusBar backgroundColor="orange"/>
//         <TextInput
//            placeholder="enter category"
//           style={{ marginHorizontal:8 }}>
//           onChangeText={this.textcall()}
//         />
//         <Button
//         title='submit'
//         onPress={buttonhabdle()}
//       </View>
//     )
//   }
// }
