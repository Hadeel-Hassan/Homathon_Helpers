import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Content} from 'native-base';
import {Avatar, Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faMapMarkerAlt,
  faCarAlt,
  faCog,
  faHeadset,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import {faIdBadge} from '@fortawesome/free-regular-svg-icons';

export default class SideMenu extends Component {
  render() {
    return (
      <Content style={{backgroundColor: 'white'}}>
        <Content style={{height: 180, backgroundColor: '#396276'}}>
          <TouchableOpacity onPress={() => this.props.history.push('/')}>
            <FontAwesomeIcon
              icon={faPowerOff}
              size={23}
              style={{marginTop: 15, marginLeft: 15}}
              color={'white'}
            />
          </TouchableOpacity>
          <Avatar
            rounded
            size="large"
            containerStyle={{
              marginLeft: 15,
              marginTop: -12,
              marginRight: 20,
              alignSelf: 'center',
            }}
            source={{
              uri:
                'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_female-512.png',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            هديل حسن
          </Text>
          <Text
            style={{
              color: '#ddd',
              fontSize: 19,
              marginTop: 4,
              alignSelf: 'center',
            }}>
            hadeel_hasan@gmail.com
          </Text>
        </Content>
        <TouchableOpacity
          style={{
            height: 80,
            width: '100%',
          }}
          onPress={() => this.props.history.push('/phome')}>
          <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                alignSelf: 'center',
                left: '100%',
                marginLeft: 40,
              }}>
              الصفحة الرئيسية
            </Text>
            <FontAwesomeIcon
              icon={faHome}
              size={25}
              style={{alignSelf: 'center', left: '100%'}}
            />
          </View>
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: '#ddd',
            height: 1,
            width: '90%',
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={{
            height: 80,
            width: '100%',
          }}
          onPress={() => this.props.history.push('/editprofP')}>
          <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                alignSelf: 'center',
                left: '100%',
                marginLeft: 3,
              }}>
              تعديل الملف الشخصي
            </Text>
            <FontAwesomeIcon
              icon={faIdBadge}
              size={27}
              style={{alignSelf: 'center', left: '100%'}}
            />
          </View>
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: '#ddd',
            height: 1,
            width: '90%',
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={{
            height: 80,
            width: '100%',
          }}
          onPress={() => this.props.history.push('/findH')}>
          <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                alignSelf: 'center',
                left: '100%',
                marginLeft: 10,
              }}>
              ابحث عن فرصة عمل
            </Text>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size={25}
              style={{alignSelf: 'center', left: '100%'}}
            />
          </View>
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: '#ddd',
            height: 1,
            width: '90%',
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={{
            height: 80,
            width: '100%',
          }}
          onPress={() => this.props.history.push('/myreqp')}>
          <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                alignSelf: 'center',
                left: '100%',
                marginLeft: 110,
              }}>
              طلباتي
            </Text>
            <FontAwesomeIcon
              icon={faCarAlt}
              size={25}
              style={{alignSelf: 'center', left: '100%'}}
            />
          </View>
        </TouchableOpacity>

        <Divider
          style={{
            backgroundColor: '#ddd',
            height: 1,
            width: '90%',
            alignSelf: 'center',
            marginBottom: 90,
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 60, marginRight: 150}}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faCog} size={30} />
              <Text style={{marginTop: 4, marginLeft: -6}}>الإعدادات</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faHeadset} size={30} />
              <Text style={{marginTop: 4}}>الدعم</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    );
  }
}
