# `Python` `V25.01.08`
## `Notes:`
- `Guido van Rossum` Inventer of `Python` - `Monty Python's Flying Circus`. `Python came into Picture just to help those people who don't know how to write a code`
- `James Gosling` - Inventer of `Java` - `Oak`
- `Dennis Ritchie` - Inventer of `C`.
- `Michael Widenius` - Inventer of `MySql`.
- `1991` & `Feb`,  Python came in 1989 so it's way befor java 1995.
- It is a `case sensitive language`
- Python can be used for : 
    - `Programming` (for Placements/online contests/DSA)
    - `Development` (using a backend framework called Django)
    - `Machine Learning` | `Data Science` | `Articial Intelligence` | `Software Devlopment` | `Web Devlopment` | `Gui`.
- Websites built using Python include `Google`, `Youtube`, `Instagram`, `Netfix`, `Uber`. `Dropbox`, `Nasa`, `Yahoo`, & `reddit` written in Python much more.
- `Python` (https://www.python.org/) It also Called the `General Purpose Language`
- Python 1.0 - 1994
- Python 2.0 - 2000 Depricate in 2020
- Python 3.0 - 2008 New and It has lot of Features & Library Supports.
- `PVM` - Python Vertual Machine witten in Assembly language Which use Machine Level Language and convert it into binary language. Do's (Byte Code Verification)
- `High Level Language` (HLL) -> Python, English
- `Low Level Language` (LLL) -> Machine Level Language, Assembly Language-> Registers, Ic's
- `Binery Language` -> Byte Code -> 0 & 1
- `Constructive Language` - Create a Server - That's why we can use Python in web -> While "constructive language" is not a standard term, it could be used informally to describe Python’s role in building and constructing web applications, as it helps assemble server functionality efficiently.
- If you're coining a term, you could say "constructive backend language" to emphasize Python’s role in creating server-side architectures.
- `Scripting Language` -> Use in Hacking 
- `Interpriter Language` (Logical Exception) (Run Time Exception) (Bytecode Verification) -> Checks Byte Code Standards.
- `Compile Language` (Syntactical Error) (Compile Time Error)
<!-- - MySql -> YACC -> Yet Only Compile Compile -> C++ and MySql Two Compilers  -->
- `Robust in Nature` - Memory Management After Code Execution | `Clears Memory After Usage`
- `Scalable Language` - Compatible to Code with Every Language -> `MySql`, `JavaScript`
- Install Python:
    - python --version
    - pip --version -> python install packages
- Install jupyter:
    - jupyter --version
    - folder -> path -> cmd -> jupyter notebook
    - browser -> new -> .ipynb -> Interactive Python Notebook -> The notebook provides an environment where you can write and execute code, visualize data, and include `rich text annotations` interactively means `Markdoun annotations`.
- `Integrated Devlopment Environment:` & `Debugger`
    - Here No Need to Create New File
        - `Jupiter` -> Open Source -> .ipynb -> i : Interactive, py : Python, nb : Notebook.
        - `Python CLI IDLE` (File will Not Be Save) REPL (Read Evaluate Print Loop) Prompt in Windows Shell in Mac
    - Here Need to Create New File
        - `VS Code` -> Microsoft and it is Open Source to Buid Yourself.
        - `Pycharm` -> JetBrains
        - `Intellige` -> Java
- `Advanced Libraries` - Enumration ->: AI & Ml
    - Permutation and Combination
    - Probability
    - Statistics
    - `Numpy` - Data Manuplation -> Heavy Focus on Arrays
    - `Pandas` - Data Operations
    - `Matplotlib` - Data Visualisation -> Graphs, Ven Diagrams
- `print` -> Returns Each Charecter on Console Screen. Except escape charecters like (/n). 
    - Double Coatation & Single Coatation.
    - print("'Pratik\'s Birthaday'")
    - \' (Back Slash) Ignores Special Charecter. eg: print('partik\'s "laptop"')
- `type` -> Returns Data Type of Data on the console screen. 
- Companie Work on Python: `Infosis python 20%`, java 40%, deops 40%.
- Difference Between `Function` and `Method` -> Block of Code which Executes Targeted Logic called Normal Function. And Function Use in Class called Method. 
- `( : )` -> `Identation` -> Dependency Code (Indentation)
- Portable -> Works on Windows|Mac|Linux, Means platform Independent. 
- Implicit Conversion : ByDefault Conversion.
- Explicite Conversion : We did this By our own Hand.
- Partial Execution means 50% not 100%.
- All Progrogramming Languages are Scripting Languages. thats why here by default input value is consider as a string. like Python and JavaScript.
- Input : It allows to Except value on RunTime. (RunTime Is Class)
- ByDefault Input Value Accepts String. Beacouse All programing Languages are Scripting languages.  
- Type Conversion : int(input()) float(input()) complex(input())
- Every Data Type in python is Class. we are using there Objects eg:< class int >
- In Python, everything is an object, and every object is an instance of a class. So, when you use the type() function on an object, it returns the type of the object, which is the class to which it belongs.
```python
x = 42
print(type(x))  # Output: <class 'int'>
```
- x = 42: Here, x is assigned the value 42, which is an integer.
- type(x): This returns the class of the object x. Since 42 is an integer, type(x) will return <class 'int'>, indicating that x is an instance of the int class.

- `Compiler:`
    - It Give's an Error.
    - Compile Time Error.
    - Compile at the time of Code Writing.
    - If it fail's in Compilation process it does not show any Output Gives Direct Syntactical Error.
- `Interpriter:`
    - It Throw's Exception.
    - Run Time Exception.
    - Interprit at the time of code Execution.
    - It may be do the Partial Execution after Compilation and then on run time interpritation.

- `Error:`
    - Occours Beacouse of Syntactical Error.
    - At the Time of Compilation.
    - Compile Time Error 
    - Does not Show any type of Output Just Show the Syntax Error. 
- `Exception:`
    - Occours Beacouse of Logical Errors. 
    - At the Time of Interpritation.
    - Run Time Exception
    - It Will Show Partial Output or Exception.

