import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { myColors } from "../../../colors";
import { useFonts, Rubik_400Regular } from "@expo-google-fonts/rubik";
import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, rules = {}, placeholder }) => {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <View style={[styles.container, error ? styles.container_error : {}]}>
            <TextInput
              style={styles.text}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              secureTextEntry={placeholder === "Password" ? true : false}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "error"}
            </Text>
          )}
        </>
      )}
      rules={rules}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.input,
    width: "100%",
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  container_error: {
    borderWidth: 1,
    borderColor: "red",
  },

  text: {
    fontSize: 15,
    // fontFamily: "Rubik_400Regular",
  },
});

export default CustomInput;