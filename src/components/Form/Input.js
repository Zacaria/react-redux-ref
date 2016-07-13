/**
 * Created by chjourdain on 08/07/16.
 */
import React from 'react'

const errormsg = {
    require: "Ce champ est obligatoire"
};

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.getValue = this.getValue.bind(this);
        this.getChecked = this.getChecked.bind(this);
        this.getSelectedOptions = this.getSelectedOptions.bind(this);
        this.getInputDOMNode = this.getInputDOMNode.bind(this);
        this.validate = this.validate.bind(this);
        this.state = {
            classCss: 'form-group',
            error: [],
            validationfct: []
        };
    }

    componentWillMount() {
        this.props._registerInput(this);

        (this.props.validation || []).forEach((value) => {
            if (value === 'require') {
                var array = this.state.validationfct.slice();
                array.push(this.isRequired);
                this.setState({validationfct: array})
            }
        })
    }

    getValue() {
        return this.getInputDOMNode().value;
    }

    getChecked() {
        return this.getInputDOMNode().checked;
    }

    getSelectedOptions() {
        let value;

        Array.prototype.forEach.call(
            this.getInputDOMNode().getElementsByTagName('option'),
            (option) => {
                if (option.selected) {
                     value = option.getAttribute('value') || option.innerHtml;
                    return value;
                }
            });
    }

    getInputDOMNode() {
        return this.refs.input;
    }

    validate() {
        let value;
        if (this.props.type === "select") {
            value = this.getSelectedOptions();
        } else {value = this.getValue();}
        var errortmp = [];
        errortmp = this.state.error.slice();
        this.state.validationfct.forEach((fct) => {
                fct(value, errortmp);
            }
        );
        if (errortmp.length > 0) {
            this.setState({classCss: 'form-group has-error', error: errortmp})
            return false;
        } else {
            this.setState({error: errortmp, classCss: 'form-group'})
            return true;
        }
    }

    isRequired(value, errortmp) {
        if (!value.toString().trim() && ( errortmp.indexOf('require') >= -1)) {
            errortmp.push('require')
        } else {
            var index = errortmp.indexOf('require');
            if (index >= -1) {
                errortmp.splice(index, 1);
            }
        }
    }

    displayError() {
        if (this.state.error.length > 0) return (
            errormsg[this.state.error[0]]
        )
    }

    render() {
        switch (this.props.type) {
            case 'select':
                return (
                    <div className={this.state.classCss}>
                        <label>{this.props.label}</label>
                        <select {...this.props} className='form-control' ref="input" key="input"
                        >
                            {this.props.children}
                        </select>
                        {this.displayError()}</div>);

            case 'checkbox':
                return (
                    <div className={this.state.classCss}>
                        {this.props.label}
                        <input
                            {...this.props}
                            className="form-control"
                            onChange={()=> this.validate()}
                            ref="input"
                        />
                        {this.displayError()}
                    </div>
                )
            default:
                return (
                    <div className={this.state.classCss}>
                        <label>{this.props.label}</label>
                        <input
                            {...this.props}
                            className="form-control"
                            onChange={()=> this.validate()}
                            ref="input"
                        />
                        {this.displayError()}
                    </div>
                )
        }
    }
}

export default Input;