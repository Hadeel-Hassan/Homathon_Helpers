import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TextInput,
} from 'react-native';
import {Header, Avatar, Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faMapMarkedAlt,
  faCalendarWeek,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import {Drawer, Picker} from 'native-base';
import {SelectMultipleButton} from 'react-native-selectmultiple-button';
import SideMenu from './SideMenu';

export default class EditHospitalInfo extends Component {
  state = {
    houres: {},
    multipleData: [
      'الأربعاء',
      'الثلاثاء',
      'الإثنين',
      'الأحد',
      'السبت',
      'الجمعة',
      'الخميس',
    ],
    multipleSelectedData: [],
    selected: "key1"
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  _singleTapMultipleSelectedButtons(interest) {
    if (this.state.multipleSelectedData.includes(interest)) {
      _.remove(this.state.multipleSelectedData, (ele) => {
        return ele === interest;
      });
    } else {
      this.state.multipleSelectedData.push(interest);
    }

    this.setState({
      multipleSelectedData: this.state.multipleSelectedData,
    });
  }

  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }
  render() {
    return (
      <>
        <Drawer
          ref={(ref) => {
            this.drawer = ref;
          }}
          content={
            <SideMenu navigator={this.navigator} history={this.props.history} />
          }
          onClose={() => this.closeDrawer()}>
          <Header
            containerStyle={{height: 60, backgroundColor: '#396276'}}
            leftComponent={
              <TouchableOpacity onPress={() => this.openDrawer()}>
                <FontAwesomeIcon
                  style={{top: -10}}
                  icon={faBars}
                  color={'white'}
                  size={23}
                />
              </TouchableOpacity>
            }
            centerComponent={
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 23,
                    top: -7,
                  }}>
                  معلومات المستشفى
                </Text>
              </View>
            }
          />
          <ScrollView style={{flex: 1}}>
            <Avatar
              source={{
                uri: 'https://i.ibb.co/0GW3581/hospital.png',
              }}
              rounded
              size="xlarge"
              containerStyle={{alignSelf: 'center', marginTop: 16}}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                color: '#aaa',
                marginVertical: 10,
              }}>
              مستشفى الملك فهد العام
            </Text>
            <Divider
              style={{
                backgroundColor: '#eee',
                height: 1,
                width: '90%',
                alignSelf: 'center',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 50,
                marginVertical: 20,
              }}>
              <Text style={{fontSize: 20, marginHorizontal: 20}}>جدة</Text>
              <FontAwesomeIcon icon={faMapMarkedAlt} size={23} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 50,
                marginVertical: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  alignSelf: 'flex-start',
                  top: -3,
                  marginLeft: 20,
                }}>
                <Button
                  title="حفظ التغييرات"
                  onPress={() =>
                    Alert.alert('تم حفظ التغييرات بنجاح!', '', [
                      {
                        text: 'إغلاق',
                      },
                    ])
                  }
                />
              </View>
              <Text style={{fontSize: 20, marginRight: 20, fontWeight: 'bold'}}>
                أيام العمل:
              </Text>
              <FontAwesomeIcon icon={faCalendarWeek} size={23} />
            </View>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                width: '80%',
              }}>
              {this.state.multipleData.map((interest) => (
                <SelectMultipleButton
                  key={interest}
                  buttonViewStyle={{
                    borderRadius: 10,
                    height: 40,
                  }}
                  textStyle={{
                    fontSize: 15,
                  }}
                  highLightStyle={{
                    borderColor: 'gray',
                    backgroundColor: 'transparent',
                    textColor: 'gray',
                    borderTintColor: 'blue',
                    backgroundTintColor: 'blue',
                    textTintColor: 'white',
                  }}
                  value={interest}
                  selected={this.state.multipleSelectedData.includes(interest)}
                  singleTap={(valueTap) =>
                    this._singleTapMultipleSelectedButtons(interest)
                  }
                />
              ))}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 50,
                marginVertical: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  alignSelf: 'flex-start',
                  top: -3,
                  marginLeft: 20,
                }}>
                <Button
                  title="حفظ التغييرات"
                  onPress={() =>
                    Alert.alert('تم حفظ التغييرات بنجاح!', '', [
                      {
                        text: 'إغلاق',
                      },
                    ])
                  }
                />
              </View>
              <Text style={{fontSize: 20, marginRight: 20, fontWeight: 'bold'}}>
                ساعات العمل:
              </Text>
              <FontAwesomeIcon icon={faClock} size={23} />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 30}}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 20 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="AM" value="key0" />
              <Picker.Item label="PM" value="key1" />
            </Picker>
            <TextInput
                keyboardType="number-pad"
                defaultValue={'5'}
                style={{
                  alignSelf: 'center',
                  borderWidth: 0.5,
                  borderColor: '#aaa',
                  textAlign: 'center',
                  fontSize: 21,
                  paddingHorizontal: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 20,
                  alignSelf: 'center',
                }}>
                إلى
              </Text>
              <TextInput
                keyboardType="number-pad"
                defaultValue={'5'}
                style={{
                  alignSelf: 'center',
                  borderWidth: 0.5,
                  borderColor: '#aaa',
                  textAlign: 'center',
                  fontSize: 21,
                  paddingHorizontal: 15,
                }}
              /><Picker
              note
              mode="dropdown"
              style={{ width: 20 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="AM" value="key0" />
              <Picker.Item label="PM" value="key1" />
            </Picker>
            </View>
          </ScrollView>
        </Drawer>
      </>
    );
  }
}
