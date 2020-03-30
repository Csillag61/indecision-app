import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ReactModal from 'react-modal';   
ReactModal.setAppElement('#app');
 
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));


  

