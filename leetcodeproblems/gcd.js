var gcdOfStrings = function(str1, str2) {
   if(str1 + str2 !== str2 + str1) return ""

   function gcd(s,t) {
    if(t.length === 0) { return s }
    return gcd(t, s.slice(0,s.length%t.length))

   }
   return gcd(str1, str2);
   
    
};


// let s='ABCABCABC';
// let t='ABCABC';

// let result = s.slice(0,s.length%t.length);
// console.log((s.length%t.length));
// console.log(result);
// gcdOfStrings();