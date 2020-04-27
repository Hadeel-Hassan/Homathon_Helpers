import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Drawer, Right, Left, Body, ListItem, List, Content, Thumbnail, Button} from 'native-base';
import SideMenu from './SideMenu';

export default class HFeeds extends Component {
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
          content={<SideMenu navigator={this.navigator} history={this.props.history}/>}
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
                    top: -7
                  }}>
                  التحديثات
                </Text>
              </View>
            }
          />
          <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Button transparent>
                  <Text style={{color: 'blue'}}>عرض</Text>
                </Button>
              </Left>
              <Body>
                <Text style={{textAlign: 'right'}}>آخر أخبار وزارة الصحة</Text>
                <Text note numberOfLines={2} style={{textAlign: 'right'}}>هذا المقال يسرد آخر الأخبار  عن وزارة الصحة و إعلاناتها عن احتياجها إلى ممارسين صحيين و توفر وظائف لهم ...</Text>
              </Body>
              <Right><Thumbnail square source={{ uri: 'https://ajel.sa/uploads/material-file/5ea33a42da94d81772231a63/5ea33acfc43c7.jpg' }} />
              </Right>
            </ListItem>
          </List>
        </Content>
        </Drawer>
      </>
    );
  }
}
