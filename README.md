# start react project manually

<b>[under costruction] [bug - not working]</b>

A purist style approach to make a react app from stretch (without creacte-react-app).

Known Issues:
- depencies auto injection completely absent

> build command traspile the code, probably babel-plugin-file-loader use webpack. However not import enything (included react and react-dom) of node depency.

<br>

---



- init project...<br>
`npm init (or npm init -y)`<br>

- install babel (for jsx and compiling)...<br>
`npm i --save-dev @babel/core` [⇗](https://babeljs.io/docs/en/babel-preset-react)<br>
`npm i --save-dev @babel/preset-react` [⇗](https://babeljs.io/docs/en/babel-preset-react)<br>
`npm i --save-dev @babel/preset-env` [⇗](https://github.com/rollup/rollup-plugin-babel) [⇗](https://github.com/rollup/rollup-plugin-babel)<br>
`npm i --save-dev babel-plugin-file-loader` [⇗](https://github.com/sheerun/babel-plugin-file-loader)<br>
`npm i --save-dev babel-cli` [⇗](https://babeljs.io/docs/en/babel-cli)<br>
`npm i --save-dev babel-minify` [⇗](https://babeljs.io/docs/en/babel-minify)<br>

- install react...<br>
`npm i --save --local react react-dom` [⇗](https://www.taniarascia.com/getting-started-with-react/)<br>

- now fix all fix...<br>
`npm audit fix --force`

- in root make .babelrc cofing file:
	```json
	{
		"sourceMaps": false,
		"comments": false,
		"presets": [
			["@babel/preset-env"],
			["@babel/preset-react"]
		],
		"env": {
			"development": {
				"presets": [
					["@babel/preset-env",{
						"modules": false //"umd" (retrocompatibility)
					}],
					["@babel/preset-react", {
						"pragma": "e",
						"pragmaFrag": "f",
						"throwIfNamespace": false,
						"runtime": "classic"
					}]
				]
			}
		},
		"plugins": [
			[ "file-loader", {
				"name": "[name].[ext]",
				"extensions": ["png", "jpg", "jpeg", "gif", "svg", "css"],
				"publicPath": "/public",
				"outputPath": "/public/reactor/assets",
				"context": "",
				"limit": 0
			}
			]
		]
	}
	```

- server:

  - if not have express:<br><br>

    1. `npm install http-server`
    2. make a server dir: `mkdir public`<br>
    3. make first ./public/index.html:<br>
    `echo '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>REACT</title></head><body><div>SERVER RUN - REACT ERROR</div></body></html>' > public/index.html`
	4. inside html put `<script type="module" src="./reactor/index.js"></script>` for your first load
    5. open package.json and change
       ```"scripts": {...},``` 
       with:
       ```json
		"scripts": {
			    "start": "start http://localhost:8080/ && npm run server",
				"server": "http-server -a localhost -p 8080 -c-1",
				"build": "babel ./src/ -d ./public/reactor/",
				"build-compact": "babel ./src/ -d ./public/reactor/ && rollup && npm run minify",
				"minify": "minify ./public/ -d ./public/
		},
        ```
    6. test server with: `npm run start`<br><br>


  - if you use express:<br><br>

	coming soon...

<br><br>

make react dir:
`mkdir src`

make index.js
`echo '' > src/index.js`

copy index file content:

```jsx
//:
//: Main of react app project
//:

// get react
import React from 'react'
import ReactDOM from 'react-dom/client'

//make app root
const root = ReactDOM.createRoot(document.getElementsByTagName('div')[0])

//render app
root.render(
	<React.StrictMode>
		<h1>HELLO FROM REACT!</h1>
	</React.StrictMode>
)
```