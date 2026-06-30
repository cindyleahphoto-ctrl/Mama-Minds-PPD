(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const u={en:{name:"English",chip:"EN",native:"English",greeting:"Good morning,",greetings:{morning:"Good morning,",afternoon:"Good afternoon,",evening:"Good evening,"},offline:"Offline ready",checkin_label:"Days since last check-in",checkin_hint:"Take today's mood check",alert_title:"Alert your support network",alert_sub:"Reach a healthcare worker or loved one",mood_label:"How are you feeling today?",tools_label:"Tools & support",progress_label:"Recent progress",last_score:"Last EPDS score",card_assess:"EPDS Assessment",card_assess_sub:"10-question check",card_resources:"Resources",card_resources_sub:"Guides & support",card_help:"Get help now",card_help_sub:"Alert support",card_profile:"My profile",card_profile_sub:"Settings & plan",moods:["Low","Okay","Good","Joyful"],nav:["Home","Check-in","Resources","Community","Alert"],assess_title:"EPDS Assessment",assess_sub:"Edinburgh Postnatal Depression Scale",q_of:"Question {n} of 10",btn_next:"Next",btn_results:"See my results",btn_back:"Back",result_label:"Your EPDS score",result_means:"What this means",result_steps:"Recommended next steps",result_btn_alert:"Alert my support network",result_btn_resources:"View support resources",result_btn_retake:"Take assessment again",result_categories:{low:"Low concern",mid:"Mild to moderate",high:"High concern"},result_meanings:{low:"Your score suggests you may be managing well right now. Continue with daily mood tracking and share your score with your midwife or health worker at your next visit.",mid:"Your score suggests you may be experiencing some symptoms of postnatal depression. This is common and treatable — please speak to a community health worker or clinic nurse soon.",high:"Your score is elevated and suggests you may need additional support right now. Please know this is not your fault — help is available. Reach out to a healthcare provider as soon as possible."},result_steps_text:{low:"Continue daily mood check-ins. Share your score with your health worker at your next visit. Keep using the coping tools in Resources.",mid:"Speak to a CHW or clinic nurse within the next few days. Try the breathing exercises in Resources. Consider joining a peer support group.",high:"Contact a healthcare provider today. Use the Alert button to reach your support network now. You deserve care and support — please do not wait."},resources_title:"Support Resources",resources_sub:"Available offline — no internet needed",res_tabs:["Understanding PPD","Coping Tools","Family & Community","Helplines","Healthcare"],alert_screen_title:"Alert my support network",alert_screen_sub:"Send a message to your healthcare provider or loved ones",send_btn:"Send alert now",send_hint:"Works without internet via SMS fallback",default_message:"I'm struggling with my mental health right now. Please check in on me when you can. — Sent from Mama Minds",profile_title:"My profile",plan_label:"Current plan",plan_free:"Basic (Free)",language_label:"Language",location_label:"Location",offline_label:"Offline mode",last_assess_label:"Last assessment",delete_data:"Delete my data",upgrade_title:"Mama Minds Plus",upgrade_desc:"Unlimited assessments, tele-health session booking, private therapist chat, full care plan export, and priority emergency alerts. R89/month or R799/year.",upgrade_btn:"Upgrade to Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Community",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},zu:{name:"Zulu",chip:"ZU",native:"isiZulu",greeting:"Sawubona,",offline:"Isebenza ngaphandle kwe-inthanethi",checkin_label:"Izinsuku kusukela ekuhlolweni kwakho",checkin_hint:"Hlola umzwelo wakho namhlanje",alert_title:"Xwayisa inethiwekhi yakho yokusekela",alert_sub:"Shayela umsizi wezempilo noma othandiweyo",mood_label:"Uzizwa kanjani namhlanje?",tools_label:"Amathuluzi & ukusekela",progress_label:"Inqubekela phambili yamanje",last_score:"Amapointi e-EPDS ekugcineni",card_assess:"Ukuhlolwa kwe-EPDS",card_assess_sub:"Imibuzo eyishumi",card_resources:"Izinsiza",card_resources_sub:"Izikhungo & ukusekela",card_help:"Thola usizo manje",card_help_sub:"Xwayisa ukusekela",card_profile:"Iphrofayili yami",card_profile_sub:"Izilungiselelo & iplanhi",moods:["Phansi","Kulungile","Kuhle","Ujabule"],nav:["Ikhaya","Hlola","Izinsiza","Umphakathi","Xwayisa"],assess_title:"Ukuhlolwa kwe-EPDS",assess_sub:"Isilinganiso se-Edinburgh Sokukhathazeka Ngemuva Kokubeletha",q_of:"Umbuzo {n} we-10",btn_next:"Okulandelayo",btn_results:"Bona imiphumela yami",btn_back:"Emuva",result_label:"Amapointi akho e-EPDS",result_means:"Lokhu kusho ukuthini",result_steps:"Izinyathelo ezilandelayo ezihlongoswayo",result_btn_alert:"Xwayisa inethiwekhi yami yokusekela",result_btn_resources:"Buka izinsiza zokusekela",result_btn_retake:"Phinda ukuhlolwa",result_categories:{low:"Ukukhathazeka okuphansi",mid:"Okupakathi",high:"Ukukhathazeka okukhulu"},result_meanings:{low:"Amapointi akho asikho ephezulu. Qhubeka nokullandela imizwelo yakho nsuku zonke futhi wabelane namapointi akho nomsizi wezempilo kwiviziti yakho elandelayo.",mid:"Amapointi akho abonakalisa ukuthi ungase ubekhathazeke ngemuva kokubeletha. Lokhu kuvamile futhi kulashwa — xoxa nochwepheshe wezempilo maduze.",high:"Amapointi akho aphezulu. Ngicela uxhumane nomhlinzeki wezempilo namhlanje. Lokhu akusona isono sakho — usizo luyatholakala."},result_steps_text:{low:"Qhubeka nohlolo lwemizwelo nsuku zonke. Xoxa ngamapointi akho nomsizi wezempilo.",mid:"Xoxa nochwepheshe wezempilo ezinsukwini ezimbalwa. Zama imisebenzi yokuphefumula.",high:"Xhumana nomhlinzeki wezempilo namhlanje. Sebenzisa inkinobho Yexwayiso."},resources_title:"Izinsiza Zokusekela",resources_sub:"Iyatholakala ngaphandle kwe-inthanethi",res_tabs:["Ukuqonda i-PPD","Amathuluzi","Umndeni & Umphakathi","Izinombolo Zosizo","Ukunakekelwa Kwezempilo"],alert_screen_title:"Xwayisa inethiwekhi yami yokusekela",alert_screen_sub:"Thumela umyalezo kumhlinzeki wezempilo noma othandiweyo",send_btn:"Thumela isixwayiso manje",send_hint:"Isebenza ngaphandle kwe-inthanethi nge-SMS",default_message:"Ngikhathazekile ngezempilo yami yengqondo njengamanje. Ngicela uhlole ukuthi nginjani. — Kuthunywe ku-Mama Minds",profile_title:"Iphrofayili yami",plan_label:"Iplanhi yamanje",plan_free:"Eyisisekelo (Mahhala)",language_label:"Ulimi",location_label:"Indawo",offline_label:"Imodi ye-offline",last_assess_label:"Ukuhlolwa okokugcina",delete_data:"Susa idatha yami",upgrade_title:"Mama Minds Plus",upgrade_desc:"Ukuhlolwa okungakhawuliwe, ukubhukha ithele-mpilo, ingxoxo yomhleli wezengqondo oyimfihlo, nokukhushulwa kohlelo lokukhathalela. R89/inyanga noma R799/unyaka.",upgrade_btn:"Khushulelana ku-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Umphakathi",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},xh:{name:"Xhosa",chip:"XH",native:"isiXhosa",greeting:"Molo,",offline:"Isebenza ngaphandle kwe-intanethi",checkin_label:"Iintsuku ukusukela kucheki lwakho",checkin_hint:"Thabatha ukuzihlola kwakho kwemood namhlanje",alert_title:"Xela unxibelelwano lwakho lwenkxaso",alert_sub:"Fikelela usebenzisi wezempilo okanye umntu omthandayo",mood_label:"Uziva njani namhlanje?",tools_label:"Izixhobo & inkxaso",progress_label:"Inkqubela phambili yakutsha nje",last_score:"Isikolo sakho se-EPDS esidlulileyo",card_assess:"Uvavanyo lwe-EPDS",card_assess_sub:"Imibuzo elishumi",card_resources:"Izixhobo",card_resources_sub:"Izikhokelo & inkxaso",card_help:"Fumana uncedo ngoku",card_help_sub:"Xela inkxaso",card_profile:"Iprofayile yam",card_profile_sub:"Iisetingi & isicwangciso",moods:["Phantsi","Kulungile","Kulungile","Wonelisekile"],nav:["Ikhaya","Jonga","Izixhobo","Uluntu","Xela"],assess_title:"Uvavanyo lwe-EPDS",assess_sub:"Isilinganiso se-Edinburgh sokukhathazeka emva kwe-postpartum",q_of:"Umbuzo {n} we-10",btn_next:"Okulandelayo",btn_results:"Jonga iziphumo zam",btn_back:"Emva",result_label:"Isikolo sakho se-EPDS",result_means:"Oku kuthetha ntoni",result_steps:"Amanyathelo alandelayo acetywayo",result_btn_alert:"Xela unxibelelwano lwam lwenkxaso",result_btn_resources:"Jonga izixhobo zenkxaso",result_btn_retake:"Yenza uvavanyo kwakhona",result_categories:{low:"Uxinzelelo oluncinane",mid:"Phakathi",high:"Uxinzelelo oluphezulu"},result_meanings:{low:"Isikolo sakho asiphezulu. Qhubeka nokulandelela imood yakho yonke imihla.",mid:"Isikolo sakho sibonisa ukuba ungaziva nzima emva kokuzala. Thetha nomsebenzi wezempilo ngokukhawuleza.",high:"Isikolo sakho siphezulu. Nceda uqhagamshelane nomhlinzeki wezempilo namhlanje."},result_steps_text:{low:"Qhubeka nocheki lwemood yonke imihla. Yabelana ngesikolo sakho nomsebenzi wezempilo.",mid:"Thetha nochwepheshe wezempilo kwiiintsuku ezimbalwa. Zama imisebenzi yokuphefumla.",high:"Qhagamshelana nomhlinzeki wezempilo namhlanje. Sebenzisa iqhosha leSilumkiso."},resources_title:"Izixhobo Zenkxaso",resources_sub:"Iyafumaneka ngaphandle kwe-intanethi",res_tabs:["Qonda i-PPD","Izixhobo","Usapho & Uluntu","Iinombolo Zoncedo","Ezempilo"],alert_screen_title:"Xela unxibelelwano lwam lwenkxaso",alert_screen_sub:"Thumela umyalezo kumhlinzeki wezempilo okanye umntu omthandayo",send_btn:"Thumela isaziso ngoku",send_hint:"Isebenza ngaphandle kwe-intanethi nge-SMS",default_message:"Ndixabana nempilo yam yengqondo ngoku. Nceda undijongele. — Ithunyelwe kwi-Mama Minds",profile_title:"Iprofayile yam",plan_label:"Isicwangciso sangoku",plan_free:"Esisisiseko (Simahla)",language_label:"Ulwimi",location_label:"Indawo",offline_label:"Imowudi ye-offline",last_assess_label:"Uvavanyo lwamva nje",delete_data:"Cima idatha yam",upgrade_title:"Mama Minds Plus",upgrade_desc:"Uvavanyo olungaphelelanga, ukubhukha i-tele-health, ingxoxo yomhleli wengqondo oyimfihlo. R89/inyanga okanye R799/unyaka.",upgrade_btn:"Nyuka uye kwi-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Uluntu",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},af:{name:"Afrikaans",chip:"AF",native:"Afrikaans",greeting:"Goeie môre,",offline:"Werk sonder internet",checkin_label:"Dae sedert jou laaste inskrywing",checkin_hint:"Doen vandag se gemoedskontrole",alert_title:"Waarsku jou ondersteuningsnetwerk",alert_sub:"Bereik 'n gesondheidswerker of geliefde",mood_label:"Hoe voel jy vandag?",tools_label:"Gereedskap en ondersteuning",progress_label:"Onlangse vordering",last_score:"Laaste EPDS-telling",card_assess:"EPDS-assessering",card_assess_sub:"10 vrae",card_resources:"Hulpbronne",card_resources_sub:"Gidse en ondersteuning",card_help:"Kry nou hulp",card_help_sub:"Waarsku ondersteuning",card_profile:"My profiel",card_profile_sub:"Instellings en plan",moods:["Neerslagtig","Okay","Goed","Bly"],nav:["Tuis","Inskrywing","Hulpbronne","Gemeenskap","Waarsku"],assess_title:"EPDS-assessering",assess_sub:"Edinburgh Postnatale Depressie-skaal",q_of:"Vraag {n} van 10",btn_next:"Volgende",btn_results:"Sien my resultate",btn_back:"Terug",result_label:"Jou EPDS-telling",result_means:"Wat dit beteken",result_steps:"Aanbevole volgende stappe",result_btn_alert:"Waarsku my ondersteuningsnetwerk",result_btn_resources:"Bekyk ondersteuningshulpbronne",result_btn_retake:"Doen assessering weer",result_categories:{low:"Lae risiko",mid:"Matige risiko",high:"Hoë risiko"},result_meanings:{low:"Jou telling dui aan dat jy dalk goed bestuur. Gaan voort met daaglikse stemming-opsporing en deel jou telling met jou gesondheidswerker.",mid:"Jou telling dui aan dat jy moontlik simptome van postnatale depressie ervaar. Dit is behandelbaar — praat binnekort met 'n gesondheidswerker.",high:"Jou telling is hoog. Kontak asseblief 'n gesondheidsverskaffer so gou as moontlik. Jy verdien ondersteuning."},result_steps_text:{low:"Gaan voort met daaglikse gemoedsopsporing. Deel jou telling met jou gesondheidswerker.",mid:"Praat binne die volgende paar dae met 'n gemeenskapsgesondheidswerker.",high:"Kontak 'n gesondheidsverskaffer vandag. Gebruik die waarskuwingsknoppie."},resources_title:"Ondersteuningshulpbronne",resources_sub:"Beskikbaar sonder internet",res_tabs:["Verstaan PPD","Hanterings gereedskap","Familie & Gemeenskap","Hulplyne","Gesondheidsorg"],alert_screen_title:"Waarsku my ondersteuningsnetwerk",alert_screen_sub:"Stuur 'n boodskap aan jou gesondheidsorgverskaffer of geliefde",send_btn:"Stuur waarskuwing nou",send_hint:"Werk sonder internet via SMS",default_message:"Ek sukkel tans met my geestesgesondheid. Gaan asseblief na hoe dit met my gaan. — Gestuur van Mama Minds",profile_title:"My profiel",plan_label:"Huidige plan",plan_free:"Basies (Gratis)",language_label:"Taal",location_label:"Ligging",offline_label:"Vanlyn-modus",last_assess_label:"Laaste assessering",delete_data:"Vee my data uit",upgrade_title:"Mama Minds Plus",upgrade_desc:"Onbeperkte assesserings, tele-gesondheid besprekings, privaat terapeut-geselsie. R89/maand of R799/jaar.",upgrade_btn:"Opgradeer na Plus",epds_disclaimer:"Hierdie siftingsinstrument is nie 'n diagnose nie. As jou telling aandui dat jy moontlik postnatale depressie ervaar, praat asseblief met jou gesondheidsorgverskaffer — jy verdien ondersteuning.",welcome_tagline:"Die wêreld het aanbeweeg nadat jy geboorte gegee het. Hier is 'n plek om eerlik met jouself in te skakel.",community_title:"Gemeenskap",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},st:{name:"Sesotho",chip:"ST",native:"Sesotho",greeting:"Lumela,",offline:"E sebetsa ntle le marang-rang",checkin_label:"Matsatsi ho tloha tekong ea hao",checkin_hint:"Nka tekolo ea maikutlo a kajeno",alert_title:"Tsebisa marang-rang a hao a tšehetso",alert_sub:"Fihlella mosebetsi oa tsa bophelo kapa motho oa hao o ratoang",mood_label:"O ikutloa joang kajeno?",tools_label:"Lisebelisoa le tšehetso",progress_label:"Tsoelo-pele ea morao tjena",last_score:"Manane a EPDS a ho qetela",card_assess:"Tekolo ea EPDS",card_assess_sub:"Lipotso tse 10",card_resources:"Mehloli",card_resources_sub:"Likhokahano & tšehetso",card_help:"Fumana thuso joale",card_help_sub:"Tsebisa tšehetso",card_profile:"Profaele ea ka",card_profile_sub:"Litlhophiso & moralo",moods:["Fatše","Ho lokile","Hantle","Thabile"],nav:["Lapeng","Beha leihlo","Mehloli","Sechaba","Tsebisa"],assess_title:"Tekolo ea EPDS",assess_sub:"Tekanyo ea Edinburgh ea Ho Hiloa ka mor'a Tsoalo",q_of:"Potso {n} ea 10",btn_next:"E latelang",btn_results:"Bona liphetho tsa ka",btn_back:"Morao",result_label:"Manane a hao a EPDS",result_means:"Se sena se bolela eng",result_steps:"Mehato e hlokometsoeng e latelang",result_btn_alert:"Tsebisa marang-rang a ka a tšehetso",result_btn_resources:"Sheba mehloli ea tšehetso",result_btn_retake:"Nka tekolo hape",result_categories:{low:"Kotsi e tlase",mid:"Kateng",high:"Kotsi e phahameng"},result_meanings:{low:"Manane a hao ha a phahamang. Tsoela pele ho hlahloba maikutlo a hao letsatsi le leng le le leng.",mid:"Manane a hao a bontša hore o ka ba le matšoao a ho hiloa ha mor'a tsoalo. Bua le mosebetsi oa tsa bophelo kapele.",high:"Manane a hao a phahame. Ka kopo ikopanye le mohaki oa tsa bophelo kajeno."},result_steps_text:{low:"Tsoela pele ho hlahloba maikutlo tsatsi le leng le le leng. Arolelana manane a hao le mosebetsi oa tsa bophelo.",mid:"Bua le chwepheshe oa tsa bophelo matsatsing a mmaloa a latelang.",high:"Ikopanye le mohaki oa tsa bophelo kajeno. Sebelisa konope ea Tsebiso."},resources_title:"Mehloli ea Tšehetso",resources_sub:"E fumaneha ntle le marang-rang",res_tabs:["Utloa PPD","Lisebelisoa","Lelapa & Sechaba","Linomoro tsa Thuso","Tlhokomelo ea Bophelo"],alert_screen_title:"Tsebisa marang-rang a ka a tšehetso",alert_screen_sub:"Romela molaetsa ho mohaki oa tsa bophelo kapa motho o ratoang",send_btn:"Romela tsebiso joale",send_hint:"E sebetsa ntle le marang-rang ka SMS",default_message:"Ke na le mathata a bophelo ba ka ba kelello hona joale. Ke kopa u hlahlobe hore ke teng. — Ho rometswe ho tsoa ho Mama Minds",profile_title:"Profaele ea ka",plan_label:"Moralo oa hona joale",plan_free:"Motheo (Mahala)",language_label:"Puo",location_label:"Sebaka",offline_label:"Mokhoa oa ho se be marang-rang",last_assess_label:"Tekolo ea ho qetela",delete_data:"Hlakola data ea ka",upgrade_title:"Mama Minds Plus",upgrade_desc:"Tekolo e sa lekaneng, ho bukhisa sesene sa tele-bophelo, ingxoxo ya mohlophisi wa ingqondo. R89/kgwedi kapa R799/selemo.",upgrade_btn:"Eketsa ho Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Sechaba",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},tn:{name:"Setswana",chip:"TN",native:"Setswana",greeting:"Dumela,",offline:"E dira ntle le inthanete",checkin_label:"Matsatsi go tswa go lebelo la gago la bofelo",checkin_hint:"Tsaya go lekola maikutlo a gago a letsatsi",alert_title:"Itsise kgokagano ya gago ya thuso",alert_sub:"Fitlhelela mooki wa bophelo kgotsa motho yo o ratwang",mood_label:"O ikutlwa jang gompieno?",tools_label:"Didirisiwa le thuso",progress_label:"Ntlhatloso ya monaganelo",last_score:"Palo ya gago ya EPDS ya bofelo",card_assess:"Tekolo ya EPDS",card_assess_sub:"Dipotso di le 10",card_resources:"Didirisiwa",card_resources_sub:"Dikgokagano & thuso",card_help:"Bona thuso jaanong",card_help_sub:"Itsise thuso",card_profile:"Profaele ya me",card_profile_sub:"Dipeelo & moralo",moods:["Tlase","Go siame","Botoka","Thabile"],nav:["Gae","Leba","Didirisiwa","Setšhaba","Itsise"],assess_title:"Tekolo ya EPDS",assess_sub:"Tekanyetso ya Edinburgh ya Phôlô ya Morago ga Pelego",q_of:"Potso {n} ya 10",btn_next:"E e latelang",btn_results:"Bona dipholo tsa me",btn_back:"Morago",result_label:"Palo ya gago ya EPDS",result_means:"Se se kaya eng",result_steps:"Magato a a akantsweng a a latelang",result_btn_alert:"Itsise kgokagano ya me ya thuso",result_btn_resources:"Bona didirisiwa tsa thuso",result_btn_retake:"Tsaya tekolo gape",result_categories:{low:"Kotsi e eseng kwa godimo",mid:"Magareng",high:"Kotsi e phagameng"},result_meanings:{low:"Palo ya gago ga e phagamile. Tswelela go lekola maikutlo a gago letsatsi leng le leng.",mid:"Palo ya gago e bontsha gore o ka nna o na le matshwao a phôlô ya morago ga pelego. Bua le mooki wa bophelo ka bonako.",high:"Palo ya gago e phagame. Ka kopo ikopanye le mooki wa bophelo gompieno."},result_steps_text:{low:"Tswelela go lekola maikutlo letsatsi leng le leng. Abelana palo ya gago le mooki wa gago wa bophelo.",mid:"Bua le setsebi sa bophelo mo malatsing a mmalwa a a latelang.",high:"Ikopanye le mooki wa bophelo gompieno. Dirisa konopo ya Itsisa."},resources_title:"Didirisiwa tsa Thuso",resources_sub:"E fitlhelwa ntle le inthanete",res_tabs:["Tlhaloganya PPD","Didirisiwa","Lelapa & Setshaba","Dinomoro tsa Thuso","Tlhokomelo ya Bophelo"],alert_screen_title:"Itsise kgokagano ya me ya thuso",alert_screen_sub:"Romela molaetsa go mooki wa bophelo kgotsa motho yo o ratwang",send_btn:"Romela itsiso jaanong",send_hint:"E dira ntle le inthanete ka SMS",default_message:"Ke na le mathata a bophelo jwa me jwa kelelo jaanong. Ka kopo tlhokomela gore ke teng. — E romelwa go tswa go Mama Minds",profile_title:"Profaele ya me",plan_label:"Moralo wa jaanong",plan_free:"Motheo (Mahala)",language_label:"Puo",location_label:"Sebaka",offline_label:"Mokgwa wa go se na inthanete",last_assess_label:"Tekolo ya bofelo",delete_data:"Phimola data ya me",upgrade_title:"Mama Minds Plus",upgrade_desc:"Tekolo e e sa lekaneng, go bukhisa sesene sa tele-bophelo, ingxoxo ya mohlophisi wa kelelo. R89/kgwedi kgotsa R799/ngwaga.",upgrade_btn:"Tokafatsa go Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Setšhaba",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},nso:{name:"Sepedi",chip:"NSO",native:"Sepedi",greeting:"Dumela,",offline:"E šoma ntle le inthanete",checkin_label:"Matsatsi go tšwa go tlhatlhobong ya gago ya mafelelo",checkin_hint:"Tšea go hlola maikutlo a gago a lehono",alert_title:"Tsebišša kgokagano ya gago ya thušo",alert_sub:"Fihlela mooki wa bophelo kgotša motho yo o ratwago",mood_label:"O ikutlwa bjang lehono?",tools_label:"Didirišwa le thušo",progress_label:"Katlego ya monaganelo",last_score:"Palo ya gago ya EPDS ya mafelelo",card_assess:"Tlhatlhobo ya EPDS",card_assess_sub:"Dipotšo tše 10",card_resources:"Didirišwa",card_resources_sub:"Dikgokagano & thušo",card_help:"Hwetša thušo bjale",card_help_sub:"Tsebišša thušo",card_profile:"Profaele ya ka",card_profile_sub:"Dipeelo & moralo",moods:["Fase","Go lokile","Botse","Thabile"],nav:["Gae","Lebelela","Didirišwa","Setšhaba","Tsebišša"],assess_title:"Tlhatlhobo ya EPDS",assess_sub:"Tekanyo ya Edinburgh ya Pholo ya Morago ga Tswalo",q_of:"Potšo {n} ya 10",btn_next:"E latelago",btn_results:"Bona diphetho tša ka",btn_back:"Morago",result_label:"Palo ya gago ya EPDS",result_means:"Se se ra eng",result_steps:"Magato a a šišintšwego a a latelago",result_btn_alert:"Tsebišša kgokagano ya ka ya thušo",result_btn_resources:"Bona didirišwa tša thušo",result_btn_retake:"Tšea tlhatlhobo gape",result_categories:{low:"Kotsi ye nnyane",mid:"Gare",high:"Kotsi ye phagameng"},result_meanings:{low:"Palo ya gago ga e phagamile. Tšwela pele go hlola maikutlo a gago ka mehla.",mid:"Palo ya gago e bontšha gore o ka ba le matšhwao a pholo ya morago ga tswalo. Bolela le mooki wa bophelo ka pela.",high:"Palo ya gago e phagame. Hle ikopanye le mooki wa bophelo lehono."},result_steps_text:{low:"Tšwela pele go hlola maikutlo ka mehla. Abelana palo ya gago le mooki wa bophelo.",mid:"Bolela le setsebi sa bophelo ka matšatšing a mmalwa a latelago.",high:"Ikopanye le mooki wa bophelo lehono. Diriša konopo ya Tsebišša."},resources_title:"Didirišwa tša Thušo",resources_sub:"E hwetšagala ntle le inthanete",res_tabs:["Kwešiša PPD","Didirišwa","Leloko & Setšhaba","Dinomoro tša Thušo","Tlhokomelo ya Bophelo"],alert_screen_title:"Tsebišša kgokagano ya ka ya thušo",alert_screen_sub:"Romela molaetsa go mooki wa bophelo kgotša motho yo o ratwago",send_btn:"Romela tsebišo bjale",send_hint:"E šoma ntle le inthanete ka SMS",default_message:"Ke na le mathata a bophelo bja ka bja kelelo bjale. Ka kopo hlola gore ke teng. — E romilwe go tswa go Mama Minds",profile_title:"Profaele ya ka",plan_label:"Moralo wa bjale",plan_free:"Motheo (Mahala)",language_label:"Puo",location_label:"Lefelo",offline_label:"Mokgwa wa go se na inthanete",last_assess_label:"Tlhatlhobo ya mafelelo",delete_data:"Phimola data ya ka",upgrade_title:"Mama Minds Plus",upgrade_desc:"Tlhatlhobo ye sa lekaneng, go bukhisa sesene sa tele-bophelo, ingxoxo ya mohlophisi wa kelelo. R89/kgwedi kgotsa R799/ngwaga.",upgrade_btn:"Eketša go Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Setšhaba",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},ts:{name:"Xitsonga",chip:"TS",native:"Xitsonga",greeting:"Avuxeni,",offline:"Yi tirha handle ka inthanete",checkin_label:"Masiku ku sukela ku hlola ka wena ka makumu",checkin_hint:"Teka ku hlola mimpfumawulo ya loko wa namuntlha",alert_title:"Xivisa nhlangano wa wena wa pfuneto",alert_sub:"Fikelela muhlayisi wa vulavulisi bya miri kumbe munhu wo rhandza",mood_label:"U twisisa njhani namuntlha?",tools_label:"Switirho ni pfuneto",progress_label:"Nhluvuko wa nkarhi lowu hundzeke",last_score:"Ntlawa wa wena wa EPDS wa makumu",card_assess:"Hlelo ra EPDS",card_assess_sub:"Swivutiso swa 10",card_resources:"Switirho",card_resources_sub:"Swilenge & pfuneto",card_help:"Kuma pfuneto sweswi",card_help_sub:"Xivisa pfuneto",card_profile:"Profayili ya mina",card_profile_sub:"Swirho & mupfumelelo",moods:["Ehansi","Ku lulamile","Kahle","Tsakile"],nav:["Kaya","Languta","Switirho","Community","Xivisa"],assess_title:"Hlelo ra EPDS",assess_sub:"Ntlawa wa Edinburgh wa Ku Karhala ka ku Velekela",q_of:"Swivutiso {n} swa 10",btn_next:"Lexi landzelaka",btn_results:"Vona swipfumelo swa mina",btn_back:"Endzhaku",result_label:"Ntlawa wa wena wa EPDS",result_means:"Leswi swi vula yini",result_steps:"Magoza lama ringanyetiweke lama landzelaka",result_btn_alert:"Xivisa nhlangano wa mina wa pfuneto",result_btn_resources:"Languta switirho swa pfuneto",result_btn_retake:"Teka hlelo gape",result_categories:{low:"Xivangelo lexintsongo",mid:"Gare",high:"Xivangelo lexikulu"},result_meanings:{low:"Ntlawa wa wena a wu tlheli eka nkoka. Tshika ku hlola mimpfumawulo ya wena siku na siku.",mid:"Ntlawa wa wena wu kombisa leswaku u nga va na swimelelo swa ku karhala ka ku velekela. Vulavula ni muhlayisi wa vulavulisi bya miri ku nga duri.",high:"Ntlawa wa wena wu tlhela eka nkoka. Kombela u khalakata na muhlayisi wa vulavulisi bya miri namuntlha."},result_steps_text:{low:"Tshika ku hlola mimpfumawulo siku na siku. Avelana ntlawa wa wena ni muhlayisi wa vulavulisi bya miri.",mid:"Vulavula ni xiphukuphuku xa vulavulisi bya miri emisukwini ya malokwana ya landzelaka.",high:"Khalakata na muhlayisi wa vulavulisi bya miri namuntlha. Tirhisa batani ra Xiviselo."},resources_title:"Switirho swa Pfuneto",resources_sub:"Swi kumeka handle ka inthanete",res_tabs:["Twisisa PPD","Switirho","Ndyangu & Xikaya","Tinomboro ta Pfuneto","Vulavulisi bya Miri"],alert_screen_title:"Xivisa nhlangano wa mina wa pfuneto",alert_screen_sub:"Rhumela mhaka eka muhlayisi wa vulavulisi bya miri kumbe munhu wo rhandza",send_btn:"Rhumela xiviselo sweswi",send_hint:"Yi tirha handle ka inthanete hi SMS",default_message:"Ndzi na swiphiqo swa impilo ya mina ya muanakanyo sweswi. Kombela u languta hina. — Yi rhumeleriwe ku tswa eka Mama Minds",profile_title:"Profayili ya mina",plan_label:"Mupfumelelo wa sweswi",plan_free:"Asisekelo (Mahala)",language_label:"Ririmi",location_label:"Ndhawu",offline_label:"Nhlayo ya ku se ri na inthanete",last_assess_label:"Hlelo ra makumu",delete_data:"Susa data ya mina",upgrade_title:"Mama Minds Plus",upgrade_desc:"Hlelo leri nga heriki, ku bukhisa sesene ra tele-miri. R89/tin'weti kumbe R799/lembe.",upgrade_btn:"Engetela eka Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Community",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},ve:{name:"Tshivenḓa",chip:"VE",native:"Tshivenḓa",greeting:"Ndaa,",offline:"I shuma nga nnḓa ha inthanete",checkin_label:"Maḓuvha u bva tshikolo tshau tsha u fhedzela",checkin_hint:"Thatha u ṱoḓulusa mafaro au a ḽino ḓuvha",alert_title:"Taledza nḓivhadzo yau ya u thusa",alert_sub:"Swika kha mushumisi wa mapfurelo kana munna wavho wo fiwaho",mood_label:"No livhana hani ḽino ḓuvha?",tools_label:"Zwipiḓa na u thusa",progress_label:"Mbuyelo wa tshifhinga",last_score:"Pointe yau ya EPDS ya u fhedzela",card_assess:"Ṱoḓuluso ya EPDS",card_assess_sub:"Mbudziso dza 10",card_resources:"Zwithu",card_resources_sub:"Dzimbiisano & u thusa",card_help:"Wana thuso zwino",card_help_sub:"Taledza u thusa",card_profile:"Profhaele yanga",card_profile_sub:"Zwilaedza & ṱhogomelo",moods:["Fhasi","Zwi luga","Zwavhudi","A tshega"],nav:["Hayani","Sedzela","Zwithu","Community","Taledza"],assess_title:"Ṱoḓuluso ya EPDS",assess_sub:"Tekanyo ya Edinburgh ya u Hluwa nga murahu ha u Bebelesa",q_of:"Mbudziso {n} ya 10",btn_next:"Ine ya tevhela",btn_results:"Vhona mvelelo dzanga",btn_back:"Murahu",result_label:"Pointe yau ya EPDS",result_means:"Zwine zwa amba mini",result_steps:"Nḓila dzo humbulwaho dza u tevhela",result_btn_alert:"Taledza nḓivhadzo yanga ya u thusa",result_btn_resources:"Vhona zwithu zwa u thusa",result_btn_retake:"Thatha ṱoḓuluso hafhu",result_categories:{low:"Tshiphiri tshithukhu",mid:"Gare",high:"Tshiphiri tshihulwane"},result_meanings:{low:"Pointe yau a yo phagami. Ṱoḓa u sedzela mafaro au ḽiṅwe na ḽiṅwe ḓuvha.",mid:"Pointe yau i sumbedza uri u nga vha na zwiṅwe zwa u hluwa nga murahu ha u bebelesa. Amba na mushumisi wa mapfurelo.",high:"Pointe yau yo phagama. Nga kha ḓi kwama mushumisi wa mapfurelo ḽino ḓuvha."},result_steps_text:{low:"Ṱoḓa u sedzela mafaro ḽiṅwe na ḽiṅwe ḓuvha. Kovhekanya pointe yau na mushumisi wa mapfurelo.",mid:"Amba na mudzidzisi wa mapfurelo maḓuvha maṅwe na maṅwe a u tevhela.",high:"Kwama mushumisi wa mapfurelo ḽino ḓuvha. Shumisa konopo ya Taleḓza."},resources_title:"Zwithu zwa u Thusa",resources_sub:"Zwi wanala nga nnḓa ha inthanete",res_tabs:["Pfesesa PPD","Zwipiḓa","Muṱa & Lushaka","Tshivhalo tsha Thuso","Ṱhogomelo ya Mapfurelo"],alert_screen_title:"Taledza nḓivhadzo yanga ya u thusa",alert_screen_sub:"Ruma mafhungo kha mushumisi wa mapfurelo kana munna wavho wo fiwaho",send_btn:"Ruma nḓivhadzo zwino",send_hint:"I shuma nga nnḓa ha inthanete nga SMS",default_message:"Ndi na vhuṱungu ha ndeme yanga ya muṱambo zwino. Nga kha ḓi nṱuwa kha ine nda vha yone. — I rumwaho u bva kha Mama Minds",profile_title:"Profhaele yanga",plan_label:"Ṱhogomelo ya zwino",plan_free:"Ḓa u Thoma (Mahala)",language_label:"Luambo",location_label:"Fhethu",offline_label:"Nḓila ya u songo vha na inthanete",last_assess_label:"Ṱoḓuluso ya u fhedzela",delete_data:"Dzima data yanga",upgrade_title:"Mama Minds Plus",upgrade_desc:"Ṱoḓuluso yo nṱhesa, u bukhisa sesene ya tele-mapfurelo. R89/phando kana R799/ṅwaha.",upgrade_btn:"Engedza kha Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Community",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},ss:{name:"siSwati",chip:"SS",native:"siSwati",greeting:"Sawubona,",offline:"Isebenta ngaphandle kwe-inthaneti",checkin_label:"Emalanga kusukela ekulingweni kwakho kwekugcina",checkin_hint:"Tsatsa uhlolo lwemizwa yakho lamuhla",alert_title:"Tsebisa inethiwekhi yakho yekusekela",alert_sub:"Finyelela mosebenti wemphilo noma umuntfu lothandwako",mood_label:"Uzizwa njani lamuhla?",tools_label:"Ticiniselo nelusito",progress_label:"Kuhamba phambili kwamanje",last_score:"Amapointe akho e-EPDS ekugcina",card_assess:"Uhlolisiselo lwe-EPDS",card_assess_sub:"Imibuzo lelishumi",card_resources:"Ticonco",card_resources_sub:"Tikhokelo nelusito",card_help:"Tsatsa lusito manje",card_help_sub:"Tsebisa lusito",card_profile:"Iphrofayili yami",card_profile_sub:"Tilungiselelo nesicelo",moods:["Phansi","Kulungile","Kahle","Ujabule"],nav:["Ekhaya","Hlola","Ticonco","Umphakati","Tsebisa"],assess_title:"Uhlolisiselo lwe-EPDS",assess_sub:"Silinganiso se-Edinburgh sekudzabuka ngemuva kwekubelethwa",q_of:"Umbuzo {n} we-10",btn_next:"Lokulandelako",btn_results:"Bona imiphumela yami",btn_back:"Emuva",result_label:"Amapointe akho e-EPDS",result_means:"Lokhu kusho yini",result_steps:"Tigaba letinconyiwe letilandelako",result_btn_alert:"Tsebisa inethiwekhi yami yekusekela",result_btn_resources:"Buka ticonco tekusekela",result_btn_retake:"Tsatsa uhlolisiselo futsi",result_categories:{low:"Ingoti lencinane",mid:"Phakathi",high:"Ingoti lenkhulu"},result_meanings:{low:"Amapointe akho ase phansi. Tswela phambili ngokullandela imizwa yakho nsuku tonkhe.",mid:"Amapointe akho abonisa kutsi ungase unematfambiselo ekudzabukeni ngemuva kwekubelethwa. Khuluma nalosebentela emaphelo.",high:"Amapointe akho aphezulu. Sicela uxhumane nomhlinzeki wemphilo lamuhla."},result_steps_text:{low:"Tswela phambili ngokullandela imizwa nsuku tonkhe. Abelana namapointe akho nalosebentela emaphelo.",mid:"Khuluma nangchwepheshe wemphilo emalangeni lambalwa lalandelako.",high:"Xhumana nomhlinzeki wemphilo lamuhla. Sebentisa inkinobho yeTsebisa."},resources_title:"Ticonco Tekusekela",resources_sub:"Iyatfolakala ngaphandle kwe-inthaneti",res_tabs:["Ticondvo te-PPD","Ticiniselo","Umndeni & Umphakati","Tinombolo Telusito","Tindlela Tekuphilisa"],alert_screen_title:"Tsebisa inethiwekhi yami yekusekela",alert_screen_sub:"Thumela umyalezo kumhlinzeki wemphilo noma umuntfu lothandwako",send_btn:"Thumela isaziso manje",send_hint:"Isebenta ngaphandle kwe-inthaneti nge-SMS",default_message:"Ngibambe ematfungulo empilo yami yemcondvo njalo. Sicela ujonge ngami. — Kuthunywe ku-Mama Minds",profile_title:"Iphrofayili yami",plan_label:"Isicelo samanje",plan_free:"Isisekelo (Simahla)",language_label:"Lulwimi",location_label:"Indzawo",offline_label:"Imodi yekungabi ne-inthaneti",last_assess_label:"Uhlolisiselo lwekugcina",delete_data:"Susa idatha yami",upgrade_title:"Mama Minds Plus",upgrade_desc:"Uhlolisiselo olungakhawuliwe, ukubhukha ithele-mpilo, ingxoxo yomhleli wengqondo. R89/inyanga noma R799/unyaka.",upgrade_btn:"Khushulelana ku-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Umphakati",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."},nr:{name:"isiNdebele",chip:"NR",native:"isiNdebele",greeting:"Lotjha,",offline:"Isebenza ngaphandle kwe-inthanethi",checkin_label:"Iintsuku kusukela ekulingweni kwakho kwegcina",checkin_hint:"Thabatha uhlolo lwemizwelo yakho lamhlanje",alert_title:"Xwayisa inethiwekhi yakho yekusekelwa",alert_sub:"Fikelela umsizi wezempilo noma umuntu omthandako",mood_label:"Uzizwa njani lamhlanje?",tools_label:"Izinqopho nokusekela",progress_label:"Intlhatlheko yakamuva",last_score:"Amazinga wakho we-EPDS wakamuva",card_assess:"Uhlolisiselo lwe-EPDS",card_assess_sub:"Imibuzo elishumi",card_resources:"Izinsiza",card_resources_sub:"Izikhungo nokusekela",card_help:"Thola usizo manje",card_help_sub:"Xwayisa ukusekela",card_profile:"Iprofayele yami",card_profile_sub:"Izitatimende nehlelo",moods:["Phansi","Kulungile","Kahle","Ujabule"],nav:["Ikhaya","Bheka","Izinsiza","Umphakathi","Xwayisa"],assess_title:"Uhlolisiselo lwe-EPDS",assess_sub:"Isilinganiso se-Edinburgh Sokudabuka Ngemuva Kokuzala",q_of:"Umbuzo {n} we-10",btn_next:"Okulandelayo",btn_results:"Bona imiphumela yami",btn_back:"Emuva",result_label:"Amazinga wakho we-EPDS",result_means:"Lokhu kusho ukuthini",result_steps:"Izinyathelo ezinconyiwe ezilandelayo",result_btn_alert:"Xwayisa inethiwekhi yami yokusekela",result_btn_resources:"Buka izinsiza zokusekela",result_btn_retake:"Phinda ukuhlolwa",result_categories:{low:"Ubungozi obanso",mid:"Phakathi",high:"Ubungozi obukhulu"},result_meanings:{low:"Amazinga wakho ase phansi. Qhubeka nokulandelela imizwelo nsuku zonke.",mid:"Amazinga wakho abonisa ukuthi ungase ube nezimpawu zokudabuka ngemuva kokuzala. Khuluma nochwepheshe wezempilo maduze.",high:"Amazinga wakho aphezulu. Sicela uxhumane nomhlinzeki wezempilo lamhlanje."},result_steps_text:{low:"Qhubeka nokulandelela imizwelo nsuku zonke. Yabelana namazinga nakho nomsizi wezempilo.",mid:"Khuluma nochwepheshe wezempilo ezinsukwini ezimbalwa.",high:"Xhumana nomhlinzeki wezempilo lamhlanje. Sebenzisa inkinobho Yexwayiso."},resources_title:"Izinsiza Zokusekela",resources_sub:"Iyatholakala ngaphandle kwe-inthanethi",res_tabs:["Qonda i-PPD","Izinqopho","Umndeni & Umphakathi","Izinombolo Zosizo","Ezempilo"],alert_screen_title:"Xwayisa inethiwekhi yami yokusekela",alert_screen_sub:"Thumela umyalezo kumhlinzeki wezempilo noma umuntu omthandako",send_btn:"Thumela isixwayiso manje",send_hint:"Isebenza ngaphandle kwe-inthanethi nge-SMS",default_message:"Ngikhathazekile ngezempilo yami yengqondo njengamanje. Ngicela uhlole ukuthi nginjani. — Kuthunywe ku-Mama Minds",profile_title:"Iprofayele yami",plan_label:"Ihlelo lamanje",plan_free:"Isisekelo (Simahla)",language_label:"Ulimi",location_label:"Indawo",offline_label:"Imodi yokukhona ngaphandle kwe-inthanethi",last_assess_label:"Ukuhlolwa okokugcina",delete_data:"Susa idatha yami",upgrade_title:"Mama Minds Plus",upgrade_desc:"Ukuhlolwa okungakhawuliwe, ukubhukha ithele-mpilo, ingxoxo yomhleli wezengqondo. R89/inyanga noma R799/unyaka.",upgrade_btn:"Khushulelana ku-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Umphakathi",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story..."}},g="en",c=[{id:1,text:"I have been able to laugh and see the funny side of things",hint:"As much as I always could",options:["As much as I always could","Not quite so much now","Definitely not so much now","Not at all"],scores:[0,1,2,3],reverse:!1},{id:2,text:"I have looked forward with enjoyment to things",hint:"Think about the past 7 days",options:["As much as I ever did","Rather less than I used to","Definitely less than I used to","Hardly at all"],scores:[0,1,2,3],reverse:!1},{id:3,text:"I have blamed myself unnecessarily when things went wrong",hint:"Think about the past 7 days",options:["No, never","Not very often","Yes, some of the time","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:4,text:"I have been anxious or worried for no good reason",hint:"Think about the past 7 days",options:["No, not at all","Hardly ever","Yes, sometimes","Yes, very often"],scores:[0,1,2,3],reverse:!1},{id:5,text:"I have felt scared or panicky for no good reason",hint:"Think about the past 7 days",options:["No, not at all","No, not much","Yes, sometimes","Yes, quite a lot"],scores:[0,1,2,3],reverse:!1},{id:6,text:"Things have been getting on top of me",hint:"Think about the past 7 days",options:["No, I have been coping as well as ever","No, most of the time I have coped quite well","Yes, sometimes I haven't been coping as well as usual","Yes, most of the time I haven't been able to cope at all"],scores:[0,1,2,3],reverse:!1},{id:7,text:"I have been so unhappy that I have had difficulty sleeping",hint:"Think about the past 7 days",options:["No, not at all","Not very often","Yes, sometimes","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:8,text:"I have felt sad or miserable",hint:"Think about the past 7 days",options:["No, not at all","Not very often","Yes, quite often","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:9,text:"I have been so unhappy that I have been crying",hint:"Think about the past 7 days",options:["No, never","Only occasionally","Yes, quite often","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:10,text:"The thought of harming myself has occurred to me",hint:"This is a private and important question. Your answer is confidential and helps ensure you get the right support.",options:["Never","Hardly ever","Sometimes","Yes, quite often"],scores:[0,1,2,3],reverse:!1,sensitive:!0}],f={low:{min:0,max:8,category:"low",color:"#4A7C59"},mid:{min:9,max:12,category:"mid",color:"#B8860B"},high:{min:13,max:30,category:"high",color:"#C9736A"}};function v(e){return e<=8?"low":e<=12?"mid":"high"}function S(e){const a=v(e);return f[a].color}function x(e){return e.reduce((a,s,i)=>s==null?a:a+c[i].scores[s],0)}const z={understanding:[{id:"what-is-ppd",title:"What is postpartum depression?",offline:!0,open:!0,content:`
        <p>Postpartum depression (PPD) is a medical condition — not a personal failure or weakness. It affects <strong>1 in 5 mothers</strong> in South Africa, and is more common in women facing poverty, lack of support, or difficult circumstances.</p>
        <div class="info-box">PPD is not "baby blues." Baby blues last 2 weeks. PPD can last months and needs care — just like a physical illness.</div>
        <h4>Common symptoms</h4>
        <ul>
          <li>Feeling sad, hopeless, or empty most of the day</li>
          <li>Crying for no clear reason</li>
          <li>Difficulty bonding with your baby</li>
          <li>Feeling like a "bad mother" or blaming yourself</li>
          <li>Loss of appetite or eating too much</li>
          <li>Trouble sleeping even when baby sleeps</li>
          <li>Feeling anxious, irritable, or angry</li>
          <li>Withdrawing from family and friends</li>
          <li>Thoughts of harming yourself or your baby</li>
        </ul>
        <h4>Why does it happen?</h4>
        <p>After birth, oestrogen and progesterone levels drop sharply. This sudden change affects mood. Combined with sleep loss, physical exhaustion, and emotional pressure — especially in communities with limited support — the risk increases significantly.</p>
        <p>In South Africa, additional risk factors include HIV status, gender-based violence, poverty, and distance from healthcare. <strong>You are not to blame.</strong></p>
        <h4>Will I get better?</h4>
        <p>Yes. With the right support, most women recover fully. Treatment includes counselling, peer support groups, and sometimes medication. Many women in communities across Africa have recovered and gone on to thrive as mothers.</p>
      `},{id:"blues-vs-ppd",title:"The difference between PPD and baby blues",offline:!0,open:!1,content:`
        <h4>Baby blues (normal)</h4>
        <ul>
          <li>Starts 2–3 days after birth</li>
          <li>Lasts no more than 2 weeks</li>
          <li>Mild tearfulness, mood swings, anxiety</li>
          <li>Improves on its own with rest and support</li>
        </ul>
        <h4>Postpartum depression (needs care)</h4>
        <ul>
          <li>Can start any time in the first year</li>
          <li>Lasts more than 2 weeks</li>
          <li>Significantly affects daily functioning</li>
          <li>Requires support from a health worker or clinic</li>
        </ul>
        <div class="warning-box">If you are having thoughts of harming yourself or your baby, please contact a health worker or call a helpline today. Help is available.</div>
      `},{id:"ppd-africa",title:"PPD in the African context — you are not alone",offline:!0,open:!1,content:`
        <p>In many African communities, there is pressure to be strong, to celebrate a new baby, and not to show weakness. Admitting you are struggling can feel shameful. But PPD is recognised globally as a medical illness — not a sign of weakness or a failure as a mother or woman.</p>
        <h4>Cultural factors that can increase risk</h4>
        <ul>
          <li>Lack of a partner's support or absent partner</li>
          <li>Extended family pressure and expectations</li>
          <li>Previous trauma, abuse, or loss</li>
          <li>Financial stress and food insecurity</li>
          <li>Difficulty accessing clinics due to distance or transport</li>
        </ul>
        <h4>What helps in our communities</h4>
        <ul>
          <li>Talking to a trusted aunt, neighbour, or church member</li>
          <li>Peer support groups at local clinics</li>
          <li>Community health workers (CHWs) who make home visits</li>
          <li>Traditional healers working alongside clinic staff</li>
        </ul>
        <div class="info-box">Seeking help is not weakness — it is the strongest thing you can do for yourself and your baby.</div>
      `}],coping:[{id:"breathing",title:"4-7-8 breathing exercise",offline:!0,open:!0,content:`
        <p>This exercise calms your nervous system in minutes. You can do it anywhere — sitting, lying down, even nursing your baby.</p>
        <div class="exercise-step"><div class="step-label">Step 1</div><div class="step-text">Sit or lie comfortably. Place one hand on your chest, one on your belly.</div></div>
        <div class="exercise-step"><div class="step-label">Step 2 — Breathe in</div><div class="step-text">Breathe in through your nose slowly for <strong>4 counts</strong>. Feel your belly rise.</div></div>
        <div class="exercise-step"><div class="step-label">Step 3 — Hold</div><div class="step-text">Hold your breath for <strong>7 counts</strong>. Gently. Do not tense your body.</div></div>
        <div class="exercise-step"><div class="step-label">Step 4 — Breathe out</div><div class="step-text">Breathe out slowly through your mouth for <strong>8 counts</strong>. Let all the air out.</div></div>
        <div class="exercise-step"><div class="step-label">Repeat</div><div class="step-text">Do this 4 times in a row. Practice twice a day — morning and night.</div></div>
        <div class="success-box">Many women feel calmer after just one round. Over time, this retrains your body's stress response.</div>
      `},{id:"grounding",title:"Grounding: the 5-4-3-2-1 technique",offline:!0,open:!1,content:`
        <p>When you feel overwhelmed, anxious, or disconnected, this technique brings you back to the present moment. It works immediately.</p>
        <div class="exercise-step"><div class="step-label">5 things</div><div class="step-text">Name 5 things you can <strong>see</strong> around you right now. Look carefully.</div></div>
        <div class="exercise-step"><div class="step-label">4 things</div><div class="step-text">Name 4 things you can <strong>touch</strong>. Feel their texture.</div></div>
        <div class="exercise-step"><div class="step-label">3 things</div><div class="step-text">Name 3 things you can <strong>hear</strong> — even quiet sounds.</div></div>
        <div class="exercise-step"><div class="step-label">2 things</div><div class="step-text">Name 2 things you can <strong>smell</strong>.</div></div>
        <div class="exercise-step"><div class="step-label">1 thing</div><div class="step-text">Name 1 thing you can <strong>taste</strong>.</div></div>
        <div class="success-box">You can do this exercise silently. No one needs to know you are doing it.</div>
      `},{id:"sleep",title:"Sleep & rest strategies for new mothers",offline:!0,open:!1,content:`
        <h4>Why sleep matters for PPD</h4>
        <p>Sleep deprivation worsens depression and anxiety significantly. Even short rest periods help. You do not need to "sleep when the baby sleeps" if that feels impossible — but protecting even 4–5 consecutive hours matters.</p>
        <h4>Practical strategies</h4>
        <ul>
          <li>Ask a family member or neighbour to take the baby for 2–3 hours so you can sleep</li>
          <li>If co-sleeping, take turns with a partner for night feeds</li>
          <li>Keep the sleeping area dark and cool — even a cloth over a window helps</li>
          <li>Reduce screen time (phone) before sleeping — the light keeps your brain awake</li>
          <li>A warm bath or foot soak before bed signals to your body it is time to rest</li>
        </ul>
        <h4>If you cannot sleep even when tired</h4>
        <p>Inability to sleep even when exhausted can be a sign of PPD. Tell your health worker. This is a symptom that can be treated — you do not have to push through alone.</p>
      `},{id:"mood-tracking",title:"Daily mood tracking — why it helps",offline:!0,open:!1,content:`
        <p>Tracking how you feel each day — even just with a simple word or number — helps you and your health worker notice patterns and see your progress.</p>
        <h4>Simple daily check (no writing needed)</h4>
        <ul>
          <li>Once a day, ask yourself: "On a scale of 1–5, how am I feeling?"</li>
          <li>1 = Very bad, 5 = Good</li>
          <li>You can track this in Mama Minds, on paper, or just tell someone you trust</li>
        </ul>
        <h4>Signs you are improving</h4>
        <ul>
          <li>You have more good days than bad</li>
          <li>You feel moments of connection with your baby</li>
          <li>You are eating and sleeping a little better</li>
          <li>Tasks feel slightly less overwhelming</li>
        </ul>
        <div class="info-box">Recovery is not a straight line. A bad day after good days does not mean you are failing. It is part of the process.</div>
      `}],family:[{id:"explain-ppd",title:"How to explain PPD to your family",offline:!0,open:!0,content:`
        <p>It can be hard to tell family members what you are going through, especially if they do not understand PPD or think it is weakness. Here are some ways to start the conversation.</p>
        <h4>What to say</h4>
        <ul>
          <li>"I am not well after having the baby. It is a real illness like malaria or diabetes — it is not in my head."</li>
          <li>"I am not a bad mother. I have a medical condition that makes things very hard right now."</li>
          <li>"I need help with the baby and the house so that I can get better."</li>
          <li>"I have spoken to a health worker / clinic nurse and they confirmed this is real."</li>
        </ul>
        <h4>If your partner doesn't understand</h4>
        <p>Some partners may feel confused, scared, or even dismissive. Ask them to come with you to the clinic so the nurse can explain. Many partners become strong supporters once they understand PPD is a medical condition.</p>
        <h4>What family members can do to help</h4>
        <ul>
          <li>Take care of the baby for a few hours so the mother can rest</li>
          <li>Cook a meal or help with household tasks</li>
          <li>Not judge or pressure the mother to "just be happy"</li>
          <li>Accompany her to clinic visits</li>
          <li>Check in on her daily with a kind message or visit</li>
        </ul>
      `},{id:"peer-support",title:"Peer support — finding other mothers who understand",offline:!0,open:!1,content:`
        <p>Talking to another mother who has experienced PPD can be one of the most healing things you can do. You do not feel so alone. Many clinics and community centres in South Africa run peer support groups.</p>
        <h4>Where to find peer support</h4>
        <ul>
          <li>Ask your community health worker (CHW) about local mother support groups</li>
          <li>Look for postnatal groups at local churches or community halls</li>
          <li>PNDSA (Postnatal Depression Support Association of SA) runs telephone support and groups</li>
          <li>Some clinics have a "Mothers' Corner" where women meet weekly</li>
        </ul>
        <h4>What if there is no group near me?</h4>
        <p>Ask your CHW if a group can be started. Sometimes just 3–4 mothers meeting weekly for tea makes a real difference. You can be the one to start it.</p>
        <div class="info-box">You do not need to share everything. Just being in a room with other mothers who understand can help.</div>
      `},{id:"self-care",title:"Caring for yourself while caring for your baby",offline:!0,open:!1,content:`
        <p>You cannot pour from an empty cup. Caring for yourself is not selfish — it is what allows you to care for your baby.</p>
        <h4>Small daily acts of care</h4>
        <ul>
          <li>Eat at least one proper meal a day — even simple food matters</li>
          <li>Step outside for 10 minutes of fresh air and sunlight</li>
          <li>Wash your face in the morning — small rituals restore a sense of self</li>
          <li>Call or send a message to one person you trust each day</li>
          <li>Allow yourself to accept help without guilt</li>
        </ul>
        <h4>Saying no without guilt</h4>
        <p>If visitors tire you out, it is okay to say "not today." If tasks feel too much, it is okay to leave them. You are not failing — you are conserving energy for recovery.</p>
        <div class="success-box">Every small act of self-care is an act of love for your baby too.</div>
      `}],hotlines:[{id:"sa-hotlines",title:"South Africa — free helplines",offline:!0,open:!0,isCrisis:!0,content:`
        <div class="crisis-banner">
          <strong>In crisis right now?</strong>
          <span>If you are thinking of harming yourself or your baby, please call one of the numbers below immediately. You are not alone and help is available right now.</span>
        </div>
        <div class="hotline-card">
          <div class="hotline-name">SADAG (SA Depression &amp; Anxiety Group)</div>
          <div class="hotline-number">0800 21 22 23</div>
          <div class="hotline-desc">Free · 24 hours · All languages · SMS also available</div>
        </div>
        <div class="hotline-card">
          <div class="hotline-name">Postnatal Depression Support Association (PNDSA)</div>
          <div class="hotline-number">082 882 0072</div>
          <div class="hotline-desc">Specialist PPD support · Monday–Friday 9am–1pm</div>
        </div>
        <div class="hotline-card">
          <div class="hotline-name">Lifeline South Africa</div>
          <div class="hotline-number">0861 322 322</div>
          <div class="hotline-desc">Free · Crisis counselling · Available nationally</div>
        </div>
        <div class="hotline-card">
          <div class="hotline-name">Childline South Africa</div>
          <div class="hotline-number">08000 55 555</div>
          <div class="hotline-desc">Free · For mothers worried about their children's safety</div>
        </div>
        <div class="hotline-card">
          <div class="hotline-name">Gender-Based Violence Command Centre</div>
          <div class="hotline-number">0800 428 428</div>
          <div class="hotline-desc">Free · 24 hours · For women experiencing abuse</div>
        </div>
        <h4 style="margin-top:16px">SMS & WhatsApp support</h4>
        <div class="hotline-card">
          <div class="hotline-name">SADAG SMS Line</div>
          <div class="hotline-number">SMS 31393</div>
          <div class="hotline-desc">If you cannot speak — send a text, someone will respond</div>
        </div>
        <div class="hotline-card">
          <div class="hotline-name">PNDSA WhatsApp</div>
          <div class="hotline-number">WhatsApp: 082 882 0072</div>
          <div class="hotline-desc">Message when you cannot talk</div>
        </div>
        <h4 style="margin-top:16px">Emergency services</h4>
        <div class="hotline-card" style="background:var(--bg-soft)">
          <div class="hotline-name" style="color:var(--text-main)">Emergency services</div>
          <div class="hotline-number" style="color:var(--red-dark)">10177 (Ambulance) · 10111 (Police)</div>
          <div class="hotline-desc" style="color:var(--text-muted)">Go to your nearest public clinic or hospital emergency room if you are in immediate danger</div>
        </div>
      `}],healthcare:[{id:"clinic-visit",title:"What to expect at a PPD clinic visit",offline:!0,open:!0,content:`
        <p>Many women are afraid to go to a clinic because they fear judgment, or that their baby will be taken away. <strong>This will not happen.</strong> Seeking help makes you a good mother — not a dangerous one.</p>
        <h4>What happens at a visit</h4>
        <ul>
          <li>A nurse or health worker will ask you questions about how you feel — similar to this app's EPDS questionnaire</li>
          <li>They may check your blood pressure and general health</li>
          <li>They will talk to you about your support at home</li>
          <li>They will NOT take your baby away unless you or your baby are in immediate danger</li>
          <li>They may refer you to a social worker or counsellor</li>
        </ul>
        <h4>Treatment options available free at public clinics</h4>
        <ul>
          <li>Counselling with a professional nurse or social worker</li>
          <li>Antidepressant medication (safe for breastfeeding)</li>
          <li>Referral to a community health worker for home visits</li>
          <li>Connection to peer support groups</li>
        </ul>
        <div class="info-box">You can bring a trusted person with you — a partner, mother, or friend. You do not have to go alone.</div>
      `},{id:"patient-rights",title:"Your rights as a patient in South Africa",offline:!0,open:!1,content:`
        <p>Under the South African Constitution and the National Health Act, you have the right to:</p>
        <ul>
          <li>Receive emergency healthcare regardless of your ability to pay</li>
          <li>Be treated with dignity and respect at all health facilities</li>
          <li>Have your health information kept confidential</li>
          <li>Give informed consent before any treatment</li>
          <li>Receive healthcare in your own language (you can request an interpreter)</li>
          <li>Make a complaint if you are treated poorly</li>
        </ul>
        <h4>If you have a complaint</h4>
        <p>Contact the Office of Health Standards Compliance (OHSC) or the Health Ombudsman:</p>
        <div class="hotline-card" style="background:var(--bg-soft)">
          <div class="hotline-name" style="color:var(--text-main)">Health Ombudsman</div>
          <div class="hotline-number" style="color:var(--terra)">0800 233 566</div>
          <div class="hotline-desc" style="color:var(--text-muted)">Free · Complaints about public health facilities</div>
        </div>
      `},{id:"care-plan",title:"Downloadable care plan for your health worker",offline:!0,open:!1,content:`
        <p>Bring this information to your next clinic visit to help your nurse or doctor understand your situation.</p>
        <div style="background:var(--bg-soft);border-radius:9px;padding:14px;border:0.5px solid var(--border);font-size:13px;line-height:1.9;margin-bottom:12px">
          <strong>My name:</strong> _______________________<br>
          <strong>Baby's date of birth:</strong> _______________________<br>
          <strong>My EPDS score (from Mama Minds app):</strong> _______________________<br>
          <strong>Main symptoms I experience:</strong> _______________________<br>
          <strong>Support I have at home:</strong> _______________________<br>
          <strong>Things that help me:</strong> _______________________<br>
          <strong>Concerns I want to discuss today:</strong> _______________________
        </div>
        <div class="info-box">You can screenshot this page or share it directly from the Mama Minds app (Plus plan) to send to your health worker before your visit.</div>
        <h4>Medication safety for breastfeeding mothers</h4>
        <p>If your doctor prescribes antidepressants, know that certain medications (like sertraline and paroxetine) have been found safe for breastfeeding. Always confirm with your doctor. Do not stop medication without consulting your health provider first.</p>
      `}]};let o={lang:g,L:u[g],currentQuestion:0,answers:new Array(10).fill(null),lastScore:null,moodHistory:[],userName:"Amara",postpartumRange:null};document.addEventListener("DOMContentLoaded",()=>{T(),b(),I()});function T(){try{const e=localStorage.getItem("mamaminds-state");if(e){const a=JSON.parse(e);o={...o,...a},o.L=u[o.lang]||u[g]}}catch{console.warn("Could not load saved state")}}function d(){try{const e={lang:o.lang,lastScore:o.lastScore,moodHistory:o.moodHistory,userName:o.userName,postpartumRange:o.postpartumRange};localStorage.setItem("mamaminds-state",JSON.stringify(e))}catch{console.warn("Could not save state")}}function I(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./"+"sw.js").catch(()=>{})}function b(){const e=document.getElementById("root");e.innerHTML=P(),G();const a=localStorage.getItem("mamaminds-onboarded"),s=localStorage.getItem("mamaminds-visited"),i=localStorage.getItem("mamaminds-profile-done");a&&s&&i?showScreen("screen-home"):a&&s?showScreen("screen-name"):a?showScreen("screen-lang"):showScreen("screen-welcome")}function P(){return`
<div id="app">
  ${M()}
  ${E()}
  ${$()}
  ${A()}
  ${D()}
  ${L()}
  ${j()}
  ${N()}
  ${C()}
  ${R()}
  ${U()}
</div>`}function M(){return`
<div class="screen" id="screen-welcome">
  <div class="welcome-content">
    <img class="welcome-cover" src="./images/cover-illustration.png"
         alt="Mama Minds — Postpartum Wellness App" width="500" height="500">
    <p class="welcome-tagline">${o.L.welcome_tagline||"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly."}</p>
    <button class="action-btn welcome-btn" onclick="continueFromWelcome()">
      Get started
    </button>
  </div>
</div>`}window.continueFromWelcome=function(){localStorage.setItem("mamaminds-onboarded","1"),showScreen("screen-lang")};function $(){return`
<div class="screen" id="screen-name">
  <div class="onboard-wrap">
    <div class="onboard-progress">
      <div class="onboard-progress-bar">
        <div class="onboard-progress-fill" style="width:50%"></div>
      </div>
      <span class="onboard-step-label">1 of 2</span>
    </div>
    <h2 class="onboard-title">What should we call you?</h2>
    <p class="onboard-sub">Your name stays on your phone — it's never shared.</p>
    <input
      type="text"
      id="name-input"
      class="onboard-input"
      placeholder="Your name"
      maxlength="40"
      autocomplete="off"
      onkeydown="if(event.key==='Enter') submitName()">
    <button class="action-btn onboard-cta" onclick="submitName()">Continue</button>
    <button class="onboard-skip" onclick="skipName()">Skip</button>
  </div>
</div>`}function A(){return`
<div class="screen" id="screen-stage">
  <div class="onboard-wrap">
    <div class="onboard-progress">
      <div class="onboard-progress-bar">
        <div class="onboard-progress-fill" style="width:100%"></div>
      </div>
      <span class="onboard-step-label">2 of 2</span>
    </div>
    <h2 class="onboard-title">How far postpartum are you?</h2>
    <p class="onboard-sub">This helps us tailor your check-ins and resources.</p>
    <div class="range-btns">
      ${[["0-6w","0–6 weeks"],["6w-6m","6 weeks – 6 months"],["6m-12m","6–12 months"],["1y+","Over a year"]].map(([a,s])=>`<button class="range-btn ${o.postpartumRange===a?"selected":""}"
          onclick="selectPostpartumRange('${a}', this)">${s}</button>`).join("")}
    </div>
    <button class="onboard-skip" onclick="skipStage()">Skip this step</button>
  </div>
</div>`}window.submitName=function(){const e=document.getElementById("name-input"),a=e?e.value.trim():"";a&&(o.userName=a,d()),showScreen("screen-stage")};window.skipName=function(){showScreen("screen-stage")};window.selectPostpartumRange=function(e,a){document.querySelectorAll("#screen-stage .range-btn").forEach(s=>s.classList.remove("selected")),a&&a.classList.add("selected"),o.postpartumRange=e,d(),localStorage.setItem("mamaminds-profile-done","1"),b()};window.skipStage=function(){localStorage.setItem("mamaminds-profile-done","1"),b()};function E(){return`
<div class="screen active" id="screen-lang">
  <div class="lang-logo">Mama Minds</div>
  <div class="lang-tagline">Postnatal mental health support</div>
  <div class="lang-prompt">Choose your language / Khetha ulimi lwakho</div>
  <div class="lang-grid">${Object.entries(u).map(([a,s])=>`
    <button class="lang-btn ${a===o.lang?"selected":""}"
      data-lang="${a}" onclick="selectLang(this)">
      ${s.name}
      <span class="native">${s.native}</span>
    </button>
  `).join("")}</div>
  <button class="lang-continue" onclick="continueFromLang()">Continue →</button>
</div>`}function D(){const e=o.L,a=Y(),s=o.lastScore;return`
<div class="screen" id="screen-home">
  <div class="home-hero">
    <div class="hero-row">
      <div>
        <div class="greeting">${K()}</div>
        <div class="hero-name" id="hero-name">${o.userName}</div>
      </div>
      <div class="hero-badges">
        <div class="offline-pill">
          <div class="offline-dot"></div>
          <span id="offline-text">${e.offline}</span>
        </div>
        <button class="lang-chip" onclick="showScreen('screen-lang')" id="lang-chip">
          🌐 ${e.chip}
        </button>
      </div>
    </div>
    <div class="checkin-strip">
      <div>
        <div class="cs-label">${e.checkin_label}</div>
        <div class="cs-hint">${e.checkin_hint}</div>
      </div>
      <div class="cs-days">${a}</div>
    </div>
  </div>

  <div class="scroll-body home-body">
    <div class="alert-banner" onclick="showScreen('screen-alert')">
      ${O("#8B2020")}
      <div class="ab-text">
        <div class="ab-title">${e.alert_title}</div>
        <div class="ab-sub">${e.alert_sub}</div>
      </div>
      ${Q("#A03030")}
    </div>

    <div class="section-label">${e.mood_label}</div>
    <div class="mood-row" id="mood-row">
      ${e.moods.map((i,t)=>`
        <button class="mood-btn" onclick="selectMood(this, ${t})">
          <span class="mood-emoji">${["😔","😐","🙂","😊"][t]}</span>
          <span>${i}</span>
        </button>
      `).join("")}
    </div>

    <div class="section-label">${e.tools_label}</div>
    <div class="card-row">
      <div class="home-card" onclick="showScreen('screen-assess')">
        <div class="card-icon ci-green">${F("#4A7C59")}</div>
        <div class="card-title">${e.card_assess}</div>
        <div class="card-sub">${e.card_assess_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-resources')">
        <div class="card-icon ci-gold">${Z("#8B5A00")}</div>
        <div class="card-title">${e.card_resources}</div>
        <div class="card-sub">${e.card_resources_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-alert')">
        <div class="card-icon ci-rose">${J("#C9736A")}</div>
        <div class="card-title">${e.card_help}</div>
        <div class="card-sub">${e.card_help_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-profile')">
        <div class="card-icon ci-terra">${ee("#8B4513")}</div>
        <div class="card-title">${e.card_profile}</div>
        <div class="card-sub">${e.card_profile_sub}</div>
      </div>
    </div>

    <div class="section-label">${e.progress_label}</div>
    <div class="score-summary">
      <div class="score-row">
        <span class="text-muted text-small">${e.last_score}</span>
        <span style="font-size:12px;font-weight:500;color:var(--sage)">
          ${s!==null?`${s} — ${W(s)}`:"—"}
        </span>
      </div>
      <div class="score-bar">
        <div class="score-fill" style="width:${s!==null?s/30*100:0}%"></div>
      </div>
      <div class="score-ticks">
        <span class="text-muted" style="font-size:10px">0</span>
        <span class="text-muted" style="font-size:10px">30</span>
      </div>
    </div>
    <div style="height:16px"></div>
  </div>

  ${y(0)}
</div>`}function L(){const e=o.L;return`
<div class="screen" id="screen-assess">
  <div class="assess-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${_("#8B4513")}</button>
      <div>
        <h2>${e.assess_title}</h2>
        <p>${e.assess_sub}</p>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" id="progress-fill" style="width:10%"></div>
    </div>
  </div>
  <div class="scroll-body question-area" id="question-area"></div>
  <div class="nav-actions">
    <button class="btn-back" id="btn-back" onclick="prevQuestion()">
      ${e.btn_back}
    </button>
    <button class="btn-next" id="btn-next" onclick="nextQuestion()" disabled>
      ${e.btn_next}
    </button>
  </div>
</div>`}function j(){const e=o.L;return`
<div class="screen" id="screen-result">
  <div class="result-header" id="result-header">
    <div class="result-score-label">${e.result_label}</div>
    <div class="result-score" id="result-score">—</div>
    <div class="result-category" id="result-category">—</div>
  </div>
  <div class="scroll-body result-body">
    <div class="result-card">
      <h3>${e.result_means}</h3>
      <p id="result-meaning"></p>
    </div>
    <div class="result-card">
      <h3>${e.result_steps}</h3>
      <p id="result-steps-text"></p>
    </div>
    <button class="action-btn" onclick="showScreen('screen-alert')" id="r-btn1">
      ${e.result_btn_alert}
    </button>
    <button class="action-btn secondary" onclick="showScreen('screen-resources')" id="r-btn2">
      ${e.result_btn_resources}
    </button>
    <button class="action-btn secondary" onclick="resetAssessment()" id="r-btn3">
      ${e.result_btn_retake}
    </button>
    <p class="result-disclaimer" id="result-disclaimer"></p>
    <div style="height:16px"></div>
  </div>
</div>`}function N(){const e=o.L,a=e.res_tabs,s=["understanding","coping","family","hotlines","healthcare"],i=a.map((n,l)=>`
    <button class="res-tab ${l===0?"active":""}"
      onclick="showResourceTab('${s[l]}', this)">${n}</button>
  `).join(""),t=s.map((n,l)=>`
    <div class="res-content ${l===0?"active":""}" id="tab-${n}">
      ${B(n)}
    </div>
  `).join("");return`
<div class="screen" id="screen-resources">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${_("#8B4513")}</button>
      <div>
        <h2>${e.resources_title}</h2>
        <p>${e.resources_sub}</p>
      </div>
    </div>
  </div>
  <div class="res-tabs" id="res-tabs">${i}</div>
  <div class="scroll-body">${t}</div>
  ${y(2)}
</div>`}function B(e){return(z[e]||[]).map(s=>`
    <div class="res-article">
      <div class="article-header" onclick="toggleArticle(this)">
        <div class="article-title">${s.title}</div>
        ${s.offline?'<span class="article-badge">Offline</span>':""}
      </div>
      <div class="article-body ${s.open?"open":""}">${s.content}</div>
    </div>
  `).join("")}function C(){const e=o.L;return`
<div class="screen" id="screen-community">
  <div class="community-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${_("#4A7C59")}</button>
      <div>
        <h2>${e.community_title||"Community"}</h2>
        <p>${e.community_sub||"Stories from other mothers"}</p>
      </div>
    </div>
  </div>
  <div class="community-invite">
    ${e.community_invite||"Read what other mothers are going through. Sign in to share your own story."}
  </div>
  <div class="scroll-body">
    <div class="community-threads">
      ${H()}
    </div>
  </div>
  <div class="community-post-box">
    <p class="community-post-label">${e.community_sign_in_prompt||"Sign in to join the conversation"}</p>
    <textarea class="community-post-input" disabled rows="2"
      placeholder="${e.community_post_placeholder||"Share your story..."}"></textarea>
    <button class="community-post-btn" disabled>
      ${e.community_sign_in_prompt||"Sign in to join the conversation"}
    </button>
  </div>
  ${y(3)}
</div>`}function H(){return[{author:"Nomsa",location:"Gauteng",text:"Day 23 and I haven't slept more than 2 hours at a stretch. My mother keeps saying it's normal but something feels different. Has anyone else felt this way?",replies:[{author:"Lerato",text:"Yes, I felt exactly this. Please tell your health worker — what you're describing is worth checking out, not just pushing through."},{author:"Thandi",text:"You're not alone. I felt this until week 8. It does lift, especially with support."}]},{author:"Lerato",location:"Limpopo",text:"My EPDS score was 16 last week. I was scared but my CHW came to visit and helped me get a clinic referral. If you've been putting off the assessment because you're scared of what it might show — please take it. Getting help was the best thing I did.",replies:[{author:"Ayanda",text:"Thank you for sharing this. I've been putting it off for weeks. Taking it today."},{author:"Nomvula",text:"This is exactly what I needed to read. So glad you got the support you deserved."},{author:"Community Support",text:"So proud of you, Lerato. Your story will help others take that step too."}]},{author:"Thandi",location:"KwaZulu-Natal",text:"Nine months postpartum and some days I still feel completely disconnected from myself. I love my daughter so much — and I also don't recognise the face in the mirror. I didn't know you could feel both at once.",replies:[{author:"Siphiwe",text:"You can, and it's real. That disconnect doesn't mean you're a bad mother. It means you're going through something hard."},{author:"Kelo",text:"Nine months here too. It comes in waves. Be gentle with yourself."},{author:"Lerato",text:"Both things can be true. You love your baby and you're also not okay. Both are allowed."}]},{author:"Ayanda",location:"Eastern Cape",text:"Started using this app two weeks ago. First time I've ever actually written down how I'm feeling instead of just pushing through. Just wanted to say — it helps.",replies:[{author:"Nomsa",text:"This made me smile. Glad you're here. 🌿"}]}].map(a=>`
    <div class="thread">
      <div class="thread-author">
        <div class="thread-avatar">${a.author[0]}</div>
        <div>
          <div class="thread-author-name">${a.author}</div>
          <div class="thread-location">${a.location}</div>
        </div>
      </div>
      <div class="thread-text">${a.text}</div>
      ${a.replies.length?`
        <div class="thread-replies-label">${a.replies.length} ${a.replies.length===1?"reply":"replies"}</div>
        ${a.replies.map(s=>`
          <div class="thread-reply">
            <div class="thread-reply-author">${s.author}</div>
            <div class="thread-reply-text">${s.text}</div>
          </div>
        `).join("")}
      `:""}
    </div>
  `).join("")}function R(){const e=o.L;return`
<div class="screen" id="screen-alert">
  <div class="alert-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div>
        <h2>${e.alert_screen_title}</h2>
        <p>${e.alert_screen_sub}</p>
      </div>
    </div>
  </div>
  <div class="scroll-body alert-body">
    <div class="section-label">Healthcare providers</div>
    ${p("HW","av-blue","Sister Nomvula (CHW)","Community Health Worker · WhatsApp",!0)}
    ${p("CL","av-rose","Clinic 17 — Soweto","Maternity ward · SMS",!1)}

    <div class="section-label mt-12">Loved ones</div>
    ${p("MK","av-green","Mama Khumalo","Mother · WhatsApp",!0)}
    ${p("TS","av-gold","Thabo Sithole","Partner · SMS",!0)}

    <div class="message-box">
      <label>Message (edit if needed)</label>
      <textarea id="alert-message" rows="3">${e.default_message}</textarea>
    </div>
    <button class="send-alert-btn" id="send-alert-btn" onclick="sendAlert()">
      ${e.send_btn}
    </button>
    <div class="send-hint">${e.send_hint}</div>
    <div style="height:16px"></div>
  </div>
  ${y(4)}
</div>`}function p(e,a,s,i,t){return`
<div class="contact-card">
  <div class="contact-avatar ${a}">${e}</div>
  <div>
    <div class="contact-name">${s}</div>
    <div class="contact-role">${i}</div>
  </div>
  <input type="checkbox" ${t?"checked":""} style="margin-left:auto" />
</div>`}function U(){const e=o.L;return`
<div class="screen" id="screen-profile">
  <div class="profile-header">
    <div style="display:flex;justify-content:flex-start;margin-bottom:8px">
      <button class="back-btn" onclick="showScreen('screen-home')">${_("#8B4513")}</button>
    </div>
    <div class="profile-avatar" id="profile-avatar">${o.userName[0]}</div>
    <div class="profile-name" id="profile-name">${o.userName}</div>
    <div class="profile-sub">Member since January 2025</div>
  </div>
  <div class="scroll-body profile-body">
    <div class="section-label">${e.profile_title}</div>
    <div class="profile-row">
      <span class="profile-label">${e.plan_label}</span>
      <span class="plan-badge">${e.plan_free}</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.language_label}</span>
      <a class="text-link" onclick="showScreen('screen-lang')">${e.name} → Change</a>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.location_label}</span>
      <span class="profile-value">Gauteng, South Africa</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.offline_label}</span>
      <span class="status-green">Enabled</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.last_assess_label}</span>
      <span class="profile-value">${o.lastScore!==null?`Score: ${o.lastScore}`:"—"}</span>
    </div>

    <div class="upgrade-box">
      <h3>${e.upgrade_title}</h3>
      <p>${e.upgrade_desc}</p>
      <button class="upgrade-btn" onclick="handleUpgrade()">${e.upgrade_btn}</button>
    </div>

    <div class="mt-16">
      <div class="section-label">Data & privacy</div>
      <div class="profile-row">
        <span class="profile-label">Data stored on this device</span>
        <span class="status-green">Yes</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Share anonymised data for research</span>
        <span class="profile-value">Off</span>
      </div>
      <div class="profile-row" onclick="confirmDeleteData()" style="cursor:pointer">
        <span class="status-red">${e.delete_data}</span>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
</div>`}function y(e){const a=o.L,s=["screen-home","screen-assess","screen-resources","screen-community","screen-alert"],i=[ae,X,V,se,oe];return`
<div class="bottom-nav">
  ${a.nav.map((t,n)=>`
    <button class="nav-btn ${n===e?"active":""}"
      onclick="showScreen('${s[n]}')">
      ${i[n]("currentColor")}
      <span>${t}</span>
      ${n===4?'<span class="nav-badge">!</span>':""}
    </button>
  `).join("")}
</div>`}window.showScreen=function(e){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));const a=document.getElementById(e);a&&(a.classList.add("active"),a.scrollTop=0),e==="screen-assess"&&renderQuestion()};window.selectLang=function(e){document.querySelectorAll(".lang-btn").forEach(a=>a.classList.remove("selected")),e.classList.add("selected"),o.lang=e.dataset.lang};window.continueFromLang=function(){o.L=u[o.lang]||u[g],localStorage.setItem("mamaminds-visited","1"),d(),b()};window.selectMood=function(e,a){document.querySelectorAll(".mood-btn").forEach(s=>s.classList.remove("selected")),e.classList.add("selected"),o.moodHistory.push({date:new Date().toISOString(),mood:a}),d()};let k=null;window.renderQuestion=function(){const e=c[o.currentQuestion],a=o.L,s=c.length,i=(o.currentQuestion+1)/s*100+"%",t=document.getElementById("progress-fill");t&&(t.style.width=i);const n=document.getElementById("question-area");if(!n)return;n.innerHTML=`
    <div class="q-counter">
      ${(a.q_of||"Question {n} of 10").replace("{n}",o.currentQuestion+1)}
    </div>
    <div class="q-text">${e.text}</div>
    <div class="q-hint">${e.hint}</div>
    <div class="answer-list">
      ${e.options.map((m,h)=>{const w=o.answers[o.currentQuestion]===h;return`
          <button class="answer-opt ${w?"selected":""}" onclick="selectAnswer(${h})">
            <span class="radio-dot">
              ${w?'<span class="radio-dot-inner"></span>':""}
            </span>
            ${m}
          </button>`}).join("")}
    </div>`;const l=document.getElementById("btn-back"),r=document.getElementById("btn-next");l&&(l.style.display=o.currentQuestion===0?"none":""),r&&(r.textContent=o.currentQuestion===s-1?a.btn_results||"See my results":a.btn_next||"Next",r.disabled=o.answers[o.currentQuestion]===null)};window.selectAnswer=function(e){const a=o.currentQuestion===c.length-1,s=o.answers[o.currentQuestion]===null,i=o.answers[o.currentQuestion]!==e;o.answers[o.currentQuestion]=e,renderQuestion(),!a&&(s||i)&&(clearTimeout(k),k=setTimeout(()=>{o.currentQuestion++,renderQuestion()},220))};window.nextQuestion=function(){o.answers[o.currentQuestion]!==null&&(o.currentQuestion<c.length-1?(o.currentQuestion++,renderQuestion()):q())};window.prevQuestion=function(){clearTimeout(k),o.currentQuestion>0&&(o.currentQuestion--,renderQuestion())};window.resetAssessment=function(){o.currentQuestion=0,o.answers=new Array(10).fill(null),showScreen("screen-assess")};function q(){const e=x(o.answers),a=v(e),s=S(e),i=o.L;o.lastScore=e,d();const t=document.getElementById("result-header"),n=document.getElementById("result-score"),l=document.getElementById("result-category"),r=document.getElementById("result-meaning"),m=document.getElementById("result-steps-text");t&&(t.style.background=s),n&&(n.textContent=e),l&&(l.textContent=(i.result_categories||{})[a]||""),r&&(r.textContent=(i.result_meanings||{})[a]||""),m&&(m.textContent=(i.result_steps_text||{})[a]||"");const h=document.getElementById("result-disclaimer");h&&(h.textContent=i.epds_disclaimer||""),showScreen("screen-result")}window.showResourceTab=function(e,a){document.querySelectorAll(".res-content").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".res-tab").forEach(i=>i.classList.remove("active"));const s=document.getElementById("tab-"+e);s&&s.classList.add("active"),a&&a.classList.add("active")};window.toggleArticle=function(e){const a=e.nextElementSibling;a&&a.classList.toggle("open")};window.sendAlert=function(){const e=document.getElementById("send-alert-btn"),a=o.L;e&&(e.textContent="✓ Alert sent",e.classList.add("sent"),e.disabled=!0,setTimeout(()=>{e.textContent=a.send_btn,e.classList.remove("sent"),e.disabled=!1},3500))};window.handleUpgrade=function(){alert(`Mama Minds Plus — Upgrade coming soon!

R89/month · R799/year

Features: Unlimited assessments, tele-health booking, therapist chat, care plan export, priority alerts.`)};window.confirmDeleteData=function(){confirm("Are you sure you want to delete all your data? This cannot be undone.")&&(localStorage.clear(),location.reload())};function K(){const e=o.L;if(e.greetings){const a=new Date().getHours();return a<12?e.greetings.morning:a<17?e.greetings.afternoon:e.greetings.evening}return e.greeting}function Y(){const e=localStorage.getItem("mamaminds-last-checkin");if(!e)return 0;const a=Date.now()-parseInt(e);return Math.floor(a/(1e3*60*60*24))}function W(e){const a=o.L,s=v(e);return(a.result_categories||{})[s]||s}function G(){document.querySelectorAll('[onclick*="screen-assess"]').forEach(e=>{e.addEventListener("click",()=>{localStorage.setItem("mamaminds-last-checkin",Date.now().toString())})})}function _(e){return`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`}function O(e){return`<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`}function Q(e){return`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`}function F(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`}function X(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`}function Z(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`}function V(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`}function J(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`}function ee(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`}function ae(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`}function oe(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`}function se(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`}
