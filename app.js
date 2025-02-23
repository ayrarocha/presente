function verificarEnvio(){
    const nome = document.getElementById('nome').value;
    const davi = document.getElementById('davi').value;
    const button = document.querySelector('#enviar');
    if (!nome || !davi){
        button.disabled = true;
        button.style.cursor = 'default';
        return
    }
    else{
        button.disabled = false;
        button.style.cursor = 'pointer';
    }
}
function enviar(){
    const img = [
        {src:'img/afrodite.jpg',
        nome: 'Afrodite',
        sobre: 'Deusa do amor, beleza e desejo.',
        },
        {src:'img/atena.jpg',
        nome: 'Atena',
        sobre: 'Deusa da sabedoria, estratégia e guerra justa.',
        },
        {src:'img/atlas.jpg',
        nome: 'Atlas',
        sobre: 'Titã condenado a sustentar os céus nos ombros.',
        },
        {src:'img/hades.jpg',
        nome: 'Hades',
        sobre: 'Deus do submundo e dos mortos.',
        },
        {src:'img/hidra-de-lerna.jpg',
        nome: 'Hidra de Lerna',
        sobre: 'Serpente de várias cabeças que se regeneravam.',
        },
        {src:'img/medusa.jpg',
        nome: 'Medusa',
        sobre: 'Transformava em pedra quem olhasse para ela.',
        },
        {src:'img/minotauro.jpg',
        nome: 'Minotauro',
        sobre: 'Ser meio homem, meio touro que vivia no Labirinto de Creta.',
        },
        {src:'img/morfeu.jpg',
        nome: 'Morfeu',
        sobre: 'Deus dos sonhos, responsável por moldar visões no sono dos mortais.',
        },
        {src:'img/poseidon.jpg',
        nome: 'Poseidon',
        sobre:'Deus dos mares, tempestades e terremotos.',
        },
        {src:'img/quiron.jpg',
        nome: 'Quiron',
        sobre: 'O centauro mais sábio.',
        },
        {src:'img/tifao.jpg',
        nome: 'Tifão',
        sobre: 'Criatura monstruosa e uma das maiores ameaças ao Olimpo.',
        },
        {src:'img/zeus.jpg',
        nome: 'Zeus',
        sobre: 'Rei dos deuses, deus dos céus e dos trovões.',
        }
    ];
    const imgGrego = Math.floor(Math.random() * img.length);
    const imgElemento = document.createElement('img');
    imgElemento.src = img[imgGrego].src;
    imgElemento.alt = 'grego';
    imgElemento.classList.add('davi');
    imgElemento.style.width = '450px';
    imgElemento.style.height = '450px';
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = 'Você é...';
    const h2 = document.createElement('h2');
    h2.innerHTML = img[imgGrego].nome;
    h2.style.marginBottom = '20px';
    const p = document.createElement('p');
    p.innerHTML = img[imgGrego].sobre;
    p.style.marginTop = '20px';
    document.body.innerHTML = '';
    document.body.appendChild(resultado);
    document.body.appendChild(h2);
    document.body.appendChild(imgElemento);
    document.body.appendChild(p);
}

