import { NativeModules } from "react-native";

const { RNVideoPlayer } = NativeModules;

module.exports = {

  showVideoPlayer(url) {
    return RNVideoPlayer.showVideoPlayer(url);
  }
};
