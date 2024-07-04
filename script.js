const getClearedInputValue = (data) => {
    const regex = /[-_\W]/g;
   return data.replace(regex , "");};

const getLowerCaseString = (data) => {
    return  data.toLowerCase();}

const getSplittedString = (data) => {
    return data.split("");
};

const getReversedSplittedString = (data) => {
    return data.split("").reverse();
};

const isItPalindrome = (array, reversedArray, value) =>{
    const answer = document.getElementById("result");
    if(array.join() === reversedArray.join()){
        answer.innerHTML = `"${value} je palindrom"`
    }
    else{
        answer.innerHTML = `"${value} nie je palindrom"`
    }
}

const getInputValue = () =>{
    document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('text-input').value.trim(); 
    if(inputValue === ""){
        alert("Prosím zadajte reálnu hodnotu")
    }
    else{
        const clearedInputValue = getClearedInputValue(inputValue);
        const lowerCaseString = getLowerCaseString(clearedInputValue);
        const splittedString = getSplittedString(lowerCaseString);
        const reversedSplittedString = getReversedSplittedString(lowerCaseString);
        isItPalindrome(splittedString, reversedSplittedString, inputValue);
    }
})};
