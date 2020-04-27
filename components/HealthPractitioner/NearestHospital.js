import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Header, Rating, Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Table, Row, Rows} from 'react-native-table-component';
import {
  faBars,
  faTimes,
  faUserCircle,
  faBriefcase,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faHospital,
  faUserClock,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import Carousel from 'react-native-snap-carousel';
import {Button, Drawer} from 'native-base';
import SideMenu from './SideMenu';

export default class NearestHospital extends Component {
  state = {
    nurses: [
      {
        name: 'مستشفى الملك فهد العام',
        avatar: {
          uri: 'https://i.ibb.co/0GW3581/hospital.png',
        },
        distance: '0.9km',
        rating: 4,
        latitude: 21.5382037,
        longitude: 39.1633495,
      },
    ],
    tableHead: ['ساعات العمل', 'أيام العمل'],
    tableData: [['الأحد - الأربعاء', '5:00pm - 11:30pm']],
    markers: [],
    didChoose: false,
    isInfo: false,
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

  viewInfo() {
    this.setState({isInfo: true});
  }

  handleSend() {
    Alert.alert(
      'تم إرسال طلبك بنجاح!',
      'بمجرد قبول طلبك من قبل المستشفى يمكنك مراقبة الطلب من خلال الضغط على "طلباتي"',
      [
        {
          text: 'موافق',
        },
      ],
    );
  }
  renderCarouselItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.distance}>طلب لممارس صحي{item.distance}</Text>
      <View style={styles.infoContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={{top: 25, left: 20}}>
          <Text style={styles.nurseName}>{item.name}</Text>
        </View>
      </View>
      {this.state.didChoose ? (
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <Button light disabled style={styles.btnSend}>
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
              this.handleSend();
            }}>
            <Text style={styles.sendBtnTxt}>إرسال طلب عمل</Text>
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
                coordinate={{latitude: 21.5433, longitude: 39.1666}}
                title={'مستشفى الملك فهد العام'}>
                <View style={{height: 30, width: 30}}>
                  <FontAwesomeIcon icon={faHospital} size={30} />
                </View>
              </Marker>
            </MapView>

            <Modal
              transparent={true}
              animationType="fade"
              visible={this.state.isInfo}>
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
                    onPress={() => this.setState({isInfo: false})}>
                    <FontAwesomeIcon icon={faTimes} size={25} />
                  </TouchableOpacity>
                </View>
                <View style={{alignSelf: 'center', height: 370}}>
                  <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri: 'https://i.ibb.co/0GW3581/hospital.png',
                        }}
                        style={styles.infoAvatar}
                      />
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: 'bold',
                          alignSelf: 'center',
                        }}>
                        مستشفى الملك فهد العام
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        top: -20,
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
                        المعلومات الشخصية لعارض الطلب
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
                        Ahmed Yasser
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
                        المعلومات الوظيفية لعارض الطلب
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
                        ممرض
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        المسمى الوظيفي:{' '}
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
                        أوقات و ساعات العمل المطلوبة
                      </Text>
                      <FontAwesomeIcon
                        icon={faUserClock}
                        size={23}
                        style={{
                          flex: 1,
                          alignSelf: 'flex-end',
                          marginRight: 20,
                          marginBottom: 5,
                        }}
                        color={'#aaa'}
                      />
                    </View>
                    <View style={{marginVertical: 20}}>
                      <Table
                        borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row
                          data={this.state.tableHead}
                          style={{height: 40, backgroundColor: '#f1f8ff'}}
                          textStyle={{margin: 6, alignSelf: 'center'}}
                        />
                        <Rows
                          data={this.state.tableData}
                          textStyle={{margin: 6, alignSelf: 'center'}}
                        />
                      </Table>
                    </View>
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
                        المبلغ المستحق
                      </Text>
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        size={23}
                        style={{
                          flex: 1,
                          alignSelf: 'flex-end',
                          marginRight: 20,
                          marginBottom: 5,
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
                        30 ريال
                      </Text>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        سعر الساعة:{' '}
                      </Text>
                    </View>
                    {this.state.didChoose ? (
                      <Button
                        light
                        disabled
                        style={styles.infoBtnSend}
                        >
                        <Text style={styles.infoBtnSendTxt}>تم إرسال طلب عمل</Text>
                      </Button>
                    ) : (
                      <Button
                        success
                        style={styles.infoBtnSend}
                        onPress={() => {
                          this.setState({didChoose: true});
                          this.handleSend();
                        }}>
                        <Text style={styles.infoBtnSendTxt}>إرسال طلب عمل</Text>
                      </Button>
                    )}
                  </ScrollView>
                </View>
              </View>
            </Modal>

            <View style={{position: 'absolute'}}>
              <View style={styles.topCarousel}>
                <Text style={styles.topCarouselTxt}>
                  يوجد 1 طلب لمستشفى بالقرب منك
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
    marginRight: 25,
    top: 20,
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
    width: 110,
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
    marginHorizontal: '9.5%',
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
    marginLeft: '30%',
  },
});
