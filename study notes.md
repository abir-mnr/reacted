## Markdown file writing tutorial link: 
[Markdown file editing](https://medium.com/@saumya.ranjan/how-to-write-a-readme-md-file-markdown-file-20cb7cbcd6f)

# React study notes: 
## importing libraries: 
At the top of our `index.js` file we need to write 
```
import React from 'react';
import ReactDOM from 'react-dom';
```
If we want to import our custom component then we need to write like this: 
```
Import OurCustomComponent from './OurCustomComponent';
```

## Wriitng html classes and input 'for' in jsx: 
For writing class names in jsx we need to use 'className' attribute. 
For giving a for attribute to a input we need to use 'htmlFor' attribute. 

## Writing inline style in jsx: 
For writing styles in the jsx notation we need to write 'style = {{color: 'red'}}' like this. The first curleybraces is used for telling js that we are going to reference a javascript variable and the second curley braces is for writing an object in that space.  So we need to seperate every css attributes with a comma not a semicolon. 
Some convertion notation from html inline styling to jsx inline styling: 
If it is a one word style attribute write as it is but use colon (:) instead of = Example *1 of the below table, 
If it is multiword attribute like "background-color" the dash should be deleted and the second word should be capitalized. Example *2 of the below table: 
|html css|jsx css|
|-|-|
|color: red |color: 'red'|
|background-color: blue |backgroundColor: 'blue'|
|border: 1px solid black |border:'1px solid black'|
|border-radius: 5px|borderRadius: '5px'|

## Referencing js variable inside of jsx:
As mentioned earlier we can reference a js variable named 'variableName' inside jsx like: 
```
{variableName}
```
like this we can also call a method inside a jsx block: 
```
{methodName()}
```
***Things to rememeber when printing a variable in jsx: If we try to print a variable of type object inside jsx it will result in an error. Instead we need to find the property of the object that we want to print. We can print array too without specifying index. In that case the array values will be concatenated.**

***We can use javascript object as attribute for styling.**


## Convention of writing the return method:
Return method must have a parent div and inside that div we need to write everything else. All the tags must be closed. Either with a self closing tag or with a closing tag pair. 
For writing the return method if we don't write something in the same line of return method call then the return method will return undefined item. It is better to use a parenthesis when calling return method. Ex: 
```
return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{text}</button>
        </div>
    );
```

## Three tenets of components: 
* Component Nesting: A component can be shown inside of another.
* Component Reusability: We want to make components that can be easily reusedthrough out application. 
* Component Configuration: We should be able to configure a component when it is created. 

## Component Lifecycle Methods: 
|Method Name|Method running condition|
|-|-|
|constructor|Runs once when initializing a component. Used to initialize state variables. Do not fetch data here|
|render|Runs everytime when re rendering the DOM. It also runs every time when the component state updates as updating state also re-renders DOM|
|componentDidMount|Runs everytime when the compont runs for the first time. Fetch any data you need to initialize the app in here|
|componentDidUpdate|Runs everytime the component gets updated|
|componentWillUnmount|This method is used for destructing the component|

**Other Lifecycle methods not used so often:**
* shouldComponentUpdate
* getDerivedStateFromProps
* getSnapshotBeforeUpdate

## Initializing State
We can initialize state by writing this single line: 
```JavaScript
state = { lat: null, errorMessage: '' };
```
Babel will create a constructor for us after compiling and assign the state in the constructor from this single line. 

## Reading variable: 
we need to use curly braces to read a variable in the code. Syntax: 
```
{variable}
```

when using template notation we need to call the variable with a dollar sign ($). Syntax: 
```
`${variableName} other text.`
```

## Linking a css file to component: 
To link a css file to a component we need to import it into the component. The syntax is:
```
import './CssFileName';
```
This line of code should be written in the component.js file. 

## Default Props: 
If we write a function component named 'Spinner' we can set the default props like this: 
```
Spinner.defaultProps = {
    message: 'Loading...'
}
```
Code for the Spinner: 
```
const Spinner = props => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
}
```

It will load the default message if we don't send message props when calling the component from other component. 

# Notes from the comment app
