export function and(...testFunctions) {
    return function(request) {
        return testFunctions.every((fn) => fn(request));
    };
}

export function equalTo(expectedValue) {
    return function(actualValue) {
        return expectedValue == actualValue;
    };
}

export function greaterThan(expectedValue) {
    return function(actualValue) {
        return actualValue > expectedValue;
    }
}