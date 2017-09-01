import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
    onIngresarPress() {

    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder='Username' />
                        </Item>
                        <Item last>
                            <Input secureTextEntry placeholder='Password' />
                        </Item>
                        <Button block style={{ margin: 5 }} onPress={() => Actions.main()}>
                            <Text>Ingresar</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default Login;
