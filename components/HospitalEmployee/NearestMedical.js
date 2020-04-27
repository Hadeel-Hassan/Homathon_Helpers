import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {Header, Rating, Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faUserNurse,
  faTimes,
  faUserCircle,
  faBriefcase,
  faStethoscope,
  faTools,
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import Carousel from 'react-native-snap-carousel';
import {Button, Drawer} from 'native-base';
import SideMenu from './SideMenu';

export default class NearestMedical extends Component {
  state = {
    nurses: [
      {
        name: 'هديل باعبدالله',
        avatar: {
          uri:
            'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_female-512.png',
        },
        distance: '0.9km',
        rating: 4,
        hospital: 'مستشفى الدكتور سليمان فقيه',
        latitude: 21.5382037,
        longitude: 39.1633495,
      },
      {
        name: 'خالد صالح',
        avatar: {uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        distance: '6.2km',
        rating: 3.5,
        hospital: 'مستشفى الأطباء المتحدون',
        latitude: 21.5620038,
        longitude: 39.1460376,
      },
      {
        name: 'لمى المالكي',
        avatar: {uri: 'https://www.bootdey.com/img/Content/avatar/avatar5.png'},
        distance: '9.4km',
        rating: 3,
        hospital: 'مستشفى الحياة                   ',
        latitude: 21.5086572,
        longitude: 39.1787877,
      },
    ],
    coordinates: [
      {
        latitude: 21.5382037,
        longitude: 39.1633495,
        title: 'هديل باعبدالله',
      },
      {
        latitude: 21.5620038,
        longitude: 39.1460376,
        title: 'خالد صالح',
      },
      {
        latitude: 21.5086572,
        longitude: 39.1787877,
        title: 'لمى المالكي',
      },
    ],
    markers: [],
    didChoose: false,
    isInfoHadeel: false,
    isInfoLama: false,
    isInfoKhaled: false,
  };

  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }

  onCarouselChange(index) {
    let location = this.state.nurses[index];
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.045,
    });
    console.log(index);
    if (index === 0) {
      this.state.markers[1].showCallout();
    } else if (index === 1) {
      this.state.markers[2].showCallout();
    } else {
      this.state.markers[0].showCallout();
    }
  }

  onMarkerPress(location, index) {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.045,
    });

    this._carousel.snapToItem(index);
  }

  viewInfo(name) {
    if (name === 'هديل باعبدالله') {
      this.setState({isInfoHadeel: true});
    } else if (name === 'خالد صالح') {
      this.setState({isInfoKhaled: true});
    } else if (name === 'لمى المالكي') {
      this.setState({isInfoLama: true});
    } else {
      Alert.alert('No Match!', '', [
        {
          text: 'Cancel',
        },
      ]);
    }
  }

  handleSend() {
    Alert.alert('تم إرسال طلبك بنجاح!', 'يمكنك مراقبة الطلب من خلال الضغط على "طلباتي"', [
      {
        text: 'موافق',
      },
      {
        text: 'طلباتي',
      },
    ]);
  }

  renderCarouselItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.distance}>يبعد عنك {item.distance}</Text>
      <View style={styles.infoContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={{top: 25, left: 20}}>
          <Text style={styles.nurseName}>{item.name}</Text>
          <Text style={styles.hospital}>{item.hospital}</Text>
          <Rating
            imageSize={20}
            readonly
            startingValue={item.rating}
            style={styles.rating}
          />
        </View>
      </View>
      {this.state.didChoose ? (
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <Button
          light
          disabled
          style={styles.btnSend}>
          <Text style={styles.sendBtnTxt2}>تم إرسال طلب</Text>
        </Button>
        <Button info style={styles.btnInfo}>
          <Text
            style={styles.infoBtnTxt}
            onPress={() => {
              this.viewInfo(item.name);
            }}>
            عرض معلومات أكثر
          </Text>
        </Button>
      </View>
      ) : (
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <Button
            success
            style={styles.btnSend}
            onPress={() => {
              this.setState({didChoose: true});
              this.handleSend()
            }}>
            <Text style={styles.sendBtnTxt}>إرسال طلب</Text>
          </Button>
          <Button info style={styles.btnInfo}>
            <Text
              style={styles.infoBtnTxt}
              onPress={() => {
                this.viewInfo(item.name);
              }}>
              عرض معلومات أكثر
            </Text>
          </Button>
        </View>
      )}
    </View>
  );

  render() {
    return (
      <React.Fragment>
        <Drawer
          ref={(ref) => {
            this.drawer = ref;
          }}
          content={
            <SideMenu navigator={this.navigator} history={this.props.history} />
          }
          onClose={() => this.closeDrawer()}>
          <StatusBar barStyle="light-content" />
          <Header containerStyle={{height: 60, backgroundColor: '#396276'}}>
            <TouchableOpacity onPress={() => this.openDrawer()}>
              <FontAwesomeIcon
                style={{top: -10}}
                icon={faBars}
                color={'white'}
                size={23}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                color: 'white',
                top: -8,
              }}>
              أقرب ممارس صحي
            </Text>
          </Header>
          <View style={{flex: 1}}>
            <MapView
              ref={(map) => (this._map = map)}
              style={{height: '100%'}}
              initialRegion={{
                latitude: 21.5433,
                longitude: 39.1666,
                latitudeDelta: 0.09,
                longitudeDelta: 0.01,
              }}>
              <Marker
                coordinate={{latitude: 21.5086572, longitude: 39.1787877}}
                title={'لمى المالكي'}
                ref={(ref) => this.state.markers.push(ref)}
                onPress={() =>
                  this.onMarkerPress(this.state.coordinates[2], 2)
                }>
                <View style={{height: 30, width: 30}}>
                  <FontAwesomeIcon icon={faUserNurse} size={30} />
                </View>
              </Marker>
              <Marker
                coordinate={{latitude: 21.5382037, longitude: 39.1633495}}
                title={'هديل باعبدالله'}
                ref={(ref) => this.state.markers.push(ref)}
                onPress={() =>
                  this.onMarkerPress(this.state.coordinates[0], 0)
                }>
                <View style={{height: 30, width: 30}}>
                  <FontAwesomeIcon icon={faUserNurse} size={30} />
                </View>
              </Marker>
              <Marker
                coordinate={{latitude: 21.5620038, longitude: 39.1460376}}
                title={'خالد صالح'}
                ref={(ref) => this.state.markers.push(ref)}
                onPress={() =>
                  this.onMarkerPress(this.state.coordinates[1], 1)
                }>
                <View style={{height: 30, width: 30}}>
                  <FontAwesomeIcon icon={faUserNurse} size={30} />
                </View>
              </Marker>
              <Marker
                coordinate={{latitude: 21.5433, longitude: 39.1666}}
                title={'مستشفى الملك فهد العام'}></Marker>
            </MapView>

            <Modal
              transparent={true}
              animationType="fade"
              visible={this.state.isInfoHadeel}>
              <View
                style={{
                  alignSelf: 'center',
                  height: 490,
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  marginVertical: 130,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  elevation: 20,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 0,
                    marginTop: 15,
                    paddingRight: 15,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({isInfoHadeel: false})}>
                    <FontAwesomeIcon icon={faTimes} size={25} />
                  </TouchableOpacity>
                </View>
                <View style={{alignSelf: 'center', height: 370}}>
                  <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri:
                            'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_female-512.png',
                        }}
                        style={styles.infoAvatar}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            alignSelf: 'flex-end',
                            marginVertical: 15,
                          }}>
                          هديل باعبدالله
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{fontSize: 17, marginRight: 7}}>
                            4.0
                          </Text>
                          <Rating
                            imageSize={20}
                            readonly
                            startingValue={4}
                            style={styles.infoRating}
                          />
                          <Text style={{fontSize: 17, marginLeft: 7}}>
                            (73)
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        top: -5,
                        marginBottom: 10,
                      }}>
                      <Text style={{fontSize: 17}}>0.9km</Text>
                      <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                        يبعد:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginBottom: 15,
                      }}>
                      <TouchableOpacity>
                        <FontAwesomeIcon
                          icon={faPhoneSquareAlt}
                          size={43}
                          style={{marginRight: 25}}
                          color={'#00D084'}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesomeIcon
                          icon={faEnvelopeSquare}
                          size={43}
                          color={'#0693E3'}
                        />
                      </TouchableOpacity>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        هديل حسن باعبدالله
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        الاسم:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        أنثى
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        الجنس:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        جدة
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        المدينة:{' '}
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        11111111
                      </Text>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        تمريض
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        التخصص:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        ممرضة
                      </Text>
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
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        alignSelf: 'flex-end',
                      }}>
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
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        alignSelf: 'flex-end',
                      }}>
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
                        marginTop: 10,
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
                    {this.state.didChoose ? (
                      <Button
                        light
                        disabled
                        style={styles.infoBtnSend}
                        >
                        <Text style={styles.infoBtnSendTxt}>تم إرسال طلب</Text>
                      </Button>
                    ) : (
                      <Button
                        success
                        style={styles.infoBtnSend}
                        onPress={() => {
                          this.setState({didChoose: true});
                          this.handleSend();
                        }}>
                        <Text style={styles.infoBtnSendTxt}>إرسال طلب</Text>
                      </Button>
                    )}
                  </ScrollView>
                </View>
              </View>
            </Modal>

            <Modal
              transparent={true}
              animationType="fade"
              visible={this.state.isInfoLama}>
              <View
                style={{
                  alignSelf: 'center',
                  height: 490,
                  width: '87%',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  marginVertical: 130,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  elevation: 20,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 0,
                    marginTop: 15,
                    paddingRight: 15,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({isInfoLama: false})}>
                    <FontAwesomeIcon icon={faTimes} size={25} />
                  </TouchableOpacity>
                </View>
                <View style={{alignSelf: 'center', height: 370}}>
                  <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri:
                            'https://www.bootdey.com/img/Content/avatar/avatar5.png',
                        }}
                        style={styles.infoAvatar}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            alignSelf: 'flex-end',
                            marginVertical: 15,
                          }}>
                          لمى المالكي
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{fontSize: 17, marginRight: 7}}>
                            3.0
                          </Text>
                          <Rating
                            imageSize={20}
                            readonly
                            startingValue={3}
                            style={styles.infoRating}
                          />
                          <Text style={{fontSize: 17, marginLeft: 7}}>(4)</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        top: -5,
                        marginBottom: 10,
                      }}>
                      <Text style={{fontSize: 17}}>9.4km</Text>
                      <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                        يبعد:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginBottom: 15,
                      }}>
                      <TouchableOpacity>
                        <FontAwesomeIcon
                          icon={faPhoneSquareAlt}
                          size={43}
                          style={{marginRight: 25}}
                          color={'#00D084'}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesomeIcon
                          icon={faEnvelopeSquare}
                          size={43}
                          color={'#0693E3'}
                        />
                      </TouchableOpacity>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        لمى فهد المالكي
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        الاسم:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        أنثى
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        الجنس:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        جدة
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        المدينة:{' '}
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        11111111
                      </Text>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        طب طوارئ
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        التخصص:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        أخصائي طب طوارئ
                      </Text>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>9</Text>
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
                      <Text style={{fontSize: 18}}>2011-2016</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                      }}>
                      مستشفى الأطباء المتحدون
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        alignSelf: 'flex-end',
                      }}>
                      أخصائي طب طوارئ
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
                      <Text style={{fontSize: 18}}>2017-2020</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                      }}>
                      مستشفى الحياة
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        alignSelf: 'flex-end',
                      }}>
                      أخصائي طب طوارئ
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
                        marginTop: 10,
                        marginBottom: 4,
                      }}>
                      <Text style={{fontSize: 18}}>2015</Text>
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
                    {this.state.didChoose ? (
                      <Button
                        light
                        disabled
                        style={styles.infoBtnSend}
                        >
                        <Text style={styles.infoBtnSendTxt}>تم إرسال طلب</Text>
                      </Button>
                    ) : (
                      <Button
                        success
                        style={styles.infoBtnSend}
                        onPress={() => {
                          this.setState({didChoose: true});
                          this.handleSend();
                        }}>
                        <Text style={styles.infoBtnSendTxt}>إرسال طلب</Text>
                      </Button>
                    )}
                  </ScrollView>
                </View>
              </View>
            </Modal>

            <Modal
              transparent={true}
              animationType="fade"
              visible={this.state.isInfoKhaled}>
              <View
                style={{
                  alignSelf: 'center',
                  height: 490,
                  width: '87%',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  marginVertical: 130,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  elevation: 20,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 0,
                    marginTop: 15,
                    paddingRight: 15,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({isInfoKhaled: false})}>
                    <FontAwesomeIcon icon={faTimes} size={25} />
                  </TouchableOpacity>
                </View>
                <View style={{alignSelf: 'center', height: 370}}>
                  <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri:
                            'https://www.bootdey.com/img/Content/avatar/avatar6.png',
                        }}
                        style={styles.infoAvatar}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            alignSelf: 'flex-end',
                            marginVertical: 15,
                          }}>
                          خالد صالح
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{fontSize: 17, marginRight: 7}}>
                            3.5
                          </Text>
                          <Rating
                            imageSize={20}
                            readonly
                            startingValue={3.5}
                            style={styles.infoRating}
                          />
                          <Text style={{fontSize: 17, marginLeft: 7}}>
                            (11)
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        top: -5,
                        marginBottom: 10,
                      }}>
                      <Text style={{fontSize: 17}}>6.2km</Text>
                      <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                        يبعد:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginBottom: 15,
                      }}>
                      <TouchableOpacity>
                        <FontAwesomeIcon
                          icon={faPhoneSquareAlt}
                          size={43}
                          style={{marginRight: 25}}
                          color={'#00D084'}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesomeIcon
                          icon={faEnvelopeSquare}
                          size={43}
                          color={'#0693E3'}
                        />
                      </TouchableOpacity>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        خالد صالح العتيبي
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        الاسم:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        ذكر
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        الجنس:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        جدة
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        المدينة:{' '}
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        11111111
                      </Text>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        مختبرات طبية
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        التخصص:{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 30,
                        marginVertical: 10,
                      }}>
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>
                        أخصائي مختبر
                      </Text>
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
                      <Text style={{fontSize: 17, marginHorizontal: 7}}>1</Text>
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
                      <Text style={{fontSize: 18}}>2019-2020</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                      }}>
                      مستشفى الأطباء المتحدون
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        alignSelf: 'flex-end',
                      }}>
                      أخصائي مختبر
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
                        marginTop: 10,
                        marginBottom: 4,
                      }}>
                      <Text style={{fontSize: 18}}>2018</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 17,
                        marginRight: 40,
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                        marginBottom: 10,
                      }}>
                      ندوة سلامة المرضى (PATIENT SAFETY SYMPOSIUM)
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
                    {this.state.didChoose ? (
                      <Button
                        light
                        disabled
                        style={styles.infoBtnSend}
                        >
                        <Text style={styles.infoBtnSendTxt}>تم إرسال طلب</Text>
                      </Button>
                    ) : (
                      <Button
                        success
                        style={styles.infoBtnSend}
                        onPress={() => {
                          this.setState({didChoose: true});
                          this.handleSend();
                        }}>
                        <Text style={styles.infoBtnSendTxt}>إرسال طلب</Text>
                      </Button>
                    )}
                  </ScrollView>
                </View>
              </View>
            </Modal>

            <View style={{position: 'absolute'}}>
              <View style={styles.topCarousel}>
                <Text style={styles.topCarouselTxt}>
                  يوجد 3 ممارس صحي بالقرب منك
                </Text>
              </View>
              <Carousel
                ref={(c) => {
                  this._carousel = c;
                }}
                data={this.state.nurses}
                renderItem={this.renderCarouselItem}
                sliderWidth={410}
                itemWidth={350}
                containerCustomStyle={styles.CarouselStyle}
                onSnapToItem={(index) => {
                  this.onCarouselChange(index);
                }}
              />
            </View>
          </View>
        </Drawer>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  topCarousel: {
    top: 335,
    height: 20,
    position: 'absolute',
    height: 45,
    width: '95%',
    // backgroundColor: '#366672',
    backgroundColor: 'rgba(1,1,1,0.8)',
    borderRadius: 10,
    alignSelf: 'center',
  },
  topCarouselTxt: {
    alignSelf: 'center',
    fontSize: 20,
    top: 6,
    color: 'white',
  },
  CarouselStyle: {
    top: '95%',
    height: 200,
  },
  itemContainer: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 20,
    height: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    top: 20,
    marginHorizontal: 10,
  },
  nurseName: {
    fontSize: 23,
    marginRight: 20,
  },
  hospital: {
    fontSize: 17,
    marginRight: 25,
    color: '#aaa',
  },
  rating: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 5,
  },
  distance: {
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingRight: 24,
    fontSize: 26,
    color: 'white',
    backgroundColor: 'rgb(50,115,111)',
    paddingBottom: 5,
    marginBottom: -15,
  },
  btnSend: {
    width: 100,
    alignSelf: 'flex-end',
    marginRight: 10,
    height: 40,
    top: 13,
  },
  btnInfo: {
    width: 125,
    alignSelf: 'flex-end',
    marginRight: 10,
    height: 40,
    top: 13,
  },
  sendBtnTxt: {
    marginHorizontal: '17%',
    color: 'white',
    fontSize: 15,
  },
  sendBtnTxt2: {
    marginHorizontal: '9%',
    color: 'white',
    fontSize: 15,
  },
  infoBtnTxt: {
    marginHorizontal: '7%',
    color: 'white',
    fontSize: 15,
  },
  infoRating: {
    alignSelf: 'center',
  },
  infoAvatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginRight: 40,
    marginLeft: 15,
  },
  infoBtnSend: {
    width: 250,
    alignSelf: 'center',
    marginRight: 10,
    height: 40,
    top: 13,
    marginBottom: 18,
  },
  infoBtnSendTxt: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 17,
    marginLeft: '37%',
  },
});
