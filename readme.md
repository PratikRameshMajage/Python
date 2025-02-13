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
- `PVM` - Python Vertual Machine witten in Assembly language Which use Machine Level Language and convert it into binary language. Do's (Byte Code Verification) Throw Exception when byte code standard's not match.
- `High Level Language` (HLL) -> Python, English
- `Low Level Language` (LLL) -> Machine Level Language, Assembly Language-> Registers, Ic's
- `Binery Language` -> Byte Code -> 0 & 1
- `Constructive Language` - Create a Server - That's why we can use Python in web -> While "constructive language" is not a standard term, it could be used informally to describe Python’s role in building and constructing web applications, as it helps assemble server functionality efficiently.
- If you're coining a term, you could say "constructive backend language" to emphasize Python’s role in creating server-side architectures.
- `Scripting Language` -> Use in Hacking | Everything Consider as String.(Numbers) | Input consider as a String. Beacouse python is scripting langiage it is use for web devlopment also. 
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
        - `Python CLI IDLE` (File will Not Be Save) REPL (Read Evaluate Print Loop) Prompt in Windows, & Shell in Mac
    - Here Need to Create New File
        - `VS Code` -> Microsoft and it is Open Source to Buid Yourself.
        - `Pycharm` -> JetBrains
        - `Intellige` -> Java
- `Advanced Libraries` - Enumration ->: AI & Ml
    - Permutation and Combination
    - Probability
    - Statistics
    - `Numpy` - Data Manuplation -> Heavy Focus on Arrays, Nunmerical python.
    - `Pandas` - Data Operations.
    - `Matplotlib` - Data Visualisation -> Graphs, , Charts, Ven Diagrams.
- `print` -> Returns Each Charecter on Console Screen. Except escape charecters like (/n). 
    - Double Coatation & Single Coatation.
    - print("'Pratik\'s Birthaday'")
    - ( \ Back Slash) Ignores Special Charecter. eg: print('partik\'s "laptop"')
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
- Eveery Exception in python is class. 
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
    - `Binary Concersion :` `| 32 | 16 | 8 | 4  | 2 | 1 |` = `2^5|2^4|2^3|2^2|2^1|2^0`
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


- `Relation between Object and Class:`
    - `Object is an instance of Class`
    - `Constructor: Use to Intialize the Object.`
    - `Object allocates memory by intiallizing class Constructor`
    - `Object defines the Behaviour of Class`
    - `class is the container of Data members and Method functions.`
    - `class is a Blueprint`
    - `More than one constructor allow in python with diffrent parameters.`
    - `def keyword use to define Constructor.`
    - `By using __init__(self) we create Constructor.`
    - `self parameter is mendatory for constructor and methods.`
    - `Constructor does not require object`

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


## `Polymorphism V25.01.31`

### **Polymorphism in Python – From Beginner to Advanced**  

Polymorphism is a key concept in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. This enables flexibility and reusability in code.  

---

## **🔹 1. What is Polymorphism?**  
**Polymorphism** means "many forms" and allows the same function or operator to have different meanings depending on the context.

💡 **Real-life Analogy:**  
A single word can have different meanings in different situations.  
For example, the word **"run"** can mean:  
- **A person runs** 🏃 (physical activity)  
- **A program runs** 💻 (execution of software)  
- **A car runs** 🚗 (a vehicle in motion)  

In Python, polymorphism allows us to use the same method name, function, or operator in multiple ways.

---

## **🔹 2. Types of Polymorphism in Python**  
Python supports four types of polymorphism:  

1. **Method Overriding (Runtime Polymorphism)**
2. **Method Overloading (Compile-time Polymorphism)**
3. **Operator Overloading**
4. **Duck Typing**  

---

## **🔸 3. Method Overriding (Runtime Polymorphism)**
🔹 **Definition:** Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its parent class.

🔹 **Key Points:**  
✔ Parent and child class have the same method name.  
✔ The child class method **overrides** the parent class method.  

### **Example of Method Overriding**
```python
class Animal:
    def make_sound(self):
        print("Some generic sound")

class Dog(Animal):
    def make_sound(self):  # Overriding the parent method
        print("Bark!")

class Cat(Animal):
    def make_sound(self):  # Overriding the parent method
        print("Meow!")

# Creating objects
a = Animal()
d = Dog()
c = Cat()

# Calling the method
a.make_sound()  # Output: Some generic sound
d.make_sound()  # Output: Bark!
c.make_sound()  # Output: Meow!
```
Here, the `make_sound()` method behaves differently depending on the object calling it.

