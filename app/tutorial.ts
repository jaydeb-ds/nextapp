// String 
let std_name : string;
std_name = "jaydeb";

// integer
let age:number;
age = 31;

// float 
let cgpa : number;
cgpa = 8.2;

// Boolean 
let pass : boolean
pass = true

// array (number)
let marks : number[];
marks = [96,86,68]

// array (string)
let subject : string[];
subject = ["dsa","oops","dbms"];

// other way to write array 
let dept : Array<string> = ["IT","CS","BCA"]

// tuple 
let job : [string,number,boolean]
job = ["web developer",12,true] 
//if any of the field is empty then it will show error, or if the type of value and the type of variable is not match then it will also show error

// any
let des : any
des = true
des = 33
des = "good"

enum role {"admin","user"}

role.admin

//--------funtion-------------
// Basic funtion 

function add(a:number, b:number) : number
{
    return a+b
}
function hello(name :string, prefix:string = "hello"):string
{
    return `${prefix}! ${name}`
}

// type inference 
let b = 88

// type annotation 
let a:number;

// type alias 
type ID = number | string
let userId : ID = "74334q3"

type status = "success" | "pending" |"error"
let state : status;
state = "error"


// type declaration of a Object

type result = {
    name : string,
    mark : number,
    pass : boolean,
    grade ?: string // optional (if you not use it in object doesnot show any error)
}

let std1 : result;
std1 = {
    name : "jaydeb",
    mark : 345,
    pass : true
}

// interface

interface emp {
    name : string 
    exp : number
}

let emp1 : emp = {
    name :"jaydeb",
    exp : 2
}

// -----Combine----
// combine of two type of object with '&'
type stream = "science" | "arts" | "commerce"
type hs = {
    stream : stream
}

type Hs_result = result & hs
let hs_std1 : Hs_result;
hs_std1 = {
    name : "Jaydeb",
    mark : 367,
    pass :true,
    stream : "science"
}

// combine of two interface (object) with 'extents'
type dept = "BIT" | "BMLT" | "BBA"

interface teacher extends emp 
{
    dept : dept
}

let t1 : teacher;
t1 = {
    name : "partha banik",
    exp : 12,
    dept : "BIT"
}

//  generic type

function sum<T>(a:T):T{
    return a
}

sum <number>(10)

interface user <T>{
    name : string,
    age : T
}

let user1 : user<number> =
{
    name :"jay",
    age: 12
}

                                                                    