import React, {Component} from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
import {request, PERMISSIONS, RESULTS, openSettings} from 'react-native-permissions';
import {OS} from '../../utils';

export default class PermissionPage extends Component {
  state = {
    allPermission: false,
  };

  componentDidMount() {
    this.CheckPermission();
  }

  CheckPermission = async () => {
    if (OS === 'ios') {
      const IOSLocation = request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      const IOSCamera = request(PERMISSIONS.IOS.CAMERA);
      const res = await Promise.all([IOSLocation, IOSCamera]);

      const permissions = res.reduce((previous, current) => {
        console.warn('current', current);
        let result = false;
        switch (current) {
          case RESULTS.UNAVAILABLE:
            result = false;
            break;
          case RESULTS.DENIED:
            result = false;
            break;
          case RESULTS.GRANTED:
            result = true;
            break;
          case RESULTS.BLOCKED:
            result = false;
            break;

          default:
            result = false;
            break;
        }
        return previous && result;
      }, true);
      this.setState({allPermission: permissions});
    } else {
      const androidLocation = request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      const androidCamera = request(PERMISSIONS.ANDROID.CAMERA);
      const res = await Promise.all([androidLocation, androidCamera]);
      const permissions = res.reduce((previous, current) => {
        let result = false;
        switch (current) {
          case RESULTS.UNAVAILABLE:
            result = false;
            break;
          case RESULTS.DENIED:
            result = false;
            break;
          case RESULTS.GRANTED:
            result = true;
            break;
          case RESULTS.BLOCKED:
            result = false;
            break;

          default:
            result = false;
            break;
        }
        return previous && result;
      }, true);
      this.setState({allPermission: permissions});
    }
  };

  providePermission = async () => {
    await openSettings();
  };

  render() {
    const {allPermission} = this.state;
    if (allPermission) {
      return (
        <SafeAreaView>
          <Text>All Permission GRANTED</Text>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView>
        <Text> textInComponent </Text>
        <Button title="Provide Permission" onPress={this.providePermission} />
      </SafeAreaView>
    );
  }
}
