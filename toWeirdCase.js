function toWeirdCase(string){
    let result = ""
    let firstWord = true
    let words = string.split(" ")
    words.forEach(word => {
        if (firstWord){
            firstWord = false
        }
        else{
            result += " "
        }
        for (let i = 0; i < word.length; i++) {
            i % 2 == 0 ? result += word.charAt(i).toUpperCase() : result += word.charAt(i).toLowerCase()
        }
    });
    return result
}