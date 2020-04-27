import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Content} from 'native-base';
import {Avatar, Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPowerOff,
  faMapMarkerAlt,
  faHospital,
  faCog,
  faHeadset,
  faIdBadge,
  faCarAlt,
} from '@fortawesome/free-solid-svg-icons';

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
                'https://incubatesoft.com/wp-content/uploads/2018/05/avatar2.png',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            Ahmed Yasser
          </Text>
          <Text
            style={{
              color: '#ddd',
              fontSize: 19,
              marginTop: 4,
              alignSelf: 'center',
            }}>
            a.h1992@hotmail.com
          </Text>
        </Content>
        <TouchableOpacity
          style={{
            height: 80,
            width: '100%',
          }}
          onPress={()=>this.props.history.push('/hhome')}>
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
            backgroundColor: '#eee',
            height: 1,
            width: '90%',
            alignSelf: 'center',
          }}
        />
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
          onPress={()=>this.props.history.push('/editprofH')}>
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
          onPress={()=>this.props.history.push('/findP')}>
          <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                alignSelf: 'center',
                left: '100%',
                marginLeft: -10,
              }}>
              ابحث عن ممارس صحي
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
          onPress={()=>this.props.history.push('/myreqh')}>
          <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                alignSelf: 'center',
                left: '100%',
                marginLeft: 110
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
          }}
        />
        <TouchableOpacity
          style={{
            height: 80,
            width: '100%',
          }}
          onPress={()=>this.props.history.push('/edithospital')}>
          <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                alignSelf: 'center',
                left: '100%',
                marginLeft: 20,
              }}>
              معلومات المستشفى
            </Text>
            <FontAwesomeIcon
              icon={faHospital}
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
            marginBottom: 15,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 60, marginRight: 150}}>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faCog}
                size={30}
              />
              <Text style={{marginTop: 4, marginLeft: -6}}>الإعدادات</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faHeadset}
                size={30}
              />
              <Text style={{marginTop: 4}}>الدعم</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    );
  }
}
