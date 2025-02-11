function hamming(a, b) {
    let cont = 0
	for (let i = 0; i < a.length; i++) {
        a.charCodeAt(i) != b.charCodeAt(i) && cont++;
    }
    return cont
}