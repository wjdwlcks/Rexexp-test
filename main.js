const str =`
010-1234-5679
theest@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The Quick brown fox jumps over the lazy doh
abbcccdddd
`

console.log(
    str.match(/(?<=@).{1,}/g)
)