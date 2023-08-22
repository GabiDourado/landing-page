import ConteudoDireita from "./cont-direita";
import ConteudoEsquerda from "./cont-esquerda";
import DadosInfo from "./css/img/Dados-info.jpg";
import Sistemas from "./css/img/sistemas.jpg";
import Ficha from "./css/img/Ficha.jpg";
import Mestre from "./css/img/Mestre.jpg";
import Jogadores from "./css/img/jogadores.jpg";
import RPGonline from "./css/img/RpgOnline.jpg";
import Twitch from "./css/img/Twitch.jpg";
import AOP from "./css/img/aop.jpg";
import OSNF from "./css/img/osnf.jpg";
import OPD from "./css/img/opd.jpg";
import OPC from "./css/img/opc.jpg";
import OSNI from "./css/img/osni.jpg";
import SDOL from "./css/img/sdol.jpg";

function Conteudo(props) {
    return (
      <>
        <ConteudoEsquerda foto={DadosInfo} alt="dados de rpg" tit="Dados"explicacao="Os dados são algo de extrema importância para um jogo de RPG, pois é a partir deles que é posivel saber se seu personagem consegue ou não fazer uma ação.
        Geralmente são encontrados em um conjunto que contêm 7 diferentes dados, e são esses os mais básicos usados para jogar. São nomeados com “D” e a quantidade de lados que possui. Os mais comuns são: D4, D6 (o dado comum), D8, D10, D12, D20 e D100. São esses os mais comuns e mais utilizados em uma campanha de RPG, mas existe sim, outros dados."/>
        <ConteudoDireita foto={Sistemas} alt="Livros de sistemas de rpg" tit="Sistemas"explicacao="Para criar uma campanha de RPG, é preciso escolher um sistema, que é basicamente um conjunto de “regras”de um determinado sistema. Mas, escolher um sistema não impede de criar ou alterar as regras, pelo contrário. Os sistemas servem como base para ajudar na criação de uma campanha, mas a imaginação é liberada.
        Os sistemas mais famosos são: Dungeons and Dragons, Call of Cthulhu, Tormenta, Dragon Age, Vampiro: A Máscara, Cyberpunk 2020, entre diversos outros. 
        Não é algo obrigatório para se jogar, você pode escolher criar algo completamente novo, sem se basear em um sistema existente."/>
        <ConteudoEsquerda foto={Ficha} alt="Ficha de d&d" tit="Fichas"explicacao="As fichas são uma das coisas mais fundamentais para a criação de um personagem. É a partir dela que o jogador define as características do personagem, as perícias, que é o que o personagem sabe ou não fazer, cria uma personalidade e anota os poderes, as classes, a raça, entre diversas outras características do personagem.
        É a partir dos valores que se tem nela junto das definições feitas pelo mestre que é possível saber se uma ação é realizada ou não.
        Ela ajuda o jogador a se organizar, sendo separada por seções, de características, poderes, inventário, entre outros."/>
        <ConteudoDireita foto={Mestre} alt="Mestre de rpg" tit="Mestre"explicacao="O mestre é aquele que cria o contexto e a história em que se passa o mundo, os personagens e tudo que existe em uma campanha de RPG. É ele que vai selecionar o sistema, ajudar na criação das fichas dos jogadores, e controlar tudo que irá ocorrer em uma seção. 
        Mas ele não cria um “roteiro”. Prepara as seções e coloca o desenvolvimento da história nas mãos de seus jogadores. 
        O mestre é como um mediador dos acontecimentos da aventura, o criador e planejador dela."/>
        <ConteudoEsquerda foto={Jogadores} alt="Mesa de rpg" tit="Jogadores"explicacao="Os jogadores são aqueles que vão criar e interpretar os personagens principais da aventura. São eles que vão desenvolver a história e moldá-la, o que pode sair totalmente dos planos iniciais do mestre.
        Os jogadores são fundamentais para que a história tenha um rumo.
        Eles vão criar e fazer o personagem ganhar vida."/>
        <ConteudoDireita foto={RPGonline} alt="Plataforma de rpg online" tit="RPG Online"explicacao="Durante a pandemia, o RPG se tornou bastante popular, mas como estávamos em uma época de quarentena, o RPG online se popularizou, e muitos começãram a utilizar de sites e aplicativos para se “encontrar” com seus amigos para jogar RPG.
        Com esse estouro, surgiram muitas mecânicas e aplicativos que auxiliam na criação das seções online, como o tabletop Simulator, que teve um grande destaque nesse aspecto. "/>
        <ConteudoEsquerda foto={Twitch} alt="Logo Twitch" tit="Transmissões ao vivo na Twitch"explicacao="Quando o RPG se popularizou, foi comum encontrar transmissões de RPG na twitch. Essas seções gravadas tinham entre 2 horas até 8 horas podendo passar disso.
        Um RPG que se tornou muito famoso foi Ordem Paranormal, feito pelo Cellbit, que até hoje, aiinda não foi finalizado e terá um jogo inspirado na história.
        Outros RPGs que assisti foram: Turma B, de D20minutinhos, Yousong Zone, de D20minutinhos também e  Obscuro infinito, por Ggtonho."/>
        <ConteudoDireita foto={AOP} alt="capa ordem paranormal" tit="Ordem Paranormal"explicacao="Ordem Paranormal foi a primeira temporada desse RPG que teve um grande estouro. Se iniciou em 2020  e possui apenas 2 episódios, mas cada um tem cerca de 10 horas.
        Se passa em um mundo onde o panranormal é algo presente e os personagens são investigadores do paranormal, e vão até uma escola para desvendar um mistério envlvendo ele."/>
        <ConteudoEsquerda foto={OSNF} alt="Capa o segredo na floresta" tit="O Segredo Na Floresta"explicacao="O segredo na floresta é a segunda temporada de Ordem Paranormal, os personagens dessa vez, vão até uma cidadezinha do interior para investigar o paranormal e encontrar a outra equipe que stava nessa cidade.
        Durante os episódios, os personagens vão a diversos lugares da cidade, que se chama Carpazinha, onde encontram novos integrantes para a equipe e novos mistérios para a série."/>
        <ConteudoDireita foto={OPD} alt="capa desconjuração" tit="Ordem Paranormal Desconjuração"explicacao="Desconjuração é a terceira temporada de Ordem Paranormal.
        Essa temporada envolve mais combate que as demais, mas é nela também que os personagens começam a utilizar do paranormal ao seu favor.
        Dessa vez, eles possuem uma base, onde iniciam e terminam suas missões.
        Nessa temporada, entram vários novos personagens, mas acaba com poucos.
        As mecânicas do jogo começam a mudar e se tornar um novo sistema de RPG."/>
        <ConteudoEsquerda foto={OPC} alt="capa Calamidade" tit="Ordem Paranormal Calamidade"explicacao="Calamidade é a quarta e última temporada de Ordem Paranormal. Novos personagens aparecem e o paranormal se vê presente cada vez mais forte.
        Os personagens começam a chegar em altos níveis de exposição paranormal, qua é o quanto já presenciaram o paranormal, e desenvolvem novas habilidades. 
        Nessa temporada, os personagens buscam as relíquias de cada elemento para tentar combater o paranormal.
        Não está acabada, ainda téra um final, essa temporada está em hiato."/>
        <ConteudoDireita foto={OSNI} alt="capa O segredo na ilha" tit="O Segredo Na Ilha"explicacao="O Segredo na ilha é um Spin-off de Ordem Paranormal. Não faz parte necessariamente da história principal, mas é um complemento. Nessa história, são personagens completamente diferentes dos que já haviam aparecido. Se passa em uma ilha, que recebeu novos visitantes. Os personagens investigam os mistérios que começam a acontecer na ilha com a chegada dos novos visitantes."/>
        <ConteudoEsquerda foto={SDOL} alt="capa Sinais do outro lado" tit="Sinais Do Outro Lado"explicacao="Sinais do Outro Lado é outro Spin-off de Ordem Paranormal. Também é com novos personagens que nunca tinham aparecido na hitória principal. Dessa vez, se passa no passado, e a ordem que existe na história principal ainda não existia, mas eles tinham um certo conhecimento do paranormal e utilizavam dele. Nessa temporada, os personagens investigam seres que aparentam não ser desse mundo ou realidade."/>
      </>
    );
  }
  
  export default Conteudo;