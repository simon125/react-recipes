# demo app

simple app used as an example of different approach to use custom hooks

## app structure

there is folder components for layout components and controls and more complex components that are more generic and not specific for particular domain;
folders in pages are divided per route of app, each folder contain main file + specific components for that page

├── components <br/>
| ├── Button.jsx <br/>
| ├── Input.jsx <br/>
| | <br/>
├── pages <br/>
| | <br/>
| ├── page1 <br/>
| | ├── Page1 <br/>
| | ├── components <br/>
| | | ├── Component1.jsx <br/>
| | | ├── Component2.jsx <br/>
| ├── page2 <br/>
| | ├── Page2 <br/>
| | ├── components <br/>
| | | ├── Component1.jsx <br/>
| | | ├── Component2.jsx <br/>
