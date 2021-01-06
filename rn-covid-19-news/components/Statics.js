import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import StaticsDetailedCard from "./StaticsDetailCard";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}

class Statics extends React.Component {
  state = {
    totalConfirmed: "--",
    confirmed: "--",
    totalDeath: "--",
    suspect: "--",
    noSymptom: "--",
    cured: "--",
  };

  componentDidMount() {
    fetch("https://lab.isaaclin.cn/nCoV/api/overall?latest=true")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        this.setState({
          confirmed: response.results[0].currentConfirmedCount,
          totalConfirmed: response.results[0].confirmedCount,
          totalDeath: response.results[0].deadCount,
          suspect: response.results[0].suspectedCount,
          noSymptom: response.results[0].seriousCount,
          cured: response.results[0].curedCount,
        });
      });
  }

  render() {
    return (
      <Container>
        <StaticsDetailedCard
          totalConfirmed={this.state.totalConfirmed}
          confirmed={this.state.confirmed}
          totalDeath={this.state.totalDeath}
          suspect={this.state.suspect}
          noSymptom={this.state.noSymptom}
          cured={this.state.cured}
        />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statics);

const Text = styled.Text``;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