---

## **🔸 4. Method Overloading (Compile-time Polymorphism)**
🔹 **Definition:**  
Method overloading allows multiple methods with the **same name** but **different arguments**.  

🔹 **Important Note in Python:**  
Unlike Java or C++, **Python does not support method overloading directly**. However, we can achieve it using default arguments or variable-length arguments (`*args` and `**kwargs`).

### **Example of Method Overloading**
```python
class MathOperations:
    def add(self, a=None, b=None, c=None):  
        if a is not None and b is not None and c is not None:
            return a + b + c
        elif a is not None and b is not None:
            return a + b
        else:
            return a

# Creating object
math_op = MathOperations()

# Calling the method with different parameters
print(math_op.add(5, 10))       # Output: 15
print(math_op.add(5, 10, 15))   # Output: 30
print(math_op.add(5))           # Output: 5
```
🔹 Here, the same method `add()` behaves differently based on the number of arguments passed.

---

## **🔸 5. Operator Overloading**
🔹 **Definition:**  
Python allows us to redefine built-in operators like `+`, `-`, `*`, `==`, etc., for custom objects.  

### **Example of Operator Overloading**
```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):  # Overloading the `+` operator
        return Point(self.x + other.x, self.y + other.y)

    def __str__(self):  # For better printing of the object
        return f"({self.x}, {self.y})"

p1 = Point(2, 3)
p2 = Point(4, 5)
p3 = p1 + p2  # Calls the __add__ method

print(p3)  # Output: (6, 8)
```
🔹 The `+` operator is redefined to **add two objects of `Point` class**.

---

## **🔸 6. Duck Typing (Dynamic Polymorphism)**
🔹 **Definition:**  
Python follows the **"If it looks like a duck and quacks like a duck, it must be a duck"** principle.  
- It means we don’t check the type of an object, but its **behavior**.

### **Example of Duck Typing**
```python
class Bird:
    def fly(self):
        print("Bird is flying")

class Airplane:
    def fly(self):
        print("Airplane is flying")

class Fish:
    def swim(self):
        print("Fish is swimming")

# Common function that uses Duck Typing
def make_it_fly(entity):
    entity.fly()

# Creating objects
bird = Bird()
airplane = Airplane()
fish = Fish()

make_it_fly(bird)      # Output: Bird is flying
make_it_fly(airplane)  # Output: Airplane is flying
# make_it_fly(fish)    # This will cause an AttributeError
```
🔹 Here, `make_it_fly()` calls the `fly()` method without caring about the object's class.

---

## **🔹 7. Advanced Concepts in Polymorphism**
### **A. Using Polymorphism with Inheritance**
```python
class Shape:
    def area(self):
        pass  # To be implemented by subclasses

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

shapes = [Circle(5), Square(4)]
for shape in shapes:
    print(shape.area())  # Calls appropriate method
```
🔹 The `area()` method behaves differently for `Circle` and `Square`.

---

### **B. Polymorphism with Abstract Classes**
We can enforce polymorphism using **abstract classes** with the `abc` module.

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        return "Bark!"

class Cat(Animal):
    def sound(self):
        return "Meow!"

# Creating objects
animals = [Dog(), Cat()]
for animal in animals:
    print(animal.sound())  # Calls the appropriate implementation
