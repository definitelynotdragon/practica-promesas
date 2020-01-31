
const toKodemia = {
    isInterviewed: false,
    isEnrolled: false,
    isAttended: false,
}

function interview (Kode, callback) {
    console.log('I am being interviewed')
    Kode.isInterviewed = true
    const error = !Kode.isInterviewed
    callback(error, Kode)
}

function enroll (Kode, callback) {
    console.log('I am being enrolled')
    Kode.isEnrolled = true
    const error = !Kode.isEnrolled
    callback(error, Kode)
}

function attend (Kode, callback) {
    console.log('I am attending')
    Kode.isAttended = true
    const error = !Kode.isAttended
    callback(error, Kode)
}

interview(toKodemia, (error, interviewed) =>{
    if (error) {
        console.error('Could not interview')
        return
    }
    enroll(interviewed, (error, enrolled) =>{
        if (error) {
            console.error('Could not enroll')
            return
        }
    
        attend(enrolled, (error, attended) =>{
            if (error) {
                console.error('Could not attend')
                return
            }
        
            console.log('Koded!')
            console.log('Kode: ', enrolled)
            console.log('toKodemia: ', toKodemia)
        })
    })
})