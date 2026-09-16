(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const m={en:{name:"English",chip:"EN",native:"English",greeting:"Good morning,",greetings:{morning:"Good morning,",afternoon:"Good afternoon,",evening:"Good evening,"},checkin_label:"Days since last check-in",checkin_hint:"Take today's mood check",alert_title:"Alert your support network",alert_sub:"Reach a healthcare worker or loved one",mood_label:"How are you feeling today?",tools_label:"Tools & support",progress_label:"Recent progress",last_score:"Last EPDS score",card_assess:"EPDS Assessment",card_assess_sub:"10-question check",card_resources:"Resources",card_resources_sub:"Guides & support",card_help:"Get help now",card_help_sub:"Alert support",card_profile:"My profile",card_profile_sub:"Settings & plan",moods:["Low","Okay","Good","Joyful"],nav:["Home","Check-in","Resources","Community","Alert"],assess_title:"EPDS Assessment",assess_sub:"Edinburgh Postnatal Depression Scale",q_of:"Question {n} of 10",btn_next:"Next",btn_results:"See my results",btn_back:"Back",result_label:"Your EPDS score",result_means:"What this means",result_steps:"Recommended next steps",result_btn_alert:"Alert my support network",result_btn_resources:"View support resources",result_btn_retake:"Take assessment again",result_categories:{low:"Low concern",mid:"Mild to moderate",high:"High concern"},result_meanings:{low:"Your score suggests you may be managing well right now. Continue with daily mood tracking and share your score with your midwife or health worker at your next visit.",mid:"Your score suggests you may be experiencing some symptoms of postnatal depression. This is common and treatable — please speak to a community health worker or clinic nurse soon.",high:"Your score is elevated and suggests you may need additional support right now. Please know this is not your fault — help is available. Reach out to a healthcare provider as soon as possible."},result_steps_text:{low:"Continue daily mood check-ins. Share your score with your health worker at your next visit. Keep using the coping tools in Resources.",mid:"Speak to a CHW or clinic nurse within the next few days. Try the breathing exercises in Resources. Consider joining a peer support group.",high:"Contact a healthcare provider today. Use the Alert button to reach your support network now. You deserve care and support — please do not wait."},resources_title:"Support Resources",resources_sub:"Available offline — no internet needed",resources_howto:"Tap a category tab, then tap any topic to open it.",res_tabs:["Understanding PPD","Coping Tools","Family & Community","Helplines","Healthcare"],alert_screen_title:"Alert my support network",alert_screen_sub:"Send a message to your healthcare provider or loved ones",send_btn:"Send alert now",send_hint:"Works without internet via SMS fallback",alert_sent_label:"✓ Alert sent",default_message:"I'm struggling with my mental health right now. Please check in on me when you can. — Sent from Mama Minds",profile_title:"My profile",plan_label:"Current plan",plan_free:"Basic (Free)",language_label:"Language",location_label:"Location",offline_label:"Offline mode",last_assess_label:"Last assessment",delete_data:"Delete my data",upgrade_title:"Mama Minds Plus",upgrade_desc:"Unlimited assessments, tele-health session booking, private therapist chat, full care plan export, and priority emergency alerts. R89/month or R799/year.",upgrade_btn:"Upgrade to Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Community",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Add phone number",alert_no_number_label:"Select at least one contact and add their phone number first.",alert_contact_name_placeholder:"Contact name",alert_add_contact_label:"+ Add contact",contact_coming_soon_label:"Coming soon",hospital_name_placeholder:"Nearest public hospital",locate_hospital_btn:"📍 Find my nearest hospital",hospital_verify_note:"Please confirm this number yourself before relying on it — we can't guarantee it's current.",geolocation_unsupported:"Location isn't supported on this device — please type your nearest hospital's name yourself.",geolocation_denied:"Couldn't get your location. You can type your nearest public hospital's name yourself below.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Privacy Policy",terms_label:"Terms & Conditions",view_label:"View"},zu:{name:"Zulu",chip:"ZU",native:"isiZulu",greeting:"Sawubona,",offline:"Isebenza ngaphandle kwe-inthanethi",checkin_label:"Izinsuku kusukela ekuhlolweni kwakho",checkin_hint:"Hlola umzwelo wakho namhlanje",alert_title:"Xwayisa inethiwekhi yakho yokusekela",alert_sub:"Shayela umsizi wezempilo noma othandiweyo",mood_label:"Uzizwa kanjani namhlanje?",tools_label:"Amathuluzi & ukusekela",progress_label:"Inqubekela phambili yamanje",last_score:"Amapointi e-EPDS ekugcineni",card_assess:"Ukuhlolwa kwe-EPDS",card_assess_sub:"Imibuzo eyishumi",card_resources:"Izinsiza",card_resources_sub:"Izikhungo & ukusekela",card_help:"Thola usizo manje",card_help_sub:"Xwayisa ukusekela",card_profile:"Iphrofayili yami",card_profile_sub:"Izilungiselelo & iplanhi",moods:["Phansi","Kulungile","Kuhle","Ujabule"],nav:["Ikhaya","Hlola","Izinsiza","Umphakathi","Xwayisa"],assess_title:"Ukuhlolwa kwe-EPDS",assess_sub:"Isilinganiso se-Edinburgh Sokukhathazeka Ngemuva Kokubeletha",q_of:"Umbuzo {n} we-10",btn_next:"Okulandelayo",btn_results:"Bona imiphumela yami",btn_back:"Emuva",result_label:"Amapointi akho e-EPDS",result_means:"Lokhu kusho ukuthini",result_steps:"Izinyathelo ezilandelayo ezihlongoswayo",result_btn_alert:"Xwayisa inethiwekhi yami yokusekela",result_btn_resources:"Buka izinsiza zokusekela",result_btn_retake:"Phinda ukuhlolwa",result_categories:{low:"Ukukhathazeka okuphansi",mid:"Okupakathi",high:"Ukukhathazeka okukhulu"},result_meanings:{low:"Amapointi akho asikho ephezulu. Qhubeka nokullandela imizwelo yakho nsuku zonke futhi wabelane namapointi akho nomsizi wezempilo kwiviziti yakho elandelayo.",mid:"Amapointi akho abonakalisa ukuthi ungase ubekhathazeke ngemuva kokubeletha. Lokhu kuvamile futhi kulashwa — xoxa nochwepheshe wezempilo maduze.",high:"Amapointi akho aphezulu. Ngicela uxhumane nomhlinzeki wezempilo namhlanje. Lokhu akusona isono sakho — usizo luyatholakala."},result_steps_text:{low:"Qhubeka nohlolo lwemizwelo nsuku zonke. Xoxa ngamapointi akho nomsizi wezempilo.",mid:"Xoxa nochwepheshe wezempilo ezinsukwini ezimbalwa. Zama imisebenzi yokuphefumula.",high:"Xhumana nomhlinzeki wezempilo namhlanje. Sebenzisa inkinobho Yexwayiso."},resources_title:"Izinsiza Zokusekela",resources_sub:"Iyatholakala ngaphandle kwe-inthanethi",resources_howto:"Thepha ithebhu yesigaba, bese uthepha noma yisiphi isihloko ukuze uyivule.",res_tabs:["Ukuqonda i-PPD","Amathuluzi","Umndeni & Umphakathi","Izinombolo Zosizo","Ukunakekelwa Kwezempilo"],alert_screen_title:"Xwayisa inethiwekhi yami yokusekela",alert_screen_sub:"Thumela umyalezo kumhlinzeki wezempilo noma othandiweyo",send_btn:"Thumela isixwayiso manje",send_hint:"Isebenza ngaphandle kwe-inthanethi nge-SMS",alert_sent_label:"✓ Isexwayiso sithunyelwe",default_message:"Ngikhathazekile ngezempilo yami yengqondo njengamanje. Ngicela uhlole ukuthi nginjani. — Kuthunywe ku-Mama Minds",profile_title:"Iphrofayili yami",plan_label:"Iplanhi yamanje",plan_free:"Eyisisekelo (Mahhala)",language_label:"Ulimi",location_label:"Indawo",offline_label:"Imodi ye-offline",last_assess_label:"Ukuhlolwa okokugcina",delete_data:"Susa idatha yami",upgrade_title:"Mama Minds Plus",upgrade_desc:"Ukuhlolwa okungakhawuliwe, ukubhukha ithele-mpilo, ingxoxo yomhleli wezengqondo oyimfihlo, nokukhushulwa kohlelo lokukhathalela. R89/inyanga noma R799/unyaka.",upgrade_btn:"Khushulelana ku-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Umphakathi",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Faka inombolo yocingo",alert_no_number_label:"Khetha okungenani umuntu oyedwa bese ufaka inombolo yakhe yocingo.",alert_contact_name_placeholder:"Igama lomuntu oxhumana naye",alert_add_contact_label:"+ Engeza umuntu oxhumana naye",contact_coming_soon_label:"Kuzayo maduze",hospital_name_placeholder:"Isibhedlela esiseduze",locate_hospital_btn:"📍 Thola isibhedlela sami esiseduze",hospital_verify_note:"Sicela uqinisekise le nombolo ngokwakho ngaphambi kokuyithembela — asikwazi ukuqinisekisa ukuthi isesikhathini.",geolocation_unsupported:"Indawo ayisekelwe kule divayisi — sicela ubhale igama lesibhedlela esiseduze ngokwakho.",geolocation_denied:"Asikwazanga ukuthola indawo yakho. Ungabhala igama lesibhedlela esiseduze ngokwakho ngezansi.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Inqubomgomo Yobumfihlo",terms_label:"Imigomo Nemibandela",view_label:"Bheka"},xh:{name:"Xhosa",chip:"XH",native:"isiXhosa",greeting:"Molo,",offline:"Isebenza ngaphandle kwe-intanethi",checkin_label:"Iintsuku ukusukela kucheki lwakho",checkin_hint:"Thabatha ukuzihlola kwakho kwemood namhlanje",alert_title:"Xela unxibelelwano lwakho lwenkxaso",alert_sub:"Fikelela usebenzisi wezempilo okanye umntu omthandayo",mood_label:"Uziva njani namhlanje?",tools_label:"Izixhobo & inkxaso",progress_label:"Inkqubela phambili yakutsha nje",last_score:"Isikolo sakho se-EPDS esidlulileyo",card_assess:"Uvavanyo lwe-EPDS",card_assess_sub:"Imibuzo elishumi",card_resources:"Izixhobo",card_resources_sub:"Izikhokelo & inkxaso",card_help:"Fumana uncedo ngoku",card_help_sub:"Xela inkxaso",card_profile:"Iprofayile yam",card_profile_sub:"Iisetingi & isicwangciso",moods:["Phantsi","Kulungile","Kulungile","Wonelisekile"],nav:["Ikhaya","Jonga","Izixhobo","Uluntu","Xela"],assess_title:"Uvavanyo lwe-EPDS",assess_sub:"Isilinganiso se-Edinburgh sokukhathazeka emva kwe-postpartum",q_of:"Umbuzo {n} we-10",btn_next:"Okulandelayo",btn_results:"Jonga iziphumo zam",btn_back:"Emva",result_label:"Isikolo sakho se-EPDS",result_means:"Oku kuthetha ntoni",result_steps:"Amanyathelo alandelayo acetywayo",result_btn_alert:"Xela unxibelelwano lwam lwenkxaso",result_btn_resources:"Jonga izixhobo zenkxaso",result_btn_retake:"Yenza uvavanyo kwakhona",result_categories:{low:"Uxinzelelo oluncinane",mid:"Phakathi",high:"Uxinzelelo oluphezulu"},result_meanings:{low:"Isikolo sakho asiphezulu. Qhubeka nokulandelela imood yakho yonke imihla.",mid:"Isikolo sakho sibonisa ukuba ungaziva nzima emva kokuzala. Thetha nomsebenzi wezempilo ngokukhawuleza.",high:"Isikolo sakho siphezulu. Nceda uqhagamshelane nomhlinzeki wezempilo namhlanje."},result_steps_text:{low:"Qhubeka nocheki lwemood yonke imihla. Yabelana ngesikolo sakho nomsebenzi wezempilo.",mid:"Thetha nochwepheshe wezempilo kwiiintsuku ezimbalwa. Zama imisebenzi yokuphefumla.",high:"Qhagamshelana nomhlinzeki wezempilo namhlanje. Sebenzisa iqhosha leSilumkiso."},resources_title:"Izixhobo Zenkxaso",resources_sub:"Iyafumaneka ngaphandle kwe-intanethi",resources_howto:"Cofa ithebhu yecandelo, uze ucofe nayiphi na into ukuze uyivule.",res_tabs:["Qonda i-PPD","Izixhobo","Usapho & Uluntu","Iinombolo Zoncedo","Ezempilo"],alert_screen_title:"Xela unxibelelwano lwam lwenkxaso",alert_screen_sub:"Thumela umyalezo kumhlinzeki wezempilo okanye umntu omthandayo",send_btn:"Thumela isaziso ngoku",send_hint:"Isebenza ngaphandle kwe-intanethi nge-SMS",alert_sent_label:"✓ Isaziso sithunyelwe",default_message:"Ndixabana nempilo yam yengqondo ngoku. Nceda undijongele. — Ithunyelwe kwi-Mama Minds",profile_title:"Iprofayile yam",plan_label:"Isicwangciso sangoku",plan_free:"Esisisiseko (Simahla)",language_label:"Ulwimi",location_label:"Indawo",offline_label:"Imowudi ye-offline",last_assess_label:"Uvavanyo lwamva nje",delete_data:"Cima idatha yam",upgrade_title:"Mama Minds Plus",upgrade_desc:"Uvavanyo olungaphelelanga, ukubhukha i-tele-health, ingxoxo yomhleli wengqondo oyimfihlo. R89/inyanga okanye R799/unyaka.",upgrade_btn:"Nyuka uye kwi-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Uluntu",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Faka inombolo yefowuni",alert_no_number_label:"Khetha umntu omnye ubuncinane bese ufaka inombolo yakhe yefowuni.",alert_contact_name_placeholder:"Igama loqhagamshelwano",alert_add_contact_label:"+ Yongeza umntu oqhagamshelwano",contact_coming_soon_label:"Kuza kufika kungekudala",hospital_name_placeholder:"Isibhedlele esikufuphi",locate_hospital_btn:"📍 Fumana isibhedlele esikufuphi nam",hospital_verify_note:"Nceda uqinisekise le nombolo ngokwakho phambi kokuthembela kuyo — asikwazi ukuqinisekisa ukuba isasebenza.",geolocation_unsupported:"Indawo ayixhaswa kwesi sixhobo — nceda ubhale igama lesibhedlele esikufuphi ngokwakho.",geolocation_denied:"Asikwazanga ukufumana indawo yakho. Ungabhala igama lesibhedlele esikufuphi ngokwakho ngezantsi.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Umgaqo-nkqubo Wabucala",terms_label:"Imigaqo Nemiqathango",view_label:"Jonga"},af:{name:"Afrikaans",chip:"AF",native:"Afrikaans",greeting:"Goeie môre,",offline:"Werk sonder internet",checkin_label:"Dae sedert jou laaste inskrywing",checkin_hint:"Doen vandag se gemoedskontrole",alert_title:"Waarsku jou ondersteuningsnetwerk",alert_sub:"Bereik 'n gesondheidswerker of geliefde",mood_label:"Hoe voel jy vandag?",tools_label:"Gereedskap en ondersteuning",progress_label:"Onlangse vordering",last_score:"Laaste EPDS-telling",card_assess:"EPDS-assessering",card_assess_sub:"10 vrae",card_resources:"Hulpbronne",card_resources_sub:"Gidse en ondersteuning",card_help:"Kry nou hulp",card_help_sub:"Waarsku ondersteuning",card_profile:"My profiel",card_profile_sub:"Instellings en plan",moods:["Neerslagtig","Okay","Goed","Bly"],nav:["Tuis","Inskrywing","Hulpbronne","Gemeenskap","Waarsku"],assess_title:"EPDS-assessering",assess_sub:"Edinburgh Postnatale Depressie-skaal",q_of:"Vraag {n} van 10",btn_next:"Volgende",btn_results:"Sien my resultate",btn_back:"Terug",result_label:"Jou EPDS-telling",result_means:"Wat dit beteken",result_steps:"Aanbevole volgende stappe",result_btn_alert:"Waarsku my ondersteuningsnetwerk",result_btn_resources:"Bekyk ondersteuningshulpbronne",result_btn_retake:"Doen assessering weer",result_categories:{low:"Lae risiko",mid:"Matige risiko",high:"Hoë risiko"},result_meanings:{low:"Jou telling dui aan dat jy dalk goed bestuur. Gaan voort met daaglikse stemming-opsporing en deel jou telling met jou gesondheidswerker.",mid:"Jou telling dui aan dat jy moontlik simptome van postnatale depressie ervaar. Dit is behandelbaar — praat binnekort met 'n gesondheidswerker.",high:"Jou telling is hoog. Kontak asseblief 'n gesondheidsverskaffer so gou as moontlik. Jy verdien ondersteuning."},result_steps_text:{low:"Gaan voort met daaglikse gemoedsopsporing. Deel jou telling met jou gesondheidswerker.",mid:"Praat binne die volgende paar dae met 'n gemeenskapsgesondheidswerker.",high:"Kontak 'n gesondheidsverskaffer vandag. Gebruik die waarskuwingsknoppie."},resources_title:"Ondersteuningshulpbronne",resources_sub:"Beskikbaar sonder internet",resources_howto:"Tik op 'n kategorie-oortjie, en tik dan op enige onderwerp om dit oop te maak.",res_tabs:["Verstaan PPD","Hanterings gereedskap","Familie & Gemeenskap","Hulplyne","Gesondheidsorg"],alert_screen_title:"Waarsku my ondersteuningsnetwerk",alert_screen_sub:"Stuur 'n boodskap aan jou gesondheidsorgverskaffer of geliefde",send_btn:"Stuur waarskuwing nou",send_hint:"Werk sonder internet via SMS",alert_sent_label:"✓ Waarskuwing gestuur",default_message:"Ek sukkel tans met my geestesgesondheid. Gaan asseblief na hoe dit met my gaan. — Gestuur van Mama Minds",profile_title:"My profiel",plan_label:"Huidige plan",plan_free:"Basies (Gratis)",language_label:"Taal",location_label:"Ligging",offline_label:"Vanlyn-modus",last_assess_label:"Laaste assessering",delete_data:"Vee my data uit",upgrade_title:"Mama Minds Plus",upgrade_desc:"Onbeperkte assesserings, tele-gesondheid besprekings, privaat terapeut-geselsie. R89/maand of R799/jaar.",upgrade_btn:"Opgradeer na Plus",epds_disclaimer:"Hierdie siftingsinstrument is nie 'n diagnose nie. As jou telling aandui dat jy moontlik postnatale depressie ervaar, praat asseblief met jou gesondheidsorgverskaffer — jy verdien ondersteuning.",welcome_tagline:"Die wêreld het aanbeweeg nadat jy geboorte gegee het. Hier is 'n plek om eerlik met jouself in te skakel.",community_title:"Gemeenskap",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Voeg foonnommer by",alert_no_number_label:"Kies ten minste een kontak en voeg hulle foonnommer by.",alert_contact_name_placeholder:"Kontaknaam",alert_add_contact_label:"+ Voeg kontak by",contact_coming_soon_label:"Binnekort beskikbaar",hospital_name_placeholder:"Naaste openbare hospitaal",locate_hospital_btn:"📍 Vind my naaste hospitaal",hospital_verify_note:"Bevestig asseblief hierdie nommer self voordat jy daarop staatmaak — ons kan nie waarborg dat dit op datum is nie.",geolocation_unsupported:"Ligging word nie op hierdie toestel ondersteun nie — tik asseblief self jou naaste hospitaal se naam in.",geolocation_denied:"Kon nie jou ligging kry nie. Jy kan self jou naaste openbare hospitaal se naam hieronder intik.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Privaatheidsbeleid",terms_label:"Bepalings en Voorwaardes",view_label:"Bekyk"},st:{name:"Sesotho",chip:"ST",native:"Sesotho",greeting:"Lumela,",offline:"E sebetsa ntle le marang-rang",checkin_label:"Matsatsi ho tloha tekong ea hao",checkin_hint:"Nka tekolo ea maikutlo a kajeno",alert_title:"Tsebisa marang-rang a hao a tšehetso",alert_sub:"Fihlella mosebetsi oa tsa bophelo kapa motho oa hao o ratoang",mood_label:"O ikutloa joang kajeno?",tools_label:"Lisebelisoa le tšehetso",progress_label:"Tsoelo-pele ea morao tjena",last_score:"Manane a EPDS a ho qetela",card_assess:"Tekolo ea EPDS",card_assess_sub:"Lipotso tse 10",card_resources:"Mehloli",card_resources_sub:"Likhokahano & tšehetso",card_help:"Fumana thuso joale",card_help_sub:"Tsebisa tšehetso",card_profile:"Profaele ea ka",card_profile_sub:"Litlhophiso & moralo",moods:["Fatše","Ho lokile","Hantle","Thabile"],nav:["Lapeng","Beha leihlo","Mehloli","Sechaba","Tsebisa"],assess_title:"Tekolo ea EPDS",assess_sub:"Tekanyo ea Edinburgh ea Ho Hiloa ka mor'a Tsoalo",q_of:"Potso {n} ea 10",btn_next:"E latelang",btn_results:"Bona liphetho tsa ka",btn_back:"Morao",result_label:"Manane a hao a EPDS",result_means:"Se sena se bolela eng",result_steps:"Mehato e hlokometsoeng e latelang",result_btn_alert:"Tsebisa marang-rang a ka a tšehetso",result_btn_resources:"Sheba mehloli ea tšehetso",result_btn_retake:"Nka tekolo hape",result_categories:{low:"Kotsi e tlase",mid:"Kateng",high:"Kotsi e phahameng"},result_meanings:{low:"Manane a hao ha a phahamang. Tsoela pele ho hlahloba maikutlo a hao letsatsi le leng le le leng.",mid:"Manane a hao a bontša hore o ka ba le matšoao a ho hiloa ha mor'a tsoalo. Bua le mosebetsi oa tsa bophelo kapele.",high:"Manane a hao a phahame. Ka kopo ikopanye le mohaki oa tsa bophelo kajeno."},result_steps_text:{low:"Tsoela pele ho hlahloba maikutlo tsatsi le leng le le leng. Arolelana manane a hao le mosebetsi oa tsa bophelo.",mid:"Bua le chwepheshe oa tsa bophelo matsatsing a mmaloa a latelang.",high:"Ikopanye le mohaki oa tsa bophelo kajeno. Sebelisa konope ea Tsebiso."},resources_title:"Mehloli ea Tšehetso",resources_sub:"E fumaneha ntle le marang-rang",resources_howto:"Tobetsa thebe ea sehlopha, ebe u tobetsa sehlooho leha e le sefe ho se bula.",res_tabs:["Utloa PPD","Lisebelisoa","Lelapa & Sechaba","Linomoro tsa Thuso","Tlhokomelo ea Bophelo"],alert_screen_title:"Tsebisa marang-rang a ka a tšehetso",alert_screen_sub:"Romela molaetsa ho mohaki oa tsa bophelo kapa motho o ratoang",send_btn:"Romela tsebiso joale",send_hint:"E sebetsa ntle le marang-rang ka SMS",alert_sent_label:"✓ Tsebiso e rometswe",default_message:"Ke na le mathata a bophelo ba ka ba kelello hona joale. Ke kopa u hlahlobe hore ke teng. — Ho rometswe ho tsoa ho Mama Minds",profile_title:"Profaele ea ka",plan_label:"Moralo oa hona joale",plan_free:"Motheo (Mahala)",language_label:"Puo",location_label:"Sebaka",offline_label:"Mokhoa oa ho se be marang-rang",last_assess_label:"Tekolo ea ho qetela",delete_data:"Hlakola data ea ka",upgrade_title:"Mama Minds Plus",upgrade_desc:"Tekolo e sa lekaneng, ho bukhisa sesene sa tele-bophelo, ingxoxo ya mohlophisi wa ingqondo. R89/kgwedi kapa R799/selemo.",upgrade_btn:"Eketsa ho Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Sechaba",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Kenya nomoro ea mohala",alert_no_number_label:"Khetha bonyane motho a le mong ebe u kenya nomoro ea hae ea mohala.",alert_contact_name_placeholder:"Lebitso la motho oa ho ikopanya",alert_add_contact_label:"+ Kenya motho oa ho ikopanya",contact_coming_soon_label:"E tla e-ba teng haufinyane",hospital_name_placeholder:"Sepetlele se haufi",locate_hospital_btn:"📍 Fumana sepetlele se haufi le nna",hospital_verify_note:"Ka kopo netefatsa nomoro ena ka boeena pele u e tsepa — ha re khone ho netefatsa hore e sa ntse e sebetsa.",geolocation_unsupported:"Sebaka ha se tshehetsoe sesebelisoang sena — ka kopo ngola lebitso la sepetlele se haufi ka boeena.",geolocation_denied:"Ha rea khona ho fumana sebaka sa hao. U ka ngola lebitso la sepetlele se haufi ka boeena ka tlase.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Leano la Lekunutu",terms_label:"Melao le Maemo",view_label:"Sheba"},tn:{name:"Setswana",chip:"TN",native:"Setswana",greeting:"Dumela,",offline:"E dira ntle le inthanete",checkin_label:"Matsatsi go tswa go lebelo la gago la bofelo",checkin_hint:"Tsaya go lekola maikutlo a gago a letsatsi",alert_title:"Itsise kgokagano ya gago ya thuso",alert_sub:"Fitlhelela mooki wa bophelo kgotsa motho yo o ratwang",mood_label:"O ikutlwa jang gompieno?",tools_label:"Didirisiwa le thuso",progress_label:"Ntlhatloso ya monaganelo",last_score:"Palo ya gago ya EPDS ya bofelo",card_assess:"Tekolo ya EPDS",card_assess_sub:"Dipotso di le 10",card_resources:"Didirisiwa",card_resources_sub:"Dikgokagano & thuso",card_help:"Bona thuso jaanong",card_help_sub:"Itsise thuso",card_profile:"Profaele ya me",card_profile_sub:"Dipeelo & moralo",moods:["Tlase","Go siame","Botoka","Thabile"],nav:["Gae","Leba","Didirisiwa","Setšhaba","Itsise"],assess_title:"Tekolo ya EPDS",assess_sub:"Tekanyetso ya Edinburgh ya Phôlô ya Morago ga Pelego",q_of:"Potso {n} ya 10",btn_next:"E e latelang",btn_results:"Bona dipholo tsa me",btn_back:"Morago",result_label:"Palo ya gago ya EPDS",result_means:"Se se kaya eng",result_steps:"Magato a a akantsweng a a latelang",result_btn_alert:"Itsise kgokagano ya me ya thuso",result_btn_resources:"Bona didirisiwa tsa thuso",result_btn_retake:"Tsaya tekolo gape",result_categories:{low:"Kotsi e eseng kwa godimo",mid:"Magareng",high:"Kotsi e phagameng"},result_meanings:{low:"Palo ya gago ga e phagamile. Tswelela go lekola maikutlo a gago letsatsi leng le leng.",mid:"Palo ya gago e bontsha gore o ka nna o na le matshwao a phôlô ya morago ga pelego. Bua le mooki wa bophelo ka bonako.",high:"Palo ya gago e phagame. Ka kopo ikopanye le mooki wa bophelo gompieno."},result_steps_text:{low:"Tswelela go lekola maikutlo letsatsi leng le leng. Abelana palo ya gago le mooki wa gago wa bophelo.",mid:"Bua le setsebi sa bophelo mo malatsing a mmalwa a a latelang.",high:"Ikopanye le mooki wa bophelo gompieno. Dirisa konopo ya Itsisa."},resources_title:"Didirisiwa tsa Thuso",resources_sub:"E fitlhelwa ntle le inthanete",resources_howto:"Tobetsa thebe ya setlhopha, morago tobetsa setlogo sepe go se bula.",res_tabs:["Tlhaloganya PPD","Didirisiwa","Lelapa & Setshaba","Dinomoro tsa Thuso","Tlhokomelo ya Bophelo"],alert_screen_title:"Itsise kgokagano ya me ya thuso",alert_screen_sub:"Romela molaetsa go mooki wa bophelo kgotsa motho yo o ratwang",send_btn:"Romela itsiso jaanong",send_hint:"E dira ntle le inthanete ka SMS",alert_sent_label:"✓ Itsiso e romilwe",default_message:"Ke na le mathata a bophelo jwa me jwa kelelo jaanong. Ka kopo tlhokomela gore ke teng. — E romelwa go tswa go Mama Minds",profile_title:"Profaele ya me",plan_label:"Moralo wa jaanong",plan_free:"Motheo (Mahala)",language_label:"Puo",location_label:"Sebaka",offline_label:"Mokgwa wa go se na inthanete",last_assess_label:"Tekolo ya bofelo",delete_data:"Phimola data ya me",upgrade_title:"Mama Minds Plus",upgrade_desc:"Tekolo e e sa lekaneng, go bukhisa sesene sa tele-bophelo, ingxoxo ya mohlophisi wa kelelo. R89/kgwedi kgotsa R799/ngwaga.",upgrade_btn:"Tokafatsa go Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Setšhaba",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Tsenya nomoro ya founu",alert_no_number_label:"Tlhopha bonnye motho a le mongwe mme o tsenye nomoro ya gagwe ya founu.",alert_contact_name_placeholder:"Leina la motho yo o ikgolaganyang",alert_add_contact_label:"+ Tsenya motho yo o ikgolaganyang",contact_coming_soon_label:"E tla nna teng go ise go ye kae",hospital_name_placeholder:"Sepetlele se se gaufi",locate_hospital_btn:"📍 Batla sepetlele se se gaufi le nna",hospital_verify_note:"Tsweetswee netefatsa nomoro e ka bowena pele o e ikanya — ga re kgone go netefatsa gore e sa ntse e sebetsa.",geolocation_unsupported:"Lefelo ga le tshegetswe mo setlogolong se — tsweetswee kwala leina la sepetlele se se gaufi ka bowena.",geolocation_denied:"Ga re a kgona go bona lefelo la gago. O ka kwala leina la sepetlele se se gaufi ka bowena kwa tlase.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Molaotheo wa Sephiri",terms_label:"Melawana le Maemo",view_label:"Leba"},nso:{name:"Sepedi",chip:"NSO",native:"Sepedi",greeting:"Dumela,",offline:"E šoma ntle le inthanete",checkin_label:"Matsatsi go tšwa go tlhatlhobong ya gago ya mafelelo",checkin_hint:"Tšea go hlola maikutlo a gago a lehono",alert_title:"Tsebišša kgokagano ya gago ya thušo",alert_sub:"Fihlela mooki wa bophelo kgotša motho yo o ratwago",mood_label:"O ikutlwa bjang lehono?",tools_label:"Didirišwa le thušo",progress_label:"Katlego ya monaganelo",last_score:"Palo ya gago ya EPDS ya mafelelo",card_assess:"Tlhatlhobo ya EPDS",card_assess_sub:"Dipotšo tše 10",card_resources:"Didirišwa",card_resources_sub:"Dikgokagano & thušo",card_help:"Hwetša thušo bjale",card_help_sub:"Tsebišša thušo",card_profile:"Profaele ya ka",card_profile_sub:"Dipeelo & moralo",moods:["Fase","Go lokile","Botse","Thabile"],nav:["Gae","Lebelela","Didirišwa","Setšhaba","Tsebišša"],assess_title:"Tlhatlhobo ya EPDS",assess_sub:"Tekanyo ya Edinburgh ya Pholo ya Morago ga Tswalo",q_of:"Potšo {n} ya 10",btn_next:"E latelago",btn_results:"Bona diphetho tša ka",btn_back:"Morago",result_label:"Palo ya gago ya EPDS",result_means:"Se se ra eng",result_steps:"Magato a a šišintšwego a a latelago",result_btn_alert:"Tsebišša kgokagano ya ka ya thušo",result_btn_resources:"Bona didirišwa tša thušo",result_btn_retake:"Tšea tlhatlhobo gape",result_categories:{low:"Kotsi ye nnyane",mid:"Gare",high:"Kotsi ye phagameng"},result_meanings:{low:"Palo ya gago ga e phagamile. Tšwela pele go hlola maikutlo a gago ka mehla.",mid:"Palo ya gago e bontšha gore o ka ba le matšhwao a pholo ya morago ga tswalo. Bolela le mooki wa bophelo ka pela.",high:"Palo ya gago e phagame. Hle ikopanye le mooki wa bophelo lehono."},result_steps_text:{low:"Tšwela pele go hlola maikutlo ka mehla. Abelana palo ya gago le mooki wa bophelo.",mid:"Bolela le setsebi sa bophelo ka matšatšing a mmalwa a latelago.",high:"Ikopanye le mooki wa bophelo lehono. Diriša konopo ya Tsebišša."},resources_title:"Didirišwa tša Thušo",resources_sub:"E hwetšagala ntle le inthanete",resources_howto:"Kgotla thebe ya sehlopha, ke moka o kgotle sehlogo sefe goba sefe go se bula.",res_tabs:["Kwešiša PPD","Didirišwa","Leloko & Setšhaba","Dinomoro tša Thušo","Tlhokomelo ya Bophelo"],alert_screen_title:"Tsebišša kgokagano ya ka ya thušo",alert_screen_sub:"Romela molaetsa go mooki wa bophelo kgotša motho yo o ratwago",send_btn:"Romela tsebišo bjale",send_hint:"E šoma ntle le inthanete ka SMS",alert_sent_label:"✓ Tsebišo e rometšwe",default_message:"Ke na le mathata a bophelo bja ka bja kelelo bjale. Ka kopo hlola gore ke teng. — E romilwe go tswa go Mama Minds",profile_title:"Profaele ya ka",plan_label:"Moralo wa bjale",plan_free:"Motheo (Mahala)",language_label:"Puo",location_label:"Lefelo",offline_label:"Mokgwa wa go se na inthanete",last_assess_label:"Tlhatlhobo ya mafelelo",delete_data:"Phimola data ya ka",upgrade_title:"Mama Minds Plus",upgrade_desc:"Tlhatlhobo ye sa lekaneng, go bukhisa sesene sa tele-bophelo, ingxoxo ya mohlophisi wa kelelo. R89/kgwedi kgotsa R799/ngwaga.",upgrade_btn:"Eketša go Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Setšhaba",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Tsenya nomoro ya founu",alert_no_number_label:"Kgetha bonyenyane motho o tee gomme o tsenye nomoro ya gagwe ya founu.",alert_contact_name_placeholder:"Leina la motho yo go ikgokaganywago",alert_add_contact_label:"+ Tsenya motho yo go ikgokaganywago",contact_coming_soon_label:"E tla ba gona go se go ye kae",hospital_name_placeholder:"Sepetlele se se kgauswi",locate_hospital_btn:"📍 Hwetša sepetlele se se kgauswi le nna",hospital_verify_note:"Hle kgonthisisa nomoro ye ka bowena pele o e bota — ga re kgone go kgonthisisa gore e sa dutse e soma.",geolocation_unsupported:"Lefelo ga le thekgwe mo sedirisweng se — hle ngwala leina la sepetlele se se kgauswi ka bowena.",geolocation_denied:"Ga se ra kgona go hwetsa lefelo la gago. O ka ngwala leina la sepetlele se se kgauswi ka bowena ka tlase.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Pholisi ya Sephiri",terms_label:"Melao le Maemo",view_label:"Lebelela"},ts:{name:"Xitsonga",chip:"TS",native:"Xitsonga",greeting:"Avuxeni,",offline:"Yi tirha handle ka inthanete",checkin_label:"Masiku ku sukela ku hlola ka wena ka makumu",checkin_hint:"Teka ku hlola mimpfumawulo ya loko wa namuntlha",alert_title:"Xivisa nhlangano wa wena wa pfuneto",alert_sub:"Fikelela muhlayisi wa vulavulisi bya miri kumbe munhu wo rhandza",mood_label:"U twisisa njhani namuntlha?",tools_label:"Switirho ni pfuneto",progress_label:"Nhluvuko wa nkarhi lowu hundzeke",last_score:"Ntlawa wa wena wa EPDS wa makumu",card_assess:"Hlelo ra EPDS",card_assess_sub:"Swivutiso swa 10",card_resources:"Switirho",card_resources_sub:"Swilenge & pfuneto",card_help:"Kuma pfuneto sweswi",card_help_sub:"Xivisa pfuneto",card_profile:"Profayili ya mina",card_profile_sub:"Swirho & mupfumelelo",moods:["Ehansi","Ku lulamile","Kahle","Tsakile"],nav:["Kaya","Languta","Switirho","Community","Xivisa"],assess_title:"Hlelo ra EPDS",assess_sub:"Ntlawa wa Edinburgh wa Ku Karhala ka ku Velekela",q_of:"Swivutiso {n} swa 10",btn_next:"Lexi landzelaka",btn_results:"Vona swipfumelo swa mina",btn_back:"Endzhaku",result_label:"Ntlawa wa wena wa EPDS",result_means:"Leswi swi vula yini",result_steps:"Magoza lama ringanyetiweke lama landzelaka",result_btn_alert:"Xivisa nhlangano wa mina wa pfuneto",result_btn_resources:"Languta switirho swa pfuneto",result_btn_retake:"Teka hlelo gape",result_categories:{low:"Xivangelo lexintsongo",mid:"Gare",high:"Xivangelo lexikulu"},result_meanings:{low:"Ntlawa wa wena a wu tlheli eka nkoka. Tshika ku hlola mimpfumawulo ya wena siku na siku.",mid:"Ntlawa wa wena wu kombisa leswaku u nga va na swimelelo swa ku karhala ka ku velekela. Vulavula ni muhlayisi wa vulavulisi bya miri ku nga duri.",high:"Ntlawa wa wena wu tlhela eka nkoka. Kombela u khalakata na muhlayisi wa vulavulisi bya miri namuntlha."},result_steps_text:{low:"Tshika ku hlola mimpfumawulo siku na siku. Avelana ntlawa wa wena ni muhlayisi wa vulavulisi bya miri.",mid:"Vulavula ni xiphukuphuku xa vulavulisi bya miri emisukwini ya malokwana ya landzelaka.",high:"Khalakata na muhlayisi wa vulavulisi bya miri namuntlha. Tirhisa batani ra Xiviselo."},resources_title:"Switirho swa Pfuneto",resources_sub:"Swi kumeka handle ka inthanete",resources_howto:"Khoma thebhe ya xiyenge, kutani u khoma nhloko-mhaka yihi na yihi ku yi pfula.",res_tabs:["Twisisa PPD","Switirho","Ndyangu & Xikaya","Tinomboro ta Pfuneto","Vulavulisi bya Miri"],alert_screen_title:"Xivisa nhlangano wa mina wa pfuneto",alert_screen_sub:"Rhumela mhaka eka muhlayisi wa vulavulisi bya miri kumbe munhu wo rhandza",send_btn:"Rhumela xiviselo sweswi",send_hint:"Yi tirha handle ka inthanete hi SMS",alert_sent_label:"✓ Xiviselo xi rhumeriwile",default_message:"Ndzi na swiphiqo swa impilo ya mina ya muanakanyo sweswi. Kombela u languta hina. — Yi rhumeleriwe ku tswa eka Mama Minds",profile_title:"Profayili ya mina",plan_label:"Mupfumelelo wa sweswi",plan_free:"Asisekelo (Mahala)",language_label:"Ririmi",location_label:"Ndhawu",offline_label:"Nhlayo ya ku se ri na inthanete",last_assess_label:"Hlelo ra makumu",delete_data:"Susa data ya mina",upgrade_title:"Mama Minds Plus",upgrade_desc:"Hlelo leri nga heriki, ku bukhisa sesene ra tele-miri. R89/tin'weti kumbe R799/lembe.",upgrade_btn:"Engetela eka Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Community",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Nghenisa nomboro ya riqingho",alert_no_number_label:"Hlawula munhu un'we ku antswa u tlhela u nghenisa nomboro ya yena ya riqingho.",alert_contact_name_placeholder:"Vito ra munhu wo fambelana",alert_add_contact_label:"+ Engetela munhu wo fambelana",contact_coming_soon_label:"Yi ta va kona nakambe",hospital_name_placeholder:"Xibedlela lexi tshinelaka",locate_hospital_btn:"📍 Kuma xibedlela lexi tshinelaka na mina",hospital_verify_note:"Kombela u tiyisisa nomboro leyi hi wexe u nga si yi tshemba — a hi swi koti ku tiyisisa leswaku yi ha ri karhi yi tirha.",geolocation_unsupported:"Ndhawu a yi seketeriwi eka xibuyiso lexi — kombela u tsala vito ra xibedlela lexi tshinelaka hi wexe.",geolocation_denied:"A hi kotanga ku kuma ndhawu ya wena. U nga tsala vito ra xibedlela lexi tshinelaka hi wexe laha hansi.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Nawu wa Vusephe",terms_label:"Mimpimanyeto ni Swiyimo",view_label:"Languta"},ve:{name:"Tshivenḓa",chip:"VE",native:"Tshivenḓa",greeting:"Ndaa,",offline:"I shuma nga nnḓa ha inthanete",checkin_label:"Maḓuvha u bva tshikolo tshau tsha u fhedzela",checkin_hint:"Thatha u ṱoḓulusa mafaro au a ḽino ḓuvha",alert_title:"Taledza nḓivhadzo yau ya u thusa",alert_sub:"Swika kha mushumisi wa mapfurelo kana munna wavho wo fiwaho",mood_label:"No livhana hani ḽino ḓuvha?",tools_label:"Zwipiḓa na u thusa",progress_label:"Mbuyelo wa tshifhinga",last_score:"Pointe yau ya EPDS ya u fhedzela",card_assess:"Ṱoḓuluso ya EPDS",card_assess_sub:"Mbudziso dza 10",card_resources:"Zwithu",card_resources_sub:"Dzimbiisano & u thusa",card_help:"Wana thuso zwino",card_help_sub:"Taledza u thusa",card_profile:"Profhaele yanga",card_profile_sub:"Zwilaedza & ṱhogomelo",moods:["Fhasi","Zwi luga","Zwavhudi","A tshega"],nav:["Hayani","Sedzela","Zwithu","Community","Taledza"],assess_title:"Ṱoḓuluso ya EPDS",assess_sub:"Tekanyo ya Edinburgh ya u Hluwa nga murahu ha u Bebelesa",q_of:"Mbudziso {n} ya 10",btn_next:"Ine ya tevhela",btn_results:"Vhona mvelelo dzanga",btn_back:"Murahu",result_label:"Pointe yau ya EPDS",result_means:"Zwine zwa amba mini",result_steps:"Nḓila dzo humbulwaho dza u tevhela",result_btn_alert:"Taledza nḓivhadzo yanga ya u thusa",result_btn_resources:"Vhona zwithu zwa u thusa",result_btn_retake:"Thatha ṱoḓuluso hafhu",result_categories:{low:"Tshiphiri tshithukhu",mid:"Gare",high:"Tshiphiri tshihulwane"},result_meanings:{low:"Pointe yau a yo phagami. Ṱoḓa u sedzela mafaro au ḽiṅwe na ḽiṅwe ḓuvha.",mid:"Pointe yau i sumbedza uri u nga vha na zwiṅwe zwa u hluwa nga murahu ha u bebelesa. Amba na mushumisi wa mapfurelo.",high:"Pointe yau yo phagama. Nga kha ḓi kwama mushumisi wa mapfurelo ḽino ḓuvha."},result_steps_text:{low:"Ṱoḓa u sedzela mafaro ḽiṅwe na ḽiṅwe ḓuvha. Kovhekanya pointe yau na mushumisi wa mapfurelo.",mid:"Amba na mudzidzisi wa mapfurelo maḓuvha maṅwe na maṅwe a u tevhela.",high:"Kwama mushumisi wa mapfurelo ḽino ḓuvha. Shumisa konopo ya Taleḓza."},resources_title:"Zwithu zwa u Thusa",resources_sub:"Zwi wanala nga nnḓa ha inthanete",resources_howto:"Kwama thebe ya tshigwada, nga murahu u kwame tshiṱoho ndi tshifhio na tshifhio u tshi vula.",res_tabs:["Pfesesa PPD","Zwipiḓa","Muṱa & Lushaka","Tshivhalo tsha Thuso","Ṱhogomelo ya Mapfurelo"],alert_screen_title:"Taledza nḓivhadzo yanga ya u thusa",alert_screen_sub:"Ruma mafhungo kha mushumisi wa mapfurelo kana munna wavho wo fiwaho",send_btn:"Ruma nḓivhadzo zwino",send_hint:"I shuma nga nnḓa ha inthanete nga SMS",alert_sent_label:"✓ Nḓivhadzo yo rumelwa",default_message:"Ndi na vhuṱungu ha ndeme yanga ya muṱambo zwino. Nga kha ḓi nṱuwa kha ine nda vha yone. — I rumwaho u bva kha Mama Minds",profile_title:"Profhaele yanga",plan_label:"Ṱhogomelo ya zwino",plan_free:"Ḓa u Thoma (Mahala)",language_label:"Luambo",location_label:"Fhethu",offline_label:"Nḓila ya u songo vha na inthanete",last_assess_label:"Ṱoḓuluso ya u fhedzela",delete_data:"Dzima data yanga",upgrade_title:"Mama Minds Plus",upgrade_desc:"Ṱoḓuluso yo nṱhesa, u bukhisa sesene ya tele-mapfurelo. R89/phando kana R799/ṅwaha.",upgrade_btn:"Engedza kha Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Community",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Ṅwedza nomboro ya luṱingo",alert_no_number_label:"Kha ḓi khethe muthu muthihi u bva fhasi nahone u ṅwedze nomboro yawe ya luṱingo.",alert_contact_name_placeholder:"Dzina la muthu ane na wana khani nae",alert_add_contact_label:"+ Ṅwedza muthu ane na wana khani nae",contact_coming_soon_label:"Zwi ḓo vha hone nga tshifhinga tshi si kule",hospital_name_placeholder:"Tshibvhumela tsha tsini",locate_hospital_btn:"📍 Wana tshibvhumela tsha tsini na nne",hospital_verify_note:"Ni khou humbelwa u ḓivhalela nomboro heyi vhaṋe zwazwo phanḓa u i fulufhela — a ri koni u fulufhedzisa uri i kha di khou shuma.",geolocation_unsupported:"Fhethu ha thonifhwi kha tshishumiswa hetshi — ni khou humbelwa u ṅwala dzina la tshibvhumela tsha tsini nga inwi.",geolocation_denied:"A ri koni u wana fhethu hanu. Ni nga ṅwala dzina la tshibvhumela tsha tsini nga inwi fhasi.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Mulayo wa Tsivhudzo",terms_label:"Milayo na Zwiimo",view_label:"Sedza"},ss:{name:"siSwati",chip:"SS",native:"siSwati",greeting:"Sawubona,",offline:"Isebenta ngaphandle kwe-inthaneti",checkin_label:"Emalanga kusukela ekulingweni kwakho kwekugcina",checkin_hint:"Tsatsa uhlolo lwemizwa yakho lamuhla",alert_title:"Tsebisa inethiwekhi yakho yekusekela",alert_sub:"Finyelela mosebenti wemphilo noma umuntfu lothandwako",mood_label:"Uzizwa njani lamuhla?",tools_label:"Ticiniselo nelusito",progress_label:"Kuhamba phambili kwamanje",last_score:"Amapointe akho e-EPDS ekugcina",card_assess:"Uhlolisiselo lwe-EPDS",card_assess_sub:"Imibuzo lelishumi",card_resources:"Ticonco",card_resources_sub:"Tikhokelo nelusito",card_help:"Tsatsa lusito manje",card_help_sub:"Tsebisa lusito",card_profile:"Iphrofayili yami",card_profile_sub:"Tilungiselelo nesicelo",moods:["Phansi","Kulungile","Kahle","Ujabule"],nav:["Ekhaya","Hlola","Ticonco","Umphakati","Tsebisa"],assess_title:"Uhlolisiselo lwe-EPDS",assess_sub:"Silinganiso se-Edinburgh sekudzabuka ngemuva kwekubelethwa",q_of:"Umbuzo {n} we-10",btn_next:"Lokulandelako",btn_results:"Bona imiphumela yami",btn_back:"Emuva",result_label:"Amapointe akho e-EPDS",result_means:"Lokhu kusho yini",result_steps:"Tigaba letinconyiwe letilandelako",result_btn_alert:"Tsebisa inethiwekhi yami yekusekela",result_btn_resources:"Buka ticonco tekusekela",result_btn_retake:"Tsatsa uhlolisiselo futsi",result_categories:{low:"Ingoti lencinane",mid:"Phakathi",high:"Ingoti lenkhulu"},result_meanings:{low:"Amapointe akho ase phansi. Tswela phambili ngokullandela imizwa yakho nsuku tonkhe.",mid:"Amapointe akho abonisa kutsi ungase unematfambiselo ekudzabukeni ngemuva kwekubelethwa. Khuluma nalosebentela emaphelo.",high:"Amapointe akho aphezulu. Sicela uxhumane nomhlinzeki wemphilo lamuhla."},result_steps_text:{low:"Tswela phambili ngokullandela imizwa nsuku tonkhe. Abelana namapointe akho nalosebentela emaphelo.",mid:"Khuluma nangchwepheshe wemphilo emalangeni lambalwa lalandelako.",high:"Xhumana nomhlinzeki wemphilo lamuhla. Sebentisa inkinobho yeTsebisa."},resources_title:"Ticonco Tekusekela",resources_sub:"Iyatfolakala ngaphandle kwe-inthaneti",resources_howto:"Cindzetela lithebhu lelicijo, bese ucindzetela nome ngukuphi lokutfulwako kute ukuvule.",res_tabs:["Ticondvo te-PPD","Ticiniselo","Umndeni & Umphakati","Tinombolo Telusito","Tindlela Tekuphilisa"],alert_screen_title:"Tsebisa inethiwekhi yami yekusekela",alert_screen_sub:"Thumela umyalezo kumhlinzeki wemphilo noma umuntfu lothandwako",send_btn:"Thumela isaziso manje",send_hint:"Isebenta ngaphandle kwe-inthaneti nge-SMS",alert_sent_label:"✓ Sitjalo sitfunyelwe",default_message:"Ngibambe ematfungulo empilo yami yemcondvo njalo. Sicela ujonge ngami. — Kuthunywe ku-Mama Minds",profile_title:"Iphrofayili yami",plan_label:"Isicelo samanje",plan_free:"Isisekelo (Simahla)",language_label:"Lulwimi",location_label:"Indzawo",offline_label:"Imodi yekungabi ne-inthaneti",last_assess_label:"Uhlolisiselo lwekugcina",delete_data:"Susa idatha yami",upgrade_title:"Mama Minds Plus",upgrade_desc:"Uhlolisiselo olungakhawuliwe, ukubhukha ithele-mpilo, ingxoxo yomhleli wengqondo. R89/inyanga noma R799/unyaka.",upgrade_btn:"Khushulelana ku-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Umphakati",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Faka inombolo yelucingo",alert_no_number_label:"Khetsa umuntfu munye kulokungenani bese ufaka inombolo yakhe yelucingo.",alert_contact_name_placeholder:"Ligama lemuntfu lohlanganyeka naye",alert_add_contact_label:"+ Faka umuntfu lohlanganyeka naye",contact_coming_soon_label:"Kutawuba khona maduze",hospital_name_placeholder:"Sibhedlela lesisedvute",locate_hospital_btn:"📍 Fica sibhedlela lesisedvute nami",hospital_verify_note:"Sicela ucinisekise lenombolo ngekwakho ngembi kwekutsi uyitfembe — asikhoni kucinisekisa kutsi isengasetjentiswa.",geolocation_unsupported:"Indzawo ayisekelwa kulelisistimu — sicela ubhale ligama lesibhedlela lesisedvute ngekwakho.",geolocation_denied:"Asikhonanga kutfola indzawo yakho. Ungabhala ligama lesibhedlela lesisedvute ngekwakho ngentasi.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Inchubomgomo Yebumfihlo",terms_label:"Imigomo Nemibandzela",view_label:"Buka"},nr:{name:"isiNdebele",chip:"NR",native:"isiNdebele",greeting:"Lotjha,",offline:"Isebenza ngaphandle kwe-inthanethi",checkin_label:"Iintsuku kusukela ekulingweni kwakho kwegcina",checkin_hint:"Thabatha uhlolo lwemizwelo yakho lamhlanje",alert_title:"Xwayisa inethiwekhi yakho yekusekelwa",alert_sub:"Fikelela umsizi wezempilo noma umuntu omthandako",mood_label:"Uzizwa njani lamhlanje?",tools_label:"Izinqopho nokusekela",progress_label:"Intlhatlheko yakamuva",last_score:"Amazinga wakho we-EPDS wakamuva",card_assess:"Uhlolisiselo lwe-EPDS",card_assess_sub:"Imibuzo elishumi",card_resources:"Izinsiza",card_resources_sub:"Izikhungo nokusekela",card_help:"Thola usizo manje",card_help_sub:"Xwayisa ukusekela",card_profile:"Iprofayele yami",card_profile_sub:"Izitatimende nehlelo",moods:["Phansi","Kulungile","Kahle","Ujabule"],nav:["Ikhaya","Bheka","Izinsiza","Umphakathi","Xwayisa"],assess_title:"Uhlolisiselo lwe-EPDS",assess_sub:"Isilinganiso se-Edinburgh Sokudabuka Ngemuva Kokuzala",q_of:"Umbuzo {n} we-10",btn_next:"Okulandelayo",btn_results:"Bona imiphumela yami",btn_back:"Emuva",result_label:"Amazinga wakho we-EPDS",result_means:"Lokhu kusho ukuthini",result_steps:"Izinyathelo ezinconyiwe ezilandelayo",result_btn_alert:"Xwayisa inethiwekhi yami yokusekela",result_btn_resources:"Buka izinsiza zokusekela",result_btn_retake:"Phinda ukuhlolwa",result_categories:{low:"Ubungozi obanso",mid:"Phakathi",high:"Ubungozi obukhulu"},result_meanings:{low:"Amazinga wakho ase phansi. Qhubeka nokulandelela imizwelo nsuku zonke.",mid:"Amazinga wakho abonisa ukuthi ungase ube nezimpawu zokudabuka ngemuva kokuzala. Khuluma nochwepheshe wezempilo maduze.",high:"Amazinga wakho aphezulu. Sicela uxhumane nomhlinzeki wezempilo lamhlanje."},result_steps_text:{low:"Qhubeka nokulandelela imizwelo nsuku zonke. Yabelana namazinga nakho nomsizi wezempilo.",mid:"Khuluma nochwepheshe wezempilo ezinsukwini ezimbalwa.",high:"Xhumana nomhlinzeki wezempilo lamhlanje. Sebenzisa inkinobho Yexwayiso."},resources_title:"Izinsiza Zokusekela",resources_sub:"Iyatholakala ngaphandle kwe-inthanethi",resources_howto:"Thintha ithebhu yesigaba, bese uthintha nanyana yini ukuyivula.",res_tabs:["Qonda i-PPD","Izinqopho","Umndeni & Umphakathi","Izinombolo Zosizo","Ezempilo"],alert_screen_title:"Xwayisa inethiwekhi yami yokusekela",alert_screen_sub:"Thumela umyalezo kumhlinzeki wezempilo noma umuntu omthandako",send_btn:"Thumela isixwayiso manje",send_hint:"Isebenza ngaphandle kwe-inthanethi nge-SMS",alert_sent_label:"✓ Isixwayiso sithunyelwe",default_message:"Ngikhathazekile ngezempilo yami yengqondo njengamanje. Ngicela uhlole ukuthi nginjani. — Kuthunywe ku-Mama Minds",profile_title:"Iprofayele yami",plan_label:"Ihlelo lamanje",plan_free:"Isisekelo (Simahla)",language_label:"Ulimi",location_label:"Indawo",offline_label:"Imodi yokukhona ngaphandle kwe-inthanethi",last_assess_label:"Ukuhlolwa okokugcina",delete_data:"Susa idatha yami",upgrade_title:"Mama Minds Plus",upgrade_desc:"Ukuhlolwa okungakhawuliwe, ukubhukha ithele-mpilo, ingxoxo yomhleli wezengqondo. R89/inyanga noma R799/unyaka.",upgrade_btn:"Khushulelana ku-Plus",epds_disclaimer:"This screening tool is not a diagnosis. If your score suggests you may be experiencing postpartum depression, please speak to your healthcare provider — you deserve support.",welcome_tagline:"The world moved on after you gave birth. This is a place to check in — quietly, privately, honestly.",community_title:"Umphakathi",community_sub:"Stories from other mothers",community_invite:"Read what other mothers are going through. Sign in to share your own story.",community_sign_in_prompt:"Sign in to join the conversation",community_post_placeholder:"Share your story...",welcome_btn_label:"Get started",lang_tagline:"Postnatal mental health support",btn_continue:"Continue",onboard_name_title:"What should we call you?",onboard_name_sub:"Your name stays on your phone — it's never shared.",onboard_name_placeholder:"Your name",onboard_skip:"Skip",onboard_skip_step:"Skip this step",onboard_stage_title:"How far postpartum are you?",onboard_stage_sub:"This helps us tailor your check-ins and resources.",onboard_stage_ranges:["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"],alert_providers_label:"Healthcare providers",alert_loved_ones_label:"Loved ones",alert_message_label:"Message (edit if needed)",alert_phone_placeholder:"Faka inombolo yefonu",alert_no_number_label:"Khetha umuntu oyedwa okungenani bese ufaka inombolo yakhe yefonu.",alert_contact_name_placeholder:"Ibizo lomuntu okuthintwana naye",alert_add_contact_label:"+ Faka umuntu okuthintwana naye",contact_coming_soon_label:"Kuzokuba khona maduze",hospital_name_placeholder:"Isibhedlela esiseduze",locate_hospital_btn:"📍 Thola isibhedlela sami esiseduze",hospital_verify_note:"Sicela uqinisekise le nomboro ngokwakho ngaphambi kokuyithembela — asikwazi ukuqinisekisa bona isesikhathini.",geolocation_unsupported:"Indawo ayisekelwa kwelisisebenziso — sicela utlole ibizo lesibhedlela esiseduze ngokwakho.",geolocation_denied:"Asikwazanga ukuthola indawo yakho. Ungatlola ibizo lesibhedlela esiseduze ngokwakho ngezasi.",contact_role_chw:"Community Health Worker · WhatsApp",contact_role_maternity:"Maternity ward · SMS",member_since_label:"Member since",data_privacy_label:"Data & privacy",data_stored_label:"Data stored on this device",yes_label:"Yes",share_data_label:"Share anonymised data for research",off_label:"Off",enabled_label:"Enabled",location_value:"Gauteng, South Africa",community_ask_btn:"Ask a question",community_coming_soon:"Coming soon — we're building this for you",community_replies_label:"{n} replies",privacy_policy_label:"Umthetho Wobumfihlo",terms_label:"Imithetho Neemiqathango",view_label:"Qala"},sw:{name:"Swahili",chip:"SW",native:"Kiswahili",greeting:"Habari za asubuhi,",greetings:{morning:"Habari za asubuhi,",afternoon:"Habari za mchana,",evening:"Habari za jioni,"},checkin_label:"Siku tangu ukaguzi wa mwisho",checkin_hint:"Fanya ukaguzi wa hisia za leo",alert_title:"Onya mtandao wako wa usaidizi",alert_sub:"Wasiliana na mfanyakazi wa afya au mpendwa",mood_label:"Unajisikiaje leo?",tools_label:"Zana na usaidizi",progress_label:"Maendeleo ya hivi karibuni",last_score:"Alama ya mwisho ya EPDS",card_assess:"Tathmini ya EPDS",card_assess_sub:"Ukaguzi wa maswali 10",card_resources:"Rasilimali",card_resources_sub:"Mwongozo na usaidizi",card_help:"Pata msaada sasa",card_help_sub:"Onya usaidizi",card_profile:"Wasifu wangu",card_profile_sub:"Mipangilio na mpango",moods:["Chini","Sawa","Nzuri","Furaha"],nav:["Nyumbani","Ukaguzi","Rasilimali","Jumuiya","Onyo"],assess_title:"Tathmini ya EPDS",assess_sub:"Kipimo cha Edinburgh cha Mfadhaiko wa Baada ya Kuzaa",q_of:"Swali {n} kati ya 10",btn_next:"Endelea",btn_results:"Ona matokeo yangu",btn_back:"Rudi",result_label:"Alama yako ya EPDS",result_means:"Hii inamaanisha nini",result_steps:"Hatua zinazopendekezwa",result_btn_alert:"Onya mtandao wangu wa usaidizi",result_btn_resources:"Angalia rasilimali za usaidizi",result_btn_retake:"Fanya tathmini tena",result_categories:{low:"Wasiwasi mdogo",mid:"Wastani",high:"Wasiwasi mkubwa"},result_meanings:{low:"Alama yako inaonyesha unaweza kuwa unajisimamia vizuri kwa sasa. Endelea kufuatilia hisia zako kila siku na ushiriki alama yako na mkunga au mfanyakazi wa afya katika ziara yako ijayo.",mid:"Alama yako inaonyesha unaweza kuwa na dalili za mfadhaiko wa baada ya kuzaa. Hili ni la kawaida na linaweza kutibiwa — tafadhali zungumza na mfanyakazi wa afya wa jamii au muuguzi wa kliniki hivi karibuni.",high:"Alama yako iko juu na inaonyesha unaweza kuhitaji usaidizi wa ziada sasa hivi. Tafadhali fahamu hii si kosa lako — msaada unapatikana. Wasiliana na mtoa huduma za afya haraka iwezekanavyo."},result_steps_text:{low:"Endelea na ukaguzi wa hisia kila siku. Shiriki alama yako na mfanyakazi wako wa afya katika ziara yako ijayo. Endelea kutumia zana za kukabiliana katika Rasilimali.",mid:"Zungumza na mfanyakazi wa afya wa jamii au muuguzi wa kliniki ndani ya siku chache zijazo. Jaribu mazoezi ya kupumua katika Rasilimali. Fikiria kujiunga na kikundi cha usaidizi wa wenzako.",high:"Wasiliana na mtoa huduma za afya leo. Tumia kitufe cha Onyo kufikia mtandao wako wa usaidizi sasa. Unastahili kupata huduma na msaada — tafadhali usisubiri."},resources_title:"Rasilimali za Usaidizi",resources_sub:"Inapatikana bila mtandao — hakuna intaneti inayohitajika",resources_howto:"Gusa kichupo cha jamii, kisha gusa mada yoyote kuifungua.",res_tabs:["Kuelewa PPD","Zana za Kukabiliana","Familia na Jamii","Nambari za Usaidizi","Huduma za Afya"],alert_screen_title:"Onya mtandao wangu wa usaidizi",alert_screen_sub:"Tuma ujumbe kwa mtoa huduma wako wa afya au wapendwa",send_btn:"Tuma onyo sasa",send_hint:"Inafanya kazi bila intaneti kupitia SMS",alert_sent_label:"✓ Onyo limetumwa",default_message:"Ninapambana na afya yangu ya akili sasa hivi. Tafadhali niangalie unapoweza. — Imetumwa kutoka Mama Minds",profile_title:"Wasifu wangu",plan_label:"Mpango wa sasa",plan_free:"Msingi (Bure)",language_label:"Lugha",location_label:"Mahali",offline_label:"Hali ya nje ya mtandao",last_assess_label:"Tathmini ya mwisho",delete_data:"Futa data yangu",upgrade_title:"Mama Minds Plus",upgrade_desc:"Tathmini zisizo na kikomo, uwekaji miadi wa afya kwa njia ya mtandao, mazungumzo binafsi na mtaalamu, uhamishaji kamili wa mpango wa huduma, na arifa za dharura za kipaumbele. R89/mwezi au R799/mwaka.",upgrade_btn:"Boresha kuwa Plus",epds_disclaimer:"Kifaa hiki cha uchunguzi si utambuzi. Ikiwa alama yako inaonyesha unaweza kuwa na mfadhaiko wa baada ya kuzaa, tafadhali zungumza na mtoa huduma wako wa afya — unastahili msaada.",welcome_tagline:"Dunia iliendelea baada ya wewe kujifungua. Hapa ni mahali pa kujiangalia — kwa utulivu, faragha, na ukweli.",community_title:"Jumuiya",community_sub:"Hadithi kutoka kwa akina mama wengine",community_invite:"Soma yale ambayo akina mama wengine wanapitia. Ingia ili kushiriki hadithi yako mwenyewe.",community_sign_in_prompt:"Ingia ili kujiunga na mazungumzo",community_post_placeholder:"Shiriki hadithi yako...",welcome_btn_label:"Anza",lang_tagline:"Usaidizi wa afya ya akili baada ya kuzaa",btn_continue:"Endelea",onboard_name_title:"Tukuiteje?",onboard_name_sub:"Jina lako linabaki kwenye simu yako — halishirikiwi kamwe.",onboard_name_placeholder:"Jina lako",onboard_skip:"Ruka",onboard_skip_step:"Ruka hatua hii",onboard_stage_title:"Umejifungua muda gani uliopita?",onboard_stage_sub:"Hii inatusaidia kurekebisha ukaguzi na rasilimali zako.",onboard_stage_ranges:["Wiki 0–6","Wiki 6 – Miezi 6","Miezi 6–12","Zaidi ya mwaka"],alert_providers_label:"Watoa huduma za afya",alert_loved_ones_label:"Wapendwa",alert_message_label:"Ujumbe (hariri ikiwa inahitajika)",alert_phone_placeholder:"Ongeza nambari ya simu",alert_no_number_label:"Chagua angalau mtu mmoja na uongeze nambari yake ya simu.",alert_contact_name_placeholder:"Jina la mtu wa kuwasiliana naye",alert_add_contact_label:"+ Ongeza mtu wa kuwasiliana naye",contact_coming_soon_label:"Inakuja hivi karibuni",hospital_name_placeholder:"Hospitali ya karibu ya umma",locate_hospital_btn:"📍 Tafuta hospitali yangu ya karibu",hospital_verify_note:"Tafadhali thibitisha nambari hii mwenyewe kabla ya kuitegemea — hatuwezi kuhakikisha kuwa bado inatumika.",geolocation_unsupported:"Mahali hapatumiki kwenye kifaa hiki — tafadhali andika jina la hospitali yako ya karibu mwenyewe.",geolocation_denied:"Hatukuweza kupata mahali ulipo. Unaweza kuandika jina la hospitali yako ya karibu ya umma mwenyewe hapa chini.",contact_role_chw:"Mfanyakazi wa Afya wa Jamii · WhatsApp",contact_role_maternity:"Wodi ya uzazi · SMS",member_since_label:"Mwanachama tangu",data_privacy_label:"Data na faragha",data_stored_label:"Data imehifadhiwa kwenye kifaa hiki",yes_label:"Ndiyo",share_data_label:"Shiriki data isiyo na jina kwa ajili ya utafiti",off_label:"Imezimwa",enabled_label:"Imewashwa",location_value:"Gauteng, Afrika Kusini",community_ask_btn:"Uliza swali",community_coming_soon:"Inakuja hivi karibuni — tunaijenga kwa ajili yako",community_replies_label:"Majibu {n}",privacy_policy_label:"Sera ya Faragha",terms_label:"Vigezo na Masharti",view_label:"Ona"}},b="en",g=[{id:1,text:"I have been able to laugh and see the funny side of things",hint:"As much as I always could",options:["As much as I always could","Not quite so much now","Definitely not so much now","Not at all"],scores:[0,1,2,3],reverse:!1},{id:2,text:"I have looked forward with enjoyment to things",hint:"Think about the past 7 days",options:["As much as I ever did","Rather less than I used to","Definitely less than I used to","Hardly at all"],scores:[0,1,2,3],reverse:!1},{id:3,text:"I have blamed myself unnecessarily when things went wrong",hint:"Think about the past 7 days",options:["No, never","Not very often","Yes, some of the time","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:4,text:"I have been anxious or worried for no good reason",hint:"Think about the past 7 days",options:["No, not at all","Hardly ever","Yes, sometimes","Yes, very often"],scores:[0,1,2,3],reverse:!1},{id:5,text:"I have felt scared or panicky for no good reason",hint:"Think about the past 7 days",options:["No, not at all","No, not much","Yes, sometimes","Yes, quite a lot"],scores:[0,1,2,3],reverse:!1},{id:6,text:"Things have been getting on top of me",hint:"Think about the past 7 days",options:["No, I have been coping as well as ever","No, most of the time I have coped quite well","Yes, sometimes I haven't been coping as well as usual","Yes, most of the time I haven't been able to cope at all"],scores:[0,1,2,3],reverse:!1},{id:7,text:"I have been so unhappy that I have had difficulty sleeping",hint:"Think about the past 7 days",options:["No, not at all","Not very often","Yes, sometimes","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:8,text:"I have felt sad or miserable",hint:"Think about the past 7 days",options:["No, not at all","Not very often","Yes, quite often","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:9,text:"I have been so unhappy that I have been crying",hint:"Think about the past 7 days",options:["No, never","Only occasionally","Yes, quite often","Yes, most of the time"],scores:[0,1,2,3],reverse:!1},{id:10,text:"The thought of harming myself has occurred to me",hint:"This is a private and important question. Your answer is confidential and helps ensure you get the right support.",options:["Never","Hardly ever","Sometimes","Yes, quite often"],scores:[0,1,2,3],reverse:!1,sensitive:!0}],D={low:{min:0,max:8,category:"low",color:"#4A7C59"},mid:{min:9,max:12,category:"mid",color:"#B8860B"},high:{min:13,max:30,category:"high",color:"#C9736A"}};function y(e){return e<=8?"low":e<=12?"mid":"high"}function L(e){const a=y(e);return D[a].color}function j(e){return e.reduce((a,o,s)=>o==null?a:a+g[s].scores[o],0)}const H={understanding:[{id:"what-is-ppd",title:"What is postpartum depression?",open:!1,content:`
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
      `},{id:"blues-vs-ppd",title:"The difference between PPD and baby blues",open:!1,content:`
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
      `},{id:"ppd-africa",title:"PPD in the African context — you are not alone",open:!1,content:`
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
      `}],coping:[{id:"breathing",title:"4-7-8 breathing exercise",open:!1,content:`
        <p>This exercise calms your nervous system in minutes. You can do it anywhere — sitting, lying down, even nursing your baby.</p>
        <div class="exercise-step"><div class="step-label">Step 1</div><div class="step-text">Sit or lie comfortably. Place one hand on your chest, one on your belly.</div></div>
        <div class="exercise-step"><div class="step-label">Step 2 — Breathe in</div><div class="step-text">Breathe in through your nose slowly for <strong>4 counts</strong>. Feel your belly rise.</div></div>
        <div class="exercise-step"><div class="step-label">Step 3 — Hold</div><div class="step-text">Hold your breath for <strong>7 counts</strong>. Gently. Do not tense your body.</div></div>
        <div class="exercise-step"><div class="step-label">Step 4 — Breathe out</div><div class="step-text">Breathe out slowly through your mouth for <strong>8 counts</strong>. Let all the air out.</div></div>
        <div class="exercise-step"><div class="step-label">Repeat</div><div class="step-text">Do this 4 times in a row. Practice twice a day — morning and night.</div></div>
        <div class="success-box">Many women feel calmer after just one round. Over time, this retrains your body's stress response.</div>
      `},{id:"grounding",title:"Grounding: the 5-4-3-2-1 technique",open:!1,content:`
        <p>When you feel overwhelmed, anxious, or disconnected, this technique brings you back to the present moment. It works immediately.</p>
        <div class="exercise-step"><div class="step-label">5 things</div><div class="step-text">Name 5 things you can <strong>see</strong> around you right now. Look carefully.</div></div>
        <div class="exercise-step"><div class="step-label">4 things</div><div class="step-text">Name 4 things you can <strong>touch</strong>. Feel their texture.</div></div>
        <div class="exercise-step"><div class="step-label">3 things</div><div class="step-text">Name 3 things you can <strong>hear</strong> — even quiet sounds.</div></div>
        <div class="exercise-step"><div class="step-label">2 things</div><div class="step-text">Name 2 things you can <strong>smell</strong>.</div></div>
        <div class="exercise-step"><div class="step-label">1 thing</div><div class="step-text">Name 1 thing you can <strong>taste</strong>.</div></div>
        <div class="success-box">You can do this exercise silently. No one needs to know you are doing it.</div>
      `},{id:"sleep",title:"Sleep & rest strategies for new mothers",open:!1,content:`
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
      `},{id:"mood-tracking",title:"Daily mood tracking — why it helps",open:!1,content:`
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
      `}],family:[{id:"explain-ppd",title:"How to explain PPD to your family",open:!1,content:`
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
      `},{id:"peer-support",title:"Peer support — finding other mothers who understand",open:!1,content:`
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
      `},{id:"self-care",title:"Caring for yourself while caring for your baby",open:!1,content:`
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
      `}],hotlines:[{id:"sa-hotlines",title:"South Africa — free helplines",open:!1,isCrisis:!0,content:`
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
          <div class="hotline-number" style="color:var(--red-on-pale)">10177 (Ambulance) · 10111 (Police)</div>
          <div class="hotline-desc" style="color:var(--text-muted)">Go to your nearest public clinic or hospital emergency room if you are in immediate danger</div>
        </div>
      `}],healthcare:[{id:"clinic-visit",title:"What to expect at a PPD clinic visit",open:!1,content:`
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
      `},{id:"patient-rights",title:"Your rights as a patient in South Africa",open:!1,content:`
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
          <div class="hotline-number" style="color:var(--terra-text)">0800 233 566</div>
          <div class="hotline-desc" style="color:var(--text-muted)">Free · Complaints about public health facilities</div>
        </div>
      `},{id:"care-plan",title:"Downloadable care plan for your health worker",open:!1,content:`
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
      `}]},N=[{name:"Chris Hani Baragwanath Academic Hospital",city:"Soweto, Gauteng",lat:-26.2485,lng:27.9389},{name:"Charlotte Maxeke Johannesburg Academic Hospital",city:"Johannesburg, Gauteng",lat:-26.1875,lng:28.0403},{name:"Steve Biko Academic Hospital",city:"Pretoria, Gauteng",lat:-25.7375,lng:28.1875},{name:"Dr George Mukhari Academic Hospital",city:"Ga-Rankuwa, Gauteng",lat:-25.6136,lng:28.0089},{name:"Groote Schuur Hospital",city:"Cape Town, Western Cape",lat:-33.9425,lng:18.4642},{name:"Tygerberg Hospital",city:"Cape Town, Western Cape",lat:-33.9086,lng:18.6119},{name:"George Provincial Hospital",city:"George, Western Cape",lat:-33.9628,lng:22.4619},{name:"Livingstone Hospital",city:"Gqeberha, Eastern Cape",lat:-33.9167,lng:25.585},{name:"Frere Hospital",city:"East London, Eastern Cape",lat:-32.9833,lng:27.8833},{name:"Grey's Hospital",city:"Pietermaritzburg, KwaZulu-Natal",lat:-29.6006,lng:30.3794},{name:"Inkosi Albert Luthuli Central Hospital",city:"Durban, KwaZulu-Natal",lat:-29.8333,lng:30.9333},{name:"King Edward VIII Hospital",city:"Durban, KwaZulu-Natal",lat:-29.8611,lng:30.9958},{name:"Universitas Academic Hospital",city:"Bloemfontein, Free State",lat:-29.1183,lng:26.2011},{name:"Kimberley Hospital",city:"Kimberley, Northern Cape",lat:-28.7333,lng:24.75},{name:"Rob Ferreira Hospital",city:"Mbombela, Mpumalanga",lat:-25.4667,lng:30.9833},{name:"Mankweng Hospital",city:"Polokwane, Limpopo",lat:-23.8833,lng:29.7333},{name:"Mahikeng Provincial Hospital",city:"Mahikeng, North West",lat:-25.85,lng:25.6333}];let t={lang:b,L:m[b],currentQuestion:0,answers:new Array(10).fill(null),moodHistory:[],userName:"Mama",postpartumRange:null,memberSince:null,scoreHistory:[],contacts:null};document.addEventListener("DOMContentLoaded",()=>{B(),k(),W()});function B(){try{const e=localStorage.getItem("mamaminds-state");if(e){const a=JSON.parse(e);t={...t,...a},t.L=m[t.lang]||m[b],(!t.scoreHistory||t.scoreHistory.length===0)&&a.lastScore!==null&&a.lastScore!==void 0&&(t.scoreHistory=[{score:a.lastScore,date:new Date().toISOString(),postpartumRange:t.postpartumRange}]),delete t.lastScore}}catch{console.warn("Could not load saved state")}}function u(){try{const e={lang:t.lang,scoreHistory:t.scoreHistory,moodHistory:t.moodHistory,userName:t.userName,postpartumRange:t.postpartumRange,memberSince:t.memberSince,contacts:t.contacts};localStorage.setItem("mamaminds-state",JSON.stringify(e))}catch{console.warn("Could not save state")}}function W(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./"+"sw.js").catch(()=>{})}function v(){const e=document.documentElement.getAttribute("data-theme");return e||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function T(e){return e==="dark"?"☀️":"🌙"}window.toggleTheme=function(){const e=v()==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e);try{localStorage.setItem("mamaminds-theme",e)}catch{}const a=document.getElementById("theme-toggle");a&&(a.textContent=T(e),a.setAttribute("aria-label",e==="dark"?"Switch to light mode":"Switch to dark mode"))};function k(){const e=document.getElementById("root");e.innerHTML=q(),pe();const a=localStorage.getItem("mamaminds-onboarded"),o=localStorage.getItem("mamaminds-visited"),s=localStorage.getItem("mamaminds-profile-done");a&&o&&s?showScreen("screen-home"):a&&o?showScreen("screen-name"):a?showScreen("screen-lang"):showScreen("screen-welcome")}function q(){return`
<div id="app">
  ${K()}
  ${Y()}
  ${R()}
  ${U()}
  ${O()}
  ${G()}
  ${F()}
  ${Q()}
  ${Z()}
  ${V()}
  ${ee()}
  ${ie()}
  ${ne()}
  ${le()}
</div>`}function K(){return`
<div class="screen" id="screen-welcome">
  <div class="welcome-content">
    <img class="welcome-cover" src="./images/cover-illustration.png"
         alt="Mama Minds — Postpartum Wellness App" width="500" height="500">
    <p class="welcome-tagline">${t.L.welcome_tagline}</p>
    <button class="action-btn welcome-btn" onclick="continueFromWelcome()">
      ${t.L.welcome_btn_label}
    </button>
  </div>
</div>`}window.continueFromWelcome=function(){localStorage.setItem("mamaminds-onboarded","1"),showScreen("screen-lang")};function R(){return`
<div class="screen" id="screen-name">
  <div class="onboard-wrap">
    <div class="onboard-progress">
      <div class="onboard-progress-bar">
        <div class="onboard-progress-fill" style="width:50%"></div>
      </div>
      <span class="onboard-step-label">1 of 2</span>
    </div>
    <h2 class="onboard-title">${t.L.onboard_name_title}</h2>
    <p class="onboard-sub">${t.L.onboard_name_sub}</p>
    <input
      type="text"
      id="name-input"
      class="onboard-input"
      placeholder="${t.L.onboard_name_placeholder}"
      maxlength="40"
      autocomplete="off"
      oninput="updateNameCounter(this)"
      onkeydown="if(event.key==='Enter') submitName()">
    <div class="onboard-char-count" id="name-char-count"></div>
    <button class="action-btn onboard-cta" onclick="submitName()">${t.L.btn_continue}</button>
    <button class="onboard-skip" onclick="skipName()">${t.L.onboard_skip}</button>
  </div>
</div>`}function U(){const e=t.L,a=["0-6w","6w-6m","6m-12m","1y+"],o=e.onboard_stage_ranges||["0–6 weeks","6 weeks – 6 months","6–12 months","Over a year"];return`
<div class="screen" id="screen-stage">
  <div class="onboard-wrap">
    <div class="onboard-progress">
      <div class="onboard-progress-bar">
        <div class="onboard-progress-fill" style="width:100%"></div>
      </div>
      <span class="onboard-step-label">2 of 2</span>
    </div>
    <h2 class="onboard-title">${e.onboard_stage_title}</h2>
    <p class="onboard-sub">${e.onboard_stage_sub}</p>
    <div class="range-btns">
      ${a.map((s,i)=>`<button class="range-btn ${t.postpartumRange===s?"selected":""}"
          onclick="selectPostpartumRange('${s}', this)">${o[i]}</button>`).join("")}
    </div>
    <button class="onboard-skip" onclick="skipStage()">${e.onboard_skip_step}</button>
  </div>
</div>`}window.updateNameCounter=function(e){const a=document.getElementById("name-char-count");if(!a)return;const o=e.value.length;a.textContent=o>=30?`${o}/40`:""};window.submitName=function(){const e=document.getElementById("name-input"),a=e?e.value.trim():"";a&&(t.userName=a,u()),showScreen("screen-stage")};window.skipName=function(){showScreen("screen-stage")};window.selectPostpartumRange=function(e,a){document.querySelectorAll("#screen-stage .range-btn").forEach(o=>o.classList.remove("selected")),a&&a.classList.add("selected"),t.postpartumRange=e,C(),k()};window.skipStage=function(){C(),k()};function Y(){const e=Object.entries(m).map(([a,o])=>`
    <button class="lang-btn ${a===t.lang?"selected":""}"
      data-lang="${a}" onclick="selectLang(this)">
      ${o.name}
      <span class="native">${o.native}</span>
    </button>
  `).join("");return`
<div class="screen active" id="screen-lang">
  <div class="lang-logo">Mama Minds</div>
  <div class="lang-tagline">${t.L.lang_tagline}</div>
  <div class="lang-prompt">Choose your language / Khetha ulimi lwakho</div>
  <div class="lang-grid">${e}</div>
  <button class="lang-continue" onclick="continueFromLang()">${t.L.btn_continue} →</button>
</div>`}function O(){const e=t.L,a=de(),o=t.scoreHistory.slice(-3).reverse();return`
<div class="screen" id="screen-home">
  <div class="home-hero">
    <div class="hero-row">
      <div>
        <div class="greeting">${ce()}</div>
        <div class="hero-name" id="hero-name">${t.userName}</div>
      </div>
      <div class="hero-badges">
        <button class="theme-toggle-btn" onclick="toggleTheme()" id="theme-toggle"
          aria-label="${v()==="dark"?"Switch to light mode":"Switch to dark mode"}">${T(v())}</button>
        <button class="lang-chip" onclick="showScreen('screen-lang')" id="lang-chip">
          🌐 ${e.chip}
        </button>
      </div>
    </div>
    <button class="checkin-strip" onclick="showScreen('screen-assess')">
      <div>
        <div class="cs-label">${e.checkin_label}</div>
        <div class="cs-hint">${e.checkin_hint}</div>
      </div>
      <div class="cs-right">
        <div class="cs-days">${a}</div>
        ${z("rgba(255,255,255,0.85)")}
      </div>
    </button>
  </div>

  <div class="scroll-body home-body">
    <div class="alert-banner" onclick="showScreen('screen-alert')">
      ${_e("var(--red-on-pale)")}
      <div class="ab-text">
        <div class="ab-title">${e.alert_title}</div>
        <div class="ab-sub">${e.alert_sub}</div>
      </div>
      ${z("var(--red-soft-on-pale)")}
    </div>

    <div class="section-label">${e.mood_label}</div>
    <div class="mood-row" id="mood-row">
      ${e.moods.map((s,i)=>`
        <button class="mood-btn" onclick="selectMood(this, ${i})">
          <span class="mood-emoji">${["😔","😐","🙂","😊"][i]}</span>
          <span>${s}</span>
        </button>
      `).join("")}
    </div>

    <div class="section-label">${e.tools_label}</div>
    <div class="card-row">
      <div class="home-card" onclick="showScreen('screen-assess')">
        <div class="card-icon ci-green">${ge("#4A7C59")}</div>
        <div class="card-title">${e.card_assess}</div>
        <div class="card-sub">${e.card_assess_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-resources')">
        <div class="card-icon ci-gold">${ye("var(--gold-on-pale)")}</div>
        <div class="card-title">${e.card_resources}</div>
        <div class="card-sub">${e.card_resources_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-alert')">
        <div class="card-icon ci-rose">${we("#C9736A")}</div>
        <div class="card-title">${e.card_help}</div>
        <div class="card-sub">${e.card_help_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-profile')">
        <div class="card-icon ci-terra">${E("var(--terra-text)")}</div>
        <div class="card-title">${e.card_profile}</div>
        <div class="card-sub">${e.card_profile_sub}</div>
      </div>
    </div>

    <div class="section-label">${e.progress_label}</div>
    <div class="score-summary">
      ${o.length>1?`
      <div class="score-tabs" id="score-tabs">
        ${o.map((s,i)=>`
          <button class="score-tab ${i===0?"active":""}" onclick="showScoreTab(${i}, this)">${A(s.date)}</button>
        `).join("")}
      </div>`:""}
      <div id="score-tab-content">${P(o[0]||null)}</div>
    </div>
    <div style="height:16px"></div>
  </div>

  ${w(0)}
</div>`}function P(e){const a=t.L,o=e?e.score:null;return`
    <div class="score-row">
      <span class="text-muted text-small">${a.last_score}</span>
      <span style="font-size:12px;font-weight:500;color:var(--sage-text)">
        ${o!==null?`${o} — ${me(o)}`:"—"}
      </span>
    </div>
    <div class="score-bar">
      <div class="score-fill" style="width:${o!==null?o/30*100:0}%"></div>
    </div>
    <div class="score-ticks">
      <span class="text-muted" style="font-size:10px">0</span>
      <span class="text-muted" style="font-size:10px">30</span>
    </div>`}window.showScoreTab=function(e,a){const s=t.scoreHistory.slice(-3).reverse()[e];if(!s)return;document.querySelectorAll("#score-tabs .score-tab").forEach(n=>n.classList.remove("active")),a&&a.classList.add("active");const i=document.getElementById("score-tab-content");i&&(i.innerHTML=P(s))};function G(){const e=t.L;return`
<div class="screen" id="screen-assess">
  <div class="assess-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${d("var(--terra-text)")}</button>
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
</div>`}function F(){const e=t.L;return`
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
</div>`}function Q(){const e=t.L,a=e.res_tabs,o=["understanding","coping","family","hotlines","healthcare"],s=a.map((n,r)=>`
    <button class="res-tab ${r===0?"active":""}"
      onclick="showResourceTab('${o[r]}', this)">${n}</button>
  `).join(""),i=o.map((n,r)=>`
    <div class="res-content ${r===0?"active":""}" id="tab-${n}">
      ${J(n)}
    </div>
  `).join("");return`
<div class="screen" id="screen-resources">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${d("var(--terra-text)")}</button>
      <div>
        <h2>${e.resources_title}</h2>
        <p>${e.resources_sub}</p>
        <p class="resources-howto">${e.resources_howto||"Tap a category tab, then tap any topic to open it."}</p>
      </div>
    </div>
  </div>
  <div class="res-tabs" id="res-tabs">${s}</div>
  <div class="scroll-body">${i}</div>
  ${w(2)}
</div>`}function J(e){return(H[e]||[]).map(o=>`
    <div class="res-article">
      <div class="article-header" onclick="toggleArticle(this)">
        <div class="article-title">${o.title}</div>
      </div>
      <div class="article-body ${o.open?"open":""}">${o.content}</div>
    </div>
  `).join("")}const $=[{title:"Is it normal to feel nothing when I hold my baby?",author:"Mama_Jozi",location:"Gauteng",time:"2 days ago",post:"She's six weeks old and everyone keeps saying I should be overflowing with love, but most days I just feel numb. I do everything she needs — feed her, change her, rock her when she cries — but it feels like I'm watching myself do it from outside. Is this normal? Will it pass?",replies:[{author:"Thando_Mzansi",time:"1 day ago",helpful:12,text:"This is so much more common than anyone tells you. I felt exactly this with my first. It's worth mentioning to your clinic sister at your next check-up — not because something is wrong with you, but because there's support for this."},{author:"NewMama_CPT",time:"1 day ago",helpful:8,text:"Same here. I kept waiting for the 'rush of love' everyone talks about and it just didn't come for weeks. It crept in slowly instead. Be patient with yourself."},{author:"Umama_KZN",time:"22 hours ago",helpful:6,text:"My aunty told me this happens to a lot of us, we just don't talk about it because of what people will say. You're not alone, mama."},{author:"Mama_4721",time:"18 hours ago",helpful:4,text:"Sending you strength. Doing the caring even when you don't feel the love yet — that's still love."},{author:"NewMama_Joburg",time:"10 hours ago",helpful:9,text:"I took the EPDS in this app when I felt like this and my score was higher than I expected. Got me to actually ask for help instead of pushing through."}]},{title:"How did you get through the first 6 weeks?",author:"NewMama_CPT",location:"Western Cape",time:"5 hours ago",post:"Three weeks in and I'm running on no sleep, load shedding is messing up the little routine we had, and I feel like I'm barely keeping my head above water. For those who made it through — what actually helped?",replies:[{author:"Mama_Jozi",time:"4 hours ago",helpful:15,text:"Honestly, lowering my expectations of myself helped the most. Some days 'getting through' meant the baby was fed and I'd eaten one meal. That was enough."},{author:"Umama_KZN",time:"4 hours ago",helpful:11,text:"Load shedding nearly broke me too. I kept a power bank charged just for my phone torch and a flask of hot water ready before each stage. Small things, but they helped."},{author:"Thando_Mzansi",time:"3 hours ago",helpful:7,text:"Let people help. My mother and sister-in-law took turns coming through, even just to hold the baby so I could shower. Don't be too proud to accept it."},{author:"Mama_4721",time:"2 hours ago",helpful:5,text:"Six weeks felt like the hardest stretch of my life. It does get easier — not all at once, but it does."},{author:"NewMama_Joburg",time:"1 hour ago",helpful:6,text:"Taxi rides to my mom's place twice a week saved me. Just being around family, even quietly, made the days softer."}]},{title:"My mother-in-law keeps giving advice I didn't ask for",author:"Umama_KZN",location:"KwaZulu-Natal",time:"1 day ago",post:"I know she means well and I respect that she raised her own children, but every visit comes with a new instruction — how I'm holding the baby wrong, what I should be feeding her, why I shouldn't let her sleep so much. I'm exhausted and it's making me dread her visits.",replies:[{author:"NewMama_CPT",time:"22 hours ago",helpful:9,text:"This is so common in our culture, the elders feel it's their place to guide us. Doesn't make it less tiring though."},{author:"Mama_Jozi",time:"20 hours ago",helpful:7,text:"I found it helped to thank her for the advice and then just quietly do what works for me and baby. Most of the time it's coming from love, even if it doesn't feel that way in the moment."},{author:"Thando_Mzansi",time:"18 hours ago",helpful:10,text:"Ubuntu means we're never raising a child alone, but it also means we sometimes have to gently set boundaries with the people who love us. Both things can be true."},{author:"Mama_4721",time:"14 hours ago",helpful:4,text:"My husband ended up having that conversation with his mother for me. Sometimes it lands better coming from them."},{author:"NewMama_Joburg",time:"9 hours ago",helpful:6,text:"Solidarity. I started saying 'thanks Mama, we're trying it this way for now' and leaving it there. Saved my sanity."}]},{title:"Anyone else feel like they lost themselves after birth?",author:"Mama_4721",location:"Free State",time:"3 days ago",post:"I used to know exactly who I was — my job, my friends, my hobbies. Now most days I'm just 'the baby's mom' and I don't recognise myself anymore. I love her more than anything but I miss me too. Does anyone else feel this?",replies:[{author:"Umama_KZN",time:"3 days ago",helpful:14,text:"Every single day. It's a real grief even though we're not allowed to call it that because we 'should' be grateful."},{author:"NewMama_CPT",time:"2 days ago",helpful:11,text:"Yes. I started taking even 20 minutes a day that was just mine — tea on the stoep, a podcast, anything. It didn't fix it but it helped me remember I'm still in here."},{author:"Mama_Jozi",time:"2 days ago",helpful:8,text:"This is exactly why I started using the mood check-in on this app. Seeing the pattern made me realise I wasn't imagining it."},{author:"Thando_Mzansi",time:"1 day ago",helpful:5,text:"You don't lose yourself, mama. You're just under a mountain of newness right now. She'll come back up for air."},{author:"NewMama_Joburg",time:"20 hours ago",helpful:7,text:"Felt this so hard at 4 months. By 8 months I started feeling like myself again, just a version with more love in her."}]},{title:"What actually helped you sleep when baby sleeps?",author:"NewMama_Joburg",location:"Gauteng",time:"6 hours ago",post:"Everyone says 'sleep when the baby sleeps' like it's that easy. My mind races the second I lie down — dishes, washing, whether she's breathing okay. What actually worked for you?",replies:[{author:"Mama_4721",time:"5 hours ago",helpful:10,text:"Putting my phone in another room. The urge to check it the second I lay down was killing any chance of rest."},{author:"Thando_Mzansi",time:"5 hours ago",helpful:8,text:"I let the dishes sit. Genuinely. Sleep mattered more and the house survived."},{author:"Umama_KZN",time:"4 hours ago",helpful:6,text:"A weighted blanket helped me settle my own anxious thoughts, strange as it sounds."},{author:"Mama_Jozi",time:"3 hours ago",helpful:9,text:'I had to actively tell my brain "she is safe, the monitor is on" a few times before it would let me rest. Sounds silly but it worked.'},{author:"NewMama_CPT",time:"2 hours ago",helpful:5,text:"If load shedding hit during nap time I just gave up and lay in the dark with her instead of stressing about chores I couldn't do anyway. Turned into some of our sweetest naps."}]},{title:"Told my doctor I was struggling — here's what happened",author:"Thando_Mzansi",location:"Eastern Cape",time:"4 days ago",post:"I finally said the words out loud at my 6-week check-up: 'I don't think I'm okay.' I was so scared she'd judge me or worse, get the social worker involved. Instead she just listened, gave me an EPDS-style questionnaire, and referred me to a counsellor at the clinic. It wasn't scary at all in the end.",replies:[{author:"Mama_Jozi",time:"4 days ago",helpful:18,text:"Thank you for sharing this. I've been too scared to say anything at my appointments."},{author:"NewMama_CPT",time:"3 days ago",helpful:13,text:"This made me tear up. I'm taking my baby for her 6-week jabs next week and I'm going to try to say it too."},{author:"Umama_KZN",time:"3 days ago",helpful:9,text:"So proud of you for speaking up. It takes real courage, especially when we're taught to just push through."},{author:"Mama_4721",time:"2 days ago",helpful:7,text:"Did the same at my clinic and they were kind about it too. Wish someone had told me sooner that it wouldn't be scary."},{author:"NewMama_Joburg",time:"1 day ago",helpful:11,text:"This is why this community matters. Hearing it went okay for you makes it easier for the rest of us to try."}]}];function Z(){const e=t.L;return`
<div class="screen" id="screen-community">
  <div class="community-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${d("#4A7C59")}</button>
      <div>
        <h2>${e.community_title}</h2>
        <p>${e.community_sub}</p>
      </div>
    </div>
  </div>
  <div class="community-invite">${e.community_invite}</div>
  <div class="scroll-body">
    <div class="community-threads">
      ${X()}
    </div>
    <div class="community-ask-box">
      <button class="community-ask-btn" disabled>${e.community_ask_btn}</button>
      <p class="community-coming-soon">${e.community_coming_soon}</p>
    </div>
    <div style="height:12px"></div>
  </div>
  ${w(3)}
</div>`}function X(){const e=t.L;return $.map((a,o)=>`
    <button class="thread-card" onclick="openThread(${o})">
      <div class="thread-card-main">
        <div class="thread-card-title">${a.title}</div>
        <div class="thread-card-meta">
          <span class="thread-card-author">${a.author}</span>
          <span class="thread-card-dot">·</span>
          <span class="thread-card-time">${a.time}</span>
          <span class="thread-card-dot">·</span>
          <span class="thread-card-replies">${(e.community_replies_label||"{n} replies").replace("{n}",a.replies.length)}</span>
        </div>
      </div>
      <span class="thread-card-chevron">${z("var(--text-muted)")}</span>
    </button>
  `).join("")}function V(){return`
<div class="screen" id="screen-thread-detail">
  <div class="community-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-community')">${d("#4A7C59")}</button>
      <div>
        <h2 id="thread-detail-title"></h2>
      </div>
    </div>
  </div>
  <div class="scroll-body" id="thread-detail-content"></div>
  <div class="community-post-box">
    <p class="community-post-label" id="thread-detail-signin-prompt"></p>
    <textarea class="community-post-input" disabled rows="2" id="thread-detail-reply-input"></textarea>
    <button class="community-post-btn" disabled id="thread-detail-reply-btn"></button>
  </div>
</div>`}window.openThread=function(e){const a=t.L,o=$[e];if(!o)return;const s=document.getElementById("thread-detail-title");s&&(s.textContent=o.title);const i=document.getElementById("thread-detail-content");i&&(i.innerHTML=`
      <div class="thread-detail-post">
        <div class="thread-author">
          <div class="thread-avatar">${o.author[0]}</div>
          <div>
            <div class="thread-author-name">${o.author}</div>
            <div class="thread-location">${o.location} · ${o.time}</div>
          </div>
        </div>
        <div class="thread-text">${o.post}</div>
      </div>
      <div class="thread-replies-label">${(a.community_replies_label||"{n} replies").replace("{n}",o.replies.length)}</div>
      ${o.replies.map(c=>`
        <div class="thread-reply">
          <div class="thread-reply-header">
            <span class="thread-reply-author">${c.author}</span>
            <span class="thread-reply-time">${c.time}</span>
          </div>
          <div class="thread-reply-text">${c.text}</div>
          <div class="thread-reply-helpful">${ze("var(--rose)")}<span>${c.helpful}</span></div>
        </div>
      `).join("")}
    `);const n=document.getElementById("thread-detail-signin-prompt");n&&(n.textContent=a.community_sign_in_prompt);const r=document.getElementById("thread-detail-reply-input");r&&(r.placeholder=a.community_post_placeholder);const l=document.getElementById("thread-detail-reply-btn");l&&(l.textContent=a.community_sign_in_prompt),showScreen("screen-thread-detail")};function ee(){const e=t.L;return`
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
    <div class="section-label">${e.alert_providers_label}</div>
    ${h().filter(a=>a.section==="providers").map(f).join("")}

    <div class="section-label mt-12">${e.alert_loved_ones_label}</div>
    <div id="loved-ones-list">
      ${h().filter(a=>a.section==="loved_ones").map(f).join("")}
    </div>
    <button class="add-contact-btn" onclick="addContact()">${e.alert_add_contact_label||"+ Add contact"}</button>

    <div class="message-box">
      <label>${e.alert_message_label}</label>
      <textarea id="alert-message" rows="3" oninput="updateAlertButtonState()">${e.default_message}</textarea>
    </div>
    <button class="send-alert-btn" id="send-alert-btn" onclick="sendAlert()">
      ${e.send_btn}
    </button>
    <div class="send-hint">${e.send_hint}</div>
    <div style="height:16px"></div>
  </div>
  ${w(4)}
</div>`}const ae=[{id:"chw",section:"providers",initials:"HW",avatarClass:"av-blue",name:"Sister Nomvula (CHW)",roleKey:"contact_role_chw",channel:"whatsapp",checked:!1,phone:"",editable:!1},{id:"clinic",section:"providers",initials:"CL",avatarClass:"av-rose",name:"",roleKey:"contact_role_maternity",channel:"sms",checked:!1,phone:"",editable:"hospital"},{id:"mother",section:"loved_ones",avatarClass:"av-green",name:"Mama Khumalo",channel:"whatsapp",checked:!0,phone:"",editable:!0},{id:"partner",section:"loved_ones",avatarClass:"av-gold",name:"Thabo Sithole",channel:"sms",checked:!0,phone:"",editable:!0}],M=["av-green","av-gold","av-rose","av-blue"];function h(){return t.contacts||(t.contacts=ae.map(e=>({...e}))),t.contacts}function _(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){const a=t.L;if(e.editable===!1){const o=a[e.roleKey]||e.roleKey;return`
<div class="contact-card">
  <div class="contact-avatar ${e.avatarClass}">${e.initials}</div>
  <div class="contact-info">
    <div class="contact-name">${_(e.name)}</div>
    <div class="contact-role">${o}</div>
  </div>
  <span class="contact-coming-soon">${a.contact_coming_soon_label||"Coming soon"}</span>
</div>`}if(e.editable==="hospital"){const o=a[e.roleKey]||e.roleKey;return`
<div class="contact-card" data-contact-id="${e.id}">
  <div class="contact-avatar ${e.avatarClass}">${e.initials}</div>
  <div class="contact-info">
    <div class="contact-role">${o}</div>
    <input type="text" class="contact-name-input" placeholder="${a.hospital_name_placeholder||"Nearest public hospital"}"
      value="${_(e.name)}" oninput="updateContactName('${e.id}', this.value)">
    <button type="button" class="locate-hospital-btn" onclick="locateNearestHospital()">${a.locate_hospital_btn||"📍 Find my nearest hospital"}</button>
    <input type="tel" class="contact-phone-input" placeholder="${a.alert_phone_placeholder||"Add phone number"}"
      value="${_(e.phone)}" oninput="updateContactPhone('${e.id}', this.value)">
    <p class="hospital-note">${a.hospital_verify_note||"Please confirm this number yourself before relying on it — we can't guarantee it's current."}</p>
  </div>
  <input type="checkbox" ${e.checked?"checked":""} onchange="toggleContact('${e.id}', this.checked)" style="margin-left:auto" />
</div>`}return`
<div class="contact-card" data-contact-id="${e.id}">
  <div class="contact-avatar ${e.avatarClass}">${E("#fff")}</div>
  <div class="contact-info">
    <input type="text" class="contact-name-input" placeholder="${a.alert_contact_name_placeholder||"Contact name"}"
      value="${_(e.name)}" oninput="updateContactName('${e.id}', this.value)">
    <div class="channel-toggle">
      <button type="button" class="channel-btn ${e.channel==="whatsapp"?"active":""}" onclick="setContactChannel('${e.id}','whatsapp', this)">WhatsApp</button>
      <button type="button" class="channel-btn ${e.channel==="sms"?"active":""}" onclick="setContactChannel('${e.id}','sms', this)">SMS</button>
    </div>
    <input type="tel" class="contact-phone-input" placeholder="${a.alert_phone_placeholder||"Add phone number"}"
      value="${_(e.phone)}" oninput="updateContactPhone('${e.id}', this.value)">
  </div>
  <div class="contact-actions">
    <input type="checkbox" ${e.checked?"checked":""} onchange="toggleContact('${e.id}', this.checked)" />
    <button type="button" class="remove-contact-btn" onclick="removeContact('${e.id}')" aria-label="Remove contact">✕</button>
  </div>
</div>`}window.updateContactPhone=function(e,a){const o=h().find(s=>s.id===e);o&&(o.phone=a,u())};window.updateContactName=function(e,a){const o=h().find(s=>s.id===e);o&&(o.name=a,u())};window.toggleContact=function(e,a){const o=h().find(s=>s.id===e);o&&(o.checked=a,u())};window.setContactChannel=function(e,a,o){const s=h().find(n=>n.id===e);if(!s)return;s.channel=a,u();const i=o.closest(".channel-toggle");i&&i.querySelectorAll(".channel-btn").forEach(n=>n.classList.remove("active")),o.classList.add("active")};window.addContact=function(){const e=h(),a=e.filter(i=>i.section==="loved_ones").length,o={id:"loved-"+Date.now(),section:"loved_ones",avatarClass:M[a%M.length],name:"",channel:"whatsapp",checked:!0,phone:"",editable:!0};e.push(o),u();const s=document.getElementById("loved-ones-list");s&&s.insertAdjacentHTML("beforeend",f(o))};window.removeContact=function(e){t.contacts=h().filter(o=>o.id!==e),u();const a=document.querySelector(`.contact-card[data-contact-id="${e}"]`);a&&a.remove(),updateAlertButtonState()};window.locateNearestHospital=function(){const e=t.L;if(!navigator.geolocation){alert(e.geolocation_unsupported||"Location isn't supported on this device — please type your nearest hospital's name yourself.");return}navigator.geolocation.getCurrentPosition(a=>{const o=oe(a.coords.latitude,a.coords.longitude);if(!o)return;const s=h().find(n=>n.id==="clinic");if(!s)return;s.name=`${o.name} — ${o.city}`,u();const i=document.querySelector('.contact-card[data-contact-id="clinic"] .contact-name-input');i&&(i.value=s.name)},()=>{alert(e.geolocation_denied||"Couldn't get your location. You can type your nearest public hospital's name yourself below.")})};function oe(e,a){let o=null,s=1/0;for(const i of N){const n=te(e,a,i.lat,i.lng);n<s&&(s=n,o=i)}return o}function te(e,a,o,s){const n=(o-e)*Math.PI/180,r=(s-a)*Math.PI/180,l=Math.sin(n/2)**2+Math.cos(e*Math.PI/180)*Math.cos(o*Math.PI/180)*Math.sin(r/2)**2;return 6371*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}function se(e){const a=e.replace(/[^\d+]/g,"");return a.startsWith("+")?a.slice(1):a.startsWith("0")?"27"+a.slice(1):a}function ie(){const e=t.L,a=t.scoreHistory.slice(-3).reverse(),o=a.map(s=>{const i=y(s.score);return`
      <div class="history-row">
        <span class="history-dot history-dot-${i}"></span>
        <span class="history-date">${A(s.date)}</span>
        <span class="history-score">${s.score}/30</span>
        <span class="history-category">${(e.result_categories||{})[i]||i}</span>
      </div>`}).join("");return`
<div class="screen" id="screen-profile">
  <div class="profile-header">
    <div style="display:flex;justify-content:flex-start;margin-bottom:8px">
      <button class="back-btn" onclick="showScreen('screen-home')">${d("var(--terra-text)")}</button>
    </div>
    <div class="profile-avatar" id="profile-avatar">${re(t.userName)}</div>
    <div class="profile-name" id="profile-name">${t.userName}</div>
    <div class="profile-sub">${e.member_since_label}${t.memberSince?" "+ue(t.memberSince):""}</div>
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
      <span class="profile-value">${e.location_value}</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.offline_label}</span>
      <span class="status-green">${e.enabled_label}</span>
    </div>

    ${a.length?`
    <div class="mt-16">
      <div class="section-label">${e.progress_label}</div>
      ${o}
    </div>`:""}

    <div class="upgrade-box">
      <h3>${e.upgrade_title}</h3>
      <p>${e.upgrade_desc}</p>
      <button class="upgrade-btn" onclick="handleUpgrade()">${e.upgrade_btn}</button>
    </div>

    <div class="mt-16">
      <div class="section-label">${e.data_privacy_label}</div>
      <div class="profile-row">
        <span class="profile-label">${e.data_stored_label}</span>
        <span class="status-green">${e.yes_label}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">${e.share_data_label}</span>
        <span class="profile-value">${e.off_label}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">${e.privacy_policy_label||"Privacy Policy"}</span>
        <a class="text-link" onclick="showScreen('screen-privacy')">${e.view_label||"View"} →</a>
      </div>
      <div class="profile-row">
        <span class="profile-label">${e.terms_label||"Terms & Conditions"}</span>
        <a class="text-link" onclick="showScreen('screen-terms')">${e.view_label||"View"} →</a>
      </div>
      <div class="profile-row" onclick="confirmDeleteData()" style="cursor:pointer">
        <span class="status-red">${e.delete_data}</span>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
</div>`}function ne(){return`
<div class="screen" id="screen-privacy">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-profile')">${d("var(--terra-text)")}</button>
      <div>
        <h2>Privacy Policy</h2>
        <p>Last updated September 15, 2026</p>
      </div>
    </div>
  </div>
  <div class="scroll-body" style="padding:14px">
    <div class="res-article">
      <div class="article-body open">
        <div class="info-box">In short: what you type into Mama Minds stays on your phone. The only thing that leaves your device automatically is an anonymous page-view count — never anything you type.</div>

        <h4>What we collect</h4>
        <p>Everything you enter is optional and stored only to make the app work for you: your first name, chosen language, how far postpartum you are, daily mood check-ins, and your EPDS assessment scores and dates.</p>
        <p>If you set up your support contacts, we also store what you enter there: names, phone numbers, and whether you'd message them on WhatsApp or SMS. This stays on your device the same way everything else does.</p>

        <h4>Where it's stored</h4>
        <p>All of it lives in your browser's local storage, on your own device. Mama Minds has no user accounts, no database, and no backend server — so there is nowhere for this information to be sent, even if we wanted to send it.</p>

        <h4>What we don't do</h4>
        <ul>
          <li>No cookies or advertising identifiers</li>
          <li>No sharing or selling of your information — we simply don't have it</li>
        </ul>

        <h4>Anonymous analytics</h4>
        <p>We use GoatCounter, a privacy-first analytics tool, to see how many people visit each page. It counts page views only — no cookies, no personal identifiers, and no way to trace a visit back to you.</p>

        <h4>Alerting your support network</h4>
        <p>The "Get help now" alert prepares a message for the contacts you select. Sending it hands the message to your phone's own SMS or WhatsApp — Mama Minds itself never sees or stores what you send.</p>

        <h4>Finding your nearest hospital</h4>
        <p>Your location is only ever requested if you tap "Find my nearest hospital" yourself — it is never accessed automatically or in the background. When you do tap it, your device checks its GPS position against a small list of public hospitals stored in the app itself, entirely on your device, and shows you the closest match. Your location is never sent anywhere, never stored, and never shared — it's used for that one calculation and then discarded. If you don't tap that button, this never happens at all.</p>

        <h4>Community</h4>
        <p>The stories currently shown in Community are sample entries so you can see how it will work. Posting your own story is coming soon; when it launches, this policy will be updated to explain how those posts are stored and moderated.</p>

        <h4>Offline access</h4>
        <p>Mama Minds caches its own app files on your device so it keeps working without internet. That cache holds app code and images only — never your personal check-ins or scores.</p>

        <h4>Your control over your data</h4>
        <p>You can erase everything at any time from Profile → "Delete my data." Since nothing is stored anywhere but your device, that one action removes it completely and permanently.</p>

        <h4>Changes to this policy</h4>
        <p>If new features change how data is handled — for example, an optional cloud sync or account system in a future version — we'll update this page to reflect it.</p>

        <h4>Questions</h4>
        <p>If you have questions about this policy, please <a class="text-link" href="https://github.com/cindyleahphoto-ctrl/Mama-Minds-PPD/issues" target="_blank" rel="noopener">open an issue on GitHub</a>.</p>
      </div>
    </div>
    <div style="height:16px"></div>
  </div>
</div>`}function le(){return`
<div class="screen" id="screen-terms">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-profile')">${d("var(--terra-text)")}</button>
      <div>
        <h2>Terms & Conditions</h2>
        <p>Last updated September 15, 2026</p>
      </div>
    </div>
  </div>
  <div class="scroll-body" style="padding:14px">
    <div class="res-article">
      <div class="article-body open">
        <div class="warning-box">Mama Minds is a screening and support tool. It is not a diagnosis, not a substitute for professional medical care, and not an emergency service. If you or your baby are in immediate danger, contact emergency services (10111 / 10177) or a crisis hotline right away.</div>

        <h4>Agreement to these terms</h4>
        <p>By using Mama Minds, you agree to these terms. If you don't agree with them, please don't use the app.</p>

        <h4>What Mama Minds is — and isn't</h4>
        <p>The EPDS assessment is a clinically recognised screening tool, not a clinical diagnosis. Resources and coping tools are for general education and support. Always speak to a qualified healthcare provider about your specific situation before making medical decisions.</p>

        <h4>Who can use it</h4>
        <p>Mama Minds is intended for adults. If a minor uses the app, a parent or guardian should be involved in decisions about her care.</p>

        <h4>Your data</h4>
        <p>Mama Minds has no accounts and no server — your check-ins and scores are stored only on your device. See the <a class="text-link" onclick="showScreen('screen-privacy')">Privacy Policy</a> for full details.</p>

        <h4>Community guidelines</h4>
        <p>When posting your own story becomes available, please be respectful and supportive of other mothers, avoid sharing anyone else's personal details without their consent, and remember that posts from other users are personal experiences, not medical advice. Content that is abusive, harmful, or unsafe may be removed.</p>

        <h4>Mama Minds Plus</h4>
        <p>Mama Minds Plus is an upcoming paid tier. No payment is currently collected through the app, and pricing and features may change before launch.</p>

        <h4>Intellectual property</h4>
        <p>The Mama Minds name, design, and written content belong to the Mama Minds project. Licensing terms: please contact the project owner before reusing or redistributing this app or its content.</p>

        <h4>No warranty</h4>
        <p>Mama Minds is provided "as is." We do our best to keep information accurate and the app working, but we make no guarantee it will be error-free, uninterrupted, or suitable for every situation.</p>

        <h4>Limitation of liability</h4>
        <p>To the fullest extent permitted by law, Mama Minds and its contributors are not liable for any harm or loss arising from your use of the app, including decisions made based on its content.</p>

        <h4>Changes to these terms</h4>
        <p>We may update these terms as the app changes. Continued use after an update means you accept the revised terms.</p>

        <h4>Governing law</h4>
        <p>These terms are governed by the laws of the Republic of South Africa.</p>

        <h4>Questions</h4>
        <p>If you have questions about these terms, please <a class="text-link" href="https://github.com/cindyleahphoto-ctrl/Mama-Minds-PPD/issues" target="_blank" rel="noopener">open an issue on GitHub</a>.</p>
      </div>
    </div>
    <div style="height:16px"></div>
  </div>
</div>`}const I=["var(--terra)","var(--sage)","var(--gold)","var(--rose)"];function re(e){if(!e||e.trim()===""||e==="Mama")return`<svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="32" cy="32" r="32" fill="var(--terra-soft)"/>
      <g fill="var(--terra)">
        <circle cx="32" cy="19" r="8"/>
        <circle cx="45" cy="32" r="8"/>
        <circle cx="32" cy="45" r="8"/>
        <circle cx="19" cy="32" r="8"/>
      </g>
      <circle cx="32" cy="32" r="7" fill="var(--gold)"/>
    </svg>`;const o=e.trim(),s=o.split(/\s+/),i=s.length>=2?(s[0][0]+s[1][0]).toUpperCase():o[0].toUpperCase();let n=0;for(let l=0;l<o.length;l++)n=n*31+o.charCodeAt(l)>>>0;return`<svg viewBox="0 0 64 64" width="64" height="64">
    <circle cx="32" cy="32" r="32" fill="${I[n%I.length]}"/>
    <text x="32" y="33" text-anchor="middle" dominant-baseline="central"
      font-family="Lora, serif" font-size="${i.length>1?22:26}" font-weight="600" fill="#fff">${i}</text>
  </svg>`}function ue(e){return e?new Date(e).toLocaleDateString(void 0,{month:"long",year:"numeric"}):""}function A(e){return new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}function C(){t.memberSince||(t.memberSince=new Date().toISOString()),localStorage.setItem("mamaminds-profile-done","1"),u()}function w(e){const a=t.L,o=["screen-home","screen-assess","screen-resources","screen-community","screen-alert"],s=[ve,be,ke,Se,fe];return`
<div class="bottom-nav">
  ${a.nav.map((i,n)=>`
    <button class="nav-btn ${n===e?"active":""}"
      onclick="showScreen('${o[n]}')">
      ${s[n]("currentColor")}
      <span>${i}</span>
      ${n===4?'<span class="nav-badge">!</span>':""}
    </button>
  `).join("")}
</div>`}window.showScreen=function(e){document.querySelectorAll(".screen").forEach(o=>o.classList.remove("active"));const a=document.getElementById(e);a&&(a.classList.add("active"),a.scrollTop=0),e==="screen-assess"&&renderQuestion(),e==="screen-alert"&&updateAlertButtonState()};window.selectLang=function(e){document.querySelectorAll(".lang-btn").forEach(a=>a.classList.remove("selected")),e.classList.add("selected"),t.lang=e.dataset.lang};window.continueFromLang=function(){t.L=m[t.lang]||m[b],localStorage.setItem("mamaminds-visited","1"),u(),k()};window.selectMood=function(e,a){document.querySelectorAll(".mood-btn").forEach(o=>o.classList.remove("selected")),e.classList.add("selected"),t.moodHistory.push({date:new Date().toISOString(),mood:a}),u()};let S=null;window.renderQuestion=function(){const e=g[t.currentQuestion],a=t.L,o=g.length,s=(t.currentQuestion+1)/o*100+"%",i=document.getElementById("progress-fill");i&&(i.style.width=s);const n=document.getElementById("question-area");if(!n)return;n.innerHTML=`
    <div class="q-counter">
      ${(a.q_of||"Question {n} of 10").replace("{n}",t.currentQuestion+1)}
    </div>
    <div class="q-text">${e.text}</div>
    <div class="q-hint">${e.hint}</div>
    <div class="answer-list">
      ${e.options.map((c,p)=>{const x=t.answers[t.currentQuestion]===p;return`
          <button class="answer-opt ${x?"selected":""}" onclick="selectAnswer(${p})">
            <span class="radio-dot">
              ${x?'<span class="radio-dot-inner"></span>':""}
            </span>
            ${c}
          </button>`}).join("")}
    </div>`;const r=document.getElementById("btn-back"),l=document.getElementById("btn-next");r&&(r.style.display=t.currentQuestion===0?"none":""),l&&(l.textContent=t.currentQuestion===o-1?a.btn_results||"See my results":a.btn_next||"Next",l.disabled=t.answers[t.currentQuestion]===null)};window.selectAnswer=function(e){const a=t.currentQuestion===g.length-1,o=t.answers[t.currentQuestion]===null,s=t.answers[t.currentQuestion]!==e;t.answers[t.currentQuestion]=e,renderQuestion(),!a&&(o||s)&&(clearTimeout(S),S=setTimeout(()=>{t.currentQuestion++,renderQuestion()},220))};window.nextQuestion=function(){t.answers[t.currentQuestion]!==null&&(t.currentQuestion<g.length-1?(t.currentQuestion++,renderQuestion()):he())};window.prevQuestion=function(){clearTimeout(S),t.currentQuestion>0&&(t.currentQuestion--,renderQuestion())};window.resetAssessment=function(){t.currentQuestion=0,t.answers=new Array(10).fill(null),showScreen("screen-assess")};function he(){const e=j(t.answers),a=y(e),o=L(e),s=t.L;t.scoreHistory.push({score:e,date:new Date().toISOString(),postpartumRange:t.postpartumRange}),t.scoreHistory.length>10&&(t.scoreHistory=t.scoreHistory.slice(-10)),u();const i=document.getElementById("result-header"),n=document.getElementById("result-score"),r=document.getElementById("result-category"),l=document.getElementById("result-meaning"),c=document.getElementById("result-steps-text");i&&(i.style.background=o),n&&(n.textContent=e),r&&(r.textContent=(s.result_categories||{})[a]||""),l&&(l.textContent=(s.result_meanings||{})[a]||""),c&&(c.textContent=(s.result_steps_text||{})[a]||"");const p=document.getElementById("result-disclaimer");p&&(p.textContent=s.epds_disclaimer||""),showScreen("screen-result")}window.showResourceTab=function(e,a){document.querySelectorAll(".res-content").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".res-tab").forEach(s=>s.classList.remove("active"));const o=document.getElementById("tab-"+e);o&&o.classList.add("active"),a&&a.classList.add("active")};window.toggleArticle=function(e){const a=e.nextElementSibling;a&&a.classList.toggle("open")};window.updateAlertButtonState=function(){const e=document.getElementById("send-alert-btn"),a=document.getElementById("alert-message");!e||!a||(e.disabled=a.value.trim().length===0)};window.sendAlert=function(){const e=document.getElementById("send-alert-btn"),a=document.getElementById("alert-message"),o=t.L;if(!e||!a||a.value.trim().length===0)return;const s=a.value.trim(),i=h().filter(l=>l.checked&&l.phone&&l.phone.trim().length>0);if(i.length===0){alert(o.alert_no_number_label||"Select at least one contact and add their phone number first.");return}const n=i.filter(l=>l.channel==="sms").map(l=>l.phone.trim()),r=i.find(l=>l.channel==="whatsapp");n.length>0&&window.open(`sms:${n.join(",")}?body=${encodeURIComponent(s)}`,"_blank"),r&&window.open(`https://wa.me/${se(r.phone)}?text=${encodeURIComponent(s)}`,"_blank"),e.textContent=o.alert_sent_label||"✓ Alert sent",e.classList.add("sent"),e.disabled=!0,setTimeout(()=>{e.textContent=o.send_btn,e.classList.remove("sent"),updateAlertButtonState()},3500)};window.handleUpgrade=function(){alert(`Mama Minds Plus — Upgrade coming soon!

R89/month · R799/year

Features: Unlimited assessments, tele-health booking, therapist chat, care plan export, priority alerts.`)};window.confirmDeleteData=function(){confirm("Are you sure you want to delete all your data? This cannot be undone.")&&(localStorage.clear(),location.reload())};function ce(){const e=t.L;if(e.greetings){const a=new Date().getHours();return a<12?e.greetings.morning:a<17?e.greetings.afternoon:e.greetings.evening}return e.greeting}function de(){const e=localStorage.getItem("mamaminds-last-checkin");if(!e)return 0;const a=Date.now()-parseInt(e);return Math.floor(a/(1e3*60*60*24))}function me(e){const a=t.L,o=y(e);return(a.result_categories||{})[o]||o}function pe(){document.querySelectorAll('[onclick*="screen-assess"]').forEach(e=>{e.addEventListener("click",()=>{localStorage.setItem("mamaminds-last-checkin",Date.now().toString())})})}function d(e){return`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`}function _e(e){return`<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`}function z(e){return`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`}function ge(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`}function be(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`}function ye(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`}function ke(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`}function we(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`}function E(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`}function ve(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`}function fe(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`}function Se(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`}function ze(e){return`<svg width="11" height="11" viewBox="0 0 24 24" fill="${e}" stroke="none"><path d="M12 21s-6.7-4.35-9.33-8.2C1 10.28 1.6 7 4.5 5.5 6.5 4.5 9 5 12 8c3-3 5.5-3.5 7.5-2.5 2.9 1.5 3.5 4.78 1.83 7.3C18.7 16.65 12 21 12 21z"/></svg>`}
