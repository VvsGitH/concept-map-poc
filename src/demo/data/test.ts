import type { ConceptMapData } from "../../concept-map";

export const testDs1: ConceptMapData = {
  rootId: 'root',
  nodes: [
    {
      id: 'root',
      title: 'Presidenza di Sergio Mattarella',
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
      type: 'other',
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
