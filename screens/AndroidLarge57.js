import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge57 = () => {
  return (
    <View style={styles.androidLarge57}>
      <View style={styles.androidLarge57Child} />
      <View style={styles.mingcutebatteryFillParent}>
        <Image
          style={styles.mingcutebatteryFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutebatteryfill.png")}
        />
        <Image
          style={[styles.mingcutewifiLineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mingcutewifiline.png")}
        />
        <Image
          style={[styles.ggsignalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ggsignal.png")}
        />
        <Text style={[styles.am, styles.amTypo]}>9:30 am</Text>
      </View>
      <View style={styles.androidLarge57Item} />
      <Text style={[styles.typesOfPreposition, styles.amTypo]}>
        1.2.1. Types of Preposition
      </Text>
      <View style={styles.androidLarge57Inner} />
      <Text style={[styles.xp, styles.amTypo]}>+ 26 XP</Text>
      <View style={styles.rectangleView} />
      <Text style={styles.score}>Score</Text>
      <Text style={[styles.xp1, styles.xp1Typo]}>+8 XP</Text>
      <View style={styles.androidLarge57Child1} />
      <Text style={[styles.continue, styles.xp1Typo]}>Continue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  amTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  xp1Typo: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge57Child: {
    backgroundColor: Color.colorDeepskyblue,
    width: 360,
    height: 68,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mingcutebatteryFillIcon: {
    left: 314,
    width: 20,
    height: 20,
    top: 2,
    position: "absolute",
    overflow: "hidden",
  },
  mingcutewifiLineIcon: {
    left: 283,
    top: 2,
  },
  ggsignalIcon: {
    left: 256,
    top: 0,
  },
  am: {
    top: 6,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  mingcutebatteryFillParent: {
    left: 13,
    width: 334,
    height: 26,
    top: 0,
    position: "absolute",
  },
  androidLarge57Item: {
    top: 96,
    left: 40,
    backgroundColor: Color.colorWhite,
    width: 277,
    height: 323,
    position: "absolute",
  },
  typesOfPreposition: {
    top: 125,
    left: 79,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  androidLarge57Inner: {
    top: 201,
    left: 84,
    backgroundColor: Color.colorDarkorange,
    width: 192,
    height: 54,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  xp: {
    top: 216,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    left: 146,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  rectangleView: {
    top: 287,
    left: 76,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    width: 210,
    height: 44,
    position: "absolute",
  },
  score: {
    top: 302,
    fontSize: FontSize.size_xs,
    left: 92,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  xp1: {
    top: 301,
    left: 229,
    color: Color.colorForestgreen,
  },
  androidLarge57Child1: {
    top: 647,
    backgroundColor: Color.colorMediumseagreen,
    width: 164,
    height: 35,
    left: 92,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  continue: {
    top: 657,
    color: Color.colorDarkslategray_100,
    left: 146,
  },
  androidLarge57: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge57;
