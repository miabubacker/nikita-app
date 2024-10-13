
import { useState } from "react";
const aob = [
    { framework: "React.JS", website: "Paypal" },
    { framework: "React.JS", website: "Tesla" },
    { framework: "Angular", website: "Google" },
    { framework: "Vue.JS", website: "Vue" },
    { framework: "Vue.JS", website: "Vue" },
    { framework: "Vue.JS", website: "Vue" },
    { framework: "Vue.JS", website: "Vue" },
    { framework: "JavaScript", website: "inblack67" },
  ];

  const op = (data, victim) => {
    //     // const obj = {};
    //     // data.forEach((e, i) => {
    //     //   obj[e[victim]] = (obj[e[victim]] || 0) + 1;
    //     // });
    //     // const ob = Object.keys(obj).map(
    //     //   (d) => (console.log("ss", d), { domain: d, count: obj[d] })
    //     // );
    //     // console.log(obj.Angular, ob);

    //     //type-2
    //     const obj={}
    //      data.forEach(({framework},)=>{
    //        if(obj[framework]){
    //         obj[framework]=obj[framework]+1
    //        }
    //        else{obj[framework]=1}
    //      })
    //       console.log(obj)

    //       // type 3
    const stobj = {};
    // data.forEach((el)=>{
    //   stobj[el[victim]]? stobj[el[victim]]=stobj[el[victim]]+1:stobj[el[victim]]=1
    // })
   
    // let s = Object.keys(stobj).map((d) => ({ dd: d, value: stobj[d] }));
    console.log("task 1", stobj);
  };
  op(aob, "framework");
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////
  const fruits = [
    { apple: 3, orange: 2, banana: 5 },
    { kivi: 3, csbs: 2, ciki: 5 },
    { apple: 3, cs: 2, ora: 5 },
  ];
  const fun = (pay) => {
    //     // const objs = {};
    //     // pay.forEach((data) => {
    //     //   for (let i in data) {
    //     //     if (objs[i]) {
    //     //       objs[i] = objs[i] + data[i];
    //     //     } else {
    //     //       objs[i] = data[i];
    //     //     }
    //     //   }
    //     // });
    //     // console.log(objs);

    //     //type 2
    //    const obj={}
    //       pay.forEach((value)=>{
    //         for(let keys in value){
    //            if(obj[keys]){
    // obj[keys]=obj[keys]+value[keys]
    //            }
    //             else{
    //               obj[keys]=value[keys]
    //             }
    //         }
    //       })
    //        console.log(obj)

    //        //type-3
    let obj = {};
    pay.forEach((el) => {
      // for (let keys in el) {
      //   obj[keys] = obj[keys] ? obj[keys] + el[keys] : el[keys];
      // }
for(let i in el){
  obj[i]? obj[i]=obj[i]+el[i]:obj[i]=el[i]
}
    });
    console.log("task2", obj);
  };

  fun(fruits);
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////

  //   // od num of index
  [...Array(6).keys()]
  //     // const ap = [...Array(6).keys()];
  //     // let s = [];
  //     // for (let i = 1; i <= ap.length; i++) {
  //     //   if (i % 2 !== 0) {
  //     //     s.push(i);
  //     //   }
  //     // }

  //     // type 2
  //      const arr=['aas',1,'wee',4,'ssddds',5]
  //     const ap = [...arr.keys()];
  //      const s=[]
  //      for(let i=0;i<ap.length;i++){
  //        if(ap[i]%2!==0){
  //          s.push(ap[i])
  //        }
  //      }
  //       console.log(s)

  //     console.log(ap);
  // ////////////////////////////////////////////////////////////////////////////////////////////////

  //   //   //longest word
  const sp = (sentece) => {
    //       // const words = sentece.split(" ");
    //       // let longword = "";
    //       // words.forEach((word) => {
    //       //   if (word.length > longword.length) {
    //       //     longword = word;
    //       //   }
    //       // });
    //       // console.log(longword);

    //       //type2
    let word = sentece.split(" ");
    let textlenth = "";

    word.forEach((text) => {
      if (text.length > textlenth.length) {
        textlenth = text;
      }
    });
    console.log("tast4", textlenth, word);
  };

  sp("hi a abubacker siddiquw  sbjd");
  sp("shd cdss daaaaaaaa cdd ssdd 5544545454545 ssd");
  //   //////////////////////////////////////////////////////////////////////////////////////////////////

  //   //   /// geometric
  //     const math = (arr) => {
  //       let ag1 = new Set();
  //       let geo1 = new Set();
  //       for (let i = 1; i < arr.length; i++) {
  //         let ag = arr[i] - arr[i - 1];
  // // console.log('s',arr[i] - arr[i - 1],arr[i] / arr[i - 1],arr[i],arr[i-1])
  //  const vps=[]
  //  vps.push(ag)
  //   // console.log(vps)
  //           ag1.add(ag)
  //         let geo = arr[i] / arr[i - 1];
  //         // geo1.push(geo);
  //         geo1.add(geo)
  //       }
  //       console.log(ag1,geo1)
  //       if(ag1.size===1) {return 'arthematic'}
  //       if(geo1.size===1) {return 'geomatric'}
  //        else return-1
  //     };
  //     console.log('geo',math([2, 4, 6, 8, 10]));
  //     console.log('geo',math([3, 9, 27]));
  //     console.log('geo',math([2,5,6,7]))
  //   // // ///////////////////////////////////////////////////////////////////////////////////////////////

  //   /// captial lette rin frst word
     let d='abu backer siddiq'
      let word=d.split(' ')
     let ops= word.map((data)=>data.charAt(0).toUpperCase()+data.slice(1)).join(" ")
      console.log('capes',ops)
  // //////////////////////////////////////////////////////////////////////////////////////////////////////

  //   //   // unique values
  const uniquetext = (text) => {
    let letter = text.split("");
    let s = letter.filter((value, index) => letter.indexOf(value) !== index);
    if (s.length) return false;
    else return true;
  };
  console.log(uniquetext("abcde"));
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //   // //array sum

  const sum = (arr) => {
    let values = arr.sort((a, b) => a - b);
    let maxnum = values[values.length - 1];
     console.log('maxnum',maxnum)
    let calc = 0;

    for (let i = 0; i < values.length - 1; i++) {
      calc += values[i];
    }
    if (maxnum === calc) return true;
    else return false;
  };
  console.log("sumnum", sum([1, 2, 4, 6, 13]));
  console.log("sumnum", sum([1, 2, 4, 34, 22]));

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////
  //    // unique in array of object
     let data=[{
      model:'iphone11',
      company:"apple"
     },
     {
      model:'tablet',
      company:"apple"
     },
     {
      model:'s seriess',
      company:"samsung"
     },
     {
      model:'5162',
      company:"dell"
     }
     ]
      const filterobjcet=()=>{
      let shop=data.map((data)=>data.company)
       let op= shop.filter((data,index)=>shop.indexOf(data)===index)
        console.log(op)
      }
       filterobjcet()
  // ////////////////////////////////////////////////////////////////////////////////////
  //   //  highest swap
  //   //   let a=10;
  //   //   let b=5;
  //   //   //  [b,a]= [a,b] type1
  //   //    let c= a+b
  //   //    b=c
  //   //    a=b+c
  //   //     console.log(a,b,c)
  // /////////////////////////////////////////////////////////////////////////////////////////////

  // /// anagram
  let ds = "anagram";
  let t = "nagaram";
  
  function fs(para) {
    let sp = para.split("");
    console.log('s',sp)
    sp.sort((a, b) => a.localeCompare(b));
     console.log('localcompare',sp)
    let vds = sp.join("");
    return vds;
  }
  console.log('ss',fs(ds) === fs(t));

  // /////////////////////////////////////////////////////////////////////////////////////

  //   // text repeat num

    let repeatnum=(numbers)=>{
    //  let returnvalue=numbers.reduce((acc,curnt,index)=>{
    // acc[curnt]= acc[curnt]?{...acc[curnt],amount:acc[curnt].amount+1}:{...acc[curnt],amount:1,}
    //  console.log(index)
    //   return acc
    //  },{})
    //   return returnvalue

    ///// type 2
     const objs={}
      let count=1
     numbers.forEach((num)=>
     {

      if(objs[num]){
        objs[num]= objs[num]+count
        console.log('check',num)
      }
       else{
        objs[num]=count
       }
    })
     console.log('text reapeat',objs)
   


  }
    console.log('reapetnum',repeatnum([5,5,2,2,8,8,8,10]))

  //   /////////////////////////////////////////////////////////////////////////////
    const zoho1 = { a: 1, b: 2, c: { d: 3, e: { f: 4 } }, t: { l: 11 } };
    function convertObjectToArray(obj) {
      return Object.entries(obj).map(([key, value]) => {
        if (typeof value === "object") {
          return [key, convertObjectToArray(value)];
        } else {
          return [key, value];
        }
      });
  
    }
    console.log('zoho1',convertObjectToArray(zoho1));

  // // /////////////////////////////////////////////////////////////////////////////////
    const zoho2 = "cs,dta+";
    const operator = ["-", "+", ","];
    const rearrange = (text) => {
      let removeopertors = text
        .split("")
        .filter((z) => !operator.includes(z))
        .reverse();
      const splitall = text.split("");
       
      for (let i = 0; i < splitall.length; i++) {
        if (operator.includes(splitall[i])) {
          removeopertors.splice(i, 0, splitall[i]);
        }
      }
      console.log(text,'to',removeopertors.join(""));
    };
    rearrange(zoho2);

  //   // //////////////////////////////////////
  //   // two sum value
  let num = [3, 2, 4,1];
  let target = 6;
  function cal(num, target) {
  //   for (let i = 0; i < num.length; i++) {
  //     // console.log("is", num[i]);
  //     for (let j = 0; j < i; j++) {
  //       console.log(num[i],num[j]);
  //       if (num[i] + num[j] === target) {
  //         return [i, j];
  //       }
  //     }
  // }
   for(let i=0;i<num.length;i++){
     for(let j=0;j<i;j++){
 if(num[i]+num[j]===true){
  return [num[i],num[j]]
 }
     }
   }
  //  for(let i=0;i<num.length;i++){
  //   for(let j=0;j<i;j++){
  //     console.log('ssss',num[i],num[j])
  //   }
  //  }
  }
  cal(num, target);

  // ////////////// factorial

   const fact=(num)=>{
  //   //  let op=1;
  //   //   for(let i=1;i<=num;i++){
  //   //  op*=i
  //   //   }
  //   //   console.log(op)

  //   //type2

     return num===0?1: num*fact(num-1)
   }
  console.log(fact(4))
  //////////////////////////////////////////////////

  const f = () => {
    console.log('dd',10);
    }

    console.log(f);
    console.log(f());
  /////////////////////////////////////////////////////////////

  // same key and same value in object
  const data1 = { a: 4, b: 4, c: 6, d: 8 };
  const data2 = { e: 4, a: 4, c: 6 };
  let resut = {};
  for (let pro in data1) {
    if (data1[pro] === data2[pro]) {
      resut[pro] = data1[pro];
    }
  }

  console.log('samekey and same value',resut);
  //////////////////////////////////////////////////////////
  const color = [
    "#e52b50",
    "#008080",
    "#dda0dd",
    "#800080",
    "#ff4500",
    "#00ff00",
    "#0000ff",
    "#ffd700",
    "#ff69b4",
    "#9400d3",
  ];
  const [colorsCotainer, setcolorsCotainer] = useState(0);

  const move = (dir, index) => {
    // if(dir==='left'){
    // colorsCotainer<0?setcolorsCotainer(color.length-1):setcolorsCotainer(colorsCotainer+1)
    // }
    //  if(dir==='right'){
    colorsCotainer >= color.length - 1
      ? setcolorsCotainer(0)
      : setcolorsCotainer(colorsCotainer + 1);
    //  }
  };
  /////////////////////////////////////////////////////////////
  const arr1 = ["apple", "banana", "potato", "tomato", "orange", "lemon"];
  const arr2 = ["Banana", "carrot", "benas", "potato", "Lichi"];

  const unique = arr1.filter((fru) => {
    let fruits = fru.toLowerCase();
    let checkingarray = [];
    arr2.forEach((fru) => {
      checkingarray.push(fru.toLowerCase());
    });
    return checkingarray.includes(fruits);
  });
  console.log(unique);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const arr11 = [{ firstname: "abu" }];
  const arr22 = [...arr11];
  arr22[0].firstname = "siddique"; /////////////// CHANGE pARENT OBEJCT ALSO
  arr22[0] = { firstname: "siddique" }; ////////// NOT CHNAGE parent object
  console.log(arr11);
  /////////////////////////////////
  const normalarr1 = [1, 2, 3];
  const normalarr2 = [...normalarr1];
  normalarr2.push("siddique");
  console.log(normalarr1, normalarr2);
  ////////////////
  const obj = { first: "abu" };
  const obj2 = { ...obj };
  obj2.first = "obj2change";
  console.log(obj, obj2);
  ///////////////////
  const [checkdata, setCheckdata] = useState([{ vappa: "vapa" }]);
  const changedata = () => {
    const vp = [...checkdata];
    vp[0] = { vappa: "vapppppa" };
    console.log(vp, checkdata);
  };
  changedata();

  //////////////////////////////////////////
    ///////// NUMBER REpeatnumber////////////
    let arry=[2,2,3,1,3,3,7,1]   
    const obj={}
   for(let i=0;i<arry.length;i++){
     obj[arry[i]]? obj[arry[i]]=obj[arry[i]]+1:obj[arry[i]]=1
   }
    console.log(obj)
 
    ///////////// check emty obj//////////////////////
     let objs={}
      console.log(Object.entries(objs).length>0?Object.entries(objs).map((data)=> data) :"not have value")
 ///////////////////////////////////////////////////////////////////
 ////////////////////////////////// changdirection used index//////////////
      const array=[1,23,4,5,6,7,89,11,23]
       const changdirection=(data,index)=>{
  const value=[...data]
   let newdata=[]
     for(let i=0;i<=value.length;i++){
    value.splice(i,i+=index)
     }
     for(let i=0;i<3;i++){
  newdata.push(data[i])
        }
 newdata.unshift(...value)
      console.log(newdata)
     
 //      let s=value.splice(index)
 //  value.unshift(...s)
 //       console.log(value)
       }
       changdirection(array,3)
