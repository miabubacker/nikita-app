

let Input="({[]}";
 function checkbrackets(bracket){
     let store=[]
     let  allbrackers={'(':')','{':'}','[':']'};
      let vs=bracket.split("");

      for(let value of vs){
         if(allbrackers[value]){
            store.push(allbrackers[value])
            console.log(store,'gg8')
         }
          
         else{
            if (store.pop() !== value) {
                return false;
            }
        }
      }
      return store.length === 0;
 }
console.log(checkbrackets(Input))
  
 let array = [1, [2, [3, { a: 4 }, [5, [6]]]]];

 function flattenAndTransform(arr) {
   const result = [];
   for (const item of arr) {
     if (Array.isArray(item)) {
       result.push(...flattenAndTransform(item));  // recursively flatten
     } else if (typeof item === 'object' && item !== null) {
       for (const [key, value] of Object.entries(item)) {
         result.push([key, value]);  // push key-value pair as [key, value]
       }
     } else {
       result.push(item);  // push primitive values directly
     }
   }
   return result;

 }
 
 let transformedArray = flattenAndTransform(array);
 console.log(transformedArray);
 





