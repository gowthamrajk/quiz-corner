const quiz=[
{
	q:'What is the base data type of a pointer variable by which the memory would be allocated to it?',
	options:['int','float','No datatype','Depends upon the type of the variable to which it is pointing','unsigned int'],
	answer:4
},
{
	q:'Prior to using a pointer variable it should be',
	options:['Declared','Initialized','Both declared and initalized','None of these'],
	answer:2
},
{
	q:' In C a pointer variable to an integer can be created by the decalaration',
	options:['int p*;','int *p;','int +p;','int $p;'],
	answer:1
},
{
	q:'A pointer variable can be',
	options:['Passed to a function','Changed within a function','Returned by a function','Can be assigned an integer value'],
	answer:2
},
{
	q:'Is the NULL pointer same as an uninitialised pointer?',
	options:['True','False'],
	answer:1
},
{
	q:'A pointer is a',
	options:['variable that stores address of an instruction','variable that stores address of other variable','keyword used to create variables','None of these'],
	answer:1
},
{
	q:'How can you write a[i][j][k][l] in equivalent pointer expression?',
	options:['(((***(a+i)+j)+k)+l)','((**(*(a+i)+j)+k)+l)','(*(*(*(a+i)+j)+k)+l)','*(*(*(*(a+i)+j)+k)+l)'],
	answer:3
},
{
	q:'Comment on the following pointer declaration? int *ptr, p;',
	options:['ptr is a pointer to integer, p is not','ptr and p, both are pointers to integer','ptr is pointer to integer, p may or may not be','ptr and p both are not pointers to integer'],
	answer:0
},
{
	q:'The address operator &, cannot act on',
	options:['R-values','Arithmetic expressions','Both of the above','Local variables'],
	answer:2
},
{
	q:'Check whether the condition is correct or not? int **a;',
	options:['is illegal','is legal but meaningless','is syntactically and semantically correct','None of these'],
	answer:2
},
{
	q:'What is wild pointer?',
	options:['Pointer which is wild in nature','Pointer which has no value','Pointer which is not initialized','None'],
	answer:2
},
{
	q:'In order to fetch the address of the variable we write preceding _________ sign before variable name',
	options:['Percent(%)','Comma(,)','Ampersand(&)','Asterisk(*)'],
	answer:2
},
{
	q:'Address stored in the pointer variable is of type _______',
	options:['Integer','Float','Array','Character'],
	answer:0
},
{
	q:'Comment on this const int *ptr;',
	options:['You cannot change the value pointed by ptr','You cannot change the pointer ptr itself','Both (a) and (b)','You can change the pointer as well as the value pointed by it'],
	answer:0
},
{
	q:'The operator > and < are meaningful when used with pointers, if',
	options:['The pointers point to data of similar type','The pointers point to structure of similar data type','The pointers point to elements of the same array','None of these'],
	answer:2
}
]