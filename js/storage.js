let store={

}

// first_name:"",
// last_name:"",
// email:"",
// phone:"",
// display:"",
// passion:"",
// where:"",
// types:"",
// cuisines:"",
// starthour:"",
// startmin:"",
// starttime:"",
// closinghour:"",
// closingmin:"",
// closingtime:"",
// array2:"",
// party:"",
// partner:"",
// identity:"",
// myfile1:"",
// myfile2:"",
// address:"",
// fssai:"",
// myfile3:"",



// let page=1
// let a=document.querySelector("#next").addEventListener("click",()=>{
//     store.name=document.getElementById("first_name").value;
//     console.log(store.name);
//     console.log(first_name);
// });
// let a = document.querySelector("#next");

// myfile3
// const selectElement = document.querySelector('.ice-cream');
// let place = document.querySelector('input[name="locationType6"]:checked').value;
// console.log(place);
// if(place != "Yes"){
//     document.getElementById("myfile30").classList.add("hide");
    
// }
// else{
// document.getElementById("myfile30").classList.add("show");
// }
// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('.result');
//   result.textContent = `You like ${event.target.value}`;
// });



// let p = document.querySelector('input[name="locationType6"]:checked').value;
// if(p == "no"){
//     console.log(p);
// }
// else{
//     console.log(p);
//     // let ka3 = document.querySelector("#myfile3").value;
//     let ka3=  document.getElementById("#myfile3").files[0].name;

//     console.log(ka3);
// }





// let b = document.querySelector("#next");
let ka2=document.getElementById("myfile2");
ka2.addEventListener("change",(e)=> {
    let src = e.target.files[0];
    let url0;
   let fileReader = new FileReader();
   fileReader.readAsDataURL(src);
   fileReader.onload = (e)=> {
       let image = new Image();
       image.src = e.target.result;
       image.onload = ()=> {
           let canvas = document.createElement("canvas");
            let context  = canvas.getContext("2d");
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            store.url0 = canvas.toDataURL();
            console.log(url0);
            // let aTag = document.createElement("a");
            // aTag.download = "file.jpeg";
            // aTag.href = url;
            // aTag.click();
            
            // link.href3 = URL.createObjectURL(blob);
            // console.log(link.href3);
            // //   link.click();
            
            //   // delete the internal blob reference, to let the browser clear memory from it
            //   URL.revokeObjectURL(link.href);
            // }, 'image/jpg');

       }
   }
})

let ka1 =document.getElementById("myfile1");
ka1.addEventListener("change",(e)=> {
    let src = e.target.files[0];
    let url2;
   let fileReader = new FileReader();
   fileReader.readAsDataURL(src);
   fileReader.onload = (e)=> {
       let image = new Image();
       image.src = e.target.result;
       image.onload = ()=> {
           let canvas = document.createElement("canvas");
            let context  = canvas.getContext("2d");
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            store.url2 = canvas.toDataURL();
            console.log(url2);
            // let aTag = document.createElement("a");
            // aTag.download = "file.jpeg";
            // aTag.href = url;
            // aTag.click();

       }
   }
})
let ka3 =document.getElementById("myfile3");
ka3.addEventListener("change",(e)=> {
    let src = e.target.files[0];
    let url;
   let fileReader = new FileReader();
   fileReader.readAsDataURL(src);
   fileReader.onload = (e)=> {
       let image = new Image();
       image.src = e.target.result;
       image.onload = ()=> {
           let canvas = document.createElement("canvas");
            let context  = canvas.getContext("2d");
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
           store.url = canvas.toDataURL();
            console.log(url);
            // let aTag = document.createElement("a");
            // aTag.download = "file.jpeg";
            // aTag.href = url;
            // aTag.click();

       }
   }
})



let b = document.querySelector("#submitId");

