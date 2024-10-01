//1 displays number in text box
function displayNumber(num) {
result.value+=num
    
}

//2 clear text box
function clearBox () {
    result.value=""
}

//3 evaluate expression
// //method -1
 function evaluteExp(){
// exp=result.value
// output= eval(exp)
// result.value=output


//method-2

result.value=eval(result.value)

}

//remove last item 
function removelastitem() {
    result.value=result.value.slice(0,-1)
}