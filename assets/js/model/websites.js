let webSites = [
    new website('Relógios','Este projeto apresenta um conjunto de relógios com funcionalidades digitais, analógicas e de cronômetro. Utilizando tecnologias web como HTML, CSS e JavaScript, o projeto oferece uma visão interativa e dinâmica do tempo, permitindo aos usuários visualizarem as horas em formatos diferentes e utilizarem um cronômetro com funções de início, pausa, marcação e reinício.',linguagens[1],[instrutores[7]],escolas[0],'./websites/gustavo-neitzke/relogio/index.html','gustavo-neitzke/relogio/'),
    new website('To Do List','O projeto To Do List é uma aplicação web simples projetada para permitir aos usuários criar e gerenciar uma lista de tarefas. Os usuários podem adicionar novas tarefas, visualizar as tarefas existentes e remover tarefas concluídas da lista. Este projeto foi criado com o objetivo de oferecer uma interface clara e intuitiva para a gestão de tarefas diárias.',linguagens[1],[instrutores[7]],escolas[0],'./websites/gustavo-neitzke/to-do-list/index.html','gustavo-neitzke/to-do-list/'),
    new website('Circulo de Progresso','Este projeto é uma simples demonstração de um círculo de progresso implementado com HTML, CSS e JavaScript. Ideal para visualizar progressos, como o carregamento de uma página ou o progresso de uma tarefa. A interface permite ao usuário inserir um valor numérico que ajusta o progresso do círculo correspondente.',linguagens[1],[instrutores[7]],escolas[0],'./websites/gustavo-neitzke/circulo-progresso/index.html','gustavo-neitzke/circulo-progresso/'),
    new website('Apresenta','Este projeto é um portfólio pessoal que apresenta informações profissionais, habilidades e projetos do desenvolvedor. Destina-se a empregadores potenciais, colegas de profissão e ao público em geral interessado em conhecer o trabalho do desenvolvedor. O site é dividido em três seções principais: "Apresentação", "Links" e "Imagens", cada uma acessível através de sua respectiva página. Além disso, inclui uma seção de "Currículo" detalhada, que pode ser visualizada em diferentes idiomas, enriquecendo a experiência do usuário.',linguagens[1],[instrutores[0]],escolas[1],'./websites/pessoal/apresentacao/index.html','pessoal/apresentacao/'),
    new website('Temperatura','A aplicação permite que o usuário insira o nome de uma cidade e visualize dados climáticos como temperatura, condições do tempo, umidade e velocidade do vento. Os dados são obtidos através da API do OpenWeatherMap.',linguagens[1],[instrutores[0]],escolas[1],'./websites/pessoal/temperatura/index.html','pessoal/temperatura/'),
    new website('Rádio online','Este projeto de rádio online, onde os usuários podem acessar diferentes estações de rádio, visualizar informações sobre a programação, fazer pedidos de músicas e ler notícias relacionadas às estações. O projeto utiliza HTML, CSS e JavaScript para fornecer uma experiência interativa e envolvente aos usuários.',linguagens[1],[instrutores[0]],escolas[1],'./websites/pessoal/radio/index.html','pessoal/radio/'),
    new website('Restaurante Japonês','O objetivo deste projeto é criar uma página web responsiva para um restaurante japones, que inclui um cardápio dinâmico, uma galeria de fotos e uma navegação intuitiva. A página é projetada para oferecer uma experiência de usuário consistente em dispositivos de diferentes tamanhos.',linguagens[1],[instrutores[0]],escolas[1],'./websites/pessoal/restaurante-japones/index.html','pessoal/restaurante-japones/'),
    new website('HTMX','Este projeto é um exemplo de como carregar conteúdo dinamicamente em uma página web utilizando JavaScript e HTML. Ele demonstra o uso de um botão para carregar conteúdo de um arquivo externo e inseri-lo na página sem recarregá-la.',linguagens[1],[instrutores[0]],escolas[1],'./websites/pessoal/htmx/index.html','pessoal/htmx/'),
    new website('Desvendando os Segredos dos Estados Brasileiros!','Já se perguntou qual é a curiosidade mais legal sobre o Amazonas, ou qual a característica mais marcante do Rio Grande do Sul? Com essa aplicação, você pode descobrir tudo isso e muito mais!',linguagens[1],[instrutores[0]],escolas[1],'./websites/pessoal/gemine-estado/index.html','pessoal/gemine-estado/'),
    new website('Coleção de Moedas e Cédulas','Este projeto é um catálogo digital interativo para colecionadores de moedas e cédulas. Ele permite aos usuários visualizar informações detalhadas sobre cada item da coleção, incluindo nome, país de origem, valor facial, série, e imagens da frente e do verso de cada peça. O catálogo também calcula o total de moedas e cédulas na coleção, o valor total em Reais (R$) e o valor convertido de moedas estrangeiras para Reais, usando taxas de conversão simplificadas.',linguagens[1],[instrutores[0]],escolas[1],'./websites/pessoal/colecao/index.html','pessoal/colecao/'),
    new website('Netflix','Este projeto consiste em uma página web inspirada no layout da Netflix, utilizando HTML, CSS e JavaScript. A página apresenta um cabeçalho com navegação, uma seção principal destacando um filme, e um carrossel de miniaturas de filmes. O design é responsivo, ajustando-se a diferentes tamanhos de tela.',linguagens[1],[instrutores[0]],escolas[7],'./websites/dio/netflix/index.html','dio/netflix/'),
    new website('Pinterest','Este projeto é uma simples réplica da interface do Pinterest, focando em demonstrar habilidades de front-end através da construção de um layout responsivo e atraente. O projeto visa replicar a experiência visual do Pinterest, permitindo aos usuários visualizar uma variedade de imagens organizadas em uma grade dinâmica.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/pinterest/index.html','rocketseat/pinterest/'),
    new website('You Tube','Este projeto é uma representação simplificada da página inicial do YouTube, focando em replicar o layout visual e a estrutura básica do site original. O objetivo é praticar habilidades de HTML, CSS e JavaScript, além de trabalhar com ícones externos através da biblioteca Ionicons.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/you-tube/index.html','rocketseat/you-tube/'),
    new website('Player - Modelo 1','O projeto de player de música web personalizado, que combina tecnologias HTML, CSS e JavaScript para criar uma experiência de usuário interativa e visualmente atraente. Utilizando um design responsivo e moderno, o player é capaz de reproduzir músicas, permitindo ao usuário controlar a reprodução, ajustar o volume e navegar entre as faixas disponíveis. Aqui está uma descrição detalhada de seus componentes e funcionalidades',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/player/index.html','rocketseat/player/'),
    new website('Player - Modelo 2','Este projeto consiste em um player de música personalizável e responsivo, desenvolvido com HTML, CSS e JavaScript. O design foca na simplicidade e na eficiência, apresentando controles de reprodução intuitivos, exibição de capas de álbuns e informações sobre a faixa atual, como nome da música e artista. Além disso, o player suporta a troca de faixas com botões de avançar e retroceder, permitindo aos usuários explorar diferentes músicas com facilidade.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/player/index.html','rocketseat/bora-codar/player/'),
    new website('Produto Cartão','Este projeto é uma página web simples que permite aos usuários visualizar um produto (neste caso, um sofá) em duas formas: uma imagem estática e uma animação. O usuário pode alternar entre a imagem estática e a animação clicando em botões dedicados. O design é responsivo e utiliza uma paleta de cores suaves, proporcionando uma experiência de usuário agradável e acessível.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/produto-cartao/index.html','rocketseat/bora-codar/produto-cartao/'),
    new website('Botões e Cursores','Este projeto demonstra a implementação de botões interativos com efeitos visuais e de cursor usando HTML, CSS e JavaScript. Os usuários podem interagir com os botões para ver mudanças em sua aparência e o comportamento do cursor, proporcionando uma experiência de usuário mais rica e interativa.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/botoes-cursores/index.html','rocketseat/bora-codar/botoes-cursores/'),
    new website('Chat','Este projeto consiste em uma interface de chat virtual desenvolvida com HTML, CSS e JavaScript, apresentando funcionalidades básicas para a comunicação entre um atendente e um cliente. O objetivo é simular um chat de atendimento ao cliente com respostas pré-definidas e interatividade limitada.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/chat/index.html','rocketseat/bora-codar/chat/'),
    new website('Calculadora Moderna','Este projeto consiste em uma calculadora web estilizada e funcional que permite aos usuários realizar operações básicas de matemática, como adição, subtração, multiplicação e divisão, além de recursos adicionais como porcentagem e inversão de sinal. Desenvolvida com HTML, CSS e JavaScript, esta calculadora possui um design moderno e é responsiva, adaptando-se a diferentes tamanhos de tela.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/calculadora/index.html','rocketseat/bora-codar/calculadora/'),
    new website('Cartão Embarque','Este repositório contém um projeto HTML/CSS/JavaScript que gera cartões de embarque dinâmicos. O usuário pode gerar um novo cartão de embarque com detalhes aleatórios ao clicar em um botão. É uma excelente ferramenta para desenvolvedores e designers entenderem como integrar HTML, CSS e JavaScript para criar aplicações interativas.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/cartao-embarque/index.html','rocketseat/bora-codar/cartao-embarque/'),
    new website('Encontre seu Bloco','O projeto "Encontre seu bloco de carnaval" é uma página web interativa projetada para ajudar usuários a encontrar blocos de carnaval nas principais cidades brasileiras para o ano de 2023. Utilizando uma interface amigável e responsiva, o usuário pode buscar blocos por nome ou selecionar sua cidade para descobrir as melhores opções disponíveis.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/cartao-embarque/index.html','rocketseat/bora-codar/encontre-bloco/'),
    new website('Dashboard','O Dashboard é uma aplicação web dinâmica focada em exibir métricas de performance como NPS geral, vendas fechadas, meta mensal e vendas por dia da semana. Projetado para ser intuitivo e visualmente agradável, este dashboard utiliza uma série de tecnologias modernas para garantir uma experiência de usuário suave e informativa.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/dashboard/index.html','rocketseat/bora-codar/dashboard/'),
    new website('Conversor de Moedas Interativo','Este aplicativo web de conversor de moedas dinâmico que permite aos usuários converter valores entre diferentes moedas com base nas taxas de câmbio atuais. O projeto é integrado com APIs externas para buscar informações atualizadas sobre moedas e suas respectivas taxas de câmbio.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/bora-codar/conversor-moedas/index.html','rocketseat/bora-codar/conversor-moedas/'),
    new website('NLW UNITED - Gerenciamento Inscrições','NLW UNITE é um projeto desenvolvido para facilitar o gerenciamento de inscrições em eventos, permitindo o registro de participantes e a realização de check-in de maneira simples e eficiente. Utilizando tecnologias web modernas, o projeto oferece uma interface amigável para cadastro de participantes, exibição da lista de inscritos, e uma funcionalidade de check-in com apenas um clique.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/gerenciamento-inscricoes/index.html','rocketseat/gerenciamento-inscricoes/'),
    new website('NLW UNITED - Gerenciar Atividades','Este projeto é uma aplicação web desenvolvida para gerenciar atividades, permitindo ao usuário adicionar, listar e marcar atividades como concluídas.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/gerenciar-atividades/index.html','rocketseat/gerenciar-atividades/'),
    new website('Restaurante Japonês','Projeto de página web estática para um restaurante japonês. A página é construída utilizando HTML para a estrutura e CSS para estilização e animações.',linguagens[1],[instrutores[10]],escolas[12],'./websites/rocketseat/restaurante-japones/index.html','rocketseat/restaurante-japones/'),
    new website('GTA','ste projeto é uma página web dedicada ao universo do Grand Theft Auto (GTA), apresentando informações sobre o jogo GTA V e GTA Online, disponíveis para PlayStation 5 e Xbox Series X/S. O site oferece uma visão geral dos jogos, opções de compra para diferentes plataformas e suporte ao cliente.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/gta/index.html','dev-dobro/gta/'),
    new website('One Pierce','Este projeto é uma galeria interativa dedicada aos personagens do popular anime "One Piece". Ele permite aos usuários visualizar informações detalhadas sobre alguns dos personagens mais icônicos da série, trocando entre eles por meio de botões dedicados. Desenvolvido com HTML, CSS e JavaScript, este projeto oferece uma experiência envolvente através de uma interface limpa e responsiva.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/one-pierce/index.html','dev-dobro/one-pierce/'),
    new website('Pokemon','Este projeto é uma Pokedex interativa feita com HTML, CSS e JavaScript. Ela exibe uma lista de Pokémons com suas respectivas imagens, tipos e uma breve descrição. A interface permite a mudança de tema (claro/escuro) para uma melhor experiência do usuário.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/pokemon/index.html','dev-dobro/pokemon/'),
    new website('Portfolio','O projeto contém o código fonte de um portfólio pessoal desenvolvido utilizando tecnologias web padrão (HTML, CSS e JavaScript). O objetivo do portfólio é apresentar Clovis Balreira Rodrigues, um desenvolvedor frontend em formação, juntamente com seus projetos, habilidades e contatos profissionais.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/portfolio/index.html','dev-dobro/portfolio/'),
    new website('Super Mario','Este projeto de código aberto é um site dedicado ao filme "Super Mario Bros". Utiliza tecnologias web modernas para oferecer uma experiência envolvente aos usuários, incluindo um vídeo de fundo automático, galeria de imagens, informações sobre o filme e um trailer interativo.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/super-mario/index.html','dev-dobro/super-mario/'),
    new website('The Last Us','Este projeto é uma apresentação web dedicada à série "The Last of Us", produzida pela HBO, baseada na aclamada franquia de jogos de videogame com o mesmo nome, criada por Neil Druckmann. A página proporciona uma experiência visual através de um carrossel de imagens representativas da série, acompanhadas de uma breve descrição e links para redes sociais.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/the-last-us/index.html','dev-dobro/the-last-us/'),
    new website('X-men','Este projeto é uma aplicação web interativa onde os usuários podem visualizar e selecionar personagens dos X-men para ver detalhes específicos, como nome, descrição e habilidades. A seleção do personagem é feita por meio de um efeito de hover, e as informações do personagem escolhido são exibidas centralmente na tela. O design é responsivo, garantindo uma boa usabilidade em dispositivos móveis e desktops.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/x-men/index.html','dev-dobro/x-men/'),
    new website('X-devs','Este projeto, desenvolvido X-DEVS, é uma página web interativa que apresenta personagens fictícios de desenvolvedores, cada um com suas próprias características e histórias. A interface permite que os usuários naveguem pelos cartões dos personagens utilizando botões de navegação.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/x-devs/index.html','dev-dobro/x-devs/'),
    new website('Casa do Dragão','Este projeto é uma aplicação web simples que apresenta um carrossel de imagens e informações sobre dragões do universo de Game of Thrones. Ao clicar nos botões do carrossel, a imagem e as informações sobre cada dragão são atualizadas dinamicamente.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/casa-dragao/index.html','dev-dobro/casa-dragao/'),
    new website('Um time de desenvolvedores inspirados em Pokémon!','Este projeto web interativo traz à vida um time de desenvolvedores, cada um com habilidades e personalidades únicas, inspirados nos queridos Pokémon. Explore os cards de cada desenvolvedor, descubra suas características e habilidades, e veja como a paixão pela programação os une.',linguagens[1],[instrutores[16]],escolas[6],'./websites/dev-dobro/pokedevs/index.html','dev-dobro/pokedevs/'),
    new website('Replica página do Google','Este projeto é uma simplificação do front-end de uma página de pesquisa similar ao Google. Ele inclui links para serviços como Gmail e Imagens, um campo de pesquisa com sugestões interativas e ícones de funcionalidades adicionais como teclado, microfone e câmera.',linguagens[0],[''],escolas[9],'./websites/hashtag/google/index.html','hashtag/google/'),
    new website('Pet Life','O projeto Pet Live é um site desenvolvido com o objetivo de oferecer informações sobre serviços veterinários e produtos para pets.',linguagens[1],[instrutores[17]],escolas[11],'./websites/one-bit-code/petlive/index.html','one-bit-code/petlive/'),
    new website('Portfólio da Imersão Dev Alura','Este repositório contém o código fonte do meu portfólio pessoal, criado durante a Imersão Dev da Alura. A ideia principal é apresentar meus projetos e desafios realizados durante a imersão de forma organizada e visualmente atrativa.',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/portfolio/index.html','alura/portfolio'),
    new website('Central de Atletas','Já imaginou ter todas as informações sobre seus atletas olímpicos favoritos em um só lugar? Com essa aplicação, você pode pesquisar por nome, modalidade ou qualquer outra palavra-chave e encontrar tudo sobre eles!.',linguagens[1],[instrutores[5], instrutores[14]],escolas[2],'./websites/alura/gemine/index.html','alura/gemine/'),
    new website('Calculadora de Média','Já se estressou na hora de calcular a sua média? Com essa calculadora, você pode descobrir sua média em poucos cliques!',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/calculadora-media/index.html','alura/calculadora-media/'),
    new website('Aluraflix v.1','Já pensou em ter sua própria plataforma de streaming? Com o Aluraflix, você pode criar sua lista de filmes favoritos e acessá-la sempre que quiser!',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/alura-flix-v1/index.html','alura/alura-flix-v1/'),
    new website('Aluraflix v.2','Esse é um cantinho para você registrar seus filmes favoritos e compartilhar esse amor pela sétima arte com o mundo (ou pelo menos com quem acessar essa aplicação ).',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/alura-flix-v2/index.html','alura/alura-flix-v2/'),
    new website('Conversor de Moedas v.1','Já precisou converter uma quantia em reais para dólares ou euros rapidinho? Com esse conversor, você pode fazer isso de forma simples e rápida! A aplicação busca as cotações mais atualizadas do Banco Central e te mostra o valor convertido na hora.',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/conversor-moeda-v1/index.html','alura/conversor-moeda-v1/index.html'),
    new website('Conversor de Moedas v.2','Já se cansou de ficar procurando a cotação do dólar e do euro? Com essa aplicação, você pode converter suas moedas em tempo real e ainda dar uma viajada no espaço!',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/conversor-moeda-v2/index.html','alura/conversor-moeda-v2/'),
    new website('Mentalista v.1','Já pensou em desafiar sua mente e testar sua intuição? Com essa aplicação, você pode colocar suas habilidades à prova tentando adivinhar um número secreto entre 0 e 10. É como ter um mentalista particular te desafiando a cada tentativa!',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/mentalista-v1/index.html','alura/mentalista-v1/'),
    new website('Mentalista v.2','Prepare-se para colocar suas habilidades de adivinhação à prova!  Com essa aplicação, você pode desafiar a sorte e tentar acertar um número secreto entre 1 e 1000.',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/mentalista-v2/index.html','alura/mentalista-v2'),
    new website('Clone spotify','Este projeto é a sua interface para curtir aquele som massa, seja para relaxar, treinar ou dar aquela animada!',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/spotify/index.html','alura/spotify/'),
    new website('Super Trunfo Alura: A Batalha dos Heróis!','Prepare-se para uma aventura épica no universo dos super-heróis! Com essa aplicação, você pode criar seu próprio baralho de Super Trunfo personalizado, escolher seus atributos favoritos e desafiar seus amigos em batalhas épicas.',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/super-trunfo/index.html','alura/super-trunfo/'),
    new website('Tabela v.1','Cansado de planilhas complexas para gerenciar seu campeonato? Com essa aplicação, você pode criar sua própria tabela de classificação de forma fácil e intuitiva!',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/tabela-v1/index.html','alura/tabela-v1/'),
    new website('Tabela v.2','Crie sua própria tabela de classificação para qualquer campeonato, seja ele de futebol, basquete ou até mesmo um torneio de videogame! Com essa aplicação, você pode adicionar jogadores, registrar vitórias, empates e derrotas, e ver a classificação atualizada em tempo real.',linguagens[1],[instrutores[5], instrutores[13], instrutores[14]],escolas[2],'./websites/alura/tabela-v2/index.html','alura/tabela-v2/'),
    new website('Quiz Interativo de Programação','Um quiz desafiador e divertido para testar seus conhecimentos em programação web. Explore conceitos fundamentais de HTML, CSS e JavaScript através de perguntas variadas, como múltipla escolha, texto, data e upload de arquivos.',linguagens[1],[instrutores[14]],escolas[0],'./websites/rafaella-balerini/quiz/index.html','rafaella-balerini/quiz/'),
    new website('Landing page','Landing page para o Balle Bot, um bot para Discord que automatiza tarefas de moderação e segurança em comunidades. Desenvolvida com HTML, CSS e JavaScript, a página apresenta de forma clara e concisa as funcionalidades do bot e convida o usuário a adicioná-lo à sua comunidade.',linguagens[0],[instrutores[14]],escolas[0],'./websites/rafaella-balerini/landing-page/index.html','rafaella-balerini/landing-page/'),
]
