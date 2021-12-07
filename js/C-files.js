const quiz=[
{
	q:'Which of the following true about FILE *fp',
	options:['FILE is a keyword in C for representing files and fp is a variable of FILE type','FILE is a stream','FILE is a buffered stream','FILE is a structure and fp is a pointer to the structure of FILE type'],
	answer:3
},
{
	q:'Which of the following mode argument is used to truncate?',
	options:['a','w','f','t'],
	answer:1
},
{
	q:'FILE is of type ______',
	options:['int type','char * type','struct type','None of the mentioned'],
	answer:2
},
{
	q:'fseek() should be preferred over rewind() mainly because',
	options:['rewind() do not work for empty files','rewind() may fail for large files','In rewind, there is no way to check if the operations completed successfully','All of the above'],
	answer:2
},
{
	q:'FILE reserved word is?',
	options:['A structure tag declared in stdio.h','One of the basic datatypes in c','Pointer to the structure defined in stdio.h','It is a type name defined in stdio.h'],
	answer:3
},
{
	q:'For binary files, a ___ must be appended to the mode string',
	options:['"b"','"B"','"binary"','"01"'],
	answer:0
},
{
	q:'Which of the following statements about stdout and stderr are true?',
	options:['Same','Both connected to screen always','Both connected to screen by default','stdout is line buffered but stderr is unbuffered'],
	answer:2
},
{
	q:'Which type of files canâ€™t be opened using fopen()?',
	options:['.txt','.bin','.c','None of the above'],
	answer:3
},
{
	q:'When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?',
	options:['Standard input','Standard output','Standard error','All of the above'],
	answer:3
},
{
	q:'If there is any error while opening a file, fopen will return?',
	options:['Nothing','EOF','NULL','Depends on compiler'],
	answer:2
},
{
	q:'It is not possible to combine two or more file opening mode in open () method.',
	options:['TRUE','FALSE','May Be','Cannot Say'],
	answer:1
},
{
	q:'What is the return value of putchar()?',
	options:['The character written','EOF if an error occurs','Nothing','Both character written & EOF if an error occurs'],
	answer:3
},
{
	q:'Which is true?',
	options:['The symbolic constant EOF is defined in','The value is -1','The symbolic constant EOF is defined in & value is -1','Only value is -1'],
	answer:2
},
{
	q:'When fopen() is not able to open a file, it returns',
	options:['EOF','NULL','Run-time Error','None of the above'],
	answer:1
},
{
	q:'getc() returns EOF when',
	options:[' When getc() fail to read the character','When end of file is reached','Both A and B','None of the above'],
	answer:2
}
]