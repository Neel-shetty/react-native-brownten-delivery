import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import SignUpScreen from "../../../screens/Auth/SignUpScreen";
import { SaveKey } from "../../../utils/SecureStorage";
import { setLoggedIn } from "../../../store/UserSlice";
import { SignInApi } from "../../../api/AuthenticateUser";

const InputFields = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  const formScheme = yup.object({
    phone: yup
      .string()
      .length(10, "Invalid Phone Number")
      .required("Phone Number is Required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password has to be atleast 8 characters"),
  });

  const goToSignUp = () => {
    //@ts-expect-error
    navigation.navigate(SignUpScreen.name);
  };

  return (
    <View>
      <Formik
        initialValues={{ phone: "", password: "" }}
        onSubmit={async (values) => {
          setLoading(true);
          const result = await SignInApi({
            password: values.password,
            phone: values.phone,
          });
          if (result?.status === 1) {
            Alert.alert("Success", result.message);
            await SaveKey("isLoggedIn", "true");
            await SaveKey("id", JSON.stringify(result.data.id));
            dispatch(setLoggedIn(true));
          }
          if (result?.response?.data?.status === 0) {
            Alert.alert("Failed", result.response.data.message);
          }
          setLoading(false);
        }}
        validationSchema={formScheme}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <KeyboardAvoidingView behavior={behavior}>
            <CustomInput
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              placeholder="Phone Number"
            />
            {errors.phone && touched.phone && <></>}
            <CustomInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
            />
            {errors.password && touched.password && <></>}
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({});
