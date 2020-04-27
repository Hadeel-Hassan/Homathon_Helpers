import React, {Component} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import {Picker} from 'native-base';
import {Button, Input} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faLock,
  faArrowAltCircleRight,
  faIdBadge,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import {faHospital} from '@fortawesome/free-regular-svg-icons';

export default class SignUp extends Component {
  state = {
    selected: 'key1',
    isP: false,
    isH: false,
  };

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return this.state.isP ? (
      <>
        <View style={{width: '85%', alignSelf: 'center', marginVertical: 20}}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => this.setState({isH: false, isP: false})}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size={35} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Input
            placeholder="البريد الإلكتروني"
            rightIcon={<FontAwesomeIcon icon={faEnvelope} size={17} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            labelStyle={{
              marginLeft: 50,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder="كلمة المرور"
            rightIcon={<FontAwesomeIcon icon={faLock} size={17} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder=" تأكيد كلمة المرور"
            rightIcon={<FontAwesomeIcon icon={faLock} size={17} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder="رقم التصنيف الوظيفي"
            rightIcon={<FontAwesomeIcon icon={faIdBadge} size={23} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder="رقم الهوية الوطنية"
            rightIcon={<FontAwesomeIcon icon={faIdCard} size={23} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginRight: 70,
            }}>
            <View style={{width: 100}}>
              <Picker
                note
                mode="dropdown"
                textStyle={{alignSelf: 'center', textAlign: 'center'}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="ذكر" value="key0" />
                <Picker.Item label="أنثى" value="key1" />
              </Picker>
            </View>
            <Text style={{alignSelf: 'center', fontSize: 20}}>الجنس</Text>
          </View>
          <Button
            title="إنشاء حساب"
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginVertical: 10,
            }}
            titleStyle={{fontSize: 19}}
            onPress={() => this.handleSignIn()}
          />
        </View>
      </>
    ) : this.state.isH ? (
      <>
        <View style={{width: '85%', alignSelf: 'center', marginVertical: 20}}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => this.setState({isH: false, isP: false})}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size={35} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Input
            placeholder="البريد الإلكتروني"
            rightIcon={<FontAwesomeIcon icon={faEnvelope} size={17} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            labelStyle={{
              marginLeft: 50,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder="كلمة المرور"
            rightIcon={<FontAwesomeIcon icon={faLock} size={17} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder=" تأكيد كلمة المرور"
            rightIcon={<FontAwesomeIcon icon={faLock} size={17} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder="رقم التصنيف الوظيفي"
            rightIcon={<FontAwesomeIcon icon={faIdBadge} size={23} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder="رقم الهوية الوطنية"
            rightIcon={<FontAwesomeIcon icon={faIdCard} size={23} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <Input
            placeholder="اسم المستشفى"
            rightIcon={<FontAwesomeIcon icon={faHospital} size={23} />}
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            rightIconContainerStyle={{marginRight: 10}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginRight: 70,
            }}>
            <View style={{width: 100}}>
              <Picker
                note
                mode="dropdown"
                textStyle={{alignSelf: 'center', textAlign: 'center'}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="ذكر" value="key0" />
                <Picker.Item label="أنثى" value="key1" />
              </Picker>
            </View>
            <Text style={{alignSelf: 'center', fontSize: 20}}>الجنس</Text>
          </View>
          <Button
            title="إنشاء حساب"
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginVertical: 10,
            }}
            titleStyle={{fontSize: 19}}
            onPress={() => this.handleSignIn()}
          />
        </View>
      </>
    ) : (
      <>
        <View style={{width: '85%', alignSelf: 'center', marginVertical: 20}}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => this.props.history.push('/')}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size={35} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, alignSelf: 'center', marginBottom: 20}}>
            هل أنت
          </Text>
          <Button
            title="ممارس صحي يبحث عن عمل"
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginVertical: 10,
            }}
            titleStyle={{fontSize: 23}}
            buttonStyle={{height: 150}}
            onPress={() => this.setState({isP: true})}
          />
          <Button
            title="ممارس صحي يحتاج ممارس صحي آخر"
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginVertical: 10,
            }}
            titleStyle={{fontSize: 23}}
            buttonStyle={{height: 150}}
            onPress={() => this.setState({isH: true})}
          />
        </View>
      </>
    );
  }
}
