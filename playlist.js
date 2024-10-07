// CRIAÇAO DAQUELE BOTÃO AZUL
let botaoDosAudios = document.createElement('button')
botaoDosAudios.textContent = '+'
botaoDosAudios.classList.add('fazerAListaDeAudioAparecer')
botaoDosAudios.addEventListener('click', creatingTheListOfTheAudios)

let secondSection = document.getElementById('segunda-seçao')
secondSection.appendChild(botaoDosAudios)


var playlist = []
const botarOsAudioNaPlaylist = (numeroDoAudio, qualEOTextoDoAudio) =>{
    if (qualEOTextoDoAudio === 'Jack Hannaford'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/JackRanaford/Jack Hannaford Natalie ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/JackRanaford/AUDIO Jack Hannaford 0${numeroDoAudio} Natalie.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'The Endless Tale'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/TheEndLessTale/The Endless Tale Peter ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/TheEndLessTale/AUDIO The Endless Tale 0${numeroDoAudio} Peter.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'Jack and the Beanstalk'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/JackAndTheBeanstalk/Jack and the Beanstalk Natalie ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/JackAndTheBeanstalk/AUDIO Jack and the Beanstalk 0${numeroDoAudio} Natalie.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'The Boy Who Flew too High'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/TheBoyWhoFlewTooHigh/The Boy Who Flew too High Natalie ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/TheBoyWhoFlewTooHigh/AUDIO The Boy Who Flew too High 0${numeroDoAudio} Natalie.mp3`)
        }
    }
    console.log(playlist)
}


const takingOffTheListOfTheAudios = (somethingWhichIsGoingToLeave, somethingWhichIsGoingToapper) => {
    document.body.removeChild(somethingWhichIsGoingToLeave)
    document.body.removeChild(somethingWhichIsGoingToapper)
    
    ordemDosAudios = 0
    let mainAudio = document.getElementById('audio-principal')
    mainAudio.setAttribute('src', playlist[ordemDosAudios])
    mainAudio.play()

    let recuar = document.getElementById('Recuar')
    recuar.addEventListener('click', () =>{
        ordemDosAudios -= 1
        mainAudio.setAttribute('src', playlist[ordemDosAudios])
        mainAudio.play()
        if (ordemDosAudios >= playlist.length){
            alert('sua playlist acabou')
        }
    })
    let avancar = document.getElementById('Passar')
    avancar.addEventListener('click', () =>{
        ordemDosAudios += 1
        mainAudio.setAttribute('src', playlist[ordemDosAudios])
        mainAudio.play()
        if (ordemDosAudios >= playlist.length){
            alert('sua playlist acabou')
        }
    })

    mainAudio.addEventListener('ended', () =>{
        ordemDosAudios += 1
        if (ordemDosAudios >= playlist.length){
            alert('sua playlist acabou')

        } else{
            mainAudio.setAttribute('src', playlist[ordemDosAudios])
            mainAudio.play()
        }

    })

}
function creatingTheListOfTheAudios(){
    playlist = []
    let listaDosAudios = document.createElement('div')
    listaDosAudios.classList.add('listaDosAudio')

    let sairDeListaDosAudio = document.createElement('button')
    sairDeListaDosAudio.classList.add('sairDoListaDosAudio')
    sairDeListaDosAudio.textContent = '<¬'
    sairDeListaDosAudio.addEventListener('click', () => takingOffTheListOfTheAudios(listaDosAudios, sairDeListaDosAudio))

    for (let i = 0; i < 9; i++){
        let audioJack = document.createElement('div')
        audioJack.classList.add('audio')

        let textAudioJack = document.createElement('p')
        textAudioJack.classList.add('audio-text')

        if (i + 1 < 9){
            audioJack.addEventListener('click', () => botarOsAudioNaPlaylist(i+1, 'Jack Hannaford') )
            textAudioJack.textContent = `Jack Hanaford ${i + 1}`
        } else{
            audioJack.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'Jack Hannaford') )
            textAudioJack.textContent = `Jack Hanaford COMPLETO`
        }
        audioJack.appendChild(textAudioJack)
        listaDosAudios.appendChild(audioJack)
    }

    for (let i = 0; i < 8; i++){
        let audioTheEnd = document.createElement('div')
        audioTheEnd.classList.add('audio')
        let textAudioTheEnd = document.createElement('p')
        textAudioTheEnd.classList.add('audio-text')
        if (i + 1 < 8){
            audioTheEnd.addEventListener('click',  () =>botarOsAudioNaPlaylist(i+1, 'The Endless Tale') )
            textAudioTheEnd.textContent = `The Endless Tale ${i + 1}`
        } else{
            audioTheEnd.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'The Endless Tale') )
            textAudioTheEnd.textContent = `The Endless Tale COMPLETO`

        }
        audioTheEnd.appendChild(textAudioTheEnd)
        listaDosAudios.appendChild(audioTheEnd)
    }

    for (let i = 0; i < 7; i++){
        let audioJackAnd = document.createElement('div')
        audioJackAnd.classList.add('audio')
        let textAudioJackAnd = document.createElement('p')
        textAudioJackAnd.classList.add('audio-text')
        if (i + 1 < 7){
            audioJackAnd.addEventListener('click', () => botarOsAudioNaPlaylist(i+1, 'Jack and the Beanstalk') )
            textAudioJackAnd.textContent = `Jack And The Beanstalk ${i + 1}`
        } else{
            audioJackAnd.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'Jack and the Beanstalk') )
            textAudioJackAnd.textContent = `Jack And The Beanstalk COMPLETO`

        }
        audioJackAnd.appendChild(textAudioJackAnd)
        listaDosAudios.appendChild(audioJackAnd)
    }

    for (let i = 0; i < 8; i++){
        let audioTheBoy = document.createElement('div')
        audioTheBoy.classList.add('audio')
        let textAudioTheBoy = document.createElement('p')
        textAudioTheBoy.classList.add('audio-text')
        if (i + 1 < 8){
            audioTheBoy.addEventListener('click',  () =>botarOsAudioNaPlaylist(i+1, 'The Boy Who Flew too High') )
            textAudioTheBoy.textContent = `The Boy Who Flew Too High ${i + 1}`
        } else{
            audioTheBoy.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'The Boy Who Flew too High') )
            textAudioTheBoy.textContent = `The Boy Who Flew Too High COMPLETO`

        }
        audioTheBoy.appendChild(textAudioTheBoy)
        listaDosAudios.appendChild(audioTheBoy)
    }
    document.body.appendChild(listaDosAudios)
    document.body.appendChild(sairDeListaDosAudio)
    
}


