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
      <View style={styles.View_306_282} />
      <View style={styles.View_306_283} />
      <View style={styles.View_306_284} />
      <View style={styles.View_306_285} />
      <View style={styles.View_306_286} />
      <View style={styles.View_306_287} />
      <View style={styles.View_306_288} />
      <View style={styles.View_306_289} />
      <View style={styles.View_306_290} />
      <View style={styles.View_306_291} />
      <View style={styles.View_306_292} />
      <View style={styles.View_306_293} />
      <View style={styles.View_306_294} />
      <View style={styles.View_306_295} />
      <View style={styles.View_306_296} />
      <View style={styles.View_306_297} />
      <View style={styles.View_306_298} />
      <View style={styles.View_306_299} />
      <View style={styles.View_306_300} />
      <View style={styles.View_306_301} />
      <View style={styles.View_306_302} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_306_282: {
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
  View_306_283: {
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
  View_306_284: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("73%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_285: {
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
  View_306_286: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("82%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_287: {
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
  View_306_288: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("92%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_289: {
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
  View_306_290: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("102%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_291: {
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
  View_306_292: {
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
  View_306_293: {
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
  View_306_294: {
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
  View_306_295: {
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
  View_306_296: {
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
  View_306_297: {
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
  View_306_298: {
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
  View_306_299: {
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
  View_306_300: {
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
  View_306_301: {
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
  View_306_302: {
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
