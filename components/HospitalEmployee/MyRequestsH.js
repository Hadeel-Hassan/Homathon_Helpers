import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Button} from 'react-native';
import {Header, Rating} from 'react-native-elements';
import {
  Drawer,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Tabs,
  Tab,
  Container,
} from 'native-base';
import {Header as HeaderB} from 'native-base';
import SideMenu from './SideMenu';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default class MyRequestsH extends Component {
  state = {
    chosenColor1: '#507384',
    chosenColor2: '#396276',
    previous: true,
  };

  handleTab1() {
    this.setState({chosenColor1: '#507384', chosenColor2: '#396276', previous: true});
  }

  handleTab2() {
    this.setState({chosenColor2: '#507384', chosenColor1: '#396276', previous: false});
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
                  طلباتي
                </Text>
              </View>
            }
          />
          <View
            style={{
              width: '100%',

              height: 40,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                borderRightWidth: 0.4,
                backgroundColor: this.state.chosenColor1,
                borderColor: '#aaa',
              }}
              onPress={() => this.handleTab1()}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  alignSelf: 'center',
                  top: 6,
                }}>
                طلباتي السابقة
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: '50%', backgroundColor: this.state.chosenColor2}}
              onPress={() => this.handleTab2()}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  alignSelf: 'center',
                  top: 6,
                }}>
                طلباتي الحالية
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.previous ? (
            <ScrollView>
              <Card style={{marginTop: 30, width: '93%', alignSelf: 'center'}}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRquACobM-bZbkUbitd6Cj28zIV2kgC55PcHEtY1Od4_F2Tlpzl&usqp=CAU',
                    }}
                    style={{height: 200, width: '100%', flex: 1}}
                  />
                </CardItem>
                <CardItem>
                  <Left style={{marginRight: -30}}>
                    <Thumbnail
                      source={{
                        uri:
                          'https://www.bootdey.com/img/Content/avatar/avatar7.png',
                      }}
                    />
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        4/11/2019 22:02
                      </Text>
                      <Text
                        style={{
                          color: '#aaa',
                          alignSelf: 'flex-start',
                          fontSize: 15,
                        }}>
                        ممرض
                      </Text>
                    </View>
                  </Left>
                  <Body></Body>
                  <Right>
                    <Text style={{fontSize: 17}}>عمر قاضي</Text>
                    <Rating startingValue={5} imageSize={20} />
                  </Right>
                </CardItem>
              </Card>
              <Card
                style={{
                  marginTop: 30,
                  width: '93%',
                  alignSelf: 'center',
                  marginBottom: 30,
                }}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRquACobM-bZbkUbitd6Cj28zIV2kgC55PcHEtY1Od4_F2Tlpzl&usqp=CAU',
                    }}
                    style={{height: 200, width: '100%', flex: 1}}
                  />
                </CardItem>
                <CardItem>
                  <Left style={{marginRight: -30}}>
                    <Thumbnail
                      source={{
                        uri:
                          'https://www.bootdey.com/img/Content/avatar/avatar7.png',
                      }}
                    />
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        18/01/2019 14:13
                      </Text>
                      <Text
                        style={{
                          color: '#aaa',
                          alignSelf: 'flex-start',
                          fontSize: 15,
                        }}>
                        ممرض
                      </Text>
                    </View>
                  </Left>
                  <Body></Body>
                  <Right>
                    <Text style={{fontSize: 17}}>فيصل الزهراني</Text>
                    <Rating startingValue={4} imageSize={20} />
                  </Right>
                </CardItem>
              </Card>
            </ScrollView>
          ) : (
            <ScrollView>
              <Card style={{marginTop: 30, width: '93%', alignSelf: 'center'}}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRquACobM-bZbkUbitd6Cj28zIV2kgC55PcHEtY1Od4_F2Tlpzl&usqp=CAU',
                    }}
                    style={{height: 200, width: '100%', flex: 1}}
                  />
                </CardItem>
                <CardItem>
                  <Left style={{marginRight: -20}}>
                    <Thumbnail
                      source={{
                        uri:
                          'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_female-512.png',
                      }}
                      style={{marginRight: 10}}
                    />
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        الطلب جاري
                      </Text>
                      <Text
                        style={{
                          color: '#aaa',
                          alignSelf: 'flex-start',
                          fontSize: 15,
                        }}>
                        ممرضة
                      </Text>
                    </View>
                  </Left>
                  <Body></Body>
                  <Right>
                    <Text style={{fontSize: 17, marginBottom: 10}}>هديل باعبدالله</Text>
                    <Button title="متابعة الطلب"/>
                  </Right>
                </CardItem>
              </Card>
            </ScrollView>
          )}
        </Drawer>
      </>
    );
  }
}