- `Comments:` 
    - Use to Explin the code
    - Processor does not Execute the Commented line. It Ignores it. 
    - `Types:`
    - `Single Line Comment:`
        - It denote by `#` - Hash
    - `Multiline Comment:`
        - It denote by `"""...."""` - Thriple Cottation


- `BODMAS:` `Border: (){}[]` `Order: Square & Square Root`, ` Divide: / Multiply: *`, `Addition: + Subtraction: -.`

## `Special Charecters in Python:`
- `Termination ( ; ):` Why Optional? -> In System Libraries(Assembly Language) already /n is available after the print("..."/n) so no need to ( ; ) Terminate Line. 
- `Concatination ( , & + ):` Join
    - print("Pratik" + "Majage")
- `New Line ( \n )` -> go to new line 
- `Row String ( r )` ->  eg: print(r'c:\docs\nayan')
- `Back Slash ( \ )` -> Ignores Special Charecter. eg: print('partik\'s "laptop"')
- `Privious Output ( _ )` -> Output of Privious Operation.

## `Variable:`
- `Variable` -> The Name of Memory Location
- a = 5
- id(a) -> get address -> It is use to get the address of variable or memory location.
- b = a
- Whenever you create multiple variable and in case if they have Same Data they both will point to the Same Box. they will not be getting multiple boxes for each variable. and that's where python is more memory efficient, right Beacouse youre not getting multiple data here

## `Addvantages:`
- `Easy to Learn`
- `Easy to Code`
- `Interprited Language`
- `Compile Language`
- `Scalable Language`
- `Robust in Nature`
- `Portable`
- `Free & Open Source`
- `High Level Language`
- `Large Community Support`
- `fastest Groing Language - Developers & Libraries Companies & Areas ML GUI Soft.D Web.D`

## `Data Types:`
- `Numerical:`
    - `Int` (Numbers)
    - `Float` (Decial Point Value) (Floating Point Representation)
    - `Complex` (ai+bj) -> Combination of Real and Imaginary Numbers.
- `Sequential:`
    - `List []`
        - Combination of elements of Different Data Types
        - There is Defferece between List & Array
        - List is Mutable.
        - We can perform certain Operation using Methods.
    - `Tuple ()`
        - Ues on large Data.
        - It take less Memory Space and less Time to Execute. 
        - Tuple is Immutable. We can not ( Do Operations ) Change Once We Defined. 
        - Limited Methods:
            - count
            - index
        - Iteration is Fast than List.
    - `Set {}`
        - Collections of Elements of Unique Elements (Same Or Different Data Types).
        - Never Follow Sequence.
        - Indexing not Supported.
        - Not Support Duplicate Values.
        - Just Return Unique Value. No Duplicasy.
        - We can perform certain Operation using Methods.
    - `Frozen Set`
        - It Use to Create Copy of Original Set.
    - `Dictionary {}`
        - Key Value Pair.
    - `Range ( Start : End )`
        -     
- `String:`
    - Collections of Charecters.
    - In python Charecter data type does not exist. Only string data type exist.
    - Charecter (Char) Consider as a String.
    - In Python any Value consider By Default as a String.  
    - In a Computer Numbering start from Zero. -> String: collection of charecters in Array indexing start from 0.
    - left to Right : 0 1 2 3
    - Right to left : -1 -2 -3 -4
    - Strings are immutable. we can not change once we assign the value.
    - len() -> Returns total length of string in int data type.
- `Boolean:`
    - True & False. 1 & 0.

