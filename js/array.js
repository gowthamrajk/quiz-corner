const quiz=[
{
	q:'An Array in Java is a collection of elements of ___ data type?',
	options:['Same','Different','unique'],
	answer:0
},
{
	q:'The Java Virtual Machine (JVM) implements arrays as ___ type?',
	options:['Primitive type','Objects','elements','Based on the array data type'],
	answer:1
},
{
	q:'An array declaration in Java without initialization ___ memory?',
	options:['allocates','depends on the JVM','does not allocate'],
	answer:2
},
{
	q:'Which are the special symbols used to declare an array in Java?',
	options:['Braces { }','Parentheses ()','Square Brackets [ ]','Angled Brackets < >'],
	answer:2
},
{
	q:'Which are the special symbols used to initialize an array at the time of the declaration itself?',
	options:['Braces { }','Parentheses ()','Square Brackets [ ]','Angled Brackets < >'],
	answer:0
},
{
	q:'It is possible to skip initializing some elements of the array during Shorthand Initialization?',
	options:['TRUE','FALSE','Cannot be predicted'],
	answer:1
},
{
	q:'In Java, an array can be declared without initialization without mentioning the size.',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'What is the output of the below Java code snippet with arrays?  static int[] nums; public static void main(String args[]) { System.out.println(nums.length); }',
	options:['0','Compiler error','NULL','Compiles successfully but nothing is printed','Null Pointer Exception'],
	answer:4
},
{
	q:'What is the output of the below Java program? int[] marks = {35,65,95}; System.out.print(marks.length + "," + marks[1]);',
	options:['2,65','3,65','3,95','None of the above'],
	answer:1
},
{
	q:'What is the output of the below Java code snippet? int[] balls = {}; System.out.print(balls.length);',
	options:['-1','Compile time Exception','Run time exception','0','1'],
	answer:3
},
{
	q:'Which is the correct way of knowing Array Size in Java?',
	options:['array.length()','array.length','array.size()','array.size()','array.len()'],
	answer:1
},
{
	q:'What is the output of the below Java program with arrays? String[] colors = {"RED";"YELLOW";"WHITE"}; System.out.print(colors[2]);',
	options:['error','RED','YELLOW','WHITE'],
	answer:0
},
{
	q:'What is the output of the below Java program? int ages[3] = {25, 27, 30}; System.out.println(ages[1]);',
	options:['25','27','Nothing is printed','Compile time error'],
	answer:3
},
{
	q:'We should not specify the array size if declaration and initialization are done at the same time',
	options:['FALSE','TRUE'],
	answer:1
},
{
	q:'What is the default value of byte, short, int or long data type elements of an array in Java?',
	options:['0','1','NULL','Garbage value','size of data type'],
	answer:0
}/*,
{
	q:'What is the default value of float or double data type elements of an array in Java?',
	options:['0','1','NULL','Garbage value','0.0','0.0L'],
	answer:4
},
{
	q:'An array in Java can be declared only of some predefined types',
	options:['FALSE','TRUE','Anything it can be'],
	answer:0
},
{
	q:'The name of an array variable or identifier can start with ___',
	options:['letter','underscore','special characters','all the above'],
	answer:3
},
{
	q:'Lazy initialization of array requires the keyword "new" to allocate memory to the array and its elements',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'What is the default value of an element of Object type array?',
	options:['0','1','NULL','Garbage value','size of data type','-1'],
	answer:2
},
{
	q:'What is the default value of boolean data type elements of an array in Java?',
	options:['TRUE','FALSE','NULL','-1','0'],
	answer:1
},
{
	q:'An array of arrays in Java is called ___ array',
	options:['Array of arrays','1D array','2D array','Multidimensional array','none of the above'],
	answer:3
},
{
	q:'An array of dimension N contains __ number of subscripts or brackets?',
	options:['N*2','N-1','N','N+1','size of data type'],
	answer:2
},
{
	q:'Row number and Column number in a Multidimensional array start with ___.',
	options:['0','1','row index','column index','none'],
	answer:0
},
{
	q:'Choose the correct way of initializing a multidimensional array below.',
	options:['int[][] code = {{1,2},{3,4,5}};','int[2][] code = {{1,2},{3,4,5}};','int[][] code={1,2,3,4,5};','All the above'],
	answer:0
},
{
	q:'While passing a multi dimensional array to a function in java, it is not necessary to pass the row dimension and column dimension',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'When you pass an array to a method, the method receives the ',
	options:['new array','empty array','reference of array','original array','copy of array'],
	answer:2
},
{
	q:'Which of the following is an incorrect array declaration?',
	options:['int [] arr = new int[5]','int arr[] = new int[5]','int arr[] = new int[5]','int arr[] = int [5] new'],
	answer:3
},
{
	q:'Which of the following is advantage of java array?',
	options:['Code Optimization','Random access','memory efficient','Both A and B'],
	answer:3
},
{
	q:'In java, array elements are stored in ________ memory locations',
	options:['Random','contiguous','repeated','Both B & C'],
	answer:1
},
{
	q:'Which of these is an incorrect Statement?',
	options:['It is necessary to use new operator to initialize an array','Array can be initialized using comma separated expressions surrounded by curly braces','Array can be initialized when they are declared','None of the mentioned'],
	answer:0
},
{
	q:'Which of these is necessary to specify at time of array initialization?',
	options:['Row','Column','Both A & B','None'],
	answer:0
},
{
	q:'What type of sorting algorithm is used in Arrays.sort() method?',
	options:['array sort','Time sort','bucket sort','merge sort','quick sort','radix sort'],
	answer:1
},
{
	q:'Java does not allow arrays of lenght zero.',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'int[][] myArray = new int[4][5]; This declaration constructs an array myArray of _____ elements, where each element is an array (row) of _____ int values.',
	options:['5,5','5,4','4,5','4,4'],
	answer:2
},
{
	q:'Arrays in Java are dynamically allocated using the _____ operator',
	options:['create','new()','new','dynamic','Both B & C'],
	answer:2
},
{
	q:'Because Java does not support pointers, Java array elements are accessed only through indexes',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'If an index value is less than 0 or greater than or equal to array name. Length in an array element access expression, an _____ is thrown',
	options:['ArrayOutOfBoundsException','ArraysIndexOutOfBoundsException','ArrayIndexOutOfBoundsException','ArrayIndexIsOutOfBoundsException'],
	answer:2
},
{
	q:'To declare a one-dimensional array, you will use this general form',
	options:['type array-name[] = new [size];','type array-name[size] = new type[];','type array-name[] = new type[size];','type array-name[] = type[size];'],
	answer:2
},
{
	q:'In Java, each array object has a final field named _____ that stores the size of the array.',
	options:['width','distance','length','size'],
	answer:2
},
{
	q:'Which code line could possibly "call" this method? public static int SomeMethod(double[ ] array, int[ ] number) { . . . }',
	options:['int value = SomeMethod(money, grades);','SomeMethod(money, grades);','double value = SomeMethod(money, grades);','int value = SomeMethod(money);'],
	answer:0
},
{
	q:'What is the type of variable ‘b’ and ‘d’ in the following Java snippet?  int a[], b; int []c, d;',
	options:['‘b’ and ‘d’ are int','‘b’ and ‘d’ are arrays of type int',' ‘b’ is int variable; ‘d’ is int array','‘d’ is int variable; ‘b’ is int array'],
	answer:2
},
{
	q:'Generics does not work with?',
	options:['Map','Collections','Array','String','ArrayList'],
	answer:2
},
{
	q:'How to copy contents of array?',
	options:['System.arrayCopy()','Array.copy()','Arrays.copy()','Collection.copy()'],
	answer:0
},
{
	q:'Can you make an array volatile?',
	options:['TURE','FALSE'],
	answer:0
},
{
	q:'Where is an array stored in memory?',
	options:['stack memory','main memory','heap memory','Both A & C'],
	answer:2
},
{
	q:'Which of these keywords is used to prevent content of a variable from being modified?',
	options:['static','new','final','protected'],
	answer:2
},
{
	q:'Which of these standard collection classes implements all the standard functions on list data structure?',
	options:['Array','Hashset','abstractSet','LinkedList','ArrayList'],
	answer:0
},
{
	q:'Which of this method is used to make all elements of an equal to specified value?',
	options:['add()','append()','fill()','set()','replace()'],
	answer:2
},
{
	q:'Which of these method of Array class is used sort an array or its subset?',
	options:['binarysort()','bubblesort()','radixsort()','sort()'],
	answer:3
}*/
]