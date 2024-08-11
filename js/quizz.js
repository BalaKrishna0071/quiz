// Java Quiz Questions
const javaQuestions = [
    {
        question: "What is the size of int data type in Java?",
        options: ["4 bytes", "8 bytes", "2 bytes", "1 byte"],
        answer: "4 bytes"
    },
    {
        question: "Which keyword is used to create a subclass in Java?",
        options: ["this", "extends", "super", "import"],
        answer: "extends"
    },
    {
        question: "Which of these is not a Java feature?",
        options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
        answer: "Use of pointers"
    },
    {
        question: "What is the return type of the hashCode() method in the Object class?",
        options: ["int", "Object", "long", "void"],
        answer: "int"
    },
    {
        question: "What is the default value of an instance variable in Java?",
        options: ["0", "null", "Depends on the data type", "not defined"],
        answer: "Depends on the data type"
    },
    {
        question: "What does JVM stand for?",
        options: ["Java Virtual Machine", "Java Variable Method", "Java Virtual Method", "Java Value Machine"],
        answer: "Java Virtual Machine"
    },
    {
        question: "Which method is used to start a thread in Java?",
        options: ["start()", "run()", "init()", "begin()"],
        answer: "start()"
    },
    {
        question: "What is the purpose of the 'final' keyword in Java?",
        options: ["To define constants", "To prevent inheritance", "To prevent method overriding", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of the following is not an access modifier in Java?",
        options: ["public", "protected", "private", "hidden"],
        answer: "hidden"
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "0", "null"],
        answer: "false"
    },
    {
        question: "What is the result of 7 / 2 in Java?",
        options: ["3", "3.5", "2", "3.5"],
        answer: "3"
    },
    {
        question: "Which package is imported by default in Java?",
        options: ["java.util", "java.lang", "java.io", "java.net"],
        answer: "java.lang"
    },
    {
        question: "What is the base class of all classes in Java?",
        options: ["Object", "Class", "Base", "Super"],
        answer: "Object"
    },
    {
        question: "What is the purpose of the 'static' keyword in Java?",
        options: ["To create instance methods", "To define class methods", "To create static methods", "To define instance variables"],
        answer: "To define class methods"
    },
    {
        question: "Which operator is used to compare two values in Java?",
        options: ["=", "==", "===", "!="],
        answer: "=="
    },
    {
        question: "What is the size of a byte in Java?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: "1 byte"
    },
    {
        question: "What is the correct way to declare an array in Java?",
        options: ["int[] arr;", "int arr[];", "int arr;", "Both A and B"],
        answer: "Both A and B"
    },
    {
        question: "Which of the following is a valid declaration of a method in Java?",
        options: ["public void method()", "private void method[]", "public void method[]", "void public method()"],
        answer: "public void method()"
    },
    {
        question: "What is the result of the following expression: '5' + 2?",
        options: ["7", "52", "Type error", "None of the above"],
        answer: "52"
    },
    {
        question: "Which of the following is used to handle exceptions in Java?",
        options: ["try-catch", "throw-catch", "catch-throw", "try-finally"],
        answer: "try-catch"
    },
    {
        question: "Which of these is a valid identifier in Java?",
        options: ["_myVar", "my-Var", "2myVar", "my Var"],
        answer: "_myVar"
    },
    {
        question: "What is encapsulation in Java?",
        options: ["Hiding the internal state of an object", "The ability to inherit properties", "The use of multiple interfaces", "None of the above"],
        answer: "Hiding the internal state of an object"
    },
    {
        question: "What does 'Polymorphism' mean in Java?",
        options: ["Multiple forms", "Single form", "Code reusability", "Encapsulation"],
        answer: "Multiple forms"
    },
    {
        question: "What is a constructor in Java?",
        options: ["A method used to initialize objects", "A method used to destroy objects", "A method that returns a value", "None of the above"],
        answer: "A method used to initialize objects"
    },
    {
        question: "Which keyword is used to prevent a method from being overridden?",
        options: ["static", "final", "abstract", "protected"],
        answer: "final"
    },
    {
        question: "What is the default access modifier for a class in Java?",
        options: ["public", "private", "protected", "package-private"],
        answer: "package-private"
    },
    {
        question: "What is the purpose of the 'super' keyword in Java?",
        options: ["To refer to parent class methods", "To create a new class", "To define an interface", "None of the above"],
        answer: "To refer to parent class methods"
    },
    {
        question: "What will be the output of the following code: System.out.println(10 + 20 + 'A');?",
        options: ["30A", "30", "110", "Type error"],
        answer: "110"
    },
    {
        question: "What does 'Inheritance' mean in Java?",
        options: ["A class inherits the properties of another class", "A class inherits multiple properties", "A class hides the properties of another class", "None of the above"],
        answer: "A class inherits the properties of another class"
    },
    {
        question: "Which of these is a marker interface in Java?",
        options: ["Serializable", "Cloneable", "Remote", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is a package in Java?",
        options: ["A collection of related classes and interfaces", "A single class", "A method of a class", "None of the above"],
        answer: "A collection of related classes and interfaces"
    },
    {
        question: "What is the output of the following code: System.out.println(5 == 5 ? 'A' : 'B');?",
        options: ["A", "B", "AB", "Type error"],
        answer: "A"
    },
    {
        question: "Which class is the superclass of all exceptions in Java?",
        options: ["Exception", "Throwable", "Error", "RuntimeException"],
        answer: "Throwable"
    },
    {
        question: "What is the result of the expression 5.0 / 2?",
        options: ["2.5", "2", "3", "Type error"],
        answer: "2.5"
    },
    {
        question: "Which of these is used to create a new thread in Java?",
        options: ["Thread class", "Runnable interface", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        question: "What is the purpose of the 'this' keyword in Java?",
        options: ["Refers to the current object", "Refers to a static variable", "Refers to a superclass", "None of the above"],
        answer: "Refers to the current object"
    },
    {
        question: "What is the maximum value of a byte in Java?",
        options: ["127", "255", "65535", "2147483647"],
        answer: "127"
    },
    {
        question: "Which of the following is used to define a constant in Java?",
        options: ["final", "const", "static", "immutable"],
        answer: "final"
    },
    {
        question: "Which of these collections allows duplicates?",
        options: ["Set", "List", "Map", "Queue"],
        answer: "List"
    },
    {
        question: "What is the use of 'synchronized' keyword in Java?",
        options: ["To synchronize methods or blocks", "To synchronize variables", "To prevent deadlocks", "None of the above"],
        answer: "To synchronize methods or blocks"
    },
    {
        question: "Which of these keywords is used to define an abstract class?",
        options: ["abstract", "interface", "class", "public"],
        answer: "abstract"
    },
    {
        question: "What is the range of a short data type in Java?",
        options: ["-32,768 to 32,767", "0 to 65,535", "-128 to 127", "-2,147,483,648 to 2,147,483,647"],
        answer: "-32,768 to 32,767"
    },
    {
        question: "What will be the output of System.out.println('A' + 1);?",
        options: ["66", "A1", "A", "Type error"],
        answer: "66"
    },
    {
        question: "Which method is used to read a line of text from the console?",
        options: ["readLine()", "nextLine()", "getLine()", "scanLine()"],
        answer: "nextLine()"
    },
    {
        question: "What is the result of the expression '10 % 3' in Java?",
        options: ["1", "3", "10", "2"],
        answer: "1"
    },
    {
        question: "Which keyword is used to handle exceptions in Java?",
        options: ["throw", "throws", "catch", "try"],
        answer: "catch"
    },
    {
        question: "Which of the following is not a valid type of loop in Java?",
        options: ["for", "while", "do-while", "loop"],
        answer: "loop"
    },
    {
        question: "Which class in Java is used to read user input from the console?",
        options: ["Scanner", "Reader", "InputStream", "BufferedReader"],
        answer: "Scanner"
    },
    {
        question: "What is the default value of an instance variable in Java?",
        options: ["0", "null", "Depends on the data type", "Not defined"],
        answer: "Depends on the data type"
    },
    {
        question: "What is the purpose of the 'volatile' keyword in Java?",
        options: ["To make a variable visible across threads", "To prevent a method from being overridden", "To define a constant", "None of the above"],
        answer: "To make a variable visible across threads"
    },
    {
        question: "What will be the output of the following code: System.out.println(1 + 2 + 'A' - 'B');?",
        options: ["2", "65", "-1", "66"],
        answer: "66"
    },
    {
        question: "Which of these is a valid declaration of a constant in Java?",
        options: ["final int MAX = 10;", "const int MAX = 10;", "static final int MAX = 10;", "Both A and C"],
        answer: "Both A and C"
    },
    {
        question: "What is the default value of a local variable in Java?",
        options: ["0", "null", "Depends on the data type", "Not defined"],
        answer: "Not defined"
    },
    {
        question: "Which of these is not a Java keyword?",
        options: ["interface", "enum", "native", "vector"],
        answer: "vector"
    },
    {
        question: "Which method in Java is used to convert a string to an integer?",
        options: ["parseInt()", "toInteger()", "convert()", "parse()"],
        answer: "parseInt()"
    },
    {
        question: "What is the purpose of the 'default' keyword in interfaces?",
        options: ["To define default methods in an interface", "To define default values for variables", "To prevent method overriding", "None of the above"],
        answer: "To define default methods in an interface"
    },
    {
        question: "What is the result of 10 >> 2 in Java?",
        options: ["2", "5", "40", "15"],
        answer: "2"
    },
    {
        question: "Which of these is a valid way to declare a multi-dimensional array in Java?",
        options: ["int[][] arr;", "int arr[][];", "int[] arr[];", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the output of the following code: System.out.println(5 * 3 / 2);?",
        options: ["7", "8", "15", "7.5"],
        answer: "7"
    },
    {
        question: "Which method is used to get the length of an array in Java?",
        options: ["length()", "size()", "getLength()", "length"],
        answer: "length"
    },
    {
        question: "What is a lambda expression in Java?",
        options: ["A way to define anonymous functions", "A way to define anonymous classes", "A way to define interfaces", "None of the above"],
        answer: "A way to define anonymous functions"
    },
    {
        question: "Which of these is not a valid Java exception?",
        options: ["ArithmeticException", "ArrayIndexOutOfBoundsException", "NullPointerException", "FileNotFoundException"],
        answer: "FileNotFoundException"
    },
    {
        question: "Which keyword is used to define an interface in Java?",
        options: ["interface", "abstract", "class", "define"],
        answer: "interface"
    },
    {
        question: "What does the 'continue' keyword do in Java?",
        options: ["Skips the current iteration of a loop", "Exits the loop", "Continues the loop after an exception", "None of the above"],
        answer: "Skips the current iteration of a loop"
    },
    {
        question: "What is the purpose of the 'break' keyword in Java?",
        options: ["Exits the loop", "Skips the current iteration", "Continues the next iteration", "None of the above"],
        answer: "Exits the loop"
    },
    {
        question: "What is the result of the following code: System.out.println(10 + 20 + \" = \" + 30);?",
        options: ["30 = 30", "30 = 10", "10 + 20 = 30", "30 = 10 + 20"],
        answer: "30 = 30"
    },
    {
        question: "Which keyword is used to prevent a class from being extended in Java?",
        options: ["final", "static", "abstract", "private"],
        answer: "final"
    },
    {
        question: "Which method is used to convert an integer to a string in Java?",
        options: ["toString()", "convert()", "parse()", "string()"],
        answer: "toString()"
    },
    {
        question: "Which of the following is used to define an immutable class?",
        options: ["final class", "abstract class", "static class", "sealed class"],
        answer: "final class"
    },
    {
        question: "What is the use of the 'instanceof' keyword in Java?",
        options: ["To test whether an object is an instance of a class", "To create a new instance of a class", "To define an instance method", "None of the above"],
        answer: "To test whether an object is an instance of a class"
    },
    {
        question: "Which of these is used to declare an abstract method in Java?",
        options: ["abstract", "final", "static", "virtual"],
        answer: "abstract"
    },
    {
        question: "What will be the output of the following code: System.out.println(7 + \" is a prime number\");?",
        options: ["7 is a prime number", "7is a prime number", "is a prime number", "Type error"],
        answer: "7 is a prime number"
    },
    {
        question: "Which method is used to terminate a thread in Java?",
        options: ["stop()", "terminate()", "destroy()", "exit()"],
        answer: "stop()"
    },
    {
        question: "Which of these is a functional interface in Java?",
        options: ["Runnable", "Callable", "Comparator", "Function"],
        answer: "Function"
    },
    {
        question: "Which of the following is a keyword in Java used for multi-threading?",
        options: ["volatile", "synchronized", "transient", "static"],
        answer: "synchronized"
    }
];
const pythonQuestions = [
    {
        question: "What is the size of an int in Python?",
        options: ["4 bytes", "8 bytes", "Depends on the system", "1 byte"],
        answer: "Depends on the system"
    },
    {
        question: "Which keyword is used to create a function in Python?",
        options: ["func", "define", "def", "function"],
        answer: "def"
    },
    {
        question: "Which of these is not a Python feature?",
        options: ["Dynamic typing", "Interpreted", "Use of pointers", "Object-oriented"],
        answer: "Use of pointers"
    },
    {
        question: "What is the return type of the len() function in Python?",
        options: ["int", "str", "list", "None"],
        answer: "int"
    },
    {
        question: "What is the default value of a variable in Python?",
        options: ["0", "None", "Depends on the data type", "Not defined"],
        answer: "Not defined"
    },
    {
        question: "What does PEP stand for in Python?",
        options: ["Python Enhancement Proposal", "Python Effective Programming", "Python Environment Proposal", "Python Entry Point"],
        answer: "Python Enhancement Proposal"
    },
    {
        question: "Which method is used to start a thread in Python?",
        options: ["begin()", "start()", "run()", "init()"],
        answer: "start()"
    },
    {
        question: "What is the purpose of the 'final' keyword in Python?",
        options: ["To define constants", "To prevent method overriding", "To define final variables", "Python does not have 'final' keyword"],
        answer: "Python does not have 'final' keyword"
    },
    {
        question: "Which of the following is not a Python built-in type?",
        options: ["list", "tuple", "dict", "class"],
        answer: "class"
    },
    {
        question: "What is the result of 7 // 2 in Python?",
        options: ["3", "3.5", "2", "3.0"],
        answer: "3"
    },
    {
        question: "Which module is used for working with regular expressions in Python?",
        options: ["re", "regex", "reg", "expression"],
        answer: "re"
    },
    {
        question: "What is the base class of all exceptions in Python?",
        options: ["Exception", "Error", "BaseException", "Throwable"],
        answer: "BaseException"
    },
    {
        question: "What is the purpose of the 'self' keyword in Python?",
        options: ["To refer to the current object", "To create a new instance", "To define class methods", "None of the above"],
        answer: "To refer to the current object"
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "*", "**", "^^"],
        answer: "**"
    },
    {
        question: "What is the size of a list in Python?",
        options: ["Fixed", "Variable", "Depends on the system", "Depends on the data type"],
        answer: "Variable"
    },
    {
        question: "Which of the following is a valid way to declare a function in Python?",
        options: ["def myFunc():", "function myFunc():", "create myFunc():", "None of the above"],
        answer: "def myFunc():"
    },
    {
        question: "What is the output of the following code: print('Hello' + 1)?",
        options: ["Hello1", "Type error", "Hello", "None of the above"],
        answer: "Type error"
    },
    {
        question: "Which statement is used to handle exceptions in Python?",
        options: ["try-except", "catch-finally", "throw-catch", "try-catch"],
        answer: "try-except"
    },
    {
        question: "Which of these is not a valid identifier in Python?",
        options: ["_myVar", "my-Var", "2myVar", "my_Var"],
        answer: "2myVar"
    },
    {
        question: "What does 'Duck Typing' mean in Python?",
        options: ["An object is defined by its behavior", "Type of variable", "Static type checking", "None of the above"],
        answer: "An object is defined by its behavior"
    },
    {
        question: "What does the 'lambda' keyword do in Python?",
        options: ["Creates an anonymous function", "Creates a new class", "Defines a constant", "None of the above"],
        answer: "Creates an anonymous function"
    },
    {
        question: "What is the result of the following expression: '5' + str(2)?",
        options: ["52", "7", "Type error", "5 2"],
        answer: "52"
    },
    {
        question: "Which of these is used to create a generator in Python?",
        options: ["yield", "return", "continue", "next"],
        answer: "yield"
    },
    {
        question: "What is a tuple in Python?",
        options: ["Immutable sequence", "Mutable sequence", "List-like structure", "None of the above"],
        answer: "Immutable sequence"
    },
    {
        question: "Which of these is a valid way to handle multiple exceptions in Python?",
        options: ["except (Exception1, Exception2):", "except Exception1, Exception2:", "except (Exception1 or Exception2):", "except [Exception1, Exception2]:"],
        answer: "except (Exception1, Exception2):"
    },
    {
        question: "Which function is used to read input from the user in Python?",
        options: ["input()", "read()", "scan()", "get()"],
        answer: "input()"
    },
    {
        question: "Which of these methods is used to add an element to a list in Python?",
        options: ["add()", "append()", "insert()", "push()"],
        answer: "append()"
    },
    {
        question: "What will be the output of the following code: print(1 + 2 + 3 * 4)?",
        options: ["15", "14", "10", "9"],
        answer: "15"
    },
    {
        question: "Which keyword is used to create a class in Python?",
        options: ["class", "create", "def", "object"],
        answer: "class"
    },
    {
        question: "What is the purpose of the 'with' statement in Python?",
        options: ["To handle resources efficiently", "To define a function", "To create a class", "None of the above"],
        answer: "To handle resources efficiently"
    },
    {
        question: "What is the purpose of the 'pass' statement in Python?",
        options: ["To do nothing", "To return a value", "To break out of a loop", "None of the above"],
        answer: "To do nothing"
    },
    {
        question: "Which method is used to convert a string to an integer in Python?",
        options: ["int()", "convert()", "parse()", "string()"],
        answer: "int()"
    },
    {
        question: "What is the result of 7 % 3 in Python?",
        options: ["1", "2", "3", "0"],
        answer: "1"
    },
    {
        question: "Which of these is not a valid string method in Python?",
        options: ["upper()", "lower()", "replace()", "concat()"],
        answer: "concat()"
    },
    {
        question: "What is the result of the following code: print([1, 2, 3] * 2)?",
        options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2, 4, 6]", "[1, 2, 3, 2]"],
        answer: "[1, 2, 3, 1, 2, 3]"
    },
    {
        question: "Which method is used to remove whitespace from the beginning and end of a string?",
        options: ["strip()", "trim()", "cut()", "clean()"],
        answer: "strip()"
    },
    {
        question: "What is the output of the following code: print(type([]))?",
        options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
        answer: "<class 'list'>"
    },
    {
        question: "Which of these is a valid way to define a class method in Python?",
        options: ["@classmethod", "def method(cls):", "def method(self):", "Both A and B"],
        answer: "Both A and B"
    },
    {
        question: "What is the use of the 'enumerate' function in Python?",
        options: ["To iterate over a list with index", "To convert a list to a tuple", "To sort a list", "None of the above"],
        answer: "To iterate over a list with index"
    },
    {
        question: "Which keyword is used to define a method that does not return any value?",
        options: ["void", "return", "None", "empty"],
        answer: "None"
    },
    {
        question: "What does the 'break' statement do in Python?",
        options: ["Exits the nearest enclosing loop", "Continues to the next iteration of a loop", "Exits the program", "None of the above"],
        answer: "Exits the nearest enclosing loop"
    },
    {
        question: "What is the result of the following code: print([1, 2] + [3, 4])?",
        options: ["[1, 2, 3, 4]", "[4, 3, 2, 1]", "[1, 2] [3, 4]", "Type error"],
        answer: "[1, 2, 3, 4]"
    },
    {
        question: "Which of these is used to create a dictionary in Python?",
        options: ["{}", "[]", "()", "None of the above"],
        answer: "{}"
    },
    {
        question: "What is the output of the following code: print(3 == 3.0)?",
        options: ["True", "False", "Type error", "None"],
        answer: "True"
    },
    {
        question: "Which of these functions is used to sort a list in Python?",
        options: ["sort()", "order()", "arrange()", "None of the above"],
        answer: "sort()"
    },
    {
        question: "What is the purpose of the 'assert' keyword in Python?",
        options: ["To test if a condition is true", "To handle exceptions", "To define a constant", "None of the above"],
        answer: "To test if a condition is true"
    },
    {
        question: "What is the result of the following code: print('a' in 'apple')?",
        options: ["True", "False", "None", "Type error"],
        answer: "True"
    },
    {
        question: "Which of these is a mutable data type in Python?",
        options: ["list", "tuple", "string", "int"],
        answer: "list"
    },
    {
        question: "What is the result of 2 ** 3 in Python?",
        options: ["6", "8", "9", "7"],
        answer: "8"
    },
    {
        question: "What does the 'global' keyword do in Python?",
        options: ["Declares a global variable", "Declares a local variable", "Declares a constant", "None of the above"],
        answer: "Declares a global variable"
    },
    {
        question: "Which method is used to add an element to the end of a set in Python?",
        options: ["add()", "append()", "insert()", "push()"],
        answer: "add()"
    },
    {
        question: "What is the purpose of the 'del' statement in Python?",
        options: ["To delete an object", "To define a method", "To create a new class", "None of the above"],
        answer: "To delete an object"
    },
    {
        question: "What will be the output of the following code: print(3 * 'a')?",
        options: ["aaa", "a a a", "Type error", "3 a"],
        answer: "aaa"
    },
    {
        question: "Which method is used to remove an item from a dictionary in Python?",
        options: ["pop()", "remove()", "delete()", "discard()"],
        answer: "pop()"
    },
    {
        question: "What is the output of the following code: print(type(()))?",
        options: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        answer: "<class 'tuple'>"
    },
    {
        question: "Which of the following is used to handle multiple conditions in Python?",
        options: ["if-elif-else", "switch-case", "try-except", "None of the above"],
        answer: "if-elif-else"
    },
    {
        question: "Which keyword is used to define a class attribute in Python?",
        options: ["class", "static", "def", "None of the above"],
        answer: "static"
    },
    {
        question: "What is the purpose of the 'import' statement in Python?",
        options: ["To include modules", "To define a function", "To create a class", "None of the above"],
        answer: "To include modules"
    }
];
const javascriptQuestions = [
    {
        question: "What does 'var' keyword do in JavaScript?",
        options: ["Declares a variable", "Defines a constant", "Creates a class", "Defines a function"],
        answer: "Declares a variable"
    },
    {
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        options: ["To declare a block-scoped variable", "To create a new object", "To define a function", "To create a constant"],
        answer: "To declare a block-scoped variable"
    },
    {
        question: "How do you define a constant in JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const"
    },
    {
        question: "What is the output of 'console.log(typeof null)'?",
        options: ["object", "null", "undefined", "number"],
        answer: "object"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["The current object", "The parent object", "The global object", "The function scope"],
        answer: "The current object"
    },
    {
        question: "How can you convert a string to an integer in JavaScript?",
        options: ["parseInt()", "toInteger()", "Number()", "convert()"],
        answer: "parseInt()"
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: ["'==' compares values, '===' compares values and types", "'==' compares types, '===' compares values", "'==' is for loose equality, '===' is for strict equality", "'==' is for numbers, '===' is for strings"],
        answer: "'==' compares values, '===' compares values and types"
    },
    {
        question: "How do you declare a function in JavaScript?",
        options: ["function name() {}", "func name() {}", "declare name() {}", "function = name() {}"],
        answer: "function name() {}"
    },
    {
        question: "What is a closure in JavaScript?",
        options: ["A function with access to variables from its outer scope", "A block of code that runs asynchronously", "A special type of object", "A function that doesn't return a value"],
        answer: "A function with access to variables from its outer scope"
    },
    {
        question: "How can you add a property to an object in JavaScript?",
        options: ["object.property = value", "object['property'] = value", "object.add(property, value)", "object.set(property, value)"],
        answer: "object.property = value"
    },
    {
        question: "What is the purpose of the 'prototype' property in JavaScript?",
        options: ["To add properties and methods to an object", "To create a new object", "To define a class", "To modify the constructor"],
        answer: "To add properties and methods to an object"
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        options: ["Not a Number", "Number and Null", "Non-numeric", "Not available Number"],
        answer: "Not a Number"
    },
    {
        question: "How do you create an array in JavaScript?",
        options: ["let array = [];", "let array = {}; ", "let array = new Array();", "Both A and C"],
        answer: "Both A and C"
    },
    {
        question: "What is the output of '0.1 + 0.2 == 0.3' in JavaScript?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "false"
    },
    {
        question: "What does the 'map()' method do in JavaScript?",
        options: ["Transforms each element of an array", "Filters elements of an array", "Reduces an array to a single value", "Sorts elements of an array"],
        answer: "Transforms each element of an array"
    },
    {
        question: "What is an IIFE in JavaScript?",
        options: ["Immediately Invoked Function Expression", "Integrated Interface Function Expression", "Initial Invocation Function Expression", "Inner Instantiation Function Expression"],
        answer: "Immediately Invoked Function Expression"
    },
    {
        question: "What is 'undefined' in JavaScript?",
        options: ["A variable that has not been assigned a value", "A variable that has been assigned null", "A data type", "A function that returns nothing"],
        answer: "A variable that has not been assigned a value"
    },
    {
        question: "How can you check if a variable is an array in JavaScript?",
        options: ["Array.isArray(variable)", "variable instanceof Array", "typeof variable === 'array'", "variable.constructor === Array"],
        answer: "Array.isArray(variable)"
    },
    {
        question: "What is 'JSON' in JavaScript?",
        options: ["JavaScript Object Notation", "JavaScript Output Notation", "JavaScript Object Network", "JavaScript Output Network"],
        answer: "JavaScript Object Notation"
    },
    {
        question: "What is a promise in JavaScript?",
        options: ["An object representing the eventual completion or failure of an asynchronous operation", "A function that returns a value", "An error handling mechanism", "A way to execute synchronous code asynchronously"],
        answer: "An object representing the eventual completion or failure of an asynchronous operation"
    },
    {
        question: "What does 'event.preventDefault()' do in JavaScript?",
        options: ["Stops the default action of an event from happening", "Prevents an event from bubbling up", "Disables an event listener", "Logs the event to the console"],
        answer: "Stops the default action of an event from happening"
    },
    {
        question: "How do you create a new object in JavaScript?",
        options: ["let obj = new Object();", "let obj = {}; ", "let obj = Object.create(null);", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the purpose of the 'bind()' method in JavaScript?",
        options: ["To create a new function with a specified 'this' value and arguments", "To bind a function to an event", "To execute a function immediately", "To delay the execution of a function"],
        answer: "To create a new function with a specified 'this' value and arguments"
    },
    {
        question: "What does 'async/await' syntax do in JavaScript?",
        options: ["Makes asynchronous code easier to write and read", "Creates synchronous code", "Allows functions to be executed in parallel", "Provides error handling for synchronous code"],
        answer: "Makes asynchronous code easier to write and read"
    },
    {
        question: "What is the use of 'localStorage' in JavaScript?",
        options: ["To store data locally on the client-side", "To store data on the server-side", "To store session information", "To store cookies"],
        answer: "To store data locally on the client-side"
    },
    {
        question: "How can you handle errors in JavaScript?",
        options: ["Using try...catch statement", "Using error handling functions", "Using the catch() method", "All of the above"],
        answer: "Using try...catch statement"
    },
    {
        question: "What is 'hoisting' in JavaScript?",
        options: ["The behavior of moving declarations to the top of their scope", "The process of initializing variables", "The way functions are executed", "The order in which code is parsed"],
        answer: "The behavior of moving declarations to the top of their scope"
    },
    {
        question: "What does 'slice()' method do in JavaScript?",
        options: ["Extracts a section of an array or string", "Sorts the array", "Adds elements to the end of an array", "Removes the first element of an array"],
        answer: "Extracts a section of an array or string"
    },
    {
        question: "What is an arrow function in JavaScript?",
        options: ["A concise way to write functions using the '=>' syntax", "A function that runs in the background", "A function that only returns values", "A function that creates new objects"],
        answer: "A concise way to write functions using the '=>' syntax"
    },
    {
        question: "How can you merge two arrays in JavaScript?",
        options: ["Using concat() method", "Using push() method", "Using spread operator", "Both A and C"],
        answer: "Both A and C"
    },
    {
        question: "What is the 'fetch()' method used for in JavaScript?",
        options: ["To make network requests", "To fetch data from local storage", "To get elements from the DOM", "To fetch data from a database"],
        answer: "To make network requests"
    },
    {
        question: "What is a 'setTimeout()' function in JavaScript?",
        options: ["Executes a function after a specified delay", "Executes a function at regular intervals", "Sets a timeout for an asynchronous operation", "Stops the execution of a function"],
        answer: "Executes a function after a specified delay"
    },
    {
        question: "What is a 'callback function' in JavaScript?",
        options: ["A function passed as an argument to another function", "A function that returns another function", "A function that is called automatically", "A function used to handle errors"],
        answer: "A function passed as an argument to another function"
    },
    {
        question: "How do you check if an object has a specific property in JavaScript?",
        options: ["Using 'in' operator", "Using 'hasOwnProperty()' method", "Using 'Object.keys()' method", "Both A and B"],
        answer: "Both A and B"
    },
    {
        question: "What is the 'reduce()' method in JavaScript?",
        options: ["A method to reduce an array to a single value", "A method to remove elements from an array", "A method to sort elements of an array", "A method to add elements to an array"],
        answer: "A method to reduce an array to a single value"
    },
    {
        question: "What is 'event delegation' in JavaScript?",
        options: ["A technique to handle events at a higher level in the DOM hierarchy", "A method to delegate event handling to other functions", "A way to assign events to multiple elements", "A technique to capture events before they reach their target"],
        answer: "A technique to handle events at a higher level in the DOM hierarchy"
    },
    {
        question: "How do you define a class in JavaScript?",
        options: ["class ClassName {}", "function ClassName() {}", "const ClassName = {};", "define ClassName() {}"],
        answer: "class ClassName {}"
    },
    {
        question: "What is the output of 'console.log(1 + '1')'?",
        options: ["11", "2", "NaN", "undefined"],
        answer: "11"
    },
    {
        question: "What is 'strict mode' in JavaScript?",
        options: ["A mode that helps in writing secure code", "A mode that restricts the use of certain language features", "A debugging mode", "A mode to improve performance"],
        answer: "A mode that restricts the use of certain language features"
    },
    {
        question: "How do you prevent a form from submitting in JavaScript?",
        options: ["Using event.preventDefault()", "Using return false", "Using stopPropagation()", "Both A and B"],
        answer: "Both A and B"
    },
    {
        question: "What does 'Array.prototype.forEach()' do in JavaScript?",
        options: ["Executes a provided function once for each array element", "Creates a new array with the results of a provided function", "Filters elements of an array", "Finds the first element that passes a test"],
        answer: "Executes a provided function once for each array element"
    },
    {
        question: "What is 'spread syntax' in JavaScript?",
        options: ["A syntax to expand an iterable into individual elements", "A syntax to merge objects", "A syntax to destructure arrays", "A syntax to handle errors"],
        answer: "A syntax to expand an iterable into individual elements"
    },
    {
        question: "How can you remove duplicates from an array in JavaScript?",
        options: ["Using Set", "Using filter() method", "Using reduce() method", "Both A and B"],
        answer: "Both A and B"
    },
    {
        question: "What is 'prototype chaining' in JavaScript?",
        options: ["A mechanism to create a chain of prototypes", "A technique to link multiple objects", "A way to handle multiple inheritance", "A method to chain functions"],
        answer: "A mechanism to create a chain of prototypes"
    },
    {
        question: "What is the 'typeof' operator used for in JavaScript?",
        options: ["To determine the type of a variable", "To get the type of an object", "To convert a variable to a string", "To check if a variable is an object"],
        answer: "To determine the type of a variable"
    },
    {
        question: "What is 'destructuring' in JavaScript?",
        options: ["A way to extract values from arrays or objects", "A method to remove elements from an array", "A technique to define new objects", "A way to handle errors"],
        answer: "A way to extract values from arrays or objects"
    },
    {
        question: "What is the 'slice()' method used for in JavaScript?",
        options: ["To extract a portion of an array or string", "To sort an array", "To add elements to an array", "To remove elements from an array"],
        answer: "To extract a portion of an array or string"
    },
    {
        question: "How do you check if a variable is an integer in JavaScript?",
        options: ["Using Number.isInteger()", "Using typeof", "Using parseInt()", "Using isFinite()"],
        answer: "Using Number.isInteger()"
    },
    {
        question: "What does 'Object.keys()' return in JavaScript?",
        options: ["An array of a given object's own enumerable property names", "An array of a given object's values", "An array of all property names including inherited ones", "A new object with only enumerable properties"],
        answer: "An array of a given object's own enumerable property names"
    },
    {
        question: "What is 'event bubbling' in JavaScript?",
        options: ["The process where events propagate from the target element up to the root", "The process where events propagate from the root down to the target element", "The process of handling multiple events", "The process of creating new events"],
        answer: "The process where events propagate from the target element up to the root"
    },
    {
        question: "How do you access the first element of an array in JavaScript?",
        options: ["array[0]", "array.first()", "array.head()", "array.get(0)"],
        answer: "array[0]"
    },
    {
        question: "What does 'console.log(0 == false)' output?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        question: "What is the 'reduce()' method used for in JavaScript?",
        options: ["To reduce an array to a single value", "To remove elements from an array", "To find the maximum value in an array", "To sort elements in an array"],
        answer: "To reduce an array to a single value"
    },
    {
        question: "What does the 'shift()' method do in JavaScript?",
        options: ["Removes the first element from an array", "Adds an element to the end of an array", "Removes the last element from an array", "Adds an element to the beginning of an array"],
        answer: "Removes the first element from an array"
    },
    {
        question: "What is 'memoization' in JavaScript?",
        options: ["A technique to optimize function calls by caching results", "A technique to handle asynchronous operations", "A technique to create new objects", "A technique to handle errors"],
        answer: "A technique to optimize function calls by caching results"
    },
    {
        question: "How can you create a new array with all elements that pass a test in JavaScript?",
        options: ["Using filter() method", "Using map() method", "Using reduce() method", "Using find() method"],
        answer: "Using filter() method"
    },
    {
        question: "What does 'Object.assign()' do in JavaScript?",
        options: ["Copies the values of all enumerable properties from one or more source objects to a target object", "Assigns a new value to a property", "Creates a new object with specified properties", "Assigns methods to an object"],
        answer: "Copies the values of all enumerable properties from one or more source objects to a target object"
    },
    {
        question: "How do you create a promise in JavaScript?",
        options: ["new Promise((resolve, reject) => { })", "Promise.create()", "Promise.new()", "new Promise.resolve()"],
        answer: "new Promise((resolve, reject) => { })"
    },
    {
        question: "What is 'event delegation'?",
        options: ["A technique to handle events at a higher level in the DOM hierarchy", "A method to assign multiple event handlers", "A technique to prevent event propagation", "A method to bind events to a specific element"],
        answer: "A technique to handle events at a higher level in the DOM hierarchy"
    },
    {
        question: "How do you remove the last element from an array in JavaScript?",
        options: ["Using pop() method", "Using shift() method", "Using slice() method", "Using delete() method"],
        answer: "Using pop() method"
    },
    {
        question: "What does 'JSON.parse()' do in JavaScript?",
        options: ["Parses a JSON string and returns a JavaScript object", "Converts a JavaScript object to a JSON string", "Checks if a string is in JSON format", "Parses a string and returns an array"],
        answer: "Parses a JSON string and returns a JavaScript object"
    },
    {
        question: "What is the output of 'console.log(2 + '2')'?",
        options: ["22", "4", "undefined", "NaN"],
        answer: "22"
    }
];
const mysqlQuestions = [
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "Sequential Query Language"],
        answer: "Structured Query Language"
    },
    {
        question: "Which statement is used to retrieve data from a MySQL table?",
        options: ["SELECT", "GET", "FETCH", "RETRIEVE"],
        answer: "SELECT"
    },
    {
        question: "What is the default port number for MySQL?",
        options: ["3306", "1433", "5432", "1521"],
        answer: "3306"
    },
    {
        question: "Which keyword is used to prevent duplicate records in a MySQL table?",
        options: ["UNIQUE", "DISTINCT", "PRIMARY", "INDEX"],
        answer: "UNIQUE"
    },
    {
        question: "What is the purpose of the 'JOIN' clause in MySQL?",
        options: ["To combine rows from two or more tables", "To separate rows", "To create tables", "To delete rows"],
        answer: "To combine rows from two or more tables"
    },
    {
        question: "How do you add a new column to an existing MySQL table?",
        options: ["ALTER TABLE", "ADD COLUMN", "INSERT INTO", "MODIFY TABLE"],
        answer: "ALTER TABLE"
    },
    {
        question: "Which function is used to count the number of rows in a MySQL table?",
        options: ["COUNT()", "SUM()", "TOTAL()", "ROWS()"],
        answer: "COUNT()"
    },
    {
        question: "What is the purpose of the 'GROUP BY' clause in MySQL?",
        options: ["To group rows that have the same values", "To filter rows", "To sort rows", "To join tables"],
        answer: "To group rows that have the same values"
    },
    {
        question: "Which data type is used to store variable-length strings in MySQL?",
        options: ["VARCHAR", "TEXT", "CHAR", "BLOB"],
        answer: "VARCHAR"
    },
    {
        question: "What does the 'DROP TABLE' command do in MySQL?",
        options: ["Deletes the table structure and data", "Deletes only the table data", "Deletes the table structure", "Drops the table from memory"],
        answer: "Deletes the table structure and data"
    },
    {
        question: "Which keyword is used to create a new database in MySQL?",
        options: ["CREATE DATABASE", "NEW DATABASE", "MAKE DATABASE", "INIT DATABASE"],
        answer: "CREATE DATABASE"
    },
    {
        question: "How do you update existing records in a MySQL table?",
        options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
        answer: "UPDATE"
    },
    {
        question: "Which SQL statement is used to delete a row from a table?",
        options: ["DELETE", "REMOVE", "DROP", "ERASE"],
        answer: "DELETE"
    },
    {
        question: "What does the 'ALTER TABLE' statement do?",
        options: ["Modifies the structure of an existing table", "Adds new data to a table", "Deletes data from a table", "Creates a new table"],
        answer: "Modifies the structure of an existing table"
    },
    {
        question: "Which keyword is used to sort the results of a query in MySQL?",
        options: ["ORDER BY", "SORT", "GROUP BY", "ARRANGE"],
        answer: "ORDER BY"
    },
    {
        question: "What is a primary key in MySQL?",
        options: ["A unique identifier for each record", "A type of foreign key", "A column that allows null values", "A key that defines relationships"],
        answer: "A unique identifier for each record"
    },
    {
        question: "How do you select all columns from a table named 'employees'?",
        options: ["SELECT * FROM employees;", "GET * FROM employees;", "SHOW ALL FROM employees;", "FETCH * FROM employees;"],
        answer: "SELECT * FROM employees;"
    },
    {
        question: "Which function is used to get the current date and time in MySQL?",
        options: ["NOW()", "CURRENT_DATE()", "GETDATE()", "TODAY()"],
        answer: "NOW()"
    },
    {
        question: "What is the purpose of the 'HAVING' clause in MySQL?",
        options: ["To filter groups based on a condition", "To join tables", "To select columns", "To sort rows"],
        answer: "To filter groups based on a condition"
    },
    {
        question: "How do you create a new user in MySQL?",
        options: ["CREATE USER", "ADD USER", "NEW USER", "REGISTER USER"],
        answer: "CREATE USER"
    },
    {
        question: "What is the use of the 'DISTINCT' keyword in MySQL?",
        options: ["To remove duplicate rows", "To count rows", "To sort rows", "To join tables"],
        answer: "To remove duplicate rows"
    },
    {
        question: "Which function is used to find the maximum value in a column?",
        options: ["MAX()", "TOP()", "HIGHEST()", "LARGEST()"],
        answer: "MAX()"
    },
    {
        question: "What does the 'UNION' operator do in MySQL?",
        options: ["Combines the result sets of two or more SELECT statements", "Subtracts one result set from another", "Intersects two result sets", "None of the above"],
        answer: "Combines the result sets of two or more SELECT statements"
    },
    {
        question: "How do you set a default value for a column in MySQL?",
        options: ["DEFAULT", "SET DEFAULT", "INIT", "ASSIGN"],
        answer: "DEFAULT"
    },
    {
        question: "What does the 'LIMIT' clause do in MySQL?",
        options: ["Limits the number of rows returned", "Limits the number of columns", "Limits the size of the data", "None of the above"],
        answer: "Limits the number of rows returned"
    },
    {
        question: "Which data type is used to store large text fields in MySQL?",
        options: ["TEXT", "VARCHAR", "CHAR", "BLOB"],
        answer: "TEXT"
    },
    {
        question: "What is the purpose of the 'FOREIGN KEY' constraint?",
        options: ["To enforce referential integrity", "To create indexes", "To enforce uniqueness", "To define default values"],
        answer: "To enforce referential integrity"
    },
    {
        question: "Which SQL command is used to remove all records from a table?",
        options: ["TRUNCATE TABLE", "DELETE ALL FROM", "DROP ALL FROM", "REMOVE ALL"],
        answer: "TRUNCATE TABLE"
    },
    {
        question: "How do you check if a table exists in MySQL?",
        options: ["SHOW TABLES LIKE 'table_name';", "DESCRIBE 'table_name';", "EXISTS 'table_name';", "CHECK TABLE 'table_name';"],
        answer: "SHOW TABLES LIKE 'table_name';"
    },
    {
        question: "Which SQL clause is used to filter records?",
        options: ["WHERE", "FILTER", "HAVING", "LIMIT"],
        answer: "WHERE"
    },
    {
        question: "How do you rename a MySQL table?",
        options: ["RENAME TABLE", "ALTER TABLE", "CHANGE TABLE", "MODIFY TABLE"],
        answer: "RENAME TABLE"
    },
    {
        question: "What is the use of the 'CONCAT()' function in MySQL?",
        options: ["To concatenate two or more strings", "To count rows", "To calculate sums", "To combine tables"],
        answer: "To concatenate two or more strings"
    },
    {
        question: "Which function is used to calculate the average value of a column?",
        options: ["AVG()", "MEAN()", "MEDIAN()", "SUM()"],
        answer: "AVG()"
    },
    {
        question: "What is an index in MySQL?",
        options: ["A data structure used to improve query performance", "A unique identifier", "A column that stores large text", "A type of foreign key"],
        answer: "A data structure used to improve query performance"
    },
    {
        question: "What does the 'INSERT INTO' statement do?",
        options: ["Adds new rows to a table", "Updates existing rows", "Deletes rows", "Creates a new table"],
        answer: "Adds new rows to a table"
    },
    {
        question: "Which SQL statement is used to modify data in a table?",
        options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
        answer: "UPDATE"
    },
    {
        question: "What is the purpose of the 'TRIGGERS' in MySQL?",
        options: ["To automatically execute a set of actions when a specific event occurs", "To create indexes", "To define foreign keys", "To optimize queries"],
        answer: "To automatically execute a set of actions when a specific event occurs"
    },
    {
        question: "Which function is used to round a number to the nearest integer in MySQL?",
        options: ["ROUND()", "INT()", "CEIL()", "FLOOR()"],
        answer: "ROUND()"
    },
    {
        question: "What is the purpose of the 'SUBSTRING()' function?",
        options: ["Extracts a substring from a string", "Counts the number of substrings", "Replaces a substring", "Converts a string to uppercase"],
        answer: "Extracts a substring from a string"
    },
    {
        question: "What is the default storage engine in MySQL?",
        options: ["InnoDB", "MyISAM", "MEMORY", "CSV"],
        answer: "InnoDB"
    },
    {
        question: "Which command is used to view the structure of a table in MySQL?",
        options: ["DESCRIBE", "SHOW COLUMNS", "SHOW STRUCTURE", "VIEW TABLE"],
        answer: "DESCRIBE"
    },
    {
        question: "How do you create a view in MySQL?",
        options: ["CREATE VIEW", "NEW VIEW", "MAKE VIEW", "DEFINE VIEW"],
        answer: "CREATE VIEW"
    },
    {
        question: "Which function is used to return the length of a string in MySQL?",
        options: ["LENGTH()", "SIZE()", "COUNT()", "CHAR_LENGTH()"],
        answer: "LENGTH()"
    },
    {
        question: "What does the 'IFNULL()' function do in MySQL?",
        options: ["Replaces NULL values with a specified value", "Checks if a value is NULL", "Counts the number of NULL values", "Converts NULL values to 0"],
        answer: "Replaces NULL values with a specified value"
    },
    {
        question: "Which SQL clause is used to group rows that have the same values?",
        options: ["GROUP BY", "ORDER BY", "HAVING", "DISTINCT"],
        answer: "GROUP BY"
    },
    {
        question: "What is the purpose of the 'EXISTS' keyword in SQL?",
        options: ["To test for the existence of any record in a subquery", "To create a new record", "To delete records", "To update records"],
        answer: "To test for the existence of any record in a subquery"
    },
    {
        question: "Which command is used to back up a MySQL database?",
        options: ["mysqldump", "BACKUP DATABASE", "EXPORT DATABASE", "SAVE DATABASE"],
        answer: "mysqldump"
    },
    {
        question: "What is the use of the 'CAST()' function in MySQL?",
        options: ["To convert a value from one data type to another", "To combine two values", "To check the data type of a value", "To create a new data type"],
        answer: "To convert a value from one data type to another"
    },
    {
        question: "Which clause is used to specify the condition in a SQL query?",
        options: ["WHERE", "HAVING", "IF", "CONDITION"],
        answer: "WHERE"
    },
    {
        question: "How do you delete a database in MySQL?",
        options: ["DROP DATABASE", "DELETE DATABASE", "REMOVE DATABASE", "CLEAR DATABASE"],
        answer: "DROP DATABASE"
    },
    {
        question: "What is the purpose of the 'SQL_MODE' setting in MySQL?",
        options: ["To configure SQL syntax and behavior", "To set the default character set", "To define user permissions", "To create indexes"],
        answer: "To configure SQL syntax and behavior"
    },
    {
        question: "Which statement is used to grant privileges to a user in MySQL?",
        options: ["GRANT", "ALLOW", "PERMIT", "AUTH"],
        answer: "GRANT"
    },
    {
        question: "What does the 'SHOW TABLES' command do?",
        options: ["Displays a list of all tables in a database", "Shows the data in a table", "Displays the structure of a table", "Shows the indexes of a table"],
        answer: "Displays a list of all tables in a database"
    },
    {
        question: "Which function is used to get the minimum value in a column?",
        options: ["MIN()", "LOWEST()", "BOTTOM()", "LEAST()"],
        answer: "MIN()"
    },
    {
        question: "What is the purpose of the 'REPLACE INTO' statement?",
        options: ["To insert a new row or update an existing row if it already exists", "To replace data in a table", "To delete a row and insert a new one", "To update data in multiple tables"],
        answer: "To insert a new row or update an existing row if it already exists"
    },
    {
        question: "How do you add a primary key constraint to a table in MySQL?",
        options: ["ALTER TABLE ... ADD PRIMARY KEY", "ADD PRIMARY KEY TO TABLE", "CREATE PRIMARY KEY", "ALTER TABLE ... ADD KEY"],
        answer: "ALTER TABLE ... ADD PRIMARY KEY"
    },
    {
        question: "Which clause is used to sort the result set in descending order?",
        options: ["ORDER BY ... DESC", "SORT BY ... DESC", "GROUP BY ... DESC", "LIMIT ... DESC"],
        answer: "ORDER BY ... DESC"
    },
    {
        question: "What is the purpose of the 'IN' operator in SQL?",
        options: ["To check if a value is within a set of values", "To combine multiple conditions", "To check if a value is NULL", "To join tables"],
        answer: "To check if a value is within a set of values"
    },
    {
        question: "Which SQL keyword is used to retrieve only unique values?",
        options: ["DISTINCT", "UNIQUE", "ONLY", "SINGLE"],
        answer: "DISTINCT"
    },
    {
        question: "What does the 'NOW()' function return in MySQL?",
        options: ["The current date and time", "The current date", "The current time", "The current timestamp"],
        answer: "The current date and time"
    },
    {
        question: "How do you create an index on a table column?",
        options: ["CREATE INDEX", "ADD INDEX", "INDEX COLUMN", "ALTER TABLE ... ADD INDEX"],
        answer: "CREATE INDEX"
    },
    {
        question: "What is the purpose of the 'LIKE' operator in SQL?",
        options: ["To search for a specified pattern in a column", "To join tables", "To check for NULL values", "To compare values"],
        answer: "To search for a specified pattern in a column"
    },
    {
        question: "Which SQL function is used to return the current user in MySQL?",
        options: ["CURRENT_USER()", "USER()", "SESSION_USER()", "GET_USER()"],
        answer: "CURRENT_USER()"
    },
    {
        question: "What does the 'SUBSTRING()' function do?",
        options: ["Extracts a portion of a string", "Counts the number of characters", "Finds the position of a substring", "Replaces a substring"],
        answer: "Extracts a portion of a string"
    },
    {
        question: "Which command is used to optimize a MySQL table?",
        options: ["OPTIMIZE TABLE", "REPAIR TABLE", "MAINTAIN TABLE", "CLEAN TABLE"],
        answer: "OPTIMIZE TABLE"
    },
    {
        question: "What is the use of the 'GROUP_CONCAT()' function in MySQL?",
        options: ["To concatenate values from multiple rows into a single string", "To group rows based on a condition", "To count the number of rows", "To concatenate two strings"],
        answer: "To concatenate values from multiple rows into a single string"
    },
    {
        question: "How do you add a comment to a MySQL query?",
        options: ["-- comment", "# comment", "/* comment */", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which SQL clause is used to combine rows from two or more tables based on a related column?",
        options: ["JOIN", "UNION", "INTERSECT", "EXCEPT"],
        answer: "JOIN"
    },
    {
        question: "What does the 'CREATE TABLE' statement do?",
        options: ["Creates a new table in the database", "Modifies an existing table", "Deletes a table", "Displays the structure of a table"],
        answer: "Creates a new table in the database"
    },
    {
        question: "How do you delete a column from an existing table in MySQL?",
        options: ["ALTER TABLE ... DROP COLUMN", "DROP COLUMN FROM TABLE", "REMOVE COLUMN", "DELETE COLUMN"],
        answer: "ALTER TABLE ... DROP COLUMN"
    },
    {
        question: "What is the use of the 'IF' statement in MySQL queries?",
        options: ["To perform conditional logic", "To combine two queries", "To select rows based on conditions", "To limit the number of rows"],
        answer: "To perform conditional logic"
    },
    {
        question: "Which function is used to convert a string to lowercase in MySQL?",
        options: ["LOWER()", "TOLOWER()", "LCASE()", "CASELOW()"],
        answer: "LOWER()"
    },
    {
        question: "What is the purpose of the 'UPDATE' statement?",
        options: ["To modify existing records", "To delete records", "To create new records", "To retrieve records"],
        answer: "To modify existing records"
    }
];
const nodeJsQuestions = [
    {
        question: "What is Node.js?",
        options: ["A JavaScript runtime built on Chrome's V8 engine", "A framework for building web applications", "A database", "A JavaScript library"],
        answer: "A JavaScript runtime built on Chrome's V8 engine"
    },
    {
        question: "Which module is used to create a basic HTTP server in Node.js?",
        options: ["http", "net", "fs", "path"],
        answer: "http"
    },
    {
        question: "Which of these is the default package manager for Node.js?",
        options: ["npm", "yarn", "bower", "composer"],
        answer: "npm"
    },
    {
        question: "How do you install a Node.js package globally?",
        options: ["npm install -g <package-name>", "npm install <package-name>", "npm global install <package-name>", "npm add <package-name>"],
        answer: "npm install -g <package-name>"
    },
    {
        question: "What does the 'require' function do in Node.js?",
        options: ["Imports modules", "Exports functions", "Runs scripts", "Creates modules"],
        answer: "Imports modules"
    },
    {
        question: "What is 'npm' an abbreviation for?",
        options: ["Node Package Manager", "New Package Manager", "Node Process Manager", "None of the above"],
        answer: "Node Package Manager"
    },
    {
        question: "How do you read a file asynchronously in Node.js?",
        options: ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
        answer: "fs.readFile()"
    },
    {
        question: "Which method is used to start a server in Node.js?",
        options: ["server.listen()", "http.createServer()", "server.start()", "http.listen()"],
        answer: "server.listen()"
    },
    {
        question: "What is the purpose of 'callback' functions in Node.js?",
        options: ["To handle asynchronous operations", "To create new modules", "To sync file operations", "To start a server"],
        answer: "To handle asynchronous operations"
    },
    {
        question: "How can you handle errors in asynchronous operations in Node.js?",
        options: ["Using callback functions with error arguments", "Using synchronous methods", "Using the 'error' event", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which module in Node.js allows you to work with the file system?",
        options: ["fs", "path", "http", "url"],
        answer: "fs"
    },
    {
        question: "What does the 'npm init' command do?",
        options: ["Creates a new package.json file", "Installs a package", "Updates npm", "None of the above"],
        answer: "Creates a new package.json file"
    },
    {
        question: "What is a 'stream' in Node.js?",
        options: ["A sequence of data that can be read or written", "A function that processes data", "A type of database", "A built-in module for networking"],
        answer: "A sequence of data that can be read or written"
    },
    {
        question: "Which of the following is not a core module in Node.js?",
        options: ["http", "express", "fs", "path"],
        answer: "express"
    },
    {
        question: "What is the use of the 'event' module in Node.js?",
        options: ["To handle asynchronous events", "To create new HTTP servers", "To manage file systems", "To handle data streams"],
        answer: "To handle asynchronous events"
    },
    {
        question: "Which method is used to write data to a file in Node.js?",
        options: ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How do you create a new directory in Node.js?",
        options: ["fs.mkdir()", "fs.createDirectory()", "fs.newDir()", "fs.makeDir()"],
        answer: "fs.mkdir()"
    },
    {
        question: "What does 'middleware' mean in the context of Node.js frameworks like Express?",
        options: ["Functions that execute during the request-response cycle", "Functions to handle errors", "Functions to create new routes", "Functions to manage database connections"],
        answer: "Functions that execute during the request-response cycle"
    },
    {
        question: "How do you install a package from the npm registry?",
        options: ["npm install <package-name>", "npm add <package-name>", "npm get <package-name>", "npm require <package-name>"],
        answer: "npm install <package-name>"
    },
    {
        question: "What is 'Express.js'?",
        options: ["A Node.js framework for building web applications", "A database library", "A front-end framework", "A package manager"],
        answer: "A Node.js framework for building web applications"
    },
    {
        question: "What is the purpose of 'process.env' in Node.js?",
        options: ["To access environment variables", "To manage process states", "To handle errors", "To create new processes"],
        answer: "To access environment variables"
    },
    {
        question: "What is the default port number for HTTP servers in Node.js?",
        options: ["80", "8080", "3000", "443"],
        answer: "3000"
    },
    {
        question: "How do you handle JSON data in Node.js?",
        options: ["Using JSON.parse() and JSON.stringify()", "Using fs.readFile()", "Using http.request()", "Using express.json()"],
        answer: "Using JSON.parse() and JSON.stringify()"
    },
    {
        question: "What does 'npm run' command do?",
        options: ["Runs scripts defined in package.json", "Installs new packages", "Updates npm", "Creates new projects"],
        answer: "Runs scripts defined in package.json"
    },
    {
        question: "What does 'npm update' command do?",
        options: ["Updates all installed packages", "Creates a new package.json", "Removes old packages", "Installs new packages"],
        answer: "Updates all installed packages"
    },
    {
        question: "What is the purpose of 'npm audit'?",
        options: ["To check for vulnerabilities in dependencies", "To update dependencies", "To remove unnecessary packages", "To install packages"],
        answer: "To check for vulnerabilities in dependencies"
    },
    {
        question: "How do you stop a Node.js application running in the terminal?",
        options: ["Press Ctrl+C", "Press Ctrl+Z", "Type 'stop'", "Type 'exit'"],
        answer: "Press Ctrl+C"
    },
    {
        question: "What is 'cluster' module used for in Node.js?",
        options: ["To create child processes", "To manage server clusters", "To handle HTTP requests", "To manage database connections"],
        answer: "To create child processes"
    },
    {
        question: "What is the purpose of 'package-lock.json' in a Node.js project?",
        options: ["To lock the versions of installed packages", "To manage environment variables", "To list all available scripts", "To specify project settings"],
        answer: "To lock the versions of installed packages"
    },
    {
        question: "Which method is used to handle errors in Promises?",
        options: ["catch()", "then()", "finally()", "resolve()"],
        answer: "catch()"
    },
    {
        question: "What is the purpose of 'async/await' in Node.js?",
        options: ["To handle asynchronous code more easily", "To create new processes", "To manage environment variables", "To handle synchronous code"],
        answer: "To handle asynchronous code more easily"
    },
    {
        question: "How do you define a route in Express.js?",
        options: ["app.get('/route', callback)", "app.route('/route', callback)", "router.use('/route', callback)", "router.get('/route', callback)"],
        answer: "app.get('/route', callback)"
    },
    {
        question: "Which method is used to remove a file in Node.js?",
        options: ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.erase()"],
        answer: "fs.unlink()"
    },
    {
        question: "What is 'REPL' in Node.js?",
        options: ["Read-Eval-Print Loop", "Run-Evaluate-Process Loop", "Read-Execute-Print Loop", "Run-Evaluate-Parse Loop"],
        answer: "Read-Eval-Print Loop"
    },
    {
        question: "What is the purpose of the 'path' module in Node.js?",
        options: ["To work with file and directory paths", "To manage HTTP requests", "To handle asynchronous operations", "To process JSON data"],
        answer: "To work with file and directory paths"
    },
    {
        question: "What does the 'fs.readFileSync()' method do?",
        options: ["Reads a file synchronously", "Reads a file asynchronously", "Writes data to a file synchronously", "Writes data to a file asynchronously"],
        answer: "Reads a file synchronously"
    },
    {
        question: "What is the purpose of 'middleware' in Express.js?",
        options: ["To process requests before they reach the final route handler", "To create routes", "To manage database connections", "To handle file uploads"],
        answer: "To process requests before they reach the final route handler"
    },
    {
        question: "How can you handle uncaught exceptions in a Node.js application?",
        options: ["process.on('uncaughtException', callback)", "try/catch blocks", "Using 'catch' in Promises", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What does the 'npm install --save-dev' command do?",
        options: ["Installs a package as a development dependency", "Installs a package globally", "Installs a package and saves it to package.json", "Installs a package without saving it"],
        answer: "Installs a package as a development dependency"
    },
    {
        question: "How do you access command-line arguments in a Node.js script?",
        options: ["Using process.argv", "Using process.env", "Using require('args')", "Using commandLine()"],
        answer: "Using process.argv"
    },
    {
        question: "What does 'npm run build' typically do in a Node.js project?",
        options: ["Runs a build script defined in package.json", "Installs packages", "Starts the application", "Updates dependencies"],
        answer: "Runs a build script defined in package.json"
    },
    {
        question: "Which method is used to handle HTTP POST requests in Express.js?",
        options: ["app.post('/route', callback)", "app.get('/route', callback)", "app.put('/route', callback)", "app.delete('/route', callback)"],
        answer: "app.post('/route', callback)"
    },
    {
        question: "What is 'npm cache clean' used for?",
        options: ["To clear the npm cache", "To install new packages", "To update npm", "To remove old packages"],
        answer: "To clear the npm cache"
    },
    {
        question: "What is the purpose of 'dotenv' module in Node.js?",
        options: ["To manage environment variables", "To handle HTTP requests", "To work with the file system", "To create new modules"],
        answer: "To manage environment variables"
    },
    {
        question: "How do you handle HTTP requests in Node.js without using a framework?",
        options: ["Using the 'http' module", "Using the 'fs' module", "Using the 'path' module", "Using the 'url' module"],
        answer: "Using the 'http' module"
    },
    {
        question: "What is the purpose of 'app.use()' in Express.js?",
        options: ["To use middleware functions", "To define routes", "To handle errors", "To manage server settings"],
        answer: "To use middleware functions"
    },
    {
        question: "Which command is used to uninstall a package in Node.js?",
        options: ["npm uninstall <package-name>", "npm remove <package-name>", "npm delete <package-name>", "npm drop <package-name>"],
        answer: "npm uninstall <package-name>"
    },
    {
        question: "What is 'pm2' used for in Node.js applications?",
        options: ["To manage and monitor Node.js processes", "To create new modules", "To handle asynchronous operations", "To manage database connections"],
        answer: "To manage and monitor Node.js processes"
    },
    {
        question: "Which method in Node.js 'fs' module is used to append data to a file?",
        options: ["fs.appendFile()", "fs.writeFile()", "fs.createWriteStream()", "fs.append()"],
        answer: "fs.appendFile()"
    },
    {
        question: "What is the use of 'crypto' module in Node.js?",
        options: ["To perform cryptographic operations", "To handle HTTP requests", "To manage file paths", "To work with streams"],
        answer: "To perform cryptographic operations"
    },
    {
        question: "How do you start a Node.js application?",
        options: ["node <file-name>.js", "start <file-name>.js", "run <file-name>.js", "execute <file-name>.js"],
        answer: "node <file-name>.js"
    },
    {
        question: "What does 'npm install --global' do?",
        options: ["Installs a package globally", "Installs a package locally", "Installs a package as a development dependency", "Installs multiple packages"],
        answer: "Installs a package globally"
    },
    {
        question: "Which Node.js module is used to create a server?",
        options: ["http", "server", "app", "net"],
        answer: "http"
    },
    {
        question: "What is the default timeout for HTTP requests in Node.js?",
        options: ["2 minutes", "5 minutes", "30 seconds", "1 minute"],
        answer: "2 minutes"
    },
    {
        question: "What is 'nodemon' used for?",
        options: ["To automatically restart the server during development", "To manage dependencies", "To handle asynchronous operations", "To create new modules"],
        answer: "To automatically restart the server during development"
    },
    {
        question: "How do you define a route parameter in Express.js?",
        options: [":parameterName", "parameterName", "request.params.parameterName", "req.params.parameterName"],
        answer: ":parameterName"
    },
    {
        question: "What is the purpose of 'res.send()' in Express.js?",
        options: ["To send a response to the client", "To handle HTTP requests", "To set response headers", "To create a new route"],
        answer: "To send a response to the client"
    },
    {
        question: "Which method is used to read a JSON file synchronously in Node.js?",
        options: ["fs.readFileSync() and JSON.parse()", "fs.readFile() and JSON.parse()", "fs.readFile() and JSON.stringify()", "fs.readFileSync() and JSON.stringify()"],
        answer: "fs.readFileSync() and JSON.parse()"
    },
    {
        question: "What does the 'async' keyword do in Node.js?",
        options: ["Marks a function as asynchronous", "Makes a function synchronous", "Creates a new thread", "Handles errors in synchronous code"],
        answer: "Marks a function as asynchronous"
    },
    {
        question: "Which method is used to convert a JavaScript object to JSON in Node.js?",
        options: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "Object.stringify()"],
        answer: "JSON.stringify()"
    },
    {
        question: "How can you make HTTP requests in Node.js?",
        options: ["Using the 'http' or 'https' module", "Using the 'fs' module", "Using the 'path' module", "Using the 'query' module"],
        answer: "Using the 'http' or 'https' module"
    },
    {
        question: "What does 'npm start' typically do in a Node.js project?",
        options: ["Runs the start script defined in package.json", "Installs packages", "Updates npm", "Starts the application without any script"],
        answer: "Runs the start script defined in package.json"
    }
];
const angularQuestions = [
    {
        question: "What is Angular?",
        options: ["A JavaScript library", "A JavaScript framework", "A CSS framework", "A templating engine"],
        answer: "A JavaScript framework"
    },
    {
        question: "Which command is used to create a new Angular application?",
        options: ["ng create app", "ng new app", "ng init app", "ng generate app"],
        answer: "ng new app"
    },
    {
        question: "What is the purpose of Angular CLI?",
        options: ["To manage Angular projects", "To style Angular components", "To create Angular services", "To handle Angular routes"],
        answer: "To manage Angular projects"
    },
    {
        question: "What is the role of 'NgModule' in Angular?",
        options: ["Defines a module", "Defines a service", "Defines a component", "Defines a directive"],
        answer: "Defines a module"
    },
    {
        question: "What is a component in Angular?",
        options: ["A class that handles HTTP requests", "A class that defines the structure of views", "A class that defines a service", "A class that creates routes"],
        answer: "A class that defines the structure of views"
    },
    {
        question: "What is data binding in Angular?",
        options: ["The process of synchronizing data between component and view", "The process of binding methods to events", "The process of connecting to a backend API", "The process of setting up routes"],
        answer: "The process of synchronizing data between component and view"
    },
    {
        question: "What is the purpose of '@Injectable()' decorator in Angular?",
        options: ["To define a service", "To define a component", "To define a module", "To define a directive"],
        answer: "To define a service"
    },
    {
        question: "What is a directive in Angular?",
        options: ["A class that manipulates DOM elements", "A class that handles routing", "A class that manages state", "A class that defines data models"],
        answer: "A class that manipulates DOM elements"
    },
    {
        question: "What is Angular's change detection mechanism?",
        options: ["A mechanism to detect changes in the data model", "A mechanism to handle HTTP responses", "A mechanism to handle user inputs", "A mechanism to manage routing"],
        answer: "A mechanism to detect changes in the data model"
    },
    {
        question: "What is the role of Angular's 'ngOnInit' lifecycle hook?",
        options: ["To perform initialization logic", "To perform cleanup logic", "To handle changes in data", "To handle view rendering"],
        answer: "To perform initialization logic"
    },
    {
        question: "What is an Angular service?",
        options: ["A reusable class that provides specific functionality", "A class that manages routing", "A class that manipulates DOM elements", "A class that defines a view"],
        answer: "A reusable class that provides specific functionality"
    },
    {
        question: "What is Angular's dependency injection (DI)?",
        options: ["A mechanism for injecting services into components", "A mechanism for injecting components into services", "A mechanism for managing routing", "A mechanism for handling events"],
        answer: "A mechanism for injecting services into components"
    },
    {
        question: "What is Angular's router module used for?",
        options: ["To manage application routes", "To handle HTTP requests", "To create Angular services", "To manage component lifecycle"],
        answer: "To manage application routes"
    },
    {
        question: "What is the purpose of Angular's 'ngIf' directive?",
        options: ["To conditionally include or exclude elements", "To iterate over collections", "To handle events", "To bind data to elements"],
        answer: "To conditionally include or exclude elements"
    },
    {
        question: "What is Angular's 'ngFor' directive used for?",
        options: ["To iterate over a collection", "To conditionally include elements", "To handle user inputs", "To manage component lifecycle"],
        answer: "To iterate over a collection"
    },
    {
        question: "What is Angular's 'ngModel' directive used for?",
        options: ["To bind data to form controls", "To manage routing", "To handle events", "To conditionally include elements"],
        answer: "To bind data to form controls"
    },
    {
        question: "What is a pipe in Angular?",
        options: ["A mechanism to transform data", "A mechanism to handle HTTP requests", "A mechanism to manage routing", "A mechanism to define services"],
        answer: "A mechanism to transform data"
    },
    {
        question: "What is Angular's HttpClient used for?",
        options: ["To handle HTTP requests and responses", "To manage routing", "To create components", "To define directives"],
        answer: "To handle HTTP requests and responses"
    },
    {
        question: "What is the role of Angular's 'ngOnDestroy' lifecycle hook?",
        options: ["To perform cleanup logic", "To perform initialization logic", "To handle changes in data", "To manage routing"],
        answer: "To perform cleanup logic"
    },
    {
        question: "What is a form group in Angular?",
        options: ["A collection of form controls", "A collection of components", "A collection of services", "A collection of modules"],
        answer: "A collection of form controls"
    },
    {
        question: "What is Angular's 'ReactiveFormsModule' used for?",
        options: ["To handle reactive forms", "To manage routing", "To create components", "To define directives"],
        answer: "To handle reactive forms"
    },
    {
        question: "What is Angular's 'FormsModule' used for?",
        options: ["To handle template-driven forms", "To manage routing", "To create components", "To define directives"],
        answer: "To handle template-driven forms"
    },
    {
        question: "What is Angular's 'ngContent' directive used for?",
        options: ["To project content into a component", "To handle HTTP requests", "To manage routing", "To define services"],
        answer: "To project content into a component"
    },
    {
        question: "What is the purpose of Angular's 'ngSwitch' directive?",
        options: ["To conditionally include or exclude elements based on a switch expression", "To iterate over a collection", "To handle user inputs", "To bind data to elements"],
        answer: "To conditionally include or exclude elements based on a switch expression"
    },
    {
        question: "What is Angular's 'ng-template' directive used for?",
        options: ["To define reusable template fragments", "To handle HTTP requests", "To manage routing", "To define services"],
        answer: "To define reusable template fragments"
    },
    {
        question: "What is Angular's 'ChangeDetectorRef' used for?",
        options: ["To manually trigger change detection", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To manually trigger change detection"
    },
    {
        question: "What is Angular's 'Renderer2' used for?",
        options: ["To manipulate the DOM", "To handle HTTP requests", "To manage routing", "To define services"],
        answer: "To manipulate the DOM"
    },
    {
        question: "What is Angular's 'ngOnChanges' lifecycle hook used for?",
        options: ["To detect changes to input properties", "To perform initialization logic", "To handle changes in data", "To perform cleanup logic"],
        answer: "To detect changes to input properties"
    },
    {
        question: "What is a route guard in Angular?",
        options: ["A mechanism to control navigation to and from routes", "A mechanism to handle HTTP requests", "A mechanism to create components", "A mechanism to manage form controls"],
        answer: "A mechanism to control navigation to and from routes"
    },
    {
        question: "What is the purpose of Angular's 'ActivatedRoute' service?",
        options: ["To get information about the current route", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To get information about the current route"
    },
    {
        question: "What is Angular's 'Location' service used for?",
        options: ["To interact with the browser's URL", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To interact with the browser's URL"
    },
    {
        question: "What is Angular's 'HttpInterceptor' used for?",
        options: ["To intercept and modify HTTP requests and responses", "To handle routing", "To create components", "To manage form controls"],
        answer: "To intercept and modify HTTP requests and responses"
    },
    {
        question: "What is Angular's 'NgZone' used for?",
        options: ["To manage the change detection mechanism", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To manage the change detection mechanism"
    },
    {
        question: "What is the purpose of Angular's 'Injector' service?",
        options: ["To get instances of services", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To get instances of services"
    },
    {
        question: "What is a module in Angular?",
        options: ["A container for a set of related components, services, directives, and pipes", "A component that defines a view", "A service that handles HTTP requests", "A directive that manipulates DOM"],
        answer: "A container for a set of related components, services, directives, and pipes"
    },
    {
        question: "What is the purpose of Angular's 'HttpHeaders' class?",
        options: ["To set and manage HTTP headers", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To set and manage HTTP headers"
    },
    {
        question: "What is Angular's 'ChangeDetectionStrategy' used for?",
        options: ["To define how the change detection mechanism should be performed", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To define how the change detection mechanism should be performed"
    },
    {
        question: "What is the purpose of Angular's 'ViewChild' decorator?",
        options: ["To access a child component or directive", "To define a service", "To create a new module", "To manage routing"],
        answer: "To access a child component or directive"
    },
    {
        question: "What is Angular's 'ContentChild' decorator used for?",
        options: ["To access a child element or directive projected into the component", "To define a service", "To create a new module", "To manage routing"],
        answer: "To access a child element or directive projected into the component"
    },
    {
        question: "What is Angular's 'HostListener' decorator used for?",
        options: ["To listen to events on the host element", "To define a service", "To create a new module", "To manage routing"],
        answer: "To listen to events on the host element"
    },
    {
        question: "What is the purpose of Angular's 'ngOnInit' lifecycle hook?",
        options: ["To perform component initialization", "To perform component destruction", "To handle changes in data", "To manage routing"],
        answer: "To perform component initialization"
    },
    {
        question: "What is Angular's 'ngOnDestroy' lifecycle hook used for?",
        options: ["To perform cleanup before the component is destroyed", "To perform component initialization", "To handle changes in data", "To manage routing"],
        answer: "To perform cleanup before the component is destroyed"
    },
    {
        question: "What is Angular's 'ngAfterViewInit' lifecycle hook used for?",
        options: ["To perform actions after the view has been initialized", "To perform component initialization", "To handle changes in data", "To manage routing"],
        answer: "To perform actions after the view has been initialized"
    },
    {
        question: "What is Angular's 'ngAfterViewChecked' lifecycle hook used for?",
        options: ["To perform actions after the view has been checked", "To perform component initialization", "To handle changes in data", "To manage routing"],
        answer: "To perform actions after the view has been checked"
    },
    {
        question: "What is Angular's 'ngAfterContentInit' lifecycle hook used for?",
        options: ["To perform actions after the content has been projected into the component", "To perform component initialization", "To handle changes in data", "To manage routing"],
        answer: "To perform actions after the content has been projected into the component"
    },
    {
        question: "What is Angular's 'ngAfterContentChecked' lifecycle hook used for?",
        options: ["To perform actions after the content has been checked", "To perform component initialization", "To handle changes in data", "To manage routing"],
        answer: "To perform actions after the content has been checked"
    },
    {
        question: "What is Angular's 'ngOnChanges' lifecycle hook used for?",
        options: ["To perform actions when input properties change", "To perform component initialization", "To handle changes in data", "To manage routing"],
        answer: "To perform actions when input properties change"
    },
    {
        question: "What is Angular's 'ngOnInit' lifecycle hook used for?",
        options: ["To perform actions when the component is initialized", "To perform component destruction", "To handle changes in data", "To manage routing"],
        answer: "To perform actions when the component is initialized"
    },
    {
        question: "What is Angular's 'ngOnDestroy' lifecycle hook used for?",
        options: ["To perform actions when the component is about to be destroyed", "To perform component initialization", "To handle changes in data", "To manage routing"],
        answer: "To perform actions when the component is about to be destroyed"
    },
    {
        question: "What is Angular's 'ChangeDetectionStrategy' used for?",
        options: ["To define how change detection should be performed", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To define how change detection should be performed"
    },
    {
        question: "What is Angular's 'EventEmitter' used for?",
        options: ["To emit custom events from a component", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To emit custom events from a component"
    },
    {
        question: "What is Angular's 'FormControl' used for?",
        options: ["To create and manage individual form controls", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To create and manage individual form controls"
    },
    {
        question: "What is Angular's 'FormGroup' used for?",
        options: ["To group multiple form controls", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To group multiple form controls"
    },
    {
        question: "What is Angular's 'FormArray' used for?",
        options: ["To manage a collection of form controls", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To manage a collection of form controls"
    },
    {
        question: "What is Angular's 'ValidatorFn' used for?",
        options: ["To define custom validation logic", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To define custom validation logic"
    },
    {
        question: "What is Angular's 'AsyncValidatorFn' used for?",
        options: ["To define custom asynchronous validation logic", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To define custom asynchronous validation logic"
    },
    {
        question: "What is Angular's 'NgForm' used for?",
        options: ["To track the state and validity of a form", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To track the state and validity of a form"
    },
    {
        question: "What is Angular's 'NgModel' directive used for?",
        options: ["To bind data to form controls", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To bind data to form controls"
    },
    {
        question: "What is Angular's 'ngIf' directive used for?",
        options: ["To conditionally include or exclude elements in the DOM", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To conditionally include or exclude elements in the DOM"
    },
    {
        question: "What is Angular's 'ngFor' directive used for?",
        options: ["To iterate over a collection", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To iterate over a collection"
    },
    {
        question: "What is Angular's 'ngSwitch' directive used for?",
        options: ["To conditionally include or exclude elements based on a switch expression", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To conditionally include or exclude elements based on a switch expression"
    },
    {
        question: "What is Angular's 'ngStyle' directive used for?",
        options: ["To apply styles dynamically to elements", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To apply styles dynamically to elements"
    },
    {
        question: "What is Angular's 'ngClass' directive used for?",
        options: ["To dynamically add or remove CSS classes", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To dynamically add or remove CSS classes"
    },
    {
        question: "What is Angular's 'ViewContainerRef' used for?",
        options: ["To access the container of a view", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To access the container of a view"
    },
    {
        question: "What is Angular's 'TemplateRef' used for?",
        options: ["To reference a template", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To reference a template"
    },
    {
        question: "What is Angular's 'NgModule' used for?",
        options: ["To define a module and its dependencies", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To define a module and its dependencies"
    },
    {
        question: "What is Angular's 'HttpParams' used for?",
        options: ["To set and manage URL parameters in HTTP requests", "To handle HTTP responses", "To manage routing", "To create components"],
        answer: "To set and manage URL parameters in HTTP requests"
    },
    {
        question: "What is Angular's 'HttpClientModule' used for?",
        options: ["To make HTTP requests and handle responses", "To manage routing", "To create components", "To handle forms"],
        answer: "To make HTTP requests and handle responses"
    },
    {
        question: "What is Angular's 'HttpInterceptor' used for?",
        options: ["To intercept and modify HTTP requests and responses", "To manage routing", "To create components", "To handle forms"],
        answer: "To intercept and modify HTTP requests and responses"
    },
    {
        question: "What is Angular's 'NgZone' used for?",
        options: ["To manage change detection and asynchronous operations", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To manage change detection and asynchronous operations"
    },
    {
        question: "What is Angular's 'ComponentFactoryResolver' used for?",
        options: ["To dynamically create components", "To manage routing", "To create services", "To handle HTTP requests"],
        answer: "To dynamically create components"
    },
    {
        question: "What is Angular's 'ChangeDetectorRef' used for?",
        options: ["To manually trigger change detection", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To manually trigger change detection"
    },
    {
        question: "What is Angular's 'Renderer2' used for?",
        options: ["To interact with the DOM", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To interact with the DOM"
    },
    {
        question: "What is Angular's 'Injector' used for?",
        options: ["To inject services into components", "To manage routing", "To create components", "To handle HTTP requests"],
        answer: "To inject services into components"
    },
    {
        question: "What is Angular's 'EventEmitter' used for?",
        options: ["To emit events from components", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To emit events from components"
    },
    {
        question: "What is Angular's 'NgModule' used for?",
        options: ["To define a module and its components, directives, and services", "To manage routing", "To handle HTTP requests", "To create components"],
        answer: "To define a module and its components, directives, and services"
    },
    {
        question: "What is Angular's 'NgZone' used for?",
        options: ["To manage the execution context of Angular applications", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To manage the execution context of Angular applications"
    },
    {
        question: "What is Angular's 'HttpClient' used for?",
        options: ["To perform HTTP operations", "To manage routing", "To create components", "To handle forms"],
        answer: "To perform HTTP operations"
    },
    {
        question: "What is Angular's 'FormsModule' used for?",
        options: ["To build template-driven forms", "To manage routing", "To handle HTTP requests", "To create components"],
        answer: "To build template-driven forms"
    },
    {
        question: "What is Angular's 'ReactiveFormsModule' used for?",
        options: ["To build reactive forms", "To manage routing", "To handle HTTP requests", "To create components"],
        answer: "To build reactive forms"
    },
    {
        question: "What is Angular's 'NgForm' used for?",
        options: ["To track the status and value of a form", "To manage routing", "To handle HTTP requests", "To create components"],
        answer: "To track the status and value of a form"
    },
    {
        question: "What is Angular's 'FormArray' used for?",
        options: ["To manage a collection of form controls", "To manage routing", "To handle HTTP requests", "To create components"],
        answer: "To manage a collection of form controls"
    },
    {
        question: "What is Angular's 'FormGroup' used for?",
        options: ["To group multiple form controls", "To manage routing", "To handle HTTP requests", "To create components"],
        answer: "To group multiple form controls"
    },
    {
        question: "What is Angular's 'ValidatorFn' used for?",
        options: ["To define synchronous validation logic", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To define synchronous validation logic"
    },
    {
        question: "What is Angular's 'AsyncValidatorFn' used for?",
        options: ["To define asynchronous validation logic", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To define asynchronous validation logic"
    },
    {
        question: "What is Angular's 'TemplateRef' used for?",
        options: ["To represent an Angular template", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To represent an Angular template"
    },
    {
        question: "What is Angular's 'ViewContainerRef' used for?",
        options: ["To access the container of a view", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To access the container of a view"
    },
    {
        question: "What is Angular's 'ComponentFactoryResolver' used for?",
        options: ["To create components dynamically", "To manage routing", "To handle HTTP requests", "To create services"],
        answer: "To create components dynamically"
    },
    {
        question: "What is Angular's 'ChangeDetectorRef' used for?",
        options: ["To manually trigger change detection", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To manually trigger change detection"
    },
    {
        question: "What is Angular's 'Renderer2' used for?",
        options: ["To manipulate the DOM", "To handle HTTP requests", "To manage routing", "To create components"],
        answer: "To manipulate the DOM"
    }
];


// Initialize quiz state
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
let timerInterval;

// Fetch quiz type from URL
const urlParams = new URLSearchParams(window.location.search);
const quizType = urlParams.get('quiz');

// Assign the questions based on quiz type
switch (quizType) {
    case 'java':
        quizQuestions = javaQuestions;
        break;
    case 'python':
        quizQuestions = pythonQuestions;
        break;
    case 'javascript':
        quizQuestions = javascriptQuestions;
        break;
    case 'mysql':
        quizQuestions = mysqlQuestions;
        break;
    case 'nodejs':
        quizQuestions = nodeJsQuestions;
        break;
    case 'angular':
        quizQuestions = angularQuestions;
        break;
    default:
        quizQuestions = []; // No questions if the type is not recognized
        break;
}

// Load the first question
document.addEventListener('DOMContentLoaded', loadQuestion);

// Next Question Button Event Listener
document.getElementById('next-question').addEventListener('click', loadNextQuestion);

// End Quiz Button Event Listener
document.getElementById('end-quiz').addEventListener('click', showResult);

// Load a question with a timer
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
        return;
    }

    const questionObj = quizQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h4>Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</h4>
        <h4>${questionObj.question}</h4>
        <ul class="list-group">
            ${questionObj.options.map((option, index) => 
                `<li class="list-group-item answer-option" onclick="checkAnswer('${option}', this)">${option}</li>`
            ).join('')}
        </ul>
        <div id="timer" class="text center mt-3">Time left: <span id="time-remaining">15</span> seconds</div>
    `;

    // Show the End Quiz button
    document.getElementById('end-quiz').style.display = 'inline-block';

    startTimer();
}

// Timer function
function startTimer() {
    let timeLeft = 15;
    const timeRemainingElement = document.getElementById('time-remaining');

    timerInterval = setInterval(() => {
        timeLeft--;
        timeRemainingElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            loadNextQuestion();
        }
    }, 1000);
}

// Check the answer and highlight it
function checkAnswer(selectedOption, selectedElement) {
    clearInterval(timerInterval);
    const questionObj = quizQuestions[currentQuestionIndex];
    const optionsElements = document.querySelectorAll('.answer-option');

    optionsElements.forEach(optionElement => {
        if (optionElement.textContent === questionObj.answer) {
            optionElement.classList.add('bg-success', 'text-white');
        } else {
            optionElement.classList.add('bg-danger', 'text-white');
        }
        optionElement.onclick = null; // Disable clicking after selection
    });

    if (selectedOption === questionObj.answer) {
        score++;
    }

    document.getElementById('next-question').disabled = false; // Enable the next question button
}

// Load the next question
function loadNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
    document.getElementById('next-question').disabled = true; // Disable the next question button until an answer is selected
}

// Show the result at the end
function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h3>Your Score: ${score} / ${quizQuestions.length}</h3>
        <button id="restart-btn" class="btn btn-primary">Restart Quiz</button>
        <button id="end-quiz" class="btn btn-secondary" style="display: none;">End Quiz</button>
    `;
    document.getElementById('next-question').style.display = 'none'; // Hide the next question button

    // Add event listener to the restart button
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}

// Restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;

    // Stop any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Show the buttons and load the first question
    document.getElementById('next-question').style.display = 'block';
    document.getElementById('end-quiz').style.display = 'inline-block';

    // Clear the quiz container
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    // Load the first question without starting the timer
    loadQuestion();
}

// Load a question with a timer
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
        return;
    }

    const questionObj = quizQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h4>Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</h4>
        <h4>${questionObj.question}</h4>
        <ul class="list-group">
            ${questionObj.options.map((option, index) => 
                `<li class="list-group-item answer-option" onclick="checkAnswer('${option}', this)">${option}</li>`
            ).join('')}
        </ul>
        <div id="timer" class="text center mt-3">Time left: <span id="time-remaining">15</span> seconds</div>
    `;

    // Reset the timer and start it
    startTimer();
}

