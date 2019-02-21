//Подключение модулей библиотеки react
import React from 'react';
import ReactDOM from 'react-dom';

const MyFirstComponent = ({color}) =>
  <div>
    <span style={{color}}>
      Hey, I am {color}
    </span>
  </div>

//Простой react код. Hello World
ReactDOM.render(
  <MyFirstComponent color="red"/>,
  document.getElementById('root')
);
