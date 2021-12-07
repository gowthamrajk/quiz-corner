const quiz=[
{
	q:'Enumeration (or enum) is a ______ data type in C?',
	options:['user defined','built-in','libary','None Of the above'],
	answer:0
},
{
	q:'If we do not explicitly assign values to enum names, the compiler by default assigns values to ?',
	options:['null','-1','0','Garbage'],
	answer:2
},
{
	q:'All enum constants are?',
	options:['Same in their scope','unique in their scope','contain dupicate value in their scope','None of the above'],
	answer:1
},
{
	q:'String handling functions such as strcmp(), strcpy() etc can be used with enumerated types.',
	options:['TRUE','FALSE','May Be','Cannot Say'],
	answer:1
},
{
	q:'Pick the incorrect statement with respect to enums',
	options:['Two enum symbols cannot have the same value','Only integer constants are allowed in enums','It is not possible to change the value of enum symbols','Enum variables are automatically assigned values if no value is specified'],
	answer:0
},
{
	q:'Arithmetic operations are not allowed on enumerated constants.',
	options:['TRUE','FALSE','May Be','Cannot Say'],
	answer:1
},
{
	q:'What is the correct syntax of enum?',
	options:['enum flag{constant1, constant2, constant3, ....... };','enum flag(constant1, constant2, constant3, ....... );','enum flag[constant1, constant2, constant3, ....... ];','enumflag{constant1, constant2, constant3, ....... };'],
	answer:0
},
{
	q:'A user defined data type, which is used to assign names to integral constants is called ____________',
	options:['Union','Array','Structure','Enum'],
	answer:3
},
{
	q:'Which of the following keywords is used to define an alternate name for an already existing data type?',
	options:['default','volatile','typedef','static'],
	answer:2
},
{
	q:'We want to create an alias name for an identifier of the type unsigned long. The alias name is: ul. The correct way to do this using the keyword typedef is ____________',
	options:['typedef unsigned long ul;','unsigned long typedef ul;','typedef ul unsigned long;','ul typedef unsigned long;'],
	answer:0
},
{
	q:'The keyword typedef cannot be used to give alias names to pointers',
	options:['True','False'],
	answer:0
},
{
	q:'What is the size of myArray in the code shown below? (Assume that 1 character occupies 1 byte) typedef char x[10]; x myArray[5];',
	options:['5 bytes','10 bytes','40 bytes','50 bytes'],
	answer:3
},
{
	q:'Consider this statement: typedef enum good {a, b, c} hello; Which of the following statements is incorrect about hello?',
	options:['hello is a typedef of enum good','hello is a structure','hello is a variable of type enum good','the statement shown above is erroneous'],
	answer:0
},
{
	q:'One of the major difference between typedef and #define is that typedef interpretation is performed by the _________________ whereas #define interpretation is performed by the _____________',
	options:['pre-processor, compiler','user, pre-processor','compiler, pre-processor','compiler, user'],
	answer:2
},
{
	q:'We want to declare x, y and z as pointers of type int. The alias name given is: intpt The correct way to do this using the keyword typedef is:',
	options:['int typedef* intptr; int x,y,z;','typedef* intptr; int x,y,z;','int typedef* intptr; intptr x,y,z;','typedef int* intptr; intptr x,y,z;'],
	answer:3
}
]