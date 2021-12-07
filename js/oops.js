const quiz=[
{
	q:'Which of following is shared structure of a set of similar objects?',
	options:['Class','Inheritance','Functions','none of the above'],
	answer:0
},
{
	q:'Which of following does not have a body?',
	options:['Abstract Class','Abstract Method','Both A and B','Interface'],
	answer:1
},
{
	q:'Which of the following is a pure Object Oriented Programming Language?',
	options:['Java','C++','Kotlin','Python','Ruby'],
	answer:0
},
{
	q:'Can we overload constructor in derived class?',
	options:['YES','NO'],
	answer:0
},
{
	q:'OOPs is invented by _______',
	options:['Andrea Ferro','Dennis Ritchie','Adele Goldberg','Alan Kay'],
	answer:3
},
{
	q:'Which Feature of OOP encourges the code reusability?',
	options:['Abstraction','Polymorphism','Encapsulation','Inheritance'],
	answer:3
},
{
	q:'How many catch blocks you can use with single Try block?',
	options:['only 1','only 2','As many as required','Maximum 256'],
	answer:2
},
{
	q:'Java does not support ________?',
	options:['Inheritance','Multiple inheritance for classes','multiple inheritance of interfaces','compile time polymorphism'],
	answer:1
},
{
	q:'Runtime polymorphism feature in java is',
	options:['method overloading','method overriding','constructor overloading','operator overloading'],
	answer:0
},
{
	q:'Encapsulation concept in java is',
	options:['Hiding complexity','method hiding','Hiding constructor','None'],
	answer:0
},
{
	q:'IS-A relationship in java is related to',
	options:['composition','aggregation','association','Encapsulation','Inheritance'],
	answer:4
},
{
	q:'A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:',
	options:['Abstraction','Polymorphism','Encapsulation','Inheritance'],
	answer:0
},
{
	q:'Which statement is true regarding an object?',
	options:['An object is what classes instantiated are from','An object is an instance of a class','An object is a variable','An object is a reference to an attribute','An object is not an instance of a class'],
	answer:1
},
{
	q:'In object-oriented programming, new classes can be defined by extending existing classes. This is an example of:',
	options:['Abstraction','Polymorphism','Encapsulation','Inheritance'],
	answer:3
},
{
	q:'Object-oriented inheritance models the',
	options:['“is a kind of” relationship','“has a” relationship','“want to be” relationship','inheritance does not describe any kind of relationship between classes','“contains” of relationship'],
	answer:0
}/*,
{
	q:'The wrapping up of data and functions into a single unit is called',
	options:['Abstraction','Polymorphism','Encapsulation','Inheritance'],
	answer:2
},
{
	q:'The concept of multiple inheritances is implemented in Java by I) Extending two or more classes, II) Extending one class and implementing one or more interfaces, III) Implementing two or more interfaces',
	options:['Only (II)','(I) and (II)','(II) and (III)','Only (I)','Only (III)'],
	answer:2
},
{
	q:'In Java, declaring a class abstract is useful',
	options:['To prevent developers from further extending the class','When it doesn’t make sense to have objects of that class','When default implementations of some methods are not desirable','To force developers to extend the class not to use its capabilities'],
	answer:1
},
{
	q:'A package is a collection of',
	options:['classes','functions','attributes','class and Interface','Interface'],
	answer:3
},
{
	q:'Which of the following is a member of the java.lang package?',
	options:['List','queue','stack','math','process','random'],
	answer:1
},
{
	q:'Which of the following has a method names flush( )?',
	options:[' Input stream ','output Stream','Reader stream','writer stream'],
	answer:1
},
{
	q:'Which of the following is not a feature of pure OOP?',
	options:['Classes must be used','Data may/may not be declared using object','Functions Overloading','Inheritance'],
	answer:1
},
{
	q:'Which among the following doesn’t come under OOP concept?',
	options:['garbage collection','Data binding','Message Passing','overloading','Inheritance'],
	answer:0
},
{
	q:'How many basic features of OOP are required for a programming language to be purely OOP??',
	options:['5','7','8','10','9'],
	answer:1
},
{
	q:'The feature by which one object can interact with another object is ______',
	options:['Abstraction','message Passing','message sending','object communication','Inheritance'],
	answer:1
},
{
	q:'______ underlines the feature of Polymorphism in a class.',
	options:['Nested class','inline function','sub function','virtual function','static function'],
	answer:3
},
{
	q:'Which among doesn’t illustrates polymorphism?',
	options:['Function overloading','Function overriding','operator overloading','virtual function'],
	answer:1
},
{
	q:'Exception handling is a feature of OOP',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Whether abstract class brings 100% Abstraction?',
	options:['YES','NO'],
	answer:1
},
{
	q:'Interface are mainly used in java for?',
	options:['code reusability','eliminate error','data hiding','to achieve 100% abstraction'],
	answer:3
},
{
	q:'Operator overloading is supported in java OOPs',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Why pointers are not supported in java?',
	options:['It is not present in default package','security purpose','pointers cannot be accessed easily','It is pure OOPS Oriented'],
	answer:1
},
{
	q:' Does OOP provide better security than POP?',
	options:['Always true for any programming language','May not be true with respect to all programming languages','It depends on type of program','It’s vice-versa is true'],
	answer:0
},
{
	q:'Virtual functions are mainly used to achieve _______',
	options:['Compile time polymorphism','Interpreter polymorphism','Runtime polymorphism','Functions code polymorphism'],
	answer:2
},
{
	q:'Which keyword is used to declare virtual functions?',
	options:['virtual','anonymous','virtually','virtualize'],
	answer:0
},
{
	q:'What is an array of objects?',
	options:['An array of instances of class represented by single name','An array of instances of class represented by more than one name','An array of instances which have more than 2 instances','An array of instances which have different types'],
	answer:0
},
{
	q:'Which among the following is a mandatory condition for array of objects?',
	options:['All the objects should be of different class','All the objects should be of same program classes','All the objects should be of same class','All the objects should have different data'],
	answer:2
},
{
	q:'What is the type of elements of array of objects?',
	options:['class','null','Integer','Object','default'],
	answer:0
},
{
	q:'If array of objects is declared as given below, which is the limitation on objects?  Class_name arrayName[size];',
	options:['The objects will have same values','The objects will not be initialized individually','The objects can never be initialized','The objects will have same data'],
	answer:1
},
{
	q:'Which is the condition that must be followed if the array of objects is declared without initialization, only with size of array?',
	options:['The class should have separate constructor for each object','The class must have no constructors','The class should not have any member function','The class must have a default or zero argument constructor'],
	answer:3
},
{
	q:'When are the array of objects without any initialization useful?',
	options:['When object data is not required just after the declaration','When initialization of object data is to be made by the compiler','When object data doesn’t matter in the program','When the object should contain garbage data'],
	answer:0
},
{
	q:'If constructor arguments are passed to objects of array then ______ if the constructors are overloaded',
	options:['It is mandatory to pass same number of arguments to all the objects','It is mandatory to pass same type of arguments to all the objects','It is not mandatory to call same constructor for all the objects','It is mandatory to call same constructor for all the constructorse'],
	answer:2
},
{
	q:'How the objects of array can be denoted?',
	options:['Indices','name','string','objects','reference'],
	answer:0
},
{
	q:'The Object array is created in',
	options:['stack memory','heap memory','local storage','hard disc drive'],
	answer:1
},
{
	q:'Can we have two dimensional object array?',
	options:['YES','NO'],
	answer:0
},
{
	q:'Two dimensional array can’t be initialized with the declaration',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Is an array of characters always a string?',
	options:['YES','NO'],
	answer:1
},
{
	q:'Which among the following is the main use of object?',
	options:['To create instance of a function','To create instance of a class','To create instance of an structure','To create instance of a package'],
	answer:1
},
{
	q:'Which among the following is not a property of an object?',
	options:['names','attributes','identity','variables'],
	answer:0
},
{
	q:'Immutable object are used _______',
	options:['To set up as a fixed state','To set up variable object','To set up an object of abstract class','To set up an object of derived class'],
	answer:0
},
{
	q:'Which object can be used to contain other objects?',
	options:['First class object','Derived class object','Container object','Enclosure object'],
	answer:2
},
{
	q:'A factory object is used ______',
	options:['To create new classes','To create new function','To create new data members','To create new objects'],
	answer:3
},
{
	q:'What are singleton objects?',
	options:['The only two objects of a class throughout the program','The only object of a class throughout the program','The objects that are alive throughout the program','The objects that are created and then deleted without use'],
	answer:1
},
{
	q:'Objects type ______',
	options:['Can be changed in runtime','Can’t be changed in runtime','Can be changed in compile time','May or may not get changed'],
	answer:1
},
{
	q:'Which object can be used to access the standard input?',
	options:['System.inner','cin','System.stdin','console.input'],
	answer:2
},
{
	q:'If same object name is given to different objects of different class then _____',
	options:['Its compile time error','Its runtime error','It’s not an error','Program suns smooth'],
	answer:0
},
{
	q:'Which among the following is an important use of abstract classes??',
	options:['Header files','Class Libraries','Class definitions','Class inheritance'],
	answer:1
},
{
	q:'Use of pointers or reference to an abstract class gives rise to which among the following feature?',
	options:['static polymorphism','compileTime Polymorphism','runtime polymorphism','Polymorphism within methods'],
	answer:1
},
{
	q:'Abstract class can’t be final in java.',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Can abstract classes have static methods (Java)?',
	options:['YES','NO'],
	answer:0
},
{
	q:'How many abstract classes can a single program contain?',
	options:['only 1','more than 1','as many as possible','only 2'],
	answer:2
},
{
	q:'Is it necessary that all the abstract methods must be defined from an abstract class?',
	options:['YES','NO'],
	answer:0
},
{
	q:'A template class can have _____',
	options:['More than one generic data type','Only one generic data type','At most two data types','Only generic type of integers and not characters'],
	answer:0
},
{
	q:'Can default arguments be used with the template class?',
	options:['YES','NO'],
	answer:0
},
{
	q:'What is the syntax to use explicit class specialization?',
	options:['template <int> class myClass<>{ }','template <int> class myClass<int>{ }','template <> class myClass<>{ }','template <> class myClass<int>{ }'],
	answer:3
},
{
	q:'Which is the most significant feature that arises by using template classes?',
	options:['Code readability','Ease in coding','Code reusability','Modularity in code'],
	answer:2
},
{
	q:'Can typeid() function be used with the object of generic classes?',
	options:['YES','NO'],
	answer:0
},
{
	q:'How many generic types can be given inside a single template class?',
	options:['5','7','as many as required','4'],
	answer:2
},
{
	q:' A base class is also known as _____ class.',
	options:['super','sub','child','derived'],
	answer:0
},
{
	q:'How many base classes can a single class inherit in java?',
	options:['only 1','more than 1','as many as required','maximum 2'],
	answer:0
},
{
	q:'If a class is enclosing more than one class, than it can be called as base class of those classes',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Base class have _______ of abstraction',
	options:['lower degree','higher degree','least','top'],
	answer:0
},
{
	q:'Can we call methods of base class using the constructor of the derived class?',
	options:['YES','NO'],
	answer:3
},
{
	q:'How many derived class can a single base class have?',
	options:['only 1','more than 1','as many as required','maximum 2'],
	answer:2
},
{
	q:'The members of a derived class can never be derived?',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Which class represents the most abstracted information?',
	options:['base','derived','enclodes','child'],
	answer:0
},
{
	q:'Which feature is exhibited by the inbuilt classes?',
	options:['Code reusability','Code efficiency','Code readability','Code reusability, efficiency and readability'],
	answer:3
},
{
	q:'Which among the following is the most abstract form of class?',
	options:['Cars','BMW cars','Big cars','Small cars'],
	answer:0
},
{
	q:'Which type of inheritance leads to diamond problem?',
	options:['Single level','Multi-level','Multiple','Hierarchical'],
	answer:2
},
{
	q:'The private members of the base class are visible in derived class but are not accessible directly',
	options:['TRUE','FALSE'],
	answer:0
}*/
]