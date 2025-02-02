let intervalID
const mostrarPlayer = (programacao) => {
    const radioPlayer = document.getElementById('radioPlayer');
    const playButton = document.querySelectorAll('.audio-play-pause');
    const play = document.getElementById('audio-play')
    const pause = document.getElementById('audio-pause')
    const volumeControl = document.getElementById('vol-control');
    const frase = document.getElementById('audio-frase')
    frase.innerHTML = ''
    
    let isplayPause = false

    const estaEntre = (horaMinutos, horaInicio, horaFim) => {
        return horaMinutos >= horaInicio && horaMinutos < horaFim;
    }

    const programa = (diaAtual, horaMinutos, programacao) => {
        let programaAtual = []
        programacao.dia.forEach( programa => {
            programa.diaNumeros.forEach( dia => {
                if(parseInt(dia.numero) === diaAtual){
                    programa.programas.forEach( (tempo, index) => {
                        if(estaEntre(horaMinutos, tempo.horaInicio, tempo.horaFim)){
                            programaAtual.push({indice : index, nome : tempo.nome})
                        }
                    })
                }
            })
        })
        return programaAtual
    }

    const programaDepois = (diaAtual, horaMinutos, programacao) => {
        let indice = programa(diaAtual, horaMinutos, programacao)[0].indice
        let nome = programa(diaAtual, horaMinutos, programacao)[0].nome
        let programaApos = 'Agora'
        programacao.dia.forEach( programa => {
            programa.diaNumeros.forEach( numero => {
                if(programa.programas.length - 1 == indice){
                    if((diaAtual == 6 ? 0 : diaAtual + 1) === parseInt(numero.numero)){
                        programaApos = nome == programa.programas[0].nome ? programa.programas[1].nome : programaApos = programa.programas[0].nome
                    }
                }else if(diaAtual === parseInt(numero.numero)){
                    programaApos = programa.programas[parseInt(indice) + 1].nome
                }
            })
        })
       return programaApos
    }

    const comecarTocar = () => {
        if(isplayPause){
            play.style.display = 'block'
            pause.style.display = 'none'
            isplayPause = false
            radioPlayer.pause();
        }else{
            play.style.display = 'none'
            pause.style.display = 'flex'
            isplayPause = true
            radioPlayer.play();
        }
    }
    
    playButton.forEach((plays) => {
        plays.addEventListener('click', comecarTocar)}
    )

    volumeControl.addEventListener('input', function() {
        console.log(volumeControl.value)
        radioPlayer.volume = parseFloat(volumeControl.value) / 100;
    });

    function tagClicar(event) {
        if(event.target.parentNode.classList.contains('button-radios')){
            comecarTocar()
        }
    }
    
    document.addEventListener('click', tagClicar);
    clearInterval(intervalID)
    intervalID = setInterval( () => {
        let data = new Date()
        let diaAtual = data.getDay()
        let hora = data.getHours()
        let minutos = data.getMinutes()
        let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
        frase.innerHTML = `${programacao.radio.nome} - ${programacao.radio.slogan} | Você está ouvindo agora: ${programa(diaAtual, horaMinutos, programacao)[0].nome} | Em seguida, você vai ouvir: ${programaDepois(diaAtual, horaMinutos, programacao)} | ${programacao.radio.site} | ${programacao.radio.cidade}, ${programacao.radio.estado}, ${programacao.radio.pais}.`
    }, 1000)
    radioPlayer.play()
}
