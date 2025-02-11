function order(words){
    if (words == ""){
        return ""
    }
    else{
        let result = []
        let arrayWords = words.split(" ")
        arrayWords.forEach(word => {
            for (let i = 0; i < word.length; i++){
                if (!isNaN(word.charAt(i))){
                    let position = Number(word.charAt(i))
                    console.log(position)
                    result[position - 1] = word
                }
            }
        })
        return result.join(" ")
    }
}