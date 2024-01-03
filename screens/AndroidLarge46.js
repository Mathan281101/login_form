import * as React from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AndroidLarge46 = () => {
  return (
    <View style={styles.androidLarge46}>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#08b3f1", "#066c92"]}
        />
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      </View>
      <View style={styles.orParent}>
        <Text style={[styles.or, styles.textTypo]}>OR</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text
          style={[styles.alreadyHaveAn, styles.logInTypo]}
        >{`Already have an Account? `}</Text>
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </View>
      <View style={styles.androidLarge46Child} />
      <Text style={[styles.phone, styles.nameClr]}>Phone</Text>
      <Text style={[styles.password, styles.nameClr]}>Password</Text>
      <View style={[styles.androidLarge46Item, styles.androidLayout]} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <View style={[styles.androidLarge46Inner, styles.androidLayout]} />
      <Text style={[styles.eMail, styles.nameTypo]}>E-mail</Text>
      <Text style={[styles.register, styles.signUpTypo]}>Register</Text>
      <Text style={[styles.createYourNew, styles.nameTypo]}>
        Create your new account
      </Text>
      <Text style={[styles.bySigningUpContainer, styles.logInTypo]}>
        <Text style={styles.bySigningUp}>By signing up you agree to our</Text>
        <Text style={styles.text}>
          <Text style={styles.textTypo}>{` `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textTypo}>
            <Text style={styles.termsConditions2}>{`Terms & Conditions`}</Text>
          </Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.text3}>{` `}</Text>
        </Text>
        <Text style={styles.text3}>
          <Text style={styles.and1}>and</Text>
        </Text>
        <Text style={[styles.text4, styles.textTypo]}>{` `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>
          <Text style={styles.termsConditions2}>Privacy Policy</Text>
        </Text>
      </Text>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-19.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-20.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-426.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  signUpTypo: {
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 1,
    width: 121,
    borderTopWidth: 1,
    borderColor: Color.colorDarkorange,
    borderStyle: "solid",
    top: 15,
    position: "absolute",
  },
  logInTypo: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nameClr: {
    color: Color.colorDarkslategray_200,
    left: 45,
    fontSize: FontSize.size_xs,
  },
  androidLayout: {
    left: 29,
    height: 46,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    width: 300,
    position: "absolute",
  },
  nameTypo: {
    fontFamily: FontFamily.nunitoSans12ptRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 32,
    height: 32,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  signUp: {
    top: 10,
    left: 111,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  rectangleParent: {
    top: 587,
    left: 30,
    width: 300,
  },
  or: {
    left: 130,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 169,
  },
  groupInner: {
    left: 0,
  },
  orParent: {
    top: 654,
    left: 36,
    width: 289,
    height: 30,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  logIn: {
    left: 161,
    opacity: 0.75,
    color: Color.colorDarkorange,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    top: 0,
  },
  alreadyHaveAnAccountParent: {
    top: 752,
    left: 82,
    width: 196,
    height: 18,
    position: "absolute",
  },
  androidLarge46Child: {
    top: 389,
    height: 46,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    width: 300,
    left: 30,
    position: "absolute",
  },
  phone: {
    top: 403,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: 459,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge46Item: {
    top: 277,
  },
  name: {
    top: 291,
    color: Color.colorDarkslategray_200,
    left: 45,
    fontSize: FontSize.size_xs,
  },
  androidLarge46Inner: {
    top: 333,
  },
  eMail: {
    top: 347,
    color: Color.colorDarkslategray_200,
    left: 45,
    fontSize: FontSize.size_xs,
  },
  register: {
    top: 180,
    left: 116,
    fontSize: 30,
    fontFamily: FontFamily.nunitoSans12ptBold,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  createYourNew: {
    top: 210,
    left: 66,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_100,
  },
  bySigningUp: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray_100,
  },
  text: {
    color: Color.colorDarkorange,
  },
  termsConditions2: {
    textDecoration: "underline",
  },
  text3: {
    fontFamily: FontFamily.poppinsRegular,
  },
  and1: {
    color: Color.colorDarkslategray_100,
  },
  text4: {
    color: Color.colorDarkorange,
  },
  bySigningUpContainer: {
    top: 511,
    left: 25,
    textAlign: "center",
    width: 311,
  },
  groupIcon: {
    left: 0,
  },
  groupChild1: {
    left: 62,
  },
  groupChild2: {
    left: 124,
  },
  groupParent: {
    top: 691,
    left: 102,
    width: 156,
    height: 32,
    position: "absolute",
  },
  vectorIcon: {
    top: -119,
    width: 360,
    height: 310,
    left: 0,
    position: "absolute",
  },
  androidLarge46: {
    borderRadius: 25,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge46;
