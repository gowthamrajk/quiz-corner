const quiz=[
{
	q:'What is the significance of Matcher class for regular expression in java?',
	options:['interpretes pattern in the string','Performs match in the string','interpretest both pattern and performs match operations in the string','None of the mentioned'],
	answer:2
},
{
	q:'Which of the following is not a class of java.util.regex?',
	options:['Pattern class','matcher class','PatternSyntaxException','Regex class'],
	answer:3
},
{
	q:'Object of which class is used to compile regular expression?',
	options:['Pattern class','Matcher class','PatternSyntaxException','None of the mentioned'],
	answer:0
},
{
	q:'Which capturing group can represent the entire expression?',
	options:['group *','group 0','group * or group 0','None of the mentioned'],
	answer:1
},
{
	q:'groupCount reports a total number of Capturing groups',
	options:['true','false'],
	answer:0
},
{
	q:'Which of the following matches nonword character using regular expression in java?',
	options:['w','S','p','a'],
	answer:0
},
{
	q:'Which of the following matches end of the string using regular expression in java?',
	options:['z','*','$'],
	answer:0
},
{
	q:'What does public int end(int group) return?',
	options:['offset from last character of the subsequent group','offset from first character of the subsequent group','offset from last character matched','offset from first character matched'],
	answer:0
},
{
	q:'what does public String replaceAll(string replace) do?',
	options:['Replace all characters that matches pattern with a replacement string','Replace first subsequence that matches pattern with a replacement string','Replace all other than first subsequence of that matches pattern with a replacement string','Replace every subsequence of the input sequence that matches pattern with a replacement string'],
	answer:3
},
{
	q:'What does public int start() return?',
	options:['returns start index of the input string','returns start index of the current match','returns start index of the previous match','none of the mentioned'],
	answer:2
},
{
	q:'What is the Regex for below String? The string should consist of only lowercase and uppercase letters (no numbers or symbols). The string should end in s.',
	options:['^([(?i)a-z]*S)','^((?i)[A-Z]*s)','^([a-zA-Z]*s)$','([a-z]*s)$'],
	answer:0
},
{
	q:'Is String.matches() is same as Pattern.matches()?',
	options:['true','false'],
	answer:0
},
{
	q:'Is PatternSyntaxException a checked Exception?',
	options:['true','false'],
	answer:1
},
{
	q:'Pattern.matches() should only be used when entire input should completely match with Regex. The string must start with Mr., Mrs., Ms., Dr. or Er. The rest of the string must contain only one or more English alphabetic letters (upper and lowercase).',
	options:['(Mr,Mrs,Ms,Dr,Er).([a-zA-Z]?)$','^(Mr|Mrs|Ms|Dr|Er)\\.([a-zA-Z]+)$','^(Mr|Mrs|Ms|Dr|Er)\\.([a-zA-Z])$','(Mr|Mrs|Ms|Dr|Er)\.([a-zA-Z]+)$'],
	answer:1
},
{
	q:'What is Java Regex for below String?',
	options:['true','false'],
	answer:0
}
]