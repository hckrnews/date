class Parse extends RegExp {
    [Symbol.match](str) {
        const result = RegExp.prototype[Symbol.match].call(this, str);
        if (result) {
            return result;
        }
        return null;
    }
}

export default Parse;
