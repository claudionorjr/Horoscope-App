import { HoroscopeResponse } from '../@Types';
import normalizePixel from './normalizePixel';
import changeDataToBR from './changeDataToBR';

const mockApi: HoroscopeResponse = {
  result: [
    {
      dt: '2021-06-08',
      horoscopes: [
        {
          title: 'Não sei o que eu quero, mas quero já!',
          description:
            'Arianos amados, o astral tá pesado hoje. Pra começar, rola uma quadratura entre a Lua e Mercúrio, que tá on na sua Casa do Dinheiro, sinal de que suas finanças vão ficar uma bagunça. Talvez a sua cabeça fique cheia e você precise espairecer um pouco, aí tende a gastar demais com saidinhas, jogos e diversões variadas. Também há risco de sofrer um roubo. Tá amarrado!\r\n\r\nLua e Vênus têm uma treta das brabas à tarde e o espírito da personagem da Carolina Ferraz tende a baixar no seu corpinho: pode sair gritando “eu sou rica” e torrar sua grana com coisas que gosta, objetos bonitos e roupas da moda. No final, irá ficar com uma ressaca financeira: carteira vazia, entrada no cheque especial e limite do cartão de crédito estourado, sem contar a chuva de boletos que virão depois.\r\n\r\nNem sua vida amorosa escapa. A Lua forma um aspecto nervoso com Urano e há sinal de tensão. Depois de um dia de furdunço, pode perder a paciência, explodir e ser cruel com o mozão ou crush. Com um cenário astral desses, a melhor coisa a se fazer é garantir um pouco de proteção. Por isso, logo que pular da cama, faça um banho de proteção. Ele possui ervas selecionadas que são capazes de fazer um bloqueio contra energias intrusas. Esse banho pode ser usado para afastar a inveja e também para momentos em que nos sentimos atacados ou sugados energeticamente.',
          sign: 'Áries',
        },
        {
          title: 'Devagar se vai ao longe',
          description:
            'O dia promete eita atrás de vixe, meninos e meninas de Touro. Suas emoções e pensamentos podem ficar instáveis por conta do aspecto tenso que rola entre a Lua, que entrou na sua Casa da Família de madrugada, e Mercúrio. Aí, você tende a ficar nervoso(a), falar demais e ser indiscreto(a) com o pessoal de casa.\r\n\r\nMas como dizem por aí, não existe nada tão ruim que não possa ficar pior, não é? À tarde, quem briga com a Lua é a fada (nada) sensata Vênus, sinal de que sua vontade de agradar e mimar seus queridos pode sair pela culatra: seus parentes tendem a se aproveitar da sua empatia e abusar da sua boa vontade. Preste atenção pra não fazer papel de trouxa, tauriene.\r\n\r\nCom o mozão, pode agir de modo nada tradicional e as coisas podem engrossar. Sua teimosia em fazer tudo do seu jeito e seu individualismo serão os grandes vilões da relação. Se estiver na pista, a necessidade emocional de ter liberdade talvez te impeça de jogar charme e seducência nos contatinhos.',
          sign: 'Touro',
        },
        {
          title: 'Quem cala não sai do lugar',
          description:
            'Como dizia o Candinho de Êta Mundo Bom!, “o que acontece de ruim na vida da gente é pra meiorá”. Então seu futuro promete ser uma maravilha, mas não hoje. É que a Lua tá no maior ranço com outros astros e sua terça deve ser uma bagaça. Pra começar, ela treta com Mercúrio, que está no seu inferno astral, e você tende a ficar de conversa fiada, falar demais e se meter em fofocas ou calúnias.\r\n\r\nNos estudos, pode ter perrengues, se distrair fácil e não conseguir usar sua imaginação.\r\n\r\nNo finzinho da tarde, Lua e Vênus brigam feio e talvez role ansiedade com relação às finanças, podendo se envolver em esquemas ou transações comercias clandestinas. Olho aberto, cristalzinho.\r\n\r\nNo amor, há risco de mágoas e sofrimento. Talvez inicie um caso secreto ou ganhe um belo par de chifres. Depois de um dia cheio de dores de cabeça, o aspecto tenso entre Lua e Urano indica que corre o risco de perder a boa com as pessoas. Pode sentir necessário se afastar e ter seu espaço. Com tanto perrengue, pode se sentir perdido(a) e não saber o que fazer. Recorrer às previsões semestrais do tarô ou a uma consulta com especialistas pode ajudar a dar uma aliviada no coração e a afastar as preocupações.',
          sign: 'Gêmeos',
        },
        {
          title: 'Meu coração é do tamanho do mundo',
          description:
            'Hoje, os astros vão botar fogo no parquinho, Câncer, meu consagrado. Lua e Mercúrio trocam farpas, sinal de que sua comunicação será afetada por suas emoções. Pode acordar e exagerar no envio de mensagens motivacionais ou de “bom dia”. Seu afeto pode não ser correspondido e há sinal de pouca sinceridade em suas relações e contatos.\r\n\r\nNo fim da tarde, a Lua, que entrou na sua Casa da Fortuna de madrugada, forma um aspecto nervoso com Vênus e pode sobrar pro seu bolso. Falsos amigos ou pessoas interesseiras devem surgir e você corre o risco de cair no conto do vigário, emprestando grana, sendo generosa(o) demais ou embarcando em negócios errados. Calma, respira, inspira e não pira!\r\n\r\nO clima continua puxado à noite, quando a Lua briga feio com Urano. Se estiver na pista, pode continuar aí mesmo. Talvez mude os planos de arrumar um love e sinta que é hora de ficar só. Faça o seu mapa do amor em meu site. Ele traz indicações incríveis sobre sua vida amorosa e pode te ajudar a definir mais claramente quais são seus anseios e expectativas neste campo, o que você faz que atrapalha seus relacionamentos, como é seu comportamento na paquera, etc. Ele pode ser uma excelente alternativa para esse momento de reflexão.\r\n\r\nCom o mozão, as emoções ficam uma loucura e tende a alterar momentos de simpatia com antipatia.',
          sign: 'Câncer',
        },
        {
          title: 'Bate palmas que eu mereço',
          description:
            'Sua terça deve ser osso, leãozinho. Na vida profissional, sua maneira de se comunicar tende a influenciar sua reputação, mas, com a vibe tensa entre Lua e Mercúrio, corre o risco de se deixar levar pela emoção e acabar se queimando. Suas mudanças de humor podem gerar críticas e fofocas. Planos e reuniões de trabalho talvez não deem os frutos que desejava, tudo culpa da treta brava que rola entre Lua e Vênus, que está na sua Casa das Ambições.\r\n\r\nNo amor, pode ter ligações de interesse ou por admiração, importando-se mais em manter as aparências do que com o sentimento. Envolvimento com alguém da mesma carreira pode dar bode, inclusive pra sua imagem no serviço.\r\n\r\nA Lua fica no maior ranço com Urano, sinal de que deve se inconformar com o pouco brilho na vida profissional e social. O desejo de não ter patrão tem tudo pra crescer e, aí, pode explodir e ir em busca de independência. Controle os impulsos e aja com responsabilidade pra não se dar mal. Se precisar de ajuda e de respostas no dia de hoje, conte com as previsões semestrais do tarô ou busque uma consulta com especialistas para dar uma aliviada no coração e a afastar as preocupações.',
          sign: 'Leão',
        },
        {
          title: 'Melhor amigo da perfeição',
          description:
            'Quer um dia perfeito sem defeitos, virginiane? Vai ficar querendo. É que a Lua entra no seu inferno astral de madrugada e fica toda afrontosa com outros astros, despejando vibes tensas. No trabalho ou estudos, sobretudo de faculdade, corre o risco de ter ideias inconvenientes ou se confundir em suas explicações. Talvez precise de privacidade, se isolar dos colegas e ficar longe do público.\r\n\r\nA Lua forma um aspecto nervoso com Vênus e os dois revelam que você pode se cansar da rotina e embarcar em aventuras amorosas e financeiras que podem dar ruim.\r\n\r\nÀ noite as coisas melhoram, só que não. A Lua troca farpas com Urano, que está na sua Casa da Viagem, e dois avisam que há sinal de atribulações e até tretas com as pessoas num rolê.\r\n\r\nCom o mozão, há risco de sofrer com relação restritiva. Pode precisar de liberdade e tomar atitudes imprevisíveis. Se estiver na pista, não deve ficar muito sociável nem a fim de se expor. Aí, não tem santo que te ajude a desencalhar. Que tal fazer um banho de abertura de caminhos assim que pular da cama? Ele possui ervas selecionadas que trabalham retirando obstáculos e desbloqueando a sua energia, atraindo fluidez. Vai ajudar muito a superar os perrengues que os astros prometem para hoje.',
          sign: 'Virgem',
        },
        {
          title: 'Decidir ou não decidir, eis a questão',
          description:
            'Os astros não estão pra brincadeira e deve dar vontade de cancelar o dia. De manhã, a Lua treta com Mercúrio, que tá on na sua Casa das Transformações, e talvez sinta necessidade de mudar sua atitude mental. É que pode deixar amigos ou outras pessoas mexerem com suas emoções e te influenciarem. Melhor não contar sempre com amizades nem divulgar seus planos pra que nada dê errado.\r\n\r\nNos negócios, corre o risco de ter grandes perdas de dinheiro, culpa do aspecto tenso entre a Lua e Vênus.\r\n\r\nNas amizades, tende a ter muitos conhecidos, mas suas relações devem ser superficiais – mais quantidade do que qualidade.\r\n\r\nÀ noite, a Lua fica desaforada com Urano, que está na sua Casa do Sexo, e os dois avisam que a intimidade pode ficar complicada. Talvez pinte atração por um contatinho, mas tudo indica que não vai ser amor, e sim uma bela cilada. Lance com amigo pode se tempestuoso e acabar com a amizade. Se já se amarrou, será difícil controlar o desejo por outro crush. Eita! Se precisar de ajuda e de respostas no dia de hoje, conte com as previsões semestrais do tarô ou busque uma consulta com especialistas para dar uma aliviada no coração e a afastar as preocupações.',
          sign: 'Libra',
        },
        {
          title: '105% sinceridade, 0% delicadeza',
          description:
            'Escorpião, meu consagrado, o céu tá um fervo só, e não é aquele fervo sexual que seu signo curte, não. A Lua, que entrou na sua Casa da Carreira na madrugada, começa o dia tretando com Mercúrio, sinal de que você deve ter opiniões diferentes e se desentender com as pessoas, colegas ou chefes. Pode receber críticas e perder sua boa reputação, mas tende a se preocupar com suas associações e com o que os outros pensam.\r\n\r\nÀ tarde, rola discórdia entre a Lua e a fada sensata Vênus, que tá on na sua Casa dos Relacionamentos. Há sinal de perrengues em suas parcerias profissionais e contratos, correndo o risco de fazer muitas concessões nas uniões.\r\n\r\nDepois, Lua e Urano entram num fight e deve sobrar pra sua vida amorosa. Se já tem um mozão, tudo indica que vai querer mais liberdade, ou a relação poderá ir pro beleléu.Pode até propor relacionamento aberto para o love. Se está na pista, tende a acionar vários contatinhos e pode começar ou terminar um caso de repente. Recomendo que faça um banho de equilíbrio emocional. Ele possui ervas selecionadas que são capazes de trabalhar o equilíbrio de sua energia e a paz de espírito, trazendo harmonia para suas emoções. Você vai precisar, acredite em mim.',
          sign: 'Escorpião',
        },
        {
          title: 'Onde tem festa?',
          description:
            'Sagitário, meu cristalzinho, melhor tentar ficar suave e ir de mansinho porque o astral tá puxado hoje. Lua e Mercúrio trocam farpas e causam um furdunço no trabalho e na sua saúde. Tudo indica que sua mente estará um caos, com pensamentos e ideias baseadas na emoção, mudanças de opiniões e várias teorias, mas sem convicções fortes. Preocupações e tretas com colegas ou funcionários podem afetar seu bem-estar. Recomendo que faça um banho de equilíbrio emocional. Ele possui ervas selecionadas que são capazes de trabalhar o equilíbrio de sua energia e a paz de espírito, trazendo harmonia para suas emoções.\r\n\r\nÀ tarde, a Lua forma um aspecto nervoso com Vênus e os dois avisam que, se estiver viajando ou dando um rolê, há risco de enfrentar alguns perrengues. Tá amarrado!\r\n\r\nLua e Urano têm uma briga das brabas à noite, sinal de que você irá se incomodar com restrições e não aceitará receber ordens de ninguém. Seja com o seu mozão ou um contatinho, a luz da liberdade vai acender e tende a ser brusca(o) caso tentem dizer o que deve ou não fazer. Pode se entediar com a mesma rotina na relação – se as coisas não mudarem, há risco de chutar o balde.',
          sign: '',
        },
        {
          title: 'Planejo minha vida até 2050',
          description:
            'Caprica, papo reto, papo sério: os astros estão pistolas no céu e é você quem deve pagar o pato. A Lua, que migrou pra sua Casa das Transformações na madrugada, tá toda trabalhada no ranço com Mercúrio, sinal de que você deve ter dificuldade pra se expressar e tende a se exceder nas críticas.\r\n\r\nNos negócios, pode fazer investimentos ruins e ter problemas financeiros por causa de associações.\r\n\r\nÀ tarde, a Lua forma um aspecto nervoso com Vênus e os dois avisam que você talvez dramatize as situações e reações emocionais intensas em suas relações. Com a tensão entre Lua e Urano à noite, tudo indica que ficará impaciente com laços permanentes e pode tomar atitudes sem pensar. Se já tem um mozão, pode explodir e acabar fazendo bobagens. Melhor tomar o seu paracetaloka e contar até um milhão antes de agir, coleguinha. Está solteira(o)? Como não deve querer as responsabilidades de um relacionamento sério, pode exagerar na frieza com os crushes.',
          sign: 'Capricórnio',
        },
        {
          title: 'Feliz do meu jeito',
          description:
            'Os astros mandam um alerta real oficial: o dia tá puxado e pode rolar um tombo atrás do outro. Por isso, recomendo logo de cara que você faça um banho de equilíbrio emocional assim que abrir os olhos. Ele possui ervas selecionadas que são capazes de trabalhar o equilíbrio de sua energia e a paz de espírito, trazendo harmonia para suas emoções.\r\n\r\nA Lua tá toda bravinha com Mercúrio de manhã e suas alianças profissionais estarão de lascar. Você e seus parceiros podem não falar a mesma língua e há sinal de mudanças.\r\n\r\nSe trabalha home office, preocupações familiares ou domésticas tendem a tirar sua concentração. Falando em casa, o clima pode pesar por conta de divergências e perrengues com seus queridos, tudo culpa da quadratura entre a Lua e a fada sensata Vênus, que tá on na sua Casa da Família.\r\n\r\nÀ noite, a Lua treta com Urano e os dois astros avisam que a vontade de ter liberdade pode te levar a agir com rebeldia. Deve romper o que for preciso em busca do que quer. Se tem um mozão, os problemas devem vir à tona e pode se frustrar com a falta de individualidade. Há chance de se envolver em mais de um lance ao mesmo tempo – tenha consciência e responsabilidade pra não se meter em confusão, aquariangel.',
          sign: 'Aquário',
        },
        {
          title: 'Choro mesmo, e daí?',
          description:
            'Hoje os astros estão doidinhos, doidinhos pra te lascar, Peixes, meu consagrado. Logo de manhã, a Lua, que entrou na sua Casa do Trabalho durante a madrugada, roda a baiana com Mercúrio. E o que isso significa? Tiro, porrada e bomba! Sua mente tende a ficar instável e pode perder tempo com rádio peão. Seu estado emocional pode afetar o modo como expõe suas ideias, o que talvez cause desentendimentos e te prejudique no emprego.\r\n\r\nNa saúde, há risco de hipocondria ou doenças psicossomáticas. À tarde, a Lua dá uma de maluca pra cima de Vênus e sobra pra quem? Isso mesmo, pra você, ou melhor, para os seus relacionamentos. Tudo indica que terá dificuldade em seus contatos e instabilidades nas relações. Nos estudos, Lua e Urano tretam e avisam que sua mente deve ficar inquieta e sua concentração, bem baixa.\r\n\r\nSua vida amorosa pode não rolar como esperava e, aí, tende a ficar sem saber o que fazer. Se precisar, pode buscar respostas em seu mapa do amor , nas previsões semestrais do tarô ou em uma consulta com especialistas pode ajudar a dar uma aliviada no coração e a afastar as preocupações. Envolvimento com colega de serviço deve render apenas dor de cabeça.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-09',
      horoscopes: [
        {
          title: '.',
          description:
            'Invista em meditação ou  terapia. Este é um dia especial para tudo o que faça bem as suas emoções',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'O amor está se nutrindo do seu desejo de se aprimorar, de melhorar como ser humano, de evoluir.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Uma nova disposição para se comunicar e se relacionar com as pessoas com mais harmonia e paz, melhorará seu dia.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Invista em parcerias de negócios e de trabalho. Esteja mais disposta a colaborar.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'O caminho é não racionalizar demais. Se deixe envolver pela empatia e solidariedade.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'No seu trabalho, agir com ética e cultivar bons relacionamentos, fará conquistar seus objetivos.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Compense o estresse e desgastes, praticando o Hoóponopono: Sinto muito, me perdoe, eu te amo, sou grato.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'O excesso de  concentração em demandas profissionais, diminui a atenção em sua vida afetiva.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Para afastar a apatia ou tristeza, use produtos a base de jasmim (incenso, óleo essencial...)',
          sign: '',
        },
        {
          title: '.',
          description:
            'Dá aquela vontade de se relacionar, harmonizar, amar e ser amada. Mãos à obra!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Invista  atividades nos bastidores: finalização de projetos, últimos ajustes, retoques.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Coloque um ponto final em antigos sentimentos que não façam bem a sua saúde mental.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-10',
      horoscopes: [
        {
          title: '.',
          description:
            'Alerta: Eclipse hoje anuncia: “Quem tem pressa come cru. Cuidado também com a comunicação e distrações.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Divulgue seu trabalho, dê um trato na aparência e invista em sua imagem.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Hora de “puxar o freio de mão”. Desacelere e tomar cuidado com mal entendidos.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Hora de deixar pra trás velhas crenças limitantes e situações aprisionadoras.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dialogue de coração aberto com quem ama e trabalhe em colaboração.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Imprevistos e falhas podem ocorrer. Quê tal deixar de lado atitudes controladoras?',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Exercite o jogo de cintura. Com flexibilidade, aproveite para desfazer confusões, tirar dúvidas, repensar projetos.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Procure fazer algo criativo, ou que seja do seu agrado. E que tal encerrar uma relação tôxica?',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Com Vênus em Câncer, tarefas criativas e prazerosas estão beneficiadas.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Para que portas abram e oportunidades surjam, invista mais  em sua expressividade e  em seu potencial para seduzir.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'A pressa pode trazer distrações e enganos, prefira desacelerar para conectar-se com seu coração e sua intuição.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Com a Lua em Gêmeos, dia para esclarecer mal entendidos, tirar dúvidas e  interagir com mais afeto.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-11',
      horoscopes: [
        {
          title: '.',
          description:
            'Lua  fase nova é propícia para da uma repaginada no visual. Mãos à obra!',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Seja cautelosa. Com calma, hora de checar os dados, anotar tudo na agenda para evitar enganos ou esquecimentos.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Quem tem boca vai a Roma. Dia de reunir as informações para completar sua tarefa ou realizar seu projeto.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Bom dia para iniciativas gerais. Seja espontânea e não espere acontecer, tome  a atitude.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Esteja aberta para revisões, mudanças, ajustes e alterações em seus planos, ciente de que tudo é pra melhor.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Invista em sua melhor ferramenta: a comunicação. Vale promover divulgações e contatos.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Sua cabeça esta nas nuvens! Cuidado  com ilusões, enganos e distrações. Mantenha os pés no chão!',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Parcerias e a vida social estão em destaque, mantenha-se aberta para novos contatos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Borá “minguar” expectativas exageradas com doses de realismo.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Plutão em seu signo favorecer seus dons de liderança. Hora de agir!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Prefira estar de coração aberto para elogiar, ouvir e ser ouvida.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Antes de sair de casa, capriche na apresentação pessoal e distribua sorrisos!',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-12',
      horoscopes: [
        {
          title: '.',
          description:
            'Sua visão da vida está condicionada por um forte desejo de renascimento e transformação',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'As ideias fluem com criatividade. Insights surgem e devem ser anotados',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Dê um tratamento especial ao amado(a). Ou seja, não economize em elogios e mimos',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Alguém mais velho ajudará num projeto na área da comunicação',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dia ideal para começar uma dieta se estiver precisando perdes aqueles quilos extras',
          sign: 'Leão',
        },
        {
          title: '.',
          description: 'Eliminação traz iluminação. Pense nisso!',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Mais eficiente e corajosa, dia perfeito para resolver aqueles “pepinos: que vêm adiando',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Nunca se esqueça: amar é tratar alguém com exclusividade e ser amada é ser especial',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Melhor parar com o computador às 18h. Instabilidade e altos e baixos emocionais',
          sign: '',
        },
        {
          title: '.',
          description:
            'Hora de retomar projetos importantes ou reuniões adiadas',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Hoje você ficará mais sensível. Cultive liberdade, coloque-se em movimento para evitar a inquietação',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Um pouco de recolhimento para reflexões, é bem vindo. Invista em atitudes mais maduras e responsáveis',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-13',
      horoscopes: [
        {
          title: '.',
          description:
            'Versatilidade, poder de convencimento e boa oratória hoje',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Com a Lua em Câncer, os diálogos estão favorecidos. Cuidado apenas para não falar demais!',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Evitar inaugurar uma empresa ou mudar de empresa. Mantenha sua rotina.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Pense positivo! Para os budistas, tirar o não das frases gera energia do bem.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Um amigo mais atencioso, é na verdade, princípio de um romance.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Não confie em sua imaginação, que hoje pode distorcer os fatos.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Cuidado, tendência a ver amor e romance, onde só existe um flerte juvenil.',
          sign: 'Libra',
        },
        {
          title: '.',
          description: 'Mais emotividade, sensibilidade e empatia. Seja grata.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Com o Sol em Gêmeos, veja e seja vista. Seu social está em expansão.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Que tal ligar para sua mãe e dizer o quanto sente sua falta?',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Aproveite: aquelas tarefas complexas são realizadas hoje com destreza.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Abandone os planos que não desabrocharam a 7 dias atrás.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-14',
      horoscopes: [
        {
          title: '.',
          description: 'Bom dia para entrar com uma ação judicial.',
          sign: 'Áries',
        },
        {
          title: '.',
          description: 'Foco na família e no lar. Fazer o bem olhando a quem.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Atividades físicas que envolvam água, ajudam a reduzir a ansiedade.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Alguém pedirá desculpas por algo que falou a duas semanas atrás.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Superdisposição e energia para levantar cedo e ir malhar.',
          sign: 'Leão',
        },
        {
          title: '.',
          description: 'Decisões tomadas hoje, serão definitivas. Mãos à obra!',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'O nervosismo e a tensão estão deixando seu sono instável. Chá de camomila antes de dormir.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Decisões tomadas agora com relação ao casamento, serão definitivas.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Hora de investir em produções mais ousadas, cheias de criatividade e cores.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Hoje o convite é para colocar o “motor a todo vapor”, sobretudo no trabalho.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Você é convidada a romper as barreiras do comodismo e da falta de coragem.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Seu  mantra hoje: “Se você quer bem feito, faça você mesma”.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-15',
      horoscopes: [
        {
          title: '.',
          description:
            'Pavio curto à vista. Pode pintar um anticlímax na relação.',
          sign: 'Áries',
        },
        {
          title: '.',
          description: 'Mais família, perdão e se libertar das mágoas.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Lua em Virgem é ideal para fazer faxina, organizar papeis e doar o que não usa.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description: 'Astral positivo: jovialidade, bom humor e diversão.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Cuidado com a dramaticidade. Sobra exagero, falta moderação.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Boca fechada não entra mosquito. Comunicação complicada.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Lua em Virgem favorece as palavras, que são cheias de pragmatismo e estimulo à ação.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Às vezes é melhor omitir certas verdade para não magoar alguém que amamos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Veja e seja vista. Conversas agradáveis com gente interessante à vista.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Pratique o desapego e bora doar peças que ainda servem para outras pessoas.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Para viver em paz, aceite que você é um turista na Terra. \r\nHora de evoluir!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Imprevistos ligados à casa: vazamento, entupimento. Tenha, portanto, um plano B.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-16',
      horoscopes: [
        {
          title: '.',
          description:
            'Falar hoje tudo o que lhe incomoda, tira um peso das costas.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Seu senso estético e prático estão prejudicados. Nada de compras hoje.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Que tal iniciar projetos entre mulheres e até ficar grávida?',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Mantenha sua agenda flexível, já que alguns planos terão que mudar.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Confusão à vista. Evite pessoas agressivas ou autoritárias.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Ânimos acirrados em casa. Conselho: fale menos, ouça mais.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Incenso de jasmim reduz ansiedade e estimula sua intuição.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'A sedução passa por atitudes prestativas, o que na prática significa, ser útil e resolver pepinos do amado (a).',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Ideal investir hoje nas cores cereja, vinho e bordô. Sensualidade em alta!',
          sign: '',
        },
        {
          title: '.',
          description:
            'Apresente seu projeto profissional. Há mais garra e força de vontade.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Insatisfeita com seu estilo? Dia perfeito para contratar uma consultora de imagem.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description: 'Palavras cheias de gentileza e elogios, abrem portas',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-17',
      horoscopes: [
        {
          title: '.',
          description:
            'O dia trará uma  experiência profundamente gratificante e libertadora.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Um encontro hoje, lhe dará oportunidade de perceber e conversar sobre coisas que tem mantido em segredo.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Hora de reconhecer suas mágoas e sensibilidades, sem o medo de ser ferido ou rejeitado mais uma vez.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Aproveite o dia e remova todos os obstáculos para realizar o que planejou.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Facilidade em manifestar iniciativa, agarrar espontaneamente oportunidades e agir com coragem.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Momento de empenhar-se no relacionamento pessoal: se ama alguém, estará disposta a não medir esforços para conquistar ou melhorar a relação.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Busque atividades, contatos e experiências que a gratifiquem e enriqueçam.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Torne sua vida mais colorida, intensa e emocionante,  exija o máximo de qualidade de vida e melhore sua situação.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Seu otimismo e sua ambição motiva outras pessoas, e isto faz você uma pessoa melhor!',
          sign: '',
        },
        {
          title: '.',
          description:
            'Lute  com determinação para obter reconhecimento na sua carreira. Hora de apostar alto.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'É muito importante atingir aquilo por que está lutando e viver a alegria da realização de seus desejos.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'O que a  impele a agir hoje, é um profundo anseio de paz interior e felicidade total e duradoura.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-18',
      horoscopes: [
        {
          title: '.',
          description:
            'Com a Lua em Libra, invista nos relacionamentos e experiências prazerosas (massagem, boa comida, se presentear).',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Você precisa de uma vocação que a inspire e lhe permita dar o máximo de si.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Dia de provar para si e para os outros tudo aquilo de que é capaz.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Se alguém lhe fizer exigências descabidas ou injustas,  defenda com veemência.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Momento para deixar tudo que é incômodo e desagradável para trás e relaxar em companhia de gente aberta e simpática.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Criar para si metas, projetos ou ideais é como tomar uma verdadeira injeção de ânimo.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Com a Lua em seu signo, participe de alguma atividade que levante seu astral e a distraia das coisas chatas.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'De vez em quando, é necessário o estímulo da variedade, além da oportunidade de quebrar a rotina do dia-a-dia.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Uma atitude positiva, te ajuda a defender-se melhor das dificuldades que surgem no decorrer do dia.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Hora de busca meios que permita desfrutar da vida sem preocupações e dedicar mais tempo às coisas que lhe dão alegria.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Se sente acorrentada a pessoas ou circunstâncias que te restringe a liberdade, hora de se soltar.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Não acredite em tudo que te dizem, porque algumas pessoas querem apenas ganhar sua confiança.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-19',
      horoscopes: [
        {
          title: '.',
          description:
            'O trabalho se apresenta com muitos movimentos. É tempo de estabilidade e de melhorar a relação com seu chefe.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Seu parceiro sente que você não o inclui em sua vida. Cuidado!',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Seu cansaço devido ao ritmo acelerado dos últimos dias, esta começando a fazer estrago em seu trabalho. Descanse.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Há tendência a usar palavras duras com pessoas queridas. Moderar e suavizar hoje.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dia ideal para aprendizagens, capacitações e melhorar suas habilidades profissionais.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'É impossível voltar no tempo. Não perca energia, pensando como seria as coisas, se tivesse feito de outra maneira.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description: 'Alguns términos devem ser comemorados. Mãos à obra!',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Um outro dia de sol sempre nasce, um novo caminho surge, a verdade vence e a vida renasce.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Tá com medo? Vai com medo mesmo!! Mexa-se, movimente-se!',
          sign: '',
        },
        {
          title: '.',
          description:
            'A energia tem de fluir e a vida pede desenvolvimento. Colocar uma  pitada de ousadia na vida, não faz mal a ninguém!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Ótimo dia para  fazer uma pausa e repensar sua vida e o que está fazendo com ela.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Não adianta reclamar e se debater. Reze, medite, busque força e inspiração, e quando possível faça a mudança necessária.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-20',
      horoscopes: [
        {
          title: '.',
          description:
            'Faça bem feita a sua “lição de casa” com perseverança e seriedade, e o retorno é certo!',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'A vida segue seu fluxo e refluxo natural. Seja mais tranquila ,não adianta se debater e sofrer, pelo “leite derramado”.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Para tomar uma atitude que entenda ser definitiva, pense, avalie todas as possibilidades, e veja todos os aspectos e ângulos da questão.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Dia para sossegar o espírito, recolher e  distancie-se das opiniões alheias.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Substitua culpa por responsabilidade, dúvidas por autoconhecimento e consciência.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Se encontrar alguém hoje,  e esse alguém fizer seu coração parar por alguns segundos, preste atenção: pode ser a pessoa mais importante de sua vida.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Hoje, cultive uma atitude mais livre, independente e menos provocadora.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Dia ideal para abandonar velhos condicionamentos. E evite julgar pelas aparências.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O romance e as atividades artísticas são bem vindas hoje.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Adoce sua vida. O chocolate tem feniletilamina, reduzindo a ansiedade e te deixando mais feliz.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Acenda uma vela e, junto dela, coloque a imagem de  Santo Antônio. Ore e peça um amor verdadeiro.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Dia de cultivar generosidade, fé e inspiração. Aproveite para aprender algo novo, estudar ou pesquisar melhor as notícias.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-21',
      horoscopes: [
        {
          title: '.',
          description:
            'Evite expor-se a discussões desnecessárias. Cuidado com confusões e críticas negativas.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Cuidado com a teimosia, a rigidez e os enganos. Doses de carinho, compreensão e afeto  dissolvem tensões.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Bom dia para compartilhar sentimentos, trocar experiências, expressar-se com sensibilidade.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Sua sensibilidade está à flor da pele. Aproveite para sintonizar com as necessidades dos outros.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Que tal deixar a teimosia de lado? Caso surjam interesses contrários aos seus, evite atritos e disputas.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Dia ideal para meditação e práticas de relaxamento. Aproveite para  tranquilizar a sua mente, que é sempre tão acelerada.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Surpreenda as pessoas com novos pontos de vista para antigas questões e conceitos.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Tenha mais cuidado e diplomacia ao se relacionar. Procure manter-se tolerante e flexível ante as situações.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Vale hoje reservar tempo para ficar sozinha, dar asas à imaginação, meditar, cultivar uma postura mais contemplativa.',
          sign: '',
        },
        {
          title: '.',
          description:
            'É tempo de cultivar a fé e a receptividade. De surfar com a vida e deixar que tudo siga seu curso natural.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Prefira encarar tudo com bom humor, e se preciso, saia de cena para evitar conflitos.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Cuide de sua energia, pegue mais leve e evite  tarefas extenuantes.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-22',
      horoscopes: [
        {
          title: '.',
          description:
            'Opte por cuidar de sua saúde, da sua imagem, mime-se, descansar mais e restaure suas  forças.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Bom momento  para dar asas à imaginação, programar cinema, ouvir música. O clima é de mais sensibilidade.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Procure cultivar sentimentos elevados, encantar-se com as artes e tudo o que é belo. Já falou “eu te amo” hoje?',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Momento para investir em arte, cor, sonho, magia, tudo o que eleve sua alma.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Pegue mais leve e deixe um de lado os assuntos complicados. Temas artísticos e religiosos, merecem sua atenção.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cultive sua paz interior, deixe que sua intuição a guie pelo caminho correto. Use tons de azul.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Redobre a atenção ao trocar informações importantes. O dia pede precaução com falas e mensagens que passa e recebe.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Excelente momento que inspira beleza, prazer, amor e sedução. Autocuidado e auto-amor.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Que tal adoçar sua vida com mais harmonia nas relações e atividades que tragam contentamento?',
          sign: '',
        },
        {
          title: '.',
          description:
            'Cuidado com explosões violentas e exacerbadas. Tanto no relacionamento afetivo, na família, quanto no trabalho.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'É bom evitar radicalismos, conflitos e disputas de poder. Observe sentimentos guardados de raiva e agressividade.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Com flexibilidade e abertura, mude de ideia caso seja preciso. Dia de incertezas.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-23',
      horoscopes: [
        {
          title: '.',
          description:
            'O clima pode esquentar nas situações ligadas ao poder! Portanto, quanto mais tranquilidade, melhor.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Prudência, flexibilidade e tranquilidade são seus melhores antídotos hoje.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Procure ouvir mais e utilizar a palavra sempre com fins construtivos.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Deixe para trás velhos condicionamentos e repensa velhas questões. Desprograme-se.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dia de demonstrar mais carinho, cultivar momentos prazerosos e reconhecer o valor das pessoas que ama.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Hoje não  é um bom período para assinar contratos ou fazer grandes investimentos, pois cresce a tendência de erros e revisões.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'O  dia vai ajudá-la a cultivar objetividade e maturidade, mas mesmo assim cuidado com a pressa, evite forçar situações.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'É tempo de desacelerar e relaxar. Prefira fazer tudo com tempo de sobra, descansar mais e se resguardar de conflitos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'A gentileza e a solidariedade podem abrir portas e atrair oportunidades.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Finalize pendências, sempre com calma. Lembre-se: o alto astral, a tranquilidade e o bom humor são as melhores proteções que pode cultivar!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Gaste energia com movimento e atividades físicas, mas evite a velocidade e a pressa, pois a desatenção pode gerar erros e mal entendidos.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Organize-se melhor, anote informações e tarefas importantes. Procure dosar tudo com boas doses de realismo.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-24',
      horoscopes: [
        {
          title: '.',
          description:
            'Que tal manter a calma sem ficar ansiosa? É importante ter foco e uma estratégia bem definida.  Hoje é um dia importante para seu desenvolvimento pessoal e emocional, para se soltar mais nas relações e entrar em contato com emoções mais profundas.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Nem tudo o que planeja sairá como deseja e cuidado para não se  envolver  em conflitos ou  discussões. Portanto, exercite a sua paciência. Não desperdice inutilmente suas energias tentando manter situações que devem ser mudadas!',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Cuidado com as DRs e conversas desnecessárias nas relações, especialmente se for pra criticar o outro. Tente perceber o que pode mudar em você antes de cobrar dos demais. É hora de rever sua agenda e rotina e deixar a vida fluir melhor.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Hora de mergulhar  dentro de você mesmo. Vale a pena se conectar com suas práticas espirituais, ouvir seus sonhos, refletir e meditar sobre a vida. Dia positiva para encontros amigos,  para troca de ideias e reflexões profundas sobre a vida e o destino. Atenção a cada insight que tiver.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dia positivo para conversar  sobre seus novos projeto profissionais. Tenha certeza se todos que os envolvidos nele,  estão mesmo alinhados em termos de ideias, projetos e perspectivas. Seja  prática e foque mais nos resultados, mas sem esquecer de ser grata a quem vem te ajudando.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Com Lua Cheia hoje, suas energias estão em  alta. Boa fase pros processos de cura: meditação, yoga, constelação familiar… No trabalho, tenha paciência, analise bem cada proposta e possibilidade e comprometa-se pra valer com quem ou com o que você assume.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Hora de autocuidado. Cuide das emoções, do corpo, da alma. Os assuntos da casa e da família são foco e você já precisa ser gentil e sábia com todos. Momento para refletir sobre quem você é e o que deseja da vida, com ativação da área espiritual e abertura pro autoconhecimento.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Ótimas energias hoje. Será bom, já que vai  precisar enfrentar algum desafio que estava adiando ha algum tempo! Somente com empenho e esforços construtivos, conseguirá ter sucesso nesta empreitada. Continue firme rumo aos seus objetivos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'A dica  é cuidar-se bem, coloque o bem-estar, a vida, a saúde e a vitalidade em primeiro lugar.  Conheça seus  limites, e perceba como as notícias são usadas pra te  puxar para baixo. Detox digital faz bem até a sua alma.',
          sign: '',
        },
        {
          title: '.',
          description:
            'Lua cheia em seu signo, pede mais esforço,  trabalho e determinação. Bom pra pensar nos planos dos próximos 6 meses,  selecionando com quem vai desenvolver novos projetos.  Vem ai  melhora em sua vida afetiva e bom relacionamento com gente do seu trabalho.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Encontre um grupo de pessoas que possa desafiar e inspirar você. Passe muito tempo com elas e isso mudará sua vida. É  hora de colocar projetos mais pessoais e autorais em prática. Recuse entrar em disputas bobas. Entenda que cada um de nós ocupa um espaço próprio e rivalizar é perder tempo.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Comemore: coisas novas, sucesso, oportunidades, mais exposição positiva e facilidades, tudo junto hoje. É um momento especial para se soltar mais e mostrar todo seu talento. Mas cuidado para não ficar ansiosa. Seja doce e gentil como sempre, mas saiba colocar limites.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-25',
      horoscopes: [
        {
          title: '.',
          description:
            'Prepare-se para alguns  imprevistos, desde pequenos, que geram demoras ou frustrações, até maiores. Há potencial de nervosismo que pode  afetar seu trabalho e planos de melhorias. O dia te  predispõem ao “sangue ferver” rapidamente. Relaxe!',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Fase boa para ligar pros amigos. O período favorece o contato com grupos e equipes no trabalho. Dia positive no trabalho, com desafios e novidades,e  oportunidades que surgem e que você não pode deixar passar. A receita é ser mais autêntica e leve.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Aproveite o dia para mudar hábitos e repensar sua rotina.  Perceba que não dá pra fazer tudo o  que quer . Concentre sua energia no que mais te interessa. Dia positive para planejar viagens, estudos, começar novos projetos e mudar de casa.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Coloque atenção em suas relações. É importante focar no que quer que aconteça, ser mais verdadeira e profundo com quem se relaciona. Um bom momento para se divertir com quem você mais gosta. Os compromissos sociais estão favorecidos e a criatividade, esta  em alta.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Invista sua energia em cuidar das coisas da casa e da família. Mude sua rotina, introduza algum projeto novo no trabalho, pense em reformar sua casa ou começe algo novo. Se trabalha com redes sociais, ótimo dia para repaginá-lo, mudar foto do perfil, ousar mais.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cuide da saúde para que se sinta bem durante o dia e à noite, evitando enxaquecas, perda do sono ou dores nas costas. Tudo o que é importante para você deve ser guardado a sete chaves. Não precisa alardear seus projetos, ganhos ou conquistas em diversas áreas da vida.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Dia importante para relacionamentos, negócios e vida pessoal. Não arrisque investimentos altos, mas aprenda a poupar. E lembre-se; boca fechada não entra mosquito. Pare de contar toda sua vida!',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Um pouco mais de vaidade faz bem. Mude seu visual, compre roupas novas, invista em você. Hora de planejar novas capacitações, através de cursos têcnicos. Conversas com irmãos são produtivas, daí sairá bons conselhos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Use a experiência do passado, inclusive os erros, para tomar sábias decisões.  Dia positivo para conversar com amigos, pedir conselhos, trocar ideias. Tendência a problemas de pele ou desidratação. Cuide de seu maior bem: seu corpo.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Cuide de você, foco nos seus projetos. Dia de crescimento e oportunidades profissionais. É um ótimo momento para se inscrever em algum grupo de estudo ou de voluntariado. E também positive para invistir em idiomas.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Dia de ansiedade, porque promete algumas mudanças. Hora de focar  nos projetos mais importantes e pra produzir tudo que for intelectual. Vem aí novidades positivas no trabalho e de muitas perguntas e reflexões internas.',
          sign: 'Peixes',
        },
        {
          title: '.',
          description:
            'Assuntos familiares prometem ser o destaque. As coisas devem correr numa boa ao longo do dia. A Lua cheia em Capricórnio, avisa que algumas mudanças no trabalho, estão a caminho. Evite DRs hoje. Seguro morreu de velho!',
          sign: 'Capricórnio',
        },
      ],
    },
    {
      dt: '2021-06-26',
      horoscopes: [
        {
          title: '.',
          description:
            'Concentre-se nos seus objetivos. Não te falta criatividade nem inspiração para correr atrás dos seus sonhos e transformar as ideias em ações concretas. Há energias de sobra, desde que administre bem o seu tempo e estabeleça prioridades.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Confie mais em sua intuição. Ela vai fazê-la se sentir mais segura. No entanto, a provável instabilidade do dia,  lhe ensinará muito. A ordem é se manter centrada para encontrar forças em seu interior- dessa forma, o período de incertezas será rapidamente superado.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Deixe suas ideias fluírem sem censura. Aposte no dinamismo e verá quanto a criatividade e a agilidade na execução das tarefas serão otimizadas. Apesar de não gostar de rotina, saiba que o sucesso depende de organização e método.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'A harmonia que você busca e a estética que a equilibra serão desafiadas por uma nova maneira de olhar para estes temas. Novidades e  surpresas farão parte do dia. No amor, a vida te convida a experimentar mais e deixar de ser tão ciumenta.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Se quiser que  seus projetos vinguem, precisa se concentrar no dia maluco e exigente, para dar conta da demanda. Você vai querer que tudo saia como deseja e o seu lado criativo esta nas alturas. Arregace as mangas!',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Seus projetos podem  dar  certo se mantiver a mente aberta para situações que saiam do controle. A sua crítica dificulta novas experimentações. Tente- você pode gostar disso. Jogo de cintura e capacidade de não julgam, fazem parte do “cardápio” do dia.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'A sua necessidade de intimidade emocional é constante, mas, em alguns momentos, para que possa desfrutá-la, precisa abrir mão de suas certezas e acreditar que a dúvida pode lhe oferecer possibilidades com as quais nem contava.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Assuntos familiares exigem sua atenção, mas, para ajudar os outros, você precisa estar bem. Portanto, fique calma e tente resolver uma coisa de cada  vez. Assim, estará oferecendo o melhor de si mesma e isso confortará seu coração.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O dia pede planos e troca de experiencia com pessoas e culturas diferentes da sua. Esse movimento será fértil e trará um montão de novidades para o seu universo- coisas que você nem imaginou que poderiam interessá-la. Como esta bem agitada, invista em cores clarinhas nas reuniões. Elas acalmam!',
          sign: '',
        },
        {
          title: '.',
          description:
            'Por mais responsável que seja, nem sempre tudo acontece como planejado. Criar alternativas lhe dá flexibilidade para lidar com um dia incerto, mas que pode  apresentar uma nova forma de ser eficiente perante os seus compromissos.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Mesmo tendo certeza de várias coisas, todos nós precisamos aprender. Assim, neste dia, você será desafiada a se questionar e possivelmente a mudar de ideia várias vezes. Trata-se de um processo bastante enriquecedor, acredite!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Com a Lua em Aquário a reflexão é: apesar de ser disponível e generosa, você precisa estar atenta às suas necessidades. Procure não se colocar em último lugar, pois até aquilo que oferece, é mais curativo se estiver em dia com você mesma. Auto-merecimento!',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-27',
      horoscopes: [
        {
          title: '.',
          description:
            'Controle as emoções e coloque foco no que realmente importa. Não perca tempo ou energia com questões que não sejam a prioridade. A vida exige urgência e maturidade para evolução em todas as áreas',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Conflitos familiares acontecem porque as pessoas têm diferentes opiniões e acabam se magoando. Mas quando existe um sentimento e um grande bem querer, tudo se resolve num grande abraço e perdão.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Você quer se comunicar melhor? Pode treinar falar mais devagar ou ter uma dicção mais clara. Para aprimorar a comunicação,  é importante ter outra postura corporal, pois o corpo denuncia o que quer dizer. Dia de destravar geral!',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Não é possível fazer mil coisas diferentes ao mesmo tempo e você não gosta mesmo de se dispersar, pois prefere ter foco e fazer bem feito! Por isso, tome cuidado com tantas solicitações da vida. Escolha o que toca mais o seu coração.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Relacionamento feliz exige diálogo e sinceridade. Não precisa fazer um relatório diário de suas metas e experiências, mas um casal precisa ter projetos em comum. O silencio cria muros intransponíveis.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Trabalho, finanças, amizades, amores, família. Existem tantas questões que você precisa resolver que em alguns momentos pode se paralisar. Priorize a família e tente perdoar ou esquecer velhas  inimizades.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Você precisa se colocar no lugar das outras pessoas para saber o que elas pensam ou sentem. Você percebe a vida de um ângulo diferente, mas a riqueza da vida é poder conjugar e aplicar opiniões e ideias originais e criativas.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Cansaço acumulado exige descanso. Diminua  o ritmo para a mente descansar. Depois de alguns dias mais tranquilos, tudo ficará mais claro para você. E além de ter melhores resultados na carreira, conseguirá recuperar o bom humor.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Existem pendências a resolver. Algumas nem saíram do papel. Ficaram como ideias, desejos e possibilidades adiadas. Então é hora de tentar fazer acontecer, sem pressa e com planejamento. Diga não à procrastinação.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Termine o livro, escreva a tese e finalize o curso. Não deixe fios soltos pelo caminho ou poderá tropeçar. Só conseguirá saber se realmente tem talento para alguma atividade se mostrar suas obras para o mundo!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Cuidado com a pressa e pequenos acidentes. Acredite: ansiedade não rima com perfeição. Diminua o ritmo e desmarque compromissos para priorizar sua saúde e os cuidados com sua casa e alimentação.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Fase positiva para finanças, amizades e amor. Basta trabalhar um pouco o desapego. No trabalho, não insista em realizar sempre a mesma tarefa. O mundo prefere quem mostra versatilidade e gosta de experimentar novos caminhos.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-28',
      horoscopes: [
        {
          title: '.',
          description:
            'O universo está torcendo a seu favor e você pode se expressar de maneira espontânea ao invés de seguir  o modelo dos outros. Boa fase para finanças, amizades verdadeiras e hora de deixar velhos hábitos.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Cuide do jardim. Se puder, traga o verde para um canto ensolarado de sua casa. Ou simbolicamente: cultive e faça crescer seus talentos e dons, para que se transformem  em riquezas mais à frente.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Sua mente agitada está sempre no futuro. Mas o dia pede que valorize o que possui aqui e agora. Seu corpo, sua casa e os amigos. Momento perfeito para cultivar a organização e o senso prático que ajudam a obter melhores resultados.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'A sensibilidade está à flor da pele e você entra em sintonia com muitas pessoas ao seu redor. É ótimo poder ajuda-las, mas tome cuidado para não se deixar impregnar pelos problemas dos outros, de modo que poderá se descobrir triste sem saber o motivo. Mantenha mente e corpo sadios!',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'O dia será positivo: harmonia no amor, confiança nas amizades, controle sobre as finanças. Aproveite para planejar seu futuro, para alcançar metas que antes pareciam impossíveis. Bons projetos precisam de planejamento e foco.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Você pode ser criativa em qualquer área. Basta conseguir colocar para fora o que sente. Em alguns momentos é importante relaxar completamente e ser um pouco criança. No trabalho, dia de reconhecimento e novos projetos.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Deixe que os relacionamentos possam fluir sem a tanta ansiedade. Ao invés de se preocupar tanto com o que as pessoas pensam de você, tente se perguntar o que é que  você deseja de determinadas amizades em sua vida?',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Com a Lua em Peixes, fuja de conflitos, sobretudo, se forem com familiares ou amigos de muito tempo. Não se deixe contaminar por ciúmes e necessidade de controle. Desenvolva a confiança na vida, pratique yoga, medite e crie uma aura de proteção ao seu redor.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Proteção para sua saúde e finanças. Encontre tempo para os amigos, ainda que virtualmente. A vida se organiza em ciclos e depois de um longo período de limitações, será possível voltar a abraçar e viajar com quem  ama.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Imprevistos e surpresas são importantes para quebrar rotinas e trazer alegrias. Drible a tensão. Adote um pet, faça novos cursos. Tudo isto trará brilhos aos seu olhos. Não esqueça de mexer com o corpo. Energia precisa circular!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Surpresas acontecem em todas as áreas da vida. A lição é para deixar todas as portas e janelas abertas. É a imagem simbólica do quanto é importante cultivar as amizades e bons contatos. Torne seu dia mais  prazeroso.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Dia prático em que você verá os projetos tomando corpo, ou seja, as coisas começam a acontece. Invista em você, reconhecendo que a imagem é importante no mundo em que vive. Mostre seu estilo autêntico em todos os momentos.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-29',
      horoscopes: [
        {
          title: '.',
          description:
            'Evite conflitos familiares e aproveite as boas influências para cuidar da mente, do corpo e da casa. São os espaços que você ocupa nesse mundo material. Passe por cima de qualquer desavença ou dificuldades com os parentes e amigos.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Fase  positiva para o amor, a saúde e as finanças. Você conjuga sua força de vontade e a confiança na vida. Faz a sua parte e deixa que o universo retribua com recompensas e uma pitada de sorte. Na vida amorosa faça projetos de curto e longo prazo e avalie a possibilidade de compra de imóvel.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Os amigos estarão ao seu lado e alguns podem surpreender você pela boa companhia e apoio. Também existe abertura para bons negócios e investimentos de curto ou longo prazo. Não esqueça que ler e estudar, já  que é importante estar pronto para qualquer papo inteligente.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Um pouco mais de ousadia e coragem. Que tal  pintar a casa, fazer consertos ou trocar os móveis? Cuide de você e da saúde, prestando atenção ao estômago e evitando enxaquecas por comer bobagens. Autoconhecimento e autoestima: coloque-se em primeiro plano.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Trabalho e organização financeira são temas que parecem sem graça. Mas se você tem projetos de futuro e se ama o que faz na carreira, vai se envolver com facilidade. Se não existir motivação, procure realizar mudanças nas escolhas que fez.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Para evitar a ansiedade,  transforme seus projetos de futuro em projetos do presente. Você pode começar a plantar sementes de modo concreto, o que vai lhe dar  segurança e certeza de que realmente alcançará o que deseja.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Coloque sua vida amorosa em primeiro plano. Projetos de futuro com a pessoa amada, sentimento sincero e companheirismo. Para quem esta solteira, boas chances hoje de encontrar alguém que preencha esse lugar,  trazendo alegria.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Dia que flui bem para o amor. Mas avalie se realmente vale a pena misturar amor e trabalho ou amor e dinheiro. O ideal na vida a dois é manter a autonomia de modo que um parceiro tenha sempre coisas novas a descobrir no outro.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Dedicação e foco. Bons negócios, bons estudos, boas companhias. Integração aos grupos e participação em trabalhos voluntários. Exercite a energia mental lendo sobre temas atuais e debatendo com os colegas de trabalho.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'A eterna divisão entre família e trabalho pode ficar mais evidente nesse momento. O seu coração pende entre obrigações no dia a dia e o desejo de estar mais tempo com as pessoas que ama. É importante também ter  tempo para cuidar de sua saúde e relaxar.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Marte em Leão pede cuidado com as relações familiares. Evite cobranças e conflitos. Debaixo do mesmo teto convivem pessoas diferentes, mas, existindo sentimento e respeito,  será possível encontrar um caminho de harmonia.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Fase animada e  de surpresas! Descubra em você coragem, vontade, energia e deixe de lado a preguiça ou insegurança. Aproveite o dia  para se destacar e fazer diferença. Mercúrio e Vênus favorecem o amor, as amizades e as finanças. Melhor impossível!',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-06-30',
      horoscopes: [
        {
          title: '.',
          description:
            'É  importante ouvir mais, redobrar a atenção, relacionar-se com cordialidade. Procure reservar tempo para reflexões, recolhimento e planejamento. Hoje não  é um bom dia para grandes contratos e investimentos.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Dia positivo para cultivar objetividade, mas mesmo assim cuidado com a pressa, evite forçar situações. Use o dia para desacelerar e relaxar. Com boa vontade, esclareça dúvidas, em temas ligados à  sogra, genro, nora...Mas tenha tato.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Com Mercúrio direto, perceba as mensagens que passa e recebe, para não falar demais ou ser grosseira. Se estiver pensando em trocar de carro ou comprar um novo imóvel, o melhor a fazer  hoje é pesquisar, antes de fechar negócio.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Altos e baixos emocionais. Dias de chuva alternam com dias ensolarados. Aproveite para entender do que é que você realmente gosta ou precisa. Não tente ser quem você não é. Atividades como pintura ou cerâmica  podem ser terapêuticas.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Saturno retrógrado cobra foco e seriedade em projetos. Mas isso não significa abrir mão da alegria e relaxar de vez em quando. Uma  caminhada ajuda a encher a mente com boas ideias. Sempre com a segurança que o momento exige.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'O dia começa com surpresas e desafios. Então, comece a olhar para a carreira e o futuro com mais atenção. Não lhe falta coragem, mas em alguns momentos a impulsividade atrapalha.  Avalie com mais cuidado e dê passos firmes na melhor direção.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'O dilema eterno entre as necessidades dos outros e suas próprias vontades. Reconheça que você gosta de ajudar. Cultive amizades com pessoas que também gostem de retribuir.  Não se envolva com pessoas que têm outros níveis de vibração.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Resolva hoje suas pendências financeiras. Faça uma lista de prioridades para não gastar dinheiro à toa. Invista na qualidade de vida, o que significa conforto, saúde, cursos e tranquilidade. Não esqueça  o contato com os amigos, o melhor investimento sem custo algum',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Você sabe muito bem porque é que gosta de organizar a casa, os papéis e colocar cada coisa em seu lugar. Mesmo que não seja tão fã de limpeza, sabe que os pensamentos não podem se atropelar ou não vai conseguirá tomar decisões. Avalie as amizades, estreite os laços.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Seu regente Saturno pede que reavalie todas as escolhas feitas nos dias.  E que continue se protegendo e cuidando das pessoas que ama. Valorize as atividades que parecem pequenas na vida cotidiana. São elas que lhe darão suporte para maiores conquistas em outras áreas.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Aproveite o tempo que está dentro de casa para viajar através da web e descobrir coisas maravilhosas. Você se alinha com o futuro, mentaliza, deseja e faz acontecer.  Plante sementes em novos projetos sem ansiedade e deixe que eles floresçam no momento certo.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'O dia promete  ser mais leve e divertido, embora sejam também importantes para o autoconhecimento. Alterne o contato com os amigos e os investimentos na saúde e nos estudos. Tente descobrir tendências, dons e habilidades novas para a carreira.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-01',
      horoscopes: [
        {
          title: '.',
          description:
            'Dê preferência para pessoas amáveis, já que o clima de intimidade impera. Dia ideal para atividades, prazerosas, criativas e inovadoras, junto a quem ama. E os intercâmbios continuam pedindo mais\r\natenção. Esteja aberta para esclarecer dúvidas, checar informações.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Energia em alta para atividades criativas. Você pode interagir com leveza, dialogar com flexibilidade, distribuir carinho. Cuide melhor de sua casa, a deixe mais acolhedora e harmoniosa. Fortaleça laços de\r\nafeto com quem ama. Introduzir novidades em casa é boa pedida.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Muitas ideias e oportunidades, diferentes assuntos e desejos. Em meio a tantas possibilidades, vale traçar metas e escolher as mais consistentes para que o dia seja mais produtiva. Fazendo tudo com\r\ncuidado e empenho, você pode corrigir erros e esclarecer dúvidas.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Bom dia para investir em sua imagem, cercar-se de mais beleza. Invista em assuntos ligados às artes, beleza e estética. Vale ampliar sua consciência com novos estudos também. Invista em assuntos\r\ntranscendentais, terapias que promovem relaxamento, meditação.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dia para trocar informações, ler, pesquisar ou aprender algo novo. Mas continue atento para evitar erros ou mal entendidos! Procure cultivar imparcialidade, diplomacia, cordialidade e gentileza. Assim\r\npode avançar e atrair novas oportunidades.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Boas trocas e diálogos leves trazem novas ideias. O dia estimula sua curiosidade e o espírito questionador. Hora de fazer planos, rever o quanto avançou e o que pretende fazer no futuro. Cultivar seu\r\nequilíbrio emocional num ambiente de paz é importante.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'É tempo cultivar harmonia, afetuosidade e acolhimento: Invista em atividades prazerosas e agradáveis. Com doses de sedução você pode defender suas ideias, seus projetos e interesses para angariar\r\ncolaboradores. Mas as revisões continuam a todo vapor.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Aprenda algo novo, esteja aberta para dialogar com amorosidade, clareie dúvidas, esclarecer qualquer ponto confuso. Com calma, sem pressa, você pode expressar melhor ideias e sentimentos, ouvir o que\r\nos outros têm a dizer e mudar de opinião se for preciso.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Criatividade, prazer, integração, colaboração, curiosidade e leveza ganham destaque hoje. Seu natural entusiasmo, alto astral e otimismo contagia amigos e pessoas mais queridas. Aproveite o dia\r\npara promover reestruturações e bom planejamento financeiro.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Todos estão mais dispostos ao diálogo, e você pode conseguir boas informações e formar novas alianças. Aproveite para alinhar interesses e atualizar informações, sempre aberta para corrigir,\r\naprimorar e revisar o que for preciso.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Período bom para cuidar da casa, investir em atividades prazerosas junto a quem ama. Com Saturno retrógrado, o excesso de responsabilidades pode exaurir suas energias. É importante também permitir-se atividades mais prazerosas, de preferência em contato com a natureza.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Mal entendidos e confusões podem ser esclarecidos e amenizados com o diálogo amoroso, com mais leveza. Novos assuntos e novas propostas estão em pauta. Aproveite para ouvir outros pontos de\r\nvista, renovar as ideias e os sentimentos ou aprender algo diferente.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-02',
      horoscopes: [
        {
          title: '.',
          description:
            'Os estudos tornam-se mais estimulantes. Porém, procure cultivar mais atenção, cuidado com erros, enganos e distrações. Momento de mais introspecção pode trazer novas inspirações. Com o Sol em\r\nCâncer, vale investir nos cuidados pessoais para mais autoestima.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Esteja aberta para ouvir mais, desfazer mal entendidos, tirar dúvidas, checar informações em várias fontes. Atividades que estimulam a imaginação, assuntos ligados às artes e à estética, continuam em\r\nevidência. Aproveite para cultivar mais harmonia em suas relações.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Dia para acolhimento e encontros mais íntimos. Aproveite para estabilizar as emoções, cultivar harmonia e equilíbrio em casa e nas relações. Tudo em clima de cordialidade. Hora de revisar conceitos\r\ndegastados e respeitar a liberdade de pensamento do outro.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Com o Sol em seu signo, é tempo de gentileza, charme e cortesia. Mas atenção; não conte com o ovo antes da galinha! É importante cortar desperdícios, cultivar maturidade, determinação, empenho e\r\nrealismo. Num futuro próximo sentirá que valeu a pena.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'O dia convida para cultivar leveza, diplomacia, cordialidade e gentileza. Invista em tratamentos de beleza, cura e rejuvenescimento. Aproveite para buscar o bom entendimento com parceiros. Acredite\r\nem seu merecimento de viver o amor e as coisas boas da vida.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Boas oportunidades financeiras e chances de usufruir de investimentos que já plantou lá trás. Se existirem imóveis ou terrenos com papéis incompletos ou dívidas, tente resolver questões legais\r\nhoje. Bom dia para consultar advogados.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'As energias estão a seu favor. No amor, nos negócios, no trabalho. Dia agitado e feliz em que você perceberá que tem qualidades e capacidade de superar qualquer desafio. Conquistas concretas no\r\nsetor profissional, é garantia de que você esta no caminho certo.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Paciência ajuda a arrumar as ideias e saber por onde começar. Ideias nunca faltam, mas você esquece que elas não se transformam em realidade da noite para o dia. Persistência e planejamento são\r\nnecessários. Já praticou Hooponopono hoje? Te acalma.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O dia favorece assunto da vida afetiva e familiar. Busque conciliação e entendimento entre pessoas que são diferentes, mas que te amam. Se alguém se mostrar resistente à compreensão, esqueça e valorize\r\naqueles que querem estar ao seu lado.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Seus projetos tendem a se realizar com mais facilidade, sobretudo aqueles ligados à vida amorosa e familiar. Não descuide em relação à pandemia, mas tente manter contatos frequentes com quem é\r\nimportante em sua vida. Veja e seja vista.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Quando escolhe algum hobby, você sempre pensa em torná-lo uma fonte de renda. Não é um erro, mas uma maneira de viver e abordar a vida. Pense em desenvolver dotes manuais como marcenaria ou\r\npintura. Seu lado criativo em alta, ajudam a melhorar sua renda.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Cair na real é a melhor experiência para quem vive a dois. Não existem príncipes ou princesas dormindo na floresta. Existem companheiros de vida que querem construir uma história a dois com\r\ntrabalho e compromisso. Entendeu?',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-03',
      horoscopes: [
        {
          title: '.',
          description:
            'Você está entrando numa fase mais racional em que evita o ciúme exagerado e sem fundamento. Ter alguém ao seu lado é querer ter paz e serenidade em todos os momentos, sabendo que pode amar e\r\nconfiar para sempre.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Ter uma casa no campo pode ser mais viável do que você imagina. Negocie para trabalhar remotamente e aos poucos vá se adaptando a um estilo de vida mais calmo, sem deixar de ler e saber o que\r\nacontece no mundo.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Preparar o futuro não é apenas poupar. Inclua todos os cuidados com a saúde para que o corpo continue correspondendo às suas ideias e projetos. Caminhadas e alongamentos são importantes. Iniciar yoga e\r\nmeditação, além de saúde física, traz benefícios mentais.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Situações imprevisíveis acontecem e o “acaso” se manifesta como se fosse um bom amigo. Por isso é importante cultivar os relacionamentos e estar sempre se manifestando nas redes sociais,\r\ncriando encontros de mentes.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'É possível manter a boa saúde sem fazer grandes restrições ou levar uma vida austera. Tudo é questão de equilíbrio. Dependendo da dose, a substância é veneno ou remédio. Busque o caminho do meio e evite\r\nas beiradas.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'O dia corre a seu favor e poderá ter ganhos financeiros e construir bons vínculos de amizade. Como o dia será agitado, opte por cores claras na hora de se vestir. Não esqueça de retribuir as boas energias\r\nenviando flores ou brindando atrás da telinha do laptop.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'O dia inicia com energia positiva e pode anunciar uma virada para você no trabalho e nas finanças. Perceba possibilidades novas e qual é a direção correta a seguir. Favorável a compra e venda de bens. Paz para o coração.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Hora de investir energia, ação e boas conquistas de forma assertiva mas sem precisar mostrar agressividade. Algumas oportunidades vem até você por conta de todos os bons contatos que você tem\r\ncultivado. No amor, mostre sensibilidade.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'A força de vontade que brota de dentro de você, a faz lutar (no bom sentido) pela vitória, se expondo para o mundo sem medos. É hora de investir em você e mostrar todas as suas qualidades e talentos. Antes\r\nde dormir, chá de erva-cidreira, acalma a ansiedade.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Espere hoje reconhecimento por parte de chefes ou colegas de trabalho. O dia propicia ganhos financeiros e valorização do espaço da casa. Você gosta de conforto e quer ter beleza e amizades fiéis ao seu redor. Boa sorte nos assuntos familiares.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Depois de começar um projeto profissional é preciso aparar as arestas. A fase dos “acabamentos” é a que você mais gosta e sabe que é nesse momento que se mostra o cuidado e carinho com o que se faz.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Amar é seu verbo principal hoje. Você sabe que a vida vale a pena quando pode ser dividida com pessoas. Boa fase na vida a dois e chances de projetos futuros com o apoio de família e amigos. Que tal\r\niniciar natação? Equilibra seus chakras.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-04',
      horoscopes: [
        {
          title: '.',
          description:
            'Boas ideias são sinônimos de motivação. A mente precisa ter ideias novas e seguir com mais energia e paixão. Se os resultados não são muito satisfatórios, tente caminhos jamais percorridos antes.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Dia corrido e favorável à vida pessoal e profissional. Divida-se entre tantas solicitações e aproveite todas elas. Não descuide da comunicação, pois uma única palavra poderá fazer toda diferença.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Passe por cima de pequenas diferenças para ser feliz. Ninguém precisa combinar em tudo com você. Bons amigos podem mostrar o outro lado da moeda e você poderá crescer com a experiência.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Dia feliz e positivo para o amor e as amizades. O que existe de mais importante para você? Não esqueça de cuidar melhor das finanças para que consiga segurança e estabilidade em todas as áreas da vida.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Boas ambições te empurra para a frente e para fazer diferente. A vida é uma experiência de ação, movimento e transformação pessoal. Por isso, não pode existir espaço para adiar as atitudes certas. Pare de procrastinar.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Examine se você está vivendo num local adequado às suas necessidades. E se seus amigos são realmente pessoas com quem você se sente à vontade e em total confiança. Você é responsável por tudo o que cria, atraí ou escolhe.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Existe uma grande diferença entre ser individualista ou ser saber se preservar. Cultive as amizades e tente ajudá-las, mas não precisa abrir sua vida como um livro e nem expor suas emoções mais profundas que podem ser divididas apenas com poucas pessoas.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Haverá muita energia positiva hoje, ajudando-a a realizar suas conquistas. Os desafios se mostram mais fáceis de serem superados porque a inteligência e a intuição estão ajudando. A comunicação vai fluir de modo natural e algumas portas se abrirão.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'A quarentena permite que você preste mais atenção ao espaço em que vive. Pode ser momento de trazer plantas, flores, algum pet ou mais cores para alegrar sua vida. Exigem trabalho e dedicação mas retribuem com uma atmosfera positiva e calorosa.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'O dia pede foco e determinação. Não é difícil descobrir quais são as prioridades em épocas de crise. Abrir mão das distrações, é conseguir agilizar os projetos mais importantes para que mais à frente sobre tempo para o lazer e o relaxamento.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Não existe dinheiro fácil nos tempos que vivemos. Evite  investimentos radicais e continue apostando no trabalho e no tempo. O seu  melhor investimento é melhorar a casa em que vive ou ter um terreno para construir mais à frente.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Na vida amorosa a confiança e a sinceridade são a base de tudo. Mas você também tem direito a ter pensamentos que não precisa i revelar ou dividir com ninguém. Momentos de introspecção ajudam a fortalecer sua personalidade e a firmar sua vontade.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-05',
      horoscopes: [
        {
          title: '.',
          description:
            'Dia para questionar o que o amor representa em sua vida. Uma experiência que leva ao crescimento ou que traz paz e estabilidade? Da para  encontrar tudo isso numa única relação? É importante considerar estes pontos positivos e valorizar  seu par.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Bons ventos sopram a seu favor, com novidades e esperança de novos tempos. Não olhe para trás. Siga em frente lembrando que sua personalidade está sempre pronta para desafios que coloquem sua fé e inteligência à prova.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Hora de retomar antigos projetos. Pode ser apenas um hobby ou distração, ou quem sabe, um novo caminho em paralelo para a aposentadoria e outras realizações pessoais. Priorize sua alimentação também. Mais fibras e menos gordura.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Hoje o dia traz perspectivas positivas, expansão, fé e chances de ter boas influências sobre outras pessoas. É importante registrar que todo movimento de mudança começa dentro de você e por isso, dispersões e dúvidas ficam para o passado.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Ideias devem ser colocadas no papel. Depois debatidas com  pessoas ao invés de serem esquecidas. Não é hora de perder tempo, mas de acelerar projetos porque aos poucos a vida vai retomando seu ritmo e mostrando sinais de abertura em muitos caminhos.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Se algumas decisões ainda não haviam sido definidas, elas poderão ser tomadas hoje. Preste atenção se tiver enxaqueca ou dores no rosto porque podem indicar inflamação ou excesso de tensão. Contatos importantes e bons negócios no radar!',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Se anda com um pensamento recorrente,  é melhor parar e analisar o que ele que te mostrar. Pode ser um desejo importante que esta reprimindo. Não existe passe de mágica na vida, mas você pode conquistar o que quiser,  construindo seus projetos com pé no chão.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Caminhadas ajuda a espairecer e recuperar a vitalidade do corpo e o ânimo da mente. Dia produtivo, portanto, coloque suas ideias no papel e avalie qual delas é a mais urgente. Contará com a ajuda de colegas de trabalho.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Hora de  organizar a casa e trazer energias mais leves para dentro dela. Por qual motivo vai querer guardar retratos e recordações de períodos antigos? Saudosismo pode amarrar o seu passo e as coisas acabam não fluindo de modo tão feliz. Libere-se!',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'É bom saber o quanto as pessoas te admiram . E o melhor de tudo é que você não está tentando agradar ninguém, mas mostrando sinceridade no seu modo de ser. Aprenda o caminho do meio entre vida íntima e vida privada.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Dia tenso e agitado, mas com bons resultados na área profissional. Que tal mudar o modo como lida com suas finanças buscando investimentos mais arrojados? Mas é preciso saber que em épocas de transição todo cuidado é pouco.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Todos os dias você  descobre coisas novas a respeito de si  e de amigos. Uma frase, uma observação e já entende que talvez não deva se abrir inteiramente com determinada pessoa. Não é preciso romper, mas um afastamento preserva a relação.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-06',
      horoscopes: [
        {
          title: '.',
          description:
            'Este é um dia de evitar extremos. O caminho do meio é sempre o caminho da felicidade. Andar pela beira do abismo pode gerar boa dose de adrenalina e suspense, mas a meta deve ser ter uma vida tranquila cheia de momentos de paz e serenidade.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Você pode se sentir dividida entre emoções, vontades e metas que parecem ser incompatíveis. É comum ter contradições e você não deve sofrer por isso. Dia importante de autoconhecimento. Estabeleça prioridades. O  que está faltando em sua vida agora?',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Que tal refletir sobre sua vida com mais profundidade? Não se deixe levar pela correria ou poderá fazer escolhas errada. Dia para transformar um limão em uma bela  limonada. Cuide mais de sua saúde e vitalidade, assim como cuidar da energia de sua  casa.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Se sentir pressionada para dar respostas imediatas de trabalho, use a intuição. Se pensar demais poderá perder boas chances. Avalie não somente o retorno financeiro, mas a chance de dividir experiências com pessoas amigas.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Para evoluir espiritualmente é preciso que todas as  áreas da sua vida estejam em ordem. Não pode meditar num ambiente que não esteja limpo e organizado. Seu mundo exterior revela quem é por dentro Boa fase para as finanças ou algum prêmio profissional.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Hoje é aquele dia em que sentirá o impacto da Lua em questões familiares e no trabalho. É possível que comece a sentir desejo de mudar de casa, de cidade ou mesmo de iniciar uma reforma. Uma pessoa da família pode partir, sair de casa ou outra chegar ou voltar.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Continue firme nos processos mentais e intelectuais. Há grande chance de retomar os estudos ou começar um novo curso. O dia pode também estar relacionado com a negociação e fechamento de um projeto ou contrato. Você estará mais fechada, calada e interiorizada.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Dê mais atenção às finanças, pois este pode ser um dia,  em que passos errados, levam a perdas. O período pede economia, distanciamento de investimentos arriscados. Não é um bom momento para pedido de empréstimos e financiamentos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Você continua em uma vibe mais interiorizada, mais voltada para seu mundo emocional. O dia pode estar relacionado com um balanço de vida, já que não é de hoje que você passa por uma fase de reflexão. Se um relacionamento acabou, é porque um ciclo se fechou. Comemore!',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Você será  impactada com mudanças nas amizades; é um dia que pode haver perda de amigos ou ao menos, transformação na maneira de relacionarem-se. O dia envolverá também, o aumento de responsabilidades em projetos em equipe.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'O dia terá um  impacto positivo em seu trabalho e a carreira. Uma mudança, que já vem sendo desenhada há algumas semanas, pode ser concretizada. Não está descartada a possibilidade de mudança radical na carreira ou na função que exerceu até hoje.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Você continua voltada para a busca de um sentido e significado para a vida. Um novo caminho espiritual exige mudanças em sua filosofia de vida. Um projeto de internet e/ou de publicações, pode chegar ao fim ou precisar de mudanças significativas para sua continuidade.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-07',
      horoscopes: [
        {
          title: '.',
          description:
            'A ordem do dia é: renovação. A vontade é de inovar, de pensar e fazer diferente. Se estiver em uma relação, vale investir num comprometimento mais sério. Se estiver solteira, pode esperar uma\r\nsurpresa, um amor do passado que vem ressurgindo.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Se você vive uma relação conflituosa, vai perceber que é hora de mudar. O medo de partir pra outra já não é tão amedrontador. Hora de ter mais autoconfiança e mais respeito por si mesma. É assim que vai atrair alguém com sintonia de alma.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Por ser instável, você vive questionando sua relação amorosa. Hoje é uma daqueles dias que da vontade de cultivar valores mais elevados, buscando mais qualidade, maturidade e comprometimento nas parcerias.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Romantismo, intuição, sedução em destaque hoje. A vontade é de tomar atitudes e pensar até mesmo em casamento. A dica é voltar o olhar para si mesma, analisar o que pode mudar, ceder, pensar bem antes de tomar qualquer decisão.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Hoje é um dia de transformar os sonhos em realidade. Vale apostar em viagens, diversão, cultivar amizade e companheirismo. Compartilhar novos conhecimentos e novas experiências pode\r\nrevitalizar relações desgastadas.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Hora de buscar planos mais sólidos, com mais segurança e mais estabilidade emocional. Por isso, se estiver comprometida, hora de fortalecer ainda mais os laços da relação. A dica é ser sincera,\r\nexpressar as intenções, deixar bem claros seus objetivos.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'É tempo de ser mais fiel a si mesma, refletir de forma mais madura, realista e racional. Faça esta pergunta: insisto na relação porque amo verdadeiramente, ou porque tenho medo de ficar sozinha? Momentos de solidão faz bem, já que você olha pra dentro!',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Suas habilidades sociais estão mais evidenciadas. O contato com as pessoas funcionará com fonte de inspiração. A dica é se desdobrar para dar atenção à todos, estar mais aberta, buscar novos encontros, olhar para o futuro sem ficar preso ao passado.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Este é um bom dia de avaliar seus valores, questionar sobre a vida, o futuro, buscar mais qualidade em tudo, inclusive nas relações. Com mais maturidade e responsabilidade, os compromissos\r\npodem se tornar mais sérios.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Sua prioridade é voltar o olhar para si mesma, ao invés de colocar expectativas sobre os outros. Há tempos que você passa por limpezas e purificações e este processo continua. Vale\r\nbuscar terapias, assumir seus sentimentos e sua transformação.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Inovações, companheirismo e revitalizações hoje. Quem está comprometida, pode estreitar os laço e estabilizar a relação. Se estiver solteira, nova paquera à vista. Mas seja flexível, pois a vida\r\nprofissional promete ser movimentada e vai pedir mais atenção.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Cuidado para não ficar exigente demais ou distante demais. Relevar, dialogar, perceber o que pode ser melhorado, reforçar a cumplicidade, investir na intimidade. Vale dar mais tempo para o\r\namor: passear de mãos dadas, contemplar o por do sol…',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-08',
      horoscopes: [
        {
          title: '.',
          description:
            'Se estiver comprometida, hoje pode ser um dia de crise conjugal, que testará a solidez da relação. Se houver amor, cumplicidade, diálogo e perseverança, a relação se fortalecerá ainda mais. Conselho: “não\r\ncutuque onça com vara curta”.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Propostas originais e surpresas mais apimentadas, aquecem relações “mornas”. A ideia é buscar situações diferentes, se abrir pra mudanças positivas. Invista no charme e no carisma, porque além de\r\nmelhorar sua autoestima, dar força ao relacionamento.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Dia de conhecer alguém que vai mexer com suas emoções. O ideal é avaliar seus sentimentos de forma bem objetiva, desconfiar de tudo o que parece perfeito ou mágico, cultivar autoestima pra não se deixar\r\nlevar por sentimentos de carência e embarcar em ilusões.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Se há mágoas no relacionamento, pense seriamente em perdoar, dar uma segunda chance, abrir o coração para renovar o amor. Hora de programar novas experiências e sair da rotina. Mas as insatisfações também ficam mais evidentes, pedindo solução e aprimoramento.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Este é um bom dia para renovações, um novo amigo será bem vindo. O mais importante é estar com quem te faz bem, abandonar relações doentias, curar sentimentos perturbadores. Esteja disponível, tenha\r\nmais tempo para meditar, caminhar, cuidar de plantas.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Você esta mais fechada e voltada para suas emoções , em um período de reflexão e interiorização, que levará a uma grande transformação. O dia pode envolver a negociação de uma parceria financeira ou de\r\num negócio com grande soma de dinheiro.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Todo relacionamento enfrenta altos e baixos. Num mundo em transição, todas as relações exigem cuidados. O mundo se transforma, e você se adapta e os vínculos precisam amadurecer no\r\nmesmo ritmo e direção.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Se estiver em sintonia com seus propósitos verdadeiros, todas as experiências serão vividas com satisfação. Porque você sabe que está caminhando para conquistar o que é realmente importante em sua vida.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Não se exponha demais, pois não é momento de se abrir na direção de quem conhece pouco. Bons contatos comerciais e ganhos financeiros. Mas preserve sua vida pessoal e mostre objetividade na\r\ncomunicação.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Atue de modo claro e objetivo em todas as áreas. É o seu estilo\r\nnatural e evite mal-entendidos. Valorize a família e o casamento. Com\r\na sua presença e com palavras que aqueçam todos os corações.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Enquanto muitos temem as crises, você consegue enxergar as\r\noportunidades. Os imprevistos devem ser entendidos como recados\r\nque o destino te envia. Mostre bom humor, pois o dia favorece\r\nnegócios e ganhos financeiros.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'A vida exige movimento e mesmo no repouso, a mente continua\r\nproduzindo ideias e você está conectado com tudo e todos ao redor.\r\nAproveite o dia e reavalie seus projetos, aperfeiçoando e\r\naprimorando seu desempenho.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-09',
      horoscopes: [
        {
          title: '.',
          description:
            'Tomar decisões não é o único desafio. Mas saber como agir\r\nde modo que as coisas caminhem sob o seu controle e sem\r\npossibilidade de interferir negativamente na vida dos outros. A vida\r\nexige atenção, tensão e responsabilidade.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'O passado serve como um aprendizado, mas não pode ser\r\nmotivo para você impedir o seu desenvolvimento na direção do\r\nfuturo. Tentar, experimentar, tentar de novo e não desistir. Valorize\r\nas metas e todo o processo para alcança-las.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'O dia favorece finanças, aquisição de bens e o contato com a família. Uma fase de realizações e abertura da visão de mundo. Abra a mente para novos cenários e ideias. Abra o coração, não negue seus\r\nsentimentos.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Muitas energias positivas hoje. O dia promete realizações\r\nfinanceiras e uma visibilidade maior no trabalho. No amor e na\r\nfamília, deixe de lado ressentimentos para viver os laços de amor\r\nsem medo de ser feliz.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Boa perspectiva para o amor. Fase criativa, aproximação dos\r\nfilhos e início de esportes, ginástica ou qualquer outra atividade que\r\ntraga mais alegria para sua vida. A vida deve ser comemorada nos\r\ngrandes e pequenos momentos.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Incríveis ideias nascem nas mentes que estão abertas e\r\nconfiantes. Corte a palavra “não” do seu dicionário e prioriza a\r\npalavra “sim”. A vida pode oferecer desafios porque precisamos\r\ncrescer e tudo o que aprendemos nos torna melhores.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Toda essa fase é muito importante para você se destacar em\r\ndiferentes áreas da vida. Hoje pode surgir propostas profissionais\r\nque você nem esperava. Tome cuidado com a palavra,  que é sempre\r\na nossa ferramenta para o bem ou para o mal. Cultive a diplomacia.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Dia com muitas solicitações. Em alguns momentos vai\r\nquerer se esconder do mundo para poder pensar com autonomia. Em\r\noutros, mostrará envolvimento com a equipe ou colegas de trabalho.\r\nMostre praticidade em suas decisões.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Existem metas mais fáceis de serem alcançadas do que\r\nvocê imagina. Basta fazer foco e usar da paciência e da persistência\r\nem alguns setores da vida. E acredite, a palavra mágica é apenas\r\n“obrigada” ou algum gesto de gratidão e consideração pelos outros.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Boas leituras ajuda a saber mais da vida e a preencher\r\nsua mente com ideias novas e que não deixam espaço devaneios. Ler\r\né hábito e basta começar pelo assunto que mais gosta. Poderá abrir\r\num universo e descobrir a si mesmo, além de se tornar uma pessoa\r\nmais interessante.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Bom momento para a vida financeira. Faça um pouco mais\r\nde economia, de modo que possa guardar ao invés de gastar.\r\nReinvista em cursos. Então, não será um gasto desnecessário, mas um\r\ninvestimento para continuar crescendo.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Dia positivo para os relacionamentos. As pessoas podem\r\nexpressar o quanto você é importante para elas e você pode confiar.\r\nTermine o livro que está escrevendo ou se inscreva no curso de\r\ntecnologia. Não deixe nada inacabado.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-10',
      horoscopes: [
        {
          title: '.',
          description:
            'É hora de se valorizar mais e cuidar das coisas mais importantes. Olhe mais para dentro, e comece se  preparando para novos projetos. O que quiser eliminar de sua vida, deve fazer já! Período de novidades profissionais.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Vem por aí muita energia pra colocar no trabalho, ter mais  garra,  determinação e do foco. Mas é necessário ter bastante  reflexão e análise, porquê rola muita impulsividade!',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Dia decisivo com relação aos seus projetos, Sente e tente priorizar o que de fato é mais importante. Esteja perto dos melhores amigos, de quem realmente tem ajudado você nos últimos tempos.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Uma maior disposição para lutar te leva  a quebrar seus limite e expandir fronteiras. Ouse e pense no que pode fazer a mais do que está fazendo. Tenha cuidado com uma tendência a querer tudo pra “ontem”.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Sua capacidade de expressão e, sobretudo, seu potencial de liderança perante grupos, estão fortes hoje. Convém controlar a agressividade, que hoje aflora com mais facilidade. Ótimo momento para intensificar os exercícios físicos.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cuidado com os problemas cotidianos que você pode vir a enfrentar hoje, pois possível deslize de comportamento pode levá-la a discussões pesadas. Procure manter a serenidade e o equilíbrio. Promova uma limpeza do organismo com chás.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Dia propício a superar questões dramáticas que de vez em quando lhe rendem inseguranças. Procure vencer seus medos, condicionando seus pensamentos para o que você deseja de mais positivo.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Ponha a agenda em dia, responda aos e-mails e não negligencie nenhum tipo de contato. Muitas oportunidades tanto pessoais quanto profissionais podem surgir destes contatos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Utilize-se da inteligência emocional para alcançar seus objetivos. Mas fique atenta a impulsividade, que é seu “calcanhar de Aquiles. Que tal iniciar uma dieta mais saudável e ficar sem comer carne alguns dias?',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Maior empenho de sua parte nas questões financeiras e domésticas tende a lhe render bons frutos. Na vida afetiva, sua libido tende a falar mais alto. Na hora da produção, opte por um look mais sensual, com tons de rosa e lilás.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Você estará mais convicta de suas ideias e mais disposta a defendê-las custe o que custar. É aí que reside o perigo, pois o excesso de certezas pode lhe cegar e lhe render dissabores na relação com as pessoas.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Com prudência, pense melhor antes de tomar qualquer decisão. Evite atitudes inconseqüentes e negócios arriscados, não troque o que já é conhecido, seguro e familiar pelas novidades duvidosamente vantajosas.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-11',
      horoscopes: [
        {
          title: '.',
          description:
            'Dia para batalhar, fazer valer o suor no seu projeto profissional, já que o retorno pode ser incrível. Mas espera suar a camisa, e  não caia no  desânimo. O quanto se esforçar,  mais longe vai.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Fase de boa saúde, disposição e prosperidade – o que irá nutrir sua capacidade profissional. É realmente o momento para manter o foco e não deixar a peteca cair. No amor, período mais romântico.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Aproveite a energia para adoçar as palavras e dar mais atenção a quem ama. Assuntos pendentes podem ser resolvidos com carinho e espírito conciliador. Conte com mais adaptabilidade e versatilidade.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Hora de deixar para trás velhos condicionamentos. Mas  nada impede que demonstre carinho e reconheça o valor das pessoas que ama. Procure ouvir mais e utilizar a palavra sempre com fins construtivos.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Hoje você fica louca para conversar e circular. Mas em tempos de pandemia, uma postura mais comedida é pura sabedoria. Continue evitando atitudes agressivas ou impulsivas. Prudência e flexibilidade são ótimos antídotos.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Aproveite o dia  para fazer contatos, mas procure reservar tempo também para reflexões, recolhimento e planejamento. É importante cultivar mais receptividade, deixar a vida fluir. Estabeleça prioridades e vá aos poucos, sem pressa.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'No fim do dia,  um  clima fica mais confuso ou até mesmo tenso, podem te tirar da zona de conforto. Evite DRs,  a pressa e a correria. Respeite seus limites. Vale eliminar maus hábitos e emoções tóxicas.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Dê às pessoas que ama o tempo e o espaço que merecem. As finalizações continuam, mas cuidado com a impaciência e não force a barra. Aproveite o dia para resolver divergências com parentes, mas sempre com tranquilidade.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Reflita sobre tudo o que aconteceu nas últimas semanas e reveja projetos para elaborar as novas iniciativas. Procure manter-se adaptável, aberta e receptiva para aceitar sugestões e promover as correções necessárias.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Decisões e iniciativas hoje, só se for para concluir assuntos pendentes. Consulte diversas opiniões, esteja aberta para ouvir e aprender. Reduza a ansiedade. É importante evitar conflitos, encontrar espaço na agenda para relaxar e refletir.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'O dia pede prudência, evitando riscos ou bater de frente com os demais. E cuidado as atitudes imprudentes. Se possível,  desligue- se da agitação do mundo. Esteja flexível e acessível. Cultive mais  alto astral e o bom humor.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Não é bom exagerar na velocidade, reduza o pé do acelerador.  A energia de hoje pede mais descanso, reflexão e redução de toxinas. Não apenas as que ingere, mas também emoções, relações e pensamentos tóxicos.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-12',
      horoscopes: [
        {
          title: '.',
          description:
            'Confiança e clareza retornam hoje. Boas ideias, novas informações e\r\noportunidades estão à sua frente, basta boa vontade e simpatia. A\r\nprodutividade e a determinação crescem, na medida em que investe\r\nno que realmente gosta de fazer',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Observe se há atitudes controladoras e manipuladoras em sua\r\nrelação. Priorize a segurança mental, emocional e física. Invista na\r\ndeterminação, na disciplina, na dedicação ao trabalho e aos novos\r\nprojetos. Procure dosar expectativas com mais realismo.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Atividades físicas e cuidados com a imagem, são pauta para hoje.\r\nMas não espere resultados imediatos, deixe de lado cobranças e\r\nconfrontos. É importante que seja perseverante, profissional e\r\ndisciplinado para alcançar seus objetivos.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'O dia tem potencial produtivo, aproveite para arregaçar as mangas e\r\ndar um gás no trabalho, demonstrando comprometimento e\r\nprofissionalismo. Evite disputas. Aos poucos tudo se esclarece e o que\r\nestava empacado se desenrola.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Hora de ter uma postura mais madura e comprometida. Evite\r\ndiscussões, releve e procure ceder. É importante ampliar a visão e\r\ncompreender as razões das pessoas à sua volta. Assuntos ligados à\r\nfamília e relacionamentos pedem cuidado e atenção.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Os aperfeiçoamentos que tem promovido começam a revelar bons\r\nresultados. Com seu olhar clinico, percebe tudo com mais clareza.\r\nDedique-se a oferecer um serviço ou produto impecável. Não é a toa\r\nque seu signo é o mais perfeccionista do zodíaco.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Que tal buscar atividades mais simples, prazerosas e relaxants?\r\nRecolhimento, intimidade e economia de recursos resultam em mais\r\nvantagens do que exposição, risco, impaciência, futilidades e\r\nimpulsividade.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Vale cultivar uma postura mais objetiva e independente. É tempo de\r\nampliar a visão, investir em conhecimentos libertadores. Cultive a\r\ngenerosidade e o espírito comunitário para somar forças, ao invés de\r\ndividir.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Dia positivo para investir na produtividade, perseverar em seu\r\ntrabalho e encaminhar assuntos profissionais. Com Júpiter\r\nretrógrado, é bom lembrar que os esforços são reconhecidos com o\r\ntempo, com estudo, preparo.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Coloque mais foco, organização e objetividade no seu dia. Porém,\r\nevite impor sua opinião, seja gentil e diplomática para obter bons\r\nresultados em suas iniciativas. Planos e negociações avançam se\r\nhouver maturidade, honestidade e abertura para inovações.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Seja cuidadosa em relação aos compromissos e honre sua palavra.\r\nAproveite para pôr em dia trabalhos atrasados. Concentre-se em\r\ncompletar uma série de pequenos afazeres, passo a passo, um\r\nassunto de cada vez.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Mais gentileza e independência. Menos controle e cobranças. Ao\r\ninteragir com leveza, encontrará respostas criativas, e assim, seguirá\r\nem frente mais confidante, atraindo oportunidades. Demonstrando\r\ncompetência, você abre novas portas no trabalho.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-13',
      horoscopes: [
        {
          title: '.',
          description:
            'Com senso prático e objetividade, comprometa-se com seus sonhos!\r\nAproveite para esclarecer dúvidas, pesquisar melhor, rever velhos\r\nconceitos e encontrar soluções inovadoras para velhas questões.\r\nJustamente com eles é que chegará no grande caminho almejado.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Respeitar a liberdade de pensamento, conectar-se com soluções\r\noriginais, novas tecnologias e correntes vanguardistas, são\r\nferramentas positivas para hoje. E tudo com muita determinação e\r\ndisciplina. Cuidado com a gula, você anda muito “chocolateira”.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Demonstre leveza e alto astral, pois com o dia mais agitado, suas\r\nreações emocionais se exaltam. O Sol em Câncer, é melhor optar pela\r\nsegurança e os encontros mais íntimos. Você pode harmonizar as\r\nrelações com mais disposição e abertura para compreender o outro.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Algo que tem lhe incomodado pode ser transformado, através de uma\r\nprofunda análise de suas causas. Basta voltar o olhar para si mesma,\r\nao invés de projetar culpados. Vale refletir sobre suas ambições\r\ntambém, para dimensioná-las com consciência.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Cuidado com a carência exacerbada, já que suas reações emocionais\r\ntendem a ser mais exaltadas. Você pode perceber se há\r\nmanipulações em seus relacionamentos amorosos ou familiares. Não\r\né hora de forçar situações ou confrontar as pessoas.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Que tal investir na beleza, nas artes e na criatividade?  A\r\napresentação pessoal, a preocupação com a credibilidade e a estética\r\nsão importantes e abrem portas. Apenas não dê corda para críticas e\r\ndiscussões.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Dia de auge em tudo. A vibe te extroverte, favorece relação com o\r\npúblico, mas também te deixa suscetível para desequilíbrios. No\r\nrelacionamento afetivo, cuidado com DRs, desconfianças e obsessões.\r\nPare de ser pegajosa, se valorize mais!',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Com o Sol em Câncer, você entra em um momento mais emotivo,\r\nonde temas como família, passado, raízes, vínculos e sentimentos,\r\ntem lugar de destaque. Então, siga o fluxo disso, demonstrando mais\r\nseus sentimentos e cuidando mais de seu âmbito pessoal e familiar.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Intuição poderosa, com uma percepção mais clara do que realmente\r\nsente e é importante na sua vida pessoal. O dia inspira a uma atitude\r\nde fé. Sabe a expressão “bola para a frente”? Vai ser esta a disposição\r\nhoje, mesmo que desafios surjam, pois fazem parte da vida.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Uma coisa boa para fazer hoje é sair, passear, se desligar, estar com\r\npessoas (desde que com segurança, por causa da pandemia) que\r\ntenham humor e façam rir. Você terá inspirações de coisas boas, que\r\npossam abrir seu horizonte. Leia os sinais. A Lua em Leão, te ajuda!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Sabe aquele relacionamento que esta sendo empurrado com a\r\nbarriga? Hoje tem potencial de dar uma zebra ou crise. Se vai\r\nterminar ou não, isto vai depender de sua intuição. Mas se ele te\r\ncoloca para baixo ou é pouco saudável, hora de dar um bye bye!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Com a Lua em Leão, você quer ver e ser vista. Que tal investir numa\r\nprodução sensual e poderosa? Tire esta timidez tão característica do\r\nseu signo. E principalmente, respeite seu poderoso sexto sentido. Ele\r\nesta mais incrível do que nunca.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-14',
      horoscopes: [
        {
          title: '.',
          description:
            'Se estiver solteira ou terminado recentemente, mas que ainda sente\r\npor isto, cuidado! Um ex pode reaparecer. Alerta para obsessões e\r\ndesconfianças, que estarão no auge hoje, e certamente não é a melhor\r\nconselheira. Pelo contrário, pode puxar você para o buraco de volta.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Procure descansar bem, pois o pique será puxado. Podem vir\r\ndesgastes e vai ser um período com chance de acontecimentos\r\ninesperados e conflitos, em particular entre irmãos. Dia de usar tons\r\nde lavanda, lilás. Cores que te conectam com a espiritualidade.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Hoje é aquele dia para sacar que você vai ter que ter mais atenção\r\ncom informações. Por isto, em assuntos sérios, como tratamentos\r\nmédicos, investimentos, empréstimos, procure por mais de uma\r\nfonte, peça conselhos e ser mais cautelosa.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Com Mercúrio em seu signo, não acredite em tudo que ouve. Há\r\npossibilidade de decepção com algo, ou, alguém que você confiava\r\nmuito. Você pode ficar mais melancólica ou sensível. Tudo fica meio\r\nconfuso, e é mais difícil cobrar precisão e certezas.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Com Marte em seu signo, o dia traz uma injeção de vitalidade,\r\ncriatividade, bem como força para o lazer. Mas cuidado para não\r\n“viajar na maionese”. Há propensão a fantasias. Portanto, leve em\r\nconta isto. Nem tudo que reluz é ouro.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Seu grande tesouro é a boa saúde. Então não se descuide e mesmo\r\ncom a pandemia, coloque em funcionamento o corpo e a mente.\r\nComece controlando o excesso de sal e dormindo melhor. Chá de erva\r\ncidreira antes de dormir, relaxa sua ansiedade que é permanente.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'O dia é corrido e muitas coisas serão resolvidas com você tomando à\r\nfrente e mostrando sua capacidade de “fazer”. No entanto, haverá\r\nespaço para o amor e a boa companhia dos amigos, pois a vida não\r\npode ser apenas uma lista de tarefas a cumprir.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Com Vênus em Leão, bom momento com filhos ou jovens da família.\r\nEles acabam sendo a motivação para que você se aperfeiçoe e possa\r\ninspirá-los. No trabalho as energias exigem que você trace planos e\r\npossa inserir outras pessoas em seus projetos de sucesso e realização',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Espere por descobertas importantes nos temas familiares. Chance de\r\nsaber usar melhor o tempo e conseguir fazer aquela caminhada que\r\npromete fazer há tempos. Com máscara e todo cuidado, tente mexer\r\ncom o corpo e tire o sedentarismo do meio do caminho.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Boas influências no trabalho, com chances de mudança de área.\r\nNovos amigos e sondagens para alguma promoção. As coisas vão\r\nacontecer de um modo natural e não há motivo para ansiedade. Com\r\na Lua em Virgem, dia de organizar armários, papéis, finanças.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Inquietações e mudanças são benvindas quando estão em acordo\r\ncom suas necessidades do momento. Caso contrário, a melhor orientação é dar valor aos relacionamentos e alicerçar ainda mais as\r\namizades. No amor, mostre intensidade e diálogo.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Há desafios na vida a dois, mas você consegue resolvê-los com o seu\r\nmodo gentil e amoroso de ser. Isso não significa ceder o tempo todo,\r\nmas fazer a outra pessoa compreender que a relação precisa se\r\nequilibrar de modo que ambos fiquem satisfeitos.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-15',
      horoscopes: [
        {
          title: '.',
          description:
            'Alguns debates são inteligentes e instigantes. Você aprende com\r\npessoas que sabem dialogar e que podem lhe mostrar o outro lado da\r\nmoeda. Mas se você julgar que é perda de tempo, fuja das discussões\r\npara não desperdiçar energia e ainda acabar se aborrecendo.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Pequenas mudanças hoje, trazem resultados fantásticos. Grandes\r\nrevoluções podem começar com novos hábitos que modificam o seu\r\nhumor e geram muito mais energia e motivação não só para o\r\ntrabalho como para as amizades e o amor.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Hoje é o dia de amadurecimento e expansão. Ter noção dos limites\r\npara poder se jogar nas experiências sem risco de se machucar ou\r\nperder. O mestre é o bom senso, o reconhecimento de seu potencial e\r\no planejamento de vida para seguir em frente sem receios.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Dia de boas perspectivas e expansão. Não se trata de sorte, mas do\r\nreconhecimento por tudo o que você tem plantado até agora. Não é\r\nmágica. Você jogou energias positivas para o mundo e ele vai lhe\r\nretribuir oferecendo chances positivas em muitas áreas diferentes!',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Com a Lua em Libra, há mais vontade de interagir com os queridos\r\namigos e cultivar liberdade. Fica mais difícil tolerar limitações.\r\nAproveite para esclarecer mal entendidos, interagir com mais\r\nabertura e colocar os assuntos em dia.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Sua curiosidade esta ainda mais aguçada. Período para organizar a\r\nagenda e refletir sobre os próximos movimentos. Sua produtividade\r\ntende a aumentar, com boa capacidade estratégica. Hora de fazer\r\ndivulgações, contatos, estudos.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Com o Sol em Câncer, hora de divulgar seus projetos e encaminhar\r\nacordos, com uma atitude mais acolhedora e afetuosa. Ao conversar\r\ncom colegas e amigos, boas soluções podem surgir.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Hora de ser mais comunicativa. As conversas podem ser mais\r\nprazerosas. Apenas atenção com mal entendidos no fim da tarde.\r\nInvista na flexibilidade para pensar diferente, atualizar informações e\r\nassimilar novas tecnologias.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O dia positivo para conversar, ler, tirar dúvidas, pesquisar, atualizar\r\ninformações. Conte com boa predisposição para buscar amigos com\r\nafinidades intelectuais. Invista na leveza e na flexibilidade, ao invés\r\nde alimentar cobranças e disputas.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Aproveite a energia do dia para pesquisar, ampliar horizontes com\r\nnovas informações e aprofundamento. Vale também perceber o que\r\nestá estagnado: emoções, objetos, roupas, papéis. Liberar espaço\r\npode trazer alívio e leveza.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Comece o dia lembrando que abundância é o livre fluxo de energia, o\r\nlivre fluxo do dar e receber. Se anda acumulando coisas, isto é sinal\r\nde que algo no seu emocional precisa ser trabalhado.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Novos campos se abrem, novos amigos chegam, novas parcerias se\r\nformam. O dia traz um clima de liberdade, alto astral, espaço e\r\nindependência. Encerre-o com uma massagem relaxante. Você\r\nmerece!',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-16',
      horoscopes: [
        {
          title: '.',
          description:
            'Que tal pensar no futuro, encontrar caminhos de realização para ideias inovadoras? Na parte da manhã, evite decisões apressadas. Liberdade e independência são as palavras de ordem, é tempo de romper com algo que a prende.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Excelente dia para praticar o desapego e livrar-se de algo que não quer mais. Porém, sem passar por cima dos outros! Após o almoço o clima fica mais suave e conversas mais “espinhosas”, funcionam melhor. Só não vale forçar a barra.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Não negligencie os compromissos ou abandone as pessoas que ama. O bem estar individual deve ser levado em consideração, tanto quanto dos seus queridos. É importante relaxar, respirar, trazer a atenção para o momento presente.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Comece o dia , meditando para controlar a ansiedade e evitando decisões impulsivas. Após o almoço, com a energia mais calma, aproveite para cultivar sentimentos elevados, encantar-se com as artes e tudo o que é belo.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Cuidado com  posturas rígidas, negativas, pessimistas ou críticas demais. O início da tarde favorece momentos de recolhimento e introspecção. Procure fazer algo que possa trazer inspiração, alimentar sua alma e seus sonhos.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Hora de olhar mais para suas necessidades. Vale fazer uma lista de coisas que deseja conquistar. Bom momento para investir em atividades artísticas, tudo com leveza, sem muitas complicações. Inicie hoje uma dieta para perda de peso.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Que tal buscar mais  independência, ousadia e liberdade. Mas apenas tenha cuidado com a agressividade! Aproveite para alimentar seus sonhos e  suas habilidades artísticas. Fica mais fácil ampliar sua fé, sua sensibilidade e  compaixão.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Lembre-se de respirar fundo para relaxar a mente, buscar inspiração, praticar afirmações positivas. O dia é indicado para  mudanças, limpezas e libertações. Sua intuição,  imaginação e a capacidade de sonhar ganham destaque.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Faça um balanço do quanto avançou e alimente novos planos. Em momentos de relaxamento novas ideias e compreensões, surgem. Desacelerar não significa perder algo, e sim, ganhar consciência de que fazer bem feito, é fazer sem pressa.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Os desafios que surgem hoje,  devem ser enfrentados com mais amor, compreensão, tolerância, empatia e diplomacia. Você pode esclarecer assuntos, mas esteja aberto para compreender as motivações dos outros também.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Quando você se deixa levar pela sensibilidade e compaixão, desentendimentos desaparecem. Hora de conectar com sua intuição. Atividades artísticas e de fé estão favorecidas. Há uma forte conexão com dimensões sutis de sua consciência.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Que tal interessar-se por boas notícias, para que possa ficar mais inspirada. Mas evite acumular muitas tarefas, ou pode se sentir impaciente e estressada. Uma postura mais independente e inovadora é recomendada!',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-17',
      horoscopes: [
        {
          title: '.',
          description:
            'Com Vênus em Leão,  você tem um bom período para cuidar da sua imagem, mostrar-se mais bela e sedutora. Esteja aberta e disposta para atualizar informações e fazer novos amigos. O dia favorece as artes, o cinema, a música.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'É tempo de investir em tudo o que promova seu crescimento: cursos, estudos, aventuras e viagens. Passamos por  um período importante na história,  com  profundas transformações coletivas. A noite despertará sua sensibilidade. Procure reservar tempo para ficar sozinha.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Pela manhã, cultive suas habilidades sociais. Procure ouvir mais o outro, deixar de lado posturas rígidas e dogmáticas. Vale cultivar mais compaixão e uma visão mais ampliada da vida. A inspiração e a sensibilidade crescem.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Com o Sol em seu signo, sua intuição fica ainda mais afiada. Encantamento, arte, romantismo e sensibilidade são os ingredientes para trazer magia à vida. Que tal dar asas à imaginação e programar algo diferente e inusitado para fazer hoje?',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Você só tem a ganhar se souber respeitar o ponto de vista alheio e aceitar as pessoas como elas são, sem cobranças. Perde se alimentar rancores, der asas pessimismo, às críticas e à teimosia. Pratique mais a tolerância e pare com a crítica excessiva.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'O dia pede que relaxe mais  e evitar disputas. Mantenha aberta e receptiva. Observe, contemple mais, deixe a vida fluir. Sua intuição indicará o caminho certo a seguir. É tempo de elevar a consciência para além do mundo da matéria, com mais empatia, sensibilidade e compaixão.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Pegue  leve com você mesma e os outros. É importante vibrar na alegria, flexibilidade, independência e liberdade de pensamento para desfazer tensões. Já no início da tarde, não é bom forçar situações,  mas sim, deixar a vida fluir, confiar, cultivar fé e inspiração.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Que tal pensar no futuro, olhar pra frente, fazer algo diferente. Porém, como esta  mais inquieta, tome cuidado com a intolerância e a impulsividade. Evite radicalismos. O dia favorece romance e encantamento.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Pratique a  generosidade, empatia e compaixão. Estes são os ingredientes essenciais para tornar a vida mais colorida. Você pode também canalizar sua sensibilidade e criatividade em atividades ligadas à imagens: pintar mandala, fazer um vídeo.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Você tem  direito a descanso e a reflexões,  para que além de sua força de vontade,  possa também usar a inteligência e nunca esmorecer. Sua coragem deve combinar com boas estratégias para realizar a vida sem chances de retrocesso. Hora de encerrar algo que a temos vem adiando!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'A beleza física é fundamental para que o mundo fique também colorido e com formas agradáveis de sentir, ver ou tocar. Então, transforme seu hobby em uma atividade mais constante, seja a música, a pintura, a dança ou artesanato. Arteterapia cura o corpo e a alma.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Se sua cabeça parece confusa e os pensamentos estão emaranhados, não se preocupe. Não é mesmo um bom momento para agir. Respirar fundo, ouça boa música e deixe as decisões para outro dia. Hoje o dia é de leveza. Invista em cores que combinem tons claros com lilás ou lavanda.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-18',
      horoscopes: [
        {
          title: '.',
          description:
            'Você pode responder à vida com mais agilidade, mas sem ter certeza do que deseja, é melhor pedir um tempo para pensar. Oportunidades sempre aparecem e o universo não vai esquecer que você merece chances melhores.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Dia importante para cuidar de si mesma, proteger os filhos, programar nova gravidez, plantar flores no jardim ou escrever o roteiro de cinema. Cultive os seus dons, procure aperfeiçoá-los, mostre sua criatividade. Que tal fazer um curso de auto-maquiagem, customização de roupas?',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Pequenas mentiras podem  fazem parte do cotidiano,  para não machucar quem não deve ser machucado. Considere que cada situação exige uma postura diferente e o importante é você saber que faz bem às outras pessoas. A  melhor forma de ajudar o outro, é elogiando e não criticando.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Um relacionamento amoroso tem algumas regrinhas. Você cumpre funções na vida da pessoa amada. E fazer companhia em algumas visitas ou atividades não é o fim do mundo. Respire fundo e cumpra seus papéis com amor. Lembre-se, o amor é uma via de mão dupla.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Amores do passado tem gosto de café requentado. Será que é um sentimento verdadeiro ou é apenas a valorização da segurança? Pense bem, pois virar a página é o caminho para novas emoções. E o dia pede finalizações que você esta postergando a meses.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Sua força está dentro de você e dentro do seu quarto você pode orar, meditar e se conectar com o universo. A pandemia impõe limitações físicas, mas nem por isto você vai “jogar a toalha”. Lembre-se que são os dias mais cheios de desafios, que te torna mais forte e resiliênte.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Você muda a todo minuto. Muda por dentro e acaba mudando por fora. Muda os desejos, muda o estilo. Aproveite e olhe sempre para você, para se conhecer melhor e compreender suas fases de transição. 2021 é seu ano de desprogramar e se reinventar!',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Mais cautela na economia, pois ninguém sabe direito  o que vai acontecer com alguns investimentos. Isso não é um problema para uma boa escorpiana, que  costuma ser prevenida e controlada em várias situações. Mas como diz o ditado: Seguro morreu de velho.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Períodos de limitação são perfeitos para despertar a criatividade. O que é que dá para fazer? Não perca muito tempo dando chance para ao tédio. Aproveite as ideias para colorir sua vida com artes, brincadeiras, música ou cinema. Dia ideal para cortar péssimos hábitos. Mãos à obra!',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'O dia será marcado por um  cabo de guerra, e pede  paciência. Faça tudo com calma e consciência de seus atos, já que há propensão a acidentes. Não é hora de brincar com fogo no relacionamento e se arriscar, já que há tendência  a um aumento da agressividade.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'A manhã já inicia trazendo mais clareza sobre mudanças profissionais, feitas com um  espírito mais independente e criativo. Todavia, pode proliferar os enganos, facilidade em compartilhar  fake news, cair em golpes virtuais. Fique atenta à sua intuição, ela será seu melhor GPS.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Use hoje a  boa válvula de escape para suas tensões, bem como abertura para algum tipo de mudança. Há maior clareza para encontrar  soluções e caminhos, além de uma atitude de mais independência e criatividade. Bom para quebrar a  rotina  e ter contato com  pessoas estimulantes e positivas.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-19',
      horoscopes: [
        {
          title: '.',
          description:
            'Deixe de lado as críticas, reclamações,  pensamentos negativos e rígidos, para dar vez às novas ideias, novos aprendizados e novas formas de encarar a vida. Semana inspira novas amizades e pensamentos vanguardistas.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Sua mente fica mais intuitiva e telepática, e os trabalhos em grupo render mais. Algum ideias podem literalmente ser canalizadas do espaço. Apenas cuidado com a inquietação,  agressividade, imprudência e  impulsividade.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Hora de ver e ser vista. Bom pra contatar gente do passado, pedir e dar  conselho, entrar em novos grupos, tribos. No trabalho, chateações, mas você tira de letra. Mantenha o costumeiro bom humor. E na dúvida, use tons divertidos e quentes: amarelo, vermelho, pitanga.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Dia positivo para expansão no trabalho, já que a deixa mais audacioso e confiante. Fazer atividade física equilibra seu humor. Cuidado para não perder energia à toa por se sobrecarregar. Atividades em grupo são  positivas.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'A necessidade de expansão, reflexões sobre assuntos espirituais e filosóficos estão favorecidos. Você precisa de mais espaço, liberdade e aventuras. Cresce o desejo de filosofar, pensar grande, ampliar horizontes.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Confusão nos relacionamentos profissionais;  parece  que as pessoas não te entendem ou querem te cutucar. Faça  tudo com calma, reflita antes de assinar contratos ou fechar negócios. Dê uma pausa pra rever, repensar, refazer.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'A manhã começa com energia positiva, animação e muito  vigor. Novidades à vista. Ótimo para fazer cursos diferentes, conhecer novas pessoas ou fazer coisas que antes “virava o nariz”. Mais tudo com  foco para não dispersar .',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Promoção, melhorias  ou transição no trabalho. Haverá conversas estimulantes, mas também competições.  Sua saúde oscila, por isso, mais cuidado com excessos alimentares. Você anda mais elétrica e agitada.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Seus gastos precisam de  maior atenção, já que anda gastando demais. Vida social divertida. Invista nos seus hobbies. No amor, você precisa de espaço e liberdade e se o parceiro não  entender isto, problemas a vista!',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Imprevistos surgem, mas se revertem a seu favor. Mudanças e novidades à caminho, em particular na área profissional e consequentemente, em sua vida familiar. Vale fazer contatos, optar pelo que é diferente e desconhecido.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Invista no online: cursos, encontros, reuniões, palestras. Você  inspirando confiança e contagiando pessoas próxima. Hora de ampliar o leque de possibilidades para expandir suas fronteiras. A Lua hoje deixa sua criatividade e intuição poderosa. Use a seu favor!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Fase romântica e de excessos: desejos, gastos, comida, atitudes. As amizades são mais valorizadas e bons conselhos devem ser levados a sério. Como esta sonhadora,  cuidado para não criar ilusões e falsas expectativas.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-20',
      horoscopes: [
        {
          title: '.',
          description:
            'Que tal gastar a energia acumulada com passeios?  Veja em que situação esta  presa e que trava sua caminhada, pra que possa se  libertar. Relacionamentos onde haja  muita dependência fica por um fio e pode se romper.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Situações inesperadas como discussão com colegas pode motivá-la até em buscar novos começos. Melhor evitar discussões, conflitos e atitudes agressivas. Pelo contrário, utilize o diálogo para suavizar qualquer inconveniente.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'É importante estar aberta para revisar conceitos e pensar difere. Procure dar mais atenção aos parceiros e colaboradores e o retorno será garantido. Um clima de aventura deixa a vida mais estimulante.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'É importante ouvir mais, compreender o ponto de vista das pessoas que ama. O aprendizado é combinar criatividade e flexibilidade com comprometimento, responsabilidade e determinação.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Você leonina que tanto  valoriza  a independência, deve cultivar também a receptividade, a compaixão e a abertura para ouvir o outro. Teimosia já era!  Lembre-se: generosidade gera generosidade.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Seu trabalho pede mudanças. Novo formato, novos projetos. É provável que tenha de reorganizar sua rotina profissional por conta de mudanças na vida pessoal e, para isso, terá de priorizar, delegar e saber o que quer de verdade.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Este é um dia de evitar extremos. O caminho do meio é sempre o caminho da felicidade. Andar pela beira do abismo pode gerar boa dose de adrenalina e suspense, mas a meta deve ser ter uma vida tranquila cheia de momentos de paz e serenidade.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Você pode se sentir dividida entre emoções, vontades e metas que parecem ser incompatíveis. É comum ter contradições. Sofra por isso. Dia importante de autoconhecimento. Estabeleça prioridades.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Que tal refletir sobre sua vida com mais profundidade? Não se deixe levar pela correria ou poderá fazer escolhas errada. Dia para transformar um limão em uma bela  limonada. Cuide mais de sua saúde e vitalidade, assim como cuidar da energia de sua  casa.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Se sentir pressionada para dar respostas imediatas de trabalho, use a intuição. Se pensar demais poderá perder boas chances. Avalie não somente o retorno financeiro, mas a chance de dividir experiências com pessoas amigas.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Para evoluir espiritualmente é preciso que todas as  áreas da sua vida estejam em ordem. Você não pode meditar num ambiente que não esteja limpo e organizado. Seu mundo exterior revela quem é por dentro Boa fase para as finanças ou promoção profissional.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Hoje é aquele dia em que sentirá o impacto da Lua em questões familiares e no trabalho. É possível que comece a sentir desejo de mudar de casa, de cidade ou mesmo de iniciar uma reforma. Uma pessoa da família pode partir, sair de casa ou outra chegar ou voltar.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-21',
      horoscopes: [
        {
          title: '.',
          description:
            'Continue firme nos processos mentais e intelectuais. Boas chances de retomar os estudos ou começar um novo curso. Bom dia para  negociação e fechamento de um projeto ou contrato. E você mais fechada, calada e interiorizada.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Dê mais atenção às finanças, pois passos errados, levam a perdas. O período pede economia, distanciamento de investimentos arriscados. Não é um bom momento para pedido de empréstimos e financiamentos.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Você continua em uma vibe interiorizada, voltada para seu mundo emocional. O dia pede um balanço de vida, já que não é de hoje que você passa por uma fase de reflexão. Se um relacionamento acabou, é porque um ciclo se fechou. Comemore!',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Você será  impactada com mudanças nas amizades; já que hoje é  um dia onde pode  haver perda de amigos ou ao menos, transformação na maneira de relacionarem-se. Coloque mais foco e responsabilidade em projetos em equipe.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Impactos positivos em seu trabalho e a carreira. Uma mudança, que já vem sendo desenhada há algumas semanas, pode ser concretizada. Não está descartada a possibilidade de mudança radical na carreira ou na função que exerceu até hoje.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Continue voltada para a busca de um sentido e significado para a vida. Um novo caminho espiritual exige mudanças em sua filosofia de vida. Um projeto de internet e/ou de publicações, pode chegar ao fim ou precisar de mudanças significativas para sua continuidade.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'A ordem do dia é renovação. A vontade é de inovar, de pensar e fazer diferente. Se estiver em uma relação, vale investir num comprometimento mais sério. Se estiver solteira, pode esperar uma surpresa, um amor do passado que vem  ressurgindo.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Se você vive uma relação conflituosa,  vai perceber que é hora de mudar. O medo de partir pra outra já não é tão amedrontador. Hora de ter mais autoconfiança e mais respeito por si mesma. É assim que vai atrair alguém com sintonia de alma.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Por ser instável, você vive questionando sua relação amorosa. Hoje é uma daqueles dias que da vontade de cultivar valores mais elevados, buscando mais qualidade, maturidade e comprometimento nas parcerias.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Romantismo, intuição, sedução em destaque hoje. A vontade é de tomar atitudes e pensar até mesmo em casamento. A dica é voltar o olhar para si mesma, analisar o que pode mudar, ceder, pensar bem antes de tomar qualquer decisão.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Hora de  transformar os sonhos em realidade. Vale apostar em viagens, diversão, cultivar amizade e companheirismo. Compartilhar novos conhecimentos e novas experiências pode revitalizar relações desagastadas.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Hora de buscar planos mais sólidos, com mais segurança e mais estabilidade emocional. Por isso, se estiver comprometida, hora de  fortalecer ainda mais os laços da relação. A dica é ser sincera, expressar as intenções, deixar bem claros seus objetivos.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-22',
      horoscopes: [
        {
          title: '.',
          description:
            'É tempo de ser mais fiel a si mesma, refletir de forma mais madura, realista e racional. Faça esta pergunta: insisto na relação porque amo verdadeiramente, ou porque tenho medo de ficar sozinha? Momentos de solidão faz bem, já que você olha pra dentro!',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Suas habilidades sociais estão mais evidenciadas. O contato com as pessoas funcionará com fonte de inspiração. A dica é se desdobrar para dar atenção à todos, estar mais aberta, buscar novos encontros, olhar para o futuro sem ficar preso ao passado.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Este é um bom dia de avaliar seus valores, questionar sobre a vida, o futuro, buscar mais qualidade em tudo, inclusive nas relações. Com mais maturidade e responsabilidade, os compromissos podem se tornar mais sérios.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Sua prioridade é voltar o olhar para si mesma, ao invés de colocar expectativas sobre os outros. Há tempos que você passa por   limpezas e purificações e este processo continua. Vale buscar terapias, assumir seus sentimentos e sua transformação.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Inovações, companheirismo e revitalizações hoje. Quem está comprometida, pode estreitar os laço e  estabilizar a relação. Se estiver solteira, nova paquera à vista. Mas seja flexível, pois a vida profissional promete ser movimentada e vai pedir mais atenção.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cuidado para não ficar exigente demais ou distante demais. Relevar, dialogar, perceber o que pode ser melhorado, reforçar a cumplicidade, investir na intimidade. Vale dar mais tempo para o amor: passear de mãos dadas, contemplar o por do sol…',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Se estiver comprometida, hoje pode ser um dia de crise conjugal, que testará a solidez da relação. Se houver amor, cumplicidade, diálogo e perseverança, a relação se fortalecerá ainda mais. Conselho: “não cutuque onça com vara curta”.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Propostas originais e surpresas mais apimentadas, aquecem relações “mornas”. A ideia é buscar situações diferentes, se abrir pra mudanças positivas. Invista no charme e no carisma, porque além de melhorar sua autoestima, dar força ao relacionamento.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Dia de conhecer alguém que vai mexer com suas emoções. O ideal é avaliar seus sentimentos de forma bem objetiva, desconfiar de tudo o que parece perfeito ou mágico, cultivar autoestima pra não se deixar levar por sentimentos de carência e embarcar em ilusões.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Se há mágoas no relacionamento, pense seriamente em perdoar, dar uma segunda chance, abrir o coração para renovar o amor. Hora de programar novas experiências e sair da rotina. Mas as insatisfações também ficam mais evidentes, pedindo solução e aprimoramento.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Este é um bom dia para renovações, um novo amigo será  bem vindo. O mais importante é estar com quem te faz bem, abandonar relações doentias, curar sentimentos perturbadores. Esteja disponível, tenha  mais tempo para meditar, caminhar, cuidar de plantas.',
          sign: 'Aquário',
        },
        {
          title: ',',
          description:
            'Você esta mais fechada e voltada para suas emoções , em um período de reflexão e interiorização, que levará a uma grande transformação. O dia pode envolver a negociação de uma parceria financeira ou de um negócio com grande soma de dinheiro.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-23',
      horoscopes: [
        {
          title: '.',
          description:
            'Todo relacionamento  enfrenta altos e baixos. Num mundo em transição,  todas as relações exigem cuidados. O mundo se transforma, e você se adapta e os vínculos precisam amadurecer no mesmo ritmo e direção.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Se estiver em sintonia com seus propósitos verdadeiros, todas as experiências serão vividas com satisfação. Porque você sabe que está caminhando para conquistar o que é realmente importante em sua vida.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Não se exponha demais, pois não é momento de se abrir na direção de quem conhece pouco. Bons contatos comerciais e ganhos financeiros. Mas preserve sua vida pessoal e mostre objetividade na comunicação.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Atue de modo claro e objetivo em todas as áreas. É o seu estilo natural e evite mal-entendidos. Valorize a família e o casamento. Com a sua presença e com palavras que aqueçam todos os corações.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Enquanto muitos temem as crises, você consegue enxergar as oportunidades. Os imprevistos devem ser entendidos como recados que o destino te envia. Mostre bom humor, pois o dia favorece negócios e ganhos financeiros.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'A vida exige movimento e mesmo no repouso, a mente continua produzindo ideias e você está conectado com tudo e todos ao redor. Aproveite o dia e reavalie seus projetos, aperfeiçoando e aprimorando seu desempenho.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Tomar decisões não é o único desafio. Mas saber como agir de modo que as coisas caminhem sob o seu controle e sem possibilidade de interferir negativamente na vida dos outros. A vida exige atenção, tensão e responsabilidade.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'O passado serve como um aprendizado, mas não pode ser motivo para você impedir o seu desenvolvimento na direção do futuro. Tentar, experimentar, tentar de novo e não desistir. Valorize as metas e todo o processo para alcança-las.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O dia favorece finanças, aquisição de bens e o contato com a família. Uma fase de realizações e abertura da visão de mundo. Abra a mente para novos cenários e ideias. Abra o coração, não negue seus sentimentos',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Muitas energias positivas hoje. O dia promete realizações financeiras e uma visibilidade maior no trabalho. No amor e na família, deixe de lado ressentimentos para viver os laços de amor sem medo de ser feliz.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Boa perspectiva para o amor. Fase criativa, aproximação dos filhos e início de esportes, ginástica ou qualquer outra atividade que traga mais alegria para sua vida. A vida deve ser comemorada nos grandes e pequenos momentos.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Incríveis ideias nascem nas mentes que estão abertas e confiantes. Corte a palavra “não” do seu dicionário e prioriza a palavra “sim”. A vida pode oferecer desafios porque precisamos crescer e tudo o que aprendemos nos torna melhores.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-24',
      horoscopes: [
        {
          title: '.',
          description:
            'Razão ou intuição? Amor ou paixão? A vida está te  fazendo  muitas perguntas e nem sempre, você consegue responder. Pese nos dois pratos da balança e decida-se. Um dos pratos vai pesar mais e descobrirá o que é melhor nesse momento.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'As relações estão em foco hoje, em particular no que se trata da troca de sentimentos e da sexualidade. A busca pelos prazeres esta em alta, apesar de a energia vital ainda relativamente baixa. Invista em cores Yang/quentes: amarelo, vermelho.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Dia propício para o trabalho, mesmo que não pareça a princípio. Use as dificuldades que enfrenta na carreira, para se tornar mais sábia e mais hábil. É  bom manter em mente que nem sempre vale a pena brigar por conta de ideias.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Tenha em mente que os prazeres e o sexo, por mais que possam  te trazer energia, alegria, são assuntos que precisam ser levados a sério. Todo ato sexual é uma troca energética com o outro, ou seja, algo do outro se torna parte de nós.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'O dia te lembra que, por mais que seja habilidosa ou  inteligente, há certas coisas que apenas a experiência te ensina. Não é à toa que sistemas espirituais buscam tanto entrar em contato com a sabedoria dos antepassados.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'O dia está propício para entrar em contato com sua “sombra”, ou seja, tudo aquilo que “joga para debaixo do tapete”. Hoje pode ocorrer alguns tropeços – mas quem sabe que tesouros não pode encontrar ao olhar para seus pés?',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Toda essa fase é muito importante para você se destacar em diferentes áreas da vida. Hoje pode surgir propostas profissionais que você nem esperava. Tome cuidado com a palavra,  que é sempre a nossa ferramenta para o bem ou para o mal. Cultive a diplomacia.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Dia com muitas solicitações. Em alguns momentos vai querer se esconder do mundo para poder pensar com autonomia. Em outros, mostrará envolvimento com a equipe ou colegas de trabalho. Mostre praticidade em suas decisões.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Existem metas mais fáceis de serem alcançadas do que você imagina. Basta fazer foco e usar da paciência e da persistência em alguns setores da vida. E acredite, a palavra mágica é apenas “obrigada” ou algum gesto de gratidão e consideração pelos outros.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Boas leituras ajuda a saber mais da vida e a preencher sua mente com ideias novas e que não deixam espaço devaneios. Ler é hábito e basta começar pelo assunto que mais gosta. Poderá abrir um universo e descobrir a si mesmo, além de se tornar uma pessoa mais interessante.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Bom momento para a vida financeira. Faça um pouco mais de economia, de modo que possa guardar ao invés de gastar. Reinvista em cursos. Então, não será um gasto desnecessário, mas um investimento para continuar crescendo.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Dia positivo para os relacionamentos. As pessoas podem expressar o quanto você é importante para elas e você pode confiar. Termine o livro que está escrevendo ou se inscreva no curso de tecnologia. Não deixe nada inacabado.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-25',
      horoscopes: [
        {
          title: '.',
          description:
            'Dia positivo para concretização e realização em relação às ambições pessoais. É um momento para transformar os potenciais em realidade. Além disso, você enxergará “por trás do véu”. Confie em seu faro essa semana.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Aprenda o que puder com aqueles que já viveram o que você vive agora, tanto no campo profissional quanto no campo das relações. Quando as coisas estiverem complicadas no trabalho, pare por 5 minutos e medite. Acalma sua mente.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'O momento é bom pra finanças, mesmo que o retorno não seja imediato. Não se esqueça que quanto mais ganha, mais gasta. E é bom prestar atenção para não ser mulher maravilha, e achar que você consegue resolver tudo sozinho.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'A criatividade  está em alta, então coloque seus talentos não apenas a seu serviço, mas a serviço dos outros também. Os conflitos domésticos podem aumentar, e é bom manter em mente que nem sempre temos razão.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Lembre-se: sua família está lá para que justamente não precise carregar seus fardos sozinha. O foco esta na sua vida doméstica, mas é sempre bom manter em mente seus objetivos profissionais de longo prazo.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Fuja dos debates políticos como o diabo foge da cruz. Por mais que os debates possam ser fontes de aprendizado e questionamento, o investimento emocional em ideologias, é  demasiado alto para você.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'O dia pede reflexão quando se trata dos conflitos com parceiros e com sua vida doméstica. Isso pode gerar angústia devido a sua propensão a querer manter a paz a qualquer preço.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Tome cuidado com suas ideias: é fácil perceber quando o outro mente para nós, mas não tanto quando se trata das mentiras que contamos para nós mesmos. Na dúvida, confie mais em seus sentimentos do que em seus pensamentos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'As questões financeiras voltam a entrar em foco e precisam ser levadas a sério. Por mais que pareça distante, o cobrador sempre irá bater em sua porta, cedo ou tarde. Não é um bom momento para apostar nem para agir impulsivamente.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Quando o peso sobre as costas estiver muito pesado, volte para a família. O momento é  bom para pedir ajuda aos círculos sociais, aos amigos de amigos. Exercícios físicos e massagens podem ajudar a aliviar a tensão também.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'É  importante ser cuidadosa e responsável com sua saúde, mantendo em mente que as  enfermidades podem ser ligadas a questões mal resolvidas do passado (seja no sentido emocional ou no sentido prático).',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'É importante você levar a sério seu  papel social e sua relação com o mundo à volta, mas  também reconhecer que certas coisas estão além de sua influencia. Vale mais liderar por exemplo.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-26',
      horoscopes: [
        {
          title: '.',
          description:
            'Mude a rota, encontre novos caminhos, abandone velhos vícios e apegos. O dia revela sua maturidade nos intercâmbios e o comprometimento nas relações. Mas evite atitudes imprudentes ou rebeldias.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Evite pecar pela agressividade, prefira promover mudanças em hábitos e comportamentos. Não alimente raiva, impaciência ou frustração. Com mais autoestima, você pode investir em seu desenvolvimento em trocas mais amorosas.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Você pode agir com autonomia, com cuidado para não parecer muito crítico. Durante a manhã,  o clima é de inquietação. Agir com  diplomacia, gentileza, é a chave para um dia mais equilibrado, que o diálogo. O aprendizado é lidar com as demandas com serenidade.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Hora de se desfazer de tudo o que impede seu crescimento. Qual é seu objetivo no trabalho? Quais são suas metas e seus projetos de longo prazo? É importante refletir, cultivar momentos de introspecção, evitando rupturas prejudiciais.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Evite cobranças: o céu pede revoluções, liberdade, independência e autonomia. Com o coração aberto, você pode esclarecer mal-entendidos e dissolver desconfianças. Há necessidade de observar onde se sente preso, frustrada.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Não perca tempo com conflitos improdutivos, invista em seu progresso pessoal. É importante ser mais diplomática, objetivo, cordial e profissional, menos passional. O corpo tratamentos alternativos: fitoterapia, homeopatia.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'É hora de sair da estagnação. Tomar providências, iniciativas e priorizar aquelas tarefas que dependem só de você. Porém é importante evitar confrontos! Continue a elaborar estratégias com mais planejamento e menos impulsividade.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'As emoções tendem a transbordar hoje.  Aproveite para organizar ideias e sentimentos, cultivar uma visão mais objetiva da vida. Procure cuidar bem de si mesma, cercar-se de coisas que ama.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O dia tem  potencial produtivo, aproveite para arregaçar as mangas e dar um gás no trabalho, demonstrando comprometimento e profissionalismo. Aos poucos tudo se esclarece e o que estava empacado se desenrola.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Adote posturas mais  maduras. Evite discussões, releve e procure ceder. É importante ampliar a visão e compreender as razões das pessoas à sua volta. Assuntos ligados à família e relacionamentos pedem cuidado e atenção.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'O dia ate deixa mais sensível e ao mesmo tempo mais determinada. Pode se dedicar à produtividade, com uma postura mais profissional. Tenha um olhar mais cuidadoso para a forma como supre suas carências afetivas.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Se estiver numa relação desgastada, é melhor não grudar, nem cobrar nada. Vale cultivar mais espaço, mais independência, sair com amigos, experimentar novos ares.  A carência que esta sentido, é de você mesma.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-27',
      horoscopes: [
        {
          title: '.',
          description:
            'Hora boa pra resolver perrengues e colocar um ponto final naquelas situações que se arrastam. Cuidado apenas com a falta de paciência e o excesso de irritação que acaba tirando seu controle e fazendo com que “chute o balde”.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Dia que os  encontros amorosos ficam ardentes. Você esta ávida por satisfação emocional. Cuidado com a possessividade e o ciúmes que  atrapalha a relação.  Hora de  engatar uma rotina de atividade física.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'O dia promete mais relaxamento. No relacionamento amoroso, uma demonstração de confiança, aumenta as chances de crescimento e se tornar algo bem sólido. Você precisa olhar mais para sua saúde, ir ao médico.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Deixar pra fazer as coisas na última hora, vai dar errado! E a teimosia ou imposição de sua vontade sobre o outro, acarreta situações desagradáveis. Cuidado com os extremos. Pare e respire fundo antes de engatar uma discussão.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Seu desejo de poder ou de controlar filhos e parceiros,  aumenta e fica sem controle. Acredite, pra conseguir êxito em negociações com parentes, é fundamental ser menos emocional e mais racional.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cultive uma atitude de desapego e pensamentos mais leves. Deixe pra trás raiva, ressentimento e pare de remoer o passado. Aprenda a filtrar melhor os interesses e abandone aqueles que não vêm dando sinais de eficiência.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Cuidado com o excesso de dúvidas entre escolher a  melhor forma de lidar com situações chatas no trabalho. Pense menos e aja mais. O dia traz mais  criatividade e  ideias inovadoras pra incrementar sua área financeira.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'É bom priorizar  assuntos e cuidar de uma coisa de cada vez. Evite falsas promessas, enganos.  Sua comunicação ou a forma como tem lidado  com o trânsito estão perigosas. Desacelere! Bom momento para investir nos encontros caseiros, aprofundando  os vínculos com familiares e amigos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Período ideal para cuidar de sua base emocional,  equilíbrio, para que possa enfrentar o mundo lá fora mais estabilizado.  Dê mais atenção às questões do lar, da família, dos relacionamentos mais íntimos. São eles que te fortalece!',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Ótimo momento pra reverter mal-entendidos ou ressuscitar relações que andavam meio mortas. É  hora de tratar dos assuntos domésticos, valorizar as raízes  e estar mais próximo de gente que te ama.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Fase boa pra ouvir mais sua intuição, entender seus sonhos, que andam se repetindo. Eles podem estar dando sinais, que você anda ignorando. É como se seu inconsciente estivesse num momento de vir à tona e trazer junto soluções.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Abundância e prosperidade pra você. Aproveite o dia pra fechar negócios e pleitear promoção ou melhoria salarial. Nos relacionamentos amorosos, atitudes carinhosas , fazem uma imensa diferença.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-28',
      horoscopes: [
        {
          title: '.',
          description:
            'Deixe a vida fluir, sem cobranças ou ansiedade. O dia pede que desacelere, com mais relaxamento e introspecção. Lembre-se de cultivar gratidão, respirar com consciência, meditar, cuidar do corpo, da mente e das emoções.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Tome  cuidado com atitudes impulsivas ou imprudentes, dê prioridade ao que te faz bem. Está mais fácil desfazer mal entendidos. Com cordialidade você pode concluir acordos, aproveite.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Cultive a  calma, a boa vontade e deixar a vida fluir, sem querer forçar situações ou controlar os outros. O dia pede finalização de assuntos pendentes. Reserve momentos para ficar sozinha, cultivar receptividade e compaixão.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'O astral do dia promete ser mais leve. Período bom para estudos que possam promover a expansão da consciência e atividades inspiradoras. Aproveite para cultivar gratidão pela vida.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'O dia é  um convite para desacelerar e apaziguar os ânimos. Vale reservar tempo para refletir e saborear os pequenos prazeres que a vida oferece. É tempo de finalizações e conclusões, para que possa pensar nas próximas metas.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'A Lua combina forças, prometendo doses extras de inspiração. Bom para pensar positivo, compreender a vida sob uma ótica mais ampliada e generosa. Que tal fazer uma repaginada no visual, mudando o corte e cor do cabelo?',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Finalização é a palavra de ordem. Deixe a vida fluir no ritmo sem ansiedade, pressa ou precipitações. Praticidade, continuidade e simplicidade ganham destaque. Evite decisões impulsivas e ações precipitadas.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Hoje é um daqueles dias de “deixa a vida me levar”, evitando forçar situações. Cuidado com disputas, cobranças, atitudes  impulsivas. Aproveite a poderosa  energia do  dia, para libertar-se de velhos condicionamentos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Evite assumir muitos compromissos, exigir demais de si mesmo ou dos outros. Procure cultivar liberdade e flexibilidade. Se hoje houver conflitos profissionais, uma retirada estratégica é recomendada.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Que tal abrir o coração, diminuir o ritmo, desfrutar dos prazeres simples que a vida oferece? Conclusões importantes estão em pauta. Aproveite para libertar-se e deixar para trás algo que tolhe ou atravanca sua caminhada.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Resolva todas as pendências. O astral te ajuda a elevar o astral, favorecendo a generosidade e o otimismo. Aproveite também para exercitar a mente, ler, estudar e expandir conhecimentos em momentos de recolhimento.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Com Mercúrio segue em Leão, sua comunicação ganha mais fluidez. Com bom planejamento, você pode cumprir prazos, concluir assuntos e reservar momentos para saborear os pequenos prazeres da vida.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-29',
      horoscopes: [
        {
          title: '.',
          description:
            'Saber esperar não é sua maior qualidade. Por isso, use o lado criativo para se distrair e aguardar que o estresse maior da pandemia termine. É hora de observar e ganhar conhecimento a respeito da vida e das relações, mas evitando atitudes arrojadas.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'A vida nos oferece momentos em que temos que decidir qual caminho seguir e que tipo de escolha faremos. Guiados pelo coração ou seguindo o impulso do desejo? Talvez seja possível encontrar um ponto médio e escolher com total equilíbrio.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Use toda a sua sensibilidade para criar coisas novas e não tenha receio de experimentar. Use as influencias de Netuno para brincar com a fotografia, fazer colagens ou quem sabe, iniciar um curso de canto. Vale tentar coisas novas para tentar driblar o estresse.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Dia de muitas decisões em diferentes cenários da vida. O mais importante é o que acontece no seu coração! Fase nova e positiva para a vida a dois e decisões familiares. É momento de conseguir fazer coisas que realmente deseje fazer e com muita alegria.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Fantasias e romantismo? Ou uma relação de total companheirismo? Relações curtas e intensas? Ou um casamento duradouro e tranquilo? Escolha a parceria que trará um sentido maior para sua vida e mantenha constância no caminho que escolher!',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Metas de futuro podem mudar de repente. Você escolhe outras direções porque sente curiosidade e quer experimentar novas possibilidades. Não se recrimine por nada, não se julgue volúvel. A vida exige movimento e adaptação aos desafios!',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Tensões no amor trazem amadurecimento para ambos. As relações se renovam a partir das crises. Se o casal decide ficar junto é porque amadureceu e descobriu o quanto se ama. Ou reconhecem que é melhor se afastar e tentar a felicidade ao lado de outro alguém.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Um dia mágico. Muitos de seus pensamentos se transformarão em experiências concretas. Tome cuidado com o que pensa, deseja ou com o que você diz. No amor, procure mostrar companheirismo e não prometa o que não poderá cumprir.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Pode ser um momento perfeito para definir a vida amorosa. E se você já tem alguém ao seu lado, trace projetos a dois para o futuro. Use o coração como guia e proteja as pessoas que você ama. Mostre com atitudes que elas realmente podem contar com você.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'A vida não é só trabalho e contas a pagar. Abra espaço na agenda para se conhecer melhor e não emende uma atividade na outra. Respire fundo e crie espaço para pausas. Será a chance de entender melhor quem está ao seu lado e firmar vínculos estreitos.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Em alguns períodos você se sente confusa em relação a muitas áreas da vida. O que será que é realmente importante? Liberdade ou segurança? Criatividade ou rotinas? Você  escolhe o caminho que lhe dá a chance de mostrar quem você realmente é!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Fé é uma postura diante da vida. Se em alguns momentos você tem dúvidas, não sofra por isso. Sempre que a vida traz desafios, tendemos a duvidar. Mas logo recuperamos a nossa essência e a natureza de Peixes é de uma fé profunda e inabalável no fluxo da vida.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-30',
      horoscopes: [
        {
          title: '.',
          description:
            'Desacelere  para desfrutar do positivo do dia e degustar os prazeres simples que a vida oferece. Assim, aproveite melhor as propriedades curativas da Lua em seu signo. Continue finalizando pendências com passos firmes e constantes.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Vale deixar para trás hábitos indesejáveis, compreendendo o valor real das coisas. Conforto, segurança e satisfação ganham destaque. Com Vênus em Virgem, seus antídotos hoje são: leveza, bom humor e compreensão.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Com Mercúrio em seu signo, convém eliminar o que não deseja mais para sua vida e criar espaço para as novidades. Aproveite para concluir assuntos, avaliar o quanto cresceu e estabelecer as metas do próximo ciclo.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Evite ao máximo confrontos e cobranças. Invista nos sentimentos mais elevados e nos assuntos inspiradores. Uma postura mais receptiva deve prevalecer. Cerque-se de coisas belas, conforto, qualidade e tranquilidade.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Sol no seu signo, Lua minguante em Áries: coragem e empreendedorismo profissional no dia. Invista nos prazeres saudáveis e na beleza da alma. Vale passar mais tempo sozinho, refletir e estabelecer as próximas metas.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cresce a necessidade de prazer, conforto, segurança e intimidade. É bom simplificar tudo o que for possível. Boa fase para investir na saúde, na positividade e na restauração das energias.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Abra espaço para coisas que ofereçam prazer, conforto e praticidade, e demonstre seu carinho, retribuindo gentileza e  afeto. Aproveite também para concluir tarefas, ouvir o que o outro tem a dizer e colocar os últimos pingos nos is.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Período ideal para restaurar forças, desacelerar, distribuir carinho e afeto. A Lua em Áries envia energias de garra, coragem e iniciativa. A intuição fica mais afiada! Reflita sobre o que pode mudar em sua vida para evoluir e crescer.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O que deve mudar em sua vida? Quais os projetos que pedem continuidade, perseverança e dedicação? O que deve ser deixado para trás? Procure relaxar para evitar disputas, evite forçar situações.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Dia ideal para avaliar seu crescimento e determinar quais serão as metas do próximo ciclo lunar, que chegará no domingo. Fica mais fácil agora  perceber onde deve promover mudanças, inovações, renovações e libertações.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Organize suas finanças e também, elabore novos projetos profissionais. É importante deixar a vida fluir sem ansiedade e restaurar as forças. Que tal investir em terapias, limpezas, meditação e conversas curativas?',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Opte hoje por atividades mais simples e prazerosas. O mundo interior está ativado. Procure cercar-se de pessoas queridas, Aproveite para alimentar-se com pensamentos, mantras, afirmações e visualizações positivas.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-07-31',
      horoscopes: [
        {
          title: '.',
          description:
            'Uma postura mais acolhedora, dócil e receptiva deve prevalecer com a Lua em Touro. O dia promete mais criatividade, anote as boas ideias e aguarde para semeá-las com a Lua nova do dia 8/8.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Priorize a segurança, o bem estar, a cordialidade e o afeto. Procure se desligar um pouco do burburinho, relaxar e cultivar pensamentos otimistas. Descarte o que for desnecessário para que possa prosseguir mais leve.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Momentos de meditação e interiorização são bem vindos e necessários para restaurar energias.  A energia do dia traz energias curativas e restauradoras. Aproveite para cuidar de seu equilíbrio. Reciclagens e finalizações estão em pauta.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'É tempo de colocar a vida em ordem e conter a agitação para estar em paz com tudo e com todos. Continue a evitar disputas de poder, não é hora de forçar situações. Já sabe quais as novas intenções que irá plantar?',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Procure abrir espaço para o novo. Seja mais flexível e menos preconceituosa. 2021 pede para que  promova revisões em suas posturas rígidas, ouça sua intuição, repense  filosofias, crenças e conceitos rígidos com mais discernimento',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Atividades ligadas à cura e restauração são  favorecidas. Com a Lua minguante em Touro, é bom desacelerar para saborear as coisas boas da vida. Dia ideal para cuidar do bem estar e do equilíbrio emocional.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Com a Lua minguante em Touro, reserve momentos para relaxamento e harmonização. Dia positivo  para finalizar e solucionar questões. Aproveite para promover limpezas e movimentar energias estagnadas.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Você pode deixar para trás o que já está ultrapassado, em nome de um futuro melhor. Com a intuição afiada, fica mais fácil perceber as mudanças que deve promover em sua vida.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Aproveite a Lua Minguante para  concluir assuntos, refletir sobre as vitórias, erros e acertos das últimas semanas. Os processos de cura e regeneração ficam favorecidos. Evite iniciar algum projeto hoje. O start você dará amanhã!',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Siga no ritmo da Lua minguante em Touro, que é o de finalizar pendências, desacelerar e descansar.  Aproveite para meditar, conectar-se com a intuição e as energias mais elevadas.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Período de finalizações importantes, algo novo está em pleno processo de gestação. Situações do passado pouco a pouco ficam para trás. Aproveite para colocar um ponto final no que for possível, mas sem ansiedade.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'A decisão final de muitos assuntos será sua, mas procure ouvir a opinião dos outros. Dê atenção e carinho às pessoas que ama, lembre-se que o bem comum vem antes do bem pessoal. Jogue fora toda tralha que continua guardando.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-01',
      horoscopes: [
        {
          title: '.',
          description:
            'Um ótimo dia para rever idéias, conceitos, opiniões. Conversar com pessoas próximas pode ajudar nesse sentido. Abra mão do que não quer mais. É bom senso reduzir  o sal na alimentação e fazer drenagem linfática.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'É importante ter certeza de quem são seus amigos. Faça um bom balanço em suas amizades. Quem é amigo para o que? Em quem você pode mesmo confiar? No seu trabalho, fique atenta aos pormenores.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'O  dia  pede  serenidade para enfrentar problemas de maneira equilibrada. Reflita bem sobre seus sentimentos e faça com que as adversidades sejam motivo de renovação. . Reserve um tempo para descansar e se divertir com os amigos!',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Dia cheio de empolgação e mudanças. Você pode ter ótimas ideias e vontades para seu futuro. Momento de ganhos e reconhecimento, pessoal e profissional. Comece a planejar uma viagem importante com o amado.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Atenção especial com seus gastos. E muito cuidado com as palavras. Pense antes de falar para não ser mal interpretado ou falar alguma coisa fora de hora. Melhor guardar seus planos. Que tal sair da rotina e relaxar um pouco?',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Sua vida amorosa tende a ser beneficiada por uma atmosfera de harmonia, então relaxe ao lado de quem você ama. Esses momentos fortalecerão os vínculos afetivos. O bom entendimento nas relações profissionais  é garantido agora.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Abra as portas para que novas ideias possam  entrar. Mas, para que tudo dê certo, tenha certeza do que quer, do que valoriza, do que deseja neste momento de sua vida. Busque renovação e o processo de eliminação está favorecido agora.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Eis o momento para divulgar informações e produtos, aprender algo novo e exercitar a mente. Boas informações colhidas agora serão valiosas e farão toda a diferença. Explore o universo de sua sexualidade e aprofunde os laços de intimidade.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Caminhos abertos para pactos, acordos, alianças, novos arranjos e associações. Mas lembre-se de pedir garantias. Lembre-se também de cultivar responsabilidade com a palavra para não prometer mais do que pode cumprir.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Dia agitado. Procure manter a calma e não se coloque na defensiva diante de possíveis mudanças. Use sua inteligência emocional. Sentir-se a vontade é a opção do dia, portanto opte por um look despojado pra quebrar a sisudez, capricorniana!',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Jogo de cintura hoje. Sua inteligência emocional lhe ajudará a extrair boas experiências dos momentos. A visão de vida se expande. Que tal ser mais ousada em suas ações e em seu visual? Rompa seus limites e permita-se ir além!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Os ventos sopram a seu favor, principalmente na área da comunicação. O dia te  convida a socializar-se, fazer contatos, enviar currículo, divulgar o trabalho e expressar ideias. Curta momentos agradáveis junto aos amigos e mostre-se aberta.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-02',
      horoscopes: [
        {
          title: '.',
          description:
            'Dia positivo pra resolver perrengues e colocar um ponto final naquelas situações que se arrastam. Cuidado apenas com a falta de paciência e o excesso de irritação que acaba tirando seu controle e fazendo com que “chute o balde”.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Hoje encontros amorosos ficam ardentes. Você esta ávida por satisfação emocional. Cuidado com a possessividade e o ciúmes que  atrapalha a relação.  Hora de  engatar uma rotina de atividade física.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'O  dia promete mais contatos, conversas e abertura mental. No amor, uma demonstração de confiança, aumenta as chances de crescimento e se tornar algo bem sólido. Você precisa olhar mais para sua saúde, ir ao médico.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Deixar pra fazer as coisas na última hora, vai dar errado! E a teimosia ou imposição de sua vontade sobre o outro, acarreta situações desagradáveis. Cuidado com os extremos. Pare e respire fundo antes de engatar uma discussão.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Seu desejo de poder ou de controlar filhos e parceiros,  aumenta e fica sem controle. Acredite, pra conseguir êxito em negociações com parentes, é fundamental ser menos emocional e mais racional.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cultive uma atitude de desapego e pensamentos mais leves. Deixe pra trás raiva, ressentimento e pare de remoer o passado. Aprenda a filtrar melhor os interesses e abandone aqueles que não vêm dando sinais de eficiência.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Cuidado com o excesso de dúvidas entre escolher a  melhor forma de lidar com situações chatas no trabalho. Pense menos e aja mais. O dia traz mais  criatividade e  ideias inovadoras pra incrementar sua área financeira.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'É bom priorizar  assuntos e cuidar de uma coisa de cada vez. Evite falsas promessas, enganos. Sua comunicação ou a forma como tem lidado  com problemas no trabalho, estão perigosos. Relaxe e desacelere!',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Hora de cuidar de sua base emocional,  equilíbrio, para que possa enfrentar o mundo lá fora mais estabilizado. Dê mais atenção às questões do lar, da família, dos relacionamentos mais íntimos. São eles que te fortalece!',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Ótimo dia pra reverter mal-entendidos ou ressuscitar relações que andavam meio mortas. É  hora de tratar dos assuntos domésticos, valorizar as raízes  e estar mais próximo de gente que te ama.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Fase boa pra ouvir mais sua intuição, entender seus sonhos, que andam se repetindo. Eles podem estar dando sinais, que você anda ignorando. É como se seu inconsciente estivesse num momento de vir à tona e trazer junto soluções.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Abundância e prosperidade pra você. Aproveite o dia pra fechar negócios e pleitear promoção ou melhoria salarial. Nos relacionamentos amorosos, atitudes carinhosas , fazem uma imensa diferença.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-03',
      horoscopes: [
        {
          title: '.',
          description:
            'O momento favorece o contato com grupos e amigos, com equipes no trabalho. Dia importante no trabalho, com desafios e novidades, com oportunidades que surgem e que você não pode deixar passar.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'A parte da manhã é mais  positiva para o prazer e o amor. Depois o foco  estará no trabalho e nos assuntos de família,. É um bom momento para planejar viagens e estudos. Fase afetiva e sexual, super intensa. Solte-se e seja mais feliz.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Aproveite o começo doa  para mudar hábitos e repensar sua rotina.  Perceba que não dá pra fazer tudo que quer e precisa esse ano e que vem coisas grandes pela frente. Concentre sua energia no que mais te interessa.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Coloque  foco  em sua relação. E também no que quer que aconteça, sendo mais verdadeira e profunda com quem se relaciona. Divirta-se com quem você mais gosta. Eventos ou compromissos sociais, surgem inesperadamente. Aceite!',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Que tal cuidar das coisas da casa e da família. Mas os assuntos de trabalho e também da vida afetiva, são pauta do dia. Momento positivo para mudar a rotina, de trabalho ou começar alguma coisa nova.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Hoje o dia é incrível para organizar a rotina direitinho. Bom para começar alguma coisa nova, para estudar, se divulgar, fazer contatos e planejar a próxima viagem. Mas é importante ter disciplina e organização sem perder a leveza.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Aproveite a manhã  para resolver assuntos domésticos e familiares. Seu amor também precisa de mais atenção e o dia  é super favorável para eventos sociais ou  encontros (de preferência, virtualmente).',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Um pouco de vaidade só fará bem. Hora de   mudar o visual, comprar umas roupas novas, investir em você. Bom momento para se divulgar e se comunicar. Conversas são produtivas. A família pede atenção e a casa mais dedicação.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Mudanças à vista. Use a experiência do passado para tomar decisões inteligentes. Dia de encontros positivos com amigos, produtividade e ótimo para organizar sua vida financeira.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Dia positivo para para sua vida pessoal, para cuidar mais de você, para se movimentar, viajar, estudar, conversar, trabalhar e namorar. Dividir responsabilidades deixa a vida bem mais leve. Você sabe o que mais quer para agosto?',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Foco nos seus projetos profissionais. Dia de crescimento e oportunidades  no trabalho. É um ótimo momento se envolver com grupos (ONG, grêmio, clube, sindicato),  e fazer parcerias.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Dia positivo, mas com muita ansiedade, porque hoje promete algumas mudanças. É um bom momento para focar nos projetos mais importantes e pra produzir tudo que for intelectual.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-04',
      horoscopes: [
        {
          title: '.',
          description:
            'Assuntos do coração   e familiares ficam em evidência, sendo um bom momento para estar com as pessoas mais queridas, ter conversas importantes e cuidar dos assuntos domésticos. Mudanças importantes pela frente.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Muitas vezes  seu sentimento de urgência é ilusório, passando o tempo a correr, apressada, sem real necessidade. Na verdade, fugindo do aqui-agora. Respire fundo, foque em  sua respiração, relaxe,  medite, ouça musicas instrumental, ore...',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'É tempo de olhar pra frente, de estabelecer as novas sementes e intenções! Procure expressar sentimentos e ideias com flexibilidade, sem rigidez excessiva. E cuidado com críticas, exigências e imprudências. Evite atitudes apressadas e impulsivas.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Aprenda com as experiências, observe os resultados na prática, perceba o que pode  ser útil.  Fase boa pra concluir estudos e negociações. Sua comunicação fica mais clara, os argumentos são expostos com detalhes.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dia de movimento, iniciativas, dinamismo, energia, mas também de possíveis imprevistos e mudanças súbitas. É necessário  cultivar a consciência para agir com flexibilidade e corrigir o rumo se necessário for.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Fica mais  fácil decidir o que você quer e o que realmente vale a pena . Assuntos financeiros em destaque, sendo importante investir com mais consciência. Ganhos que vem do seu trabalho!',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'A fé está enfatizada, sendo um ótimo dia  para o autoconhecimento e os assuntos espirituais. É um período de mais sorte e proteção, de crescimento interno e paz interior. Mas o movimento maior é interno, não externo.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Ótimo  momento para afinar ideias e objetivos com grupos, pessoas, relacionamentos em geral, tanto pessoais como profissionais. É um ótimo momento para cuidar melhor dos amigos e fazer novas amizades. Invista no social.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'É bom estar com pessoas queridas e ter gratidão pela vida. O dia promete crescimento e reconhecimento. Aproveite essa fase de expansão profissional. Pessoalmente também é um bom momento, apesar dos desafios.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'É bom estar com pessoas queridas e ter gratidão pela vida. O dia promete crescimento e reconhecimento. Aproveite essa fase de expansão profissional. Pessoalmente também é um bom momento, apesar dos desafios.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'As relações profissionais passam por mudanças positivas. Aprenda a controlar a auto exigência excessiva, o medo de perder e de errar. Saúde pede menos carne e mais líquidos e fibras. Hora de queimar aquelas gordurinhas!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Sua relação  promete esquentar, com mais paixão e entusiasmo. Se você trabalha com moda, artigos de beleza ou  no entretenimento, novidades boas. Dia de mais inspiração criativa, diversão, mais prazer em atividades de lazer.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-05',
      horoscopes: [
        {
          title: '.',
          description:
            'Concentre-se nos seus objetivos. Não lhe faltará criatividade nem inspiração para correr atrás dos seus sonhos e transformar as ideias em ações concretas. Há energias de sobra, desde que administre bem o seu tempo.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Confie mais em sua intuição. Ela vai fazê-la se sentir mais segura. No entanto, a provável instabilidade do dia,  lhe ensinará muito. A ordem é se manter centrada para encontrar forças em seu interior.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Deixe suas ideias fluírem sem censura. Aposte no dinamismo e verá quanto a criatividade e a agilidade na execução das tarefas serão otimizadas. Apesar de não gostar de rotina, saiba que o sucesso depende de organização e método.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Assuntos familiares exigem sua atenção, mas, para ajudar os outros, você precisará estar bem. Portanto, fique calma e tente resolver uma coisa de cada  vez. Assim, estará oferecendo o melhor de si mesma e isso confortará seu coração.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Se quiser que os seus projetos vinguem, precisa se concentrar no dia a dia maluco e exigente para dar conta da demanda. Você vai querer que tudo saia como deseja e o seu lado criativo estará presente como nunca. Arregace as mangas!',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Seus projetos darão certo se mantiver a mente aberta para situações que saiam do controle. A sua crítica e perfeccionismo, dificulta novas experimentações. Seja menos exigente e mais leve. Tente- você vai gostar.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'A sua necessidade de intimidade emocional é constante, mas, em alguns momentos, para que possa desfrutá-la, precisará abrir mão de suas certezas e acreditar que a dúvida poderá lhe oferecer possibilidades com as quais nem contava.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'A harmonia que você busca e a estética que a equilibra serão desafiadas por uma nova maneira de olhar para estes temas. Novidades e  surpresas fazem parte do dia. No amor, a vida te convida a experimentar mais e deixar de ser tão ciumenta.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O dia pede planos e troca de experiencia com pessoas e culturas bem diferentes da sua. Esse movimento será fértil e trará um montão de novidades para o seu universo- coisas que você nem imaginou que poderiam interessá-la.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'O dia pede planos e troca de expêriencia com pessoas e culturas bem diferentes da sua. Esse movimento será fértil e trará um montão de novidades para o seu universo- coisas que você nem imaginou que poderiam interessá-la.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Mesmo tendo certeza de várias coisas, todos nós precisamos aprender. Assim, hoje você será desafiada a se questionar e possivelmente a mudar de ideia várias vezes. Trata-se de um processo bastante enriquecedor, acredite!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Apesar de ser disponível e generosa, você precisa estar atenta às suas necessidades. Procure não se colocar em último lugar, pois até aquilo que terá para oferecer será mais curativo se estiver em dia com você mesma.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-06',
      horoscopes: [
        {
          title: '.',
          description:
            'É hora de se valorizar mais e cuidar das coisas mais importantes. Olhe mais para dentro, e comece se  preparando para novos projetos. O que quiser eliminar de sua vida, deve fazer já! Período de novidades profissionais.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Vem por aí muita energia pra colocar no   trabalho, ter mais  garra,  determinação e do foco.  Mas é necessário ter bastante  reflexão e análise, porquê rola muita impulsividade!',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Dia decisivo com relação aos seus projetos, Sente e tente priorizar o que de fato é mais importante. Esteja perto dos melhores amigos, de quem realmente tem ajudado você nos últimos tempos.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Uma maior disposição para lutar te leva  a quebrar seus limite e expandir fronteiras. Ouse e pense no que pode fazer a mais do que está fazendo. Tenha cuidado com uma tendência a querer tudo pra “ontem”.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Sua capacidade de expressão e, sobretudo, seu potencial de liderança perante grupos, estão fortes hoje. Convém controlar a agressividade, que hoje aflora com mais facilidade. Ótimo momento para intensificar os exercícios físicos.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Cuidado com os problemas cotidianos que você pode vir a enfrentar hoje, pois possível deslize de comportamento pode levá-la a discussões pesadas. Procure manter a serenidade e o equilíbrio. Promova uma limpeza do organismo com chás.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Dia propício a superar questões dramáticas que de vez em quando lhe rendem inseguranças. Procure vencer seus medos, condicionando seus pensamentos para o que você deseja de mais positivo.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Ponha a agenda em dia, responda aos e-mails e não negligencie nenhum tipo de contato. Muitas oportunidades tanto pessoais quanto profissionais podem surgir destes contatos.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Utilize-se da inteligência emocional para alcançar seus objetivos. Mas fique atenta a impulsividade, que é seu “calcanhar de Aquiles. Que tal iniciar uma dieta mais saudável e ficar sem comer carne alguns dias?',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Maior empenho de sua parte nas questões financeiras e domésticas tende a lhe render bons frutos. Na vida afetiva, sua libido tende a falar mais alto. Na hora da produção, opte por um look mais sensual, com tons de rosa e lilás.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Você estará mais convicta de suas ideias e mais disposta a defendê-las custe o que custar. É aí que reside o perigo, pois o excesso de certezas pode lhe cegar e lhe render dissabores na relação com as pessoas.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Com prudência, pense melhor antes de tomar qualquer decisão. Evite atitudes inconseqüentes e negócios arriscados, não troque o que já é conhecido, seguro e familiar pelas novidades duvidosamente vantajosas.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-07',
      horoscopes: [
        {
          title: '.',
          description:
            'Dia para batalhar, fazer valer o suor no seu projeto profissional, já que o retorno pode ser incrível. Mas espera suar a camisa, e  não caia no  desânimo. O quanto se esforçar,  mais longe vai.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Fase de boa saúde, disposição e prosperidade – o que irá nutrir sua capacidade profissional. É realmente o momento para manter o foco e não deixar a peteca cair. No amor, período mais romântico.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Aproveite a energia para adoçar as palavras e dar mais atenção a quem ama. Assuntos pendentes podem ser resolvidos com carinho e espírito conciliador. Conte com mais adaptabilidade e versatilidade. Você pode concluir tarefas se tiver foco e atenção com confusões e enganos.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Hora de deixar para trás velhos condicionamentos. Mas  nada impede que demonstre carinho e reconheça o valor das pessoas que ama. Procure ouvir mais e utilizar a palavra sempre com fins construtivos.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Hoje você fica louca para conversar e circular. Mas em tempos de pandemia, uma postura mais introspectiva e comedida é pura sabedoria. Continue evitando atitudes agressivas ou impulsivas. Prudência e flexibilidade são ótimos antídotos.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Aproveite o dia  para fazer bons contatos, mas procure reservar tempo também para reflexões, recolhimento e planejamento. É importante cultivar mais receptividade, deixar a vida fluir. Estabeleça prioridades e vá aos poucos, sem pressa.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'No fim do dia,  um  clima fica mais confuso ou até mesmo tenso, podem te tirar da zona de conforto. Evite DRs,  apressa e a correria. Respeite seus limites. Vale eliminar maus hábitos e emoções tóxicas.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Dê às pessoas que ama o tempo e o espaço que merecem. As finalizações continuam, mas cuidado com a impaciência e não force a barra. Pelo contrário, é tempo de se recolher e relaxar. Aproveite o dia para esclarecer eventuais dúvidas, sempre com clareza e generosidade.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Aproveite o dia para refletir sobre tudo o que aconteceu nas últimas semanas, rever projetos para elaborar as novas iniciativas. Reflexões e interiorização são bem vindas. Procure manter-se adaptável, aberta e receptiva para aceitar sugestões e promover as correções necessárias.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Decisões e iniciativas hoje, só se for para concluir assuntos pendentes. Consulte diversas opiniões, esteja aberta para ouvir e aprender. Procure deixar a vida acontecer, sem ansiedade. É importante evitar conflitos, encontrar espaço na agenda para relaxar e refletir.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Decisões e iniciativas hoje, só se for para concluir assuntos pendentes. Consulte diversas opiniões, esteja aberta para ouvir e aprender. Procure deixar a vida acontecer, sem ansiedade. É importante evitar conflitos, encontrar espaço na agenda para relaxar e refletir.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Não é bom exagerar na velocidade. Dia para descansar mais, refletir e livrar-se das toxinas. Não apenas as que ingere, mas também emoções, relações e pensamentos tóxicos.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-08',
      horoscopes: [
        {
          title: '.',
          description:
            'Se jogue de cabeça em tudo o que possa renovar suas forças e alimentar sua alma. Júpiter segue em Peixes, favorece o amor, a compaixão e a solidariedade. E assim, a  gentileza baterá em sua  porta, trazendo vibrações auspiciosas e boas oportunidades.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Hora de  livrar-se de velhas crenças e velhos padrões obsoletos, que atravancam seu crescimento. Evite disputas, sua forma de se relacionar pede mais atenção. Vale lembrar que não é preciso discutir ou lutar com ninguém.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Hora de  livrar-se de velhas crenças e velhos padrões obsoletos, que atravancam seu crescimento. Evite disputas, sua forma de se relacionar pede mais atenção. Vale lembrar que não é preciso discutir ou lutar com ninguém.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'É importante exercitar a arte da prudência e suas habilidades sociais. Hoje não é um bom  momento para cobranças, nem para agir com pressa e impulsividade. Os acontecimentos mostram até que ponto suas relações são livres e respeitosas.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'O dia pede receptividade e recolhimento, é melhor deixar a vida fluir sem forçar nada. Aproveite para tranquilizar a mente e as emoções. Prefira se recolher e descansar mais, para refletir e renovar suas energias.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'O dia pede receptividade e recolhimento, é melhor deixar a vida fluir sem forçar nada. Aproveite para tranquilizar a mente e as emoções. Prefira se recolher e descansar mais, para refletir e renovar suas energias.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Cultive mais a introspecção e o silêncio. Quando sai do burburinho externo, ouve a voz interior. Desta forma pode refletir calmamente sobre a vida, transmutar negatividades e dissolver impasses.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Um pouco mais de vaidade só faz bem. Hoje é um daqueles dias bons para mudar o visual, comprar umas roupas novas, investir em você. Também para voltar a  estudar, se divulgar e se comunicar. Conversas são produtivas. A família pede mais atenção e a casa mais dedicação.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Tem mudanças  vista e usar a experiência do passado ajudará a tomar ótimas decisões. Dia de encontros positivos com amigos, boa vida intelectual, produtividade e movimentos. Um ótimo período para se planejar e organizar melhor sua vida.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Dia positivo para sua vida pessoal,  cuidar mais de você, se movimentar, estudar, conversar, trabalhar e namorar. Estar com seus amigos pode ser bem positivo e dividir as responsabilidades só deixa as coisas bem mais leves.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'É um dia positivo, mas com muita ansiedade. É um bom momento para pensar nas próximas férias,  focar nos projetos mais importantes e pra produzir tudo que for intelectual. Um período de novidades positivas no trabalho e de muitas perguntas e reflexões internas.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Garra, força e melhora progressiva no seu dia  Cheia de coragem, você encontra  forças pra  resolver obstáculos que apareça em seu caminho. Siga sua sabedoria e intuição que tudo terminará bem.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-09',
      horoscopes: [
        {
          title: '.',
          description:
            'O dia ativa seu lado guerreira e a necessidade de superação . Provavelmente você passou por um período complicado, e agora a  situação foi superada e que todo o tempo e energia empreendida será recompensada pouco a pouco.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Renovação, limpeza e mudanças, é o que promete o dia . É melhor não se sobrecarregar de muitas tarefas agora. Plante  novas sementes e intenções, programe o futuro que deseja concretizar. Ideias e propostas diferentes podem surgir, é hora de sair da mesmice.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Deixe suas ideias fluírem sem censura. Aposte no dinamismo e verá quanto a criatividade e a agilidade na execução das tarefas serão otimizadas. Apesar de não gostar de rotina, saiba que o sucesso depende em grande parte de organização e método.',
          sign: 'Gêmeos',
        },
        {
          title: '.',
          description:
            'Os  assuntos familiares exigirão a sua atenção, mas, para ajudar os outros, você precisará estar bem. Portanto, fique calma e tente resolver uma coisa de cada  vez. Assim, estará oferecendo o melhor de si mesma e isso confortará seu coração.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Se quiser que os seus projetos vinguem, precisará se concentrar no dia a dia maluco e exigente para dar conta da demanda. Você vai querer que tudo saia como deseja e o seu lado criativo estará presente como nunca. Arregace as mangas!',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Os seus projetos poderão dar muito certo se mantiver a mente aberta para situações que saiam do seu método usual de observar e fazer tudo. A sua crítica dificulta novas experimentações. Tente- você pode gostar disso.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'A sua necessidade de intimidade emocional é constante, mas, em alguns momentos, para que possa desfrutá-la, precisará abrir mão de suas certezas e acreditar que a dúvida poderá lhe oferecer possibilidades com as quais nem contava.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'A harmonia que você busca e a estética que a equilibra serão desafiadas por uma nova maneira de olhar para estes temas. Novidades e  surpresas farão parte do dia. No amor, a vida te convida a deixar de ser pegajosa.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'O dia pede planos e troca de experiência com pessoas e culturas bem diferentes da sua. Esse movimento será fértil e trará um montão de novidades para o seu universo- coisas que você nem imaginou que poderiam interessá-la.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Por mais responsável que seja, nem sempre tudo acontece como planejado. Criar alternativas lhe dará flexibilidade para lidar com um dia a dia incerto, mas que poderá lhe apresentar uma nova forma de ser eficiente perante os seus compromissos.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'Mesmo tendo certeza de várias coisas, todos nós precisamos aprender. Assim, neste dia, você será desafiada a se questionar e possivelmente a mudar de ideia várias vezes. Trata-se de um processo bastante enriquecedor, acredite!',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'Apesar de ser disponível e generosa, você precisará estar atenta às suas necessidades. Procure não se colocar em último lugar, pois até aquilo que terá para oferecer será mais curativo se estiver em dia com você mesma.',
          sign: 'Peixes',
        },
      ],
    },
    {
      dt: '2021-08-10',
      horoscopes: [
        {
          title: '.',
          description:
            'Vênus vem dando uma forcinha pra o amor, te deixando mais sedutora, te trazendo mais autoestima e segurança para se aventurar pelas novidade do período. Prepare-se para descobrir novos horizontes, formas de conhecer e de se relacionar com novas  pessoas.',
          sign: 'Áries',
        },
        {
          title: '.',
          description:
            'Confie mais em sua intuição. Ela vai fazê-la se sentir mais segura. No entanto, a provável instabilidade desta semana lhe ensinará muito. A ordem é se manter centrada para encontrar forças em seu interior- dessa forma, o período de incertezas será muito rapidamente superado.',
          sign: 'Touro',
        },
        {
          title: '.',
          description:
            'Concentre-se em objetivos e metas profissionais. Não lhe faltará criatividade nem inspiração para correr atrás dos seus sonhos e transformar as ideias em ações concretas. Você terá energias de sobra, desde que administre bem o seu tempo e estabeleça prioridades.',
          sign: 'Câncer',
        },
        {
          title: '.',
          description:
            'Dia agitado, onde  oportunidades vêm de onde você menos espera e apesar do céu prometer bastante trabalho, também traz  diversão e momentos de prazer e felicidade, especialmente no amor. Boas conversas nos relacionamentos e parcerias.',
          sign: 'Leão',
        },
        {
          title: '.',
          description:
            'Grande entusiasmo e energia neste começo da manhã, fazendo  com que muitos necessitem de sua presença. Apenas seja  seletiva e não se deixar absorver por pessoas negativas ou sugadoras de energia.',
          sign: 'Virgem',
        },
        {
          title: '.',
          description:
            'Boas oportunidades pintam hoje e graças a sua boa capacidade de analisar bem as coisas, saberá usá-las a seu favor. Boa memória e poder de comunicação renderão bons frutos.',
          sign: 'Libra',
        },
        {
          title: '.',
          description:
            'Assuntos de família e questões ligadas ao setor imobiliário são temas de hoje. Pode ser que analise uma mudança de residência ou reforma. Boa comunicação  com os familiares. A noite promete uma situação romântica com divertidas experiências.',
          sign: 'Escorpião',
        },
        {
          title: '.',
          description:
            'Bom momento para começar um projeto que vem elaborando a  tempos. Muita criatividade e sensibilidade no dia.  Cuidado com aquilo que não pode controlar, levando a ficar  muito irritada. Aprenda a ser mais desprendida e a deixar as pessoas livres.',
          sign: 'Sagitário',
        },
        {
          title: '.',
          description:
            'Atenção com o excesso de gastos no lar. As relações familiares passam por  tensão e irritabilidade. Bom momento para dar luz a novas ideias, fechar boas parcerias. Com Vênus em Virgem, você tem mais objetividade para resolver perrengues da relação afetiva.',
          sign: 'Capricórnio',
        },
        {
          title: '.',
          description:
            'No trabalho, seja mais ousada e até mesmo arrisque posições seguras por algo menos sólido, mas que no final se mostra ser mais o que você gosta de fazer.',
          sign: 'Aquário',
        },
        {
          title: '.',
          description:
            'O dia começa com uma renovada de energia e agitação em sua vida social. Haverá muita  troca de boas vibrações com os amigos e novos e estimulantes convites. Aproveite para ampliar seu circulo social e conhecer pessoas que enriqueçam sua vida.',
          sign: 'Peixes',
        },
      ],
    },
  ],
};

export { normalizePixel, mockApi, changeDataToBR };
