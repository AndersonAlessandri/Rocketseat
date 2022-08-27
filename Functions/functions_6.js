// callback funtion

function sayMyName(name) {
    console.log('antes de uma callback')

    name()

    console.log('depois de uma callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)


