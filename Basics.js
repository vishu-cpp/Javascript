
// ==========================================
// 1. var (The Legacy Way - ES5 and older)
// ==========================================
// - Scope: Function-scoped. It ignores block scopes (like if-statements or loops).
// - Hoisting: Hoisted to the top of its scope and initialized as `undefined`.
// - Re-declaration: Can be re-declared and updated freely.
// - Limits: Can easily cause bugs due to variable leakage and accidental re-declarations.

function varDemo() {
    if (true) {
        var x = 10; // Declared inside a block
    }
    console.log(x); // 10 - Leaked outside the block! (Block scope is ignored)

    var x = 20; // Allowed: Re-declaration is permitted, which can cause bugs.
    console.log(x); // 20
}

// ==========================================
// 2. let (Modern Block-Scoped Variable - ES6)
// ==========================================
// - Scope: Block-scoped (restricted to the nearest curly braces `{}`).
// - Hoisting: Hoisted but not initialized (remains in the Temporal Dead Zone until declared).
// - Re-declaration: Cannot be re-declared in the same scope. Can be updated/reassigned.
// - Use Case: Use when you expect the variable's value to change (e.g., loops, counters, toggles).

function letDemo() {
    if (true) {
        let y = 10;
        console.log(y); // 10
    }
    // console.log(y); // ReferenceError: y is not defined (Properly block-scoped!)

    let y = 20; 
    // let y = 30; // SyntaxError: Identifier 'y' has already been declared
    y = 30; // Allowed: Reassignment is fine.
}

// ==========================================
// 3. const (Modern Block-Scoped Constant - ES6)
// ==========================================
// - Scope: Block-scoped.
// - Hoisting: Hoisted but not initialized (Temporal Dead Zone).
// - Re-declaration & Reassignment: Cannot be re-declared or reassigned. Must be initialized at declaration.
// - Limits: The binding is immutable, but the value itself is not necessarily immutable (e.g., objects and arrays).
// - Use Case: Default choice for all variables. Use it unless you know the variable must be reassigned.

function constDemo() {
    const z = 100;
    // z = 200; // TypeError: Assignment to constant variable.
    // const uninitialized; // SyntaxError: Missing initializer in const declaration

    // Mutability Limit Example:
    const user = { name: "Alice" };
    user.name = "Bob"; // Allowed: Properties of the object can be mutated.
    // user = { name: "Charlie" }; // TypeError: Cannot reassign the variable reference.
}