b.addEventListener('click',()=>{
store.first_name = document.getElementById("first_name").value;
store.last_name = document.getElementById("last_name").value;
store.email = document.getElementById("email").value;
store.phone = document.getElementById("phone").value;
store.display = document.getElementById("display").value;
store.passion = document.getElementById("passion").value;
    // let g = document.getElementById("ownKitchen").value;
    //  document.getElementById("demo").innerHTML = g;
    // let h = document.getElementById("phone").value;
    // let i = document.getElementById("display").value;
    
    // let g =document.querySelectorAll('.form-group #ownKitchen').value;

    
store.where = document.querySelector('input[name="locationType"]:checked').value;
store.types= document.querySelector('input[name="locateType2"]:checked').value;
    // let j = document.querySelectorAll('input[name="cuisines"]:checked').value;
    


    

    // console.log(v);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // console.log(f);
    // console.log(e);
    // console.log(g);
    // console.log(h);
    let temp=[];
    let checkboxes = document.querySelectorAll('input[name=cuisines]:checked')
    for(let i = 0; i < checkboxes.length;i++){
        temp.push(checkboxes[i].value)
        
    }
    store.cuisines =temp;
   console.log(store);
    // console.log(store.first_name);
    // console.log(store.last_name);
    // console.log(store.email);
    // console.log(store.phone);
    // console.log(store.display);
    // console.log(store.passion);
    // console.log(store.where);
    // console.log(store.types);
    // console.log(store.cuisines);
    // console.log(store.starthour);
    // console.log(store.startmin);
    // console.log(store.starttime);
    // console.log(store.closinghour);
    // console.log(store.closingmin);
    // console.log(store.closingtime);
    // console.log(store.array2);
    // console.log(store.party);
    // console.log(store.partner);
    // console.log(store.identity);
    // // console.log(store.myfile1);
    // // console.log(store.myfile2);
    // console.log(store.address);
    // console.log(store.fssai);
  // // console.log(store.myfile3);
    // for(let j = 0; j 
    //     < cuisines.length;j++){
    //         console.log(cuisines[j]);
    //     }
// drop down

    store.starthour= document.querySelector("#starthour").value

    store.startmin= document.querySelector("#startmin").value
       

    store.starttime= document.querySelector("#starttime").value
        // console.log(k3);

// end time
store.closinghour = document.querySelector("#closinghour").value
// console.log(closing1);
 
store.closingmin = document.querySelector("#closingmin").value
// console.log(closing2);

store.closingtime = document.querySelector("#closingtime").value
// console.log(closing3);



    // let l = document.querySelectorAll('input[name=day].checked')
    let temp2 = [];
    // store.array2 =[]
    let checkbox = document.querySelectorAll('input[name=day]:checked')
    for(let i = 0; i < checkbox.length;i++){
        temp2.push(checkbox[i].value)
        
    }
    store.array2 = temp2;
    
    // for(let j = 0; j 
    //     < array2.length;j++){
    //         console.log(array2[j]);
    //     }
        // location2
        store.party= document.querySelector('input[name="location2"]:checked').value;
        // console.log(l);

        store.partner= document.querySelector('input[name="location3"]:checked').value;
        // console.log(m);

        store.identity = document.querySelector('input[name="locationType1"]:checked').value;
        // console.log(n);
        
        // myfile1
    //    store.myfile1 =document.querySelector("#myfile1").value;
    // let ka=  document.getElementById("#myfile1").files[0].name;
    

      // this will return C:\fakepath\somefile.ext
//     console.log(value);
  
// let files =document.querySelector("#myfile1").files;
//     const files = event.target.files;
  
//     //this will return an ARRAY of File object
    // console.log(files);
//   }
  
//   return (
//    <input type="file" onChange={onChange} />
// )
    //    console.log(ka);

        store.address = document.querySelector('input[name="locationType2"]:checked').value;
        // console.log(o);

        // myfile 2
      
    //    store.myfile2=  document.getElementById("#myfile2").files[0].name;
        // .value;
        // console.log(ka2);

       

        // my file 3
        store.fssai = document.querySelector('input[name="locationType6"]:checked').value;
        // if(p == "no"){
        //     console.log(p);
        // }
        // else{
        //     console.log(p);
            // store.myfile3= document.querySelector("#myfile3").value;
            // store.myfile3=  document.getElementById("#myfile3").files[0].name;
    
        //     console.log(ka3);
        // }
       

// console.log(store.first_name);
// console.log(store.cuisines)
    // console.log(j);
    // console.log(checkboxes);
    // window.location.href = "thankyou.html";
  //  $.post('/email', store, function(){
  //      console.log('Server received our data');
  //  })   
  fetch("/email", {
      method:"post",
      headers:{
        "Accept":"application/json",
      "Content-Type":"application/json"
    },
      body: JSON.stringify({
          store,
      })
  }).then(res=>console.log(res)).catch(err=>console.alert(err.message)) 
})