/////////////////////////////////////
//////////// set new array with MAX,MIN,2NDMAX,2NDMIN
 //OP =6 1 5 2 4 3 

 let array = [1, 2, 3, 4, 5, 6];
 let max=[...array.sort((b,a)=>b-a)]
 let min=[...array.sort((b,a)=>a-b)]
let op=[]
 for(let i=0;i<array.length;i++){
op.push(min[i],max[i])

 }
  console.log(op.splice(0,array.length))
    

  ////////////// RIGHT TO CHECK That value  which Number are MAX VALUE
   OP=[17,5,2]
    const arr = [16, 17, 4, 3, 5, 2];
  const LargestNumberInArray = (arrayValue) => {
    let array = [...arrayValue];

    let storeValue = [];
    let currentValue = array[0];
     for(let i=2;i<num;i++){
       if(num%i===0)return false
       else return true
     }
    for (let i = 0; i <= array.length; i++) {
      if (array[i] > currentValue) {
        currentValue = array[i];
        storeValue.push(array[i]);
      }
      currentValue = array[i];
    }
    storeValue.push(array[array.length - 1]);
    console.log(storeValue);
  }
  

///////
  <div>
  <button
    onClick={() => {
      move("left");
    }}
  >
    left
  </button>
  <div
    style={{
      background: color[colorsCotainer],
      width: "100px",
      height: "100px",
    }}
    onClick={() => {
      move();
    }}
  ></div>
  <button
    onClick={() => {
      move("right");
    }}
  >
    right
  </button>
</div>