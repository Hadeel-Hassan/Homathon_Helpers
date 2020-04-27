import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {Thumbnail} from 'native-base';
import {Button, Input} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
export default class LandingPage extends Component {
  state = {
    signin: false,
    email: '',
    password: '',
  };

  handleSignIn() {
    if (this.state.email === 'hadeel.hasan@gmail.com') {
      this.props.history.push('/phome');
    } else if (this.state.email === 'a.h1992@hotmail.com') {
      this.props.history.push('/hhome');
    }
  }

  handleSignUp(){
    this.props.history.push('/signup');
  }

  render() {
    return this.state.signin ? (
      <>
        <View
          style={{
            height: 400,
            width: 400,
            alignSelf: 'center',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: 'https://i.ibb.co/RQvRwbG/logo.png'}}
            style={{
              height: 220,
              width: 170,
              alignSelf: 'center',
              marginBottom: 40,
            }}
          />
          <View style={{}}>
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
              onChangeText={(em) => this.setState({email: em})}
            />
            <Input
              placeholder="كلمة المرور"
              rightIcon={<FontAwesomeIcon icon={faLock} size={17} />}
              containerStyle={{
                width: 300,
                alignSelf: 'center',
                marginBottom: 10,
              }}
              rightIconContainerStyle={{marginRight: 10}}
              onChangeText={(ps) => this.setState({password: ps})}
            />
            <Button
              title="تسجيل الدخول"
              containerStyle={{
                width: 300,
                alignSelf: 'center',
                marginVertical: 10,
              }}
              titleStyle={{fontSize: 19}}
              onPress={() => this.handleSignIn()}
            />
          </View>
        </View>
      </>
    ) : (
      <>
        <View
          style={{
            height: 400,
            width: 400,
            alignSelf: 'center',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: 'https://i.ibb.co/RQvRwbG/logo.png'}}
            style={{
              height: 220,
              width: 170,
              alignSelf: 'center',
              marginBottom: 40,
            }}
          />
          <Button
            title="تسجيل الدخول"
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginVertical: 10,
            }}
            titleStyle={{fontSize: 19}}
            onPress={() => this.setState({signin: true})}
          />
          <Button
            title="إنشاء حساب"
            containerStyle={{
              width: 300,
              alignSelf: 'center',
              marginVertical: 10,
            }}
            titleStyle={{fontSize: 19}}
            onPress={()=>this.handleSignUp()}
          />
        </View>
      </>
    );
  }
}
