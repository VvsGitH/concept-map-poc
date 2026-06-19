import type { ConceptMapData } from '../../concept-map';

export const testDs1: ConceptMapData = {
  rootId: 'root',
  nodes: [
    {
      id: 'root',
      title: 'Presidenza di Sergio Mattarella',
      type: 'topic',
      parentId: null,
      childrenIds: ['node-2', 'node-3', 'node-4', 'node-6', 'node-7', 'node-8', 'node-9'],
      imageUrl: null,
      description:
        "La presidenza di Sergio Mattarella si è distinta per un esercizio rigoroso delle prerogative costituzionali, agendo come garante dell'unità nazionale e dell'equilibrio tra i poteri. Il Capo dello Stato ha affrontato crisi politiche, sanitarie e industriali complesse, mantenendo un profilo di arbitro imparziale. La sua azione si è focalizzata sulla difesa dei valori democratici, la tutela dell'indipendenza della magistratura e la promozione di una memoria storica condivisa. Attraverso atti formali, cerimonie solenni e una costante moral suasion, ha rafforzato il legame tra le istituzioni e i cittadini. Il suo mandato riflette un equilibrio tra fermezza decisionale, sensibilità umanitaria e rispetto rigoroso del dettato costituzionale.",
      sources: null
    },
    {
      id: 'node-2',
      title: 'Esercizio delle Prerogative Costituzionali',
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-5'],
      imageUrl: null,
      description:
        "Il Presidente esercita le sue funzioni attraverso atti formali che attestano la regolarità procedurale e l'assenza di profili di incostituzionalità. Tale ruolo include la firma di decreti legge, la nomina di figure apicali e l'esercizio del potere di grazia. Mattarella ha chiarito che la promulgazione non costituisce un'approvazione politica, ma un atto dovuto di garanzia. La vigilanza sull'equilibrio dei poteri assicura che ogni istituzione operi entro i limiti della legge fondamentale. Questo pilastro garantisce la stabilità democratica e la continuità delle funzioni statali.",
      sources: null
    },
    {
      id: 'node-3',
      title: "Gestione delle Crisi e dell'Emergenza",
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-10', 'node-11', 'node-13'],
      imageUrl: null,
      description:
        "Durante il mandato, il Presidente ha affrontato sfide straordinarie, dalla pandemia di COVID-19 alle crisi industriali come il caso Ilva. Ha ratificato misure urgenti, come il decreto 'Cura Italia' del marzo 2020, per proteggere il sistema sanitario, economico e sociale. Tali interventi hanno incluso ammortizzatori sociali, sospensioni fiscali e la nomina di commissari straordinari. La gestione ha sempre mirato a garantire la tenuta del Paese, bilanciando le necessità di sicurezza pubblica con la continuità delle funzioni parlamentari e governative.",
      sources: null
    },
    {
      id: 'node-4',
      title: 'Impegno Civile e Memoria Storica',
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-12', 'node-14'],
      imageUrl: null,
      description:
        "La memoria storica rappresenta un pilastro fondamentale, inteso come monito universale contro l'odio e il negazionismo. Dalla visita alle Fosse Ardeatine alla nomina di Liliana Segre a senatrice a vita nel 2018, il Presidente ha posto il ricordo al centro dell'agenda istituzionale. Le cerimonie al Quirinale per il Giorno della Memoria e la celebrazione della Festa della Repubblica servono a connettere l'attualità con le radici democratiche. Questo impegno mira a trasmettere alle nuove generazioni i valori di pace, libertà e giustizia, contrastando ogni forma di revisionismo.",
      sources: null
    },
    {
      id: 'node-5',
      title: 'Potere di Grazia e Umanità',
      type: 'topic',
      parentId: 'node-2',
      childrenIds: [],
      imageUrl: null,
      description:
        "Il potere di grazia è esercitato con estremo rigore, basandosi su finalità umanitarie e pareri degli organi giudiziari. I decreti, come quelli del 2019, hanno riguardato detenuti in condizioni di salute precarie o età avanzata. Il Quirinale ha gestito con trasparenza casi mediatici, come quello di Nicole Minetti, ribadendo la natura non politica della clemenza. L'atto riflette una visione della giustizia che integra il rigore della legge con la pietà umana, mantenendo la riservatezza sui dati sensibili.",
      sources: null
    },
    {
      id: 'node-6',
      title: 'Indipendenza della Magistratura',
      type: 'topic',
      parentId: 'root',
      childrenIds: [],
      imageUrl: null,
      description:
        "Mattarella ha costantemente ribadito l'autonomia della giurisdizione come pilastro della democrazia. Ha esortato il CSM a superare logiche correntizie, promuovendo criteri di merito e trasparenza nelle nomine apicali. Il Presidente difende i magistrati da condizionamenti politici, sottolineando che nessuno è al di sopra della legge. Questo impegno si estende alla protezione dei magistrati internazionali e alla valorizzazione di figure simbolo della lotta alla criminalità, come Giovanni Falcone.",
      sources: null
    },
    {
      id: 'node-7',
      title: 'Politica Estera ed Europea',
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-15'],
      imageUrl: null,
      description:
        "Il Presidente promuove una politica estera basata sul multilateralismo, l'Unione Europea e l'Alleanza Atlantica. Ha espresso ferma condanna verso le aggressioni belliche, come il conflitto in Ucraina, difendendo i diritti umani e la legalità internazionale. Mattarella incoraggia l'Italia a presentarsi con una voce sola in Europa, garantendo che le decisioni nazionali rispettino gli impegni internazionali. La sua azione diplomatica mira a mantenere il Paese saldamente ancorato ai valori democratici occidentali.",
      sources: null
    },
    {
      id: 'node-8',
      title: 'Conferimento di Onorificenze',
      type: 'topic',
      parentId: 'root',
      childrenIds: [],
      imageUrl: null,
      description:
        "Il Presidente valorizza il merito individuale e collettivo conferendo onorificenze a cittadini distintisi per eroismo, impegno civile o eccellenza professionale. Le nomine dei Cavalieri del Lavoro celebrano l'innovazione e la competitività del sistema produttivo italiano. Riconoscimenti sono stati assegnati anche a figure impegnate nella lotta alla criminalità, come Giuseppe Antoci. Queste cerimonie solenni al Quirinale sottolineano il legame tra le istituzioni e chi contribuisce al progresso del Paese.",
      sources: null
    },
    {
      id: 'node-9',
      title: 'Tutela della Libertà di Stampa',
      type: 'topic',
      parentId: 'root',
      childrenIds: [],
      imageUrl: null,
      description:
        "La libertà di stampa è definita come un pilastro fondamentale della democrazia, tutelato dalla Costituzione. Mattarella ha richiamato i giornalisti a un'assunzione di responsabilità, basata sulla lealtà e sul rigoroso rispetto dei fatti. In un'epoca di disinformazione, ha ribadito che la libertà di espressione non può tradursi in 'libertà di menzogna'. Questo monito mira a mantenere la fiducia tra le istituzioni e i cittadini, essenziale per un dibattito pubblico sano.",
      sources: null
    },
    {
      id: 'node-10',
      title: 'Decreto Salva Ilva',
      type: 'topic',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        "Firmato nel marzo 2015, il decreto ha affrontato la crisi industriale di Taranto, bilanciando la continuità operativa con il risanamento ambientale. L'atto ha sollevato dibattiti sulla salute pubblica e il rispetto delle normative europee. Il Presidente ha agito sotto pressione sociale, garantendo la stabilità economica e il monitoraggio delle istituzioni sovranazionali.",
      sources: null
    },
    {
      id: 'node-11',
      title: 'Decreto Cura Italia',
      type: 'topic',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        'Firmato nel marzo 2020, il provvedimento ha introdotto ammortizzatori sociali, sospensioni fiscali e fondi per il sistema produttivo e scolastico durante la pandemia. Ha regolato la nomina del Commissario straordinario e misure per il sovraffollamento carcerario. Rappresenta la risposta normativa tempestiva alla crisi globale.',
      sources: null
    },
    {
      id: 'node-12',
      title: 'Nomina di Liliana Segre',
      type: 'topic',
      parentId: 'node-4',
      childrenIds: [],
      imageUrl: null,
      description:
        "Nel gennaio 2018, la nomina a senatrice a vita ha onorato una sopravvissuta all'orrore di Auschwitz. L'atto ha trasformato la sua testimonianza in un patrimonio istituzionale, rafforzando il legame tra la Repubblica e la memoria delle persecuzioni razziali.",
      sources: null
    },
    {
      id: 'node-13',
      title: 'Rinvio del Referendum Costituzionale',
      type: 'topic',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        "In risposta all'emergenza pandemica, il Presidente ha avallato il rinvio del referendum sul taglio dei parlamentari. La decisione è stata necessaria per garantire la sicurezza sanitaria, preservando la continuità democratica attraverso la riprogrammazione degli eventi.",
      sources: null
    },
    {
      id: 'node-14',
      title: 'Supporto al Volontariato',
      type: 'topic',
      parentId: 'node-4',
      childrenIds: [],
      imageUrl: null,
      description:
        'Il Capo dello Stato dedica costante attenzione ai fragili e alle associazioni di volontariato. Incontri con cittadini rappresentativi mirano a ravvivare il senso di partecipazione democratica e a contrastare i sentimenti di odio, simboleggiando la vicinanza alle sofferenze dei cittadini.',
      sources: null
    },
    {
      id: 'node-15',
      title: 'Difesa dei Diritti Umani',
      type: 'topic',
      parentId: 'node-7',
      childrenIds: [],
      imageUrl: null,
      description:
        "Il Presidente ha citato operazioni come Mare Sicuro e Atalanta come esempi dell'impegno italiano nel Mediterraneo. La difesa dei diritti umani è presentata come elemento essenziale dell'identità nazionale e della politica estera, incoraggiando il Paese a essere protagonista nelle sedi multilaterali.",
      sources: null
    }
  ],
  edges: [
    {
      id: 'e-root-node-2',
      source: 'root',
      target: 'node-2',
      label: 'esercita'
    },
    {
      id: 'e-root-node-3',
      source: 'root',
      target: 'node-3',
      label: 'gestisce'
    },
    {
      id: 'e-root-node-4',
      source: 'root',
      target: 'node-4',
      label: 'promuove'
    },
    {
      id: 'e-root-node-6',
      source: 'root',
      target: 'node-6',
      label: 'difende'
    },
    {
      id: 'e-root-node-7',
      source: 'root',
      target: 'node-7',
      label: 'indirizza'
    },
    {
      id: 'e-root-node-8',
      source: 'root',
      target: 'node-8',
      label: 'conferisce'
    },
    {
      id: 'e-root-node-9',
      source: 'root',
      target: 'node-9',
      label: 'tutela'
    },
    {
      id: 'e-node-2-node-5',
      source: 'node-2',
      target: 'node-5',
      label: 'include'
    },
    {
      id: 'e-node-3-node-10',
      source: 'node-3',
      target: 'node-10',
      label: 'include'
    },
    {
      id: 'e-node-3-node-11',
      source: 'node-3',
      target: 'node-11',
      label: 'include'
    },
    {
      id: 'e-node-3-node-13',
      source: 'node-3',
      target: 'node-13',
      label: 'include'
    },
    {
      id: 'e-node-4-node-12',
      source: 'node-4',
      target: 'node-12',
      label: 'include'
    },
    {
      id: 'e-node-4-node-14',
      source: 'node-4',
      target: 'node-14',
      label: 'include'
    },
    {
      id: 'e-node-7-node-15',
      source: 'node-7',
      target: 'node-15',
      label: 'include'
    }
  ]
};

