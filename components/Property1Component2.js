import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Component2 = ({
  actionText,
  property1Component2Position,
  property1Component2Top,
  property1Component2Left,
  property1Component2Height,
}) => {
  const property1Component2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Component2Position),
      ...getStyleValue("top", property1Component2Top),
      ...getStyleValue("left", property1Component2Left),
      ...getStyleValue("height", property1Component2Height),
    };
  }, [
    property1Component2Position,
    property1Component2Top,
    property1Component2Left,
    property1Component2Height,
  ]);

  return (
    <View style={[styles.property1component2, property1Component2Style]}>
      <View style={[styles.ori, styles.oriPosition]}>
        <Text style={[styles.correct, styles.jumpedTypo]}>Correct</Text>
        <Image
          style={[styles.vectorIcon, styles.oriPosition]}
          contentFit="cover"
          source={require("../assets/vector21.png")}
        />
      </View>
      <LinearGradient
        style={[styles.flip, styles.oriPosition]}
        locations={[0, 1]}
        colors={["#08b3f1", "#159ed0"]}
      >
        <Text style={[styles.jumped, styles.jumpedTypo]}>{actionText}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  oriPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  jumpedTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  correct: {
    top: 36,
    left: 58,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  vectorIcon: {
    height: "28.17%",
    width: "28.17%",
    top: "22.54%",
    right: "135.21%",
    bottom: "49.3%",
    left: "-63.38%",
    maxWidth: "100%",
    maxHeight: "100%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
    position: "absolute",
  },
  ori: {
    right: "-100%",
    left: "100%",
    backgroundColor: Color.colorMediumseagreen,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  jumped: {
    top: 28,
    left: 12,
  },
  flip: {
    right: "0%",
    left: "0%",
    backgroundColor: "transparent",
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  property1component2: {
    width: 71,
    height: 71,
  },
});

export default Property1Component2;
