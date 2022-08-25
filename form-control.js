export default class FormControl {
    /**
     * @type {string}
     */
    value;
    /**
     * @type {{[key:string] : any}}
     */
    errors = {};
    /**
     * @type {Function[]}
     */
    #validators = [];
    /**
     * @type {boolean}
     */
    dirty = false;
    /**
     * @type {boolean}
     */
    touched = false;
    /**
     * @type {boolean}
     */
    valid = false;
    /**
     * @type {React.RefObject<HTMLInputElement> | null}
     */
    #ref = null;
    /**
     * @type {Function | null}
     */
    #setState = null;
    #validator_time_out;
    #set_value_time_out;

    /**
     * @param {string} value
     * @param {Function[]} validators
     */
    constructor(value = '', validators = []) {
        this.value = value;
        this.#validators = validators;
        this.#validate();
        this.set_value(value);
    }

    /**
     * @return void
     */
    #validate() {
        if (this.#validator_time_out) {
            clearTimeout(this.#validator_time_out);
        }
        let errors = {}
        for (let validator of this.#validators) {
            const error = validator(this.value)
            if (error) errors = {...errors, ...error}
        }
        this.errors = errors;
        this.valid = !Object.keys(errors).length;
        if (!this.#setState) {
            this.#validator_time_out = setTimeout(this.#validate.bind(this), 1000);
        } else {
            this.#setState({valid: this.valid, errors});
        }
    }

    /**
     * @param {Event} e
     */
    on_change = (e) => {
        this.dirty = true;
        this.value = e.target.value;
        this.#validate();
        if (this.#setState)
            this.#setState({dirty: true});
    }

    /**
     * @return void
     */
    on_blur = () => {
        this.touched = true;
        if (this.#setState)
            this.#setState({touched: true})
    };

    /**
     * @param {Object | null} ref
     * @param {Function} setState
     */
    set_ref_and_state(ref, setState) {
        this.#ref = ref;
        this.#setState = setState;
    }

    /**
     * @param {string} value
     */
    set_value(value) {
        if (this.#set_value_time_out){
            clearTimeout(this.#set_value_time_out)
        }
        this.value = value;
        if (this.#ref) {
            this.#ref["current"].value = value;
        } else {
             this.#set_value_time_out = setTimeout(() => {
                this.set_value(value);
            }, 1000);
        }
    }

    /**
     * @param {{[key:string]:string}} error
     */
    set_error(error) {
        this.errors = {...this.errors, ...error};
        this.valid = false;
        this.#setState({errors: this.errors, valid: this.valid});
    }

}