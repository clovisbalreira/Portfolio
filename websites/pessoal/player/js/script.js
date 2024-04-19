const radioPlayer = document.getElementById('radioPlayer');
const playButton = document.querySelectorAll('.audio-play-pause');
const play = document.getElementById('audio-play')
const pause = document.getElementById('audio-pause')
const volumeControl = document.getElementById('vol-control');

let programacao = [
    { dia : 0, programa : [
        { horaInicio : '00:00', horaFim : '00:59', nome : 'DJ Star, com Mario D'},
            { horaInicio : '01:00', horaFim : '01:59', nome : 'As Mais Pedidas'},
            { horaInicio : '02:00', horaFim : '02:59', nome : 'Uma Hora Direto'},
            { horaInicio : '03:00', horaFim : '13:59', nome : '#CNS'},
            { horaInicio : '14:00', horaFim : '14:59', nome : 'Uma Hora Direto'},
            { horaInicio : '15:00', horaFim : '15:59', nome : '#CNS'},
            { horaInicio : '16:00', horaFim : '17:59', nome : 'CNS Hits'},
            { horaInicio : '18:00', horaFim : '19:59', nome : 'As Mais Pedidas'},
            { horaInicio : '19:00', horaFim : '20:59', nome : 'Expresso do Rock'},
            { horaInicio : '21:00', horaFim : '23:59', nome : '#CNS'}
        ]
    },
    { dia : 1, programa : [
            { horaInicio : '00:00', horaFim : '00:59', nome :'Uma Hora Direto'},
            { horaInicio : '01:00', horaFim : '02:59', nome :'CNS Hits'},
            { horaInicio : '03:00', horaFim : '05:59', nome :'Pop Rock CNS'},
            { horaInicio : '06:00', horaFim : '06:59', nome :'Uma Hora Direto'},
            { horaInicio : '07:00', horaFim : '07:59', nome :'Feedback CNS'},
            { horaInicio : '08:00', horaFim : '09:59', nome :'CNS Hits'},
            { horaInicio : '10:00', horaFim : '12:59', nome :'#CNS'},
            { horaInicio : '13:00', horaFim : '13:59', nome :'Pop Rock CNS'},
            { horaInicio : '14:00', horaFim : '15:59', nome :'#CNS'},
            { horaInicio : '16:00', horaFim : '17:59', nome :'Uma Hora Direto'},
            { horaInicio : '18:00', horaFim : '21:59', nome :'Feedback CNS'},
            { horaInicio : '22:00', horaFim : '22:59', nome :'DJ Star, com Mario D, (sextas)'},
            { horaInicio : '23:00', horaFim : '23:59', nome :'Pop Rock CNS'}
        ]
    },
    { dia : 2, programa : [
            { horaInicio : '00:00', horaFim : '00:59', nome :'Uma Hora Direto'},
            { horaInicio : '01:00', horaFim : '02:59', nome :'CNS Hits'},
            { horaInicio : '03:00', horaFim : '05:59', nome :'Pop Rock CNS'},
            { horaInicio : '06:00', horaFim : '06:59', nome :'Uma Hora Direto'},
            { horaInicio : '07:00', horaFim : '07:59', nome :'Feedback CNS'},
            { horaInicio : '08:00', horaFim : '09:59', nome :'CNS Hits'},
            { horaInicio : '10:00', horaFim : '12:59', nome :'#CNS'},
            { horaInicio : '13:00', horaFim : '13:59', nome :'Pop Rock CNS'},
            { horaInicio : '14:00', horaFim : '15:59', nome :'#CNS'},
            { horaInicio : '16:00', horaFim : '17:59', nome :'Uma Hora Direto'},
            { horaInicio : '18:00', horaFim : '21:59', nome :'Feedback CNS'},
            { horaInicio : '22:00', horaFim : '22:59', nome :'DJ Star, com Mario D, (sextas)'},
            { horaInicio : '23:00', horaFim : '23:59', nome :'Pop Rock CNS'}
        ]
    },
    { dia : 3, programa : [
            { horaInicio : '00:00', horaFim : '00:59', nome :'Uma Hora Direto'},
            { horaInicio : '01:00', horaFim : '02:59', nome :'CNS Hits'},
            { horaInicio : '03:00', horaFim : '05:59', nome :'Pop Rock CNS'},
            { horaInicio : '06:00', horaFim : '06:59', nome :'Uma Hora Direto'},
            { horaInicio : '07:00', horaFim : '07:59', nome :'Feedback CNS'},
            { horaInicio : '08:00', horaFim : '09:59', nome :'CNS Hits'},
            { horaInicio : '10:00', horaFim : '12:59', nome :'#CNS'},
            { horaInicio : '13:00', horaFim : '13:59', nome :'Pop Rock CNS'},
            { horaInicio : '14:00', horaFim : '15:59', nome :'#CNS'},
            { horaInicio : '16:00', horaFim : '17:59', nome :'Uma Hora Direto'},
            { horaInicio : '18:00', horaFim : '21:59', nome :'Feedback CNS'},
            { horaInicio : '22:00', horaFim : '22:59', nome :'DJ Star, com Mario D, (sextas)'},
            { horaInicio : '23:00', horaFim : '23:59', nome :'Pop Rock CNS'}
        ]
    },
    { dia : 4, programa : [
            { horaInicio : '00:00', horaFim : '00:59', nome :'Uma Hora Direto'},
            { horaInicio : '01:00', horaFim : '02:59', nome :'CNS Hits'},
            { horaInicio : '03:00', horaFim : '05:59', nome :'Pop Rock CNS'},
            { horaInicio : '06:00', horaFim : '06:59', nome :'Uma Hora Direto'},
            { horaInicio : '07:00', horaFim : '07:59', nome :'Feedback CNS'},
            { horaInicio : '08:00', horaFim : '09:59', nome :'CNS Hits'},
            { horaInicio : '10:00', horaFim : '12:59', nome :'#CNS'},
            { horaInicio : '13:00', horaFim : '13:59', nome :'Pop Rock CNS'},
            { horaInicio : '14:00', horaFim : '15:59', nome :'#CNS'},
            { horaInicio : '16:00', horaFim : '17:59', nome :'Uma Hora Direto'},
            { horaInicio : '18:00', horaFim : '21:59', nome :'Feedback CNS'},
            { horaInicio : '22:00', horaFim : '22:59', nome :'DJ Star, com Mario D, (sextas)'},
            { horaInicio : '23:00', horaFim : '23:59', nome :'Pop Rock CNS'}
        ]
    },
    { dia : 5, programa : [
            { horaInicio : '00:00', horaFim : '00:59', nome :'Uma Hora Direto'},
            { horaInicio : '01:00', horaFim : '02:59', nome :'CNS Hits'},
            { horaInicio : '03:00', horaFim : '05:59', nome :'Pop Rock CNS'},
            { horaInicio : '06:00', horaFim : '06:59', nome :'Uma Hora Direto'},
            { horaInicio : '07:00', horaFim : '07:59', nome :'Feedback CNS'},
            { horaInicio : '08:00', horaFim : '09:59', nome :'CNS Hits'},
            { horaInicio : '10:00', horaFim : '12:59', nome :'#CNS'},
            { horaInicio : '13:00', horaFim : '13:59', nome :'Pop Rock CNS'},
            { horaInicio : '14:00', horaFim : '15:59', nome :'#CNS'},
            { horaInicio : '16:00', horaFim : '17:59', nome :'Uma Hora Direto'},
            { horaInicio : '18:00', horaFim : '21:59', nome :'Feedback CNS'},
            { horaInicio : '22:00', horaFim : '22:59', nome :'DJ Star, com Mario D, (sextas)'},
            { horaInicio : '23:00', horaFim : '23:59', nome :'Pop Rock CNS'}
        ]
    },
    { dia : 6, programa : [
            { horaInicio : '00:00', horaFim : '00:59', nome : 'Uma Hora Direto'},
            { horaInicio : '01:00', horaFim : '02:59', nome : '#CNS'},
            { horaInicio : '03:00', horaFim : '04:59', nome : 'CNS Hits'},
            { horaInicio : '05:00', horaFim : '08:59', nome : '#CNS'},
            { horaInicio : '09:00', horaFim : '09:59', nome : 'As Mais Pedidas'},
            { horaInicio : '10:00', horaFim : '11:59', nome : '#CNS'},
            { horaInicio : '12:00', horaFim : '13:59', nome : 'CNS Hits'},
            { horaInicio : '14:00', horaFim : '14:59', nome : 'DJ Star, com Mario D'},
            { horaInicio : '15:00', horaFim : '15:59', nome : 'As Mais Pedidas'},
            { horaInicio : '16:00', horaFim : '19:59', nome : '#CNS'},
            { horaInicio : '20:00', horaFim : '20:59', nome : 'As Mais Pedidas'},
            { horaInicio : '21:00', horaFim : '22:59', nome : 'Pezão Show, com Sr Pezão'},
            { horaInicio : '23:00', horaFim : '23:59', nome : 'DJ Star, com Mario D'}
        ]
    },
]
let votosProgramas = []
let votosGeral = [{musicaInterprete: "\\Justin Timberlake - No Angels (mp3cut.net).mp3\r", voto: 1}]
let votos = [{data: "20240403", hora: "14:30:30"},{data: "20240403", hora: "15:40:32"},]
let isplayPause = false
/* let musicasTocadas = [
    { data: "20240403", hora: "14:24:28", musica: "\\Justin Timberlake - No Angels (mp3cut.net).mp3\r" },
    { data: "20240403", hora: "15:44:07", musica: "\\Gabriel Elias - Pedra Preciosa (mp3cut.net).mp3\r" },
]
let time = ''
let musica = ''
let arquivos = [{nome: "Salamandra-MainPlayer-Log-20240403.txt", data: "20240403"},{nome: "Salamandra-layer-Log-20240403.txt", data: "20240403"}] */

