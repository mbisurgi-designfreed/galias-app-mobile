import React, { Component } from 'react';
import { ListItem, Text, Body, Right, Button } from 'native-base';

class PedidoListItem extends Component {
    render() {
        return (
            <ListItem icon>
                <Body>
                    <Text>{this.props.pedido.numero}</Text>
                    <Text note>{this.props.pedido.cliente}</Text>
                </Body>
                <Right>
                    <Button transparent small>
                        <Text style={{ color: '#ee3124' }}>Detalle</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

export default PedidoListItem;
