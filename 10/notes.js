/**
 * 1. When we create an instance of object or array in js, js adds methods defined for these types present under prototype i.e. Array.prototype, Object.prototype etc. under __proto__
 *      - eg: let arr = [1, 2, 3]
 *          arr.__proto__ will contain those methods, when we use dot operator, IDE is smart enough to find out if the method is defined on the instance or if it has to be found under __proto__
 *      - this is the core starting concept of prototypes in js.
 * 
 * 2. Polyfills work using the same concept, a dev might use the latest syntax provided by the language but the browser might not have been updated to support the new syntax. In this case browser won't be able to interpret this and throw an error.
 * 3. To prevent such cases polyfills are also passed on to make sure that if new syntax is not available then there is a replacement for it which can be used.
 * 4. To know if new syntax is available or not we check for the presence of methods under type.prototype and if it is not present we use the polyfill for handling the logic.
 */