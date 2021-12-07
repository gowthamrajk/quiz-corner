const quiz=[
{
	q:'Which of the following is not a Java features?',
	options:['Dynamic','Architecture Neutral','Use of pointers','Object-oriented'],
	answer:2
},
{
	q:'Which is used to find and fix bugs in the Java programs?',
	options:['JDB','JRE','JDK','JVM'],
	answer:0
},
{
	q:'What is the return type of the hashCode() method in the Object class?',
	options:['Object','int','long','boolean'],
	answer:1
},
{
	q:'Which of the following is a valid long literal?',
	options:['ABH8097','L990023','904423','0xnf029L'],
	answer:3
},
{
	q:'In which process, a local variable has the same name as one of the instance variables?',
	options:['Serialization','Variable Shadowing','Abstraction','Multi-threading'],
	answer:1
},
{
	q:'public static synchronized void main(String[] args) throws  InterruptedException { Thread f = new Thread(); f.start(); System.out.print("A"); f.wait(1000); System.out.print("B"); }',
	options:['It prints A , B with a 1000 seconds delay between them','It prints A , B with 1000 seconds delay between them','It only prints B then exits','A will be printed, then an exception is thrown'],
	answer:3
},
{
	q:'What does the expression float a = 35 / 0 return?',
	options:['0','Not a Number','Infinity','Run time exception'],
	answer:2
},
{
	q:'Evaluate the following Java expression, if x=3, y=5, and z=10:   ++z + y - y + z + x++',
	options:['24','23','20','25','22'],
	answer:0
},
{
	q:'Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?',
	options:['javap tool','javaw command','Javadoc tool','javah command'],
	answer:2
},
{
	q:'Which of the following creates a List of 3 visible items and multiple selections abled?',
	options:['new List(false, 3)','new List(3, true)','new List(true, 3)','new List(3, false)'],
	answer:1
},
{
	q:'Which of the following for loop declaration is not valid?',
	options:['for ( int i = 99; i >= 0; i / 9 )','for ( int i = 7; i <= 77; i += 7 )','for ( int i = 20; i >= 2; - -i )','for ( int i = 2; i <= 20; i = 2* i )'],
	answer:0
},
{
	q:'Which method of the Class.class is used to determine the name of a class represented by the class object as a String?',
	options:['getClass()','getName()','intern()','toString()'],
	answer:3
},
{
	q:'Which of the following is true about the anonymous inner class?',
	options:['It has only methods','Objects cannot be created','It has a fixed class name','It has no class name'],
	answer:3
},
{
	q:'Which package contains the Random class?',
	options:['java.util','java.lang','java.io','java.math','java.awt'],
	answer:0
},
{
	q:'What do you mean by nameless objects?',
	options:['An object created by using the new keyword.','An object of a superclass created in the subclass.','An object without having any name but having a reference.','An object that has no reference.'],
	answer:3
}/*,
{
	q:'An interface with no fields or methods is known as a ______',
	options:['Runnable Interface','Marker Interface','Abstract Interface','CharSequence Interface'],
	answer:1
},
{
	q:'Which of the following is an immediate subclass of the Panel class??',
	options:['Applet class','Window class','Frame class','Dialog class'],
	answer:0
},
{
	q:'Which option is false about the final keyword?',
	options:['A final method cannot be overridden in its subclasses.','A final class cannot be extended.','A final class cannot extend other classes.','A final method can be inherited.'],
	answer:2
},
{
	q:'Which of these classes are the direct subclasses of the Throwable class?',
	options:['RuntimeException and Error class','Exception and VirtualMachineError class','Error and Exception class','IOException and VirtualMachineError class'],
	answer:2
},
{
	q:'What do you mean by chained exceptions in Java?',
	options:['Exceptions occurred by the VirtualMachineError','An exception caused by other exceptions','Exceptions occur in chains with discarding the debugging information','None of the above'],
	answer:1
},
{
	q:'In which memory a String is stored, when we create a string using new operator?',
	options:['stack','String pool','heap','random memory'],
	answer:2
},
{
	q:'In which memory a String is stored, when we create a string directly as String str = "helloWorld" ?',
	options:['stack','String pool','heap','random memory'],
	answer:1
},
{
	q:'What is the use of the intern() method?',
	options:['It returns the existing string from memory','It creates a new string in the database','It modifies the existing string in the database','None of the above'],
	answer:0
},
{
	q:'Which of the following is a marker interface?',
	options:['Runnable interface','Remote interface','Readable interface','Result interface'],
	answer:1
},
{
	q:'Which of the following is a reserved keyword in Java?',
	options:['object','strictfp','main','system'],
	answer:1
},
{
	q:'Which keyword is used for accessing the features of a package?',
	options:['import','package','extend','select'],
	answer:0
},
{
	q:'which of these executes first in a program?',
	options:['Main method','static function','constructor'],
	answer:0
},
{
	q:'If a static block is present in a program, it executes before the main method',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'A program with a static block executes successfully even if the main method is not present',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'A Program executes successfully without a main method',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'constructors can be overloaded',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Final class can be inherited',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Finaly() method executes only when the exceptions are caught',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'static methods can be overridden',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'static methods can be overloaded',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'A program can contain more than one main method',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'In java, jar stands for_____',
	options:['Java Archive Runner','Java Application Resource','Java Application Runner','None of the above'],
	answer:3
},
{
	q:'Which of the following is false?',
	options:['The rt.jar stands for the runtime jar','It is an optional jar file','It contains all the compiled class files','All the classes available in rt.jar is known to the JVM'],
	answer:1
},
{
	q:'What is the use of \w in regex?',
	options:['Used for a whitespace character','Used for a non-whitespace character','Used for a word character','Used for a non-word character'],
	answer:2
},
{
	q:'Which of the given methods are of Object class?',
	options:['notify(), wait( long msecs ), and synchronized()','wait( long msecs ), interrupt(), and notifyAll()','notify(), notifyAll(), and wait()','sleep( long msecs ), wait(), and notify()'],
	answer:2
},
{
	q:'Which of the following is a valid syntax to synchronize the HashMap?',
	options:['Map m = hashMap.synchronizeMap();','HashMap map =hashMap.synchronizeMap();','Map m1 = Collections.synchronizedMap(hashMap);','Map m2 = Collection.synchronizeMap(hashMap);'],
	answer:2
},
{
	q:'Given,  ArrayList list = new ArrayList(); What is the initial quantity of the ArrayList list?',
	options:['5','0','-1','10','100','50'],
	answer:3
},
{
	q:'Which of the following is a mutable class in java?',
	options:['java.lang.String','java.lang.Byte','java.lang.Short','java.lang.StringBuilder'],
	answer:3
},
{
	q:'What will be the output of the following program?  abstract class MyFirstClass  {  abstract num (int a, int b) {  }  }  ',
	options:['Method is not defined properly','no error','extra paranthesis','Constructor is not defined properly'],
	answer:0
},
{
	q:'What is meant by the classes and objects that dependents on each other?',
	options:['Tight Coupling','Cohesion','Loose Coupling','None of the above'],
	answer:0
},
{
	q:'A program can contain how many destructors?',
	options:['only one','more than one','depends on number of constructors','none'],
	answer:0
},
{
	q:'Destructors are invoked automatically when the Constructors are created',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'How many threads can be executed at a time?',
	options:['Only one thread','Multiple threads','Only main (main() method) thread','Two threads'],
	answer:1
},
{
	q:'If three threads trying to share a single object at the same time, which condition will arise in this scenario?',
	options:['Time-Lapse','Critical situation','Race condition','Recursion'],
	answer:2
},
{
	q:'If a thread goes to sleep',
	options:['It releases all the locks it has.','It does not release any locks.','It releases half of its locks.','It releases all of its lock except one.'],
	answer:1
},
{
	q:'Which of the following modifiers can be used for a variable so that it can be accessed by any thread or a part of a program?',
	options:['global','default','static','transient','volatile'],
	answer:4
},
{
	q:'Interface contains',
	options:['abstract methods','non abstract methods','default methods'],
	answer:3
},
{
	q:'Java supports multiple inheritance with help of',
	options:['Abstraction','interface','classes','objects','static methods'],
	answer:1
},
{
	q:'In character stream I/O, a single read/write operation performs _____',
	options:['Two bytes read/write at a time','Eight bytes read/write at a time','One byte read/write at a time','Five bytes read/ write at a time'],
	answer:0
},
{
	q:'What is the default encoding for an OutputStreamWriter?',
	options:['UTF-8','Default encoding of the host platform','UTF-12','none of the above'],
	answer:1
},
{
	q:'In JAVA 1.8, interface also supports non abstract methods',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Interface supports non-abstract methods only when they are under _____ access specifier',
	options:['protected','public','static','private','default'],
	answer:4
},
{
	q:'Unchecked exceptions are checked at compile-time rather they are checked at runtime.',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'The PipedInputStream and PipedOutputStream classes can be used to read and write data simultaneously',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Which method returns the interrupted flag after that it sets the flag to false if it is true?',
	options:['isInterrupted()','static interrupted()','non static interrupted()','Both A & C'],
	answer:1
},
{
	q:'Classes are thread safe if they are ',
	options:['synchronized','unsynchronized','static','public','none'],
	answer:0
},
{
	q:'which of the following are thread safe?',
	options:['StringBuilder','Scanner','StringBuffer','Both A & C','String'],
	answer:2
},
{
	q:'Which is more efficient to go with?',
	options:['StringBuilder','Scanner','StringBuffer','Both A & C','String'],
	answer:0
},
{
	q:'Why String are immutable?',
	options:['beacuse they are stored in String Pool','They are synchronized','both A & B','none'],
	answer:0
},
{
	q:'ResultSetMetaData interface is useful because it provides methods to get metadata from the ResultSet object',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Which constructor creates an empty string buffer with the specified capacity as length',
	options:['StringBuffer()','StringBuffer(String str)','StringBuffer(int capacity)','none'],
	answer:2
},
{
	q:'How many reserved keywords are currently defined in the Java language?',
	options:['48','49','52','47','50'],
	answer:1
},
{
	q:'Switch is more efficient than nested if or if - else in java.',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Java application uses an output stream to read data from a source, it may be a file, an array, peripheral device or socket',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Which is irrecoverable?',
	options:['Error','checked Exceptions','Unchecked exceptions','none'],
	answer:0
},
{
	q:'A package can be renamed without renaming the directory in which the classes are stored',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Daemon thread provides services to user threads for background supporting tasks,It has no role in life than to serve user threads',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Which is the default thread of a program?',
	options:['main','demon','default'],
	answer:0
},
{
	q:'By overriding the toString() method of the Object class, we can return values of the object, so we donot need to write much code',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Classes in the same package cannot access each other package-access members',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Which Thread pool is used where container creates a thread pool to process the request?',
	options:['servlet','JSP','none','All the above'],
	answer:3
},
{
	q:'Which statement provides an easy way to dispatch execution to different parts of your code based on the value of an expression?',
	options:['if','else-if','nested-if','switch','continue'],
	answer:3
},
{
	q:'Packages are used for distributing a collection of reusable classes, usually in a format known as Java Archive (JAR) file',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Which provides accessibility to classes and interface?',
	options:['import','static','public','all the above'],
	answer:0
},
{
	q:'What can be accessed or inherited without actual copy of code to each program?',
	options:['Browser','Applet','AWT','package','none'],
	answer:3
},
{
	q:'Breaking a string or stream into meaningful independent words is known as tokenization',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:' Which variables are created when an object is created with the use of the keyword NEW and destroyed when the object is destroyed?',
	options:['static','instance','local','public','none'],
	answer:1
},
{
	q:'An interface is a blueprint of a class. It has static constants and abstract methods',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Which is a superclass of all exception classes?',
	options:['Throwable','Exception','Error','Object','none'],
	answer:0
},
{
	q:'The Object class is not a parent class of all the classes in java by default',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Which keyword is used to make the classes and interface of another package accessible to the current package?',
	options:['import','static','public','all the above'],
	answer:0
},
{
	q:'If you import a package, subpackages will not be imported',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Which method returns a reference to the currently executing thread object?',
	options:['currentThread()','runningThread()','runnableThread()','none'],
	answer:0
},
{
	q:' Java Virtual Machine is platform independent',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Java is Platform independent',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Which class can be used to read data line by line using the readLine() method?',
	options:['BufferedReader','InputStreamReader','DataInputStream','none'],
	answer:0
},
{
	q:'Which method cannot be overridden?',
	options:['Final method','final class','static method','public method','Both A & C'],
	answer:0
},
{
	q:'Local inner class can access non-final local variable',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'If a class has multiple methods by same name but different parameters, it is known as?',
	options:['Constructor overloading','Method overloading','Operator overloading'],
	answer:1
},
{
	q:'Which is a non-static method having the same name as its class?',
	options:['field','method','constructors'],
	answer:2
},
{
	q:'Exception Handling is a mechanism to handle runtime errors',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'Many threads at a time can run in a single process',
	options:['TRUE','FALSE'],
	answer:0
},
{
	q:'The CharArrayWriter class is not used to write data to multiple files',
	options:['TRUE','FALSE'],
	answer:1
},
{
	q:'Which data type has this Minimum and Maximum value from 3.4e-038 to 3.4e+038?',
	options:['float','double','int','long','BigInteger'],
	answer:0
},
{
	q:'Garbage collection only occurs sporadically during the execution of your program',
	options:['TRUE','FALSE'],
	answer:0
}*/
]