export const storiaFinaliChampions: ConceptMapData = {
  rootId: 'root',
  nodes: [
    {
      id: 'root',
      title: 'Storia delle finali di Champions League',
      type: 'topic',
      parentId: null,
      childrenIds: ['node-2', 'node-3', 'node-4', 'node-11', 'node-13'],
      imageUrl: null,
      description:
        "La Champions League rappresenta il vertice del calcio europeo per club, teatro di sfide epiche che definiscono l'albo d'oro continentale. Attraverso decenni di competizioni, il torneo ha visto alternarsi dinastie dominanti, rimonte insperate e gesti tecnici che hanno segnato l'immaginario collettivo. Ogni finale costituisce un evento di portata globale, capace di definire l'eredità sportiva dei club coinvolti e l'evoluzione tattica del calcio moderno. La narrazione storica del trofeo si intreccia con le carriere di leggende del calcio e l'impatto mediatico di atti conclusivi memorabili.",
      sources: [
        {
          title: "E' la dodicesima finale europea",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1967/Pages/Pdf/dpi150_pdf/CORSERA_19670525_L_NAZ_NUL_21_00_A.pdf'
        },
        {
          title:
            'In 22 finali di Coppa dei campioni\nsoltanto quattro i successi italiani',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1978/Pages/Pdf/dpi150_pdf/CORSERA_19780414_L_ROM_NUL_23_00_B.pdf'
        },
        {
          title: 'I sei trionfi del Real Madrid',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1985/Pages/Pdf/dpi150_pdf/CORSERA_19850527_L_NAZ_NUL_11_00_A.pdf'
        },
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        },
        {
          title: 'La Coppa più bella: sessant’anni di Campioni',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/LETTURA_20150531/Nazionale/20150531_LL_NAZI_009_SS_01.pdf'
        },
        {
          title: 'Il giro d’Europa',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/LETTURA_20150531/Nazionale/20150531_LL_NAZI_009_SS_01.pdf'
        },
        {
          title: 'Real undici e lode',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2016/CORSERA_20160529/Ribattuta/20160529_RC_NAZI_036_PS_01.pdf'
        },
        {
          title:
            'Finale Champions League: scontro a centrocampo tra Sadio Mané del Liverpool e Christian Eriksen del Tottenham',
          url: 'https://www.corriere.it/foto-gallery/sport/calcio/coppe/2018-2019/champions/19_giugno_01/champions-league-film-finale-tottenham-liverpool-b4350e00-8498-11e9-b1c4-7ac365a010cf.shtml'
        },
        {
          title: 'Ci ha lasciato l’ultimo dribbling',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260507/Nazionale/20260507_CS_NAZI_042_PS_01.pdf'
        },
        {
          title: 'La legge del Psg Doppia Champions',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260531/Ribattuta/20260531_RC_NAZI_046_PS_02.pdf'
        },
        {
          title:
            'Champions, finali maledette per le italiane: ne abbiamo vinte solo il 40%',
          url: 'https://www.corriere.it/sport/calcio/champions-league/25_giugno_24/champions-finali-italiane-classifica-6ac8cca4-40d8-4cff-bac2-5fa7416fbxlk.shtml'
        },
        {
          title:
            'Spettacolo Champions tra i giganti Psg e Bayern Kvara e Olise, che magie',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260429/Nazionale/20260429_CS_NAZI_044_PS_01.pdf'
        },
        {
          title: 'Inter, ora o mai più Serve una notte speciale',
          url: 'gs://archivio-methode-ongoing/2025/CORSERA_20250531/Nazionale/20250531_CS_NAZI_056_PS_01.pdf'
        },
        {
          title:
            'In 22 finali di Coppa dei campioni\nsoltanto quattro i successi italiani',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1978/Pages/Pdf/dpi150_pdf/CORSERA_19780414_L_NAZ_NUL_23_00_A.pdf'
        },
        {
          title:
            "Champions League: il trofeo e i loghi delle squadre in un banner pubblicitario, con l'ombra di una persona",
          url: 'https://www.corriere.it/sport/calcio/champions-league/26_maggio_30/champions-league-ecco-perche-e-cosi-difficile-vincerla-due-volte-di-seguito-7292cae5-df2a-4f43-9d09-43ba2f4c0xlk.shtml'
        },
        {
          title: 'Kvara per la leggenda Luis Enrique ci crede «Siamo i più motivati»',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260530/Nazionale/20260530_CS_NAZI_058_PS_01.pdf'
        },
        {
          title: "Presentiamo i campioni d'Olanda",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1969/Pages/Pdf/dpi150_pdf/CORSERA_19690526_L_NAZ_NUL_08_00_A.pdf'
        }
      ]
    },
    {
      id: 'node-2',
      title: 'Eredità Storica e Dinastie',
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-5'],
      imageUrl: null,
      description:
        "Il torneo è stato segnato da cicli di dominio incontrastato, come le cinque vittorie consecutive del Real Madrid tra il 1956 e il 1960. Figure iconiche come Alfredo Di Stéfano hanno ridefinito il ruolo dell'attaccante moderno, stabilendo standard di eccellenza che hanno guidato il club madrileno verso il primato storico. Anche il Milan ha vissuto epoche d'oro, consolidando il prestigio del calcio italiano con vittorie tattiche magistrali. L'albo d'oro riflette la crescita e il declino delle potenze calcistiche, documentando l'alternanza di cicli vincenti che hanno trasformato il torneo in un fenomeno culturale globale.",
      sources: [
        {
          title: "E' la dodicesima finale europea",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1967/Pages/Pdf/dpi150_pdf/CORSERA_19670525_L_NAZ_NUL_21_00_A.pdf'
        },
        {
          title: 'I sei trionfi del Real Madrid',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1985/Pages/Pdf/dpi150_pdf/CORSERA_19850527_L_NAZ_NUL_11_00_A.pdf'
        },
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        },
        {
          title:
            'In 22 finali di Coppa dei campioni\nsoltanto quattro i successi italiani',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1978/Pages/Pdf/dpi150_pdf/CORSERA_19780414_L_ROM_NUL_23_00_B.pdf'
        },
        {
          title: 'La Coppa più bella: sessant’anni di Campioni',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/LETTURA_20150531/Nazionale/20150531_LL_NAZI_009_SS_01.pdf'
        },
        {
          title: 'Real undici e lode',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2016/CORSERA_20160529/Ribattuta/20160529_RC_NAZI_036_PS_01.pdf'
        },
        {
          title: 'Ci ha lasciato l’ultimo dribbling',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260507/Nazionale/20260507_CS_NAZI_042_PS_01.pdf'
        },
        {
          title: 'La legge del Psg Doppia Champions',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260531/Ribattuta/20260531_RC_NAZI_046_PS_02.pdf'
        },
        {
          title:
            "Champions League: il trofeo e i loghi delle squadre in un banner pubblicitario, con l'ombra di una persona",
          url: 'https://www.corriere.it/sport/calcio/champions-league/26_maggio_30/champions-league-ecco-perche-e-cosi-difficile-vincerla-due-volte-di-seguito-7292cae5-df2a-4f43-9d09-43ba2f4c0xlk.shtml'
        },
        {
          title: "Presentiamo i campioni d'Olanda",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1969/Pages/Pdf/dpi150_pdf/CORSERA_19690526_L_NAZ_NUL_08_00_A.pdf'
        }
      ]
    },
    {
      id: 'node-3',
      title: 'Finali Iconiche e Drammi Sportivi',
      type: 'event',
      parentId: 'root',
      childrenIds: ['node-7', 'node-12', 'node-14', 'node-15'],
      imageUrl: null,
      description:
        'Le finali di Champions League sono spesso decise da episodi di straordinaria abilità individuale o parate decisive, trasformandosi in eventi di portata storica. La finale di Istanbul 2005 tra Liverpool e Milan rimane il paradigma delle rimonte, con Jerzy Dudek protagonista di interventi miracolosi. Analogamente, la finale del 2019 a Madrid ha visto il Liverpool trionfare contro il Tottenham, mentre la finale di Budapest 2026 ha segnato il trionfo del PSG ai rigori. Questi momenti cristallizzano la tensione agonistica e la capacità di ribaltare ogni pronostico in pochi secondi.',
      sources: [
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        },
        {
          title:
            'Finale Champions League: scontro a centrocampo tra Sadio Mané del Liverpool e Christian Eriksen del Tottenham',
          url: 'https://www.corriere.it/foto-gallery/sport/calcio/coppe/2018-2019/champions/19_giugno_01/champions-league-film-finale-tottenham-liverpool-b4350e00-8498-11e9-b1c4-7ac365a010cf.shtml'
        },
        {
          title:
            'Finale di Champions League Psg-Arsenal a Budapest in diretta 5-4: trionfo dei francesi ai rigori, per Luis Enrique bis storico',
          url: 'https://www.corriere.it/sport/calcio/champions-league/diretta-live/26_maggio_30/psg-arsenal-finale-diretta-risultato.shtml'
        }
      ]
    },
    {
      id: 'node-4',
      title: 'Evoluzione Tattica e Protagonisti',
      type: 'topic',
      parentId: 'root',
      childrenIds: [],
      imageUrl: null,
      description:
        "L'evoluzione tattica della Champions League è guidata da allenatori visionari come Luis Enrique, Jürgen Klopp e Mikel Arteta, che ridefiniscono costantemente gli equilibri in campo. La competizione funge da laboratorio tattico globale, dove la preparazione maniacale degli avversari e l'uso di calci piazzati possono determinare l'esito del trofeo. Giocatori come Mohamed Salah, Zinédine Zidane e Khvicha Kvaratskhelia hanno elevato il livello estetico e tecnico del gioco, diventando simboli di successo. La capacità di adattamento dei tecnici e la gestione dei campioni rappresentano i pilastri su cui si fonda il successo delle squadre contemporanee.",
      sources: [
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        },
        {
          title: 'Real undici e lode',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2016/CORSERA_20160529/Ribattuta/20160529_RC_NAZI_036_PS_01.pdf'
        },
        {
          title:
            'Finale Champions League: scontro a centrocampo tra Sadio Mané del Liverpool e Christian Eriksen del Tottenham',
          url: 'https://www.corriere.it/foto-gallery/sport/calcio/coppe/2018-2019/champions/19_giugno_01/champions-league-film-finale-tottenham-liverpool-b4350e00-8498-11e9-b1c4-7ac365a010cf.shtml'
        },
        {
          title: 'Champions, la finale show degli opposti',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260529/Nazionale/20260529_CS_NAZI_053_SS_01.pdf'
        },
        {
          title:
            'Spettacolo Champions tra i giganti Psg e Bayern Kvara e Olise, che magie',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260429/Nazionale/20260429_CS_NAZI_044_PS_01.pdf'
        },
        {
          title: 'Inter, ora o mai più Serve una notte speciale',
          url: 'gs://archivio-methode-ongoing/2025/CORSERA_20250531/Nazionale/20250531_CS_NAZI_056_PS_01.pdf'
        },
        {
          title:
            "Champions League: il trofeo e i loghi delle squadre in un banner pubblicitario, con l'ombra di una persona",
          url: 'https://www.corriere.it/sport/calcio/champions-league/26_maggio_30/champions-league-ecco-perche-e-cosi-difficile-vincerla-due-volte-di-seguito-7292cae5-df2a-4f43-9d09-43ba2f4c0xlk.shtml'
        },
        {
          title: 'Kvara per la leggenda Luis Enrique ci crede «Siamo i più motivati»',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260530/Nazionale/20260530_CS_NAZI_058_PS_01.pdf'
        },
        {
          title:
            'Finale di Champions League Psg-Arsenal a Budapest in diretta 5-4: trionfo dei francesi ai rigori, per Luis Enrique bis storico',
          url: 'https://www.corriere.it/sport/calcio/champions-league/diretta-live/26_maggio_30/psg-arsenal-finale-diretta-risultato.shtml'
        }
      ]
    },
    {
      id: 'node-5',
      title: 'Real Madrid',
      type: 'organization',
      parentId: 'node-2',
      childrenIds: ['node-6'],
      imageUrl: null,
      description:
        "Il Real Madrid detiene il primato storico nella competizione, avendo conquistato il trofeo in numerose occasioni fin dalle prime edizioni. Guidato da figure iconiche come Alfredo Di Stéfano e successivamente da Zinédine Zidane, il club ha stabilito un'egemonia incontrastata. La capacità dei blancos di imporsi anche in situazioni di svantaggio tattico ha consolidato il loro status di leggende europee, rendendo il club un punto di riferimento fondamentale per l'analisi storica del torneo.",
      sources: [
        {
          title: "E' la dodicesima finale europea",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1967/Pages/Pdf/dpi150_pdf/CORSERA_19670525_L_NAZ_NUL_21_00_A.pdf'
        },
        {
          title: 'I sei trionfi del Real Madrid',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1985/Pages/Pdf/dpi150_pdf/CORSERA_19850527_L_NAZ_NUL_11_00_A.pdf'
        },
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        },
        {
          title: 'La Coppa più bella: sessant’anni di Campioni',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/LETTURA_20150531/Nazionale/20150531_LL_NAZI_009_SS_01.pdf'
        },
        {
          title: 'Real undici e lode',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2016/CORSERA_20160529/Ribattuta/20160529_RC_NAZI_036_PS_01.pdf'
        }
      ]
    },
    {
      id: 'node-6',
      title: 'Alfredo Di Stéfano',
      type: 'person',
      parentId: 'node-5',
      childrenIds: [],
      imageUrl: null,
      description:
        "Protagonista assoluto del Real Madrid durante il periodo d'oro della Coppa dei Campioni, la sua capacità realizzativa è stata determinante per le vittorie consecutive tra il 1956 e il 1960. Nelle finali disputate, ha dimostrato una superiorità tecnica che ha ridefinito il ruolo dell'attaccante moderno, influenzando l'intera impostazione tattica della squadra madrilena.",
      sources: [
        {
          title: 'I sei trionfi del Real Madrid',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1985/Pages/Pdf/dpi150_pdf/CORSERA_19850527_L_NAZ_NUL_11_00_A.pdf'
        }
      ]
    },
    {
      id: 'node-7',
      title: 'Liverpool Football Club',
      type: 'organization',
      parentId: 'node-3',
      childrenIds: ['node-8'],
      imageUrl: null,
      description:
        'Il Liverpool ha vissuto momenti di gloria indimenticabili, culminati con la vittoria del 2019 a Madrid contro il Tottenham. Sotto la guida di Jürgen Klopp, la squadra ha espresso un gioco dinamico e determinato, consolidando il proprio prestigio internazionale. La vittoria del 2005 a Istanbul rimane un esempio paradigmatico di resilienza sportiva, confermando la reputazione del club nel calcio europeo moderno.',
      sources: [
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        },
        {
          title:
            'Finale Champions League: scontro a centrocampo tra Sadio Mané del Liverpool e Christian Eriksen del Tottenham',
          url: 'https://www.corriere.it/foto-gallery/sport/calcio/coppe/2018-2019/champions/19_giugno_01/champions-league-film-finale-tottenham-liverpool-b4350e00-8498-11e9-b1c4-7ac365a010cf.shtml'
        }
      ]
    },
    {
      id: 'node-8',
      title: 'Mohamed Salah',
      type: 'person',
      parentId: 'node-7',
      childrenIds: [],
      imageUrl: null,
      description:
        "Protagonista assoluto della finale del 2019, ha contribuito in modo decisivo alla vittoria del Liverpool contro il Tottenham. La sua freddezza dal dischetto ha sbloccato il match, indirizzando l'esito della finale verso i Reds. La sua presenza in campo ha rappresentato una minaccia costante per la difesa avversaria, dimostrando le sue doti di finalizzatore e diventando un simbolo del successo del Liverpool in Europa.",
      sources: [
        {
          title:
            'Finale Champions League: scontro a centrocampo tra Sadio Mané del Liverpool e Christian Eriksen del Tottenham',
          url: 'https://www.corriere.it/foto-gallery/sport/calcio/coppe/2018-2019/champions/19_giugno_01/champions-league-film-finale-tottenham-liverpool-b4350e00-8498-11e9-b1c4-7ac365a010cf.shtml'
        }
      ]
    },
    {
      id: 'node-9',
      title: 'Paris Saint-Germain',
      type: 'organization',
      parentId: 'node-12',
      childrenIds: ['node-10'],
      imageUrl: null,
      description:
        "Il Paris Saint-Germain si è affermato come una delle potenze dominanti del calcio europeo contemporaneo. Sotto la guida di Luis Enrique, il club ha sviluppato un'identità offensiva caratterizzata da un gioco di alta intensità. La vittoria del trofeo nel 2025 e la riconferma nel 2026 hanno segnato un punto di svolta, confermando la validità del progetto sportivo parigino e la supremazia continentale raggiunta.",
      sources: [
        {
          title: 'La legge del Psg Doppia Champions',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260531/Ribattuta/20260531_RC_NAZI_046_PS_02.pdf'
        },
        {
          title:
            'Champions, finali maledette per le italiane: ne abbiamo vinte solo il 40%',
          url: 'https://www.corriere.it/sport/calcio/champions-league/25_giugno_24/champions-finali-italiane-classifica-6ac8cca4-40d8-4cff-bac2-5fa7416fbxlk.shtml'
        },
        {
          title: 'Champions, la finale show degli opposti',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260529/Nazionale/20260529_CS_NAZI_053_SS_01.pdf'
        },
        {
          title:
            'Spettacolo Champions tra i giganti Psg e Bayern Kvara e Olise, che magie',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260429/Nazionale/20260429_CS_NAZI_044_PS_01.pdf'
        },
        {
          title: 'Inter, ora o mai più Serve una notte speciale',
          url: 'gs://archivio-methode-ongoing/2025/CORSERA_20250531/Nazionale/20250531_CS_NAZI_056_PS_01.pdf'
        },
        {
          title:
            "Champions League: il trofeo e i loghi delle squadre in un banner pubblicitario, con l'ombra di una persona",
          url: 'https://www.corriere.it/sport/calcio/champions-league/26_maggio_30/champions-league-ecco-perche-e-cosi-difficile-vincerla-due-volte-di-seguito-7292cae5-df2a-4f43-9d09-43ba2f4c0xlk.shtml'
        },
        {
          title: 'Kvara per la leggenda Luis Enrique ci crede «Siamo i più motivati»',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260530/Nazionale/20260530_CS_NAZI_058_PS_01.pdf'
        },
        {
          title: 'Arsenal-Psg, a Budapest si gioca la finale di Champions League',
          url: 'https://video.corriere.it/sport/video-verticali/arsenal-psg-a-budapest-si-gioca-la-finale-di-champions-league/ad711474-28a1-428f-b460-9c9e59ee8xlk'
        },
        {
          title:
            'Finale di Champions League Psg-Arsenal a Budapest in diretta 5-4: trionfo dei francesi ai rigori, per Luis Enrique bis storico',
          url: 'https://www.corriere.it/sport/calcio/champions-league/diretta-live/26_maggio_30/psg-arsenal-finale-diretta-risultato.shtml'
        }
      ]
    },
    {
      id: 'node-10',
      title: 'Luis Enrique',
      type: 'person',
      parentId: 'node-9',
      childrenIds: [],
      imageUrl: null,
      description:
        'Allenatore di fama internazionale, noto per la sua visione tattica innovativa e la capacità di costruire squadre altamente competitive. La sua gestione al Paris Saint-Germain ha trasformato il club in una macchina da gol, capace di imporsi ai massimi livelli europei. Attraverso un approccio basato sul collettivo e sulla valorizzazione dei singoli talenti, ha saputo infondere una mentalità vincente in un gruppo ambizioso.',
      sources: [
        {
          title: 'Champions, la finale show degli opposti',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260529/Nazionale/20260529_CS_NAZI_053_SS_01.pdf'
        },
        {
          title:
            'Spettacolo Champions tra i giganti Psg e Bayern Kvara e Olise, che magie',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260429/Nazionale/20260429_CS_NAZI_044_PS_01.pdf'
        },
        {
          title: 'Inter, ora o mai più Serve una notte speciale',
          url: 'gs://archivio-methode-ongoing/2025/CORSERA_20250531/Nazionale/20250531_CS_NAZI_056_PS_01.pdf'
        },
        {
          title:
            "Champions League: il trofeo e i loghi delle squadre in un banner pubblicitario, con l'ombra di una persona",
          url: 'https://www.corriere.it/sport/calcio/champions-league/26_maggio_30/champions-league-ecco-perche-e-cosi-difficile-vincerla-due-volte-di-seguito-7292cae5-df2a-4f43-9d09-43ba2f4c0xlk.shtml'
        },
        {
          title: 'Kvara per la leggenda Luis Enrique ci crede «Siamo i più motivati»',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260530/Nazionale/20260530_CS_NAZI_058_PS_01.pdf'
        },
        {
          title:
            'Finale di Champions League Psg-Arsenal a Budapest in diretta 5-4: trionfo dei francesi ai rigori, per Luis Enrique bis storico',
          url: 'https://www.corriere.it/sport/calcio/champions-league/diretta-live/26_maggio_30/psg-arsenal-finale-diretta-risultato.shtml'
        }
      ]
    },
    {
      id: 'node-11',
      title: 'Héctor Cúper',
      type: 'person',
      parentId: 'root',
      childrenIds: [],
      imageUrl: null,
      description:
        "Allenatore argentino, celebre per la sua dedizione e per la sfortuna che ha perseguitato le sue squadre nelle finali. Ha guidato club prestigiosi come Valencia e Inter, raggiungendo finali di Champions League nel 2000 e 2001. La sua figura rimane emblematica per la capacità di risollevare squadre in difficoltà pur mancando l'ultimo miglio, simboleggiando la durezza del calcio di vertice.",
      sources: [
        {
          title:
            "Calcio, la stretta di mano tra i capitani in una finale: l'immagine evocativa delle sfide di Cúper",
          url: 'https://www.corriere.it/sport/cards/allenatore-che-perde-finali-tutti-trionfi-sfiorati-cuper/palmares-al-contrario_principale.shtml'
        }
      ]
    },
    {
      id: 'node-12',
      title: 'Finale di Budapest 2026',
      type: 'event',
      parentId: 'node-3',
      childrenIds: ['node-9'],
      imageUrl: null,
      description:
        "La finale di Champions League del 2026, disputata alla Puskas Arena di Budapest, ha rappresentato un evento di grande rilievo tattico e mediatico. Il confronto tra il Paris Saint-Germain e l'Arsenal ha messo in luce la contrapposizione tra due filosofie calcistiche distinte. L'evento ha attirato l'attenzione globale, confermando la centralità di Budapest come hub per il calcio europeo e sancendo il secondo successo consecutivo dei parigini.",
      sources: [
        {
          title: 'Champions, la finale show degli opposti',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260529/Nazionale/20260529_CS_NAZI_053_SS_01.pdf'
        },
        {
          title:
            'Spettacolo Champions tra i giganti Psg e Bayern Kvara e Olise, che magie',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260429/Nazionale/20260429_CS_NAZI_044_PS_01.pdf'
        },
        {
          title: 'Kvara per la leggenda Luis Enrique ci crede «Siamo i più motivati»',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260530/Nazionale/20260530_CS_NAZI_058_PS_01.pdf'
        },
        {
          title: 'Arsenal-Psg, a Budapest si gioca la finale di Champions League',
          url: 'https://video.corriere.it/sport/video-verticali/arsenal-psg-a-budapest-si-gioca-la-finale-di-champions-league/ad711474-28a1-428f-b460-9c9e59ee8xlk'
        },
        {
          title:
            'Finale di Champions League Psg-Arsenal a Budapest in diretta 5-4: trionfo dei francesi ai rigori, per Luis Enrique bis storico',
          url: 'https://www.corriere.it/sport/calcio/champions-league/diretta-live/26_maggio_30/psg-arsenal-finale-diretta-risultato.shtml'
        }
      ]
    },
    {
      id: 'node-13',
      title: 'Tradizione calcistica italiana',
      type: 'topic',
      parentId: 'root',
      childrenIds: [],
      imageUrl: null,
      description:
        "Le squadre italiane hanno contribuito in modo significativo alla storia della Coppa dei Campioni, ottenendo successi memorabili nel corso dei decenni. Milan, Inter e Juventus hanno rappresentato l'Italia in numerose finali, affrontando le potenze europee con alterne fortune. La partecipazione costante delle compagini italiane ha elevato il livello competitivo e tattico dell'intera manifestazione, nonostante le storiche difficoltà nel momento decisivo.",
      sources: [
        {
          title:
            'In 22 finali di Coppa dei campioni\nsoltanto quattro i successi italiani',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1978/Pages/Pdf/dpi150_pdf/CORSERA_19780414_L_ROM_NUL_23_00_B.pdf'
        },
        {
          title: 'I sei trionfi del Real Madrid',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1985/Pages/Pdf/dpi150_pdf/CORSERA_19850527_L_NAZ_NUL_11_00_A.pdf'
        },
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        },
        {
          title: 'La Coppa più bella: sessant’anni di Campioni',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/LETTURA_20150531/Nazionale/20150531_LL_NAZI_009_SS_01.pdf'
        },
        {
          title: 'Nove volte le italiane nella storia delle finali',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1976/Pages/Pdf/dpi150_pdf/CORSERA_19760512_L_NAZ_NUL_18_00_A.pdf'
        },
        {
          title: 'Real undici e lode',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2016/CORSERA_20160529/Ribattuta/20160529_RC_NAZI_036_PS_01.pdf'
        },
        {
          title:
            'Champions, finali maledette per le italiane: ne abbiamo vinte solo il 40%',
          url: 'https://www.corriere.it/sport/calcio/champions-league/25_giugno_24/champions-finali-italiane-classifica-6ac8cca4-40d8-4cff-bac2-5fa7416fbxlk.shtml'
        },
        {
          title: 'Inter, fine della storia',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2012/CORSERA_20120314/Ribattuta/14032012.CorriereFC.04814RC048NZPSNAZFANH.1.A.P.pdf'
        },
        {
          title: 'Inter, ora o mai più Serve una notte speciale',
          url: 'gs://archivio-methode-ongoing/2025/CORSERA_20250531/Nazionale/20250531_CS_NAZI_056_PS_01.pdf'
        },
        {
          title:
            'In 22 finali di Coppa dei campioni\nsoltanto quattro i successi italiani',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/CS_1978/Pages/Pdf/dpi150_pdf/CORSERA_19780414_L_NAZ_NUL_23_00_A.pdf'
        }
      ]
    },
    {
      id: 'node-14',
      title: 'Finale di Atene 1994',
      type: 'event',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        "La finale del 1994 ad Atene ha visto il Milan imporsi con una prestazione magistrale contro il Barcellona. Dejan Savićević è stato l'autore di giocate decisive, tra cui un dribbling che ha segnato l'andamento della partita. La vittoria rossonera ha confermato la solidità tattica del club italiano in un contesto europeo di altissimo livello, esaltando le qualità tecniche dei singoli giocatori.",
      sources: [
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        }
      ]
    },
    {
      id: 'node-15',
      title: 'Finale di Istanbul 2005',
      type: 'event',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        'La finale del 2005 tra Liverpool e Milan è ricordata come una delle partite più spettacolari nella storia della competizione. Sotto la guida di Rafael Benítez e con la leadership in campo di Steven Gerrard, il Liverpool ha compiuto una rimonta storica dopo essere stato in svantaggio. La parata decisiva di Jerzy Dudek su Andriy Shevchenko rimane un esempio paradigmatico di come il calcio possa offrire ribaltamenti di risultato inaspettati.',
      sources: [
        {
          title:
            "Ajax, il team stellare del 1995: la formazione che incantò l'Europa e vinse la Champions League",
          url: 'https://www.corriere.it/sport/calcio/coppe/2016-2017/champions/cards/da-savicevic-saul-ecco-25-momenti-top-storia-champions-league/splendido-pallonetto-savicevic-1994_principale.shtml'
        }
      ]
    }
  ],
  edges: [
    {
      id: 'e-root-node-2',
      source: 'root',
      target: 'node-2',
      label: 'caratterizzata da'
    },
    {
      id: 'e-root-node-3',
      source: 'root',
      target: 'node-3',
      label: 'teatro di'
    },
    {
      id: 'e-root-node-4',
      source: 'root',
      target: 'node-4',
      label: 'guidata da'
    },
    {
      id: 'e-root-node-13',
      source: 'root',
      target: 'node-13',
      label: 'arricchita da'
    },
    {
      id: 'e-node-2-node-5',
      source: 'node-2',
      target: 'node-5',
      label: 'dominata da'
    },
    {
      id: 'e-node-5-node-6',
      source: 'node-5',
      target: 'node-6',
      label: 'guidata da'
    },
    {
      id: 'e-node-3-node-7',
      source: 'node-3',
      target: 'node-7',
      label: 'vinta da'
    },
    {
      id: 'e-node-7-node-8',
      source: 'node-7',
      target: 'node-8',
      label: 'protagonista'
    },
    {
      id: 'e-node-3-node-12',
      source: 'node-3',
      target: 'node-12',
      label: 'culminata in'
    },
    {
      id: 'e-node-12-node-9',
      source: 'node-12',
      target: 'node-9',
      label: 'vinta da'
    },
    {
      id: 'e-node-9-node-10',
      source: 'node-9',
      target: 'node-10',
      label: 'allenato da'
    },
    {
      id: 'e-root-node-11',
      source: 'root',
      target: 'node-11',
      label: 'segnata da'
    },
    {
      id: 'e-node-3-node-14',
      source: 'node-3',
      target: 'node-14',
      label: 'include'
    },
    {
      id: 'e-node-3-node-15',
      source: 'node-3',
      target: 'node-15',
      label: 'include'
    }
  ]
};

