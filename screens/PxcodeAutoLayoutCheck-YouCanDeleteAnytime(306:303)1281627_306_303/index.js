import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_306_304} />
      <View style={styles.View_306_305} />
      <View style={styles.View_306_306} />
      <View style={styles.View_306_307} />
      <View style={styles.View_306_308} />
      <View style={styles.View_306_309} />
      <View style={styles.View_306_310} />
      <View style={styles.View_306_311} />
      <View style={styles.View_306_312} />
      <View style={styles.View_306_313} />
      <View style={styles.View_306_314} />
      <View style={styles.View_306_315} />
      <View style={styles.View_306_316} />
      <View style={styles.View_306_317} />
      <View style={styles.View_306_318} />
      <View style={styles.View_306_319} />
      <View style={styles.View_306_320} />
      <View style={styles.View_306_321} />
      <View style={styles.View_306_322} />
      <View style={styles.View_306_323} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_306_304: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_305: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("70%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_306: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("80%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_307: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("83%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_308: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("90%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_309: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("93%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_310: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("100%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_311: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("103%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_312: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("61%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_313: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_314: {
    width: wp("112%"),
    minWidth: wp("112%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("-2%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_315: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("20%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_316: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("4%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_317: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("46%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_318: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("46%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_319: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("46%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_320: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("98%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_321: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("104%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_322: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("104%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_323: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("104%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
