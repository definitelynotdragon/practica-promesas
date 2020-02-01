
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

function interviewPromise (Kode) {
    return new Promise ((resolve, reject) =>{
        interview(Kode, (error, KodeInterviewed) =>{
            if (error) return reject(error)
            resolve(KodeInterviewed)
        })
    })
}

function enrollPromise (Kode) {
    return new Promise ((resolve, reject) =>{
        enroll(Kode, (error, KodeEnrolled) =>{
            if (error) return reject(error)
            resolve(KodeEnrolled)
        })
    })
}

function attendPromise (Kode) {
    return new Promise ((resolve, reject) =>{
        attend(Kode, (error, KodeAttended) =>{
            if (error) return reject(error)
            resolve(KodeAttended)
        })
    })
}

interviewPromise(toKodemia)
.then(KodeInterviewed => {
    enrollPromise(KodeInterviewed)
    .then(KodeEnrolled=> {
        attendPromise(KodeEnrolled)
        .then(KodeAttended => {
            console.log('DONE')
            console.log('KodeAttended: ', KodeAttended)
        })
        .catch(error => {
            console.error('ERROR at attend promise')
        })
    })
    .catch(error => {
        console.error('ERROR at enrolled promise')
    })
})
.catch(error => {
    console.error('ERROR at interviewed promise')
})