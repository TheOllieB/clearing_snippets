enum EAllowed {
    OPEN = 'open',
    CLOSED = 'closed',
    RESTRICTED = 'restricted'
}

interface ICourse {
    plan : number,
    description : string, 
    ucas : string, 
    owner? : string,
    phone? : string,
    allow_home : EAllowed,
    allow_international : EAllowed,
    offer? : string,
    additional? : string,
    id : number
}

let a : ICourse[] = [
              {
                id: 122,
                plan: 122,
                description: 'Math',
                ucas: 'hrree',
                owner: 'math',
                phone: '07444444',
                allow_home: EAllowed.OPEN,
                allow_international: EAllowed.OPEN,
                offer: 'Yes'
              },
              {
                id: 123,
                plan: 123,
                description: 'English',
                ucas: 'maaa',
                owner: 'english',
                phone: '07333333',
                allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'No',
                additional: 'Yes'
               },
               {
                id: 124,
                plan: 124,
                description: 'Polish',
                ucas: 'loloooo',
                owner: 'polish',
                phone: '07555555',
                allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'Yes',
                additional: 'No'
                },
                {
                id: 12,
                plan: 12,
                description: 'Med',
                ucas: 'gggggg',
                owner: 'med',
                phone: '0755555',
                allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'Yes',
                additional: 'No'
                },
                {
                id: 124444442,
                plan: 12,
                description: 'Med',
                ucas: 'gggggg',
                owner: 'med',
                phone: '0755555',
                allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'Yes',
                additional: 'No'
                }
    ];
    
let b : ICourse[] = [
              {
                id: 122,
                plan: 122,
                description: 'Maths',
                ucas: 'hrree',
                owner: 'math',
                phone: '07444444',
               allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'Yes',
                additional: 'No'
              },
              {
                id: 123,
                plan: 123,
                description: 'English',
                ucas: 'maaa',
                owner: 'english',
                phone: '07333333',
                allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'No',
                additional: 'Yes'
               },
               {
                id: 1222,
                plan: 1222,
                description: 'Polish',
                ucas: 'loloooo',
                owner: 'polish',
                phone: '07555555',
                allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'Yes',
                additional: 'No'
                },
                {
                id: 125,
                plan: 125,
                description: 'Medicine',
                ucas: 'hahaha',
                owner: 'mxe',
                phone: '0766666666',
                allow_home: EAllowed.CLOSED,
                allow_international: EAllowed.CLOSED,
                offer: 'Yes',
                additional: 'No'
                }
    ];
    
class Test {
public static syncCourses(courses : ICourse[], coursesTwo : ICourse[]) : void {
for (let i : number = 0; i < courses.length; i++) {
    for (let j : number =0; j < coursesTwo.length; j++) {
          if (courses[i].id === coursesTwo[j].id) {
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

let ids : number[]  = courses.map((arr : ICourse) : number => {
    return arr.id;
});

let ids2 : number[]= coursesTwo.map((arr2 : ICourse) : number => {
    return arr2.id;
});

const set : Set<number> = new Set(ids);
const set2 : Set<number> = new Set(ids2);


for (let i : number = 0; i < coursesTwo.length; i++) {
    if (!set.has(coursesTwo[i].id)) {
        courses.push(coursesTwo[i]);
        }
    };

for (let i : number = 0; i < courses.length; i++) {
    if(!set2.has(courses[i].id)){
        courses.splice(i,1);
        i--;
    }
};
}
}

Test.syncCourses(a,b);
console.log(a);

    
 



