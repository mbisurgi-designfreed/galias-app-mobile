import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, List, ListItem, Icon, Text, Button, Left, Right, Fab, Grid, Col, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';

class PedidoAdd extends Component {
    state = { items: [{ articulo: 'Levadura', cantidad: 10, precio: 40.60 }, { articulo: 'Cobertura', cantidad: 5, precio: 100.60 }] };

    renderRow(item) {
        return (
            <ListItem>
                <Text style={{ flex: 2, textAlign: 'left', fontSize: 13 }}>{item.articulo}</Text>
                <Text style={{ flex: 1, textAlign: 'right', fontSize: 13 }}>{item.cantidad}</Text>
                <Text style={{ flex: 1, textAlign: 'right', fontSize: 13 }}>{item.precio}</Text>
            </ListItem>
        );
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Agregar</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <ListItem icon last>
                        <Left>
                            <Icon name="person" style={{ color: '#ee3124' }} />
                        </Left>
                        <Body>
                            <Text style={{ color: '#ee3124' }}>Cliente</Text>
                        </Body>
                    </ListItem>

                    <Button iconLeft transparent>
                        <Icon name='search' style={{ color: '#d8b5a3' }} />
                    </Button>

                    <ListItem icon last>
                        <Left>
                            <Icon name="cart" style={{ color: '#ee3124' }} />
                        </Left>
                        <Body>
                            <Text style={{ color: '#ee3124' }}>Pedido</Text>
                        </Body>
                    </ListItem>

                    <ListItem itemHeader first>
                        <Text style={{ flex: 2, textAlign: 'center', color: '#d8b5a3', fontWeight: 'bold' }}>Articulo</Text>
                        <Text style={{ flex: 1, textAlign: 'center', color: '#d8b5a3', fontWeight: 'bold' }}>Cantidad</Text>
                        <Text style={{ flex: 1, textAlign: 'center', color: '#d8b5a3', fontWeight: 'bold' }}>Precio</Text>
                    </ListItem>

                    <List dataArray={this.state.items} renderRow={this.renderRow} />

                    <Button block small style={{ margin: 5 }}>
                        <Text>Confirmar</Text>
                    </Button>
                </Content>

                <Fab active direction="up" containerStyle={{}} style={{ backgroundColor: '#ee3124' }} position="bottomRight" onPress={() => { }}>
                    <Icon name="add" style={{ fontSize: 25 }} />
                </Fab>
            </Container>
        );
    }
}

export default PedidoAdd;
