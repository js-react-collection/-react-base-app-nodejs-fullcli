

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/style';
import Test from 'components/test';

var root = ReactDOM.createRoot(document.getElementsByTagName('div')[0]);

root.render(e("div", null, e("h1", null, "HELLO FROM REACT..."), e(Test, null)));