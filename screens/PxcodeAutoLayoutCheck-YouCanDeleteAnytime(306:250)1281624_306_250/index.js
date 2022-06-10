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
      <View style={styles.View_306_251} />
      <View style={styles.View_306_252} />
      <View style={styles.View_306_253} />
      <View style={styles.View_306_254} />
      <View style={styles.View_306_255} />
      <View style={styles.View_306_256} />
      <View style={styles.View_306_257} />
      <View style={styles.View_306_258} />
      <View style={styles.View_306_259} />
      <View style={styles.View_306_260} />
      <View style={styles.View_306_261} />
      <View style={styles.View_306_262} />
      <View style={styles.View_306_263} />
      <View style={styles.View_306_264} />
      <View style={styles.View_306_265} />
      <View style={styles.View_306_266} />
      <View style={styles.View_306_267} />
      <View style={styles.View_306_268} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_306_251: {
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
  View_306_252: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("90%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_253: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("94%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_254: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("66%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_255: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("70%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_256: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("66%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_257: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_258: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("34%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_259: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("34%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_260: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("34%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_261: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("34%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_262: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("34%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_263: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("34%"),
    borderColor: "rgba(240, 71, 33, 1)",
    borderWidth: 4
  },
  View_306_264: {
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
  View_306_265: {
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
  View_306_266: {
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
  View_306_267: {
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
  View_306_268: {
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
