import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Property1Component2 from "../components/Property1Component2";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AndroidLarge56 = () => {
  return (
    <View style={styles.androidLarge56}>
      <View style={[styles.androidLarge56Child, styles.groupItemPosition]} />
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
      <View style={[styles.androidLarge56Item, styles.androidLayout]} />
      <Text style={[styles.typesOfPrepositions, styles.amTypo]}>
        Types of Prepositions
      </Text>
      <Text style={[styles.prepositionsHelpUs, styles.whatIsTheTypo]}>
        Prepositions help us to imagine a scene with greater accuracy. Choosing
        the right preposition
      </Text>
      <View
        style={[styles.androidLarge56Inner, styles.rectangleIconPosition]}
      />
      <Image
        style={styles.cc0c34c35405b8b2c6ae7b5e9cbae9Icon}
        contentFit="cover"
        source={require("../assets/3cc0c34c35405b8b2c6ae7b5e9cbae9b-11.png")}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["#f6faff", "rgba(246, 250, 255, 0)"]}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Text style={[styles.whatIsThe, styles.whatIsTheTypo]}>
        What is the preposition in the following sentence?
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-561.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>/</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Text style={[styles.theDogJumped, styles.amTypo]}>
        The dog jumped through the fence with skill
      </Text>
      <Image
        style={[styles.androidLarge56Child1, styles.rectangleViewPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <LinearGradient
        style={[styles.dogWrapper, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#08b3f1", "#159ed0"]}
      >
        <Text style={[styles.dog, styles.dogTypo]}>Dog</Text>
      </LinearGradient>
      <LinearGradient
        style={[styles.jumpedWrapper, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#08b3f1", "#159ed0"]}
      >
        <Text style={[styles.jumped, styles.dogTypo]}>Jumped</Text>
      </LinearGradient>
      <LinearGradient
        style={[styles.fenceWrapper, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#08b3f1", "#159ed0"]}
      >
        <Text style={[styles.fence, styles.dogTypo]}>Fence</Text>
      </LinearGradient>
      <Property1Component2
        actionText="Through"
        property1Component2Position="absolute"
        property1Component2Top={562}
        property1Component2Left={95}
        property1Component2Height={71}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.chooseAnAnswer, styles.amTypo]}>
        choose an answer
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    backgroundColor: Color.colorDeepskyblue,
    left: 0,
    top: 0,
  },
  iconLayout1: {
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLayout: {
    width: 305,
    left: 28,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  whatIsTheTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 329,
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
  rectangleViewPosition: {
    width: 164,
    left: 95,
    position: "absolute",
  },
  wrapperLayout: {
    height: 71,
    width: 71,
    backgroundColor: "transparent",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  dogTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge56Child: {
    width: 360,
    height: 68,
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
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
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
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  androidLarge56Item: {
    top: 112,
    height: 197,
    position: "absolute",
  },
  typesOfPrepositions: {
    top: 132,
    left: 34,
    fontSize: FontSize.size_mini,
    width: 183,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  prepositionsHelpUs: {
    top: 157,
    width: 289,
    fontSize: FontSize.size_xs,
    left: 33,
    fontFamily: FontFamily.notoSansRegular,
  },
  androidLarge56Inner: {
    height: 410,
    width: 305,
    left: 28,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  cc0c34c35405b8b2c6ae7b5e9cbae9Icon: {
    width: 300,
    height: 93,
    top: 216,
    left: 33,
    position: "absolute",
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    height: 93,
    top: 216,
    width: 305,
    left: 28,
    position: "absolute",
  },
  vectorIcon1: {
    height: "8.75%",
    width: "19.44%",
    top: "23.13%",
    right: "41.11%",
    bottom: "68.13%",
    left: "39.44%",
  },
  whatIsThe: {
    top: 354,
    left: 48,
    fontSize: FontSize.size_lg,
    width: 266,
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
  groupChild: {
    top: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 238,
    height: 7,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupItem: {
    width: 123,
    borderRadius: Border.br_8xs,
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
    height: "2.42%",
    width: "5.39%",
    top: "4.68%",
    right: "5.06%",
    bottom: "92.9%",
    left: "89.56%",
  },
  theDogJumped: {
    top: 416,
    left: 53,
    color: "#777",
    width: 240,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  androidLarge56Child1: {
    top: 461,
    height: 86,
  },
  dog: {
    left: 22,
    top: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dogWrapper: {
    top: 562,
    left: 188,
    width: 71,
  },
  jumped: {
    left: 12,
    top: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  jumpedWrapper: {
    top: 641,
    left: 96,
  },
  fence: {
    top: 26,
    left: 17,
  },
  fenceWrapper: {
    top: 642,
    left: 188,
    width: 71,
  },
  rectangleView: {
    top: 748,
    backgroundColor: Color.colorMediumseagreen,
    height: 35,
    borderRadius: Border.br_8xs,
  },
  chooseAnAnswer: {
    top: 754,
    left: 131,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  androidLarge56: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge56;
