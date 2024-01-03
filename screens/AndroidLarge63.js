import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge63 = () => {
  return (
    <View style={styles.androidLarge63}>
      <View style={[styles.androidLarge63Child, styles.groupItemPosition]} />
      <View style={styles.mingcutebatteryFillParent}>
        <Image
          style={styles.mingcutebatteryFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutebatteryfill2.png")}
        />
        <Image
          style={[styles.mingcutewifiLineIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/mingcutewifiline2.png")}
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
      <View style={[styles.androidLarge63Item, styles.androidLayout]} />
      <Text style={[styles.typesOfPrepositions, styles.amTypo]}>
        Types of Prepositions
      </Text>
      <Text style={[styles.prepositionsHelpUs, styles.theDogJumpedTypo]}>
        Prepositions help us to imagine a scene with greater accuracy. Choosing
        the right preposition
      </Text>
      <View style={[styles.androidLarge63Inner, styles.androidLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={styles.whatIsThe}>
        What is the preposition in the following sentence?
      </Text>
      <Text style={[styles.theDogJumped, styles.theDogJumpedTypo]}>
        The dog jumped through the fence with skill
      </Text>
      <View style={[styles.rectangleView, styles.androidChildLayout1]} />
      <View style={[styles.androidLarge63Child1, styles.androidChildLayout1]} />
      <View style={[styles.androidLarge63Child2, styles.androidChildLayout1]} />
      <View style={[styles.androidLarge63Child3, styles.androidChildLayout1]} />
      <Text style={[styles.through, styles.dogTypo]}>Through</Text>
      <Text style={[styles.dog, styles.dogTypo]}>Dog</Text>
      <Text style={[styles.jumped, styles.dogTypo]}>Jumped</Text>
      <Text style={[styles.fence, styles.dogTypo]}>Fence</Text>
      <View style={[styles.androidLarge63Child4, styles.androidChildLayout1]} />
      <Text style={styles.chooseAnAnswer}>Choose an answer</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <Text style={[styles.text, styles.textTypo2]}>/</Text>
      <Text style={[styles.text1, styles.textTypo2]}>5</Text>
      <Text style={[styles.text2, styles.textTypo2]}>1</Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupChild, styles.childBorder]} />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.androidLarge63Child5, styles.childBg]} />
      <Image
        style={[styles.ellipseIcon, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.androidLarge63Child6, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.androidLarge63Child7, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.androidLarge63Child8, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.androidLarge63Child9, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.androidLarge63Child10, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.androidLarge63Child11, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.androidLarge63Child12, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.androidLarge63Child13, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.androidLarge63Child14, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
      <Text style={[styles.text4, styles.textTypo]}>1</Text>
      <Text style={[styles.question1, styles.question1Position]}>
        Question 1
      </Text>
      <View style={styles.lineView} />
      <View
        style={[styles.androidLarge63Child15, styles.androidChildPosition]}
      />
      <View
        style={[styles.androidLarge63Child16, styles.androidChildPosition]}
      />
      <Image
        style={styles.cc0c34c35405b8b2c6ae7b5e9cbae9Icon}
        contentFit="cover"
        source={require("../assets/3cc0c34c35405b8b2c6ae7b5e9cbae9b-1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.timeLeft15sec, styles.textTypo]}>
        Time left 15sec
      </Text>
      <View style={[styles.androidLarge63Child17, styles.question1Position]} />
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
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  theDogJumpedTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  androidChildLayout1: {
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
  textTypo2: {
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
  childBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  androidChildLayout: {
    height: 18,
    width: 18,
    top: 326,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  question1Position: {
    top: 278,
    position: "absolute",
  },
  androidChildPosition: {
    top: 334,
    height: 1,
    width: 6,
    borderTopWidth: 1,
    borderColor: Color.colorForestgreen,
    borderStyle: "solid",
    position: "absolute",
  },
  androidLarge63Child: {
    width: 360,
    height: 397,
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
    top: "4.25%",
    right: "87.78%",
    bottom: "93.75%",
    left: "7.22%",
    width: "5%",
    maxWidth: "100%",
  },
  grammerVocabulary: {
    top: 75,
    left: 23,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  androidLarge63Item: {
    top: 113,
    left: 28,
    height: 149,
    borderRadius: Border.br_8xs,
  },
  typesOfPrepositions: {
    top: 133,
    left: 34,
    fontSize: FontSize.size_mini,
    width: 183,
  },
  prepositionsHelpUs: {
    top: 158,
    left: 33,
    width: 289,
  },
  androidLarge63Inner: {
    top: 368,
    left: 26,
    borderRadius: Border.br_mini,
    height: 345,
  },
  vectorIcon1: {
    height: "3.75%",
    width: "8.33%",
    top: "27.75%",
    right: "10.83%",
    bottom: "68.5%",
    left: "80.83%",
  },
  whatIsThe: {
    top: 393,
    fontSize: FontSize.size_lg,
    width: 266,
    left: 46,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  theDogJumped: {
    top: 451,
    width: 240,
    left: 46,
  },
  rectangleView: {
    top: 502,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
    left: 46,
  },
  androidLarge63Child1: {
    top: 556,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
    left: 46,
  },
  androidLarge63Child2: {
    top: 605,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
    left: 46,
  },
  androidLarge63Child3: {
    top: 654,
    left: 43,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    height: 35,
    width: 266,
  },
  through: {
    top: 511,
    left: 144,
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  dog: {
    top: 565,
    left: 144,
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  jumped: {
    top: 614,
    left: 144,
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  fence: {
    top: 663,
    left: 147,
  },
  androidLarge63Child4: {
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
    left: 288,
    width: 39,
    height: 33,
    top: 370,
    position: "absolute",
  },
  text: {
    top: 375,
    left: 312,
  },
  text1: {
    top: 381,
    left: 317,
  },
  text2: {
    left: 306,
    top: 370,
  },
  groupChild: {
    top: -1,
    left: -1,
    borderColor: Color.colorWhite,
    width: 238,
    height: 7,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupItem: {
    width: 40,
    borderRadius: Border.br_8xs,
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
    height: "2.29%",
    width: "5.08%",
    top: "4.75%",
    right: "4.92%",
    bottom: "92.96%",
    left: "90%",
  },
  androidLarge63Child5: {
    top: 314,
    left: 29,
    borderRadius: Border.br_3xs,
    width: 302,
    height: 44,
  },
  ellipseIcon: {
    left: 42,
  },
  androidLarge63Child6: {
    left: 72,
  },
  androidLarge63Child7: {
    left: 101,
  },
  androidLarge63Child8: {
    left: 130,
  },
  androidLarge63Child9: {
    left: 159,
  },
  androidLarge63Child10: {
    left: 188,
  },
  androidLarge63Child11: {
    left: 217,
  },
  androidLarge63Child12: {
    left: 246,
  },
  androidLarge63Child13: {
    left: 275,
  },
  androidLarge63Child14: {
    left: 304,
  },
  text3: {
    top: 327,
    left: 78,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text4: {
    top: 328,
    left: 48,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  question1: {
    left: 30,
    fontSize: 16,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  lineView: {
    top: 335,
    left: 64,
    height: 1,
    width: 6,
    borderTopWidth: 1,
    borderColor: Color.colorForestgreen,
    borderStyle: "solid",
    position: "absolute",
  },
  androidLarge63Child15: {
    left: 92,
  },
  androidLarge63Child16: {
    left: 122,
  },
  cc0c34c35405b8b2c6ae7b5e9cbae9Icon: {
    top: 206,
    left: 84,
    width: 174,
    height: 52,
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.25%",
    top: "35.25%",
    right: "11.11%",
    bottom: "62.5%",
    left: "83.89%",
    width: "5%",
    maxWidth: "100%",
  },
  timeLeft15sec: {
    top: 284,
    left: 218,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  androidLarge63Child17: {
    left: 213,
    borderColor: "#f5f5f5",
    width: 116,
    height: 27,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  androidLarge63: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge63;
