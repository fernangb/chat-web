/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => <AuthProvider />;

export default AppProvider;