export const usaIran: ConceptMapData = {
  rootId: 'root',
  nodes: [
    {
      id: 'root',
      title: 'Relazioni tra Stati Uniti e Iran',
      type: 'topic',
      parentId: null,
      childrenIds: ['node-2', 'node-3', 'node-4'],
      imageUrl: null,
      description:
        'Il rapporto tra Stati Uniti e Iran è caratterizzato da una storica e complessa inimicizia che dura dal 1979, segnata da una profonda alternanza tra momenti di tensione bellica e tentativi di dialogo diplomatico. La dinamica è influenzata da interessi geopolitici strategici nel Golfo Persico, dalla questione del programma nucleare iraniano e dal ruolo di attori regionali. Nonostante la retorica pubblica spesso ostile, le due nazioni hanno mantenuto contatti indiretti e diretti in diverse fasi storiche per gestire crisi e bilanciare le influenze regionali. La stabilità di questo rapporto rimane un elemento cruciale per gli equilibri del Medio Oriente, evolvendosi da una contrapposizione ideologica post-rivoluzionaria a una complessa negoziazione su sanzioni e influenza strategica.',
      sources: [
        {
          title:
            'Da Carter a Bush, la lunga inimicizia fra il «Grande Satana» e gli Ayatollah',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20150715/Nazionale/20150715_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: "Teheran gioca d' anticipo nella crisi nucleare",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_20041123/Nazionale/23112004.corsera.23CO008NACB.1.A.B.pdf'
        },
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: '«In Iran una sede diplomatica Usa»',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2008/CORSERA_20080718/Nazionale/18072008.CorriereFC.01418CS014NZPSNAZFANH.1.A.P.pdf'
        },
        {
          title: "L' Iran gela Obama: sei come Bush",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2009/CORSERA_20090305/Nazionale/05032009.CorriereFC.01405CS014NZSSNAZFANH.1.A.P.pdf'
        },
        {
          title:
            "Ecco i soccorritori del Grande Satana Usa «Siamo qui per aiutare, dov' è il problema?»",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2003/CORSERA_20031230/Nazionale/00415_20031230_13.tif'
        },
        {
          title: 'Stallo in PakistanTrump: vinciamo noicomunque finisca',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260412/Ribattuta/20260412_RC_NAZI_002_PS_01.pdf'
        },
        {
          title: 'Joe Biden alla prova degli ayatollah: ripartenze e conti da regolare',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2020/CORSERA_20201206/Nazionale/20201206_CS_NAZI_016_SS_01.pdf'
        },
        {
          title:
            'Washington e Teheran, minacce e prove di dialogo Trump: voglio un accordo ma rinuncino all’atomica',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260131/Nazionale/20260131_CS_NAZI_010_SS_01.pdf'
        },
        {
          title: 'Usa-Iran, rissa assurda Sono destinati all’intesa',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2019/LETTURA_20190728/Nazionale/20190728_LL_NAZI_013_SS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title:
            "L' Orgoglio e la Potenza: dialogo difficile (ma necessario) tra mille segreti",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_2004/CORSERA_20040415/Nazionale/15042004.corsera.15CO009NACB.1.A.B.pdf'
        },
        {
          title: '«Possibile una nuova fase',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20151112/Nazionale/20151112_CS_NAZI_002_PS_01.pdf'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-2',
      title: 'Evoluzione Storica e Politica',
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-5', 'node-8', 'node-9'],
      imageUrl: null,
      description:
        "Il percorso storico delle relazioni bilaterali è stato segnato da eventi traumatici come la Rivoluzione Islamica del 1979, che ha trasformato l'Iran in una teocrazia ostile verso Washington. La crisi degli ostaggi presso l'ambasciata americana a Teheran, durata 444 giorni, ha definito l'Iran come il 'Grande Satana' nella retorica di Khomeini, portando alla rottura delle relazioni diplomatiche ufficiali. Questo trauma ha condizionato ogni successiva interazione, rendendo il rapporto un susseguirsi di escalation e tentativi di normalizzazione diplomatica.",
      sources: [
        {
          title:
            'Da Carter a Bush, la lunga inimicizia fra il «Grande Satana» e gli Ayatollah',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20150715/Nazionale/20150715_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: "Teheran gioca d' anticipo nella crisi nucleare",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_20041123/Nazionale/23112004.corsera.23CO008NACB.1.A.B.pdf'
        },
        {
          title:
            "Ecco i soccorritori del Grande Satana Usa «Siamo qui per aiutare, dov' è il problema?»",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2003/CORSERA_20031230/Nazionale/00415_20031230_13.tif'
        },
        {
          title: 'Stallo in PakistanTrump: vinciamo noicomunque finisca',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260412/Ribattuta/20260412_RC_NAZI_002_PS_01.pdf'
        },
        {
          title: 'Joe Biden alla prova degli ayatollah: ripartenze e conti da regolare',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2020/CORSERA_20201206/Nazionale/20201206_CS_NAZI_016_SS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title:
            "L' Orgoglio e la Potenza: dialogo difficile (ma necessario) tra mille segreti",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_2004/CORSERA_20040415/Nazionale/15042004.corsera.15CO009NACB.1.A.B.pdf'
        }
      ]
    },
    {
      id: 'node-3',
      title: 'Gestione delle Crisi e Accordi',
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-6', 'node-7', 'node-13'],
      imageUrl: null,
      description:
        "La gestione delle crisi tra Washington e Teheran si è articolata attraverso accordi formali e memorandum d'intesa. Il Piano d'azione congiunto globale del 2015 ha rappresentato il tentativo più significativo di normalizzazione, successivamente contestato dall'amministrazione Trump. Recentemente, il Memorandum d'intesa del 2026 ha segnato una svolta, ponendo fine alle ostilità militari, garantendo la riapertura dello Stretto di Hormuz e prevedendo l'allentamento delle sanzioni economiche in cambio di impegni sulla non proliferazione nucleare.",
      sources: [
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: 'Joe Biden alla prova degli ayatollah: ripartenze e conti da regolare',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2020/CORSERA_20201206/Nazionale/20201206_CS_NAZI_016_SS_01.pdf'
        },
        {
          title: 'Usa-Iran, rissa assurda Sono destinati all’intesa',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2019/LETTURA_20190728/Nazionale/20190728_LL_NAZI_013_SS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-4',
      title: 'Strumenti di Pressione e Conflitto',
      type: 'topic',
      parentId: 'root',
      childrenIds: ['node-10', 'node-11', 'node-12', 'node-14', 'node-15'],
      imageUrl: null,
      description:
        "Il confronto tra le due nazioni è stato caratterizzato dall'uso costante di sanzioni economiche e operazioni militari dirette. Gli Stati Uniti hanno utilizzato l'embargo per limitare le ambizioni nucleari e il sostegno iraniano a milizie regionali, mentre l'Iran ha risposto con manovre navali nello Stretto di Hormuz. Episodi come l'uccisione di Qasem Soleimani nel 2020 e l'operazione 'Martello di Mezzanotte' nel 2025 hanno spinto le parti verso cicli di escalation, bilanciati solo dalla necessità di stabilità economica globale.",
      sources: [
        {
          title: "Teheran gioca d' anticipo nella crisi nucleare",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_20041123/Nazionale/23112004.corsera.23CO008NACB.1.A.B.pdf'
        },
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: '«In Iran una sede diplomatica Usa»',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2008/CORSERA_20080718/Nazionale/18072008.CorriereFC.01418CS014NZPSNAZFANH.1.A.P.pdf'
        },
        {
          title:
            'Washington e Teheran, minacce e prove di dialogo Trump: voglio un accordo ma rinuncino all’atomica',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260131/Nazionale/20260131_CS_NAZI_010_SS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: '«Possibile una nuova fase',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20151112/Nazionale/20151112_CS_NAZI_002_PS_01.pdf'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-5',
      title: 'Rivoluzione Islamica del 1979',
      type: 'event',
      parentId: 'node-2',
      childrenIds: [],
      imageUrl: null,
      description:
        "Evento fondante che ha segnato la fine dell'alleanza strategica tra gli Stati Uniti e lo Scià di Persia. La presa in ostaggio di 63 diplomatici ha cristallizzato l'ostilità tra le due nazioni, definendo il quadro ideologico che ha dominato i decenni successivi.",
      sources: [
        {
          title:
            'Da Carter a Bush, la lunga inimicizia fra il «Grande Satana» e gli Ayatollah',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20150715/Nazionale/20150715_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: "Teheran gioca d' anticipo nella crisi nucleare",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_20041123/Nazionale/23112004.corsera.23CO008NACB.1.A.B.pdf'
        },
        {
          title:
            "Ecco i soccorritori del Grande Satana Usa «Siamo qui per aiutare, dov' è il problema?»",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2003/CORSERA_20031230/Nazionale/00415_20031230_13.tif'
        },
        {
          title: 'Stallo in PakistanTrump: vinciamo noicomunque finisca',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260412/Ribattuta/20260412_RC_NAZI_002_PS_01.pdf'
        },
        {
          title: 'Joe Biden alla prova degli ayatollah: ripartenze e conti da regolare',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2020/CORSERA_20201206/Nazionale/20201206_CS_NAZI_016_SS_01.pdf'
        }
      ]
    },
    {
      id: 'node-6',
      title: "Piano d'azione congiunto globale (2015)",
      type: 'event',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        "Accordo firmato sotto l'amministrazione Obama per limitare il programma nucleare iraniano in cambio della revoca delle sanzioni. Rappresenta il tentativo diplomatico più ambizioso, poi abbandonato nel 2018 dall'amministrazione Trump.",
      sources: [
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: 'Joe Biden alla prova degli ayatollah: ripartenze e conti da regolare',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2020/CORSERA_20201206/Nazionale/20201206_CS_NAZI_016_SS_01.pdf'
        },
        {
          title: 'Usa-Iran, rissa assurda Sono destinati all’intesa',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2019/LETTURA_20190728/Nazionale/20190728_LL_NAZI_013_SS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: '«Possibile una nuova fase',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20151112/Nazionale/20151112_CS_NAZI_002_PS_01.pdf'
        }
      ]
    },
    {
      id: 'node-7',
      title: "Memorandum d'intesa Usa-Iran 2026",
      type: 'event',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        'Siglato nel giugno 2026, mira a porre fine alle ostilità militari, riaprire lo Stretto di Hormuz e sbloccare beni congelati per miliardi di dollari. Stabilisce una finestra di sessanta giorni per negoziare un accordo definitivo sul nucleare.',
      sources: [
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-8',
      title: 'Donald Trump',
      type: 'person',
      parentId: 'node-2',
      childrenIds: [],
      imageUrl: null,
      description:
        "Presidente degli Stati Uniti che ha gestito fasi cruciali del conflitto. La sua politica ha oscillato tra il 'vandalismo diplomatico' e il pragmatismo negoziale, culminando nel 2026 con la firma del memorandum d'intesa come successo strategico.",
      sources: [
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: 'Stallo in PakistanTrump: vinciamo noicomunque finisca',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260412/Ribattuta/20260412_RC_NAZI_002_PS_01.pdf'
        },
        {
          title:
            'Washington e Teheran, minacce e prove di dialogo Trump: voglio un accordo ma rinuncino all’atomica',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260131/Nazionale/20260131_CS_NAZI_010_SS_01.pdf'
        },
        {
          title: 'Usa-Iran, rissa assurda Sono destinati all’intesa',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2019/LETTURA_20190728/Nazionale/20190728_LL_NAZI_013_SS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-9',
      title: "Repubblica Islamica dell'Iran",
      type: 'organization',
      parentId: 'node-2',
      childrenIds: [],
      imageUrl: null,
      description:
        'Stato teocratico guidato dalla Guida Suprema, attualmente Mojtaba Khamenei. Il regime ha dimostrato resilienza di fronte alle sanzioni, mantenendo il controllo sulle infrastrutture strategiche e utilizzando il programma missilistico come leva negoziale.',
      sources: [
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title:
            "L' Orgoglio e la Potenza: dialogo difficile (ma necessario) tra mille segreti",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_2004/CORSERA_20040415/Nazionale/15042004.corsera.15CO009NACB.1.A.B.pdf'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-10',
      title: 'Stretto di Hormuz',
      type: 'topic',
      parentId: 'node-4',
      childrenIds: [],
      imageUrl: null,
      description:
        'Nodo strategico vitale per il commercio energetico globale. La sua gestione è stata al centro di minacce di blocco iraniano e operazioni di sminamento statunitensi, diventando una carta vincente nelle negoziazioni tra le due potenze.',
      sources: [
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: 'Stallo in PakistanTrump: vinciamo noicomunque finisca',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260412/Ribattuta/20260412_RC_NAZI_002_PS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-11',
      title: 'Programma nucleare iraniano',
      type: 'event',
      parentId: 'node-4',
      childrenIds: [],
      imageUrl: null,
      description:
        'Oggetto di contesa diplomatica sin dal 2015, il programma rimane il punto centrale delle frizioni. Il memorandum del 2026 sposta la risoluzione definitiva sul destino del materiale arricchito a una fase negoziale successiva.',
      sources: [
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: '«Possibile una nuova fase',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20151112/Nazionale/20151112_CS_NAZI_002_PS_01.pdf'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-12',
      title: 'Sanzioni economiche',
      type: 'event',
      parentId: 'node-4',
      childrenIds: [],
      imageUrl: null,
      description:
        "Strumento di pressione utilizzato dagli Stati Uniti per indebolire l'economia iraniana. Il nuovo accordo prevede un alleggerimento graduale e lo sblocco di circa 100 miliardi di dollari di beni congelati, condizionato al rispetto degli impegni presi.",
      sources: [
        {
          title: "Teheran gioca d' anticipo nella crisi nucleare",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_20041123/Nazionale/23112004.corsera.23CO008NACB.1.A.B.pdf'
        },
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: '«In Iran una sede diplomatica Usa»',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2008/CORSERA_20080718/Nazionale/18072008.CorriereFC.01418CS014NZPSNAZFANH.1.A.P.pdf'
        },
        {
          title:
            'Washington e Teheran, minacce e prove di dialogo Trump: voglio un accordo ma rinuncino all’atomica',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260131/Nazionale/20260131_CS_NAZI_010_SS_01.pdf'
        },
        {
          title:
            'Memorandum Usa-Iran in 14 punti: perché (se il testo è questo) Teheran ha vinto ed esce dalla guerra riconosciuta e rifinanziata',
          url: 'https://www.corriere.it/esteri/26_giugno_17/memorandum-usa-iran-14-punti-chi-vince-3966ece0-4789-476f-b6ab-73fcb3f19xlk.shtml'
        },
        {
          title: '«Possibile una nuova fase',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20151112/Nazionale/20151112_CS_NAZI_002_PS_01.pdf'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-13',
      title: 'Mediazione internazionale',
      type: 'organization',
      parentId: 'node-3',
      childrenIds: [],
      imageUrl: null,
      description:
        "Processo che ha visto il coinvolgimento di attori terzi come il Pakistan, l'Unione Europea e la diplomazia svizzera. Questi sforzi sono stati cruciali per mantenere canali di comunicazione aperti e prevenire un'escalation incontrollata.",
      sources: [
        {
          title: 'Stallo in PakistanTrump: vinciamo noicomunque finisca',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260412/Ribattuta/20260412_RC_NAZI_002_PS_01.pdf'
        },
        {
          title:
            'Washington e Teheran, minacce e prove di dialogo Trump: voglio un accordo ma rinuncino all’atomica',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260131/Nazionale/20260131_CS_NAZI_010_SS_01.pdf'
        },
        {
          title:
            "L' Orgoglio e la Potenza: dialogo difficile (ma necessario) tra mille segreti",
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2004/CORSERA_2004/CORSERA_20040415/Nazionale/15042004.corsera.15CO009NACB.1.A.B.pdf'
        },
        {
          title: '«Possibile una nuova fase',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2015/CORSERA_20151112/Nazionale/20151112_CS_NAZI_002_PS_01.pdf'
        },
        {
          title: "Usa-Iran, c'è l'accordo per finire la guerra",
          url: 'https://www.corriere.it/il-punto/prima-ora/26_giugno_15/usa-iran-c-e-l-accordo.shtml'
        }
      ]
    },
    {
      id: 'node-14',
      title: 'Operazione Martello di Mezzanotte (2025)',
      type: 'event',
      parentId: 'node-4',
      childrenIds: [],
      imageUrl: null,
      description:
        'Azione militare statunitense contro siti nucleari iraniani che ha innescato ritorsioni contro basi in Iraq e Qatar, portando il conflitto a un punto di rottura prima della negoziazione del 2026.',
      sources: [
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: 'Joe Biden alla prova degli ayatollah: ripartenze e conti da regolare',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2020/CORSERA_20201206/Nazionale/20201206_CS_NAZI_016_SS_01.pdf'
        },
        {
          title:
            'Washington e Teheran, minacce e prove di dialogo Trump: voglio un accordo ma rinuncino all’atomica',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260131/Nazionale/20260131_CS_NAZI_010_SS_01.pdf'
        }
      ]
    },
    {
      id: 'node-15',
      title: 'Qasem Soleimani',
      type: 'person',
      parentId: 'node-4',
      childrenIds: [],
      imageUrl: null,
      description:
        'Generale iraniano la cui uccisione nel 2020 ha rappresentato un momento di massima tensione, innescando cicli di ritorsioni militari e ridefinendo la postura bellica statunitense in Medio Oriente.',
      sources: [
        {
          title: 'Dai mini raid agli attacchi cyber Le opzioni Usa',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260114/Nazionale/20260114_CS_NAZI_005_SS_01.pdf'
        },
        {
          title: 'Joe Biden alla prova degli ayatollah: ripartenze e conti da regolare',
          url: 'gs://archivio-contenuti-corriere/downloaded_paper_digital_editions_methode/2020/CORSERA_20201206/Nazionale/20201206_CS_NAZI_016_SS_01.pdf'
        },
        {
          title:
            'Washington e Teheran, minacce e prove di dialogo Trump: voglio un accordo ma rinuncino all’atomica',
          url: 'gs://archivio-methode-ongoing/2026/CORSERA_20260131/Nazionale/20260131_CS_NAZI_010_SS_01.pdf'
        }
      ]
    }
  ],
  edges: [
    {
      id: 'e-root-node-2',
      source: 'root',
      target: 'node-2',
      label: 'analizzato tramite'
    },
    {
      id: 'e-root-node-3',
      source: 'root',
      target: 'node-3',
      label: 'gestito tramite'
    },
    {
      id: 'e-root-node-4',
      source: 'root',
      target: 'node-4',
      label: 'affrontato tramite'
    },
    {
      id: 'e-node-2-node-5',
      source: 'node-2',
      target: 'node-5',
      label: 'originato da'
    },
    {
      id: 'e-node-2-node-8',
      source: 'node-2',
      target: 'node-8',
      label: 'influenzato da'
    },
    {
      id: 'e-node-2-node-9',
      source: 'node-2',
      target: 'node-9',
      label: 'coinvolge'
    },
    {
      id: 'e-node-3-node-6',
      source: 'node-3',
      target: 'node-6',
      label: 'tentato con'
    },
    {
      id: 'e-node-3-node-7',
      source: 'node-3',
      target: 'node-7',
      label: 'formalizzato con'
    },
    {
      id: 'e-node-3-node-13',
      source: 'node-3',
      target: 'node-13',
      label: 'facilitato da'
    },
    {
      id: 'e-node-4-node-10',
      source: 'node-4',
      target: 'node-10',
      label: 'conteso su'
    },
    {
      id: 'e-node-4-node-11',
      source: 'node-4',
      target: 'node-11',
      label: 'incentrato su'
    },
    {
      id: 'e-node-4-node-12',
      source: 'node-4',
      target: 'node-12',
      label: 'attuato tramite'
    },
    {
      id: 'e-node-4-node-14',
      source: 'node-4',
      target: 'node-14',
      label: 'esacerbato da'
    },
    {
      id: 'e-node-4-node-15',
      source: 'node-4',
      target: 'node-15',
      label: 'segnato da'
    }
  ]
};
