const fibonacci = function(iFibonacciPosition) {
    if (typeof iFibonacciPosition === 'string')
    {
        iFibonacciPosition = parseInt(iFibonacciPosition);
    }
    if (iFibonacciPosition === 1 || iFibonacciPosition === 0)
    {
        return iFibonacciPosition;
    }
    else if (iFibonacciPosition < 0)
    {
        return "OOPS";
    }
    return fibonacci(iFibonacciPosition - 1) + fibonacci(iFibonacciPosition - 2);
};

// Do not edit below this line
module.exports = fibonacci;
