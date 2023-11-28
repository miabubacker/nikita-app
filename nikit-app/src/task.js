// const data= ["9,5", "2,1", "3,2", "3,1", "2,2", "9,4", "1,4", "1,2", "6,1", "7,3", "1,1", "6,3", "6,2", "1,5", "8,5", "8,4", "7,1", "7,2"]
 const data=["0,0" , "0,1"]
  const  rectangle=(value)=>{
 const rowIndex=value.map((data)=>data.split(',')[0])
 const columnIndex=value.map((data)=>data.split(',')[1])
  let rows= rowIndex.filter((v,index)=>rowIndex.indexOf(v)!==index)
  let columns= columnIndex.filter((v,index)=>columnIndex.indexOf(v)!==index)
  let removeNotIncludedValue= rows.filter((data)=>!columns.includes(data))
   let filterDuplicateValue= removeNotIncludedValue.filter((v,index)=> removeNotIncludedValue.indexOf(v)===index)
console.log(filterDuplicateValue)

  }
   rectangle(data)