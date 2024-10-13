import React, { useEffect } from "react";
import { Await, Route, Routes } from "react-router-dom";

import "./MainPage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FixedMade from "../Columns/FixedMade/FixedMade";
import Cards from "../Columns/Cards/Cards";
import { values } from "lodash";

export default function Mainpage(props) {
  const { MainPageActions, loading, hamburger } = props;
  useEffect(() => {
    setTimeout(() => {
      MainPageActions.loading();
    }, 2000);
  }, []);
  useEffect(() => {
    const v=setInterval(() => {
      console.log('setinterval')
      
    }, 2000);
    return clearInterval(v)
  }, []);
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
  

  const fruits = [
    { apple: 3, orange: 2, banana: 5 },
    { kivi: 3, csbs: 2, ciki: 5 },
    { apple: 3, cs: 2, ora: 5 },
  ];
  const op = (data, victim) => {
    const stobj = {};
    //  data.forEach(({framework})=>{
    //     return  stobj[framework]?stobj[framework]=stobj[framework]+1:stobj[framework]=1
    //  })
    
    // data.forEach((el) => {
    //   for (let keys in el) {
    //     stobj[keys]
    //       ? (stobj[keys] = stobj[keys] + el[keys])
    //       : (stobj[keys] = el[keys]);
    //   }
    // });
     data.forEach((values)=>{
       if(values.framework){
       stobj[values.framework]?stobj[values.framework]=stobj[values.framework]+1:stobj[values.framework]=1
       }
        else{
  for(let counts in values){
    stobj[counts]? (stobj[counts] = stobj[counts] + values[counts]): (stobj[counts] = values[counts]);
  }
        }
      
     })

    console.log (stobj);
  };
    op(aob, "framework");
    op(fruits);

  const sp = (sentece) => {
    let word = sentece.trim().split(" ");
    let textlenth = "";
    word.forEach((el) => {
      if (el.length > textlenth.length) {
        textlenth = el;
      }
    });
    console.log(textlenth,'textlength');
  };
  sp("hi a abubacker siddiquw  sbjd");
  sp("shd cdss daaaaaaaa cdd ssdd 5544545454545 ssd");
  // /// anagram
  let ds = "anagram";
  let t = "nagaram";

  function fs(para) {
    let sp = para.split("");
    console.log("s", ds.localeCompare(t));
    sp.sort((a, b) => a.localeCompare(b));
    console.log("localcompare", sp);
    let vds = sp.join("");
    return vds;
  }
  console.log("ss", fs(ds) === fs(t));

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
  console.log("zoho1", convertObjectToArray(zoho1));

  const arr = [16, 17, 4, 3, 5, 2];
  const largetsnum = (param) => {
    let newdata = param[0];
     const store=[]
    for (let i = 1; i <= param.length-1; i++) {
   if(param[i]>newdata){
    console.log('newdata',newdata,param[i])
     newdata=param[i]
      store.push(newdata)
   }
   else{
    console.log('newdata2',newdata)
    newdata=param[i]
   }

    }
console.log('store',store);
  };
  largetsnum(arr);
  /////////////   split by 3 of array
   let s=[1,4,5,67,5,7,8,9,0,22]
    let tored=[]
    for(let i=0;i<s.length;i+=3){
   let v=s.slice(i,i+3)
    tored.push(v)
    }
 console.log(tored,'tored')

 let vsp=[1,3]
  vsp.length=30
   vsp.splice(10,15,'abu')
  
   let x=10;
    // console.log('x1',x)
      x='abu'
      // console.log('x2',x)
        x=[1,2,3]
        console.log('x3',x)

   console.log(vsp,vsp.length)
//    console.log(a);
// console.log(b);
// var a = b = 5; /// error
 function dsv(){
    // console.log('hi')
 return [1,2,3,4,4]
 }
  const res= new dsv()
   console.log('res',res)


  function example() {
    if (true) {
      var x = 10;
      let x2='20'
    }

    console.log(x,'var'); // Outputs 10, even though x was declared inside the if block
  }
   example()

function counter(){
let count=0;
 return()=>count++
}
 let c=counter()
  console.log(c())
  console.log(c())
  console.log(c())
  console.log(c())


   const ninjaPromise = new Promise((resolve, reject) => {
    // Do some asynchronous operation
      if (/* operation is successful */ 1>3) {
       resolve('Here comes the success!');
       
      } 
      else {
       reject("Operation failed");
      }

  });
   console.log('sssss',ninjaPromise)

    // ninjaPromise.then((d)=>console.log(d))
   ninjaPromise.then(val=>console.log("avl",val)).catch((er)=>console.log('er',er))
    
  
   
    //  const fetchData = async () => {
 
    //     const response = [12,3,44]
    //     const data =response
    //     return data;  // Output: returns the fetched data
    // }
    // // (async()=>{
    // //   const rs= await fetchData()
    // //    console.log(rs)
    // // })()


  const fetchData = () => {
 return new Promise((resolve)=>resolve([1,2,44,]))
    //     const response = [12,3,44]
    //     const data =response
    //     return data;  // Output: returns the fetched data
    }
     async function vs(){
       let op= await fetchData()
    //  console.log(op)
      return op
     }
vs()
 console.log(vs())
  
  let vp=20;
   function foos(){
     console.log('inside',vp)
      var vp=10
      console.log('afterinside',vp)
   }
    console.log('outside',vp)
    foos()

     
     for(let i=1;i<=3;i++){
       setTimeout(()=>{
        console.log(i)
       },1000)
     }


   function dsvs(){

for(let i=0;i<10;i++){
//  console.log(bf,i)
}
if(true){
  var bf='bf'
  let bfr2='bfrw'
}
}
dsvs()       


  return (
    <React.Fragment>
      <section className={"MainPage_container "}>
        {loading ? (
          <>
            <Header {...props} />
            <Routes>
              <Route path="/" element={<Cards {...props} />} />
            </Routes>
            <Footer {...props} />
            {/* <FixedMade/> */}
          </>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </section>
    </React.Fragment>
  );
}
