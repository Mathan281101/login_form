import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge54 = () => {
  return (
    <View style={styles.androidLarge54}>
      <View style={styles.androidLarge54Child} />
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
        <Text style={[styles.am, styles.amTypo]}>9:30 am</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text
        style={[styles.grammerVocabulary, styles.amTypo]}
      >{`Grammer& Vocabulary > Prepositions`}</Text>
      <View style={[styles.androidLarge54Item, styles.androidLayout]} />
      <Text style={[styles.typesOfPrepositions, styles.amTypo]}>
        Types of Prepositions
      </Text>
      <Text style={[styles.prepositionsHelpUs, styles.theDogJumpedTypo]}>
        Prepositions help us to imagine a scene with greater accuracy. Choosing
        the right preposition
      </Text>
      <View
        style={[styles.androidLarge54Inner, styles.rectangleIconPosition]}
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
      <Text style={styles.whatIsThe}>
        What is the preposition in the following sentence?
      </Text>
      <Text style={[styles.theDogJumped, styles.theDogJumpedTypo]}>
        The dog jumped through the fence with skill
      </Text>
      <View style={[styles.rectangleView, styles.androidChildLayout]} />
      <View style={[styles.androidLarge54Child1, styles.androidChildLayout]} />
      <View style={[styles.androidLarge54Child2, styles.androidChildLayout]} />
      <View style={[styles.androidLarge54Child3, styles.androidChildLayout]} />
      <Text style={[styles.through, styles.dogTypo]}>Through</Text>
      <Text style={[styles.dog, styles.dogTypo]}>Dog</Text>
      <Text style={[styles.jumped, styles.dogTypo]}>Jumped</Text>
      <Text style={[styles.fence, styles.dogTypo]}>Fence</Text>
      <View style={[styles.androidLarge54Child4, styles.androidChildLayout]} />
      <Text style={styles.chooseAnAnswer}>Choose an answer</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-5621.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>/</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupChild, styles.childBorder]} />
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
  amTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
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
  theDogJumpedTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 330,
    position: "absolute",
  },
  rectangleLineargradientPosition: {
    height: 93,
    top: 217,
    position: "absolute",
  },
  androidChildLayout: {
    height: 35,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  dogTypo: {
    fontFamily: FontFamily.nunitoSans12ptRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
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
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  androidLarge54Child: {
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
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
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
    top: 75,
    left: 23,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  androidLarge54Item: {
    top: 113,
    height: 197,
    backgroundColor: Color.colorWhite,
    width: 305,
    borderRadius: Border.br_8xs,
    left: 28,
    position: "absolute",
  },
  typesOfPrepositions: {
    top: 133,
    left: 34,
    fontSize: FontSize.size_mini,
    width: 183,
  },
  prepositionsHelpUs: {
    top: 158,
    width: 289,
    left: 33,
  },
  androidLarge54Inner: {
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
    top: 217,
  },
  vectorIcon1: {
    height: "8.75%",
    width: "19.44%",
    top: "23.25%",
    right: "41.11%",
    bottom: "68%",
    left: "39.44%",
  },
  whatIsThe: {
    top: 355,
    fontSize: FontSize.size_lg,
    width: 266,
    left: 48,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  theDogJumped: {
    top: 413,
    width: 240,
    left: 48,
  },
  rectangleView: {
    top: 464,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
    left: 48,
  },
  androidLarge54Child1: {
    top: 518,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
    left: 48,
  },
  androidLarge54Child2: {
    top: 567,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
    left: 48,
  },
  androidLarge54Child3: {
    top: 616,
    left: 45,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
  },
  through: {
    top: 473,
    left: 146,
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  dog: {
    top: 527,
    left: 146,
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  jumped: {
    top: 576,
    left: 146,
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  fence: {
    top: 625,
    left: 149,
  },
  androidLarge54Child4: {
    top: 733,
    left: 106,
    backgroundColor: Color.colorMediumseagreen,
    width: 164,
  },
  chooseAnAnswer: {
    top: 743,
    left: 136,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleIcon: {
    left: 294,
    width: 39,
    height: 33,
  },
  text: {
    top: 337,
    left: 314,
  },
  text1: {
    top: 343,
    left: 319,
  },
  text2: {
    top: 332,
    left: 308,
  },
  groupChild: {
    top: -1,
    left: -1,
    borderColor: Color.colorWhite,
    width: 238,
    height: 7,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupItem: {
    width: 40,
    borderRadius: Border.br_8xs,
    height: 5,
    backgroundColor: Color.colorDeepskyblue,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    top: 45,
    left: 57,
    width: 236,
  },
  groupIcon: {
    height: "2.42%",
    width: "5.39%",
    top: "4.68%",
    right: "4.78%",
    bottom: "92.9%",
    left: "89.83%",
  },
  androidLarge54: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge54;
