import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';

const Routes = () => (
    // Containner de navegacao
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;