```
🔹 Here, the `sound()` method is **forced** to be implemented by all subclasses.

---

## **🔹 8. Key Takeaways**
✅ **Polymorphism** allows methods to be redefined in derived classes.  
✅ **Method Overriding** is runtime polymorphism where a subclass redefines a method of its superclass.  
✅ **Method Overloading** is mimicked in Python using default arguments.  
✅ **Operator Overloading** allows defining custom behavior for built-in operators.  
✅ **Duck Typing** enables dynamic polymorphism without checking an object's type.  
✅ **Abstract Classes** enforce polymorphism by requiring subclasses to implement methods.

---

## `File Handling V25.01.31`

### **Complete Guide to File Handling in Python (Beginner to Advanced)**  

Python provides built-in functions to **create, read, write, and manipulate files**. Understanding file handling is crucial for working with data, logs, configurations, and more.

---

## **1️⃣ Basics of File Handling in Python**
Python uses the built-in `open()` function to interact with files.

### **Syntax:**
```python
file = open("filename", "mode")
```
- `"filename"` → Name of the file with extension (e.g., `"data.txt"`).
- `"mode"` → Specifies how the file will be used.

---

## **2️⃣ File Opening Modes**
| Mode | Description |
|------|------------|
| `r`  | Read (default) – Opens a file for reading; error if file does not exist |
| `w`  | Write – Creates a new file or overwrites an existing file |
| `a`  | Append – Opens a file for appending; creates a new file if it doesn’t exist |
| `x`  | Exclusive Creation – Creates a new file; error if file exists |
| `b`  | Binary mode – Opens file in binary format (e.g., images, PDFs) |
| `t`  | Text mode (default) – Opens file in text mode |

🔹 **Modes can be combined**:  
- `"rb"` → Read in binary  
- `"wt"` → Write in text  
- `"a+"` → Append and read  
- `"wb+"` → Write and read in binary  

---

## **3️⃣ Reading Files in Python**
#### **Method 1: Using `read()`**
Reads the entire file as a string.
```python
file = open("example.txt", "r")
content = file.read()
print(content)
file.close()
```

#### **Method 2: Using `readline()`**
Reads one line at a time.
```python
file = open("example.txt", "r")
line = file.readline()
print(line)
file.close()
```

#### **Method 3: Using `readlines()`**
Reads all lines and returns them as a list.
```python
file = open("example.txt", "r")
lines = file.readlines()
print(lines)
file.close()
```

---

## **4️⃣ Writing Files in Python**
#### **Method 1: Using `write()`**
Writes text to a file (overwrites if it exists).
```python
file = open("example.txt", "w")
file.write("Hello, World!\nThis is a new file.")
file.close()
```

#### **Method 2: Using `writelines()`**
Writes multiple lines to a file.
```python
lines = ["First Line\n", "Second Line\n", "Third Line\n"]
file = open("example.txt", "w")
file.writelines(lines)
file.close()
```

---

## **5️⃣ Appending to a File**
To **add new content** without deleting existing content, use `"a"` mode.
```python
file = open("example.txt", "a")
file.write("\nThis is an appended line.")
file.close()
```

---

## **6️⃣ Best Practice: Using `with` Statement (Automatic Closing)**
The `with` statement ensures the file closes automatically.
```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# No need to manually call file.close()
```

---

## **7️⃣ Checking If a File Exists**
Using the `os` module:
```python
import os

if os.path.exists("example.txt"):
    print("File exists!")
else:
    print("File does not exist!")
```

---

## **8️⃣ Deleting a File**
Using `os.remove()`:
```python
import os
os.remove("example.txt")
```

To delete a folder:
```python
os.rmdir("folder_name")
```

---

## **9️⃣ Working with Binary Files (Images, PDFs)**
### **Reading a Binary File**
```python
with open("image.jpg", "rb") as file:
    data = file.read()
    print(data[:50])  # Print first 50 bytes
```

### **Writing to a Binary File**
```python
with open("copy.jpg", "wb") as file:
    file.write(data)
```

---

## **🔟 Advanced File Handling Techniques**
### **1. Moving & Renaming Files**
```python
import os
os.rename("old_name.txt", "new_name.txt")
```

### **2. Copying Files**
Using `shutil` module:
```python
import shutil
shutil.copy("source.txt", "destination.txt")
```

### **3. Getting File Metadata**
```python
import os

file_info = os.stat("example.txt")
print(f"Size: {file_info.st_size} bytes")
print(f"Last modified: {file_info.st_mtime}")
```

### **4. Reading Large Files Efficiently**
If a file is too large, read it line by line:
```python
with open("large_file.txt", "r") as file:
    for line in file:
        print(line, end="")
