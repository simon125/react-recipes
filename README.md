# demo app [preview](https://anf-questions.surge.sh/)

simple app used as an example of different approach to use custom hooks

## app structure

there is folder components for layout components and controls and more complex components that are more generic and not specific for particular domain;
folders in pages are divided per route of app, each folder contain main file + specific components for that page

```bash
├── components
| ├── Button.jsx
| ├── Input.jsx
| |
├── pages
| |
| ├── page1
| | ├── Page1.jsx
| | ├── components
| | | ├── Component1.jsx
| | | ├── Component2.jsx
| ├── page2
| | ├── Page2.jsx
| | ├── components
| | | ├── Component1.jsx
| | | ├── Component2.jsx
├── query-hooks
| ├── useUsers.jsx
| ├── usePosts.jsx
| |
```
