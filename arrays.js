//Sample data 
 var courses = [
               {
                 id: 15,
                 plan: 122,
                 description: 'Math',
                 ucas: 'hrree',
                 owner: 'math',
                 phone: '07444444',
                 allow_home: 'EAllowed',
                 allow_international: 'EAllowed',
                 offer: 'Yes',
                 additional: 'No'
               },
               {
                 id: 24,
                 plan: 123,
                 description: 'English',
                 ucas: 'maaa',
                 owner: 'english',
                 phone: '07333333',
                 allow_home: 'EAllowed',                 
                 allow_international: 'EAllowed',
                 offer: 'No',
                 additional: 'Yes'
                },
                {
                 id: 25,
                 plan: 124,
                 description: 'Polish',
                 ucas: 'loloooo',
                 owner: 'polish',
                 phone: '07555555',
                 allow_home: 'EAllowed',
                 allow_international: 'EAllowed',
                 offer: 'Yes',
                 additional: 'No'
                 },
                 {
                 id: 11,
                 plan: 12,                 
                 description: 'Med',
                 ucas: 'gggggg',
                 owner: 'med',
                 phone: '0755555',
                 allow_home: 'EAllowed',
                 allow_international: 'EAllowed',
                 offer: 'Yes',
                 additional: 'No'
                 }
     ];
    
 var coursesTwo = [
               {
                 id: 15,
                 plan: 122,
                 description: 'Maths',
                 ucas: 'hrree',
                 owner: 'math',
                 phone: '07444444',
                 allow_home: 'EAllowed',
                 allow_international: 'EAllowed',
                 offer: 'Yes',
                 additional: 'No'
               },
               {
                 id: 24,
                 plan: 123,
                 description: 'English',
                 ucas: 'maaa',
                 owner: 'english',
                 phone: '07333333',
                 allow_home: 'EAllowed',
                 allow_international: 'EAllowed',
                 offer: 'No',
                 additional: 'Yes'
                },
                {
                 id: 25,
                 plan: 1222,
                 description: 'Polish',
                 ucas: 'loloooo',
                 owner: 'polish',
                 phone: '07555555',
                 allow_home: 'EAllowed',
                 allow_international: 'ENo',
                 offer: 'Yes',
                 additional: 'No'
                 },
                 {
                 id: 11,
                 plan: 125,
                 description: 'Medicine',
                 ucas: 'hahaha',
                 owner: 'mxe',
                 phone: '0766666666',
                 allow_home: 'ENo',
                 allow_international: 'EAllowed',
                 offer: 'Yes',
                 additional: 'No'
                 }
     ];

  var coursesThree = [];
 // for (i = 0; i < courses.length; i++) {
 //     for (j=0; j < coursesTwo.length; j++) {
 //             if (courses[i].allow_international !== coursesTwo[j].allow_international) {
 //                 coursesThree.push(coursesTwo[j].id);
 //                } if (courses[i].allow_home !== coursesTwo[j].allow_home) {
 //                 coursesThree.push(coursesTwo[j].id);
 //                }
 //             } 
 //        }
//Compare the two arrays and check if they have the same id, if they do then compare the allow_home and allow_international if they are not the same then push into new array
 for (i = 0; i < courses.length; i++) {
     for (j=0; j < coursesTwo.length; j++) {
        if (courses[i].id === coursesTwo[j].id) {
             if (courses[i].allow_international !== coursesTwo[j].allow_international || courses[i].allow_home !== coursesTwo[j].allow_home) {
                 coursesThree.push(coursesTwo[j].id);
            } 
        } 
    }
}
//Removes duplicates from array
// function removeDuplicates(arr){
//     let  courses_array = []
//     for(i = 0; i < arr.length; i++){
//         if(courses_array.indexOf(arr[i]) == -1){
//             courses_array.push(arr[i])
//         }
//     }
//     return courses_array
// }
    

for (var i =0; i < courses.length; i++) {
    for (var j =0; j < coursesTwo.length; j++) {
        if(courses[i].id === coursesTwo[j].id) {
            if (coursesTwo[j].allow_international === EAllowed && courses[i].allow_international === ENo) {
                console.log(coursesTwo.description + "is open");
            }
            if (coursesTwo[j].allow_international === EAllowed && courses[i].allow_international === EAllowed){
                console.log("Nothing changed");
            }
            if (coursesTwo[j].allow_home === EAllowed && courses[i].allow_home === )
        }
    }
}
// Check if arrays are the same if not change courses array
  for (i = 0; i < courses.length; i++) {
      for (j=0; j < coursesTwo.length; j++) {
            if (courses[i].plan === coursesTwo[j].plan) {
              if (courses[i].description !== coursesTwo[j].description) {
                  courses[i].description = coursesTwo[j].description;
              } 
              if (courses[i].ucas !== coursesTwo[j].ucas) {
                  courses[i].ucas = coursesTwo[j].ucas;
              } 
              if (courses[i].owner !== coursesTwo[j].owner){
                  courses[i].owner = coursesTwo[j].owner;
              } 
              if (courses[i].phone !== coursesTwo[j].phone) {
                  courses[i].phone = coursesTwo[j].phone;
              } 
              if (courses[i].allow_international !== coursesTwo[j].allow_international) {
                  courses[i].allow_international = coursesTwo[j].allow_international;
              } 
              if (courses[i].allow_home !== coursesTwo[j].allow_home) {
                  courses[i].allow_home = coursesTwo[j].allow_home;
              } 
              if (courses[i].offer !== coursesTwo[j].offer) {
                  courses[i].offer = coursesTwo[j].offer;
              } 
              if (courses[i].additional !== coursesTwo[j].additional) {
                  courses[i].additional = coursesTwo[j].additional;
              } 
         }
    }

}   
 //Check the plan details

 // var plan = courses.map(function(arr){
 //     return arr.plan;

 // });
 // var plan2 = coursesTwo.map(function(arr2){
 //     return arr2.plan;
 // }); const set = new Set(plan);
 // const set2 = new Set(plan2);


 // for (var i = 0; i < coursesTwo.length; i++) {
 //     if (!set.has(coursesTwo[i].plan)) {
 //         courses.push(coursesTwo[i]);
        
 //     }
    
 //     }

 // for (var i =0; i < courses.length; i++) {
 //     if(!set2.has(courses[i].plan)){
        
 //         courses.splice(i,1);
 //         i--;
 //     }
     
 // }