function estaEntre(horaMinutos, horaInicio, horaFim) {
    return horaMinutos >= horaInicio && horaMinutos < horaFim;
}

const programa = (diaAtual, horaMinutos) => {
    let programa = '1'
    programacao.forEach( prog => {
        if(prog.dia === diaAtual){
            prog.programa.forEach( tempo => {
               if(estaEntre(horaMinutos, tempo.horaInicio, tempo.horaFim)){
                programa = tempo.nome
               }
            })
        }
    })
    return programa
}

playButton.forEach((plays) => {
    plays.addEventListener('click', () => {
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
    })
})

volumeControl.addEventListener('input', function() {
    console.log(volumeControl.value)
    radioPlayer.volume = parseFloat(volumeControl.value) / 100;
});

setInterval( () => {
    let data = new Date()
    let diaAtual = data.getDay()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
    let indice = programacao[diaAtual].programa.length == programacao[diaAtual].programa.findIndex(p => p.nome === programa(diaAtual, horaMinutos)) ? 0 : programacao[diaAtual].programa.findIndex(p => p.nome === programa(diaAtual, horaMinutos)) + 1;
    document.getElementById('audio-frase').innerHTML = `Rádio CNS - A rádio que liga você! | Você está ouvindo agora: ${programa(diaAtual, horaMinutos)} | Em seguida, você vai ouvir: ${programacao[hora == 23 ? diaAtual == 6 ? 0 : diaAtual : diaAtual].programa[indice].nome} | www.radiocns.com | Canoas, Rio Grande do Sul, Brasil.`
}, 1000)
radioPlayer.play()

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const contem = arquivos.filter(arquivo => {
        if(arquivo.nome == file.name){
            console.log(arquivo.nome)
            return false
        }
    })
    console.log(contem)
    const numbers = file.name.match(/\d+/g);
    arquivos.push({nome : file.name, data : numbers[0]})
    if (!file) {
        return;
    }
    console.log(numbers)
    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        const lines = contents.trim().split('\n');
        lines.forEach(line => {
            musicasTocadas.push({ data: numbers[0], hora : pegarHora(line), musica : pegarMusica(line)})
        });

        console.log(musicasTocadas)
        console.log(arquivos)
    };
    reader.readAsText(file);
});

