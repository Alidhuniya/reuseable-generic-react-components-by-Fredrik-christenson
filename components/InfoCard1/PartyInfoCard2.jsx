import { compose } from "redux";
import { connect } from "react-redux";
import { InfoCard1 as Component } from "./component";

const mapDispatchToProps = () => {
  return {
    title: "Extra Added by Ali Dhuniya while going through the Fredrik code",
    subtitle1: "countryName",
    subtitle1Value: "Nepal",
    subtitle2: "City",
    subtitle2Value: "Bhairahawa",
    bodyText2: "Click the button to register",
    buttonText: "Register",
    onClick: () => alert("See you at the party")
  };
};

export const PartyInfoCard2 = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