## `Operators:`
- There are Four types of Operators.
- `Arithmatic Operator:`
    - There are `8 Operators in Arithmatic Operators.`
    - `Addition:( + )`
        - Do's Addition | Summation.
        - Symbolis: Plus ( + ).
        - Minimum 2 Operands and 1 Operator specifically Operator lies within the 2 Operands.
    - `Subtraction:( - )`
        - Do's Subtraction.
        - Symbolis: Minus ( - ).
        - Minimum 2 Operands and 1 Operator specifically Operator lies within the 2 Operands.
    - `Multiplication:( * )`
        - Do's Multiplication & `Return's Product of two or more Operands`.
        - Symbolis: Star | Astaric ( * ).
        - Minimum 2 Operands and 1 Operator specifically Operator lies within the 2 Operands.
    - `Exponantiol:( ** )`
        - Do's Exponantional make Power of that Integer.
        - Symbolis: Two Consicative (Continous) Star | Astaric ( ** ).
        - Minimum 1 Operand integer and 1 power integer Operand specifically Operator lies within the 2 Operands.        
    - `Division:( / )`
        - Do's Division and `return's the Quotient`.
        - Symbolis: Division ( / ) Forword Slash.
        - Minimum 2 Operands and 1 Operator specifically Operator lies within the 2 Operands.
        - Floor Division. Base Integer Value (3.5)-> 3
        - Sealing Division. Round Integer Value (3.5)-> 4
    - `Floor Division:( // )` 
        - Do's Division and `return's the Quotient Base Integer Value`.
        - Symbolis: Division ( // ) `Two Consicative (Continous) Forword Slash`. 
        - Minimum 2 Operands and 1 Operator specifically Operator lies within the 2 Operands.
        - Also calles as `Integer Division.`
    - `Modulos:( % )`
        - Do's Division and `Returns Remainder.`
        - Symbolis: Percentage ( % ).
        - Minimum 2 Operands and 1 Operator specifically Operator lies within the 2 Operands.
    - Assignment Operator:
        - Store Value in Variable  

- Assignment Arithmatic Operator:
    - (+=): Addition and Assign to
    - (-=): Subtraction and Assign to
    - (*=): Multiplication and Assign to
    - (**=): Exponantiol and Assign to
    - (/=): Divide and Assign to
    - (//=): Floor and Assign to
    - (%=): Modulo and Assign to

- Relational Operator:
    - `Relational operator Returns Boolean DataType`. In the form of True and False.
    - Grater Than:
        - Open Angular Bracket 

    - Less Than:
        - Close Angular Bracket

    - Greater than Equal To: Min
        - Open Angular Bracket With Assignment Operator
        - Given value should be Greater than Equal to the Minimum Value.

    - Less Than Equal To: max
        - Close Angular Bracket With Assignment Operator.
        - Given value should be less than Equal to the Maximum Value.

    - Equal To:
        - Two Consicutive ( Contiguous ) Assignment Operator called Equal to Operator.
        - Return's True when both are Similar values.

    - Not Equal To: `Not ( ! )`
        - Exclametory mark with Assignment Operator
        - Return's True when both are Different values.   

|Assignment Operator            | Equal to Operator             |
|-------------------------------|-------------------------------|
|called Assignment Operator     |called Equal to Operator       |
|Belongs to Arithmatic Operator |Belong to Relational Operator  |
|It Stores Value                |Compare Values                 |

- Logical Operator:
    - Returns Boolean Value.
    - Logical and:
        - Returns True when all Conditions | Inputs are True.
    - Logical or:
        - Returns False when all conditions are False. 
    - Logical not:
        - Return Negation of Input value. 
    - Logical NAND:
        -  Not & And both makes NAND. called Negation of and
    - Logical NOR:
        -  Not & Or both makes NOR. called Negation of or

- `Bitwise Operators:`
    - It Returns Boolean Value on the Console Screen.
    - `Binary Concersion :` `| 32 | 16 | 8 | 4  | 2 | 1 |`  
    - `Bin() Function` use to Convert an `Integer value` to `Binary Value` also use to `Identity of a binary value.`
    - `0b` : is use an identifier for Binary Value `Identity.`  
    - Addition of `1+1` Bitwise Operator is `10` where 1 is Carry and 0 is Remainder.
    - `Bitwise AND ( & ):` 1 1 -> 1
        - It Returns 1 when all Inputs are 1 else it Returns 0.
    - `Bitwise OR ( | ):` 0 0 -> 0
        - It Returns 0 when all Inputs are 0 else it Returns 1.
    - `Bitwise Ex-OR ( ^ ):` 0 0 -> 0 | 1 1 -> 0 | 0 1 -> 1 | 1 0 -> 1 |
        - It Called Exclusive-Or.
        - It Returns 0 when all Inputs are Same.
        - It Returns 1 when all inputs are Different.
    - `Bitwise Complimentory Operator ( ~ ):` ~1 -> 0
        - It Returns Complimentory of Input Value. 
        - It Add 1 in in given value.  
        - It also called as 1'st Compliment Operator. (~4)
        - It gives Negative Value. ( -5 )
        - Negation of Negation called as 2's Compiment. (~(~4))
        - It gives Negative Value. ( -6 )
    - `Bitwise Left Shift Operator ( << ):`
        - Two Consicutive Close Angular Bracket. 
        - In this Operator; Value is Increases.
        - The Vacant Position after shifting are Occupied by 0. 
        - print(3<<2) 
    - `Bitwise Right Shift Operator ( >> ):`
        - Two Consicutive Open Angular Bracket.
        - In this Operator; Value is Reduce.
        - The Vacant Position after shifting are Occupied by Nothing.
        - print(3>>2)  
```python
a = 3
print(a)
# Output : 3
print(bin(a)) 
# Output : 0b11
print(bin(0b11))
# Output : 0b11
```
- `Membership Operators:`
    - Returns Boolean Value.
    - `In:`
        - It returns True when Specified Data is Present in given Value.
    - `Not In:`
        - It returns True when Specified Data is Not Present in given Value.
    
- `Identity Operators:`
    - Returns Boolean Value.
    - Object : Memory Location.
    - Mutable : List. Similar Data But Here It Represents by Different (Objects) Memory locations.
    - Immutabe : String, Tuple By Default in Python. When Similar Data is Present in Variable then it Represents by Same (Object) Memory Location.
    - All Data Types are Classes in Python.
    - `Is:`
        - Compares and Returns Boolean Value.
        - It Returns True when Specified Data Object and given Data Object is Similar.
    - `Is Not:`
        - It Returns True when Specified Data Object and given Data Object is Diffreant.
    - a=b : Explicit Conversion (we did this by our own hand) thats why it is Consider as Partially Immutable means 50% Immutable not 100%.

## `Control Statements:`
- It is use to Control the Execution Flow of the code.
- It Helps in Efficiently Executing Code by Saving Time & Memory.
- Control Statement Executes a Prticular Block of Code only when the Condition is True.
- `if Contrl Statement:`
    - It is Control Statement.
    - Declared by Kyword `if`.
    - if Block
    - Check Conditions
    - Efficient -> Save Time and Memory.
    - Any Positive and Negative Number consider as a True. Truty Value
    - 0 Consider as a False. Falsy Value
    - -0 -> Entity: Something that Exist. -> Tecnically Wrong Value. 
    - In Python, the condition if -0 will evaluate to False. Here's why:
    - Explanation:
        - In Python, 0 (zero) is considered falsy.
        - The negative sign before 0 (i.e., -0) does not change its value; -0 is still 0 in Python.
        - Therefore, if -0: will be treated as if 0:, which evaluates to False.
    - Syntax:
```python
if True:
    print("Welcome!!")
if False:
    print("Welcome!!")
```
- `if-else Control Statement:`
    - Else Block is Specified below if block.
    - No Conditions are Checked in Else Statement.
    - It Executes when if Statement is False. 
    - If Else condition is not Declared then it Returns `Blank` Value. means Return's Nothing on Console Screen. 
    - Syntax:
```python
if True:
    print("Welcome!!")
else:
    print("Bye..")
``` 
- `if-elif Control Statement | if-elif-ladder Control Statement:` 
    - Multiple Conditions are checked in elif Control Statement.
    - Starts with if Statement can Continue with many elif statements and may or may end with else.
    - Syntax:
```python
if condition 1:
    # Code|Logic
elif condition 2:
    # Code|Logic
elif condition 3:
    # Code|Logic
else:
    # Code|Logic
```  
- `match Control Statement: | Switch Control Statement`
    - It is declared by the keyword match.
    - it Contains many no of cases  each case has label.
    - Data match with the case label, the case label is Execute.
    - Case is Declared by the keyword case followed by case label & identation.
    - the `Wild Charecter` (_) case charecter executed when the no data matches with case labels.
    - Syntax:
```python
match value:
    case 1:
        # Code|Logic
    case 2:
        # Code|Logic
    case 3:
        # Code|Logic
    case _: # Default Case
        # Code|Logic