// console.log(a);

// function draw(){
// let a = document.getElementById("first_name").value;
// let b = document.getElementById("last_name").value;
// let c = document.getElementById("email").value;
// // let d = document.getElementById("phone").value;
// let e = document.getElementById("display").value;
// let f = document.getElementById("passion").value;
// // let g = document.getElementById("").value;
// let h = document.getElementById("phone").value;
// let i = document.getElementById("display").value;
// console.log(a)
// }

// draw();

// draw()(onclick);



// 1
// function onload (){
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET" , "./img/tema/team-1.jpg");
//      xhr.responseType= "arraybuffer";
//      xhr.onload= function(e){
//          var blob = new Blob([xhr.response]);
//          var url = URL.createObjectURL(blob);
//          console.log(url);
//          var img = document.getElementById("image");
//          img.src = url;
//      }
//          xhr.send();
     
// }


// 2
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost/team-1.jpg");
// xhr.responseType = "blob";
// xhr.onload = response;
// xhr.send();
// // And the response function looks like this:

// function response(e) {
//    var urlCreator = window.URL || window.webkitURL;
//    var imageUrl = urlCreator.createObjectURL(this.response);
//    document.querySelector("#image").src = imageUrl;
// }


// const a1 = document.getElementById("myfile1");
// const blob1 = new Blob(["Hello donwload"], {type : "text/plain"})
// a1.href = URL.createObjectURL(blob1);



// var data = '424D5E070000000000003E00000028000000EF...';

// Convert the string to bytes
// var bytes = new Uint8Array(data.length / 2);

// for (var i = 0; i < data.length; i += 2) {
//     bytes[i / 2] = parseInt(data.substring(i, i + 2), /* base = */ 16);
// }

// // Make a Blob from the bytes
// var blob = new Blob([bytes], {type: 'image/jpg'});

// // Use createObjectURL to make a URL for the blob
// var image = new Image();
// image.src = URL.createObjectURL(blob);
// document.body.appendChild(image);


// let img = document.querySelector('#myfile1');

// // make <canvas> of the same size
// let canvas = document.createElement('canvas');
// canvas.width = img.clientWidth;
// canvas.height = img.clientHeight;

// let context = canvas.getContext('2d');

// // copy image to it (this method allows to cut image)

// context.drawImage(img, 10, 10);

// // we can context.rotate(), and do many other things on canvas

// // toBlob is async operation, callback is called when done
// canvas.toBlob(function(blob) {
//   // blob ready, download it
//   let link = document.createElement('a');
//   link.download = 'img.jpg';

//   link.href = URL.createObjectURL(blob);
// //   link.click();

//   // delete the internal blob reference, to let the browser clear memory from it
//   URL.revokeObjectURL(link.href);
// }, 'image/jpg');

// document.getElementById("submitId").onclick = function () {
		document.getElementById("submitId").onclick = function () {
			if (document.getElementsByName('myfile1')[0].files.length > 0 && document.getElementsByName('myfile2')[0].files.length > 0)
			{
                window.location.href = "thankyou.html";
      


			}
		};
                // querySelector
                // getElementById
// 				let img = document.querySelector("#myfile1").files[0];
//                 console.log(img);

// // make <canvas> of the same size
// let canvas = document.createElement('canvas');
// // let canvas = document.getElementById("#canvas");
// canvas.width = img.clientWidth;
// canvas.height = img.clientHeight;


// // canvas.width = window.innerWidth * 0.8;
// // canvas.height = window.innerHeight * 0.8;

// let context = canvas.getContext('2d');

// // copy image to it (this method allows to cut image)
// // context.drawImage(img, 10, 10);

// let link= canvas.toDataURL();
// console.log(link);
// // we can context.rotate(), and do many other things on canvas

// // toBlob is async operation, callback is called when done
// canvas.toBlob(function(blob) {
// //   // blob ready, download it
//   link = document.createElement('a');
//   link.download = 'img.jpg';

//  link.href = URL.createObjectURL(blob);
// console.log(link.href);
// //   link.click();

//   // delete the internal blob reference, to let the browser clear memory from it
//   URL.revokeObjectURL(link.href);
// }, 'image/jpg');