```

---

## **🔹 Summary**
| Concept | Function |
|---------|----------|
| Open File | `open("filename", "mode")` |
| Read File | `read()`, `readline()`, `readlines()` |
| Write to File | `write()`, `writelines()` |
| Append to File | `append("data")` |
| Close File | `file.close()` |
| Best Practice | `with open(...) as file:` |
| Check Existence | `os.path.exists("file")` |
| Delete File | `os.remove("file")` |
| Work with Binary | `"rb"`, `"wb"` modes |
| Copy File | `shutil.copy()` |
| Move/Rename File | `os.rename()` |

---

## `File Handling`
- `r: Read Mode:`
    - It can read file.
    - File should already exist.
    - It cannot write the data into the file.
- `w: Write Mode:`
    - File Create.
    - Overwride the existing File.
    - It can write the data into the file.
- `a: Append Mode:`
    - It adds data end of the line.
    - File should be already in existance.
    - It allows write function.
    - It does not create a new file. 
- `w+: Write and Read Mode:`
    - It can Create a new file.
    - It allows reading over action.
- `a+: append and Read Mode:`
    - It allows read write and append function.
    - Symbol is a+.
    - It can create a file.
    - But it does not Overwrite. 

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

## `Polymorphism & Exception Handling:`

### `Polymorphis:` 
- Polimorphism is Object Oriented Concept.    
- `poly`: many `morphism`: forms | types
- Compiletime and Runtime these are not Object oriented concepts. beacouse this concepts present in C language. But Clanguage is not Object oriented language.
- Types of Polymorphism:
    - Overloading (Compiletime Polimorphism)
    - Overriding (Runtime Polimorphism)
- Method Overloading:
    - When a single class having many methods with same name but with different parameters is called method Overloading.
    - Python does not support method overloading directly. However, we can achieve it using default arguments or variable-length arguments` (`*args` and `**kwargs`).
    - one class | one method (self, defaultParameter1=None, defaultParameter2=None ) | if (defaultParameter1 is not None and defaultParameter2 is not None) return; elif(defaultParameter is not None) return; else return; by using this conditions we can do the method Overloading.  
- Method Overridding:
    - When the Parent and the Child class having same Name and same Parameters is called as Method Overriding.
    - Inheritance is required to achive the Method Overridding.
    - Super() method use to access and execute imediate parent class method. It also requires Inheritance to access imediate parent class method.
    - Here we need to create separate object of each class to execute each class method or else we have to use super() method.
    - Else Method Overridding can only execute last class last method.    

### `Exception Handling:`
- Error : Syntax error : throw by Compiler : On Compiletime 
- Exception : Logical Exception : throw by Pvm(Python Virtual Machine) (Byte Code Verification) (Check Binary Code Standards) : on Runtime 
- We do exception handling on subspecious code beacouse we have to prevent from code termination.  
- Error occuring at Runtime is called `Exception.`
- Try and Except black is used to handle Exception.
- The code is written within the try block.
- The try block throws exception if occurs.
- Except block handles the exception and prevent from termination of the code.
- This block activates only when exception is throw by try block.
- Every exception is Predefined class in python.
- Not Necessary to give class name while handling except block.
- unboxin the list : Storing indivisual element into the indivisual variable.

- `eg., ZeroDivisionError`
- `Except block executed : When exception throw by try block.`
- `Else block executed : When Exception not throw by try block.`
- `Finnaly block executed : Whether Exception throw or not throw by try block.`

- Exception Handling blocks:
    - try: Throw exception.
    - except: Handle the exception thrown by try block.
    - else: Executes when exception not thrown by try block.
    - finally: Executes whether exception throw or not throw br try block.

- `Exception Handling:`
    1. `ZeroDivisionError:`  `eg,.96/0`
    2. `IndexError:`  `List out of bound eg,.a[7], range out of list eg,.(len(a)+2)`
    3. `NameError:`  `Function Misspelled eg,.(data2()), Not Defined | Undefined Variable eg,.(print(a2))` 
    4. `keyError:`  `Dictionary eg,.(data[7])`
    5. `TypeError:` `String and Float Concatination eg,.("Pratik"+7), Iterate String on Integer eg,.(for Pratik in 1234567) pass`
    6. `ValueError:` `Type Conversion eg,.(name = float("Hello")), Unboxing the List eg,.(p,q,r,s,t = data)` 

- Type of Exceptions:
    - ZeroDivisionError : Division by 0
    - IndexError : List index out of bound and range(for loop) is out of bound eg.,(a\[12]->Accepts index position)
    - KeyError : Dictionary | It occurs when specify non existing key value pair.
    - NameError : Undefined | Not-defined | When your function name misspelled. or variable is not define and you are using
    - ValueError : Type conversion and Unboxing the list
    - TypeError:
        - Beacouse of Data Types Miss Match
        - Concatination of string and integer
        - Iterate string on integer
        - Variable and Object is not collable. eg.,data = "Hello"; print(data());  

## `Matplotlib V25.02.11`
- `pip install matplotlib.`
- `import matplotlib.pyplot as pt`
- matplotlib is a Python Library | Package.
- pyplot is subplot of matplot library.
- `pip install numpy.`
- Numpu is numerical python library.
- Graph x and y axis. Cordinates.
- x - Horizontal
- y - Vertical
- Graph -> plot (x-cordinate, y-cordinate)
- Matplotlib Library:
    - It is Graph and Chart oriented Library.
    - It's sublibrary is pyplot.
    - It can be use through alises.
    - plot() function is use plot the Graph.
    - syntax: pt.plot(x-cordinates, y-cordinates)
    - It can display grapg with some kind of Notification.
    - show() function is use to display the Graph.
    - syntax: pt.show()
    - X and Y cordinate ctrate using nupy library.
    - syntax: x = np.array(\[10,20])