```

## `Loops:`
- Repetetion - Iteration
- Help to Execute Progressively | Repeatedly and with Enhancement.
- `For Loop`
    - Use keyword: for
    - in(Membership Operator)
    - range() - Predefined Function -> Accept 3 pameters -> Start|end|Difference eg:range(1,6), range(5,0,-1)
    - for i in range(5,0,-1):
- `While Loop`
    - Use for Iteration.
    - Intialise the variable.
    - Use keword: while(condition) in brackets we have to give the condition.
    - Increament|Decreament 
- `break :` `It Terminates the Execution of Code.`
- `continue :` `Omit the Perticular Situation.` 
      
## `Function:`
- It is `Entry or Block of Code` which `Executes Targeted Logic.`
- It `Identifies` by a `Function Name.`
- By using `def` keyword.
- `() : Function`
- `: -> Dependancy Code (Identation)`
- Single Python code file has `Multiple Functions.`
- Function Name should be `Unique.`
- Function `Defination` - `Parameters`
- Function expression.
- Function `call` - `Arguments`
- `Reusability:` `Write Once Use Multiple Time.`
- `Function always Jump Upword Direction` thts why `Function call` is `always below the Function Defination.`
- `return keyword:` `Return the value where the function call.`
- A value can be use outside the function by using return keyword.
- We can store the value in new variable by using return keyword.
- We can use multiple functions in pirnt funcrions.
    - `Non-Parametrise Functions.`
    - `Parametrise Functions.`
        - No of Arguments should match with the No of Parameters.
        - Separate by Commas
        - Parameter - Defination
        - Argument - Call
- `Ambiguity:` Multiple Functions has Same Name.
- Priority to Nearest Closest Function.
- Compatibility : Same Data Types.
```python
def Info():
    print("Hello I.T")
Info()
```
## `OOP's: Object Oriented Programming:`
- `Class:`
    - class is a keyword to define the Class in Python.
    - Class is a template of Object also know by Blueprint.
    - Class is a Container.
    - Attributes : Variables
    - Bihaviour : Methods
    - Class is a Combination of Data Members, Methods.(variables and Methods).
    - Calss is a collection of set of Multiple Data Members and Member Functions.
    - Class is a collection of Logic and Modues
    - class keyword
    - : - Identation (Indentation)
    - Follows Camelcase Syntax Structure
    - To Access Class methods or Variables we need to create class Object means Refrence Variable of calss.
    - Syntax: class Data:

- `Methods and Functions:`
    - `Methods:`
        - Function inside a class Called Method.
        - In Python Method Has Copulsury Self Parameter.
        - () are Mendatory to Methods.
        - : Identation is Mendatory to Methods
    - `Function:` 
        - A BLock of Code which Executes Targete Logic called Function. It is Outside the class.

- `Special Method:` 
    - `Constructor:`
        - Synatx: def __init__(self):
        - def Keyword is Mendatory to Create a Method. Constructor is also a Method
        - Self Parameter is Compulsury.
        - Constructor has 1'st (high) Priority than Method in class. means Higher Priority than Normal Method
        - Constructor allocates memory to class when object is Created.
        - By default Call when Object is Creted. (Memory is allocated)
        - Data() -> Class Constructor. this is how you call a Constructor.
        - Does Not Require Refrence Variable.

- `Object:`
    - By Using Class Constructor It Creates a Memory for Calss is known as Object.
    - Syntax: obj = Data() | Refrence Variable = Class Constructor.
    - Referance Variable refers the Memory Location. 
    - By using Object (Referance Variable) we access the calss variables and Methods outside the calss.
    - Refrence Variable is intermediatery between Method and Memory Location. Method <- Refrence Varible -> Memory Location
    - Refrence Variable Refers Data Members of Class.

- `Self:`
    - Self is a Parameter.
    - Refers to the Current Object.
    - Points To the Instance Variable.
    - Self is Use to Deferentiate the Local and Instance Variable.
    - Self is use to Call the Current Object Method.
    - Within Class we can call multiple Method from inside the another method.
    - It make's Processor to jump easily within the calss one method to another method.

- `Instance Variable:`
    - A Varible within the Calss and outside the Methods called Instance Variable.
    - If you want to use Instance Varialbe in the Method we need to use self keword. like: self.num1, self.num2
    - Instance variable accessible outside the class by using the Objects.
    - The Scope of Instance Variable is within the Class.

- `Local Variables:`
    - A Variable inside the Method called the Local variable.
    - The Scope of Local Variable is Within the Method Block.
    - Parametrise variables are local variables.  

## `Problem Statements:`
- `Armstrong: 153`
    - A number whose summation of cube of each digit is the same number is called Armstrong Number.
    - 153 -> (Cube) 1 ** 3 | 5 ** 3 |3**3 -> (Summation) 1|125|27 -> 153 
    - Save original value to another variable beacouse it may be chances to change the Original number. -> temp = num
    - Intialise the sum by 0. -> sum = 0 
    - Use loop for iteration till condition makes false. -> while(num>0)
    - Grab Last Digit -> rem = rem % 10
    - Formula: sum = sum + (rem * rem * rem)
    - Remove Last Digit = num = num // 10 | num = int(num/10) type cast to integer.
    - Check the Original number and Armstrong Number by using Ff-Else Condition -> if sum==temp:
    - If true print sum is Armstrong else print temp is not Armstrong number.  

- `Palindrome: 121`
    - A number whose Reverce Number is the same Number called Palindrome Number.
    - 121 -> 121 | 353 -> 353 
    - Save Number to another Variable. -> temp=num 
    - intialise sum by 0. -> sum = 0
    - use loop for iteration till condition makes false. -> while(num>0)
    - Grab Last Digit. -> rem = rem % 10
    - Formula -> sum = (sum * 10) + rem
    - Remove Last Degit. -> num = num//10 | num = int(num/10)
    - Check the Original number and Palindrome Number by using Ff-Else Condition -> if sum==temp:
    - If true print sum is Palindrome else print temp is not Palindrome number.  

- `Factorial: 5!`
    - 5! -> (Start fact) 1 * 1 2 3 4 5 -> 120
    - Take a input range from user.
    - Intialise fact by 1. -> fact = 1
    - Use for loop to reach the condition. -> for i in range(1,num+1):
    - Formula: fact = fact*i
    - Print Factorial number

