import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, List, ListItem, Button, Text, Right, Left, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import PedidoListItem from './pedido-list-item/pedido-list-item.component';

class PedidoList extends Component {
    state = { pedidos: [{ numero: 1, cliente: 'Maximiliano Bisurgi' }, { numero: 2, cliente: 'Claudio Bisurgi' }] };

    renderRow(pedido) {
        return <PedidoListItem pedido={pedido} />;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Pedidos</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={(() => Actions.pedidoAdd())}>
                            <Icon name='add' />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <ListItem icon>
                        <Left>
                            <Icon name="list-box" style={{ color: '#ee3124' }} />
                        </Left>
                        <Body>
                            <Text style={{ color: '#ee3124' }}>Pedidos</Text>
                        </Body>
                    </ListItem>
                    <List dataArray={this.state.pedidos} renderRow={this.renderRow} />
                </Content>
            </Container>
        );
    }
}

export default PedidoList;
