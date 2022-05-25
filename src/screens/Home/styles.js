import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    //    transform: [{ translateY: 35 }],
    flex: 2.5,

    alignContent: 'flex-end',
  },

  user: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0
  },

  titleU: {
    color: "black",
    fontSize: 25
  },

  subtitleU: {
    color: "#989898",
    fontSize: 16
  },

  imageU: {
    //mar: 20,
    width: 100,
    height: 100,
    //transform: [{ translateY: height / 10 }]

  },

  imageU2: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 15,
    right: 15
  },

  body: {
    transform: [{ translateY: height / 100 * 5 }],
    flex: 7,
    padding: "5%"
  },

  title: {
    fontSize: 25,
    fontWeight: "500"
  },

  line: {
    marginTop: 10,
    height: 1,
    width: "100%",
    backgroundColor: "black"
  },

  nolockerContainer: {
    alignSelf: "center",
    marginTop: 35
  },

  lockerContainer: {
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
    width: "100%",
    marginTop: 35,
    borderRadius: 10,
  },

  text: {
    color: "gray",
    fontSize: 16,
    fontWeight: "500",
    alignSelf: "center",
    marginTop: 5
  },

  image: {
    height: 200,
    width: 230
  },

  btn: {
    backgroundColor: "#0085FF",
    borderRadius: 10,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500"
  }
})

export default styles