// //4444444444444444444444444

// let img = document.querySelector('#myfile1');

// // make <canvas> of the same size
// let canvas = document.createElement('canvas');
// canvas.width = img.clientWidth;
// canvas.height = img.clientHeight;

// let context = canvas.getContext('2d');

// // copy image to it (this method allows to cut image)
// // context.drawImage(img, 10, 10);
// // we can context.rotate(), and do many other things on canvas

// // toBlob is async operation, callback is called when done
// canvas.toBlob(function(blob) {
//   // blob ready, download it
//   let link = document.createElement('a');
//   link.download = 'img.jpg';

//   link.href = URL.createObjectURL(blob);
// console.log(link.href);
// //   link.click();

//   // delete the internal blob reference, to let the browser clear memory from it
//   URL.revokeObjectURL(link.href);
// }, 'image/jpg');






// // let img2 = document.querySelector('#myfile2');

// // // make <canvas> of the same size
// // // let canvas = document.createElement('canvas');
// // canvas.width = img2.clientWidth;
// // canvas.height = img2.clientHeight;

// // let contex = canvas.getContext('2d');

// // // copy image to it (this method allows to cut image)
// // contex.drawImage(img, 10, 10);
// // // we can context.rotate(), and do many other things on canvas

// // // toBlob is async operation, callback is called when done
// // canvas.toBlob(function(blob) {
// //   // blob ready, download it
// //   let link = document.createElement('a');
// //   link.download = 'img2.jpg';


// //   console.log(hlooo);

// //   link.href2 = URL.createObjectURL(blob);
// // console.log(link.href2);
// // //   link.click();

// //   // delete the internal blob reference, to let the browser clear memory from it
// //   URL.revokeObjectURL(link.href);
// // }, 'image/jpg');











// // let img3 = document.querySelector('#myfile3');

// // // make <canvas> of the same size
// // let canvas = document.createElement('canvas');
// // canvas.width = img3.clientWidth;
// // canvas.height = img3.clientHeight;

// // let conte = canvas.getContext('2d');

// // // copy image to it (this method allows to cut image)
// // conte.drawImage(img, 10, 10);
// // // we can context.rotate(), and do many other things on canvas

// // // toBlob is async operation, callback is called when done
// // canvas.toBlob(function(blob) {
// //   // blob ready, download it
// //   let link = document.createElement('a');
// //   link.download = 'img.jpg';

// //     console.log(hi);


// //   link.href3 = URL.createObjectURL(blob);
// // console.log(link.href3);
// // //   link.click();

// //   // delete the internal blob reference, to let the browser clear memory from it
// //   URL.revokeObjectURL(link.href);
// // }, 'image/jpg');












// 		// window.location.href = "registration-wizard-version.html";
			
		
		
	


        document.getElementById("myfile30").style.display="none";
        let place = document.querySelectorAll("input[name='locationType6']");
        place[0].addEventListener("click", (e)=> {
            document.getElementById("myfile30").style.display="block";
        })
        place[1].addEventListener("click", (e)=> {
            document.getElementById("myfile30").style.display="none";
        })

      

// name validation
// $(".next1").click(function () {
//     let first_name = document.getElementById("first_name").value;
//     let possiblename = ['A','B','C','D','E','F','G','H','I','J' , 'K'];
//     let validAll = true;
//     // if (phoneNumber.length != 10)
//     // {
//     //   validAll = false;
//     // }
//     // else{
//       for (let i = 0; i < first_name.length; i++)
//       {
//         if (!(first_name[i] in possiblename))
//         {
//           validAll = false;
//           console.log(validAll);
//           break;
//         }
      
    
//     if (!validAll)
//     {
//       alert("provide valid name!");
//       console.log(validAll);
//       return;
//     }
// }
// })
// $("#next").click(function () {
//     if(page===1) page=2;
//     else if(page===2){
//         let res=Validate_Cook()
//         phoneNumber = document.getElementById("phone").value;
//         let possibleNumbers = ['1','2','3','4','5','6','7','8','9','0'];
//         let validAll = true;
//         if (phoneNumber.length != 10)
//         {
//           validAll = false;
//         }
//         else{
//           for (let i = 0; i < phoneNumber.length; i++)
//           {
//             if (!(phoneNumber[i] in possibleNumbers))
//             {
//               validAll = false;
//               break;
//             }
//           }
//         }
//         if (!res)
//         {
//           alert("Please chooose!");
//           return;
//         }
//         else page=3
//     }
   
