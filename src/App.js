import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Header from "./components/Header";
import CharacterButton from "./components/CharacterButton/CharacterButton";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    hasStarted: false,
    hasBeenClicked: false
  };

  shuffleCharacters = () => {
    const characters = this.state.characters
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

    this.setState({ characters });
  };

  updateScore = win => {
    if (win) {
      let score = this.state.score;
      score++;
      this.setState({ score });
      if (score > this.state.topScore) {
        this.setState({ topScore: score });
      }
      this.setState({ hasBeenClicked: false });
    } else {
      this.setState({ score: 0 });
      const characters = this.state.characters.map(function(character) {
        character.hasBeenClicked = false;
      });
      this.setState(characters);
      this.setState({ hasBeenClicked: true });
    }
  };

  selectCharacter = id => {
    if (!this.state.hasStarted) {
      this.setState({ hasStarted: true });
    }

    let result;
    const characters = this.state.characters.map(function(character) {
      if (character.id === id) {
        if (character.hasBeenClicked) {
          result = false;
        } else {
          result = true;
          character.hasBeenClicked = true;
        }
      }
    });

    this.setState({ characters });
    this.updateScore(result);
    this.shuffleCharacters();
  };

  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          hasStarted={this.state.hasStarted}
          hasBeenClicked={this.state.hasBeenClicked}
        />
        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Col size="md-3">
                <CharacterButton
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  selectCharacter={this.selectCharacter}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
