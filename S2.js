import { NativeModules } from 'react-native';
import Long from 'long';
class S2 {

  getNeighbours(latitude, longitude) {
    return NativeModules.S2.getNeighbours(latitude, longitude)
      .then(id => id.split(',').map(s => Long.fromString(s, true)));
  }

  getChildren(latitude, longitude) {
    return NativeModules.S2.getChildren(latitude, longitude)
      .then(response => {
        return response;
      })
      .then(children => children.split(';').map(s => {
        const center = s.split(',');
        return {
          latitude: parseFloat(center[0]),
          longitude: parseFloat(center[1]),
        };
      }))
      .then(children => {
        return children;
      });
  }
}

export default new S2();