//     });
//   function Validate_Cook(){
//     const btns=document.querySelectorAll("[name='locationType']")
//     let flag=false
//     btns.forEach(btn => {
//         // console.log(btn)
//          if(btn.checked==true) flag=true
//     })
//     return flag
//   }


// first name
// document.querySelectorAll
$("#last_name").click(function () {
        let first_name = document.getElementById("first_name").value;
        // console.log(first_name);
        let possiblename = ['A','B','C','D','E','F','G','H','I','J' , 'K', 'L' , 'M' , 'N' ,'O' , 'P' , 'Q' , 'R' , 'S' ,'T' , 'U', 'V', 'W', 'X' , 'Y','Z', 'a','b','c','d','e','f','g','h','i','j' , 'k', 'l' , 'n' , 'n' ,'o' , 'p' , 'q' , 'r' , 's' ,'t' , 'u', 'v', 'w', 'x' , 'y','z',] ;
        let validAll = true;
        // if (phoneNumber.length != 10)
        // {
        //   validAll = false;
        // }
        // else{
          for (let i = 0; i < first_name.length; i++)
          {
            //   console.log(first_name[i] in possiblename);
            //   console.log(first_name[i]);
            // if (!(first_name[i] in possiblename))
            if(!(possiblename.includes(first_name[i])))
            {
              validAll = true;
            //   console.log(validAll);
            //   console.log(1);
            //   break;
            alert("Please Provide valid First Name!");
            break;
            }
            break;
          
        
        // if (!validAll)
        // {
        //   alert("provide valid name!");
        //   console.log(validAll);
        //   console.log(2);
        //   return;
        // }
    }
    })









    // last name
    $("#email").click(function () {
        let last_name = document.getElementById("last_name").value;
        // console.log(first_name);
        let possiblename = ['A','B','C','D','E','F','G','H','I','J' , 'K', 'L' , 'M' , 'N' ,'O' , 'P' , 'Q' , 'R' , 'S' ,'T' , 'U', 'V', 'W', 'X' , 'Y','Z', 'a','b','c','d','e','f','g','h','i','j' , 'k', 'l' , 'n' , 'n' ,'o' , 'p' , 'q' , 'r' , 's' ,'t' , 'u', 'v', 'w', 'x' , 'y','z',] ;
        let validAll = true;
        // if (phoneNumber.length != 10)
        // {
        //   validAll = false;
        // }
        // else{
          for (let i = 0; i < last_name.length; i++)
          {
            //   console.log(first_name[i] in possiblename);
            //   console.log(first_name[i]);
            // if (!(first_name[i] in possiblename))
            if(!(possiblename.includes(last_name[i])))
            {
              validAll = true;
            //   console.log(validAll);
            //   console.log(1);
            //   break;
            alert("Please provide valid Last Name!");
            break;
            }break;
          
        
        // if (!validAll)
        // {
        //   alert("provide valid name!");
        //   console.log(validAll);
        //   console.log(2);
        //   return;
        // }
    }
    })




//     $("#next").click(function () {
//         phoneNumber = document.getElementById("phone").value;
//         let possibleNumbers = ['1','2','3','4','5','6','7','8','9','0'];
//         let validAll = true;
//         if (phoneNumber.length != 10)
//         {
//           validAll = false;
//         }
//         else{
//           for (let i = 0; i < phoneNumber.length; i++)
//           {
//             if (!(phoneNumber[i] in possibleNumbers))
//             {
//               validAll = false;
//               break;
//             }
//           }
//         }
//         if (!validAll)
//         {
//           alert("provide valid number!");
//           return;
//         }
//     })



// const onChange = (event) => {
//     const value = event.target.value;
  
//     // this will return C:\fakepath\somefile.ext
//     console.log(value);
  
//     const files = event.target.files;
  
//     //this will return an ARRAY of File object
//     console.log(files);
//   }
  
//   return (
//    <input type="file" onChange={onChange} />
//   )
  
var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="otherValue"]');
otherText.style.visibility = 'hidden';

otherCheckbox.addEventListener('change', () => {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
});
