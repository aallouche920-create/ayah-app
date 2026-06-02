export interface Dhikr {
  id: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  count: number;
  benefit: string;
}

export interface AdhkarSection {
  id: "morning" | "evening";
  title: string;
  titleArabic: string;
  items: Dhikr[];
}

export const MORNING_ADHKAR: Dhikr[] = [
  {
    id: "m1",
    arabicText:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
    transliteration:
      "Aṣbaḥnā wa aṣbaḥal-mulku lillāh, walḥamdu lillāh, lā ilāha illallāhu waḥdahu lā sharīka lah",
    translation:
      "We have entered upon a new morning and with it all dominion belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner.",
    count: 1,
    benefit: "The morning declaration of tawhid",
  },
  {
    id: "m2",
    arabicText:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    transliteration:
      "Allāhumma bika aṣbaḥnā, wa bika amsaynā, wa bika naḥyā, wa bika namūt, wa ilaykan-nushūr",
    translation:
      "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
    count: 1,
    benefit: "Acknowledging Allah's control over life",
  },
  {
    id: "m3",
    arabicText:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subḥānallāhi wa biḥamdih",
    translation: "Glory is to Allah and praise is to Him.",
    count: 100,
    benefit: "Sins are forgiven even if they are like the foam of the sea",
  },
  {
    id: "m4",
    arabicText:
      "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
    transliteration:
      "Allāhumma anta rabbī lā ilāha illā ant, khalaqtanī wa anā 'abduk, wa anā 'alā 'ahdika wa wa'dika mas-taṭa't",
    translation:
      "O Allah, You are my Lord. None has the right to be worshipped except You. You created me and I am Your servant, and I abide to Your covenant and promise as best I can.",
    count: 1,
    benefit: "Sayyid al-Istighfar — the master of seeking forgiveness",
  },
  {
    id: "m5",
    arabicText:
      "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ",
    transliteration:
      "Allāhumma innī aṣbaḥtu ush-hiduk, wa ush-hidu ḥamalata 'arshik, wa malā'ikatak, wa jamī'a khalqik, annaka antallāhu lā ilāha illā anta waḥdaka lā sharīka lak",
    translation:
      "O Allah, I take You, the carriers of Your Throne, Your angels and all of Your creation as witnesses that You are Allah and there is none worthy of worship but You alone, without partner.",
    count: 4,
    benefit: "Whoever says this 4 times, Allah frees a quarter of him from the Fire",
  },
  {
    id: "m6",
    arabicText: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillāhilladhī lā yaḍurru ma'asmihi shay'un fil-arḍi wa lā fis-samā'i wa huwas-samī'ul-'alīm",
    translation:
      "In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is the All-Hearing, the All-Knowing.",
    count: 3,
    benefit: "Nothing will harm him",
  },
  {
    id: "m7",
    arabicText:
      "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    transliteration:
      "Raḍītu billāhi rabbā, wa bil-islāmi dīnā, wa bimuḥammadin ṣallallāhu 'alayhi wa sallama nabiyyā",
    translation:
      "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.",
    count: 3,
    benefit: "It is a right upon Allah to please him on the Day of Judgement",
  },
  {
    id: "m8",
    arabicText:
      "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    transliteration:
      "Allāhumma ṣalli wa sallim 'alā nabiyyinā muḥammad",
    translation:
      "O Allah, send prayers and peace upon our Prophet Muhammad.",
    count: 10,
    benefit: "Ten blessings descend upon the one who sends blessings upon the Prophet",
  },
];

export const EVENING_ADHKAR: Dhikr[] = [
  {
    id: "e1",
    arabicText:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
    transliteration:
      "Amsaynā wa amsal-mulku lillāh, walḥamdu lillāh, lā ilāha illallāhu waḥdahu lā sharīka lah",
    translation:
      "We have entered upon the evening and with it all dominion belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner.",
    count: 1,
    benefit: "The evening declaration of tawhid",
  },
  {
    id: "e2",
    arabicText:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Allāhumma bika amsaynā, wa bika aṣbaḥnā, wa bika naḥyā, wa bika namūt, wa ilaykal-maṣīr",
    translation:
      "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final return.",
    count: 1,
    benefit: "Acknowledging Allah's control in the evening",
  },
  {
    id: "e3",
    arabicText:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration:
      "A'ūdhu bikalimātillāhit-tāmmāti min sharri mā khalaq",
    translation:
      "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    count: 3,
    benefit: "Nothing will harm him that evening",
  },
  {
    id: "e4",
    arabicText:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي",
    transliteration:
      "Allāhumma 'āfinī fī badanī, Allāhumma 'āfinī fī sam'ī, Allāhumma 'āfinī fī baṣarī",
    translation:
      "O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight.",
    count: 3,
    benefit: "Protection for body and senses",
  },
  {
    id: "e5",
    arabicText:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
    transliteration:
      "Allāhumma innī a'ūdhu bika minal-kufri wal-faqr, wa a'ūdhu bika min 'adhābil-qabr",
    translation:
      "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave.",
    count: 3,
    benefit: "Protection from disbelief, poverty and punishment of the grave",
  },
  {
    id: "e6",
    arabicText: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subḥānallāhi wa biḥamdih",
    translation: "Glory is to Allah and praise is to Him.",
    count: 100,
    benefit: "Sins are forgiven even if they are like the foam of the sea",
  },
  {
    id: "e7",
    arabicText:
      "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ",
    transliteration:
      "Allāhumma innī amsaytu ush-hiduk, wa ush-hidu ḥamalata 'arshik, wa malā'ikatak, wa jamī'a khalqik, annaka antallāhu lā ilāha illā anta waḥdaka lā sharīka lak",
    translation:
      "O Allah, I take You, the carriers of Your Throne, Your angels and all of Your creation as witnesses that You are Allah and there is none worthy of worship but You alone, without partner.",
    count: 4,
    benefit: "Whoever says this 4 times, Allah frees a quarter of him from the Fire",
  },
  {
    id: "e8",
    arabicText:
      "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    transliteration:
      "Allāhumma ṣalli wa sallim 'alā nabiyyinā muḥammad",
    translation:
      "O Allah, send prayers and peace upon our Prophet Muhammad.",
    count: 10,
    benefit: "Ten blessings descend upon the one who sends blessings upon the Prophet",
  },
];
