/*

    Code provided by Nyuutrino (https://replit.com/@Nyuutrino).

*/

/*
  License (MIT) - see LICENSE file in main on the github page
  
*/

/*
TODO:
    Quite a lot.


    *** Ignore me conversing with myself and move along like any decent sapien would...

    * Fix the recursion limit not working on the "GetRelevantCommands" function

    * Module support. (Oh, yea)

    * Fix typos and that could make errors misleading.

    * Official CLIp website and wiki! (Making that after this gets done. Whew, that's going to be a lot of work!)

    * Make a feedback form for the CLIp website (especially for new features/how much do you use this feature (or how much do you like this feature) which will help me add new features and remove old ones. Honestly I don't think I'm going to remove features, but rather ask for which new ones users want and/or would they want "this" (by "this" I mean a feture I would give as an option to them) added).  (YES! IDK what else to say here soooooooo...)

    * Alert programmers using this that XSS IS possible if the user enters in a string containing HTML content for a setter value. Always, ALWAYS escape ANYTHING coming from a source you don't control. Either don't use ".innerHTML" or use a HTML escaping library.

    * Find and fix bugs! (My least favorite part...)



Future versions TODO:

    * Don't throw an error when a listenr doesn't exist in strict mdoe.




BUGS:

    *** Wow, I am really surprised that I don't have any bugs (that are known anyways). I just hope that this doesn't become a normal feeling for me because then when a bug comes I won't be in the mood to fix it.


Finished TODO:


    * Make function that returns related objects to a command (for autofinish). (Yes, heck yeah boi!)

    * Make the strict mode implementation to check if a property/method/main-object/property-container's name is invalid (by invalid I mean containing an illegal character referring to the legal characters allowed in CLIp. This is to prevent user-accessibility) and if not throw an error (it will just console.warn() if strict mode is disabled)

    * Make read-only values for properties and something similar for methods (executable, not executable) (For properties that's really easy, I already implemented it I just have to make a function for it. I don't know if I want to do that for methods... why would anyone need something like that for a method?).

    * Make the ability to create extra objects (bind main objects to main objects, essentially). (I don't see why I SHOULDN'T do that. Just seems like a bad idea to leave it out because a game might have a lot of commands and the programmer might want to arrange different commands into different groups like "World::ThisInstance::User::Speed->5". Yeah, that makes sense.)

    * Make the errors have a prefix with their type in the constructor instead of having to write it every time (E.g: ParsetimeError adds "(CLIp parser): " to the beginning).

    * Make the ability to listen for property changes/method-calls. (This seems very much like candy to a programmer. Yes, I think this is going to be one of the top things to do on my list.)

    * Have a recursive depth limit on CLIp.GetRelevantCommands (on the VERY deeply nested objects it might take up a lot of power...)

    * Check if object exists during define-time and have the option to be able to re-define objects.

    * Make property change/method-call listeners throw an error if the program attempts to add a listener to a property/method not configured to do so (in strict mode). (Yes, this is something I made strict mode for).

    * Type statements for arguments in functions (properties will always be strings for now) (yes... maybe... I hope but it's going to be hard...). In addition, add smart type checking. (yessssssssssssss)

    ^^^^ For the above, I would love to make it with syntax consisting of something along the lines of ExampleFunc->"hA!"<t:string>;"oO, when is this gonna work!?"<t:string>;"1"<t:int>, or have the "<t:type>" in front of the value.

    * Make the ability to call functions with null or undefined and pass them in as arguments (to represent an argumentless function). However, allow them in a string (like "null" instead of null (without paranthesis)) (basically allow the user to pass in null as a value instead of it being stringified (because whatever they put in is a string)).

    * Allow character escaping. (Especially useful for chat commands (what if someone wanted to quote the greate GigaChad lul). However, I find this more of a terminal language and like I said before, people really only want to use a terminal in-game for *hacks*... so this might not be the best thing to use for chat (it's better to just make your own chat system, it's not that hard).)

    * Re-write the parsing process as a lexer (kind of). (Well, no use putting it off. It's going to be *much* easier later on if I make it lexical. Let's do the backbreaking work now so we can use a backhoe later :D)

    * Examine the error types to make sure they actually ARE the right types (I might have a few error types that should be another type I don't know...).

    * CLIp objectlet should provide statistics on certain modes and whether or not they are turned on. (Why SHOULDN't the CLIp objectlet provide that info? I just got to make sure it's reliable...)

    * Allowing the type "infer" also allows any other type. Infer basically acts as "all". Should I change it to only allow the type "infer"? I think I will...

    * Work on restricting types method and its overal functionality in the program.

    * Re-name "ParseCLI" to something more "descriptive" (most likely "ParseInput").

    * Re-write the bindRestrictiveProperty to include restricting the types, as well as the option to only allow something of one type (for the latter I mean instead of allowing certain values, allow certain types only... basically). (Hmmmm, yes I definitely WILL do this.)

    * The infer process for type declarators needs some fine tuning.

    * Parse escaped characters as well (currently they get ignored). Also prevent escaped characters on the lhs of the setter.

    * Allow different object types other than strings and functions.

    * Make the ability to change a property's accessibility. Also make a property/method lock function (that is irriversable). (Yes I think I will definitely do that.)

    * Make a "GetObjectletInfo" function that returns metadata about the objectlet. (Yees!)

    * With the setters on the methods not returning the return value of the function and all... well I think I have an idea! Because objects/arrays are pass-by-reference I can pass in an array with the values and the setter will extract the value/s and call the function. Then it will directly mutate the passed-in array which gives the contents of the return value. (YAY, it works!)

    * Make properties that can only be changed by the code itself. (Yes, very important. That said, I've got to add a disclaimer in the tutorial saying that read-only values aren't really "read-only" to the user since they can use devtools to edit the value. Again, like I said - don't ever handle sensitive information on the client!)

    * Get a disclaimer from the school for the MIT license (yessss)

    * Get an MIT license (yessssssssssssssssssssssssss)

    * Re-write metadataNames to include the type that the property will have, as well as what it appears on (whew, metadataNames is pretty heavily ingrained in this program, it's going to take some work to change some 250 instances metadataNames being used!!!)

    * Remove redundancies in type checking and errors ("typeof true" and such).





Suggestions (probably not going to happen anytime soon; some may never happen):


    * Allow listeners to approve/reject incoming values, thus allowing them to act like a proxy.


    * Possibly add the ability to pass in the value sent in from the last execution for method listeners. (I think I might want to ask users if they need it)
    
    * Make the ability to assign a value of one property/call a method with the value of another property (Allow parent-property pointers after the setter operator). (Hmm, this seems very pratical. I wonder if anyone would use this though. Remember that the people playing the game don't want to learn a programming language, but rather utilize the terminal for *hacks*.)
    
    * Make the above also compatible with the value of assigning a property/callig a method (Allow multiple assignment operators). (Hmmmm, I don't know if I want to do this, I would have to create a logical order system (like PEMDAS but for assignments) and it would just get too messy. Keep dreamin' tho, maybe I might get an idea of how it could work (probably through lexing, but I'd rather not do that)!)
    
    * Possibly make an objectlet-pointer (a pointer that points to another objectlet, kind of like addresses and references but the objectlet points to another objectlet so when the pointer is executed/changed it changes the objectlet it is pointing too). (Yes, I think that would help when wanting to define things with slightly different spellings in them (like color/colour), although I think they can just define extra objects for now...)
    
    * Make an "addFromObject" function that can bulk add to the CLIp branch based off of an object and its objects (add to an commander objectlets from an object that can possibly contain more objectlets). Make the ability to include prototypes as well. (Maybe. It wouldn't be TOO hard, but I'd have to see how everything goes first. I don't think I'll add the inclusion of prototypes though.)
    
    * (If users want it added) make it so CLIp functions don't throw errors (for non-critical errors anyways) due to the necessity of extra try...catch blocks. (Yeah, that would be nice. I'd rather wait till users try it though.)
    
    * For the type statements, make "BindRestrictiveProperty" only work with some types. Type checking objects (especially nested ones) could be extremely difficult. Also, I don't know how arrays/objects are going to be held as making a system that allows arrays/objects is going to be hard... :/ (Hmmm, I don't think I will allow arrays/objects, just numbers/strings/null/undefined/NaN/any, the latter meaning that it is interpreted).
    
    * Add an interface that allows direct communication with an HTML element that is the terminal (too high-level to be useful).
    
    * Building on that idea above, take a function as a parameter that will be called when something happens (AKA, a command is executed). (Now THAT might be useful...)
    
    * Add an output commander that allows for outputting things (like echo on bash).
    
    * Add "default types" for certain properties, having the value be auto-converted unless explicitly overridden by the type declarators. For numbers I should check if it's NaN before converting it. If it is, then store the value as-is. If not then just convert it to a number and store it. Also add "smart checking" (infer what type it is and store it).
    
    * Maybe [with type checking] esablish a difference between integers and floats?
    
    * Make a way to allow communication between a client and server instance of CLIp (allow CLIp on the client to communicate with CLIp on NodeJS). (I really think this would be a good idea but I don't know how...)
    
    * After making the wiki have the errors provide a link to a wiki page describing information on the error. (Rust aint gonna be the only language with "useful" error messages for long >:D)
    
    * Adding to the above: Error codes! Yes, a simple "CLIp::AboutError->Code" should do the trick >:D
    
    * Make an unstable mode where methods with possible bugs are allowed to be accessed and used (most likely after release). (Maybe, it seems like something that might work if the rest of my methods wouldn't be so unstable (otherwise I'd have to mark all of them as "unstable" lol)...)
    
    * Allow objects as values for properties. (Maybe, maybe not...). It can have the same syntax as the arguments for a method though...
    
    * Make a compile-to-js method to compile the CLI lang to JavaScript for optional JavaScript execution (probably would have to be through eval() though...). (This seems pretty nice. I'm a little worried about the eval though. Well, if the syntax checker does it's job it will filter out all the JavaScript commands (due to the fact that I use a different syntax here than JavaScript). Also, it compiles it to a value-set/method-call command so I don't think it could be too malicious (just don't handle sensitive information and you should be fine. That being said, don't ever handle sensitive information on the client).)
    
    * Make single quotes valid string declarative operators. (Programming languages have them for a reason (technically in Go they are "runes" and in C/C++ they are for characters and probably the same for many other languages but still - Python, JavaScript, PHP, and many others use them for string alternatives)!)




*/

/*----------------------------------------------------*/

/*
    Honestly the parsing and syntax checking probably isn't the best way to check the legality of the code...

    Sigh, I should have done lexing but I didn't find out soon enough. I'd rather not re-write the whole thing when I'm not even going expand the command syntax much.

    Hmmmm, scratch that. I made it lexically analyze code, but maybe not in the best way possible when it comes to lexing. :/

    It works well enough for me, though!
*/

/*-----------------------------*/




/*CLIp stands for "CLI parser"*/




/*------------------------------   Terms   ------------------------------*/

/*
    * Commandlet: A command that is either a method/property.

    * Commander: A commandlet container (main object/property container).

    * Compile-time error: An error that occures during compiling CLIp code into JavaScript.

    * Runtime Error: An error that occures during CLIp code execution.

    * Parsetime Error: An error that occures during the parsing of the CLIp code.

    * Initialization error: An error that occures during setting up CLIp (almost always be the programmer's code and not the user's commands).

    * Name error: An error that has to do with naming commandlets/commanders. Right now this is only an error in strict mode. When not in strict mode it will warn to the console instead.

    * Property: A commandlet of a string type.

    * Method: A commandlet of a function type and can be executed.

    * Property container: A container holding properties and/or methods.

    * Main Object container (also known throughout the source code as just "main object"): A property container except that it is *always* bound to the root.

    * Objectlet: A commandlet/commander.

    * Target objectlet: The objectlet that is going to be changed (or read from).

    * Raw value: A non-string-bound value after the setter (a value that isn't wrapped with '"' after the setter).

    * Behavior block: A special block in the command that changes how it will be interpreted. Behavior blocks are wrapped in less-than greater-than symbols, like so: "<behavior:value>"

    * Type declarator: A behavior block that changes the type of the value.

    *** More terms go here when I come up with them (lol).
*/

