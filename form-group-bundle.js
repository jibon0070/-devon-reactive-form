"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

class FormGroup extends _react.default.Component {
    constructor(...args) {
        super(...args);
        this.ref = /*#__PURE__*/ (0, _react.createRef)();
        this.state = {
            touched: false,
            dirty: false,
            valid: false,
            errors: {}
        };
        this.props = void 0;
    }

    componentDidMount() {
        if (!this.props.form_control || !this.props.name)
            throw new DOMException("Invalid implementation of form group");
        this.props.form_control.set_ref_and_state(
            this.ref,
            this.setState.bind(this)
        );
    }

    render() {
        var _this$props$options, _this$props$type;

        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            id: "form-group",
            className: this.props.className + " form-group",
            children: [
                this.props.type === "select"
                    ? /*#__PURE__*/ (0, _jsxRuntime.jsxs)("select", {
                        ref: this.ref,
                        onChange: this.props.form_control.on_change,
                        className:
                            ((!this.state.valid &&
                                (this.state.dirty || this.state.touched)) ||
                            (!this.state.valid && this.props.clicked)
                                ? "is-invalid "
                                : "") + "form-control",
                        onBlur: this.props.form_control.on_blur,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("option", {
                                value: "",
                                children: ["Select ", this.props.name]
                            }),
                            (_this$props$options = this.props.options) == null
                                ? void 0
                                : _this$props$options.map((row, i) => {
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(
                                        "option",
                                        {
                                            value: row.value,
                                            children: row.name
                                        },
                                        i
                                    );
                                })
                        ]
                    })
                    : this.props.type === "textarea"
                        ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("textarea", {
                            ref: this.ref,
                            placeholder: this.props.name,
                            onChange: this.props.form_control.on_change,
                            className:
                                ((!this.state.valid &&
                                    (this.state.dirty || this.state.touched)) ||
                                (!this.state.valid && this.props.clicked)
                                    ? "is-invalid "
                                    : "") + "form-control",
                            onBlur: this.props.form_control.on_blur
                        })
                        : /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                            autoComplete: "new-password",
                            ref: this.ref,
                            type:
                                (_this$props$type = this.props.type) != null
                                    ? _this$props$type
                                    : "text",
                            placeholder: this.props.name,
                            onChange: (e) => {
                                var _this$props$on_change, _this$props;

                                this.props.form_control.on_change(e);
                                (_this$props$on_change = (_this$props = this.props)
                                    .on_change) == null
                                    ? void 0
                                    : _this$props$on_change.call(_this$props, e);
                            },
                            className:
                                ((!this.state.valid &&
                                    (this.state.dirty || this.state.touched)) ||
                                (!this.state.valid && this.props.clicked)
                                    ? "is-invalid "
                                    : "") + "form-control",
                            onBlur: this.props.form_control.on_blur,
                            accept: "image/*"
                        }),
                (!this.state.valid && (this.state.dirty || this.state.touched)) ||
                (!this.state.valid && this.props.clicked)
                    ? /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "invalid-feedback",
                        children: [
                            Object.keys(this.state.errors).includes("required")
                                ? /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                    children: [this.props.name, " is required."]
                                })
                                : null,
                            Object.keys(this.state.errors).includes("username")
                                ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    children: this.state.errors.username
                                })
                                : null,
                            Object.keys(this.state.errors).includes("password")
                                ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    children: this.state.errors.password
                                })
                                : null
                        ]
                    })
                    : null
            ]
        });
    }
}

exports.default = FormGroup;
