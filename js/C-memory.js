const quiz=[
{
	q:'What is the return type of malloc() or calloc()?',
	options:['int *','int **','void *','void **'],
	answer:2
},
{
	q:'Which function is used to delete the allocated memory space?',
	options:['Dealloc()','free()','Both A and B','None of the above'],
	answer:1
},
{
	q:'Can we increase the size of statically allocated array?',
	options:['Yes','No','May Be','Cannot Say'],
	answer:1
},
{
	q:'Among 4 header files, which should be included to use the memory allocation functions like malloc(), calloc(), realloc() and free()?',
	options:['#include<string.h>','#include<stdlib.h>','#include<memory.h>','Both b and c'],
	answer:1
},
{
	q:'Which of the following is/are true',
	options:['calloc() allocates the memory and also initializes the allocates memory to zero, while memory allocated using malloc() has random data','malloc() and memset() can be used to get the same effect as calloc()','Both malloc() and calloc() return void * pointer','All of the above'],
	answer:3
},
{
	q:'Which of the following is true?',
	options:['"ptr = calloc(m, n)" is equivalent to following','r = malloc(m * n);','"ptr = calloc(m, n)" is equivalent to following','r = malloc(m * n); memset(ptr, 0, m * n);'],
	answer:1
},
{
	q:'Which languages necessarily need heap allocation in the run time environment?',
	options:['Those that support recursion','Those that use dynamic scoping','Those that use global variables','Those that allow dynamic data structures'],
	answer:3
},
{
	q:'Which of the following statement is correct prototype of the malloc() function in c ?',
	options:['int* malloc(int);','Char* malloc(char);','unsigned int* malloc(unsigned int);','void* malloc(size_t);'],
	answer:3
},
{
	q:'Specify the 2 library functions to dynamically allocate memory?',
	options:['malloc() and memalloc()','alloc() and memalloc()','malloc() and calloc()','memalloc() and faralloc()'],
	answer:2
},
{
	q:'malloc() returns a float pointer if memory is allocated for storing float and a double pointer if memory is allocated for storing double A',
	options:['TRUE','FALSE','May Be','Cannot Say'],
	answer:1
},
{
	q:'malloc() allocates memory from the heap and not from the stack',
	options:['TRUE','FALSE','May Be','Cannot Say'],
	answer:0
},
{
	q:'What function should be used to free the memory allocated by calloc() ?',
	options:['dealloc();','malloc(variable_name, 0)','free();','memalloc(variable_name, 0)'],
	answer:2
},
{
	q:'Where does the uninitialized data gets stored in memory?',
	options:['Code segment','Data segment','BSS- Block started by symbol','Heap'],
	answer:2
},
{
	q:'malloc() returns a NULL if it fails to allocate the requested memory',
	options:['TRUE','FALSE','May Be','Cannot Say'],
	answer:0
},
{
	q:'Can I increase the size of dynamically allocated array?',
	options:['Yes','No','May Be','Cannot Say'],
	answer:0
}
]