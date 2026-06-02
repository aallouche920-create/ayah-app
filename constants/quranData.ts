export interface Ayah {
  id: string;
  surahNumber: number;
  surahName: string;
  surahNameArabic: string;
  ayahNumber: number;
  arabicText: string;
  transliteration: string;
  translations: Record<string, string>;
  tafsir: string;
}

export const AYAHS: Ayah[] = [
  {
    id: "1:1",
    surahNumber: 1,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayahNumber: 1,
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillāhi r-raḥmāni r-raḥīm",
    translations: {
      en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
      ms: "Dengan nama Allah, Yang Maha Pemurah, lagi Maha Mengasihani.",
      id: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      tr: "Rahmân ve Rahîm olan Allah'ın adıyla.",
      ur: "شروع کرتا ہوں اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔",
      es: "En el nombre de Allah, el Misericordioso, el Compasivo.",
    },
    tafsir:
      "The Basmala is the sacred opening of the Quran and is recited before every blessed deed. The two divine names — Al-Rahman (the Universally Merciful) and Al-Rahim (the Specially Merciful) — encompass all of Allah's mercy for His creation.",
  },
  {
    id: "2:152",
    surahNumber: 2,
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 152,
    arabicText:
      "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    transliteration:
      "Fadhkurūnī adhkurkum washkurū lī wa lā takfurūn",
    translations: {
      en: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
      fr: "Rappelez-vous de Moi donc, Je me souviendrai de vous. Et soyez Moi reconnaissants et ne soyez pas ingrats.",
      ms: "Oleh itu ingatlah kamu kepada-Ku (dengan mematuhi hukum dan undang-undang-Ku), supaya Aku membalas kamu dengan kebaikan; dan bersyukurlah kamu kepada-Ku dan janganlah kamu kufur.",
      id: "Maka ingatlah kepada-Ku, niscaya Aku pun akan ingat kepadamu. Bersyukurlah kepada-Ku, dan janganlah kamu ingkar kepada-Ku.",
      tr: "Öyleyse siz Beni zikredin, Ben de sizi zikredeyim. Bana şükredin, bana nankörlük etmeyin.",
      ur: "پس میرا ذکر کرو، میں تمہارا ذکر کروں گا۔ اور میرا شکر ادا کرو اور ناشکری مت کرو۔",
      es: "Acordaos pues de Mí, que Yo Me acordaré de vosotros. Y sed agradecidos conmigo y no seáis desagradecidos.",
    },
    tafsir:
      "Allah promises a direct, reciprocal relationship with His servant: remember Him, and He will remember you. This is the divine guarantee that makes dhikr (remembrance) the most powerful act of worship — a two-way conversation with the Most High.",
  },
  {
    id: "2:255",
    surahNumber: 2,
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 255,
    arabicText:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
    transliteration:
      "Allāhu lā ilāha illā huw, al-ḥayyul-qayyūm, lā ta'khudhuhu sinatun wa lā nawm",
    translations: {
      en: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep.",
      fr: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même. Ni somnolence ni sommeil ne Le saisissent.",
      ms: "Allah, tiada Tuhan melainkan Dia, Yang Tetap Hidup, Yang Kekal selama-lamanya. Yang tidak mengantuk usahkan tidur.",
      id: "Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur.",
      tr: "Allah, O'ndan başka ilah yoktur; O, daima diridir, her şeyi ayakta tutandır; O'nu ne uyuklama ne de uyku tutar.",
      ur: "اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ جاوید، تمام کائنات کو سنبھالنے والا ہے، اسے نہ اونگھ آتی ہے نہ نیند۔",
      es: "Allah no hay más dios que Él, el Viviente, el que todo lo sustenta. A Él no le domina el sueño ni la somnolencia.",
    },
    tafsir:
      "Ayat al-Kursi is considered the greatest verse of the Quran. Whoever recites it after every obligatory prayer, nothing will prevent him from entering Paradise. It describes Allah's absolute sovereignty over all creation — He never sleeps, never tires, and His knowledge encompasses everything.",
  },
  {
    id: "2:286",
    surahNumber: 2,
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 286,
    arabicText:
      "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ",
    transliteration:
      "Lā yukallifu llāhu nafsan illā wus'ahā, lahā mā kasabat wa 'alayhā maktasabat",
    translations: {
      en: "Allah does not burden a soul beyond that it can bear. It will have the consequence of what good it has gained, and it will bear the consequence of what evil it has earned.",
      fr: "Allah ne charge une âme que de ce qu'elle peut supporter. Elle profite du bien qu'elle a fait, et pâtit du mal qu'elle a fait.",
      ms: "Allah tidak membebani seseorang melainkan apa yang terdaya olehnya. Ia mendapat pahala kebaikan yang diusahakannya, dan ia juga menanggung dosa kejahatan yang diusahakannya.",
      id: "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Dia mendapat (pahala) dari (kebajikan) yang dikerjakannya dan dia mendapat (siksa) dari (kejahatan) yang diperbuatnya.",
      tr: "Allah, hiç kimseye gücünün üstünde bir şey yüklemez. Herkesin kazandığı iyilik kendi yararına, kötülük de kendi zararınadır.",
      ur: "اللہ کسی جان کو اس کی طاقت سے زیادہ تکلیف نہیں دیتا۔ اس نے جو بھلائی کی وہ اسی کے فائدے کے لیے ہے اور جو برائی کی وہ اسی پر پڑے گی۔",
      es: "Allah no impone a ningún alma nada más allá de sus posibilidades. Tendrá lo que haya ganado y será responsable de lo que haya cometido.",
    },
    tafsir:
      "This verse is a mercy from Allah — a divine reminder that every trial you face is within your capacity to endure. No burden is too heavy for the one who trusts in Allah. It is the foundation of hope and resilience in Islam.",
  },
  {
    id: "3:173",
    surahNumber: 3,
    surahName: "Ali 'Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 173,
    arabicText:
      "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Ḥasbunallāhu wa ni'mal-wakīl",
    translations: {
      en: "Sufficient for us is Allah, and He is the best Disposer of affairs.",
      fr: "Allah nous suffit, et quel excellent Garant!",
      ms: "Cukuplah Allah bagi kami, dan Dia sebaik-baik Penjaga.",
      id: "Cukuplah Allah menjadi penolong kami dan Allah adalah sebaik-baik Pelindung.",
      tr: "Allah bize yeter, O ne güzel vekildir.",
      ur: "ہمیں اللہ کافی ہے اور وہ بہترین کارساز ہے۔",
      es: "Allah nos es suficiente, y ¡Él es el mejor Guardián!",
    },
    tafsir:
      "These are the words spoken by Prophet Ibrahim (AS) when he was thrown into the fire, and by Prophet Muhammad (SAW) and his companions when faced with overwhelming armies. This powerful dhikr is a declaration of complete trust and surrender to Allah.",
  },
  {
    id: "14:7",
    surahNumber: 14,
    surahName: "Ibrahim",
    surahNameArabic: "إبراهيم",
    ayahNumber: 7,
    arabicText:
      "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
    transliteration:
      "La'in shakartum la'azīdannakum wa la'in kafartum inna 'adhābī lashadīd",
    translations: {
      en: "If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.",
      fr: "Si vous êtes reconnaissants, certes, J'augmenterai [Mes bienfaits] pour vous. Mais si vous êtes ingrats, Mon châtiment est assurément sévère.",
      ms: "Sesungguhnya jika kamu bersyukur, pasti Kami akan menambah (nikmat) kepadamu, dan jika kamu mengingkari (nikmat-Ku), maka sesungguhnya azab-Ku sangat pedih.",
      id: "Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu, tetapi jika kamu mengingkari (nikmat-Ku), maka sesungguhnya azab-Ku sangat berat.",
      tr: "Eğer şükrederseniz andolsun nimetimi artırırım. Eğer nankörlük ederseniz hiç şüphesiz azabım çok şiddetlidir.",
      ur: "اگر تم شکر ادا کروگے تو میں ضرور تمہیں اور زیادہ دوں گا، اور اگر ناشکری کروگے تو بے شک میرا عذاب بہت سخت ہے۔",
      es: "Si sois agradecidos, os concederé más. Pero si sois desagradecidos, Mi castigo es severo.",
    },
    tafsir:
      "This divine promise is simple and profound: gratitude multiplies blessings. When we count our blessings and thank Allah, He promises to increase them. Shukr (gratitude) is not just a feeling — it is an act of worship that opens the doors of divine generosity.",
  },
  {
    id: "18:10",
    surahNumber: 18,
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayahNumber: 10,
    arabicText:
      "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    transliteration:
      "Rabbanā ātinā min ladunka raḥmatan wa hayyi' lanā min amrinā rashadā",
    translations: {
      en: "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
      fr: "Notre Seigneur, accorde-nous de Ta part une miséricorde et procure-nous dans notre affaire ce qui est juste.",
      ms: "Wahai Tuhan kami, berikanlah kami rahmat dari sisi-Mu, dan sediakanlah untuk kami petunjuk yang lurus dalam urusan kami.",
      id: "Ya Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah petunjuk yang lurus bagi kami dalam urusan kami.",
      tr: "Rabbimiz! Bize katından bir rahmet ver ve işimizden bize doğruyu kolaylaştır.",
      ur: "اے ہمارے رب! ہمیں اپنی طرف سے رحمت عطا فرما اور ہمارے کام میں سیدھا راستہ مہیا کر۔",
      es: "Señor nuestro, concédenos Tu misericordia y facilítanos la rectitud en nuestros asuntos.",
    },
    tafsir:
      "The du'a of the People of the Cave — young believers who fled to a cave to preserve their faith. Their prayer combined asking for mercy (Allah's gift) and guidance (His direction). It is a perfect supplication: acknowledging our need for both divine support and clear direction.",
  },
  {
    id: "20:114",
    surahNumber: 20,
    surahName: "Taha",
    surahNameArabic: "طه",
    ayahNumber: 114,
    arabicText: "رَّبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidnī 'ilmā",
    translations: {
      en: "My Lord, increase me in knowledge.",
      fr: "Mon Seigneur, accrois mes connaissances.",
      ms: "Ya Tuhanku, tambahkanlah ilmu pengetahuan kepadaku.",
      id: "Ya Tuhanku, tambahkanlah ilmu kepadaku.",
      tr: "Rabbim, ilmimi artır.",
      ur: "اے میرے رب! میرے علم میں اضافہ فرما۔",
      es: "Señor mío, auméntame en conocimiento.",
    },
    tafsir:
      "The shortest and most powerful du'a in the Quran. Allah commands the Prophet to ask only for more knowledge — because knowledge of Allah is the foundation of everything. This verse teaches us that seeking knowledge is an act of worship and that we should never stop learning.",
  },
  {
    id: "21:87",
    surahNumber: 21,
    surahName: "Al-Anbiya",
    surahNameArabic: "الأنبياء",
    ayahNumber: 87,
    arabicText:
      "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration:
      "Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn",
    translations: {
      en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
      fr: "Il n'y a point de divinité que Toi! Pureté à Toi! J'ai vraiment été du nombre des injustes.",
      ms: "Bahawa tiada Tuhan melainkan Engkau. Maha Suci Engkau, sesungguhnya aku adalah dari orang-orang yang zalim.",
      id: "Tidak ada Tuhan selain Engkau. Maha Suci Engkau, sesungguhnya aku adalah termasuk orang-orang yang zalim.",
      tr: "Senden başka ilah yoktur, seni tenzih ederim. Ben gerçekten zalimlerden oldum.",
      ur: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ظالموں میں سے تھا۔",
      es: "No hay más dios que Tú. ¡Gloria a Ti! Verdaderamente he sido de los injustos.",
    },
    tafsir:
      "Dua al-Yunus — the prayer of Prophet Yunus (AS) from the belly of the whale. The Prophet ﷺ said: 'No Muslim calls upon Allah with these words concerning any matter, except that Allah will respond to him.' It combines tawhid, tasbih, and tawbah — the three pillars of turning to Allah.",
  },
  {
    id: "24:35",
    surahNumber: 24,
    surahName: "An-Nur",
    surahNameArabic: "النور",
    ayahNumber: 35,
    arabicText:
      "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",
    transliteration:
      "Allāhu nūru s-samāwāti wal-arḍ, mathalu nūrihī kamishkātin fīhā miṣbāḥ",
    translations: {
      en: "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp.",
      fr: "Allah est la lumière des cieux et de la terre. Sa lumière est comparable à une niche dans laquelle il y a une lampe.",
      ms: "Allah cahaya langit dan bumi. Bandingan cahaya-Nya, seperti sebuah lubang yang tidak tembus, yang di dalamnya ada pelita besar.",
      id: "Allah (Pemberi) cahaya (kepada) langit dan bumi. Perumpamaan cahaya Allah, adalah seperti sebuah lubang yang tak tembus, yang di dalamnya ada pelita besar.",
      tr: "Allah göklerin ve yerin nurudur. O'nun nurunun temsili, içinde lamba bulunan bir kandil gibidir.",
      ur: "اللہ آسمانوں اور زمین کا نور ہے۔ اس کے نور کی مثال ایسی ہے جیسے ایک طاق جس میں چراغ ہو۔",
      es: "Allah es la Luz de los cielos y de la tierra. Su Luz es comparable a una hornacina en la que hay una lámpara.",
    },
    tafsir:
      "Ayat al-Nur — one of the most celebrated verses of the Quran. Allah describes Himself as Light (Nur) — not a physical light but the source of all guidance, knowledge, and existence. This verse has inspired generations of scholars, mystics, and poets in their pursuit of divine understanding.",
  },
  {
    id: "39:53",
    surahNumber: 39,
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 53,
    arabicText:
      "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ",
    transliteration:
      "Qul yā 'ibādiyalladhīna asrafū 'alā anfusihim lā taqnaṭū min raḥmatillāh, innallāha yaghfiru dh-dhunūba jamī'ā, innahu huwal-ghafūrur-raḥīm",
    translations: {
      en: "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.",
      fr: "Dis: «Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d'Allah. Car Allah pardonne tous les péchés. Oui, c'est Lui le Pardonnant, le Miséricordieux.»",
      ms: "Katakanlah: Wahai hamba-hamba-Ku yang telah melampaui batas terhadap diri mereka sendiri, janganlah kamu berputus asa dari rahmat Allah. Sesungguhnya Allah mengampuni dosa-dosa semuanya.",
      id: "Katakanlah: Wahai hamba-hamba-Ku yang melampaui batas terhadap diri mereka sendiri! Janganlah kamu berputus asa dari rahmat Allah. Sesungguhnya Allah mengampuni dosa-dosa semuanya.",
      tr: "De ki: «Ey nefisleri aleyhine haddi aşan kullarım! Allah'ın rahmetinden ümit kesmeyin! Allah bütün günahları bağışlar; çünkü O, bağışlayan ve merhamet edendir.»",
      ur: "کہو: اے میرے بندو! جنہوں نے اپنے نفسوں پر زیادتی کی ہے، اللہ کی رحمت سے مایوس نہ ہو۔ بے شک اللہ سارے گناہوں کو معاف کر دیتا ہے۔",
      es: "Di: «¡Siervos Míos que habéis pecado contra vosotros mismos! No desesperéis de la misericordia de Allah. Allah perdona todos los pecados. Él es el Indulgente, el Misericordioso.»",
    },
    tafsir:
      "This is called 'the verse of hope' — the most comforting verse in the Quran for those burdened by sin. No matter how far you have strayed, Allah's door of mercy is open. He invites every sinner to return, and He promises forgiveness for ALL sins for those who truly repent.",
  },
  {
    id: "40:60",
    surahNumber: 40,
    surahName: "Ghafir",
    surahNameArabic: "غافر",
    ayahNumber: 60,
    arabicText:
      "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    transliteration: "Wa qāla rabbukumu d'ūnī astajib lakum",
    translations: {
      en: "And your Lord says: Call upon Me; I will respond to you.",
      fr: "Et votre Seigneur dit: «Appelez-Moi, Je vous répondrai.»",
      ms: "Dan Tuhan kamu berfirman: Berdoalah kepada-Ku, nescaya Aku perkenankan doa permohonan kamu.",
      id: "Dan Tuhanmu berfirman: Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu.",
      tr: "Rabbiniz şöyle dedi: «Bana dua edin, kabul edeyim.»",
      ur: "اور تمہارے رب نے فرمایا: مجھ سے دعا مانگو، میں تمہاری دعا قبول کروں گا۔",
      es: "Y vuestro Señor ha dicho: «¡Suplicadme, que Yo os escucharé!»",
    },
    tafsir:
      "A direct, divine invitation to du'a. Allah does not say 'I might respond' — He says 'I will respond.' Every sincere du'a is heard. The Prophet ﷺ said: 'Du'a is worship itself.' Making du'a is an act of acknowledging Allah's power and our complete dependence on Him.",
  },
  {
    id: "51:56",
    surahNumber: 51,
    surahName: "Adh-Dhariyat",
    surahNameArabic: "الذاريات",
    ayahNumber: 56,
    arabicText:
      "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
    transliteration: "Wa mā khalaqtul-jinna wal-insa illā liya'budūn",
    translations: {
      en: "And I did not create the jinn and mankind except to worship Me.",
      fr: "Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent.",
      ms: "Dan tidak Aku jadikan jin dan manusia melainkan untuk mereka beribadah kepada-Ku.",
      id: "Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka beribadah kepada-Ku.",
      tr: "Ben cinleri ve insanları, sırf beni tanıyıp ibâdet etsinler diye yarattım.",
      ur: "میں نے جنوں اور انسانوں کو صرف اس لیے پیدا کیا کہ وہ میری عبادت کریں۔",
      es: "No he creado a los genios y a los hombres sino para que Me adoren.",
    },
    tafsir:
      "The fundamental purpose of human existence. Our creation has a clear, singular purpose: worship of Allah. This verse liberates us from existential confusion — we know why we are here. 'Ibadah (worship) is not limited to prayers; it includes every conscious act done for the sake of Allah.",
  },
  {
    id: "57:4",
    surahNumber: 57,
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 4,
    arabicText:
      "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    transliteration:
      "Wa huwa ma'akum ayna mā kuntum, wallāhu bimā ta'malūna baṣīr",
    translations: {
      en: "And He is with you wherever you are. And Allah, of what you do, is Seeing.",
      fr: "Il est avec vous où que vous soyez. Et Allah voit bien ce que vous faites.",
      ms: "Dia tetap bersamamu di mana sahaja kamu berada, dan Allah Maha Melihat apa yang kamu kerjakan.",
      id: "Dan Dia bersama kamu di mana pun kamu berada. Dan Allah Maha Melihat apa yang kamu kerjakan.",
      tr: "Nerede olursanız olun O sizinle beraberdir. Allah yaptıklarınızı hakkıyla görmektedir.",
      ur: "اور جہاں کہیں بھی تم ہو وہ تمہارے ساتھ ہے، اور اللہ وہ سب کچھ دیکھ رہا ہے جو تم کرتے ہو۔",
      es: "Él está con vosotros dondequiera que estéis. Allah ve bien lo que hacéis.",
    },
    tafsir:
      "A profound reminder of Allah's constant companionship. You are never truly alone — Allah is with you in your darkest moments, your private struggles, and your hidden acts of goodness. His presence is not limited by space, distance, or time. He is always watching, always near.",
  },
  {
    id: "65:3",
    surahNumber: 65,
    surahName: "At-Talaq",
    surahNameArabic: "الطلاق",
    ayahNumber: 3,
    arabicText:
      "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
    transliteration:
      "Wa man yatawakkal 'alallāhi fahuwa ḥasbuh, innallāha bālighu amrih, qad ja'alallāhu likulli shay'in qadrā",
    translations: {
      en: "And whoever relies upon Allah — then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a decreed extent.",
      fr: "Et quiconque place sa confiance en Allah, Il lui suffit. Allah accomplit ce qu'Il veut. Allah a bien assigné une mesure à chaque chose.",
      ms: "Dan barangsiapa yang bertawakal kepada Allah, nescaya Allah mencukupi keperluannya. Sesungguhnya Allah melaksanakan kehendak-Nya. Allah telah mengadakan ketentuan bagi tiap-tiap sesuatu.",
      id: "Dan barangsiapa bertawakkal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya. Sesungguhnya Allah melaksanakan urusan yang (dikehendaki)Nya. Sungguh, Allah telah mengadakan ketentuan bagi setiap sesuatu.",
      tr: "Kim Allah'a tevekkül ederse, O ona yeter. Allah emrini yerine getirendir. Allah her şey için bir ölçü koymuştur.",
      ur: "اور جو کوئی اللہ پر توکل کرے تو وہ اسے کافی ہے۔ بے شک اللہ اپنا کام پورا کر کے رہتا ہے۔ اللہ نے ہر چیز کے لیے ایک اندازہ مقرر کر رکھا ہے۔",
      es: "Quien confíe en Allah, Él le bastará. Allah cumple Su designio. Allah ha fijado ya una medida para cada cosa.",
    },
    tafsir:
      "Tawakkul — placing complete trust in Allah — is one of the highest stations of faith. This verse promises that Allah is sufficient for anyone who truly relies on Him. Not just helpful, but sufficient. Whatever you need, whatever challenges you face, He is enough.",
  },
  {
    id: "67:1",
    surahNumber: 67,
    surahName: "Al-Mulk",
    surahNameArabic: "الملك",
    ayahNumber: 1,
    arabicText:
      "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Tabārakal-ladhī biyadihil-mulku wa huwa 'alā kulli shay'in qadīr",
    translations: {
      en: "Blessed is He in whose hand is dominion, and He is over all things competent.",
      fr: "Gloire à Celui en Qui est la souveraineté, et qui est Omnipotent!",
      ms: "Maha Suci Allah yang menguasai (segala) kerajaan, dan Dia Maha Kuasa atas segala sesuatu.",
      id: "Maha Suci Allah yang di tangan-Nyalah segala kerajaan, dan Dia Mahakuasa atas segala sesuatu.",
      tr: "Mülk elinde olan Allah her türlü yücelmeye layıktır. O her şeye gücü yetendir.",
      ur: "بابرکت ہے وہ ذات جس کے ہاتھ میں بادشاہی ہے، اور وہ ہر چیز پر قادر ہے۔",
      es: "¡Bendito sea Aquel en cuya mano está el dominio! Él es Omnipotente.",
    },
    tafsir:
      "Surah Al-Mulk is called 'the Protector' — the Prophet ﷺ said it intercedes for its reciter until he is forgiven. It opens with a declaration of Allah's complete sovereignty (Al-Mulk) over all creation. Reciting it every night before sleep is a beloved Sunnah.",
  },
  {
    id: "93:5",
    surahNumber: 93,
    surahName: "Ad-Duha",
    surahNameArabic: "الضحى",
    ayahNumber: 5,
    arabicText: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
    transliteration: "Wa lasawfa yu'tīka rabbuka fatarḍā",
    translations: {
      en: "And your Lord is going to give you, and you will be satisfied.",
      fr: "Et certes, ton Seigneur te donnera, et tu seras satisfait.",
      ms: "Dan sesungguhnya Tuhanmu akan memberikan (kurniaan-Nya) kepadamu, maka kamu akan berpuas hati.",
      id: "Dan sungguh, kelak Tuhanmu pasti memberikan karunia-Nya kepadamu, sehingga kamu menjadi puas.",
      tr: "Elbette Rabbin sana verecek ve sen razı olacaksın.",
      ur: "اور یقیناً آپ کا رب آپ کو اتنا دے گا کہ آپ خوش ہو جائیں گے۔",
      es: "Y ciertamente tu Señor te dará y quedarás satisfecho.",
    },
    tafsir:
      "Revealed when revelation paused and the Prophet ﷺ felt abandoned, this surah is Allah's personal reassurance. It is a divine promise of future abundance — spiritual, physical, and eternal. This verse is balm for the soul in times of waiting, struggle, and apparent darkness.",
  },
  {
    id: "94:5",
    surahNumber: 94,
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 5,
    arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    transliteration: "Fa'inna ma'al-'usri yusrā",
    translations: {
      en: "For indeed, with hardship will be ease.",
      fr: "Car en vérité, avec la difficulté vient la facilité.",
      ms: "Maka sesungguhnya bersama kesulitan ada kemudahan.",
      id: "Maka sesungguhnya bersama kesulitan ada kemudahan.",
      tr: "Çünkü gerçekten, güçlükle birlikte bir kolaylık vardır.",
      ur: "تو بے شک تکلیف کے ساتھ آسانی ہے۔",
      es: "Porque ciertamente, con la dificultad viene la facilidad.",
    },
    tafsir:
      "Allah repeats this promise twice in consecutive verses — a divine emphasis that ease always accompanies hardship. Scholars noted that 'hardship' is mentioned with the definite article (al-'usr — THE hardship) while 'ease' (yusr) is indefinite, implying that one hardship carries multiple kinds of relief.",
  },
  {
    id: "112:1",
    surahNumber: 112,
    surahName: "Al-Ikhlas",
    surahNameArabic: "الإخلاص",
    ayahNumber: 1,
    arabicText:
      "قُلْ هُوَ اللَّهُ أَحَدٌ",
    transliteration: "Qul huwallāhu aḥad",
    translations: {
      en: "Say: He is Allah, the One.",
      fr: "Dis: «Il est Allah, Unique.»",
      ms: "Katakanlah: Dialah Allah, Yang Maha Esa.",
      id: "Katakanlah: Dialah Allah, Yang Maha Esa.",
      tr: "De ki: O, Allah'tır, birdir.",
      ur: "کہو: وہ اللہ ایک ہے۔",
      es: "Di: «Él es Allah, Uno.»",
    },
    tafsir:
      "The opening of Surah Al-Ikhlas — the essence of Islamic monotheism in four verses. The Prophet ﷺ said this surah equals one-third of the Quran in reward because it perfectly describes the nature of Allah: one, eternal, self-sufficient, and without equal or offspring.",
  },
  {
    id: "33:41",
    surahNumber: 33,
    surahName: "Al-Ahzab",
    surahNameArabic: "الأحزاب",
    ayahNumber: 41,
    arabicText:
      "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا",
    transliteration:
      "Yā ayyuhalladhīna āmanū dhkurullāha dhikran kathīrā",
    translations: {
      en: "O you who have believed, remember Allah with much remembrance.",
      fr: "Ô vous qui croyez! Invoquez Allah fréquemment.",
      ms: "Wahai orang-orang yang beriman, ingatlah akan Allah dengan ingatan yang sebanyak-banyaknya.",
      id: "Wahai orang-orang yang beriman! Ingatlah kepada Allah, dengan ingatan yang sebanyak-banyaknya.",
      tr: "Ey iman edenler! Allah'ı çok çok zikredin.",
      ur: "اے ایمان والو! اللہ کا کثرت سے ذکر کرو۔",
      es: "¡Creyentes! Recordad a Allah con frecuencia.",
    },
    tafsir:
      "The only place in the Quran where believers are commanded to do something 'kathīran' (much/frequently). Dhikr is not just tasbeeh beads — it is keeping Allah present in your heart throughout the day, in every moment of joy, fear, gratitude, and challenge.",
  },
  {
    id: "9:51",
    surahNumber: 9,
    surahName: "At-Tawbah",
    surahNameArabic: "التوبة",
    ayahNumber: 51,
    arabicText:
      "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا ۚ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
    transliteration:
      "Qul llan yuṣībanā illā mā kataballāhu lanā, huwa mawlānā, wa 'alallāhi fal-yatawakkalil-mu'minūn",
    translations: {
      en: "Say: Nothing will befall us except what Allah has decreed for us. He is our protector. And upon Allah let the believers rely.",
      fr: "Dis: «Rien ne nous atteindra en dehors de ce qu'Allah a écrit pour nous. Il est Notre Maître. C'est en Allah que les croyants doivent mettre leur confiance.»",
      ms: "Katakanlah: Tidak sekali-kali akan menimpa kami sesuatu pun melainkan apa yang telah ditetapkan Allah bagi kami. Dialah Pelindung kami, dan kepada Allah jualah hendaknya orang-orang yang beriman bertawakal.",
      id: "Katakanlah: Tidak akan menimpa kami melainkan apa yang telah ditetapkan Allah bagi kami, Dialah pelindung kami, dan hanya kepada Allah orang-orang yang beriman harus bertawakal.",
      tr: "De ki: «Allah'ın bizim için yazdığından başkası bize isabet etmez. O bizim mevlâmızdır. Müminler yalnız Allah'a tevekkül etsinler.»",
      ur: "کہو: ہمیں صرف وہی پہنچے گا جو اللہ نے ہمارے لیے لکھ دیا ہے، وہی ہمارا مولا ہے، اور اللہ ہی پر مومنوں کو بھروسہ رکھنا چاہیے۔",
      es: "Di: «Solo nos ocurrirá lo que Allah haya decretado para nosotros. Él es nuestro Protector. Y en Allah deben confiar los creyentes.»",
    },
    tafsir:
      "Faith in Qadar (divine decree) is the sixth pillar of Iman. This verse transforms how we face hardship: nothing can touch us outside of what Allah has written. This is not resignation — it is the ultimate source of inner peace, knowing that a loving, all-knowing God is in control.",
  },
  {
    id: "17:44",
    surahNumber: 17,
    surahName: "Al-Isra",
    surahNameArabic: "الإسراء",
    ayahNumber: 44,
    arabicText:
      "وَإِن مِّن شَيْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِ وَلَٰكِن لَّا تَفْقَهُونَ تَسْبِيحَهُمْ",
    transliteration:
      "Wa in min shay'in illā yusabbiḥu biḥamdihī wa lākin lā tafqahūna tasbiḥahum",
    translations: {
      en: "And there is not a thing except that it exalts Allah by His praise, but you do not understand their exaltation.",
      fr: "Il n'est rien qui ne Le glorifie par Sa louange, mais vous ne comprenez pas leur façon de Le glorifier.",
      ms: "Dan tidak ada sesuatupun melainkan bertasbih memuji-Nya, tetapi kamu tidak memahami tasbih mereka.",
      id: "Dan tidak ada sesuatupun melainkan bertasbih dengan memuji-Nya, tetapi kamu tidak mengerti tasbih mereka.",
      tr: "Hiçbir şey yoktur ki O'nu hamd ile tespih etmesin, lakin siz onların tespihini anlamazsınız.",
      ur: "کوئی چیز ایسی نہیں جو اس کی حمد کے ساتھ تسبیح نہ کرتی ہو، لیکن تم ان کی تسبیح نہیں سمجھتے۔",
      es: "No hay nada que no Lo glorifique con Su alabanza, pero vosotros no comprendéis su glorificación.",
    },
    tafsir:
      "The entire universe is engaged in the remembrance of Allah — every tree, raindrop, mountain, and atom. When we make tasbeeh, we are joining the cosmic chorus of creation. This verse invites profound mindfulness: everything around you is worshipping. Join in.",
  },
  {
    id: "59:22",
    surahNumber: 59,
    surahName: "Al-Hashr",
    surahNameArabic: "الحشر",
    ayahNumber: 22,
    arabicText:
      "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
    transliteration:
      "Huwallāhulladhī lā ilāha illā huw, 'ālimu l-ghaybi wash-shahādah, huwar-raḥmānur-raḥīm",
    translations: {
      en: "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.",
      fr: "C'est Lui, Allah, en dehors de qui il n'y a point de divinité, Le Connaisseur du mystère et du témoigné. C'est Lui, le Tout Miséricordieux, le Très Miséricordieux.",
      ms: "Dialah Allah yang tiada Tuhan selain-Nya, Yang Mengetahui yang ghaib dan yang nyata. Dia-lah Yang Maha Pemurah lagi Maha Penyayang.",
      id: "Dialah Allah yang tiada Tuhan selain Dia, Yang Mengetahui yang gaib dan yang nyata, Dialah Yang Maha Pengasih lagi Maha Penyayang.",
      tr: "O, görüneni de görünmeyeni de bilen, kendisinden başka ilah olmayan Allah'tır. O, Rahman'dır, Rahim'dir.",
      ur: "وہی اللہ ہے جس کے سوا کوئی معبود نہیں، غیب اور حاضر سب کو جاننے والا ہے، وہی رحمن رحیم ہے۔",
      es: "Él es Allah, no hay más dios que Él, que conoce lo oculto y lo manifiesto. Él es el Clemente, el Misericordioso.",
    },
    tafsir:
      "These final verses of Surah Al-Hashr contain seven of the most beautiful Names of Allah. The Prophet ﷺ said: 'Whoever recites the last three verses of Surah Al-Hashr in the morning, Allah assigns seventy thousand angels who send blessings upon him until the evening.' These verses are a treasure for the morning.",
  },
  {
    id: "3:8",
    surahNumber: 3,
    surahName: "Ali 'Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 8,
    arabicText:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
    transliteration:
      "Rabbanā lā tuzigh qulūbanā ba'da idh hadaytanā wa hab lanā min ladunka raḥmah, innaka antal-wahhāb",
    translations: {
      en: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      fr: "Notre Seigneur, ne dévie pas nos coeurs après que Tu nous aies guidés et accorde-nous de Ta part une miséricorde car Tu es, vraiment, le Grand Donateur.",
      ms: "Wahai Tuhan kami, janganlah Engkau pesongkan hati kami sesudah Engkau memberi petunjuk kepada kami, dan kurniakanlah kepada kami limpah rahmat dari sisi-Mu; sesungguhnya Engkau jualah Tuhan Yang Maha Pemberi.",
      id: "Ya Tuhan kami, janganlah Engkau jadikan hati kami condong kepada kesesatan sesudah Engkau beri petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi Engkau; karena sesungguhnya Engkaulah Maha Pemberi.",
      tr: "Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi saptırma. Katından bize bir rahmet ver. Şüphesiz sen çok bağışlayan ve verensin.",
      ur: "اے ہمارے رب! جب تو نے ہمیں ہدایت دی ہے تو ہمارے دلوں کو ٹیڑھا نہ ہونے دے اور ہمیں اپنی طرف سے رحمت عطا فرما، بے شک تو بڑا عطا کرنے والا ہے۔",
      es: "Señor nuestro, no desvíes nuestros corazones después de habernos guiado. Concédenos Tu misericordia. Eres el que más da.",
    },
    tafsir:
      "This supplication of the firmly grounded in knowledge acknowledges that guidance itself is a gift that must be continuously renewed. We ask Allah not just to guide us once, but to keep our hearts firm on the straight path. It is the prayer of those who deeply understand the fragility of the human heart.",
  },
  {
    id: "25:63",
    surahNumber: 25,
    surahName: "Al-Furqan",
    surahNameArabic: "الفرقان",
    ayahNumber: 63,
    arabicText:
      "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا",
    transliteration:
      "Wa 'ibādur-raḥmānilladhīna yamshūna 'alal-arḍi hawnan",
    translations: {
      en: "And the servants of the Most Merciful are those who walk upon the earth easily.",
      fr: "Les serviteurs du Tout Miséricordieux sont ceux qui marchent humblement sur terre.",
      ms: "Dan hamba-hamba (Allah) Yang Maha Pemurah ialah mereka yang berjalan di atas muka bumi dengan rendah hati.",
      id: "Dan hamba-hamba Tuhan Yang Maha Pengasih itu adalah orang-orang yang berjalan di bumi dengan rendah hati.",
      tr: "Rahman'ın kulları yeryüzünde mütevazı yürüyenlerdir.",
      ur: "اور رحمٰن کے بندے وہ ہیں جو زمین پر آہستگی سے چلتے ہیں۔",
      es: "Los siervos del Misericordioso son los que caminan humildemente por la tierra.",
    },
    tafsir:
      "This begins the description of Ibad al-Rahman — the beloved servants of Allah. Their first quality is humility in their very walk. True spiritual elevation manifests as gentleness and groundedness, not arrogance. How we carry ourselves through the world reflects the state of our hearts.",
  },
  {
    id: "42:19",
    surahNumber: 42,
    surahName: "Ash-Shura",
    surahNameArabic: "الشورى",
    ayahNumber: 19,
    arabicText:
      "اللَّهُ لَطِيفٌ بِعِبَادِهِ يَرْزُقُ مَن يَشَاءُ ۖ وَهُوَ الْقَوِيُّ الْعَزِيزُ",
    transliteration:
      "Allāhu laṭīfun bi'ibādihī yarzuqu man yashā', wa huwal-qawiyyul-'azīz",
    translations: {
      en: "Allah is Subtle with His servants; He gives provisions to whom He wills. And He is the Powerful, the Exalted in Might.",
      fr: "Allah est Subtil envers Ses serviteurs. Il accorde Ses subsistances à qui Il veut. Et Il est le Fort, le Tout-Puissant.",
      ms: "Allah Maha Halus terhadap hamba-hamba-Nya; Dia memberi rezeki kepada siapa yang dikehendaki-Nya dan Dia Maha Kuat lagi Maha Perkasa.",
      id: "Allah Mahalembut terhadap hamba-hamba-Nya; Dia memberi rezeki kepada siapa yang Dia kehendaki, dan Dia Mahakuat, Mahaperkasa.",
      tr: "Allah kullarına karşı lütufkârdır, dilediğine rızık verir. O, kuvvetlidir, azîzdir.",
      ur: "اللہ اپنے بندوں پر بڑا لطیف ہے، جسے چاہتا ہے رزق دیتا ہے، اور وہ بڑا طاقتور عزت والا ہے۔",
      es: "Allah es sutil con Sus siervos; provee a quien Él quiere. Él es el Fuerte, el Poderoso.",
    },
    tafsir:
      "Al-Latif (the Subtle, the Gentle) is one of the most beautiful Names of Allah. He works through means so subtle you may not even recognize His care. Your provisions, your relationships, the circumstances that led you here — all are His gentle arrangements. He is caring for you in ways beyond what you can see.",
  },
  {
    id: "11:88",
    surahNumber: 11,
    surahName: "Hud",
    surahNameArabic: "هود",
    ayahNumber: 88,
    arabicText:
      "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
    transliteration:
      "Wa mā tawfīqī illā billāh, 'alayhi tawakkaltu wa ilayhi unīb",
    translations: {
      en: "And my success is not but through Allah. Upon Him I have relied, and to Him I return.",
      fr: "Ma réussite ne vient que d'Allah. C'est en Lui que j'ai mis ma confiance; et c'est à Lui que je recours.",
      ms: "Dan tidak ada taufik bagiku melainkan dengan (pertolongan) Allah. Hanya kepada-Nya aku bertawakal dan hanya kepada-Nya aku kembali.",
      id: "Dan tidak ada taufik bagiku melainkan dengan (pertolongan) Allah. Hanya kepada-Nya aku bertawakal dan hanya kepada-Nya aku kembali.",
      tr: "Benim başarım ancak Allah'ın yardımıyladır. Yalnız O'na tevekkül ettim ve yalnız O'na yöneliyorum.",
      ur: "اور میری توفیق صرف اللہ ہی کی طرف سے ہے۔ اسی پر میں نے بھروسہ کیا اور اسی کی طرف رجوع کرتا ہوں۔",
      es: "Mi éxito solo viene de Allah. En Él confío y a Él me vuelvo.",
    },
    tafsir:
      "The words of Prophet Shu'ayb (AS) to his people — a declaration that success in any endeavor comes only from Allah. This is the mindset of the believer: work hard, plan well, but attribute all success to Allah. Without His tawfiq (divine enablement), no effort bears fruit.",
  },
  {
    id: "4:36",
    surahNumber: 4,
    surahName: "An-Nisa",
    surahNameArabic: "النساء",
    ayahNumber: 36,
    arabicText:
      "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا",
    transliteration:
      "Wa'budullāha wa lā tushrikū bihī shay'an, wa bil-wālidayni iḥsānā",
    translations: {
      en: "Worship Allah and associate nothing with Him, and to parents do good.",
      fr: "Adorez Allah et ne Lui associez rien. Agissez bien envers vos père et mère.",
      ms: "Dan sembahlah Allah dan janganlah kamu menyekutukan-Nya dengan sesuatu pun. Dan berbuat baiklah kepada kedua orang tua.",
      id: "Dan sembahlah Allah dan janganlah kamu mempersekutukan-Nya dengan sesuatu apa pun. Dan berbuat-baiklah kepada kedua orang tua.",
      tr: "Sadece Allah'a kulluk edin ve hiçbir şeyi O'na ortak koşmayın. Ana babaya iyilik edin.",
      ur: "اللہ کی عبادت کرو اور کسی کو اس کا شریک نہ بناؤ، اور والدین کے ساتھ حسن سلوک کرو۔",
      es: "Adorad a Allah y no asociéis nada con Él. Y haced el bien a vuestros padres.",
    },
    tafsir:
      "The two most fundamental obligations are placed side by side: worshipping Allah alone, and honoring parents. In eighteen places in the Quran, the command to honor parents immediately follows the command to worship Allah — a divine pairing that defines the Muslim's most essential relationships.",
  },
  {
    id: "16:97",
    surahNumber: 16,
    surahName: "An-Nahl",
    surahNameArabic: "النحل",
    ayahNumber: 97,
    arabicText:
      "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    transliteration:
      "Man 'amila ṣāliḥan min dhakarin aw unthā wa huwa mu'minun falanuhyiyannahu ḥayātan ṭayyibah",
    translations: {
      en: "Whoever does righteousness, whether male or female, while he is a believer — We will surely cause him to live a good life.",
      fr: "Quiconque fait le bien, homme ou femme, et est croyant, Nous lui ferons vivre une belle vie.",
      ms: "Sesiapa yang beramal soleh, dari lelaki atau perempuan, sedang ia beriman, maka sesungguhnya Kami akan menghidupkan dia dengan kehidupan yang baik.",
      id: "Barangsiapa mengerjakan kebajikan, baik laki-laki maupun perempuan dalam keadaan beriman, maka pasti akan Kami berikan kepadanya kehidupan yang baik.",
      tr: "Erkek ya da kadın, kim mümin olarak salih bir amel işlerse, onu mutlaka güzel bir hayatla yaşatacağız.",
      ur: "جو بھی نیک عمل کرے مرد ہو یا عورت، بشرطیکہ وہ مومن ہو، ہم اسے ضرور پاکیزہ زندگی بخشیں گے۔",
      es: "Quien obre bien, sea hombre o mujer, siendo creyente, le daremos una vida agradable.",
    },
    tafsir:
      "The 'good life' (hayātan ṭayyibah) promised here is not necessarily material wealth — it is a life of inner peace, contentment, and spiritual richness that cannot be taken away. The combination of iman (belief) and 'amal salih (righteous deeds) is the divine formula for genuine happiness.",
  },
  {
    id: "2:45",
    surahNumber: 2,
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 45,
    arabicText:
      "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
    transliteration:
      "Wasta'īnū biṣ-ṣabri waṣ-ṣalāh, wa innahā lakabīratun illā 'alal-khāshi'īn",
    translations: {
      en: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive to Allah.",
      fr: "Cherchez secours dans l'endurance et la Salât. Certes, il est difficile à supporter, sauf pour les humbles.",
      ms: "Dan mintalah pertolongan (kepada Allah) dengan jalan sabar dan mengerjakan solat; dan sesungguhnya solat itu amatlah berat kecuali kepada orang-orang yang khusyuk.",
      id: "Dan mintalah pertolongan (kepada Allah) dengan sabar dan sholat. Dan (sholat) itu sungguh berat, kecuali bagi orang-orang yang khusyuk.",
      tr: "Sabır ve namaz ile Allah'tan yardım isteyin. Şüphesiz bu, huşu sahipleri dışında, herkese ağır gelir.",
      ur: "اور صبر اور نماز کے ذریعے مدد مانگو، اور یہ ضرور بھاری کام ہے مگر ان لوگوں پر نہیں جو اللہ سے ڈرنے والے ہیں۔",
      es: "Pedid ayuda en la paciencia y en la oración. Es difícil, salvo para los humildes.",
    },
    tafsir:
      "Two pillars for navigating life's trials: sabr (patient perseverance) and salah (prayer). Sabr is not passive — it is active endurance with trust in Allah. And salah is not just ritual — it is the believer's direct line to the Creator, renewed five times a day as an anchor against the storms of life.",
  },
];

export function getDailyAyah(): Ayah {
  const start = new Date(2024, 0, 1);
  const now = new Date();
  const dayIndex = Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  return AYAHS[dayIndex % AYAHS.length];
}

export function getAyahById(id: string): Ayah | undefined {
  return AYAHS.find((a) => a.id === id);
}
