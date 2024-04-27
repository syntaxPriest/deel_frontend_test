# DEEL FRONTEND TEST - PART 2


# Question 1

A component in react re-renders based on state and props change while a pure component does a little comparison as to why a change in the state or props should re-render. The major difference between them is the `shouldComponentUpdate()` method which is present in the pure component and not the regular component. On the background, the pure component through the `shouldComponentupdate()` method makes a logic check if the previous state is same as the new state and if true, the component doesn't re-render but if false it re-renders. So the major difference between them is the logic check. 

One of the ways a pure component can crash the app is when it fails the default logic under the comparison made for states and props. An example is an array comparison. We know that array comparison happens based on the values and also the reference in the memory. This might make the app re-rendering malfunction because the true comparison is not being made.

# Question 2

I have mostly used context for theming but don't use `shouldComponentUpdate()` method but one of the ways I feel it can be dangerous is during the comparison happening inside the `shouldComponentUpdate()` method which earlier I explained that the logic might be faulty because of value types or reference, which might not causing a re-render when it should which is quite dangerous because the action performed in the context might not occur in sommething that might not be the developer's fault and might just be the comparison fault in the `shouldComponentUpdate()` method.

# Question 3

Based on my current knowledge, I only know of two for now on how we can pass informations from child components to parent components. 

1. We can use a global state management like Redux, Context API and many more to store states in the store from any component and can be accesible by all components under the state management Provider which means if a child component sets or updates a state or an information, the parent component also has access to that information because it is a global state.

2. Another method I discovered about a year ago but it's quite tricky was using the forwardRef and useImperativeHandle method which is available in react. I pass in two arguments for the forwardRef which is the prop and ref. The ref targets the parent and comes as a childRef and the useImperativeHandle is used for saving states and information which are accessible by the parent component.


# Question 4

Based on my experience, components re-renders unnecessarily when the dependency array are not set in a useEffect or the wrong ones are set. So one of the ways of preventing re-rendering is making sure that dependency array is present on useEffect calls which can be an empty array as second argument or making sure the variables that needs to be in that dependency array are correct so as not to result in a memory leak in the application. One of the implications is browser getting hanged or crashing. Another alternative is using the useMemo because it remembers the current values of the variables in the dependency array and only calls when they change.  

Another way to prevent re-rendering is using the useRef() instead of useState for variables that would most likely cause re-renders. useRef() don't usually triggers re-rendering unlike useState when states are being updated.



# Question 5

Fragments are simple or empty elements `<></>` or `<React.Fragment></React.Fragment>` that allows us render multiple children. It has many advantages like not necessarily adding an additional node. For example there are times I would want to add an element on same line as the last parent element but results in an error because react accepts one parent element on a component, so instead of using a div which might increase resource for every component I repeat that for, I use fragment instead.

One way it can break an app is when you need to deal with a list of children where you might want to insert a property into the element node of these children but it finds a fragment instead and just doesn't behave as it should when it finds an actual element like a `<li>` or `<div>`

# Question 6

1. The Authentication HOC which is a very common one for me where protectedRoutes are wrapped around a component and determines if a user has access to a component based on whatever logic is bouding that protected route or component. This one of the very first components I build when I have to deal with applications that deals with certain kind of access based on permission of the users currently on that app.

2. Another example is the styling HOC where components wrapped inside this HOC adds, preserves or removes styling based on logic that applies to that component. We serve a component to the HOC which might have it's own initial style or not and then returns a new and modified component.

3. Error handling HOC is an handling HOC which determines whether to render an error UI display instead of just crashing the app whereby it must have processed and handled the native error and just returns a component free of error complications and just handles it.

# Question 7

In Promises, the errors are handled by the `.then` and `.catch`. `.then` when there are no errors and `.catch` for error exception.

In callbacks, conditional statements are used for error handling after an error object must have been defined as the first argument in the callback function. We must handle the blocks of function call in callbacks to handle the particular error in these functions. One good example is trying to except error for an API call based on status. We do an exception for when it is 400 and another exception when it is 500:Internal server error.

An Async...await error handling is done by wrapping the async code inside a try/catch exception. But if the error can't be handled in a try/catch, it gets handled as a rejected promise instead.


# Question 8

setState() method takes two argument even though the second one is optional. The first argument contains an object of value to the state field name. The second argument is a callback meant to run when the state has been set. 

For example,

`this.setState({ name: "Daniel Adewale" }, () => {
    console.log(this.state.name  + " loves Deel");
});` 

And it is an asynchronous call because it joins a queue of calls and it runs after the current process has ended, and based of my knowledge, it is preferred to a synchronous call because of general performance of the application. Earlier in my career, I run into memory leaks and could be frustrating but later discovered sometimes it's because I am trying to bypass an asynchronous setState call unknowingly. 


# Question 9

So we can migrate a class component to a functional component by first changing the class definition to a functional definition for example, `class HomePage extends Components {}` would be changed to `function HomePage(){}`. After this, we need to remove the `render()` method and use only the `return()` instead where we add our jsx. After this we need to remove the constructors that houses states and use hooks instead. Hooks works only on functional components and everything that can be used with hooks will be replaced for example, class components uses the `componentDidMount`, `componentWillUpdate`, `componentWillMount` and so many more related to state handling, function calls and render mode which will be replaced with a useEffect. State declarations will also be replaced with a useState and many more occasions. After this state calls, and method constructor calls which uses the `this.` will be replaced with the direct names without the `this.` addition. Going forward, these functional related attributes will be used. Hooks will be used more, methods and functions would be declared with the `const`.

I found this task quite interesting earlier in my career but can't relate most of these days because most applications uses functional components

# Question 10

Styles can be added to a component through many ways which are: 

Inline styling: Inline styles can be added through the style attribute which takes a style object with css properties cascaded in camelCase as the field and the value in interger, float or string depending on the css property. 

Normal/External css: This method works by creating an external css file, creating the styles with selectors whether class, id, tag or any other selector and which this external css file can be imported to the react component and freely used by adding the class to the component through the className attribute. 

Normal CSS Styles can be also be added through utility classes. There are lot of providers like Tailwind, Bootstrap, Chakra UI that provides these. 

Styled component: Styled components is a styling library supported by react that allows creating of components and their styles simultaneously inside a JS or TS file. The styles are assigned to a javascript variable and serves as the component itself when it's been used. The is my most preferred styling library as it makes it easy to re-use component styles easily and pass styles through props for identical components. 


# Question 11

HTML strings coming from the server can be rendered using dangerouslySetInnerHTML which is majorly an attribute for element with a closing tag that can house a child element such as div, p, h1, section and more.

Example 

`const htmlString = "<p>I love Deel</p>";`
where htmlString is a variable storing the html string from the server.

# JSX

`<div dangerouslysetInnerHTML={{__html: `${htmlString}`}}><div>`