/* const pegarHora = (line) => {
    const timePattern = /\d{2}:\d{2}:\d{2}/;
    const match = line.match(timePattern);
    if (match) {
        return match[0];
    }
} */

/* const pegarMusica = (line) => {
    const regex = /\\[^\\]*$/;
    const match = line.match(regex);
    if (match) {
        return match[0]
    }
} */

/* const contemArquivo = (arquivos) => {
    arquivos.forEach(arquivo => {
        return arquivo.nome == file.name ? false : true
    })
} */

/* const incluirZero = (numero) => {
    return numero < 10 ? `0${numero}` : numero
} */

/* const capturarVotos = document.querySelector('.heart')
capturarVotos.addEventListener('click', () => {
    let dataAgora = new Date()
    votos.push({data: `${dataAgora.getFullYear()}${incluirZero(dataAgora.getMonth())}${incluirZero(dataAgora.getDate())}`,hora : `${dataAgora.getHours()}:${dataAgora.getMinutes()}:${dataAgora.getSeconds()}`})
}) */

/* function parseHora(horaString) {
    return new Date('1970-01-01T' + horaString + 'Z');
} */

/* const isEntre = (voto, musica, musicas) =>  {
    return parseHora(voto) >= parseHora(musica) && parseHora(voto) <= parseHora(musicas)
} */

const contarVotos = () => {
    /* votosProgramas = []
    votosGeral = [] */
    votos.forEach( voto => {
        console.log(voto)
        /* musicasTocadas.forEach( musica => {
            console.log(musicasTocadas)
            let index = musicasTocadas.findIndex(musica => musica.hora === musica.hora) */
            /* let horaProximo = index == musicasTocadas.length ? '23:59:59' : musicasTocadas[index+1].hora
            console.log(index)
            console.log(musicasTocadas.length)
            console.log(index == musicasTocadas.length) */
            /* if(isEntre(voto.hora, musica.hora, musicasTocadas[index+1].hora)){
                if(votosGeral.length == 0){
                    votosGeral.push({musicaInterprete: musica.musica, voto : 1})
                }else{
                    votosGeral.forEach( voto => {
                        if(voto.musicaInterprete == musica.musica){
                            voto.voto += 1
                            console.log(voto.voto)
                        }else{
                            votosGeral.push({musicaInterprete: musica.musica, voto : 1})
                        }
                    })
                }
            }
        }) */
    })
    //console.log(votosGeral)
}
//bconsole.log(votos)

contarVotos()