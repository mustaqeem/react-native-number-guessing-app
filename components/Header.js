import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../constants/colors";

const Header = props => {

  // fetch('https://cbort.free.beeceptor.com/', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     hello: 'OK'
  //   })
  // }).then((res) => {
  //   console.log(res);
  // }).then().catch((error) => {
  //   console.error(error);
  // });

  // navigator.geolocation.watchPosition(
  //   (position) => {
  //     console.log('success', position);
  //   },
  //   (error) => {
  //     console.error('error', error);
  //   }
  // );
  // navigator.geolocation.getCurrentPosition(
  //   position => {
  //     console.log('position', position);
  //   },
  //   error => {
  //     console.error('position', error);
  //   }
  // );

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "black",
    fontSize: 18
  }
});

export default Header;
