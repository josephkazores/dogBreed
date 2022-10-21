import { StyleSheet } from "../../utils/stylesheet";

export default StyleSheet.create({
  container: {
    display: "flex",
  },
  tabletView: {
    display: "flex",
    flexDirection: "column",
  },
  headerStyle: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
  },
  leftContainerTabletView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  rightContainer: {
    flexGrow: 1,
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
  },
});