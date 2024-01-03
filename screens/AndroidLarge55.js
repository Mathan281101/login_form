import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AndroidLarge55 = () => {
  return (
    <View style={styles.androidLarge55}>
      <View style={styles.androidLarge55Child} />
      <View style={styles.mingcutebatteryFillParent}>
        <Image
          style={styles.mingcutebatteryFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutebatteryfill.png")}
        />
        <Image
          style={[styles.mingcutewifiLineIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/mingcutewifiline.png")}
        />
        <Image
          style={[styles.ggsignalIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ggsignal.png")}
        />
        <Text style={[styles.am, styles.amFlexBox]}>9:30 am</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text
        style={[styles.grammerVocabulary, styles.amFlexBox]}
      >{`Grammer& Vocabulary > Prepositions`}</Text>
      <View style={[styles.androidLarge55Item, styles.androidLayout]} />
      <Text style={[styles.typesOfPrepositions, styles.amFlexBox]}>
        Types of Prepositions
      </Text>
      <Text style={[styles.prepositionsHelpUs, styles.prepositionsHelpUsTypo]}>
        Prepositions help us to imagine a scene with greater accuracy. Choosing
        the right preposition
      </Text>
      <View
        style={[styles.androidLarge55Inner, styles.rectangleIconPosition]}
      />
      <Image
        style={[
          styles.cc0c34c35405b8b2c6ae7b5e9cbae9Icon,
          styles.rectangleLineargradientPosition,
        ]}
        contentFit="cover"
        source={require("../assets/3cc0c34c35405b8b2c6ae7b5e9cbae9b-11.png")}
      />
      <LinearGradient
        style={[
          styles.rectangleLineargradient,
          styles.rectangleLineargradientPosition,
        ]}
        locations={[0, 1]}
        colors={["#f6faff", "rgba(246, 250, 255, 0)"]}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Text
        style={[styles.aPropositionPhrase, styles.prepositionsHelpUsTypo]}
      >{`A Proposition Phrase is a phrase which connects the preposition to the noun or `}</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.androidLarge55Child1, styles.rectangleViewLayout]} />
      <Text style={[styles.check, styles.amFlexBox]}>Check</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-561.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>/</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textTypo]}>2</Text>
      <Text style={[styles.text3, styles.amFlexBox]}>.</Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  amFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLayout: {
    width: 305,
    left: 28,
  },
  prepositionsHelpUsTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 329,
    position: "absolute",
  },
  rectangleLineargradientPosition: {
    height: 93,
    top: 216,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 35,
    width: 131,
    left: 115,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupItemLayout: {
    height: 5,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  androidLarge55Child: {
    width: 360,
    height: 68,
    backgroundColor: Color.colorDeepskyblue,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mingcutebatteryFillIcon: {
    width: 20,
    height: 20,
    left: 314,
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
    width: 24,
  },
  am: {
    top: 6,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    left: 0,
  },
  mingcutebatteryFillParent: {
    top: 1,
    left: 13,
    width: 334,
    height: 26,
    position: "absolute",
  },
  vectorIcon: {
    height: "2%",
    width: "5%",
    top: "4.25%",
    right: "87.78%",
    bottom: "93.75%",
    left: "7.22%",
  },
  grammerVocabulary: {
    top: 74,
    left: 23,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
  },
  androidLarge55Item: {
    top: 112,
    height: 197,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  typesOfPrepositions: {
    top: 132,
    left: 34,
    fontSize: FontSize.size_mini,
    width: 183,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  prepositionsHelpUs: {
    top: 157,
    width: 289,
    fontSize: FontSize.size_xs,
    left: 33,
  },
  androidLarge55Inner: {
    height: 358,
    width: 305,
    left: 28,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  cc0c34c35405b8b2c6ae7b5e9cbae9Icon: {
    width: 300,
    left: 33,
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    width: 305,
    left: 28,
  },
  vectorIcon1: {
    height: "3.75%",
    width: "8.33%",
    top: "25.13%",
    right: "46.67%",
    bottom: "71.13%",
    left: "45%",
  },
  aPropositionPhrase: {
    top: 354,
    left: 48,
    fontSize: FontSize.size_lg,
    width: 266,
  },
  rectangleView: {
    top: 437,
    borderColor: Color.colorDeepskyblue,
    borderWidth: 1,
    borderStyle: "solid",
  },
  androidLarge55Child1: {
    top: 493,
    backgroundColor: Color.colorMediumseagreen,
  },
  check: {
    top: 503,
    left: 164,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  rectangleIcon: {
    left: 294,
    width: 39,
    height: 33,
  },
  text: {
    top: 336,
    left: 314,
  },
  text1: {
    top: 342,
    left: 319,
  },
  text2: {
    top: 331,
    left: 308,
  },
  text3: {
    top: 452,
    left: 252,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    fontSize: FontSize.size_xs,
  },
  groupChild: {
    top: -1,
    left: -1,
    borderColor: Color.colorWhite,
    width: 238,
    height: 7,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupItem: {
    width: 64,
    borderRadius: Border.br_8xs,
    height: 5,
    backgroundColor: Color.colorDeepskyblue,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    top: 42,
    left: 65,
    width: 236,
  },
  groupIcon: {
    height: "2.29%",
    width: "5.08%",
    top: "4.75%",
    right: "5.19%",
    bottom: "92.96%",
    left: "89.72%",
  },
  androidLarge55: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge55;
