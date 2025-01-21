//callbacks -sync flow

function blockMe(message) {
    console.log(message)
}
function delay(cb) {
   setTimeout(cb,5000,'delay')
}
function main() {
    blockMe('start')
    delay(function (data) {
        console.log(data)
    })
    blockMe('end')

}
main()


