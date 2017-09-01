import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Login from './components/auth/login/login.component';
import PedidoList from './components/pedidos/pedido-list/pedido-list.component';
import PedidoAdd from './components/pedidos/pedido-add/pedido-add.component';

const RouterComponent = () => {
    return (
        <Router hideNavBar>
            <Scene key="auth">
                <Scene key="login" component={Login} title="Login" initial />
            </Scene>

            <Scene key="main">
                <Scene key="pedidoList" component={PedidoList} title="Pedidos" initial />
                <Scene key="pedidoAdd" component={PedidoAdd} title="Agregar" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
