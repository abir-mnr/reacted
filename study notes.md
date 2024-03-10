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

## Wriitng html classes and input 'for attribute in jsx: 
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
## Using faker with React: 
Previously we could use faker with the 'faker' library. Now we need to use the '@faker-js/faker' library.
Use this command for installing package: 
```
npm install @faker-js/faker --save-dev
```
Import the library in react component like this: 
```
import { faker } from '@faker-js/faker';
```

We need to access the fake data by using the below notation. Notice the end of the calling line is a method call not a property call. Ex: 
```
faker.image.avatar()
(Not faker.image.avatar)
```
Detailed documentation: https://fakerjs.dev/api/
We need to import faker library to that component which utilizes the faker library. We cannot import the faker library to a parent component and call faker data in child component. We have to import the library in the child component.

## Creating a custom component: 
The convention is to create a component name with Camel case. like: CommneDetails.js
When creating the child component we need to export the component so that other component can import it. For that we need to write this line below the component: 
```
export default CommentDetail;
```
## Sending props: 
The props system is used to send the data from the parent to child component. Child cannot send data to the parent using the props. for sending the data we need to give the name of the props when calling the component from the parent component. Every component declarion has a property named props in the first argument of the component declaration method. We can then access the props by the name of the props sent from the parent component. 
For Example: <br>
Calling the child component from the parent component with props: 
```
<CommentDetail userName="Bob" commentDetail="Nice blog" />
```
Accessing props from the child component: 
```
cont CommentDetail = (props) => { //we need to give the props parameter in the child component

}
```
```
<div className="user-name">{props.userName}</div>
<div className="comment-detail">{props.commentDetail}</div>
```
## Displaying nested child component inside another component (using props): 
If we want to show another child component within a child component we need to write the child component in the parent component using pair of closing tags rather than self closing tags. And between the starting and closing tags we need to write the another component that we wanted to show. We will find the nested child in the props.children property in which they were nested. For ex- <br>
Our index file looks like this: 
```
<ApprovalCard>
            <CommentDetail userName="Sam" timeAgo="Yesterday at 12:00pm" commentDetail="Nice blog 2" image={faker.image.avatar()} />
</ApprovalCard>
```
Here we are displaying the CommentDetail component inside of ApprovalCard component. 


Our `ApprovalCard` component looks like this: 
```
<div className="ui card">
    <div className="content">{props.children}</div>
    <div className="extra content">
        <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
        </div>
    </div>
</div>
```
Here, we are getting the `CommentDetail` component data in the `props.children` property. And it will be rendered in the content div. 


We not only can render child component here but also we can render any jsx or single line. For ex we can write : 
```
<ApprovalCard>
            <h4>Warning !</h4>
            <div>
                Are you sure you want to accept this?
            </div>
</ApprovalCard>
```
And it will show with the two button card like before.

# Class Based Components
When We want to use the **Lifecycle Method System** and **State** system then we need to use the class based component. As they are not available in function based component. 

Function component can have the similar functionality by using the **Hooks** system. 

# Notes From the Weather App
Snippet of the class based component: 
```
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position.coords.latitude),
            (err) => console.log(err.message)
        );
        return <div>latitude: </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
```
this is the **App** component. Notice we used a render() method in there written all the codes. We have also sritten return mehtod in that method. When we are creating a class based component we need to extend that component from React.Component class. 

**Code apart from rendering and simple operation should be written outside of the APP class**
## Details about state: 
Updating state of a component causes it to instantly re render. 

**State property can only be updated by using the method setState(). Don't directly assign value to state.property=value rather use setState({property: value}).**

We should initialize state when our component first created. 

when we create a constructor function we need to pass a parameter called props and call the super method with that props. Or it will result in an error. 
```
constructor(props){
    super(props);
}
```
when initializing state in the constructor we can use this code: 
```
this.state = {property: value};
```
We can also initialize state outside the constructor by specifying this line 

```
state = {property: value}
```
It will under the hood do the same initialization with the constructor. 

## Adding CSS files
We need to create a css file in the directory of the component js file and import that file in the js component file. The css file won't load automatically. 

