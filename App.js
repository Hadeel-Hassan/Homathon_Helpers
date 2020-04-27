import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import HFeeds from './components/HospitalEmployee/HFeeds';
import NearestMedical from './components/HospitalEmployee/NearestMedical';
import EditHospitalInfo from './components/HospitalEmployee/EditHospitalInfo';
import PFeeds from './components/HealthPractitioner/PFeeds';
import EditProfileP from './components/HealthPractitioner/EditProfileP';
import EditProfileH from './components/HospitalEmployee/EditProfileH';
import NearestHospital from './components/HealthPractitioner/NearestHospital';
import LandingPage from './components/LandingPage';
import MyRequestsP from './components/HealthPractitioner/MyRequestsP';
import MyRequestsH from './components/HospitalEmployee/MyRequestsH';
import SignUp from './components/SignUp';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <NativeRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/hhome" component={HFeeds} />
            <Route exact path="/findP" component={NearestMedical} />
            <Route exact path="/findH" component={NearestHospital} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/editprofH" component={EditProfileH} />
            <Route exact path="/editprofP" component={EditProfileP} />
            <Route exact path="/edithospital" component={EditHospitalInfo} />
            <Route exact path="/phome" component={PFeeds} />
            <Route exact path="/myreqh" component={MyRequestsH} />
            <Route exact path="/myreqp" component={MyRequestsP} />
          </Switch>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
});

