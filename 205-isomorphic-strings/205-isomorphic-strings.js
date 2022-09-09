/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


const s = "badc";
const t = "baba";

var isIsomorphic = function(s, t) {
    
    const mapForward = {};
    const mapReverse = {};
    
    if(s.length !== t.length) return false;
    
    for (let i=0; i < s.length; i++) {
        
        const a = s[i];
        const b = t[i];
        
        if(mapForward[a] === undefined && mapReverse[b] === undefined) {
            mapForward[a] = b;
            mapReverse[b] = a;
        } else if(mapForward[a] !== b && mapReverse[b] !== a){
            return false;
        }
        
    }
    
    return true;
    
};

isIsomorphic(s,t);