- `Fibonacci:`
    - Addition of Privious two Numbers Called the Fibonacci series. 
    - By Default Start from 0 & 1.
    - Intialize two variables with 0 and 1. -> p1 = 0, p2 = 1
    - Take a Range from User by Using Input.
    - Print privious numbers.
    - Use for Loop To Iterate. -> For i in range(2 to num)
    - Start from 2 beacouse we already print privious two values.
    - Formula: p3 = p1 + p2
    - Print p3
    - Swap Values -> p1=p2, p2=p3

## `Lambda:`
- `Lambda Function:`
    - It is Anonymous (Unknown) Function. No Function Name.
    - Declare by the keyword lambda.
    - It is ShortHand Function (Oneline Function)
    - It is not use def keyword.
    - It is Returning Function.
    - It is Parametrize Function.
    - Syntax: Variable = Lambda Parameters : Expression
      
- `Lambda vs Method:`
    - `lambda:`
        - Function is Anonymous.
        - No use of def keyword.
        - Always Parametrise and returning function.
        - use for simple logic.
        - Usecase - OneLine Function.
    - `Method:`
        - Function Should have Name.
        - Use def keyword to declare the function.
        - It may be or may not be Parametrise or Returning Function.
        - use for Complex logic.
        - MultiLine Funcion.
        - Self Parameter is Compulsury.
          
- `Constructor vs Method:`
    - `Constructor:`
        - Constructor declare by def keyword.
        - Constructor name is __init__.
        - Constructor has compulsory self parameter.
        - It executes Immediately. higher pripity than method.
        - No need of Refrence Variable.
        - It cretes memory for class data members. 
    - `Method:`
        - Function Should have Name.
        - Use def keyword to declare the function.
        - It may be or may not be Parametrise or Returning Function.
        - use for Complex logic.
        - MultiLine Funcion.
        - Self Parameter is Compulsury.
          
- `Types of Function:`
    - Normal Function
    - Method Function: A function declare inside the class called method.
    - Constructor Function
    - Parametrise Function: no of Arguments are match with no of Parameters.
    - Non-Parametrise Function
    - Returning Function
    - Lambda Function (Anonymous Function)
    - Nested Function (Inner Function): Function Declare inside another Function.

## `String:`
- `String:`
    - Collection of Charecters called String:
    - Charecter does not exist in Python. Each Charecter consider as a String.
      
- `String & Functions:`
    - `Concatination:`
        - String can be added by Concatination.
        - a = "Hi" | b = "How are you?" 
        - print(a+b)
    - `functions Start from is__ Return Boolean Values:`
    - `isalnum:`
        - Return Boolean Value.
        - Return true when string contains Alphabets and Numbers.
        - Return false when string contains Special Charecters and Space.
        - print(data.isalnum())
    - `isalpha:`
        - Return Boolean Value.
        - Return true when string contains Alphabets.
        - print(data.isalpha())
    - `islower:`
        - Return Boolean Value.
        - Return true when given string is in lowercase.
        - print(data.islower())
    - `isupper:`
        - Return Boolean Value.
        - Return true when given string is in uppercase.
        - print(data.isupper())   
    - `isdigit:`
        - Return Boolean Value.
        - Return true when given string is in Numeric Format.
        - Return false when given string contains space and special charecters.
        - print(data.isdigit())
    - `join:`
        - It mixes the given strings one charecter at a time.
        - print(s1.join(s2))
    - `lower:`
        - convert uppercase to lowercase.
        - print(s3.lower())
    - `upper:`
        - convert lowercase to uppercase.
        - print(s3.upper())
    - `swapcase:`
        - It will Reverce the case value of a given string upper to lower and lower to upper.
        - print(s3.swapcase())
    - `title:`
        - It converts every first letter of each word in capitalcase.
        - print(s3.title())
    - `replace:`
        - Replace function change Old String to New String.
        - print(s3.replace("bad","good"))
    - `find:`
        - Return index Posititon of given String. 
        - Return -1 if not Found
        - print(s3.find("b"))
    - `index:`
        - Return index Posititon of given String.
        - Return Exception if not Found. Terminate the code. (substring not found)
        - print(s3.index("z"))
- `String Functions`             
    - isalnum
    - isalpha
    - isdigit
    - islower
    - isupper
    - Concatination
    - join
    - upper
    - lower
    - title
    - swapcase
    - replace
    - index
    - find

## `Format Specifier:`
- `Format Specifier:`
    - Format Specifier refers to corresponding Variable in order to reflect the correct value on the console screen.
    - %d -> Integer
    - %s -> String
    - %f -> Float
    - print("Roll No is %d, Name is %s, Percentage are %f"%(rollno,name,percentage))

- `list:`
    1. `append:` 
    2. `extend:` 
    3. `insert:`
    4. `remove:`
    5. `pop:`
    6. `index:`
    7. `count:`
    8. `reverse:`
    9. `sort:` & `sort:` `reverse=True`
    10. `clear:`
    11.  `copy:`

    - `append:`
        - Add the element at the end of the list.
        - Tuple  also append in another list
        - Set also append in another list
        - It do partition in appended list by [] () 
        - Add full element
    - `extend:`
        - It merges new iteration into the current list.
        - It do merges in existing list.
        - It is Iterable Specific Method.
        - It merge list does not make partition's
        - extend list in another list
        - extend tuple in another list
        - extend element: add's one by one single charecter in the element added in list.
    - `insert:`
        - Add elemements at starting
        - It is use to add element at specific index position inside a list.
        - syntax: insert(index,element)
    - `remove:`
        - 1'st occurance remove.
        - It will remove 1'st occurance of the specified element.
    - `pop:`
        - remove last element by default
        - specific index element will be poped out.
        - syntax: pop(index)
    - `index:`
        - It will return the index value of the specified element.
    - `count:`
        - It will return the no of occurance of the specified element. 
    - `reverse:`
        - Reverse the order of your list.
    - `sort:` & `sort:` `reverse=True`
        - sort in asending order
        - sort in descending order
        - It is use to return in ascending order.
        - It is use to return in descending order.
    - `clear:`
        - return empty list.
        - delete all element in the list.
    -  `copy:`
        - copy's list in another destination.
     