/*------------------------------           ------------------------------*/
const CLIp = {};
(() => {
    /*Strict mode ;)*/
    "use strict";


    /*Defines the custom errors we need.*/

    /*CompiletimeError will be used when compiling to a JavaScript statement (it's basically a ParsetimeError but used when compiling CLIp code to JavaScript).*/
    class CompiletimeError extends Error {
      constructor(message, ...args) {
        super(message, ...args);
        this.name = "CompiletimeError";
        this.message = "(CLIp compile-time parser): " + message;
      }
    }
    /*Reserved for the execution of a CLIp command.*/
    class RuntimeError extends Error{
        constructor(message,...args){
            super(message,...args);
            this.name = "RuntimeError";
            this.message = "(CLIp runtime-evaluator): " + message;
        }
    }
    /*Reserved for the parsing of a CLIp command.*/
    class ParsetimeError extends Error{
        constructor(message,...args){
            super(message,...args);
            this.name = "ParsetimeError";
            this.message = "(CLIp parser): " + message;
        }
    }
    /*Typically reserved for functions reguarding mutationg the CLIp environment.*/
    class InitializationError extends Error{
        constructor(message,...args){
            super(message,...args);
            this.name = "InitializationError";
            this.message = "(CLIp Initializer): " + message;
        }
    }
    /*For illegal characters/naming collisions (the former occurring in strict mode).*/
    class NameError extends Error{
        constructor(message,...args){
            super(message,...args);
            this.name = "NameError";
            this.message = "(CLIp name-checker): " + message;
        }
    }


    /*People to check if an error thrown is an instance of a CLIp error.*/

    CLIp.CompiletimeError = CompiletimeError;
    CLIp.RuntimeError = RuntimeError;
    CLIp.ParsetimeError = ParsetimeError;
    CLIp.InitializationError = InitializationError;
    CLIp.NameError = NameError;

    /*Variables needed.*/

    /*Yes, I use "null". Is that good enough for you guys?*/
    let objList = null;
    const modes = {"executionMode":{"value":"readWrite","allowedValues":["writeOnly","readOnly","readWrite"]},"strictMode":false,"strictCommandMode":false};
    const allowedDataTypes = ["string","number","null","undefined","NaN","infer"];
    Object.freeze(modes.allowedValues);
    const _VERSION = "1.1.0";
    /*It's a constant to prevent changes during runtime (in addition to it being frozen)...*/
    const metadataNames = {
        type: {name: "_CLIpObjectletType", inCommanders: true, inAllCommandlets: true, inProperties: true, inMethods: true, type: "string"},
        value: {name: "_CLIpObjectletValue", inCommanders: false, inAllCommandlets: true, inProperties: true, inMethods: true, type: "any"},
        propertyAccessibility: {name: "_CLIpObjectletPropertyAccessibility", inCommanders: false, inAllCommandlets: false, inProperties: true, inMethods: false, type: "string"},
        allowedValues: {name: "_CLIpObjectletAllowedValues", inCommanders: false, inAllCommandlets: false, inProperties: true, inMethods: false, type: "array"},
        allowedTypes: {name: "_CLIPObjectletAllowedTypes", inCommanders: false, inAllCommandlets: false, inProperties: true, inMethods: false, type: "array"},
        allowListeners: {name: "_CLIpObjectletAllowListeners", inCommanders: false, inAllCommandlets: true, inProperties: true, inMethods: true, type: "boolean"},
        listeners: {name: "_CLIpListenersArray", inCommanders: false, inAllCommandlets: true, inProperties: true, inMethods: true, type: "array"},
        setter: {name: "_CLIpObjectletSetter", inCommanders: false, inAllCommandlets: true, inProperties: true, inMethods: true, type: "function"},
        locked: {name: "_CLIpCommandletLocked", inCommanders: false, inAllCommandlets: true, inProperties: true, inMethods: true, type: "boolean"},
        sealed: {name: "_CLIpCommanderSealed", inCommanders: true, inAllCommandlets: false, inProperties: false, inMethods: false, type: "boolean"},
        MetaTypeMatches: (itemKey, value) => {
            if("undefined" === typeof itemKey){
                throw new TypeError(`Parameter "itemKey" (argument 1) is not defined.`);
            }
            if("undefined" === typeof value){
                throw new TypeError(`Parameter "value" (argument 2) is not defined.`);
            }
            if("string" !== typeof itemKey){
                throw new TypeError(`Parameter "itemKey" (argument 1) is not a string representing the key of the object that could potentially be a metadata name. Expected string type found a type of "${typeof itemKey}" instead with a value of "${itemKey}".`);
            }
            const typeActions = {
                "any": () => {
                    /*"any" will accept any type (hence the name)*/
                    return true;
                },
                "string": item => "string" === typeof item,
                "boolean": item => "boolean" === typeof item,
                "function": item => "function" === typeof item,
                "array": item => Array.isArray(item)
            };
            /*Essentially goes through all of the metadata names, checks their types and their names, checks if the name matches the "itemKey", checks if that object containing that name has a certain type and checks if the value is equal to the type(s) associated with that property. It takes just a faction of a millisecond, but I wonder if this can get faster...*/
            return !!Object.entries(typeActions).filter(val => val[1](value) && Object.entries(metadataNames).find(v => v[1].name === itemKey && v[1].type === val[0])).length;
        }
    };
    {
        /*"ShortName" is the name assigned to that property name in the "metadataNames" object. "Name" is the name assigned to that property.*/
        const mapMetaToNames = arr => arr.map(val => ({"Name": val[1].name, "ShortName": val[0], "Type": val[1].type}));
        Object.defineProperties(metadataNames, {
            CommanderMeta: {
                get: () => mapMetaToNames(Object.entries(metadataNames).filter(val => val[1].inCommanders) || [])
            },
            CommandletMeta: {
                get: () => mapMetaToNames(Object.entries(metadataNames).filter(val => val[1].inAllCommandlets || val[1].inProperties || val[1].inMethods) || [])
            },
            PropertyMethodMeta: {
                get: () => mapMetaToNames(Object.entries(metadataNames).filter(val => val[1].inProperties && val[1].inMethods) || [])
            },
            PropertyMeta: {
                get: () => mapMetaToNames(Object.entries(metadataNames).filter(val => val[1].inProperties) || [])
            },
            MethodMeta: {
                get: () => mapMetaToNames(Object.entries(metadataNames).filter(val => val[1].inMethods) || [])
            }
        });
    }
    for(const m in metadataNames){
        Object.freeze(metadataNames[m]);
    }
    Object.freeze(metadataNames);
    const legalCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";


    /*Functions/classes needed*/

    const escapeRegExp = (text) => {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
    const split = str => {
        try{
            str = str.toString();
        }
        catch(err){
            throw new TypeError("The argument passed in is not a valid string and/or cannot be converted to a string type.");
        }
        return [...str];
    };
    const preRoutine = (objectlet,objectletLockedTest) => {
        if(objList === null){
            throw new InitializationError("Root is not initialized.");
        }
        if(objectletLockedTest){
            /*Prevent it from throwing an error if the objectlet is not passed in - the CLIp functions will take care of that themselves with custom, better errors.*/
            if(typeof objectlet !== "object") return;
            if(objectlet[metadataNames.locked] || objectlet[metadataNames.sealed]){
                throw new InitializationError("Cannot mutate a locked commandlet/sealed commander.");
            }
        }
    };
    const checkPropertyNameLegality = (propertyName) => {
        if("undefined" === typeof propertyName) throw new TypeError(`Parameter "propertyName" (argument 1) is not defined.`);
        if("string" !== typeof propertyName) throw new TypeError(`Parameter "propertyName" (argument 1) is not of type "string". Expected string found "${propertyName}" instead with type "${typeof propertyName}".`);
        const validChars = legalCharacters.split("");
        propertyName = split(propertyName);
        let flagRaised = false;
        propertyName.forEach((v) => {
            if(validChars.filter(val => val === v).length < 1){
                flagRaised = true;
            }
        });
        /*Because we want to check if the property's (or main object or property container) name is "legal" or not. If it isn't legal the flag raised will be set to true, but we want to return false if it's not legal, so we use the "!" operator to switch it around.*/
        return !flagRaised;
    };
    /*Sigh, let's get this over with!*/
    /*Yay, I got it over with!*/
    class LexicalAnalyzer {
        constructor() {
            this.T_ESCAPE,
            this.T_STRING,
            this.T_POINTERSTART,
            this.T_POINTEREND,
            this.T_SETTERSTART,
            this.T_SETTEREND,
            this.T_ARGUMENTSEPARATOR,
            this.T_TYPEDECLSTART,
            this.T_TYPEDECLEND,
            this.T_LEGALCHARS = "";

            this.IS_SETTER,
            this.SETTER_FOUND,
            this.POINTER_FOUND,
            this.IS_POINTER,
            this.IS_STRING,
            this.LAST_OPERATOR,
            this.IS_ESCAPE = false;
            this.TYPE_DECL_OPEN = false;
            this.COL = 0;

            this.INPUT = "";
        }
        InitializeTokens(T_ESCAPE,T_STRING,T_POINTERSTART,T_POINTEREND,T_SETTERSTART,T_SETTEREND,T_ARGUMENTSEPARATOR,T_TYPEDECLSTART,T_TYPEDECLEND,T_LEGALCHARS) {
            const requiredArgs = 10;
            if(arguments.length < requiredArgs){
                throw new TypeError(`Failed to execute "InitializeTokens", ${requiredArgs} arguments are required but only ${arguments.length} present.`);
            }
            let argCount = 0;
            for(let arg in arguments){
                ++argCount;
                if("string" !== typeof arguments[arg]){
                    /*arrays start from 0. We start from 1*/
                    throw new TypeError(`Argument number ${argCount + 1} is not of string type.`);
                }
            }
            this.T_ESCAPE = T_ESCAPE;
            this.T_STRING = T_STRING;
            this.T_POINTERSTART = T_POINTERSTART;
            this.T_POINTEREND = T_POINTEREND;
            this.T_SETTERSTART = T_SETTERSTART;
            this.T_SETTEREND = T_SETTEREND;
            this.T_ARGUMENTSEPARATOR = T_ARGUMENTSEPARATOR;
            this.T_TYPEDECLSTART = T_TYPEDECLSTART;
            this.T_TYPEDECLEND = T_TYPEDECLEND;
            this.T_LEGALCHARS = T_LEGALCHARS;
        }
        Parse(string,stopAtSetter = false,setterSideOnly = false) {
            if(arguments.length < 1){
                throw new TypeError(`Failed to execute "Parse", 1 argument required but only 0 present.`);
            }
            if("string" !== typeof string){
                throw new TypeError(`Argument 1 passed in is not of string type.`);
            }
            const {
                T_ESCAPE,
                T_STRING,
                T_POINTERSTART,
                T_POINTEREND,
                T_SETTERSTART,
                T_SETTEREND,
                T_ARGUMENTSEPARATOR,
                T_LEGALCHARS,
                T_TYPEDECLSTART,
                T_TYPEDECLEND
            } = this;
            let {
                IS_SETTER,
                SETTER_FOUND,
                POINTER_FOUND,
                IS_POINTER,
                IS_STRING,
                LAST_OPERATOR,
                IS_ESCAPE,
                COL,
                TYPE_DECL_OPEN,
            } = this;
            const tokenCollection = [];
            const stringCollection = [];
            const objectletCollection = [];
            const typeDeclCollection = [];
            let stringLineStart = 0;
            let objectletLineStart = 0;
            let objectletLineEnd = 0;
            let typeDeclLineStart = 0;
            let setterCount = 0;
            let pushTokens = false;
            if(!setterSideOnly){
                pushTokens = true;
            }
            const drainObjectletCollection = () => {
                if(pushTokens){
                    if(objectletLineStart > 0){
                        /*It will count an item on the other side of the setter as an "objectlet", but it's really only a value (for now). The correct term for it is "raw value".*/
                        tokenCollection.push({"type":"objectlet","column_numbers":[objectletLineStart, objectletLineEnd],"value":objectletCollection.splice(0).join("")});
                    }
                    else{
                        /*Still splice it...*/
                        objectletCollection.splice(0);
                    }
                }
                else{
                    objectletCollection.splice(0);
                }
                objectletLineStart = 0;
                objectletLineEnd = 0;
            };
            for(let i = 0;i<string.length;++i){
                /*I can't seem to find out how to use this in a switch statement (the && doesn't work in a switch statement with the way I tried it)*/
                ++COL;
                const v = string[i];
                if(setterCount > 0){
                    pushTokens = true;
                }
                LAST_OPERATOR = "undefined" === typeof string[i - 1] ? "" : string[i - 1];
                if(IS_ESCAPE){
                    if(IS_STRING && v === T_STRING){
                        stringCollection.push(v);
                        IS_ESCAPE = false;
                        continue;
                    }
                    else if(IS_STRING){
                        stringCollection.push(`\\${v}`);
                        IS_ESCAPE = false;
                        continue;
                    }
                    if(pushTokens){
                        tokenCollection.push({"type":"escaped_char","column_numbers":[COL - 1, COL],"value":`\\${v}`});
                    }
                    IS_ESCAPE = false;
                    continue;
                }
                /*I include "!IS_ESCAPE" to make sure that "\\" works. I also add "!IS_STRING" because if someone wants to use backslashes in a string then that's perfectly fine with me (it should be ignored).*/
                if(v === T_ESCAPE && !IS_ESCAPE && !IS_STRING){
                    IS_ESCAPE = true;
                    drainObjectletCollection();
                    continue;
                }
                else if (v === T_ESCAPE && !IS_ESCAPE){
                    IS_ESCAPE = true;
                }
                else if(v === T_STRING && !IS_STRING && !TYPE_DECL_OPEN){
                    objectletLineEnd = COL - 1;
                    drainObjectletCollection();
                    IS_STRING = true;
                    stringLineStart = COL;
                    continue;
                }
                else if(v === T_STRING && IS_STRING && !TYPE_DECL_OPEN){
                    const collection = stringCollection.splice(0);
                    if(pushTokens){
                        tokenCollection.push({"type":"string","column_numbers":[stringLineStart,COL],"value":collection.join("")});
                    }
                    IS_STRING = false;
                }
                else if(IS_STRING){
                    stringCollection.push(v);
                    continue;
                }
                else if(v === T_POINTERSTART && !IS_POINTER && !TYPE_DECL_OPEN){
                    objectletLineEnd = COL - 1;
                    drainObjectletCollection();
                    POINTER_FOUND = false;
                    IS_POINTER = true;
                    continue;
                }
                else if(v === T_POINTEREND && IS_POINTER && LAST_OPERATOR === T_POINTERSTART){
                    if(pushTokens){
                        tokenCollection.push({"type":"pointer","column_numbers":[COL - 1, COL],"value":T_POINTERSTART + T_POINTEREND});
                    }
                    POINTER_FOUND = true;
                    IS_POINTER = false;
                    continue;
                }
                else if(v === T_SETTERSTART && !IS_SETTER){
                    objectletLineEnd = COL - 1;
                    drainObjectletCollection();
                    SETTER_FOUND = false;
                    IS_SETTER = true;
                    continue;
                }
                else if(v === T_SETTEREND && IS_SETTER && LAST_OPERATOR === T_SETTERSTART){
                    if(pushTokens){
                        tokenCollection.push({"type":"setter","column_numbers":[COL - 1, COL],"value":T_SETTERSTART + T_SETTEREND});
                    }
                    IS_SETTER = false;
                    SETTER_FOUND = true;
                    ++setterCount;
                    if(stopAtSetter) break;
                    continue;
                }
                else if(v === T_ARGUMENTSEPARATOR && !IS_SETTER && !IS_POINTER){
                    objectletLineEnd = COL - 1;
                    drainObjectletCollection();
                    if(pushTokens){
                        tokenCollection.push({"type":"argument_separator","column_numbers":[COL, COL],"value":T_ARGUMENTSEPARATOR});
                    }
                    continue;
                }
                else if(v === T_TYPEDECLSTART && !IS_STRING && !IS_SETTER && !IS_POINTER){
                    objectletLineEnd = COL - 1;
                    drainObjectletCollection();
                    if(TYPE_DECL_OPEN){
                        tokenCollection.push({"type":"open_behavior_block_failure","column_numbers":[COL, COL],"value":v});
                    }
                    else{
                        TYPE_DECL_OPEN = true;
                        typeDeclLineStart = COL;
                    }
                    continue;
                }
                else if(v === T_TYPEDECLEND && !IS_STRING && !IS_SETTER && !IS_POINTER){
                    if(!TYPE_DECL_OPEN){
                        tokenCollection.push({"type":"close_behavior_block_failure","column_numbers":[COL, COL],"value":v});
                    }
                    else{
                        TYPE_DECL_OPEN = false;
                        tokenCollection.push({"type":"behavior_block","column_numbers":[typeDeclLineStart, COL],"value":`${T_TYPEDECLSTART}${typeDeclCollection.splice(0).join("")}${T_TYPEDECLEND}`});
                        typeDeclLineStart = 0;
                    }
                    continue;
                }
                else if(TYPE_DECL_OPEN){
                    typeDeclCollection.push(v);
                    continue;
                }
                else if(v === T_STRING && !IS_STRING && TYPE_DECL_OPEN){
                    IS_STRING = true;
                    continue;
                }
                else if(v === T_STRING && IS_STRING && TYPE_DECL_OPEN){
                    IS_STRING = false;
                    typeDeclCollection.push(stringCollection.splice(0).join(""));
                    continue;
                }
                else if(IS_STRING && TYPE_DECL_OPEN){
                    stringCollection.push(v);
                    continue;
                }
                else if(TYPE_DECL_OPEN){
                    typeDeclCollection.push(v);
                    continue;
                }
                else if(T_LEGALCHARS.split("").filter(va => va === v).length > 0 && !IS_POINTER && !IS_SETTER && !TYPE_DECL_OPEN){
                    if(objectletLineStart === 0 && objectletCollection.length < 1){
                        objectletLineStart = COL;
                    }
                    objectletCollection.push(v);
                    continue;
                }
                /*I know I could have still done "else if's", but I think it would be better to show that this is the "unknown" section.*/
                else{
                    if(IS_SETTER){
                        IS_SETTER = false;
                        objectletLineEnd = COL - 1;
                        drainObjectletCollection();
                        if(pushTokens){
                            tokenCollection.push({"type":"unknown_token","column_numbers":[COL - 1, COL],"value":string[i - 1] + v});
                        }
                        continue;
                    }
                    else if(IS_POINTER){
                        IS_POINTER = false;
                        objectletLineEnd = COL - 1;
                        drainObjectletCollection();
                        if(pushTokens){
                            tokenCollection.push({"type":"unknown_token","column_numbers":[COL - 1, COL],"value":string[i - 1] + v});
                        }
                        continue;
                    }
                    else{
                        objectletLineEnd = COL - 1;
                        drainObjectletCollection();
                        if(pushTokens){
                            tokenCollection.push({"type":"unknown_token","column_numbers":[COL, COL],"value":v});
                        }
                        continue;
                    }
                }
            }
            if(IS_POINTER){
                tokenCollection.push({"type":"unknown_token","column_numbers":[COL, COL],"value":string[string.length - 1]});
            }
            else if(IS_SETTER){
                tokenCollection.push({"type":"unknown_token","column_numbers":[COL, COL],"value":string[string.length - 1]});
            }
            /*If we haven't drained it yet...*/
            if(objectletCollection.length > 0){
                objectletLineEnd = COL;
                drainObjectletCollection();
            }
            if(IS_STRING){
                tokenCollection.push({"type":"unclosed_string","column_numbers":[stringLineStart, COL],"value":stringCollection.join("")});
            }
            else if(TYPE_DECL_OPEN){
                tokenCollection.push({"type":"unclosed_behavior_block","column_numbers":[typeDeclLineStart, COL],"value":typeDeclCollection.join("")});
            }
            return tokenCollection;
        }
    }


    /*Now... onto the CLIp definitions!!*/


    CLIp.InitializeRoot = () => {
        if(objList !== null) throw new InitializationError("Root cannot be initialized twice");
        objList = {};
        objList[metadataNames.type.name] = "property-container";
        /*To make sure the user always has a way of getting help.*/
        Object.defineProperty(objList,"CLIp",{value: {
            [metadataNames.type.name]: "clip-help"
        },enumerable:true});
        const CLIpObj = objList.CLIp;
        Object.defineProperties(CLIpObj, {
            "About": {
                value: {
                    [metadataNames.type.name]: "property",
                    [metadataNames.allowedValues.name]: [],
                    [metadataNames.propertyAccessibility.name]: "read-only",
                    [metadataNames.allowListeners.name]: false,
                    [metadataNames.locked.name]: true,
                    [metadataNames.listeners.name]: [],
                    [metadataNames.value.name]: `CLIp (Stands for "CLI parser", pronounced "Clype") is a command line interpreter that is programmed in JavaScript. It allows functionality for creating a terminal-like interface for applications (especially online games). CLIp is built by Nyuutrino, so check him out (https://replit.com/@Nyuutrino)!`
                },
                enumerable: true
            },
            // No website available at the time
            // "OpenTutorial": {
            //     value: {
            //         [metadataNames.type.name]: "method",
            //         [metadataNames.allowListeners.name] :false,
            //         [metadataNames.listeners.name]: [],
            //         [metadataNames.locked.name]: true,
            //         [metadataNames.value.name]: () => {
            //             /*Sadly we cannot open a window from a worker (understandable). This causes a problem with accessibility for users who need to know CLIp...*/
            //             if("open" in globalThis){
            //                 globalThis.open("https://replit.com/@Nyuutrino/CLIp");
            //             }
            //         }
            //     },
            //     enumerable: true
            // },
            "StrictModeEnabled": {
                value: {
                    [metadataNames.type.name]: "method",
                    [metadataNames.allowListeners.name]: false,
                    [metadataNames.listeners.name]: [],
                    [metadataNames.locked.name]: true,
                    [metadataNames.value.name]: () => modes.strictMode
                },
                enumerable: true
            },
            "StrictCommandModeEnabled": {
                value: {
                    [metadataNames.type.name]: "method",
                    [metadataNames.allowListeners.name]: false,
                    [metadataNames.listeners.name]: [],
                    [metadataNames.locked.name]: true,
                    [metadataNames.value.name]: () => modes.strictCommandMode
                },
                enumerable: true
            },
            "ExecutionMode": {
                value: {
                    [metadataNames.type.name]: "method",
                    [metadataNames.allowListeners.name]: false,
                    [metadataNames.listeners.name]: [],
                    [metadataNames.locked.name]: true,
                    [metadataNames.value.name]: () => modes.executionMode.value
                },
                enumerable: true
            },
            "VERSION": {
                value: {
                    [metadataNames.type.name]: "property",
                    [metadataNames.allowedValues.name]: [],
                    [metadataNames.allowedTypes.name]: [],
                    [metadataNames.propertyAccessibility.name]: "read-only",
                    [metadataNames.allowListeners.name]: false,
                    [metadataNames.listeners.name]: [],
                    [metadataNames.locked.name]: true,
                    [metadataNames.value.name]: _VERSION
                },
                enumerable: true
            }
        });
        const freezeCrawler = (CLIpCommander) => {
            const crawler = (obj) => {
                const freeze = () => {
                    Object.freeze(obj);
                };
                for(let i in obj){
                    if("[object Object]" === Object.prototype.toString.call(obj[i])){
                        freeze();
                        crawler(obj[i]);
                    }
                    else{
                        freeze();
                    }
                }
            };
            crawler(CLIpCommander);
            Object.freeze(CLIpCommander);
        };
        freezeCrawler(objList.CLIp);
        return objList;
    };
    CLIp.ChangeExecutionMode = (mode) => {
        if(!modes.executionMode.allowedValues.includes(mode)){
            throw new InitializationError(`Unrecognized execution mode "${mode}". Accepted types are: "${modes.executionMode.allowedValues}".`);
        }
        modes.executionMode.value = mode;
        return modes.executionMode.value;
    };
    /*Strict mode throws errors in situations where a fault might go unnoticed by the user (like making a command with an illegal character, which is then impossible to use using CLIp.ParseInput()) or where something should maintain a static state but is allowed to be changed (like listener configuration).

    Current strict mode uses (when strict mode is turned on):

        Throws an error if an illegal character is found in a commandlet.

        Throws an error when trying to bind/remove a listener to a commandlet not configured to do so.

        Throws an error when trying to bind/remove a listener to a read-only value.

        Throws an error when a duplicate listener handler is found and "replaceSameListenerHandler" is not set to true.

        Throws an error when trying to remove a listener handler that doesn't exist.
    */
    CLIp.EnableStrictMode = () => {
        preRoutine();
        modes.strictMode = true;
    };
    CLIp.DisableStrictMode = () => {
        preRoutine();
        modes.strictMode = false;
    };
    /*Strict command mode disallows case-insensitivity (which would treat "CLIp" and "clip" as the same making it easier for users). By default strict command mode is disabled.*/
    CLIp.EnableStrictCommandMode = () => {
        preRoutine();
        modes.strictCommandMode = true;
    };
    CLIp.DisableStrictCommandMode = () => {
        preRoutine();
        modes.strictCommandMode = false;
    };
    CLIp.DefineMainObject = (mainObject,reConfigurable) => {
        preRoutine(mainObject, true);
        if("undefined" === typeof mainObject){
            throw new TypeError(`Parameter "mainObject" (argument 1) is not defined.`);
        }
        if("string" !== typeof mainObject){
            throw new TypeError(`Parameter "mainObject" (argument 1) must be a string containing the name of the main object.`);
        }
        if("undefined" !== typeof reConfigurable && "boolean" !== typeof reConfigurable){
            throw new TypeError(`Parameter "reConfigurable" (argument 2) is set but not of type "boolean".`);
        }
        if(Object.entries(metadataNames).find(val => val[1].name === mainObject)){
            throw new NameError("Naming collision with the metadata of objectlets.");
        }
        if(!checkPropertyNameLegality(mainObject)){
            if(modes.strictMode){
                throw new NameError(`Main object name "${mainObject}" has an illegal character. Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
            else{
                console.warn(`(CLIp name-checker): Main object name "${mainObject}" has an illegal character (this will mess with user accessibility). Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
        }
        if("undefined" === typeof reConfigurable) reConfigurable = false;
        if(!objList[mainObject]){
            Object.defineProperty(objList,mainObject,{value:{[metadataNames.type.name]:"main-object"},enumerable:true,configurable:reConfigurable});
        }
        else{
            try{
                /*The reason I try to set configurable to true is because it will only work if configurable is set to true in the first place, meaning it will always be true. It's called *logic*.*/
                Object.defineProperty(objList,mainObject,{value:{[metadataNames.type.name]:"main-object"},enumerable:true,configurable:true});
            }
            catch(err){
                if(modes.strictMode){
                    throw new TypeError("Attempted to re-define a main property container that is not configured to do so.");
                }
            }
        }
        return objList[mainObject];
    };
    CLIp.BindPropertyContainer = (object,objectName,reConfigurable) => {
        if("undefined" === typeof object){
            throw new TypeError(`Paramter "object" (argument 1) is not defined.`);
        }
        if("undefined" === typeof objectName){
            throw new TypeError(`Parameter "objectName" (argument 2) is not defined.`);
        }
        if("object" !== typeof object && (object[metadataNames.type.name] !== "property-container" || object[metadataNames.type.name] !== "main-object")){
            throw new TypeError(`Parameter "object" (argument 1) is not a valid commander.`);
        }
        if("string" !== typeof objectName){
            throw new TypeError(`Parameter "objectName" (argument 2) is not of type "string".`);
        }
        if("undefined" !== typeof reConfigurable && "boolean" !== typeof reConfigurable){
            throw new TypeError(`Parameter "reConfigurable" (argument 3) is set but not of type "boolean".`);
        }
        if(Object.entries(metadataNames).find(val => val[1].name === objectName)){
            throw new NameError("Naming collision with the metadata of objectlets.");
        }
        if(!checkPropertyNameLegality(objectName)){
            if(modes.strictMode){
                throw new NameError(`Property container name "${objectName}" has an illegal character. Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
            else{
                console.warn(`(CLIp name-checker): Property container name "${objectName}" has an illegal character (this will mess with user accessibility). Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
        }
        if("undefined" === typeof reConfigurable) reConfigurable = false;
        if(!object[objectName]){
            Object.defineProperty(object,objectName,{value:{[metadataNames.type.name]:"property-container"},enumerable:true,configurable:reConfigurable});
        }
        else{
            try{
                /*The reason I try to set configurable to true is because it will only work if configurable is set to true in the first place, meaning it will always be true. It's called *logic*.*/
                Object.defineProperty(object,objectName,{value:{[metadataNames.type.name]:"property-container"},enumerable:true,configurable:true});
            }
            catch(err){
                if(modes.strictMode){
                    throw new TypeError("Attempted to re-define a property container that is not configured to do so.");
                }
            }
        }
        return object[objectName];
    };
    CLIp.BindProperty = (propertyContainer,propertyArray,listenersAllowed,reConfigurable) => {
        preRoutine(propertyContainer,true);
        if("undefined" === typeof propertyContainer){
            throw new TypeError(`Paramter "propertyContainer" (argument 1) is not defined.`);
        }
        if("undefined" === typeof propertyArray){
            throw new TypeError(`Parameter "propertyArray" (argument 2) is not defined.`);
        }
        if("[object Object]" !== Object.prototype.toString.call(propertyContainer) && (propertyContainer[metadataNames.type.name] !== "property-container" || propertyContainer[metadataNames.type.name] !== "main-object")){
            throw new TypeError(`Parameter "propertyContainer" (argument 2) is not a valid commander to bind the property to.`);
        }
        if("[object Array]" !== Object.prototype.toString.call(propertyArray)){
            throw new TypeError(`Paramter "propertyArray" (argument 2) is not a valid array with values containing the name of the property of type "string" and the value.`);
        }
        if("string" !== typeof propertyArray[0]){
            throw new TypeError(`Paramter "propertyArray" (argument 2) is not a valid array with values containing the name of the property of type "string" and the value.`);
        }
        if("[object Object]" === Object.prototype.toString.call(propertyArray[1])){
            throw new TypeError(`The value cannot be an object. Try using "CLIp.BindPropertyContainer()" instead.`);
        }
        if("undefined" !== typeof propertyArray[2] && "string" !== typeof propertyArray[2]){
            throw new TypeError(`Parameter "propertyArray" (argument 2) has the property-access value passed in but is not of type "string" representing the values "read-only" or "read-write".`);
        }
        if("undefined" !== typeof listenersAllowed && "boolean" !== typeof listenersAllowed) throw new TypeError(`Parameter "listenersAllowed" (arugment 3) is set but not of type "boolean".`);
        if(propertyArray[2] !== "read-only" && propertyArray[2] !== "read-write"){
            if("undefined" !== typeof propertyArray[2]) throw new TypeError(`Parameter "propertyArray" (argument 2) has the property-access value passed in but is not a string containing the values "read-only" or "read-write". Instead found a value of type "${typeof propertyArray[2]}" and a value of "${propertyArray[2]}".`);
        }
        if("undefined" !== typeof reConfigurable && "boolean" !== typeof reConfigurable){
            throw new TypeError(`Parameter "reConfigurable" (argument 4) is set but not of type "boolean".`);
        }
        if(Object.entries(metadataNames).find(val => val[1].name === propertyArray[0])){
            throw new NameError("Naming collision with the metadata of objectlets.");
        }
        if("undefined" === typeof propertyArray[2]){
            propertyArray[2] = "read-write";
        }
        if(!checkPropertyNameLegality(propertyArray[0])){
            if(modes.strictMode){
                throw new NameError(`Property name "${propertyArray[0]}" has an illegal character. Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
            else{
                console.warn(`(CLIp name-checker): Property name "${propertyArray[0]}" has an illegal character (this will mess with user accessibility). Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
        }
        if("undefined" === typeof reConfigurable) reConfigurable = false;
        if(!propertyContainer[propertyArray[0]]){
            if(listenersAllowed){
                Object.defineProperty(propertyContainer,propertyArray[0].toString(),{value:{[metadataNames.type.name]:"property",[metadataNames.value.name]:propertyArray[1],[metadataNames.allowedValues.name]:[],[metadataNames.allowedTypes.name]:[],[metadataNames.propertyAccessibility.name]:propertyArray[2],[metadataNames.allowListeners.name]:true,[metadataNames.listeners.name]:[]},enumerable:true,configurable:reConfigurable});
                Object.defineProperty(propertyContainer[propertyArray[0]],metadataNames.setter.name,{
                    configurable:true,
                    enumerable:true,
                    set: function(value){
                        const oldVal = this[metadataNames.value.name];
                        /*Since it's a property we just set the value. Nothing more to it!*/
                        let err;
                        try{
                            this[metadataNames.value.name] = value;
                        }
                        catch(error){
                            err = error;
                        }
                        this[metadataNames.listeners.name].forEach((v) => {
                            /*Calls the listener and passes in the type as the first argument, the new value as the second, and the current (before being changed) value as the third - as well as an error argument that will return an error if an error occurs.*/
                            v(this[metadataNames.type.name],value,oldVal,err);
                        });
                    }
                });
            }
            else{
                Object.defineProperty(propertyContainer,propertyArray[0].toString(),{value:{[metadataNames.type.name]:"property",[metadataNames.value.name]:propertyArray[1],[metadataNames.allowedValues.name]:[],[metadataNames.allowedTypes.name]:[],[metadataNames.propertyAccessibility.name]:propertyArray[2],[metadataNames.allowListeners.name]:false},enumerable:true,configurable:reConfigurable});
            }
        }
        else{
            try{
                /*The reason I try to set configurable to true is because it will only work if configurable is set to true in the first place, meaning it will always be true. It's called *logic*.*/
                if(listenersAllowed){
                    Object.defineProperty(propertyContainer,propertyArray[0].toString(),{value:{[metadataNames.type.name]:"property",[metadataNames.value.name]:propertyArray[1],[metadataNames.allowedValues.name]:[],[metadataNames.allowedTypes.name]:[],[metadataNames.propertyAccessibility.name]:propertyArray[2],[metadataNames.allowListeners.name]:true,[metadataNames.listeners.name]:[]},enumerable:true,configurable:reConfigurable});
                    Object.defineProperty(propertyContainer[propertyArray[0]],metadataNames.setter.name,{
                        configurable:true,
                        enumerable:true,
                        set: function(value){
                            const oldVal = this[metadataNames.value.name];
                            /*Since it's a property we just set the value. Nothing more to it!*/
                            let err;
                            try{
                                this[metadataNames.value.name] = value;
                            }
                            catch(error){
                                err = error;
                            }
                            this[metadataNames.listeners.name].forEach((v) => {
                                /*Calls the listener and passes in the type as the first argument, the new value as the second, and the current (before being changed) value as the third - as well as an error argument that will return an error if an error occurs.*/
                                v(this[metadataNames.type.name],value,oldVal,err);
                            });
                        }
                    });
                }
                else{
                    Object.defineProperty(propertyContainer,propertyArray[0].toString(),{value:{[metadataNames.type.name]:"property",[metadataNames.value.name]:propertyArray[1],[metadataNames.allowedValues.name]:[],[metadataNames.allowedTypes.name]:[],[metadataNames.propertyAccessibility.name]:propertyArray[2],[metadataNames.allowListeners.name]:false},enumerable:true,configurable:reConfigurable});
                }
            }
            catch(err){
                if(modes.strictMode){
                    throw new TypeError("Attempted to re-define a property that is not configured to do so.");
                }
            }
        }
        return propertyContainer[propertyArray[0]];
    };
    CLIp.BindMethod = (propertyContainer,methodArray,listenersAllowed,reConfigurable) => {
        preRoutine(propertyContainer,true);
        if("undefined" === typeof propertyContainer){
            throw new TypeError(`Paramter "propertyContainer" (argument 1) is not defined.`);
        }
        if("undefined" === typeof methodArray){
            throw new TypeError(`Parameter "methodArray" (argument 2) is not defined.`);
        }
        if("[object Object]" !== Object.prototype.toString.call(propertyContainer) && (propertyContainer[metadataNames.type.name] !== "property-container" || propertyContainer[metadataNames.type.name] !== "main-object")){
            throw new TypeError(`Parameter "propertyContainer" (argument 1) is not a valid commander to bind the property to.`);
        }
        if("string" !== typeof methodArray[0]){
            throw new TypeError(`Paramter "methodArray" (argument 2) is not a valid array with values containing the name of the method of type "string" and the method of type "function".`);
        }
        if("function" !== typeof methodArray[1]){
            throw new TypeError(`Paramter "methodArray" (argument 2) is not a valid array with values containing the name of the method of type "string" and the method of type "function".`);
        }
        if("string" !== typeof methodArray[0]){
            throw new TypeError(`Paramter "methodArray" (argument 2) is not a valid array with values containing the name of the property of type "string" and the value.`);
        }
        if("object" === typeof methodArray[1]){
            throw new TypeError(`The value cannot be an object. Try using "CLIp.BindPropertyContainer()" instead.`);
        }
        if("undefined" !== typeof listenersAllowed && "boolean" !== typeof listenersAllowed) throw new TypeError(`Parameter "listenersAllowed" (arugment 3) is set but not of type "boolean".`);
        if(Object.entries(metadataNames).find(val => val[1].name === methodArray[0])){
            throw new NameError("Naming collision with the metadata of objectlets.");
        }
        if("undefined" !== typeof reConfigurable && "boolean" !== typeof reConfigurable){
            throw new TypeError(`Parameter "reConfigurable" (argument 4) is set but not of type "boolean".`);
        }
        if(!checkPropertyNameLegality(methodArray[0])){
            if(modes.strictMode){
                throw new NameError(`Method name "${methodArray[0]}" has an illegal character. Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
            else{
                console.warn(`(CLIp name-checker): Method name "${methodArray[0]}" has an illegal character (this will mess with user accessibility). Legal characters are lower-case and upper-case alphabet letters and numbers.`);
            }
        }
        if("undefined" === typeof reConfigurable) reConfigurable = false;
        if(!propertyContainer[methodArray[0]]){
            if(listenersAllowed){
                Object.defineProperty(propertyContainer,methodArray[0].toString(),{value:{[metadataNames.type.name]:"method",[metadataNames.allowListeners.name]:true,[metadataNames.listeners.name]:[],[metadataNames.value.name]:methodArray[1]},enumerable:true,configurable:reConfigurable});
                Object.defineProperty(propertyContainer[methodArray[0]],metadataNames.setter.name,{
                    enumerable:true,
                    configurable:true,
                    set: function(value){
                        this[metadataNames.listeners.name].forEach(v => {
                            /*Calls the listener and passes in the new value (because it's a method it passes the array of arguments in) as the first argument, the old value as the second argument and the property type as the third.*/
                           v(this[metadataNames.type.name],value);
                        });
                        /*Since it's a method it fires the event listener with just the value and type. Then it will call the function with an array containing the arguments.*/
                        const res = this[metadataNames.value.name](...value);
                        value.push(res);
                    }
                });
            }
            else{
                Object.defineProperty(propertyContainer,methodArray[0].toString(),{value:{[metadataNames.type.name]:"method",[metadataNames.allowListeners.name]:false,[metadataNames.value.name]:methodArray[1]},enumerable:true,configurable:reConfigurable});
            }
        }
        else{
            try{
                /*The reason I try to set configurable to true is because it will only work if configurable is set to true in the first place, meaning it will always be true. It's called *logic*.*/
                if(listenersAllowed){
                    Object.defineProperty(propertyContainer,methodArray[0].toString(),{value:{[metadataNames.type.name]:"method",[metadataNames.allowListeners.name]:true,[metadataNames.listeners.name]:[],[metadataNames.value.name]:methodArray[1]},enumerable:true,configurable:reConfigurable});
                    Object.defineProperty(propertyContainer[methodArray[0]],metadataNames.setter.name,{
                        enumerable:true,
                        configurable:true,
                        set: function(value){
                            this[metadataNames.listeners.name].forEach(v => {
                                /*Calls the listener and passes in the new value (because it's a method it passes the array of arguments in) as the first argument, the old value as the second argument and the property type as the third.*/
                                v(this[metadataNames.type.name],value);
                            });
                            /*Since it's a method it fires the event listener with just the value and type. Then it will call the function with an array containing the arguments.*/
                            const res = this[metadataNames.value.name](...value);
                            value.push(res);
                        }
                    });
                }
                else{
                    Object.defineProperty(propertyContainer,methodArray[0].toString(),{value:{[metadataNames.type.name]:"method",[metadataNames.allowListeners.name]:false,[metadataNames.value.name]:methodArray[1]},enumerable:true,configurable:reConfigurable});
                }
            }
            catch(err){
                if(modes.strictMode){
                    throw new TypeError("Attempted to re-define a method that is not configured to do so.");
                }
            }
        }
        return propertyContainer[methodArray[0]];
    };
    CLIp.ChangeObjectletAccessibility = (objectlet, accessibility) => {
        preRoutine(objectlet, true);
        if("object"!== typeof objectlet && !objectlet[metadataNames.type.name]){
            throw new TypeError(`Parameter "objectlet" (argument 1) is not an objectlet that has a property accessiblity mode.`);
        }
        if(accessibility !== "read-only" && accessibility !== "read-write"){
            throw new InitializationError(`Parameter "accessibility" (argument 2) is not a string with either the value "read-only" or read-write"`);
        }
        if(!objectlet[metadataNames.propertyAccessibility.name]){
            throw new InitializationError(`Parameter "objectlet" (argument 1) is not set with a property accessibility mode.`);
        }
        objectlet[metadataNames.propertyAccessibility.name] = accessibility;
    };
    CLIp.LockCommandlet = commandlet => {
        preRoutine();
        /*WARNING: CANNOT BE UNDONE!!!*/
        if("object" !== typeof commandlet && !commandlet[metadataNames.type.name]){
            throw new TypeError(`Parameter "commandlet" (argument 1) is not an object and/or is not a valid commandlet.`);
        }
        if(commandlet[metadataNames.type.name] === "main-object" || commandlet[metadataNames.type.name] === "property-container" || commandlet[metadataNames.type.name] === "clip-help"){
            throw new InitializationError(`Cannot perform "CLIp.LockCommandlet" on a property container/main property container. Use "CLIp.SealCommander()" instead.`);
        }
        /*It's already locked.*/
        if(commandlet[metadataNames.locked.name]){
            return commandlet;
        }
        commandlet[metadataNames.locked.name] = true;
        Object.freeze(commandlet);
        return commandlet;
    };
    CLIp.SealCommander = commander => {
        /*WARNING: CANNOT BE UNDONE!!!*/
        preRoutine();
        if("object" !== typeof commander && !commander[metadataNames.type.name]){
            throw new TypeError(`Parameter "commandlet" (argument 1) is not an object and/or is not a valid commandlet.`);
        }
        if(commander[metadataNames.type.name] !== "main-object" && commander[metadataNames.type.name] !== "property-container" && commander[metadataNames.type.name] !== "clip-help"){
            throw new InitializationError(`Cannot perform CLIp.SealCommander on a commandlet. Use "CLIp.LockCommandlet()" instead.`);
        }
        /*It's already locked.*/
        if(commander[metadataNames.sealed.name]){
            return commander;
        }
        commander[metadataNames.sealed.name] = true;
        Object.freeze(commander);
        return commander;
    };
    CLIp.BindRestrictingValues = (values, objectlet) => {
        preRoutine(objectlet, true);
        /*Takes in an array of values containing an array for each desired value allowed containing the value at the 0th index and an array of the allowed types it can take on at the 1st index.*/
        /*Restricting values will be prioritized over restricting types.*/
        const invalNestedArray = (i) => {
            throw new InitializationError(`Parameter "values" (argument 1) contains an invalid value that is not an array or is an empty array at the ${i}th index. The value should be an array containing a single allowed value and an array containing the allowed types for that value.`);
        };
        /*For neatness (printing an array doesn't give spaces between the commas.*/
        const fAllowedDataTypes = allowedDataTypes.reduce((prev,cur) => prev + `, ${cur}`);
        if(!Array.isArray(values)){
            throw new TypeError(`Parameter "values" (argument 1) is not a valid array containing the allowed values and an array of their their types.`);
        }
        if("[object Object]" !== Object.prototype.toString.call(objectlet)){
            throw new TypeError(`Parameter "objectlet" (argument 2) is not a valid object representing the objectlet to bind restrictive values to.`);
        }
        if(!objectlet[metadataNames.allowedValues.name]){
            throw new InitializationError(`Objectlet does not provide access to an allowed values object rendering it not applicable for allowed values.`);
        }
        if(objectlet[metadataNames.propertyAccessibility.name] === "read-only"){
            throw new InitializationError("Objectlet is read-only invalidating the ability to bind restricting values on.");
        }
        values.forEach((v,i) => {
            if(!Array.isArray(v)){
                invalNestedArray(i);
            }
            if(!v[0]){
                invalNestedArray(i);
            }
            if(!v[1]){
                invalNestedArray(i);
            }
            /*If the length is 0 it will be falsely. The IF statement will also execute if "v[1]" isn't an array*/
            if(!Array.isArray(v[1]) || !v[1].length){
                invalNestedArray(i);
            }
            v[1].forEach(v => {
                /*"all" means that it accepts all of the types.*/
                if(allowedDataTypes.filter(val => val === v).length < 1 && v[1] !== "all"){
                    throw new TypeError(`Invalid data type "${v[0]}". Allowed data types are: ${fAllowedDataTypes} as well as "all".`);
                }
            });
        });
        if(!objectlet[metadataNames.allowedValues.name]){
            throw new InitializationError(`Parameter "objectlet" (argument 2) is not a valid objectlet and/or is not capable of binding restricting values to.`);
        }
        objectlet[metadataNames.allowedValues.name] = values;
    };
    CLIp.BindRestrictingTypes = (types,objectlet) => {
        preRoutine(objectlet, true);
        /*Takes in an array of allowed types, as well as an optional object with a key named "default_type" and a value of the default type to convert to.*/
        /*Note that allowed values and their types WILL override the allowed types, regardless of whether or not the types of the allowed values correspond to the allowed types or not.*/
        const fAllowedDataTypes = allowedDataTypes.reduce((prev,cur) => prev + `, ${cur}`);
        if(!Array.isArray(types)){
            throw new TypeError(`Parameter "types" (argument 1) is not a valid array containing the allowed types and an optional object with a key of "default_type" and a value of the default type to convert to.`);
        }
        if("[object Object]" !== Object.prototype.toString.call(objectlet)){
            throw new TypeError(`Parameter "objectlet" (argument 2) is not a valid object representing the objectlet to bind restrictive types to.`);
        }
        if(!objectlet[metadataNames.allowedTypes.name]){
            throw new InitializationError(`Objectlet does not provide access to an allowed types object rendering it not applicable for allowed types.`);
        }
        if(objectlet[metadataNames.propertyAccessibility.name] === "read-only"){
            throw new InitializationError("Objectlet is read-only invalidating the ability to bind restricting types on.");
        }
        if(!types.length){
            throw new InitializationError(`The types array must include one valid type.`);
        }
        types.forEach(v => {
            /*It's most likely going to be the default object specifier.*/
            if("object" === typeof v){
                if("undefined" === typeof v.default_type){
                    throw new TypeError(`Parameter "types" (argument 1) contains an object that doesn't have a key named "default_value". If an object is present it should have a key name of "default_type" and contain the default type to convert to.`);
                }
                else if(allowedDataTypes.filter(val => val === v.default_type).length < 1 && v.default_type !== "all"){
                    throw new TypeError(`Invalid data type "${v.default_type}". Allowed data types are: ${fAllowedDataTypes} as well as "all".`);
                }
            }
            else{
                /*"all" means that it accepts all of the types.*/
                if(allowedDataTypes.filter(val => val === v).length < 1 && v !== "all"){
                    throw new TypeError(`Invalid data type "${v}". Allowed data types are: ${fAllowedDataTypes} as well as "all".`);
                }
            }
        });
        objectlet[metadataNames.allowedTypes.name] = types;
    };
    /*Doesn't follow restrictions like allowed values/types. It DOES however check if the objectlet is a property/method and/or if it is locked (locked is different from readonly in that locked is internally sealed by JavaScript and can't be changed no matter what). Returns an array with the boolean true and the result of the property value change/method call if the function executed successfully, or an array of the boolean false and the reason if the function failed to execute (probably due to an objectlet being locked).*/
    CLIp.ChangeObjectletValue = (objectlet,value,triggerListeners = false) => {
        /*It will return the value unless it is a method without a setter. It will instead return the result of the setter.*/
        if("boolean" !== typeof triggerListeners){
            throw new TypeError(`Parameter "triggerListeners" (argument 3) is set but not of type "boolean".`);
        }
        if("object" === typeof objectlet[metadataNames.type.name] || (objectlet[metadataNames.type.name] !== "property" && objectlet[metadataNames.type.name] !== "method")){
            throw new TypeError(`Parameter "objectlet" (argument 1) is not a valid objectlet or is a commander.`);
        }
        if(objectlet[metadataNames.locked.name]){
            return [false, "locked"];
        }
        if(objectlet[metadataNames.type.name] === "property"){
            if("function" === typeof Object.getOwnPropertyDescriptor(objectlet,metadataNames.setter.name) && triggerListeners){
                objectlet[metadataNames.setter.name] = value;
                return [true, value];
            }
            else{
                objectlet[metadataNames.value.name] = value;
                return [true, value];
            }
        }
        else{
            if("function" === typeof Object.getOwnPropertyDescriptor(objectlet,metadataNames.setter.name) && triggerListeners){
                const arg = [value];
                objectlet[metadataNames.setter.name] = arg;
                return [true, arg[1]];
            }
            else{
                return [true, objectlet[metadataNames.value.name](value)];
            }
        }
    };
    CLIp.ReturnRoot = () => {
        preRoutine();
        return objList;
    };
    CLIp.GetFromPath = async statement => {
        preRoutine();
        if("undefined" === typeof statement){
            throw new TypeError(`Parameter "statement" (argument 1) is not of type "string".`);
        }
        const parentPropArr = [];
        let isInvalidated = false;
        let objectletFound = false;
        const lex = new LexicalAnalyzer();
        lex.InitializeTokens("\\","\"",":",":","-",">",";","<",">","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_");
        const resultArr = lex.Parse(statement,true);
        await CLIp.CheckCommandLegality(statement).catch(() => {
            isInvalidated = true;
        });
        resultArr.forEach((v) => {
            /*Values are considered objectlets, so check if it's on the left-hand side of the setter (because then it actually IS an objectlet).*/
            if(v.type === "objectlet"){
                parentPropArr.push(v.value);
            }
            else if(v.type === "string"){
                isInvalidated = true;
            }
        });
        let objProp = objList;
        parentPropArr.forEach((v,i) => {
            if(modes.strictCommandMode === false){
                for(let indx in objProp){
                    if(indx.toLowerCase() === v.toLowerCase()){
                        parentPropArr[i] = indx;
                    }
                }
            }
            if("undefined" !== typeof objProp[parentPropArr[i]]){
                objProp = objProp[parentPropArr[i]];
                objectletFound = true;
            }
            else{
                objectletFound = false;
            }
        });
        if(isInvalidated || !objectletFound){
            return false;
        }
        return objProp;
    };
    CLIp.ReturnMetadata = objectlet => {
        preRoutine();
        if("undefined" === typeof objectlet){
            throw new TypeError(`Parameter "objectlet" (argument 1) is not defined.`);
        }
        if(!objectlet[metadataNames.type.name]){
            throw new TypeError(`Parameter "objectlet" (argument 1) is not a valid objectlet.`);
        }
        const returnValue = {};
        const metadata = [];
        const names = [];
        for(let prop in metadataNames){
            names.push(prop);
            metadata.push(objectlet[metadataNames[prop].name]);
        }
        metadata.forEach((v, i) => {
            if("undefined" !== typeof v){
                returnValue[names[i]] = v;
            }
        });
        return returnValue;
    };
    CLIp.BindListener = (objectlet,callback,replaceSameListenerHandler) => {
        preRoutine(objectlet, true);
        if("undefined" === typeof objectlet) throw new TypeError(`Parameter "objectlet" (argument 1) is not defined.`);
        if("undefined" === typeof callback) throw new TypeError(`Parameter "callback" (argument 2) is not defined.`);
        if("[object Object]" !== Object.prototype.toString.call(objectlet)) throw new TypeError(`Parameter "objectlet" (argument 1) is not an object.`);
        if("function" !== typeof callback) throw new TypeError(`Parameter "callback" (argument 2) is not a function.`);
        if(objectlet[metadataNames.type.name] === "property-container" || objectlet[metadataNames.type.name] === "main-object") throw new InitializationError(`Cannot add a listener to an objectlet with a type of "property-container" or "main-object".`);
        if(objectlet[metadataNames.type.name] !== "property" && objectlet[metadataNames.type.name] !== "method") throw new InitializationError("Cannot add a listener to an objectlet without a valid or non-existing type.");
        if("undefined" !== typeof replaceSameListenerHandler && "boolean" !== typeof replaceSameListenerHandler) throw new InitializationError(`Parameter "replaceSameListenerHandler" (argument 3) is set but not of type "boolean".`);
        if(objectlet[metadataNames.allowListeners.name] !== true && modes.strictMode === true) throw new InitializationError("Cannot add a listener to an objectlet not explicitly configured to do so in strict mode.");
        /*In strict mode that will save a lot of time and memory. Imagine waiting for a property to change that never will (lol).*/
        if(objectlet[metadataNames.propertyAccessibility.name] === "read-only" && modes.strictMode) throw new InitializationError(`Cannot add a listener to an objectlet with a property accessibility of "read-only" in strict mode.`);
        if("undefined" === typeof objectlet[metadataNames.listeners.name]){
            Object.defineProperty(objectlet,metadataNames.listeners.name,{value:[],enumerable:true});
        }
        let hasCallback = false;
        objectlet[metadataNames.listeners.name].forEach(v => {
            if(v === callback){
                if(modes.strictMode === true && !replaceSameListenerHandler){
                    throw new InitializationError(`Cannot declare a listener on the property/method in strict mode because another listener of the same function exists and "replaceSameListenerHandler" is not set to true.`);
                }
                hasCallback = true;
            }
        });
        /*Make sure it has a setter.*/
        if("undefined" === typeof Object.getOwnPropertyDescriptor(objectlet,metadataNames.setter.name)){
            if(objectlet[metadataNames.type.name] === "property"){
                Object.defineProperty(objectlet,metadataNames.setter.name,{
                    enumerable:true,
                    configurable:true,
                    set: function(value){
                        const oldVal = this[metadataNames.value.name];
                        /*Since it's a property we just set the value. Nothing more to it!*/
                        let err;
                        try{
                            this[metadataNames.value.name] = value;
                        }
                        catch(error){
                            err = error;
                        }
                        this[metadataNames.listeners.name].forEach((v) => {
                            /*Calls the listener and passes in the type as the first argument, the new value as the second, and the current (before being changed) value as the third - as well as an error argument that will return an error if an error occurs.*/
                            v(this[metadataNames.type.name],value,oldVal,err);
                        });
                    }
                });
            }
            else if(objectlet[metadataNames.type.name] === "method"){
                Object.defineProperty(objectlet,metadataNames.setter.name,{
                    enumerable:true,
                    configurable:true,
                    set: function(value){
                        this[metadataNames.listeners.name].forEach(v => {
                            /*Calls the listener and passes in the new value (because it's a method it passes the array of arguments in) as the first argument, the old value as the second argument and the property type as the third.*/
                            v(this[metadataNames.type.name],value);
                        });
                        /*Since it's a method it fires the event listener with just the value and type. Then it will call the function with an array containing the arguments.*/
                        const res = this[metadataNames.value.name](...value);
                        value.push(res);
                    }
                });
            }
        }
        if(hasCallback && replaceSameListenerHandler){
            let callbackIndex = objectlet[metadataNames.listeners.name].indexOf(callback);
            objectlet[metadataNames.listeners.name][callbackIndex] = callback;
            return objectlet[metadataNames.listeners.name];
        }
        else if(!replaceSameListenerHandler && hasCallback){
            /*It won't do anything if "replaceSameListenerHandler" is set to false and strict mode is not enabled. That's why I highly recommend you have strict mode enabled. It may be a pain in the... you-know-what, but it helps with your code neatness and efficiency overall in the long-run.*/
            return objectlet[metadataNames.listeners.name];
        }
        objectlet[metadataNames.listeners.name].push(callback);
        return objectlet[metadataNames.listeners.name];
    };
    CLIp.RemoveListener = (objectlet,callback) => {
        preRoutine(objectlet, true);
        if("undefined" === typeof objectlet) throw new TypeError(`Parameter "objectlet" (argument 1) is not defined.`);
        if("undefined" === typeof callback) throw new TypeError(`Parameter "callback" (argument 2) is not defined.`);
        if("[object Object]" !== Object.prototype.toString.call(objectlet)) throw new TypeError(`Parameter "objectlet" (argument 1) is not an object.`);
        if("function" !== typeof callback) throw new TypeError(`Parameter "callback" (argument 2) is not a function.`);
        if(objectlet[metadataNames.type.name] === "property-container" || objectlet[metadataNames.type.name] === "main-object") throw new InitializationError(`Cannot remove a listener to an objectlet with a type of "property-container" or "main-object".`);
        if(objectlet[metadataNames.type.name] !== "property" && objectlet[metadataNames.type.name] !== "method") throw new InitializationError("Cannot remove a listener to an objectlet without a valid or non-existing type.");
        if(objectlet[metadataNames.allowListeners.name] !== true && modes.strictMode === true) throw new InitializationError("Cannot remove a listener to an objectlet not explicitly configured to do so in strict mode.");
        if(objectlet[metadataNames.propertyAccessibility.name] === "read-only" && modes.strictMode) throw new InitializationError(`Cannot remove a listener to an objectlet with a property accessibility of "read-only" in strict mode.`);
        if(!objectlet[metadataNames.listeners.name]) return objectlet[metadataNames.listeners.name];
        let callbackIndx = objectlet[metadataNames.listeners.name].indexOf(callback);
        if(callbackIndx === -1 && modes.strictMode) throw new InitializationError("Cannot remove the listener because it doesn't exist!");
        if(callbackIndx === -1 && !modes.strictMode) return objectlet[metadataNames.listeners.name];
        objectlet[metadataNames.listeners.name].splice(callbackIndx, 1);
        return objectlet[metadataNames.listeners.name]; 
    };
    /*Basically checks the command syntax (if you want to check it yourself).*/
    CLIp.CheckCommandLegality = (command) => {
        preRoutine();
        if("string" !== typeof command) throw new TypeError(`Parameter "command" (argument 1) is not of type "string"`);
        return new Promise((res,rej) => {
            /*It's an empty string.*/
            if(!command.length) res(command);
            /*Types available:
                *escaped_char

                *string

                *objectlet

                *pointer

                *setter

                *argument_separator

                *open_behavior_block_failure

                *close_behavior_block_failure

                *behavior_block

                *unknown_token

                *unclosed_string

                *unclosed_behavior_block
            */
            const lex = new LexicalAnalyzer();
            lex.InitializeTokens("\\","\"",":",":","-",">",";","<",">","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_");
            const resultArr = lex.Parse(command);
            let lastOperator = "";
            let setterFound = false;
            let stringAfterSetter = false;
            let objectletAfterSetter = false;
            resultArr.forEach((v) => {
                if(v.type === "unknown_token"){
                    rej(new SyntaxError(`Unknown token "${v.value}". Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "escaped_char" && !setterFound){
                    rej(new SyntaxError(`Unexpected escape character on the left-hand side of the setter. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "pointer" && lastOperator === "pointer"){
                    rej(new SyntaxError(`Unexpected pointer, expecting objectlet. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "pointer" && lastOperator !== "objectlet" && lastOperator !== "behavior_block"){
                    rej(new SyntaxError(`Unexpected token before pointer, expecting objectlet but got ${lastOperator} instead. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "setter" && lastOperator === "setter"){
                    rej(new SyntaxError(`Unexpected setter, expected value. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "setter" && lastOperator !== "objectlet" && lastOperator !== "behavior_block"){
                    rej(new SyntaxError(`Unexpected token before setter, expecting objectlet but got ${lastOperator} instead. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "argument_separator" && lastOperator === "argument_separator"){
                    rej(new SyntaxError(`Unexpected argument separator, expected value. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "behavior_block" && lastOperator === "pointer"){
                    rej(new SyntaxError(`Unexpected behavior block, expected objectlet. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(lastOperator === "behavior_block" && v.type !== "pointer" && v.type !== "setter" && v.type !== "argument_separator"){
                    rej(new SyntaxError(`Unexpected token "${v.value}", expecting an argument separator (or if it's a property - EOS (end of statement)) after behavior block. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "open_behavior_block_failure"){
                    rej(new SyntaxError(`Unexpected behavior block opening operator. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "close_behavior_block_failure"){
                    rej(new SyntaxError(`Unexpected type declaration closing operator. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "unclosed_string"){
                    rej(new SyntaxError(`Unclosed string. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "unclosed_behavior_block"){
                    rej(new SyntaxError(`Unclosed behavior block. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "behavior_block" && !setterFound){
                    rej(new SyntaxError(`Cannot use behavior blocks on left-hand side of setter. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "pointer" && setterFound){
                    rej(new SyntaxError(`Cannot use pointers on the right-hand side of the setter. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "setter" && setterFound){
                    rej(new SyntaxError(`Cannot use a setter twice. Column number: ${v.column_numbers[0]}.`));
                    return;
                }
                else if(v.type === "string" && !setterFound){
                    rej(new SyntaxError(`Cannot use strings on the left-hand side of the setter. Column number: ${v.column_numbers[0]}.`));
                }
                else if(v.type === "string" && setterFound && objectletAfterSetter){
                    rej(new SyntaxError(`Unexpected raw value after string (cannot combine two ajacent values). Column number: ${v.column_numbers[0]}.`));
                }
                else if(v.type === "objectlet" && setterFound && stringAfterSetter){
                    rej(new SyntaxError(`Unexpected string after raw value (cannot combine two ajacent values). Column number: ${v.column_numbers[0]}.`));
                }
                /*I know I can omit the "setterFound" (since it will throw an error if it isn't on the setter side) but it makes more logical sense here and is easier to read.*/
                else if(v.type === "string" && setterFound){
                    stringAfterSetter = true;
                }
                else if(v.type === "objectlet" && setterFound){
                    objectletAfterSetter = true;
                }
                else if(v.type === "behavior_block"){
                    const tArr = v.value.split("");
                    tArr.shift();
                    tArr.pop();
                    /*Because we shift and pop the "<" and ">" which is still counted as the start and ending column numbers.*/
                    let col = v.column_numbers[0] + 1;
                    let assignmentOpFound = false;
                    let isString = false;
                    tArr.forEach((t) => {
                        if(t === `"`){
                            isString = !isString;
                        }
                        if(t === ":" && !assignmentOpFound && !isString){
                            assignmentOpFound = true;
                        }
                        else if(t === ":" && assignmentOpFound && !isString){
                            rej(new SyntaxError(`Unexpected token ":". Column number: ${col}.`));
                            return;
                        }
                        ++col;
                    });
                    if(isString){
                        rej(new SyntaxError(`Unclosed string inside of behavior block. Column number: ${v.column_numbers[0]}.`));
                        return;
                    }
                    if(tArr.length < 1){
                        rej(new SyntaxError(`Cannot have empty behavior block. Column number: ${v.column_numbers[0]}.`));
                        return;
                    }
                }
                else if(v.type === "setter"){
                    setterFound = true;
                }
                lastOperator = v.type;
            });
            if(resultArr[resultArr.length - 1].type === "setter"){
                rej(new SyntaxError(`Expected a value after setter but found EOS (end of statement) instead.Column number: ${resultArr[resultArr.length - 1].column_numbers[0]}.`));
                return;
            }
            else if(resultArr[resultArr.length - 1].type === "pointer"){
                rej(new SyntaxError(`Expected an objectlet after pointer but found EOS (end of statement) instead. Column number: ${resultArr[resultArr.length - 1].column_numbers[0]}.`));
                return;
            }
            res(command);
        });
    };
    /*For autocomplete (most games might want this to make sure the user can see the commands relevant to what they are typing).*/
    CLIp.GetRelevantCommands = (command,properSyntaxEnforced,trimNum,recursionLimit,allowMetadata = true) => {
        preRoutine();
        /*WOW! Is this code here an un-hot mess or what?!*/
        if("undefined" === typeof command){
            throw new TypeError(`Parameter "command" (argument 1) is not defined.`);
        }
        if("string" !== typeof command){
            throw new TypeError(`Parameter "command" (argument 1) is not a valid string.`);
        }
        if("undefined" !== typeof properSyntaxEnforced && "boolean" !== typeof properSyntaxEnforced){
            throw new TypeError(`Parameter "properSyntaxEnforced" (argument 2) is set but is not of type "number".`);
        }
        if("undefined" !== typeof trimNum && "number" !== typeof trimNum){
            throw new TypeError(`Parameter "trimNum" (argument 3) is set but  not of type "number".`);
        }
        let recursionLimitSet = false;
        if(typeof recursionLimit === typeof 1) recursionLimitSet = true;
        /*If it's an empty string... (for now)*/
        if(command.length < 1) return Promise.resolve([1,[]]);
        const parseAndGet = cmd => {
            return new Promise((res,rej) => {
                /*This is where we store our results!*/
                /*We are basically recreating the parsing process but this time we are trying to find relevant commands.*/
                const parentPropArr = [];
                const lex = new LexicalAnalyzer();
                lex.InitializeTokens("\\","\"",":",":","-",">",";","<",">","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_");
                const resultArr = lex.Parse(cmd);
                let lastOperator = "";
                resultArr.forEach(v => {
                    if(v.type === "objectlet"){
                        parentPropArr.push(v.value);
                    }
                    else if(v.type === "unknown_token"){
                        /*The reason why I do this is because "Example:" is valid, they are just not finished typing it. However, typing "Example:value" isn't valid. It will give an unknown token of ":v". Of course, I could always "fix it" for the user, but I think it's a good idea to stop short for now... However, it seems unnecessary so I might make it correct the command the user is typing later on.*/
                        if(v.value !== ":" || (v.value === ":" && lastOperator === "pointer")){
                            res([]);
                        }
                    }
                    else if(v.type === "escaped_char"){
                        res([]);
                        return;
                    }
                    else if(v.type === "setter"){
                        /*They are going to do whatever with the objectlet, so let them do whatever! We aint building an entire word-guessing program, so who knows what they will put in!*/
                        res([]);
                    }
                    lastOperator = v.type;
                });
                const travelObj = (obj,startingName) => {
                    /*This does't change in this scope at least...*/
                    const scopeFromLast = "";
                    /*The objects that will still need to be indexed when it reaches the end of the recursive limit.*/
                    let objectsNeeded = 0;
                    /*The objects that were indexed at the end of the recursive limit.*/
                    let objectsAchieved = 0;
                    if("object" !== typeof obj){
                        throw new TypeError(`Parameter "obj" (argument 1) is not of type "object".`);
                    }
                    return new Promise((res,rej) => {
                        let objCol = [];
                        const treeCrawl = (obj,scope,startScope) => {
                            /*We are only searching for objects. Looks like they gave us a property/method, so let's return the name of the property/method instead (LOL for a long time this confused me since properties/methods weren't showing up in the autofinish results, and all along I programmed it not to without knowing it!).*/
                            /*It used to check if the value was truthly. Because falsly values are supported as valid values I can store, I have to instead check if it is a target objectlet or not (that took a lot of brainpower XD)*/
                            if((obj[metadataNames.type.name] !== "main-object" && obj[metadataNames.type.name] !== "property-container" && obj[metadataNames.type.name] !== "clip-help") && !allowMetadata){
                                objCol.push(scope);
                                res(objCol);
                                return;
                            }
                            /*So you get "Example::test" along with "Example::test::_CLIPObjectletType".*/
                            else if((obj[metadataNames.type.name] !== "main-object" && obj[metadataNames.type.name] !== "property-container" && obj[metadataNames.type.name] !== "clip-help") && allowMetadata){
                                objCol.push(scope);
                            }
                            /*For each property in the object.*/
                            for(let prop in obj){
                                /*If it's another object push that one onto the list to crawl (unless it's a property/method object) ._.*/
                                /*Objects that are named "value" are allowed to pass because they are an object but the metadata "value" is a string type.*/
                                if("[object Object]" === Object.prototype.toString.call(obj[prop]) && objectsNeeded === 0){
                                    if(recursionLimitSet && startScope.split("::").length >= recursionLimit && objectsNeeded === 0){
                                        /*Ahead of time. We know that this is going to be the last crawl, so we need to set the objectsNeeded ahead of time.*/
                                        for(const _ in obj[prop]){
                                            ++objectsNeeded;
                                        }
                                    }
                                    if(recursionLimitSet && startScope.split("::").length >= recursionLimit){
                                        /*The recursion is a bit weird if the recursion limit is 1. I don't want to go too in-depth to find out the problem so this will have to do for now.*/
                                        if(recursionLimit !== 1){
                                            treeCrawl(obj[prop],(scope + "::" + prop),(startScope + "::" + prop));
                                        }
                                        else{
                                            /*It's still an objectlet. Let's push it to the object collection show that it exists!*/
                                            objCol.push(scope + "::" + prop);
                                        }
                                    }
                                    else{
                                        treeCrawl(obj[prop],(scope + "::" + prop),(startScope + "::" + prop));
                                    }

                                }
                                else{
                                    if(!allowMetadata){
                                        /*Why do we need this, again?*/
                                        /*Oh, yeah! It keeps metadata on commanders from appearing when we don't want it to!*/

                                        /*Hmmm, we only need the things that exist for property containers, like the type and sealed meta.*/

                                        /*Wow, this function is surprisingly effective! I sure hope it's fast though...*/
                                        if(metadataNames.MetaTypeMatches(prop, obj[prop])) continue;

                                        // if(prop === metadataNames.type.name && "string" === typeof obj[prop]) continue;
                                        // if(prop === metadataNames.sealed.name && "boolean" === typeof obj[prop]) continue;
                                        // if(prop === metadataNames.value.name) continue;
                                        // if(prop === metadataNames.allowedValues.name && "[object Array]" === Object.prototype.toString.call(obj[prop])) continue;
                                        // if(prop === metadataNames.allowedTypes.name && "[object Array]" === Object.prototype.toString.call(obj[prop])) continue;
                                        // if(prop === metadataNames.propertyAccessibility.name && "string" === typeof obj[prop]) continue;
                                        // if(prop === metadataNames.allowListeners.name && "boolean" === typeof obj[prop]) continue;
                                        // if(prop === metadataNames.listeners.name && "[object Array]" === Object.prototype.toString.call(obj[prop])) continue;
                                        /*I wonder why it doesn't include the string type, too. Hmmmm.*/
                                        /*Oh, wait! The setter is a function, lol...*/
                                        // if(prop === metadataNames.setter.name && "function" === typeof obj[prop]) continue;
                                    }
                                    if(recursionLimitSet && startScope.split("::").length > recursionLimit && objectsNeeded > 0){
                                        objCol.push(scope + "::" + prop);
                                        ++objectsAchieved;
                                        if(objectsAchieved >= objectsNeeded){
                                            res(objCol);
                                        }
                                    }
                                    else{
                                        objCol.push(scope + "::" + prop);
                                        res(objCol);
                                    }
                                }
                            }
                        };
                        treeCrawl(obj,startingName,scopeFromLast);
                    });
                };
                let objVal = objList;
                parentPropArr.forEach((v,i) => {
                    if(i >= parentPropArr.length - 1){
                        if("undefined" === typeof objVal[v]){
                            /*They probably haven't finished typing. Let's try to see what it matches using regex.*/
                            /*If strict command mode is on then it has to be case-sensitive.*/
                            if(modes.strictCommandMode){
                                /*We use RegExp because we want to match all of the possible occurrences.*/
                                /*Quick note: You have to backslash the regex expression it because it's in a string (I have no idea why though...).*/
                                let regexMatch = new RegExp("\^" + escapeRegExp(v));
                                let matchResArr = [];
                                metaChecker: for(let prop in objVal){
                                    if(!allowMetadata){
                                        for(const metaProp in metadataNames){
                                            /*So far we don't need the commented out statement. Let's keep it there just in case it is needed again (I forget what it is for, so keep it here until I figure out what it was (or is) supposed to do.*/
                                            if(prop === metadataNames[metaProp].name /*&& "[object Object]" !== Object.prototype.toString.call(objVal[prop])*/) continue metaChecker;
                                        }
                                    }
                                    let match = regexMatch.test(prop);
                                    if(match){
                                        matchResArr.push(prop);
                                    }
                                }
                                let matchArr = [];
                                matchResArr.forEach(v => {
                                    for(let meta in metadataNames){
                                        if(metadataNames[meta].name === v && allowMetadata){
                                            matchArr.push(Array.from(parentPropArr).splice(0,parentPropArr.length - 1).join("::") + "::" + v);
                                            return;
                                        }
                                    }
                                    /*Woahohohoho, that's a lot for the second argument of the travelObj function. Let's break it down (so I remember lol).
                                    Step 1: It creates a new array (.from to clone the array).

                                    Step 2: It splices all but the last argument (because .splice() returns the spliced values, we want to work with that instead of just splicing the last value).

                                    Step 3: It joins the array with "::".

                                    Step 4: It adds "::" (for the value that is about to be added. It doesn't get added if the parent property array is only 1 in length because then it's a root object).

                                    Step 5: It adds v (which replaces the last value because the last value will be whatever the user is typing. Therefore, we want to make sure that it searches the actual value that was found with regex).
                                    */
                                    if(parentPropArr.length < 2){
                                        travelObj(objVal[v],parentPropArr.map(val => val).splice(0,parentPropArr.length - 1).join("::") + v).then(res => {
                                            res.forEach(v => {
                                                matchArr.push(v);
                                            });
                                        });
                                    }
                                    else{
                                        travelObj(objVal[v],parentPropArr.map(val => val).splice(0,parentPropArr.length - 1).join("::") + "::" + v).then(res => {
                                            res.forEach(v => {
                                                matchArr.push(v);
                                            });
                                        });
                                    }
                                });
                                res(matchArr);
                            }
                            else{
                                /*We use RegExp because we want to match all of the possible occurrences (and make it case-insensitive).*/
                                /*Quick note: You have to backslash the regex expression it because it's in a string (I have no idea why though...).*/
                                let regexMatch = new RegExp("\^" + escapeRegExp(v),"i");
                                let matchResArr = [];
                                metaChecker: for(let prop in objVal){
                                    if(!allowMetadata){
                                        for(const metaProp in metadataNames){
                                            /*So far we don't need the commented out statement. Let's keep it there just in case it is needed again (I forget what it is for, so keep it here until I figure out what it was (or is) supposed to do.*/
                                            if(prop === metadataNames[metaProp].name /*&& "[object Object]" !== Object.prototype.toString.call(objVal[prop])*/) continue metaChecker;
                                        }
                                    }
                                    let match = regexMatch.test(prop);
                                    if(match){
                                        matchResArr.push(prop);
                                    }
                                }
                                let matchArr = [];
                                matchResArr.forEach(v => {
                                    for(let meta in metadataNames){
                                        if(metadataNames[meta].name === v && allowMetadata){
                                            matchArr.push(parentPropArr.map(val => val).splice(0,parentPropArr.length - 1).join("::") + "::" + v);
                                            return;
                                        }
                                    }
                                    /*Woahohohoho, that's a lot for the second argument of the travelObj function. Let's break it down (so I remember lol).
                                    Step 1: It creates a new array (.from to clone the array).

                                    Step 2: It splices all but the last argument (because .splice() returns the spliced values, we want to work with that instead of just splicing the last value).

                                    Step 3: It joins the array with "::".

                                    Step 4: It adds "::" (for the value that is about to be added. It doesn't get added if the parent property array is only 1 in length because then it's a root object).

                                    Step 5: It adds v (which replaces the last value because the last value will be whatever the user is typing. Therefore, we want to make sure that it searches the actual value that was found with regex).
                                    */

                                    /*If the length is only 1 then don't add a "::" (it doesn't need it as the user is only typing the first objectlet).*/
                                    if(parentPropArr.length < 2){
                                        travelObj(objVal[v],Array.from(parentPropArr).splice(0,parentPropArr.length - 1).join("::") + v).then(res => {
                                            res.forEach(v => {
                                                matchArr.push(v);
                                            });
                                        });
                                    }
                                    else{
                                        travelObj(objVal[v],parentPropArr.map(val => val).splice(0,parentPropArr.length - 1).join("::") + "::" + v).then(res => {
                                            res.forEach(v => {
                                                matchArr.push(v);
                                            });
                                        });
                                    }
                                });
                                res(matchArr);
                            }
                        }
                        else{
                            /*IDK what it would be, but it aint holding anything here. Let's return nothing.*/
                            if("object" !== typeof objVal[v]){
                                res([]);
                                return;
                            }
                            travelObj(objVal[v],parentPropArr.join("::")).then(result => {
                                if(result.length === 1 && objVal[v][metadataNames.value.name]){
                                    /*If you were to type "Example::value::" it would leave out the "::" at the end because of the syntax ignorance feature (because a command may be partially typed, A.K.A the user isn't finished typing the command). While leaving out the "::" is important for suggesting an unfinished command that may have improper syntax, it is also important to show the user what they are typing if they are going off on their own track. When the user types "Example::value::", the "::" is left out at the end making it awkward because they might think it isn't registering their typing any more (depending on how the programmer implements the autofinish feature). Since there is nothing after "Example::value" ("value" isn't a commander), we should add the "::" because the user is using them and it would otherwise be excluded. It's hard to explain, but in a sense if there is only one suggestion and the user starts typing "::" after that suggestion it won't show. Just return the command so that the "::" shows (because it is returning what the user is typing, or whatever is put in).*/
                                    res([cmd]);
                                    return;
                                }
                                res(result);
                            });
                        }
                    }
                    else{
                        let isFound = false;
                        for(let indx in objVal){
                            if(indx.toLowerCase() === v.toLowerCase()){
                                /*To prevent case related errors (since JavaScript is case-sensitive if you were to write something in all lowercase but the property contained 1 uppercase letter it wouldn't find it and store it as undefined instead).*/
                                objVal = objVal[indx];
                                parentPropArr[i] = indx;
                                isFound = true;
                            }
                            else{
                                /*To prevent them from typing another commander/commandlet and then a value belonging to the parent's parent (E.g: "User::NotDefinedCommand::DefinedCommand". If "DefinedCommand" is defined but "NotDefinedCommand" is not it will ignore "NotDefinedCommand" and only store "User", thus making "User::NotDefinedCommand::DefinedCommand" come back as a determined "valid" result.)*/
                            }
                        }
                        /*If the object isn't found at all, then resolve with nothing as it doesn't exist!*/
                        if(!isFound){
                            res([]);
                        }
                    }
                });
            });
        };
        /*Returns an array with the 0th index either a 1 indicating success (or signaling that it DIDN'T fail), or a 0 to signal an error and the message at the 1st index.*/
        if(properSyntaxEnforced){
            return new Promise((res,rej) => {
                CLIp.CheckCommandLegality(command).then(cmd => {
                    parseAndGet(cmd).then(result => {
                        if(Array.isArray(result)){
                            if(trimNum){
                                result.splice(trimNum);
                                res([1,result]);
                            }
                            else{
                                res([1,result]);
                            }
                        }
                        else{
                            res([0,result]);
                        }
                    });
                }).catch(err => {
                    rej([0,err]);
                });
            });
        }
        else{
            return new Promise((res,rej) => {
                return parseAndGet(command).then(result => {
                    if(Array.isArray(result)){
                        if(trimNum){
                            result.splice(trimNum);
                            res([1,result]);
                        }
                        else{
                            res([1,result]);
                        }
                    }
                    else{
                        res([0,res]);
                    }
                }).catch(err => {
                    rej([0,err]);
                });
            });
        }
    };
    CLIp.ParseInput = command => {
        preRoutine();
        if("undefined" === typeof command){
            throw new TypeError(`Parameter "command" (argument 1) is not defined.`);
        }
        if(command.length < 1) return "";
        const parseStatementPtr = cmd => {
            return new Promise((res,rej) => {
                const parentPropArr = [];
                const parentPropArrCols = [];
                let setterFound = false;
                let setterCol = 0;
                const lex = new LexicalAnalyzer();
                lex.InitializeTokens("\\","\"",":",":","-",">",";","<",">","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_");
                const resultArr = lex.Parse(cmd);
                resultArr.forEach((v) => {
                    /*Values are considered objectlets, so check if it's on the left-hand side of the setter (because then it actually IS an objectlet).*/
                    if(v.type === "objectlet" && !setterFound){
                        parentPropArr.push(v.value);
                        parentPropArrCols.push(v.column_numbers[0]);
                    }
                    else if(v.type === "setter"){
                        setterFound = true;
                        setterCol = v.column_numbers[0];
                    }
                });
                if(!setterFound && modes.executionMode.value === "writeOnly"){
                    rej(new ParsetimeError(`Cannot omit setter operator in  "write-only" mode. Column number: ${setterCol}.`));
                    return;
                }
                else if(setterFound && modes.executionMode.value === "readOnly"){
                    rej(new ParsetimeError(`Cannot use setter operator in "read-only" mode. Column number: ${setterCol}.`));
                    return;
                }
                let objProp = objList;
                parentPropArr.forEach((v,i) => {
                    if(modes.strictCommandMode === false){
                        for(let indx in objProp){
                            if(indx.toLowerCase() === v.toLowerCase()){
                                parentPropArr[i] = indx;
                            }
                        }
                    }
                    if("undefined" === typeof objProp[parentPropArr[i]]){
                        /*Technically this should be at runtime, but hey compiled languages alert if something isn't defind during compile-time and not runtime so I guess it's fine.*/
                        rej(new ParsetimeError(`An undefined objectlet was found: "${v}". Column number: ${parentPropArrCols[i]}.`));
                        return;
                    }
                    else{
                        objProp = objProp[parentPropArr[i]];
                    }
                });
                res([cmd,objProp,parentPropArr[parentPropArr.length - 1]]);
            });
        };
        const parseStatementSetter = (cmd,prop,propName) => {
            return new Promise((res,rej) => {
                const lex = new LexicalAnalyzer();
                lex.InitializeTokens("\\","\"",":",":","-",">",";","<",">","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_");
                const resultArr = lex.Parse(cmd,false,true);
                const startCollecting = resultArr.length > 0;
                let isProperty = false;
                /*We need to check if the object is a method, property or main-object (or if the "type" even exists. If it doesn't it shouldn't be settable). Note that main objects are not changable or executable.*/
                if((prop[metadataNames.type.name] === "main-object" || prop[metadataNames.type.name] === "property-container" || prop[metadataNames.type.name] === "clip-help") && startCollecting){
                    rej(new ParsetimeError("Cannot change the value of or execute a main property container/property container."));
                }
                let isMeta = false;
                for(let i in metadataNames){
                    if(metadataNames[i].name === propName){
                        isMeta = true;
                    }
                }
                if("undefined" === typeof prop[metadataNames.type.name] && !isMeta){
                    rej(new ParsetimeError(`Target objectlet ${propName}'s type cannot be determined ("property","method", "property-container" or "main-object") meaning that it is not changable (Main objects and property-containers are not changable).`));
                    return;
                }
                if(prop[metadataNames.type.name] === "method"){
                    isProperty = false;
                }
                else{
                    isProperty = true;
                }
                /*The reason I do !startCollecting is because it returns "false" if a setter isn't found and I am checking if it is only asking for the return value, so I do reverse logic. Sure I could just have instead checked for if it wants to set something but that's just what I thought about first.*/
                if(isProperty){
                    let value = "";
                    /*By default it is string.*/
                    let type = "string";
                    const defaultVal = prop[metadataNames.allowedTypes.name] && Array.isArray(prop[metadataNames.allowedTypes.name]) ? prop[metadataNames.allowedTypes.name].filter(val => val.default_type) : [];
                    if(defaultVal.length > 0){
                        type = defaultVal[0].default_type;
                    }
                    resultArr.forEach((v) => {
                        if(v.type === "objectlet" || v.type === "string" || v.type === "escaped_char"){
                            value += v.value;
                        }
                        else if(v.type === "argument_separator"){
                            rej(new ParsetimeError(`Cannot use argument separators on a property. Column number: ${v.column_numbers[0]}.`));
                        }
                        else if(v.type === "behavior_block"){
                            let lhs = "";
                            let rhs = "";
                            let onLhs = true;
                            let isString = false;
                            let val = v.value.split("");
                            val.shift();
                            val.pop();
                            val.forEach((v) => {
                                if(v === `"`){
                                    isString = !isString;
                                }
                                else if(onLhs){
                                    if(v === ":" && !isString){
                                        onLhs = false;
                                    }
                                    else{
                                        lhs += v;
                                    }
                                }
                                else if(!onLhs){
                                    rhs += v;
                                }
                            });
                            if(lhs !== "type"){
                                rej(new ParsetimeError(`Unknown behavior block behavior "${lhs}". Column number: ${v.column_numbers[0]}.`));
                            }
                            if(allowedDataTypes.filter(val => val === rhs).length < 1){
                                rej(new ParsetimeError(`Unsupported type "${rhs}". Column number: ${v.column_numbers[0]}.`));
                            }
                            type = rhs;
                        }
                    });
                    res([cmd,prop,value,type,isProperty,!startCollecting,propName]);
                }
                else{
                    const args = [];
                    const types = [];
                    let escapeCharFound = false;
                    resultArr.forEach((v) => {
                        if((v.type === "objectlet" || v.type === "string") && !escapeCharFound){
                            args.push(v.value);
                        }
                        else if((v.type === "objectlet" || v.type === "string") && escapeCharFound){
                            args[args.length - 1] += v.value;
                            escapeCharFound = false;
                        }
                        else if(v.type === "escaped_char"){
                            /*Escaped characters should be added to the objectlets.*/
                            args[args.length - 1] += v.value;
                            escapeCharFound = true;
                        }
                        else if(v.type === "argument_separator"){
                            escapeCharFound = false;
                        }
                        else if(v.type === "behavior_block"){
                            let lhs = "";
                            let rhs = "";
                            let onLhs = true;
                            let isString = false;
                            let val = v.value.split("");
                            val.shift();
                            val.pop();
                            val.forEach((v) => {
                                if(v === `"`){
                                    isString = !isString;
                                }
                                else if(onLhs){
                                    if(v === ":" && !isString){
                                        onLhs = false;
                                    }
                                    else{
                                        lhs += v;
                                    }
                                }
                                else if(!onLhs){
                                    rhs += v;
                                }
                            });
                            if(lhs !== "type"){
                                rej(new ParsetimeError(`Unknown behavior block behavior "${lhs}". Column number: ${v.column_numbers[0]}.`));
                            }
                            if(allowedDataTypes.filter(val => val === rhs).length < 1){
                                rej(new ParsetimeError(`Unsupported type "${rhs}". Column number: ${v.column_numbers[0]}.`));
                            }
                            types.push(rhs);
                        }
                    });
                    /*The default is string.*/
                    if(types.length < 1){
                        for(let i = 0, length = args.length;i<length;++i){
                            types.push("string");
                        }
                    }
                    res([cmd,prop,args,types,isProperty,!startCollecting,propName]);
                }
            });
        };
        const execStatement = (cmd,prop,val,vType,isProp,returnValueOnly,propName) => {
            /*It returns a promise which resolves to an array containing the objectlet type, the type of the result and the result..*/
            return new Promise((res,rej) => {
                if(prop[metadataNames.locked.name] && !returnValueOnly && prop[metadataNames.type.name] === "property"){
                    rej(new ParsetimeError("Cannot change the value of a locked objectlet."));
                    return;
                }
                try{
                    /*To stop the execution I throw a string which won't necessarily show up because the promise was already rejected (it just stops the rest of the code from executing).*/
                    const typeConversion = () => {
                        /*By default "value" is an empty string.*/
                        if(vType){
                            /*Aight, now for the inferring!*/
                            if(vType === "infer"){
                                /*Oh boi, we have to work with what they give us...*/
                                if(prop[metadataNames.allowedValues.name].length > 1){
                                    let indxForType = 0;
                                    prop[metadataNames.allowedValues.name].filter((allowedVal,indx) => {
                                        if(allowedVal[0].toLowerCase() === val.toLowerCase()){
                                            indxForType = indx;
                                        }
                                    });
                                    const typeForValue = prop[metadataNames.allowedValues.name][indxForType][1];
                                    typeForValue.forEach(v => {
                                        if(v === "null"){
                                            val = null;
                                        }
                                        else if(v === "undefined"){
                                            val = void 0;
                                        }
                                        else if(v === "NaN"){
                                            val = NaN;
                                        }
                                        else if(!Number.isNaN(Number(v))){
                                            val = Number(val);
                                        }
                                    });
                                    /*Oh, boy. The property doesn't allow strings and you for some reason the value cannot be converted to an allowed type! I wonder how this could happen? Most likely the programmer entered in a value that was supposed to be of number type but the value wasn't a number (NaN).*/
                                    if("string" === typeof val && !typeForValue.includes("string")){
                                        rej(new RuntimeError("Cannot convert value's type to an allowed type - the type of the value does not match any of the allowed types for the allowed value."));
                                        throw "";
                                    }
                                }
                                else if(prop[metadataNames.allowedTypes.name].length > 1){
                                    prop[metadataNames.allowedTypes.name].forEach(v => {
                                        if(v === "null"){
                                            val = null;
                                        }
                                        else if(v === "undefined"){
                                            val = void 0;
                                        }
                                        else if(v === "NaN"){
                                            val = NaN;
                                        }
                                        else if(!Number.isNaN(Number(v))){
                                            val = Number(val);
                                        }
                                    });
                                }
                                else{
                                    if(val === "null"){
                                        val = null;
                                    }
                                    else if(val === "undefined"){
                                        val = void 0;
                                    }
                                    else if(val === "NaN"){
                                        val = NaN;
                                    }
                                    else if(!Number.isNaN(Number(val))){
                                        val = Number(val);
                                    }
                                }
                            }
                            else if(vType === "null"){
                                val = null;
                            }
                            else if(vType === "undefined"){
                                val = void 0;
                            }
                            else if(vType === "NaN"){
                                val = NaN;
                            }
                            else if(vType === "number"){
                                if(Number.isNaN(Number(val))){
                                    rej(new RuntimeError(`Attempt to convert a "${val}" to a number failed. "${val}" is not a valid number.`));
                                    throw "";
                                }
                                else{
                                    val = Number(val);
                                }
                            }
                            else if(vType === "string"){
                                val = val.toString();
                            }
                        }
                    };
                    let isMeta = false;
                    for(let i in metadataNames){
                        if(metadataNames[i].name === propName){
                            isMeta = true;
                        }
                    }
                    let type = prop[metadataNames.type.name];
                    if(type === "method"){
                        type = "Executable Command";
                    }
                    else if(type === "property"){
                        if(prop[metadataNames.propertyAccessibility.name] && prop[metadataNames.propertyAccessibility.name] === "read-only"){
                            type = "Read-Only Value";
                        }
                        else{
                            type = "Changable Value";
                        }
                    }
                    else if(type === "main-object"){
                        type = "Main Property Container";
                    }
                    else if(type === "property-container"){
                        type = "Property Container";
                    }
                    else if(type === "clip-help"){
                        type = "Official CLIp help commands";
                    }
                    else{
                        type = "Unknown";
                    }
                    /*It's a main property container/property container ("Official CLIp help commands" is also a property container)*/
                    if(returnValueOnly && !isMeta){
                        if(type === "Property Container" || type === "Main Property Container" || type === "Official CLIp help commands"){
                            res([type,"object",JSON.stringify(prop)]);
                        }
                        else{
                            res([type,typeof prop[metadataNames.value.name],prop[metadataNames.value.name]]);
                        }

                    }
                    else if(!isMeta){
                        /*Check if target objectlet has restricting types*/
                        if(prop[metadataNames.allowedTypes.name] && prop[metadataNames.allowedTypes.name].length > 0){
                            /*Less typing ;)*/
                            const allowedTypes = prop[metadataNames.allowedTypes.name];
                            if(allowedTypes.filter(val => val === vType).length < 1 && !allowedTypes.includes("all")){
                                const typesExcluding = prop[metadataNames.allowedTypes.name];
                                /*Get rid of the default value as we don't want to display that in there!*/
                                typesExcluding.forEach((t, i) => {
                                    if(t.default_type){
                                        typesExcluding.splice(i,1);
                                    }
                                });
                                rej(new RuntimeError(`Cannot set property's value to "${val}" with type "${vType}" because it violates the allowed types for the property ("${typesExcluding}").`));
                                return;
                            }
                        }
                        /*Check if target objectlet has restricting values.*/
                        if(prop[metadataNames.allowedValues.name] && prop[metadataNames.allowedValues.name].length > 0){
                            if(prop[metadataNames.allowedValues.name].filter(allowedVal => {
                                if(modes.strictCommandMode === true){
                                    return allowedVal[0] === val;
                                }
                                else{
                                    return allowedVal[0].toLowerCase() === val.toLowerCase();
                                }
                            }).length < 1){
                                /*Because an array in string format doesn't indent between the commas (gotta make it look neat!).*/
                                /*On the first cycle it simply adds the current value (because it comes as an array the first time and then adds to a string the current value (which is always an array).*/
                                const allowedValsStr = prop[metadataNames.allowedValues.name].reduce((prev,cur) => prev === "" ? cur[0] : prev + `, ${cur[0]}`,"");
                                rej(new RuntimeError(`Cannot set property's value to "${val}" because it violates the allowed values for the property ("${allowedValsStr}").`));
                                return;
                            }
                            let indxForType = 0;
                            prop[metadataNames.allowedValues.name].filter((allowedVal,indx) => {
                                /*We don't have to check for strict command mode because an error would have already been thrown if it was not exactly the same matching value.*/
                                if(allowedVal[0].toLowerCase() === val.toLowerCase()){
                                    indxForType = indx;
                                }
                            });
                            const typeForValue = prop[metadataNames.allowedValues.name][indxForType][1];
                            /*"Infer" isn't a type but rather a special "command" that will trigger an interpreter to find the appropriate value to store the value as. "all" accepts ALL of the data types meaning that you are basically allowing anything (pretty self-explanatory).*/
                            if(typeForValue.filter(allowedVal => {
                                return allowedVal === vType;
                            }).length < 1 && !typeForValue.includes("all")){
                                /*Because an array in string format doesn't indent between the commas (gotta make it look neat!).*/
                                const allowedTypesStr = typeForValue.join(", ");
                                rej(new RuntimeError(`Cannot set property's value to "${val}" with type "${vType}" because it violates the allowed types for the specific value ("${allowedTypesStr}").`));
                                return;
                            }
                        }
                        let result;
                        if("undefined" !== typeof Object.getOwnPropertyDescriptor(prop,metadataNames.setter.name)){
                            if(isProp){
                                if(prop[metadataNames.propertyAccessibility.name] && prop[metadataNames.propertyAccessibility.name] === "read-only"){
                                    rej(new RuntimeError("Cannot change the property's value because it is read-only."));
                                    return;
                                }
                                typeConversion();
                                prop[metadataNames.setter.name] = val;
                                result = prop[metadataNames.value.name];
                            }
                            else{
                                /*Passes in an array that will later be executed by the setter.*/
                                const arg = [...val];
                                prop[metadataNames.setter.name] = arg;
                                result = arg[arg.length - 1];
                            }
                        }
                        else{
                            if(isProp){
                                if(prop[metadataNames.propertyAccessibility.name] && prop[metadataNames.propertyAccessibility.name] === "read-only"){
                                    rej(new RuntimeError("Cannot change the property because it is read-only."));
                                    return;
                                }
                                typeConversion();
                                result = prop[metadataNames.value.name] = val;
                            }
                            else{
                                const perIterRound = (i) => {
                                    if(vType[i]){
                                        /*Aight, now for the inferring!*/
                                        if(vType[i] === "infer"){
                                            if(val[i] === "null"){
                                                val[i] = null;
                                            }
                                            else if(val[i] === "undefined"){
                                                val[i] = void 0;
                                            }
                                            else if(val === "NaN"){
                                                val[i] = NaN;
                                            }
                                            else if(!Number.isNaN(Number(val))){
                                                val[i] = Number(val);
                                            }
                                        }
                                        else if(vType[i] === "null"){
                                            val[i] = null;
                                        }
                                        else if(vType[i] === "undefined"){
                                            val[i] = void 0;
                                        }
                                        else if(vType[i] === "NaN"){
                                            val[i] = NaN;
                                        }
                                        else if(vType[i] === "number"){
                                            if(Number.isNaN(Number(val[i]))){
                                                rej(new RuntimeError(`Attempt to convert a "${val[i]}" to a number failed. "${val[i]}" is not a valid number.`));
                                            }
                                            else{
                                                val[i] = Number(val[i]);
                                            }
                                        }
                                        else if(vType[i] === "string"){
                                            val[i] = val[i].toString();
                                        }
                                    }
                                };
                                if(val.length > 1){
                                    val.forEach((_,i) => {
                                        perIterRound(i);
                                    });
                                }
                                /*So arguments passed in with only type declarators actually work.*/
                                else if(vType.length > 1){
                                    vType.forEach((_,i) => {
                                        perIterRound(i);
                                    });
                                }
                                result = prop[metadataNames.value.name](...val);
                            }
                        }
                        res([type,typeof result,result]);
                    }
                    else{
                        /*The user is trying to access metadata!*/


                        /*The user is trying to change metadata! Hmmmm. This is a nono. Let's throw 'em an error >:D*/
                        if(!returnValueOnly){
                            throw new RuntimeError("Cannot change values of metadata.");
                        }
                        res(["Objectlet Metadata",typeof prop, prop]);
                    }
                }
                catch(err){
                    rej(err);
                }
            });
        };
        return new Promise((res,rej) => {
            CLIp.CheckCommandLegality(command).then(c => {
                return parseStatementPtr(c);
            }).then(([cmd,prop,propName]) => {
                return parseStatementSetter(cmd,prop,propName);
            }).then(([cmd,prop,val,type,isProp,returnValueOnly,propName]) => {
                return execStatement(cmd,prop,val,type,isProp,returnValueOnly,propName);
            }).then(result => {
                res(result);
            }).catch(err => {
                rej(err);
            });
        });
    };
})();
