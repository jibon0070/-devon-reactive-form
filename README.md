# Reactive Form


Use forms in react easily.

## Installation

Run this command in a React project
```bash
npm i jibon-reactive-form
```

## Usage

```
import React from "react";
import ReactiveForm from 'jibon-reactive-form/reactive-form'
import FormControl from 'jibon-reactive-form/form-control'
import FormGroup from 'jibon-reactive-form/form-group-bundle'
import Validators from 'jibon-reactive-form/validators'


export default class Home extends React.Component{
    data = new ReactiveForm({
        username: new FormControl('', [Validators.required, Validators.username]),
        email: new FormControl('', [Validators.required, Validators.email])
    })
    render() {
        return (
            <form onSubmit={e=>this.submit(e)}>
                <FormGroup form_control={this.data.get('name')} name={'name'} clicked={false} />
            </form>
        );
    }
    submit(e){
        e.preventDefault();
        console.log(this.data.value);
    }
}
```

## Notes:


### FormGroup Component

`<FormGroup />` component accepts 7 props, 3 is required and 4 is optional.<br>
1. `form_control` is a required prop. It expects a `FormControl` type value.
2. `name` is a required prop. It expects a `string` type value. It will display in the placeholder of input.
3. `clicked` is a required prop. It expects `boolean` type value to know the form is already submitted or not.
4. `className` is an optional prop. It expects a `string` type value. It passes className to the parent `div` element.
5. `type` is an optional prop. It expects a `date|email|file|number|password|text|select|textarea` type value. It determines the input type. Default is `text`.
6. `options` is an optional prop. It expects a `{name:string;value:string}[]` type prop. It populates option element in select element. It is kinda required prop when you use `select` as a `type` prop.
7. `on_change` is an optional prop. It expects a `(Event) => void` type function. Passed function runs every time input value changes.

---
### FormControl Class
`FormControl` class expects 2 constructor argument, provides 5 property and 1 method.

##### Constructor arguments
1. `value` expects a `string` type value. It will pre-populate the input field. Default is `empty string`.
2. `validators` expects a `((value:string) => {[key:string]:any} | null) | ((*) => (value:string) => {[key:string]:any} | null)` type function. Every time the input changes this function will run. If the function returns `null` then the input is valid. If the function returns other than `null|false` input becomes invalid and the input gets a new class named `is-invalid`.
##### Properties
1. `value` returns the current value of the control.
2. `errors` returns the currently attached errors in the control.
3. `dirty` returns a `boolean` value if the control's value is changed or not.
4. `touched` returns a `boolean` value if the control is interacted with.
5. `valid` returns a `boolean` value if the control is valid.
##### Method
1. `set_value(value:string)` expects 1 `string` argument that is passed to the value property.

---
### FormGroup Class
`FormGroup` class expects 1 constructor argument.
##### Constructor argument
1. `fields` expects a `{[key:string]: FormControl}` argument.