- The extend() and append() functions in Python are methods used to modify lists, but they work differently in terms of how they add elements to the list.
- `append() Method:`
    - Purpose: Adds a single element to the end of the list.
    - Behavior: The entire argument passed to append() is treated as a single element, even if it is a list or another iterable.
    - Syntax: list.append(element)
    - Parameters: Takes a single element as its argument.
    - Return Value: Returns None (modifies the list in-place).
    - Example 1: Adding a single element
    - my_list = [1, 2, 3]
    - my_list.append(4)  # Adds 4 as a single element
    - print(my_list)  # Output: [1, 2, 3, 4]
    - Example 2: Adding another list
    - my_list = [1, 2, 3]
    - my_list.append([4, 5])  # Adds [4, 5] as a single element
    - print(my_list)  # Output: [1, 2, 3, [4, 5]]

- `extend() Method:`
    - Purpose: Extends the list by appending all elements from an iterable (e.g., another list, tuple, string, etc.).
    - Behavior: It iterates over the argument and adds each element individually to the list.
    - Syntax: list.extend(iterable)
    - Parameters: Takes an iterable (e.g., list, tuple, string).
    - Return Value: Returns None (modifies the list in-place).
    - Example 1: Extending with another list
    - my_list = [1, 2, 3]
    - my_list.extend([4, 5])  # Adds 4 and 5 as separate elements
    - print(my_list)  # Output: [1, 2, 3, 4, 5
    - Example 2: Extending with a string
    - my_list = [1, 2, 3]
    - my_list.extend("45")  # Adds '4' and '5' as separate elements
    - print(my_list)  # Output: [1, 2, 3, '4', '5']


`Key Differences`
|Aspect         |append()	|extend()|
|---------------|-----------|--------|
|Input	        |Single element	|Iterable (list, tuple, string, etc.)|
|Behavior	    |Adds the entire input as a single element	|Iterates over the input and adds each element individually|
|Use Case	    |Adding a single item (object, number, etc.)	|Adding multiple elements from an iterable|
|Example	    |list.append([4, 5]) → [[4, 5]]	|list.extend([4, 5]) → [4, 5]|

- When to Use
    - Use append() when you want to add a single element to the list.
    - Use extend() when you want to merge elements from another iterable into the list.


- Visual Representation
- For a list my_list = [1, 2, 3]:
    - my_list.append([4, 5]) → [1, 2, 3, [4, 5]]
    - my_list.extend([4, 5]) → [1, 2, 3, 4, 5]
      
- `Dictionary:`
    1. `get:`
    2. `items:`
    3. `keys:`
    4. `values:`
    5. `copy:`
    6. `update:`
    7. `pop:`
    8. `popitem:`
    9. `clear:`
        
    - `get:`
        - It will return corresponding value of the specified key
        - syntax: get(key)
        - one key at a time
    - `items:`
        - It will return key value pair in tuple format.
    - `keys:`
        - It will return list of keys in tuple format
    - `values:`
        - It will return list of values in tuple format
    - `copy:`
        - use to copy the data to the targeted destination 
    - `update:`
        - It is use to update key value inside a dictionary
        - If the key is already present then the value is replace
        - If key is not present then key value apir is added to the dictoneary
    - `pop:`
        - It will remove the key value pair of specified kay  
    - `popitem:`
        - By default remove last kay value pair 
    - `clear:`
        - Return empty dictoneary.
     
### `Inheritance: When The Object of child class aquires properties of object of parent class is called Inheritance. When One Child class aquires the properties of parent class is called Inheritance. V25.01.27`
- `It is Object Oriented Concept.`
- `Parent Class: Parent calss|Base Class|Super Class.`
- `Child Class: Child Class|Derived Class|Sub Class.`
- `It is Not mendatory to always say object word in the types of Inheritance defination.`
### `Types of Inheritance:`
- `Single Level Inheritance: When Object of One Child class aquries the properties of object of One Parent class.`
- `Multilevel Inheritance: When One child class is the parent of another child class such inheritance is called as multilevel inheritance`
- `Multiple Inheritance: When One child class inherited the properties of multiple parent class such inheritance is called as Multiple Inheritance.`
- `Hybrid Inheritance: `

- By default Constructor call in python when object is created.
- Two Types Calling:
- Child() -> by Default -> Implicit 
- obj.Child() -> By Own Hand -> Explicit
- Constructor creates Object(Memory) by default.
- By default Object created Constructor Implictly.
- mro() -> Method Resolution Order. It is nothing but scequence of properties in Inheritance. -> Proritywise.
- Babli, Bunty, Pandi, Pandu, Object.
- C->A
- Call Imediate Parent Class. Still Implimented this Concept Beacouse, 
- It Accessing the elements of Parent calss B which is inherited from the Parent calss A. 
- Beacouse of Inheritance Still it can access the m1 method into the B class.
- `Call Imediate Parent Class. Still Implimented this Concept Beacouse, It Accessing the elements of Parent calss B which is inherited from the Parent calss A. Beacouse of Inheritance Still it can access the m1 method into the B class.`

- In object-oriented programming, multilevel inheritance and multiple inheritance are two different types of inheritance relationships in which child classes inherit features from one or more parent classes. Here's a detailed comparison:
1. Multilevel Inheritance
- Definition:
- In multilevel inheritance, a class is derived from a class that is itself derived from another class. This forms a "chain" of inheritance where properties and methods are passed down through multiple levels.
- Structure:
    - Class A (Base Class)
       ↑
    - Class B (Derived from A)
       ↑
    - Class C (Derived from B)
- Key Features:
    - Inherits properties and methods from one parent class and passes them to the next level.
    - Creates a hierarchical chain.
    - Child classes can access properties and methods of all their ancestors.

2. Multiple Inheritance
Definition:
In multiple inheritance, a class can inherit from more than one base class. This allows the derived class to access properties and methods from multiple parent classes.

- Structure:
    - Class A         Class B
       ↑               ↑
             Class C (Derived from A and B)

- Key Features:
    - Combines features from multiple parent classes into a single child class.
    - Useful when a class needs to inherit different functionalities from various sources.
    - Can lead to ambiguities (e.g., diamond problem) if multiple parent classes have methods with the same name.

