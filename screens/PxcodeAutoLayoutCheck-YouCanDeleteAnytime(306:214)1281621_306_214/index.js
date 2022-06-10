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
      <View style={styles.View_306_215} />
      <View style={styles.View_306_216} />
      <View style={styles.View_306_217} />
      <View style={styles.View_306_218} />
      <View style={styles.View_306_219} />
      <View style={styles.View_306_220} />
      <View style={styles.View_306_221} />
      <View style={styles.View_306_222} />
      <View style={styles.View_306_223} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_306_215: {
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
  View_306_216: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("55%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_217: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("61%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_218: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("68%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_219: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("75%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_220: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("81%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_221: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("88%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_222: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("8%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_223: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("47%"),
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
