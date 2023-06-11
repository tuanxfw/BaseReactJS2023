import _ from "lodash";

function isEmptyValue(value: any) {
    let result = true
        && (!_.isNaN(value) && !_.isNull(value) && !_.isUndefined(value))
        && (_.isNumber(value) || _.isBoolean(value) || _.isFunction(value) || _.isElement(value) || !_.isEmpty(value));

    return !result;
};

const object = {
    isEmptyValue,
};

export default object;