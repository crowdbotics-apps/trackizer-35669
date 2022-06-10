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
      <View style={styles.View_306_238} />
      <View style={styles.View_306_239} />
      <View style={styles.View_306_240} />
      <View style={styles.View_306_241} />
      <View style={styles.View_306_242} />
      <View style={styles.View_306_243} />
      <View style={styles.View_306_244} />
      <View style={styles.View_306_245} />
      <View style={styles.View_306_246} />
      <View style={styles.View_306_247} />
      <View style={styles.View_306_248} />
      <View style={styles.View_306_249} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_306_238: {
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
  View_306_239: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("75%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_240: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("75%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_241: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("75%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_242: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("14%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_243: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("14%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_244: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("18%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_245: {
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
  View_306_246: {
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
  View_306_247: {
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
  View_306_248: {
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
  View_306_249: {
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
