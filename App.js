// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
  Button,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import SignIn from "./src/screens/SignIn/SignIn";
import SignUp from "./src/screens/SignUp/SignUp";
import Input from "react-native-input-style";
import ConfirmEmail from "./src/screens/ConfirmEmail";
import Navigation from "./src/components/Navigation";
import { myColors } from "./colors";

import { useFonts } from "expo-font";
import { Rubik_800ExtraBold } from "@expo-google-fonts/rubik";

import * as NavigationBar from "expo-navigation-bar";

import { Amplify, Auth, graphqlOperation, API } from "aws-amplify";
import { getUser } from "./src/graphql/queries";
import { createUser, deleteUser } from "./src/graphql/mutations";

import { syncUser } from "./dbhelper";

import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

const App = () => {
  // Auth.signOut();

  // const [fontsLoaded] = useFonts({
  //   rr: Rubik_800ExtraBold,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  useEffect(() => {
    syncUser();
  }, []);
  NavigationBar.setBackgroundColorAsync("black");
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: myColors.pbgc,
  },
});

export default App;