- `Markers:`
    - Markers heilight the Intersecting Points.
    - There are various types of Markers.
    1. `Circle:` `'o'`
    2. `Star:` `'*'`     
    3. `Point:` `'.'`     
    4. `Pixcel:` `','`
    5. `x-marker:` `'x'`
    6. `Filled-X:` `'X'`
    7. `Plus Sign:` `'+'`
    8. `Filled Plus:` `'P'`
    9. `Square:` `'s'`
    10. `Diamond:` `'D'`
    11. `Thin Diamond:` `'d'`
    12. `Pentagoan:` `'p'` 5 Sides     
    13. `Hexagoan:` `'H'` 6 Sides     
    14. `Small hexagoan:` `'h'`
    15. `Down Triangle:` `'V'`
    16. `Up Triangle:` `'^'`
    17. `Right Triangle:` `'>'`     
    18. `Left Triangle:` `'<'`     
    19. `Tri Up:` `'1'`     
    20. `Tri Down:` `'2'`     
    21. `Tri Left:` `'3'`     
    22. `Tri Right:` `'4'`     
    23. `V line:` `'|'` Bar     
    24. `H line:` `'-'` Underscore
- `Default x- axis:`
    - When only 1 point of a single axis are given then Defult value of x-axis are taken.
    - Default y-axis is not possible.
- `Colors: syntax: eg., c='k'`
    - Total 140-150 colors available.
    1. `r: red`  
    2. `g: green`  
    3. `b: blue`  
    4. `k: black`  
    5. `y: yellow`
    6. `c: cyan`
    7. `m: maginta`  
- `Line Style (ls): | Line Format  syntax: eg., ls='*--'`  
    1. Dashed Line : '*--'
    2. Double Dashed Line : '*--'
    3. Dotted Line : '*:'
    4. Dashed-Dotted Line : '*-.'
- `Marker Size (ms): syntax: eg., ms'7.8'`  
- `Marker color (mec): syntax: eg., mec='k'`
- `Marker Face Color (mfc): syntax: eg., mfc='r'`
- `linewidth: syntax: eg., linewidth='5.3'`
- `Grid: It Provide's Symettrical graph as a Background. syntax: eg., pt.grid()`
- `Axis: syntax: eg., axis='y'`
- `Title: syntax: eg., pt.title("Python Graph")`
- `x-Label: syntax: eg., pt.xlabel("x-axis")`
- `y-Label: syntax: eg., pt.ylabel("y-axis")`
- `Scatter: syntax: eg., pt.scatter(x,y,marker='*')`

## `Matplotlib Library V25.02.13`
- `subplot:`
    - syntax: pt.subplot(row,cloumn,position)
    - 1'st plot the graph and the all done! then show() on screen
    - pt.title("Graph-1")
    - pt.tight_layout()
    - pt.suptitle("Sub-Plot")
- `Bar:`
    - Separate bar's for each points.
    - By default bar width and height is 0.8.
    - bar: width
    - barh: height
    - color="red"
    - Histogram: Bars are joint toeach other. mosty use standerd Deviation
- `Pie:`
    - Circular graphs
    - Single array is use to display pie graph. 
    - Anticlockwise
    - At Center = 0 degree
    - position = Specific value / Total Summation of all values
    - blue, orange, green, red Default Colors.
    - labels=users (users is array)
    - explode=ex (ex is array)
    - shadow=True
    - startangle=90
    - colors=colors (colors is array)

## `Pandas Library:`
- `pandas:`
    - pip install pandas
    - import pandas as pd
    - mostly support csv files
    - DataFrames (Return 1st and last 5 record's)
    - pd.read_csv("C:/Users/majag/Desktop/data.csv")
    - view.to_string() (reeturn all data)
    - view.info() (Return file information)
    - plot() (Return line gragh)

## `Math Library`
- `Math:`
    - math.pi()
    - math.e()
    - math.sqrt()
    - math.isqrt() (Return Base Integer Value)
    - math.fabs() (Return Absolute Value, Returning Positive value)
    - math.ceil(34.9) (35)
    - math.ceil(-34.9) (-35)
    - math.floor(34.9) (34)
    - math.floor(-34.9) (-34)
























































































































































































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









