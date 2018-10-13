import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { logout } from "./../../actions/user/authentication";
import { showLoginScreen, signUp } from "./../../actions/user/authentication";
import { connect } from "react-redux";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: "#000"
    },
    cameraView: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end"
    },
    container: {
        flex: 1
    }
});

class UserDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: undefined,
            name: undefined,
            score: 0,
            showModal: false,
            timestamp: 0
        };
    }

    login = () => {
      this.props.showLoginScreen();
    }

    signUp = () => {
      this.props.signUp();
    }
    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity
                  onPress={this.login}

              >
              <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={this.signUp}

              >
              <Text>Sign Up</Text>
              </TouchableOpacity>
            </View>
        );
    }
  }

    function mapStateToProps(state) {
        return {
        };
    }

    export default connect(mapStateToProps, {
        signUp,
        showLoginScreen,
    })(UserDetailScreen);
