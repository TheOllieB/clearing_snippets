var arr=[];
    
function CheckIt(a,b){
    if (a === b) {
        return "X";
        console.log("X");
    }
    // var f = a.substr(0,2);
    // var t = a.substr(2,4);
    var h = a[1];
    var i = a[3];
    var hNow = b[1];
    var iNow = b[3];
    // now = hNow + iNow;
    // was = h + i;
    if (hNow === "O" && iNow === "O") {
        return "Home and Int are open";
    }
    if (hNow === "C" && iNow === "C") {
       return "Home and Int are closed";    
    }
    if (hNow === "R" && iNow === "R") {
        return"Home and Int are restricted";
    }
    if (hNow === "R" && h !== "R") {
            arr.push("Home is restricted");
    }
    if (hNow === "O" && h !== "O") {
            arr.push("Home is open");
    }
     if (hNow === "C" && h !== "C") {
            arr.push("Home is closed");
    }
    if (iNow === "R" && i !== "R") {
            arr.push("Int is restricted");
    }
    if (iNow === "O" && i !== "O") {
            arr.push("Int is open");
    }
    if (iNow === "C" && i !== "C") {
            arr.push("Int is closed");
    }
 }
console.log(CheckIt("HOIC", "HRIO"));
console.log(arr[0] + " and " + arr[1]);
//console.log(CheckIt("HOIO","HCIR"));
//console.log(arr[0] + " and " + arr[1]);

////HR IO
//    if (hNow === "R" && h === "O") {
//        if (iNow === "O" &&  i === "C") {
//            console.log("Home is restricted and Int is open");
//        }
//    }
//    //HO IR
//    if (hNow === "O" && h === "C") {
//        if (iNow === "R" &&  i === "C") {
//            console.log("Home is open and Int is restricted");
//        }
//    }
//    //HC IO
//    if (hNow === "C" && h === "O") {
//        if (iNow === "O" &&  i === "O") {
//            console.log("Home is closed");
//        }
//    }
//    //HR IO
//    if (hNow === "R" && h === "O") {
//        if (iNow === "O" &&  i === "C") {
//            console.log("Home is restricted and Int is open");
//        }
//    }