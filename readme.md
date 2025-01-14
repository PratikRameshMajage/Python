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
- Python 3.0 - 2008 New and It has lot of Features.
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
        - `Intellige1 -> Java
- `Advanced Libraries` - Enumration ->: AI & Ml
    - Permutation and Combination
    - Probability
    - Statistics
    - `Numpy` - Data Manuplation -> Heavy Focus on Arrays
    - `Pandas` - Data Operations
    - `Matplotlib` - Visualisation -> Graphs, Ven Diagrams
- `print` -> Returns Each Charecter on Console Screen.
    - Double Coatation & Single Coatation.
    - print("'Pratik\'s Birthaday'")
    - \' (Back Slash) Ignores Special Charecter. eg: print('partik\'s "laptop"')
- `type` -> Returns Data Type of Data. 
- Companie Work on Python: `Infosis python 20%`, java 40%, deops 40%.
- Difference Between `Function` and `Method` -> Block of Code which Executes Targeted Code called Normal Function And Function Use in Class called Method. 
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

## `Addvantages:`
- `Easy to Learn`
- `Easy to Code`
- `Interprited Language`
- `Compile Language`
- `Robust in Nature`
- `Scalable Language`
- `Portable`
- `Free & Open Source`
- `High Level Language`
- `Large Community Support`
- `fastest Groing Language - Devlopers & Libraries Companies & Areas ML GUI Soft.D Web.D`

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
        - Collections of Elements of Unique Elements (Same Or Different).
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
    - Charecter (Char) Consider as a String.
    - In Python Value is By Default a String.  
    - In a Computer Numbering start from Zero. -> String: collection of charecters in Array indexing start from 0.
    - left to Right : 0 1 2 3
    - Right to left : -1 -2 -3 -4
    - Strings are immutable. we can not change once assign.
    - len() -> Returns total length of string in int data type.
- `Boolean:`
    - True & False. 1 & 0.

## `Operators:`
- There are Four types of Operators.
- `Arithmatic Operator:`
    - There are 8 Operators in Arithmatic Operators.
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
        - Sealing Division. (3.5)-> 4
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
        - Open Angular Bracket With Assignment Operator.
        - Given value should be less than Equal to the Maximum Value.

    - Equal To:
        - Two Consicutive ( Continuous ) Assignment Operator called Equal to Operator.
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
    - `Bitwise ANd ( & ):` 1 1 -> 1
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
- Control Statement Executes a Prticulay Block of Code only when the Condition is True.
- `if Contrl Statement:`
    - It is Control Statement.
    - Declared by Kyword `if`.
    - if Block
    - Check Conditions
    - Efficient -> Save Time and Memory.
    - Any Positive and Negative Number consider as a True. Truty Value
    - 0 Consider as a False. Falsy Value
    - -0 -> Entity: Something that Exist. -> Tecnically Wrong Value. 
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