- Use Cases
    - Multilevel Inheritance: When creating a hierarchy where each level specializes or adds to the behavior of its parent class.
    - Multiple Inheritance: When combining functionalities from multiple, unrelated parent classes.

- Summary
    - Multilevel Inheritance: A step-by-step inheritance chain.
    - Multiple Inheritance: Directly inherits from multiple classes.

`Key Differences:`
|Feature|	Multilevel Inheritance|	Multiple Inheritance|
|-------|-------------------------|---------------------|
|Definition|	Inheritance through multiple levels.|	Inheritance from multiple parent classes.|
|Structure|	Forms a chain-like hierarchy.|	Combines features from multiple sources.|
|Number of Parents|	A class inherits from a single parent at each level.|	A class can inherit from two or more parents.|
|Complexity|	Less complex; linear structure.|	More complex; can lead to ambiguities.|
|Example Classes|	Grandparent → Parent → Child|	Father, Mother → Child|
|Common Issue|	No ambiguities.|	Possible method resolution conflict (diamond problem).|


## `datetime: V25.01.30` 
- import datetime
- datetime.datetime.now() : Current Date Time.
- %a = Sat
- %A = Saturday
- %d = 08
- %D = 02/08/25
- %b = Feb
- %B = February
- %y = 25
- %Y = 2025
- %H = Hours
- %M = Minutes
- %S = Secondes
- %f = Microseconds
- %x = Data
- %X = Time
- %p = PM|AM
- %I = 12 Hour's Format
- %w = 6
- %W = 05
- %V = scequence of weeks Monday | Sunday
- %c = Sat Feb  8 22\:22:57 2025

## `Meta Charecters: (Regular Expressions)( search (Search in given data), findall (Find), sub (Replace), split (split according to Charecter or Space))` `Return Boolean Value`
- Start : ^
- end : $
- Remaining Charecters : .*
- No of Charecters : .
- Specific no of Charecters : {3}
- Or : |
- 0 or 1 Charecter : .?
- 1 or More Charecters : .+ 

## `Specical Charecters:` `Returns Boolean Value` 
- Start Charecter : "\APratik"
- End Charecter : r"Pratik\b"
- End Charecter : r"\BPratik"
- Digit Value Match : "\d"
- Non-Digit Value Match : "\D"
- Return Space Value : "%s"
- Returen Non-Space Charecters : "%S"
- Return Space and Special Charecters : "%W"
- Return Charecters : "%w"
- Return end with Charecters : "%z"

## `Polymorphism & File Handling V25.01.31`

## `numpy: V25.02.03`
- Connect Wifi
- Open jupyter
- Pip install numpy : use to Install this Package.
- numpy - Package (Packase) - Set of Functions - Numerical Python - Array
- numpy stands for Numerical Python.
- It is an Array orinted Library.
- Array function is use to declared an array.
- Array is faster than a list as no new memory is created for Element. Efficient Memory management and Time management.
- It can be declared in list format.
- import numpy
- import numpy as np
- as : Aliance : Another name refer to this entity (Library)
- print(type(arr)) : class-numpy.ndarray
- `Array:`
    - Collection of elements of different data types.
    - List and array define same but memory allocation is different.
    - List with common memory allocation.
- 0D : Zero Dimentional | consist only 1 Element
    - a = np.array([22]) 
- 1D : 1 Dimentional | Uni Dimentional | Consist only Rows
    - a = np.array([1,2,3,4,5])
- 2D : 2 Dimentional | Collection of Row's and Column's
    - a = np.array([[1,2],[3,4]],[[5,6],[7,8]])
- 3D : 3 Dimentional | x y z Dimentions
    - a = np.array([[[1,2],[3,4]],[[5,6],[7,8]],[[9,10],[11,12]]])
- length : Total No of Elements eg.,5 
- Index : Strat from 0 indexth Element eg.,5-1=4
- ndim : Return Dimention of Array
- `Index:`
    - Index Position returns array Value Element.
    - Value can be featched by specifing position.
    - It should be specifing in square brackets.
    - print(a[0])
    - Negative Indexing allowed.
    - Negative indexing start search from extreme right. 
    - print(a[-1])
    - In more than 1D array the indexing is in this format:
        - 1'st priority given to Value index.
        - 2'nd priority given to Element index.
        - 3'rd priority given to Set index | Dimention index.
- `Slicing:`
    - It is used to select set of array by specifing start and end point by separating by : (Colan).
    - If starting point is not mention it is consider as a endpoint. not mention means it consider as a last index position.
    - Steps : Difference
- `Sort:`
    - It assembles the element of array in ascending order  
- `searchsorted:`
    - Show's where you can add that index position.
    - a[5] = 43 : It will replace the value in given array.
    - Search sorted need sort array in ascending order.
    - It is a function which helps to load a new value without disturbing the order. 







































































































































































































`------------------------------------------------------------------------------------------------------------------`
# `Java:`

In Java, **multiple inheritance is partially supported**. Here's a detailed explanation:

---

### **1. Multiple Inheritance with Classes**
- Java does **not support multiple inheritance** with classes.
- This restriction exists to avoid **ambiguities** caused by the **diamond problem**, where two parent classes may have methods with the same name, leading to conflicts.
- If you try to inherit from multiple classes, the compiler will throw an error.

#### **Example of Unsupported Multiple Inheritance**:
```java
class ClassA {
    void show() {
        System.out.println("ClassA method");
    }
}

class ClassB {
    void show() {
        System.out.println("ClassB method");
    }
}

// Compilation error: Cannot inherit from multiple classes
class ClassC extends ClassA, ClassB {
    public static void main(String[] args) {
        ClassC obj = new ClassC();
        obj.show();
    }
}
```

**Error**:  
`ClassC cannot inherit from both ClassA and ClassB.`

---

### **2. Multiple Inheritance with Interfaces**
- Java supports multiple inheritance through **interfaces**.
- A class can implement multiple interfaces, and there is no ambiguity because interfaces only declare methods (they do not provide implementations, except in the case of default methods introduced in Java 8).

