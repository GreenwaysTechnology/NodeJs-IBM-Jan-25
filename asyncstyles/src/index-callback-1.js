//callbacks -sync flow

function blockMe(message) {
    console.log(message)
}
function delay(cb) {
   // cb()
   setTimeout(cb,5000)
}
function main() {
    blockMe('start')
    delay(function () {
        console.log('delay')
    })
    blockMe('end')

}
main()


