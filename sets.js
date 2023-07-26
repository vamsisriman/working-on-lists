List1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'];
List2=[ 'Adwait','Laxman','Amit', 'Adnan','Nitin','Gaurav'];

uniqueList1 = [];
uniqueList2 = [];
commonList = [];


for(let i = 0; i<List1.length;i++){
    if (List2.includes(List1[i]) === false){
        uniqueList1.push(List1[i]);
    }

}

for(let i = 0;i < List2.length; i++){
    if (List1.includes(List2[i])=== false){
        uniqueList2.push(List2[i]);
    }
}

for(let i = 0; i < List1.length; i++){
    if (List2.includes(List1[i]) === true){
        commonList.push(List1[i]);
    }
}





console.log(uniqueList1);
console.log(uniqueList2);
console.log(commonList);


