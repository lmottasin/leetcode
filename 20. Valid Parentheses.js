/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !=0){
        return false
    }

    let stack = []


    for(let i =0 ; i< s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i])
        }
        else{
            if(stack.length == 0 ) return false;

            let stack_top = stack.pop()

            if(s[i] == ')' && stack_top != '('){
                return false
            }
            else if(s[i] == '}' && stack_top != '{'){
                return false
            }
            else if(s[i] == ']' && stack_top != '['){
                return false
            }
        }
    }

    if (stack.length == 0 ) return true
    else return false
};