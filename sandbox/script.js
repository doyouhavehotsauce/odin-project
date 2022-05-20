let navArray = []

// search page and grab the inner text of each h3 tag
var elementHtml = [].map.call(document.querySelectorAll('h2'), function(el) {
    //create new array of those h2 tags
    navArray.push(el.innerText);

    return el.innerText  
})
if( navArray.length == 0){
    let grabIt = document.getElementById('section-nav')
    grabIt.remove();
} else{
    console.log('found this - ' + navArray);
}

//take the contents of elementHtml array and create Nodes for inner page navigation
function sectionNavLoop(){
  //removes Related Articles from array  
navArray.pop();  
  // loop through array
    navArray.forEach(function(a, index){
        let sectionNav = document.getElementById('section-nav')
        // create node
        let newNode = document.createElement('a')
        // appends id to node that equals array index
        newNode.id = 'a'+index
        newNode.innerHTML = a
        // append sectionNav to that node
        sectionNav.appendChild(newNode)
       
        let aLink = document.getElementById('a'+index)
        aLink.href = '#a'+index
       
        aLink.removeAttribute('id');
    })
}

// function that finds all h* elements on the page & appends a unique id
function addIds(){
    let el = document.querySelectorAll('h4');
    // add a class that increments across all h2 elements
    for (var i = 0; i < el.length; i++) {
        let x = 'a'+[i]
        //el[i].classList.add(x);
        el[i].setAttribute('id', x);
    }
}

sectionNavLoop()
addIds()






// var text = 'abcde';
// var substring = text.substring(0, text.length - 3);

// console.log(substring); // ab

// function that checks each string for <strong> tags and removes them
// function splitItUp(){
//     let strongTagTest = document.getElementById('strong-tag').innerHTML;
//     let sayIt = strongTagTest.split("");
//     if(sayIt[0] === '<' ){
//         console.log('first char is in fact a <');
//         newStr = sayIt.slice(8, -9).join("");
//         return newStr
//     } else {
//         console.log('< is not found');
//     }
// }
// splitItUp();





// $('#section-nav').has("ul")

// if(arrayCheck == 0){
//     //remove the section nav box
//     console.log('you should remove it');
//     let hideIt = document.getElementById('section-nav');
//     hideIt.remove();
// } else{
//     sectionNavLoop()
//     addIds()
// }



// // Jquery scroll feature to append up arrow on page
// $(window).scroll(function() {
//     var whereAmI = $(this).scrollTop();
//     // Do something
//     //console.log(whereAmI);
//     if ( whereAmI >= 2000 ){
        
//     }
//  });
