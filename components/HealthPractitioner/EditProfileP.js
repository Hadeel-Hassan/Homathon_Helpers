import React, {Component} from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {Header, Avatar, Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit} from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faUserCircle,
  faBriefcase,
  faStethoscope,
  faTools,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {Drawer} from 'native-base';
import SideMenu from './SideMenu';

export default class EditProfile extends Component {
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
                  ملفي الشخصي
                </Text>
              </View>
            }
            rightComponent={
              <TouchableOpacity onPress={() => this.openDrawer()}>
                <FontAwesomeIcon
                  style={{top: -10}}
                  icon={faEdit}
                  color={'white'}
                  size={25}
                />
              </TouchableOpacity>
            }
          />
          <ScrollView style={{flex: 1}}>
            <Avatar
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_female-512.png',
              }}
              rounded
              size="xlarge"
              containerStyle={{alignSelf: 'center', marginTop: 16}}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                color: 'black',
                marginVertical: 10,
              }}>
              هديل حسن
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
                width: '100%',
                marginTop: 5,
                height: 30,
                backgroundColor: '#eee',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#aaa',
                  flex: 1,
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginBottom: 1,
                  marginRight: 10,
                }}>
                المعلومات الشخصية
              </Text>
              <FontAwesomeIcon
                icon={faUserCircle}
                size={20}
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginBottom: 7,
                }}
                color={'#aaa'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>هديل حسن باعبدالله</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>الاسم: </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>أنثى</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>الجنس: </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 3,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>
                1111111111
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                رقم الهوية:{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>جدة</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>المدينة: </Text>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 5,
                height: 30,
                backgroundColor: '#eee',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#aaa',
                  flex: 1,
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginBottom: 1,
                  marginRight: 10,
                }}>
                معلومات التواصل
              </Text>
              <FontAwesomeIcon
                icon={faPhone}
                size={17}
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginBottom: 7,
                }}
                color={'#aaa'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginBottom: 10,
                marginTop: 15,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>
                hadeel.hasan@gmail.com
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                البريد الإلكتروني:{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 3,
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>
                (+995) 510000000
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                رقم الجوال:{' '}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 5,
                height: 30,
                backgroundColor: '#eee',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#aaa',
                  flex: 1,
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginBottom: 1,
                  marginRight: 10,
                }}>
                المعلومات الوظيفية
              </Text>
              <FontAwesomeIcon
                icon={faBriefcase}
                size={20}
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginBottom: 7,
                }}
                color={'#aaa'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>11111111</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                رقم التصنيف:{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 3,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>تمريض</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>التخصص: </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>ممرضة</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                المسمى الوظيفي:{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 17, marginHorizontal: 7}}>3</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                سنوات الخبرة:{' '}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 5,
                height: 30,
                backgroundColor: '#eee',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#aaa',
                  flex: 1,
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginBottom: 1,
                  marginRight: 10,
                }}>
                الخبرات
              </Text>
              <FontAwesomeIcon
                icon={faStethoscope}
                size={20}
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginBottom: 7,
                }}
                color={'#aaa'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginTop: 10,
                marginBottom: 4,
              }}>
              <Text style={{fontSize: 18}}>2017-2018</Text>
            </View>
            <Text
              style={{
                fontSize: 17,
                marginRight: 40,
                fontWeight: 'bold',
                alignSelf: 'flex-end',
              }}>
              مستشفى الدكتور بخش
            </Text>
            <Text
              style={{fontSize: 17, marginRight: 40, alignSelf: 'flex-end'}}>
              ممرضة
            </Text>
            <Divider
              style={{
                backgroundColor: '#ddd',
                height: 1,
                width: '80%',
                alignSelf: 'center',
                marginVertical: 5,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginTop: 10,
                marginBottom: 4,
              }}>
              <Text style={{fontSize: 18}}>2018-2020</Text>
            </View>
            <Text
              style={{
                fontSize: 17,
                marginRight: 40,
                fontWeight: 'bold',
                alignSelf: 'flex-end',
              }}>
              مستشفى الدكتور سليمان فقيه
            </Text>
            <Text
              style={{fontSize: 17, marginRight: 40, alignSelf: 'flex-end'}}>
              ممرضة
            </Text>
            <Divider
              style={{
                backgroundColor: '#ddd',
                height: 1,
                width: '80%',
                alignSelf: 'center',
                marginVertical: 5,
              }}
            />
            <View
              style={{
                width: '100%',
                marginTop: 5,
                height: 30,
                backgroundColor: '#eee',
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#aaa',
                  flex: 1,
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginBottom: 1,
                  marginRight: 10,
                }}>
                الدورات
              </Text>
              <FontAwesomeIcon
                icon={faTools}
                size={20}
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginBottom: 7,
                }}
                color={'#aaa'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                // marginTop: 5,
                marginBottom: 4,
              }}>
              <Text style={{fontSize: 18}}>2017</Text>
            </View>
            <Text
              style={{
                fontSize: 17,
                marginRight: 40,
                fontWeight: 'bold',
                alignSelf: 'flex-end',
                marginBottom: 10,
              }}>
              دورة الإنعاش القلبي الرئوي (CPR)
            </Text>
            <Divider
              style={{
                backgroundColor: '#ddd',
                height: 1,
                width: '80%',
                alignSelf: 'center',
                marginVertical: 5,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 30,
                marginTop: 10,
                marginBottom: 4,
              }}>
              <Text style={{fontSize: 18}}>2019</Text>
            </View>
            <Text
              style={{
                fontSize: 17,
                marginRight: 40,
                fontWeight: 'bold',
                alignSelf: 'flex-end',
                marginBottom: 10,
              }}>
              دورة تمريض الطوارئ والحالات الحرجة (ENP)
            </Text>
            <Divider
              style={{
                backgroundColor: '#ddd',
                height: 1,
                width: '80%',
                alignSelf: 'center',
                marginVertical: 5,
              }}
            />
          </ScrollView>
        </Drawer>
      </>
    );
  }
}
