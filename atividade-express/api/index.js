const express = require('express');
const app = express();

const citacoesCientistas = [
    { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
    { autor: "Isaac Newton", citacao: "Se vi mais longe, foi por estar de pé sobre ombros de gigantes." },
    { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, somente compreendido." },
    { autor: "Nikola Tesla", citacao: "Se você quer descobrir os segredos do Universo, pense em termos de energia, frequência e vibração." },
    { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças." },
    { autor: "Galileu Galilei", citacao: "A matemática é o alfabeto com o qual Deus escreveu o universo." },
    { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar à mudança." },
    { autor: "Niels Bohr", citacao: "Um especialista é uma pessoa que cometeu todos os erros que podem ser cometidos em um campo muito estreito." },
    { autor: "Max Planck", citacao: "A ciência não pode resolver o mistério final da natureza." },
    { autor: "Richard Feynman", citacao: "O primeiro princípio é que você não deve se enganar, e você é a pessoa mais fácil de enganar." },
    { autor: "Carl Sagan", citacao: "Alegações extraordinárias exigem evidências extraordinárias." },
    { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem e não devem ser separadas." },
    { autor: "Louis Pasteur", citacao: "A sorte favorece a mente bem preparada." },
    { autor: "Ada Lovelace", citacao: "A matemática constitui a linguagem através da qual podemos expressar as grandes leis do universo." },
    { autor: "Johannes Kepler", citacao: "A natureza usa o mínimo possível de tudo." },
    { autor: "Alexander Fleming", citacao: "Às vezes, a pessoa encontra o que não está procurando." },
    { autor: "Thomas Edison", citacao: "Gênio é um por cento de inspiração e noventa e nove por cento de transpiração." },
    { autor: "Michael Faraday", citacao: "Nada é maravilhoso demais para ser verdade." },
    { autor: "Erwin Schrödinger", citacao: "A tarefa não é tanto ver o que ninguém viu ainda, mas pensar o que ninguém pensou ainda." },
    { autor: "Dmitri Mendeleev", citacao: "Sem trabalho árduo, não há realizações que cresçam." },
    { autor: "Jane Goodall", citacao: "O que você faz faz a diferença, e você tem que decidir que tipo de diferença quer fazer." },
    { autor: "Neil deGrasse Tyson", citacao: "A coisa boa sobre a ciência é que ela é verdadeira, quer você acredite nela ou não." },
    { autor: "Werner Heisenberg", citacao: "O que observamos não é a própria natureza, mas a natureza exposta ao nosso método de questionamento." },
    { autor: "Lise Meitner", citacao: "A ciência faz com que as pessoas alcancem a verdade e a objetividade." },
    { autor: "Antoine Lavoisier", citacao: "Na natureza, nada se cria, nada se perde, tudo se transforma." },
    { autor: "Enrico Fermi", citacao: "Antes de vir para cá eu estava confuso sobre este assunto. Tendo ouvido sua palestra, ainda estou confuso." },
    { autor: "Edwin Hubble", citacao: "Equipado com seus cinco sentidos, o homem explora o universo ao seu redor." },
    { autor: "Alan Turing", citacao: "Às vezes são as pessoas de quem ninguém imagina nada que fazem as coisas que ninguém pode imaginar." },
    { autor: "Gregor Mendel", citacao: "Meus estudos científicos me trouxeram grande satisfação; estou convencido de que não demorará muito para que o mundo inteiro reconheça os resultados do meu trabalho." },
    { autor: "Rachel Carson", citacao: "Quanto mais claramente focarmos nossa atenção nas maravilhas e realidades do universo, menos gosto teremos pela destruição." }
];

app.get('/random', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    res.send(numeroAleatorio.toString());
});

app.get('/dado', (req, res) => {
    const numeroDado = Math.floor(Math.random() * 6) + 1;
    res.send(numeroDado.toString());
});

app.get('/citacoes', (req, res) => {
    const indiceAleatorio = Math.floor(Math.random() * citacoesCientistas.length);
    const citacaoSorteada = citacoesCientistas[indiceAleatorio];

    res.send(citacaoSorteada); 
});

// Inicia o servidor apenas se estiver rodando localmente
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => {
        console.log('Servidor rodando! Acesse: http://localhost:3000');
    });
}

module.exports = app;