#### **Example of Supported Multiple Inheritance with Interfaces**:
```java
interface InterfaceA {
    void showA();
}

interface InterfaceB {
    void showB();
}

class ClassC implements InterfaceA, InterfaceB {
    public void showA() {
        System.out.println("InterfaceA method");
    }
    
    public void showB() {
        System.out.println("InterfaceB method");
    }
    
    public static void main(String[] args) {
        ClassC obj = new ClassC();
        obj.showA();
        obj.showB();
    }
}
```

**Output**:
```
InterfaceA method
InterfaceB method
```

---

### **3. Handling Ambiguity with Default Methods (Java 8)**
- If two interfaces have **default methods** with the same name, the implementing class must **override** the method to resolve the ambiguity.

#### **Example of Resolving Ambiguity**:
```java
interface InterfaceA {
    default void show() {
        System.out.println("InterfaceA default method");
    }
}

interface InterfaceB {
    default void show() {
        System.out.println("InterfaceB default method");
    }
}

class ClassC implements InterfaceA, InterfaceB {
    // Resolving ambiguity
    @Override
    public void show() {
        System.out.println("Overridden method in ClassC");
    }
    
    public static void main(String[] args) {
        ClassC obj = new ClassC();
        obj.show();
    }
}
```

**Output**:
```
Overridden method in ClassC
```

---

### **Why Java Does Not Support Multiple Inheritance with Classes**
1. **Diamond Problem**:
   - When two parent classes have methods with the same name, the compiler cannot determine which method to inherit.

2. **Code Maintainability**:
   - It avoids the complexity and confusion of handling multiple class hierarchies.

3. **Interfaces as a Solution**:
   - Interfaces allow multiple inheritance of behavior (method declarations) without leading to ambiguity since the class implementing the interfaces provides the method implementation.

---

### **Summary**
- **Java does not allow multiple inheritance with classes** to avoid ambiguity (diamond problem).
- **Java allows multiple inheritance through interfaces**, providing a clean and conflict-free solution.

`------------------------------------------------------------------------------------------------------------------`
`------------------------------------------------------------------------------------------------------------------`

Here are 20 Python OOP (Object-Oriented Programming) practice questions covering **Multiple Inheritance, Multilevel Inheritance, Super Keyword, and Other OOP Concepts**:  

These questions will help you **practice Multiple Inheritance, Multilevel Inheritance, Super Keyword, Method Overriding, Constructor/Destructor, Polymorphism, Abstraction, and Encapsulation in Python.** 

### **Multiple Inheritance Questions:**  
**Q1.** Using Multiple Inheritance, create separate classes for Armstrong, Palindrome, Factorial, and Fibonacci Series, and display their results.  

**Q2.** Using Multiple Inheritance, draw:  
  - Class 1: Pyramid  
  - Class 2: Reverse Pyramid  
  - Class 3: Diamond  
  - Class 4: Use the **super()** method  

**Q3.** Create a program using Multiple Inheritance where:  
  - Class **Person** has attributes: name, age  
  - Class **Job** has attributes: job_title, salary  
  - Class **Employee** inherits both and displays details  

**Q4.** Implement a **Bank System** using Multiple Inheritance with:  
  - Class **Customer**: Contains name and account number  
  - Class **Transaction**: Handles deposit and withdrawal  
  - Class **BankAccount**: Inherits from both and maintains balance  

**Q5.** Design a **Student Grading System** using Multiple Inheritance with:  
  - Class **Student**: Name, roll number  
  - Class **Marks**: Subject marks  
  - Class **Result**: Inherits from both and calculates total marks and percentage  

---

### **Multilevel Inheritance Questions:**  
**Q6.** Using Multilevel Inheritance, create a program that displays **String Methods** in one class and **List Methods** in another. Use **super()** to call methods from parent classes.  

**Q7.** Implement a **Vehicle Hierarchy** using Multilevel Inheritance:  
  - Class **Vehicle**: General attributes (e.g., brand, model)  
  - Class **Car**: Specific car details (e.g., number of doors)  
  - Class **SportsCar**: High-speed car features  

**Q8.** Create a **Library Management System** using Multilevel Inheritance with:  
  - Class **Library**: Stores book details  
  - Class **Librarian**: Manages book lending  
  - Class **User**: Borrows books  

**Q9.** Design an **Online Shopping System** using Multilevel Inheritance:  
  - Class **Product**: Stores product details  
  - Class **Customer**: Stores customer information  
  - Class **Order**: Manages order processing  

**Q10.** Develop an **E-commerce Application** with:  
  - Class **User**: Contains user details  
  - Class **Buyer**: Inherits from User and adds cart functionality  
  - Class **Order**: Processes orders  

---

### **Super Keyword & Method Overriding Questions:**  
**Q11.** Create a program to show how **super()** is used in **Multiple Inheritance** to avoid ambiguity.  

**Q12.** Implement **Method Overriding** in Python using a base class `Animal` and derived classes `Dog`, `Cat` that override the `make_sound()` method.  

**Q13.** Design a **University Management System** where:  
  - Class **Person**: Stores name and age  
  - Class **Teacher** and **Student** inherit from Person  
  - Use **super()** to initialize attributes  

**Q14.** Implement a **Banking System** with:  
  - Class **Bank**: Contains bank name and branch  
  - Class **Account**: Inherits Bank and stores account details  
  - Class **SavingsAccount**: Adds interest calculation  

**Q15.** Create a **Shape Drawing System** where:  
  - Class **Shape**: Defines a general draw() method  
  - Class **Circle**, **Rectangle**, **Triangle** override draw()  

---

### **Constructor, Destructor, Polymorphism, and Abstraction Questions:**  
**Q16.** Implement **Constructor Overloading** using default arguments in Python.  

**Q17.** Demonstrate **Destructor (`__del__` method)** in Python using a class `Demo` to track object deletion.  

**Q18.** Implement **Polymorphism** where different classes implement a common method `calculate_area()`.  

**Q19.** Use **Abstract Classes** and **Methods** (`ABC` module) to create a program where:  
  - Class **Shape** is abstract  
  - Derived classes **Circle**, **Square**, **Triangle** implement `calculate_area()`  

**Q20.** Implement **Encapsulation** where:  
  - A class has private variables  
  - Uses getter and setter methods to modify and access private variables  

---









