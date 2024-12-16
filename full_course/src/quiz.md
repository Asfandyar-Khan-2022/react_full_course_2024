1. What is a React component?
Its a container of code that allows the code to be moduler.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The component needs to use pascal case

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

The render is calling the function rather than doing it the react way of calling the function as a tag
