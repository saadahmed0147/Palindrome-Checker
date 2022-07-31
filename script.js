var s = prompt("Enter string...: ");

function palindrome(s){
    let len = s.length;
    
    for(i = 0; i <= len/2; i++){
        if(s[i] == s[len - 1 - i]){
            return "It is palindrome!!!";
        }
        else{
            return "It is not palindrome!!!";
        }
    }
}

alert(palindrome(s));