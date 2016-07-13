/**
 * Created by chjourdain on 08/07/16.
 */
import React from 'react';
import Input from './Input';

export default class Form extends React.Component {

    componentWillMount() {
        this._inputs = {};
    }

    registerInput(input) {
        let type = input.props.type;
        let name = input.props.name;
        if (!name) {
            throw new Error('Input ' + input + ' has no "name" prop');
        }
        this._inputs[name] = input;
    }

    render() {
        return (
            <form ref="form"
                  onSubmit={this._handleSubmit.bind(this)}
                  className={this.props.className}>
                {this._renderChildren(this.props.children)}
            </form>
        );
    }

    getValues() {
        return Object.keys(this._inputs).reduce((values, name) => {
            values[name] = this._getValue(name);
            return values;
        }, {});
    }

    _renderChildren(children) {
        if (typeof children !== 'object' || children === null) {
            return children;
        }
        let childrenCount = React.Children.count(children);
        if (childrenCount > 1) {
            return React.Children.map(children, child => this._renderChild(child));
        } else if (childrenCount === 1) {
            return this._renderChild(Array.isArray(children) ? children[0] : children);
        }
    }

    _renderChild(child) {
        if (typeof child !== 'object' || child === null) {
            return child;
        }

        if (child.type === Input || (
                child.type &&
                child.type.prototype !== null && (
                    child.type.prototype instanceof Input
                )
            )
        ) {
            let name = child.props && child.props.name;
            if (!name) {
                throw new Error('Can not add input without "name" attribute');
            }
            let newProps = {
                _registerInput: this.registerInput.bind(this),
            };
            return React.cloneElement(child, newProps);
        }
        else {
            return React.cloneElement(child, {}, this._renderChildren(child.props && child.props.children));
        }
    }

    _validateAll() {
        let valid = true;
        Object.keys(this._inputs).forEach((name)=>{
            valid= this._inputs[name].validate() && valid;}
        )
        return valid;
    }

    _getValue(iptName) {
        let input = this._inputs[iptName];
        if (Array.isArray(input)) {
            console.warn('Multiple inputs use the same name "' + iptName + '"');

            return false;
        }
        let value;
        if (input.props.type === 'checkbox') {
            value = input.getChecked();
        } else if (input.props.type === 'selected' ){
            value = input.getSelectedOptions();
        } else {
            value = input.getValue();
        }
        return value;
    }
    

    _handleSubmit(e) {
        if (e) {
            e.preventDefault();
        }
        let values = this.getValues();
        if (this._validateAll()) {
            this.props.onSubmit(values);
        }
    }
}
