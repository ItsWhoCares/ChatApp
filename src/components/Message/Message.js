import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { myColors } from "../../../colors";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: isMyMessage()
            ? myColors.PrimaryMessage
            : myColors.SecondaryMessage,
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}>
      <Text style={styles.text}>{message.text}</Text>
      {/* <Text style={styles.time}>
        {dayjs(message.createdAt).hour() +
          ":" +
          dayjs(message.createdAt).minute()}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    //shadow
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  text: {
    color: "white",
  },
  time: {
    color: myColors.subTitle,
    alignSelf: "flex-end",
  },
});
export default Message;
