/* ============================================================
   THE LOST LIBRARIES — side quests
   Loaded by index.html, before the page script.

   A side quest is one object or one person followed all the way
   through: longer than a catalogue entry, narrower than a section.
   The catalogue says what was destroyed. These say what happened
   afterwards to the things that got out.

   To add one, copy the shape below. Every field is optional except
   id, title and body — a quest with no steps, no record link and no
   sources still renders.

     id      a short slug. Used for the URL fragment, so keep it
             lowercase, no spaces.
     kicker  small label above the title. Two or three words.
     title   sentence case, like the section titles.
     stand   one or two sentences, shown before the story opens.
     body    array of paragraphs. Plain text, no HTML.
     steps   array of {when, what} — a dated list. Keep 'what' to one
             line. Headed "Chain of custody" unless stepsLabel says
             otherwise.
     stepsLabel  heading for that list, when "Chain of custody" is the
             wrong words for it.
     record  the exact `name` of an entry in data.js. Renders a
             button that opens that record's card. A name that
             doesn't match anything is skipped, not an error.
     note    one line explaining why that record is the link.
     src     array of {label, url} — same shape as SOURCES in data.js.
   ============================================================ */

var SIDEQUESTS = [

  /* ---------------------------------------------------------- */
  {
    id: 'gilgamesh',
    kicker: 'Object biography',
    title: 'The tablet that ended up in a craft store',
    stand: 'A fragment of the oldest long poem we have was dug up in 1853, stolen in 1991, laundered through a false paperwork trail, and sold privately to Hobby Lobby for about $1.67 million. It took the US government two years to give it back.',

    body: [

      'Record 002 in the catalogue is the library of Ashurbanipal at Nineveh, which burned when the city fell in 612 BC. The fire was the reason anything survived. Clay tablets left in a burning building do not turn to ash; they bake. When a British-sponsored dig opened the mound above Nineveh in 1853, it pulled up thousands of them, and among them were the tablets carrying the Epic of Gilgamesh — the oldest long poem anyone has found.',

      'One of those tablets is about six inches by five, written in Akkadian cuneiform, and carries the passage where Gilgamesh tells his mother about his dreams. It is known as the Gilgamesh Dream Tablet. It is usually dated to around 1500 BC, which would make it some eight centuries old by the time it reached Ashurbanipal’s shelves — an antique in an ancient library, if that is in fact where it sat. Nobody can prove it was. That is the whole trouble with a looted object: most of what makes it valuable is its history, and looting is the deliberate destruction of exactly that.',

      'What the US government could document begins in 1991, when the tablet is believed to have been taken from an Iraqi museum in the disorder after the Gulf War. In 2003 an American antiquities dealer bought it in London from a relative of a coin dealer, still crusted with dirt, and brought it into the United States without declaring it at the border.',

      'In 2007 the dealer sold it on with a letter of provenance saying it had come out of a 1981 auction lot of miscellaneous ancient bronze fragments. The letter was a fiction, and it travelled with the tablet through several more sales in several more countries. Every resale made that paperwork look a little older and a little more respectable, which is the point of it.',

      'In 2014 a London auction house sold the tablet in a private sale to Hobby Lobby, the American craft store chain. An employee carried it by hand on a flight from London to New York. Four years earlier a cultural property lawyer the company consulted had warned it in writing that buying antiquities out of Iraq carried considerable risk that the items were looted. The company kept buying. In 2017 it forfeited some 5,500 artefacts that had been shipped to its offices from the Middle East labelled as clay tile samples, and paid a $3 million fine.',

      'The tablet went on display at the Museum of the Bible in Washington, founded by Hobby Lobby’s president, Steve Green. In 2017 a curator doing provenance research on the collection started asking where it had come from, and the false 1981 letter did not survive the asking. Homeland Security Investigations seized the tablet from the museum in September 2019. Hobby Lobby consented to forfeiture, a judge signed the order in July 2021, and on 23 September 2021 the United States handed it back to Iraq at a ceremony in Washington. Hobby Lobby then sued the auction house to get its money back.',

      'The tablet is in Baghdad now. The thirty years it spent moving between London and New York are, ironically, the only stretch of its 3,500-year life that anyone can document in any detail.'
    ],

    steps: [
      { when: 'c. 1500 BC',  what: 'Written in Akkadian, somewhere in southern Mesopotamia.' },
      { when: '612 BC',      what: 'Nineveh falls. Ashurbanipal’s library burns, baking its tablets hard.' },
      { when: '1853',        what: 'A dig in the mound above Nineveh recovers thousands of tablets, the Gilgamesh texts among them.' },
      { when: '1991',        what: 'Believed taken from an Iraqi museum after the Gulf War.' },
      { when: '2003',        what: 'Bought in London by a US dealer; carried into the country undeclared.' },
      { when: '2007',        what: 'Sold on with a false provenance letter citing a 1981 auction of bronze fragments.' },
      { when: '2014',        what: 'Private sale to Hobby Lobby, about $1.67 million. Hand-carried London to New York.' },
      { when: '2017',        what: 'A museum curator’s provenance research exposes the paperwork.' },
      { when: 'Sept 2019',   what: 'Seized from the Museum of the Bible under a warrant.' },
      { when: 'July 2021',   what: 'Forfeiture ordered. Hobby Lobby does not contest it.' },
      { when: 'Sept 2021',   what: 'Returned to Iraq at a ceremony in Washington.' }
    ],

    record: 'Library of Ashurbanipal',
    note: 'Where the tablet most likely spent the 7th century BC, and the fire that preserved it.',

    src: [
      { label: 'US Department of Justice — United States Returns to Iraq Rare Tablet Bearing Portion of Epic of Gilgamesh (2021)',
        url: 'https://www.justice.gov/opa/pr/united-states-returns-iraq-rare-tablet-bearing-portion-epic-gilgamesh' },
      { label: 'Smithsonian Magazine — Hobby Lobby Forfeits Rare Gilgamesh Tablet Smuggled Out of Iraq',
        url: 'https://www.smithsonianmag.com/smart-news/hobby-lobby-forfeits-rare-gilgamesh-tablet-smuggled-iraq-180978314/' },
      { label: 'NBC News — Ancient Gilgamesh tablet taken from Iraq and bought by Hobby Lobby returned',
        url: 'https://www.nbcnews.com/news/us-news/ancient-gilgamesh-tablet-taken-iraq-bought-hobby-lobby-returned-n1279996' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'babylon',
    kicker: 'A site, not a shelf',
    title: 'The base on top of the part nobody had read yet',
    stand: 'In April 2003, American forces built a military camp across 150 hectares of Babylon. They left in January 2005. What a base does to an archaeological site is not what fire does to a library, and in one specific way it is worse.',

    body: [

      'Every other entry in this catalogue is a collection somebody had already assembled — shelved, catalogued, in some cases read for centuries before it burned. Babylon in 2003 was the other kind of library. Most of what a Mesopotamian site holds is still in the ground, unexcavated and unread, and that is where the tablet archives of this region have always come from. Mari was a mound in the Syrian desert until a dig opened it in 1933 and found more than twenty thousand cuneiform tablets inside. Nineveh was a mound too.',

      'Camp Alpha went up within days of the invasion, on 150 of the site’s 900 hectares, in the middle. Most of the construction was done by KBR under contract. Command passed to a Polish-led force that September, and the last troops left on 15 January 2005. At its largest the camp held about two thousand soldiers.',

      'John Curtis, then keeper of the Ancient Near East at the British Museum, inspected the site in December 2004 and filed his report on the day the base was handed back. An asphalt car park had been flattened, tripled in size, gravelled and sprayed with a petroleum product to take helicopters. Some 300,000 square metres of ground had been covered in imported gravel. Three anti-tank trenches had been cut near the ziggurat, one of them 170 metres long and two metres deep, with pottery and inscribed brick fragments visible in the spoil. A dozen more large trenches and a dozen smaller cuttings went into the mounds, some into deposits nobody had ever excavated. Heavy vehicles had broken the brick pavement of the Processional Way in two places. Fuel was seeping from six container sites near the Greek theatre. Thousands of sandbags had been filled with earth taken from the site itself, sherds and bone in them; when the fill was switched to imported sand, that contaminated the deposits from the other direction. Curtis called his list indicative rather than complete. Parts of the site could not be inspected because of landmines.',

      'Nothing in that list is a fire, and almost none of it removed anything. That is the point worth sitting with. The information in an archaeological site is not really the objects — a potsherd on its own tells you very little. It is the order the objects are lying in: what is above what, what is beside what, which floor a tablet was sitting on when the roof came down. Gravel, fuel, ruts and trench spoil do not take the tablets away. They scramble the sentence the tablets were lying in. And a site can only be excavated once. The first dig is the only dig; everything not recorded then is simply not recoverable later, by anyone, ever.',

      'Two things keep this from being a simple story. The damage to the moulded dragons of the Ishtar Gate — bricks levered at on ten of the reliefs — Curtis attributes to looters, not to soldiers, and he says so plainly in the report. And Babylon was not an untouched site in 2003. Through the 1980s Saddam Hussein had new walls raised on the ancient foundations, built with bricks stamped with his own name in imitation of Nebuchadnezzar, and a palace put up on an artificial hill overlooking the ruins. The Iraqi state treated the place as a stage set first. None of that makes the camp defensible. It does mean this is not one country wrecking another country’s past; it is two governments in succession deciding the ground was available.',

      'Iraq asked UNESCO to intervene in February 2005, a month after the handover. There were assessment sessions in Paris, a damage report, a conservation and management plan, and years of work funded in part by the same government that built the base. In July 2019, fourteen years after the last soldier left, Babylon was finally inscribed as a World Heritage site. Nobody was prosecuted, and nobody expected anybody to be. Destroying the context of an archaeological site is not, in practice, a thing people are charged with.',

      'Whatever is still under the gravel is still under the gravel. What was lost is the ability to read it in order, and that went in the first week.'
    ],

    stepsLabel: 'What happened to the ground',

    steps: [
      { when: '6th c. BC',  what: 'Nebuchadnezzar II’s Babylon: the Ishtar Gate, the Processional Way, the city at its height.' },
      { when: '1899–1917', what: 'German excavations under Robert Koldewey. The Ishtar Gate is shipped to Berlin.' },
      { when: '1980s',      what: 'Saddam Hussein rebuilds walls on the ancient foundations, bricks stamped with his name.' },
      { when: 'Apr 2003',   what: 'US forces establish Camp Alpha across 150 of the site’s 900 hectares.' },
      { when: 'Sept 2003',  what: 'Command passes to a Polish-led multinational force.' },
      { when: 'Dec 2004',   what: 'John Curtis of the British Museum inspects the site.' },
      { when: '15 Jan 2005',what: 'The base is handed back. Curtis’s report is published the same day.' },
      { when: 'Feb 2005',   what: 'Iraq asks UNESCO to assess the damage.' },
      { when: 'June 2005',  what: 'Special session at UNESCO in Paris opens the assessment programme.' },
      { when: 'July 2019',  what: 'Babylon is inscribed as a UNESCO World Heritage site.' }
    ],

    record: 'Library of Zimri-Lim',
    note: 'Record 001. Mari was an undisturbed mound until 1933, when a dig found a Bronze Age palace archive inside it. That is what is at stake under a layer of gravel.',

    src: [
      { label: 'The Art Newspaper — US base has caused shocking damage to Babylon (on John Curtis’s British Museum report, 2005)',
        url: 'https://www.theartnewspaper.com/archive/us-base-has-caused-shocking-damage-to-babylon' },
      { label: 'UNESCO World Heritage Centre — Report on Damage Assessments in Babylon',
        url: 'https://whc.unesco.org/en/activities/586' },
      { label: 'Al Jazeera — Report: US forces damaged Babylon (15 January 2005)',
        url: 'https://www.aljazeera.com/news/2005/1/15/report-us-forces-damaged-babylon' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'hirschfeld',
    kicker: 'The photograph you have seen',
    title: 'Whose books are in that picture',
    stand: 'The newsreel of students throwing books onto a bonfire in Berlin is one of the most reproduced images of the twentieth century. The books mostly came from one particular library, and almost nobody who shares the picture knows which one.',

    body: [

      'The Institut für Sexualwissenschaft opened in a villa in the Berlin Tiergarten in July 1919. Magnus Hirschfeld — a doctor, Jewish, gay, and by then the best-known campaigner in Europe against the law that criminalised homosexuality — ran it as research institute, clinic, counselling service and archive at the same time. It held roughly 20,000 books and some 35,000 photographs, thousands of case files, and survey responses from tens of thousands of ordinary people describing their own lives. Some of the first gender-affirming surgeries anywhere in the world were performed by its doctors.',

      'On 6 May 1933 students from the Deutsche Studentenschaft arrived with a brass band, occupied the building and emptied the shelves into the street. Four days later the contents went onto the pyre on the Opernplatz along with everything else classed as un-German, in front of a crowd of tens of thousands, with Goebbels speaking. The film shot that night is the film everybody has seen. The books in it are, to a large extent, this library.',

      'Hirschfeld was abroad on a lecture tour and could not go home. He watched his own library burn in a cinema newsreel in Paris. He died in Nice two years later, on his sixty-seventh birthday.',

      'What burned was not only books. The case files went, the questionnaires went, the correspondence and the photographs went — the entire research record of the first institution anywhere to study this subject systematically. The field restarted from close to nothing a generation later, and a fair amount of what it had to work out from scratch had already been known in 1930.',

      'The sharpest illustration is one patient. Dora Richter, born in a village in the Erzgebirge in 1892, was among the first people in the world to undergo complete gender-affirming surgery, at the institute, in 1931. After May 1933 she disappears from the record — because the record was the thing that burned — and for ninety years historians assumed she had been killed in the raid.',

      'She had not been. In 2024 a researcher at the Lili Elbe Bibliothek, working through the German Red Cross tracing service and a village registry office, reassembled her out of other people’s paperwork: a 1925 passport application, two censuses, a 1934 name change, an entry added to her baptismal record in 1946, an expulsion document, a refugee card listing her occupation as lace-maker. Dora Richter died in Allersberg in Bavaria on 26 April 1966, aged 74.',

      'That is what reconstruction looks like after a library is destroyed. Not recovery — the books are gone and the case files with them — but one life pieced back together out of the filing cabinets of institutions that had no interest in her and happened to survive.'
    ],

    stepsLabel: 'What happened',

    steps: [
      { when: 'July 1919',  what: 'The institute opens in the Tiergarten: clinic, archive and research institute at once.' },
      { when: '1919–1933', what: 'Roughly 20,000 books, 35,000 photographs, thousands of case files.' },
      { when: '1931',       what: 'Dora Richter has surgery at the institute.' },
      { when: '6 May 1933', what: 'The Deutsche Studentenschaft occupy the building and strip the shelves.' },
      { when: '10 May 1933',what: 'The contents burn on the Opernplatz. The footage becomes the image of Nazi book burning.' },
      { when: '1933',       what: 'Hirschfeld, stranded abroad, watches it on a newsreel in Paris.' },
      { when: '14 May 1935',what: 'Hirschfeld dies in Nice, on his birthday.' },
      { when: '2024',       what: 'Dora Richter’s survival is established from church, census and refugee records.' }
    ],

    record: 'Institut fuer Sexualwissenschaft',
    note: 'Record 055. The catalogue gives it a date and a perpetrator. This is the rest of it.',

    src: [
      { label: 'Holocaust Memorial Day Trust — 6 May 1933: Looting of the Institute of Sexology',
        url: 'https://www.hmd.org.uk/resources/page/9/?genocide=6' },
      { label: 'Nazi book burnings — background and chronology',
        url: 'https://en.wikipedia.org/wiki/Nazi_book_burnings' },
      { label: 'Lili Elbe Bibliothek — Dora lived (2024), the archival research establishing her survival',
        url: 'https://lili-elbe.de/blog/2024/09/dora-lived/' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'timbuktu',
    kicker: 'An evacuation',
    title: 'Two thousand five hundred footlockers',
    stand: 'The world was told that the manuscripts of Timbuktu had burned. Most of them had already left the city in metal trunks, by road and then by boat, and nobody who knew that was in a hurry to correct the headline.',

    body: [

      'Tuareg rebels and then jihadist groups took Timbuktu in April 2012. The city held something in the order of 350,000 manuscripts — not in one library but spread across dozens of family collections and institutes, some of them centuries old, covering law, astronomy, medicine, poetry, music and the settlement of disputes.',

      'Abdel Kader Haidara, who ran one of those family libraries, did not try to defend them. He bought footlockers. Over about three months some 2,500 metal trunks were bought, filled and distributed into safe houses around the city — which is the entire collection moved once before anybody had left Timbuktu at all.',

      'The second move started in September 2012. Couriers drove 4x4s south at a rate of roughly 3,000 manuscripts a day for ninety days, through a jihadist checkpoint outside Timbuktu and another at Douentza, and then through some fifteen Malian army checkpoints on the government side, where soldiers wanted the trunks opened and a thorough search was its own kind of damage.',

      'When the roads closed in January 2013 the route went onto the river. Mule carts carried trunks to Toya and ten other villages on the Niger; boats took fifteen footlockers each, with two couriers and two boatmen aboard; then Djenné, then taxis to Bamako. A convoy of twenty boats was hijacked near Lake Debo and allowed on after a ransom was promised, and later paid. A French helicopter stopped a second convoy, looked at what was in it, found paper, and left.',

      'The whole thing ran on about a million dollars raised in pieces while it was happening: $142,000 from the Prince Claus Fund, $60,000 from an Indiegogo campaign, several hundred thousand more from Dutch foundations inside a few days when the boats were stuck and the money was needed immediately.',

      'On 25 January 2013, retreating fighters piled 4,202 manuscripts in the courtyard of the Ahmed Baba Institute, poured petrol over them and set them alight. The news went around the world as the loss of Timbuktu’s written heritage. By then roughly 350,000 manuscripts were in Bamako — about 75,000 in a single storeroom and the rest distributed through private houses across the capital. A further 10,603 restored manuscripts were in a basement at the institute itself, which the fighters never found.',

      'The correction took a long time to catch up with the headline, and nobody involved was especially eager to help it along; a collection believed to be ashes is not a collection anybody comes looking for. The manuscripts are still in Bamako. Paper that lasted six centuries in the dry air of the Sahara is now being kept in a river city with a rainy season, which is a slower emergency, and an unfinished one.'
    ],

    stepsLabel: 'The evacuation',

    steps: [
      { when: 'April 2012',   what: 'Timbuktu falls. Roughly 350,000 manuscripts are in the city.' },
      { when: 'Mid 2012',     what: '2,500 footlockers bought, filled and hidden in safe houses — move one.' },
      { when: 'Sept 2012',    what: 'Road convoys begin: about 3,000 manuscripts a day for ninety days.' },
      { when: 'Jan 2013',     what: 'Roads close. Mule carts to the Niger, boats of fifteen trunks each.' },
      { when: '~20 Jan 2013', what: 'A twenty-boat convoy is hijacked near Lake Debo and ransomed.' },
      { when: '25 Jan 2013',  what: '4,202 manuscripts burned in the courtyard of the Ahmed Baba Institute.' },
      { when: 'Since',        what: 'The collection sits in humid Bamako, a conservation problem with no end date.' }
    ],

    record: 'Ahmed Baba Institute, Timbuktu',
    note: 'Record 089. The record notes the rescue in a sentence; the sentence is doing a lot of work.',

    src: [
      { label: 'Smithsonian Magazine — The Race to Save Mali’s Priceless Artifacts (Joshua Hammer)',
        url: 'https://www.smithsonianmag.com/history/Race-Save-Mali-Artifacts-180947965/' },
      { label: 'National Geographic — How Timbuktu’s manuscripts were smuggled to safety',
        url: 'https://www.nationalgeographic.com/news/innovators/2014/04/140421-haidara-timbuktu-manuscripts-mali-library-conservation/' },
      { label: 'American Libraries — Newsmaker: Joshua Hammer, on reporting the evacuation',
        url: 'https://americanlibrariesmagazine.org/2016/03/24/newsmaker-joshua-hammer/' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'alexandria',
    kicker: 'The correction',
    title: 'Alexandria did not burn down',
    stand: 'The most famous library destruction in history is probably not a destruction. It is three or four partial events spread across five centuries, one outright fairy tale, and a long stretch of nobody paying for it.',

    body: [

      'What people picture is a single night: one fire, everything gone, the knowledge of the ancient world lost in an afternoon. No surviving source actually says that. Here is what the sources do say.',

      'Caesar, 48 BC. Plutarch, writing more than a century afterwards, says fire spread from the harbour during the fighting and reached the library. Dio Cassius, writing in the third century, says only that “books” burned — which may well mean the dockside warehouses where books and grain were stored for export. Roger Bagnall’s reading is that some books burned, quite possibly stock that had not yet reached the shelves, and not the collection.',

      'Aurelian, in the 270s AD. Fighting against Palmyrene forces wrecked the royal quarter of the city, where the library stood. Bagnall thinks this is the likeliest occasion for the library buildings actually being destroyed. Notably, no contemporary source bothers to record the loss — which may tell you how little was left in them by then.',

      'The Serapeum, 391 AD. A Christian crowd under the patriarch Theophilus destroyed the temple, which housed what is usually called the daughter library. Gibbon treated this as the real ending. Real losses, probably — though nobody knows what was in it.',

      'The baths, 641 AD. The story that the conquering general fed the books to Alexandria’s bathhouses, enough to heat them for six months, first appears roughly six hundred years after the event, in Bar Hebraeus. Bernard Lewis traced it to a folklore motif. It is fiction. It is also the version most people can repeat from memory.',

      'The account scholars actually take seriously is the one nobody repeats, because it has no scene in it. Papyrus decays and has to be recopied. Royal funding thinned. Scholars were expelled, posts went to political appointees, and an institution that depended completely on continuous state money stopped reliably getting it, over about three hundred years. Bagnall’s own blunt note on the matter is that people prefer stories with villains.',

      'Which is the thing this project keeps walking into. A library with an arsonist gets a date, a named perpetrator and an entry in a catalogue like this one. A library that is simply not renewed gets no entry anywhere — including, it seems, the most famous library that has ever existed.'
    ],

    stepsLabel: 'The four endings',

    steps: [
      { when: '48 BC',    what: 'Caesar’s fire. Plutarch says the library; Dio says books, possibly dockside warehouses.' },
      { when: '270s AD',  what: 'Aurelian’s war wrecks the royal quarter. No source mentions losing the library.' },
      { when: '391 AD',   what: 'The Serapeum and its daughter library destroyed by a Christian mob.' },
      { when: '641 AD',   what: 'The baths story — first told six centuries later, and almost certainly invented.' },
      { when: 'Throughout',what: 'Funding thins, scholars leave, papyrus rots. The least quotable cause, and the likeliest.' }
    ],

    record: 'Library of Alexandria',
    note: 'Record 005. The Serapeum is listed separately as record 011, because they were different places destroyed at different times by different people.',

    src: [
      { label: 'The Open University — The Library of Alexandria: what the sources actually say (drawing on Roger Bagnall)',
        url: 'https://www.open.edu/openlearn/history-the-arts/library-alexandria/content-section-3' },
      { label: 'National Geographic — Who burned the Library of Alexandria?',
        url: 'https://www.nationalgeographic.com/history/article/who-burned-library-of-alexandria-egypt' },
      { label: 'History.com — What really happened to the Library of Alexandria',
        url: 'https://www.history.com/articles/library-of-alexandria-destroyed' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'cotton',
    kicker: 'One copy',
    title: 'Beowulf was in the building',
    stand: 'Beowulf survives in exactly one manuscript. In October 1731 that manuscript was in a house that caught fire, and the men who saved the collection did it by throwing books out of the windows.',

    body: [

      'Robert Cotton spent his life assembling the great private library of medieval and Anglo-Saxon England, much of it picked up cheap after Henry VIII emptied the monasteries. His family left it to the nation in 1700. By 1731 it was being kept, badly, in Ashburnham House in Westminster.',

      'The fire broke out on 23 October 1731. Of 958 manuscripts, several hundred were badly damaged by fire or water and thirteen were destroyed outright — among them the only known copy of the poem The Battle of Maldon, and a manuscript of Asser’s life of King Alfred. The trustees went into the burning building and carried volumes out, or threw them from the windows to the yard.',

      'The codex containing Beowulf came through because it was tightly bound: the block of pages held, and only the exposed edges charred. It was not even recorded as damaged at the time.',

      'The slow part of this story is the next hundred years, in which nothing was done. Burnt vellum goes brittle. Every time the pages were turned a little more of the scorched margin crumbled away, and on those pages the text runs right out to the margin. Something close to two thousand letters have been lost that way — not in the fire, but afterwards, to handling.',

      'The reason we can still read many of them is a Danish-Icelandic scholar called Grímur Jónsson Thorkelin, who in 1786 had the whole manuscript copied twice: once by a professional copyist and once in his own hand. Those two transcripts are the first complete record of the poem, and they contain words that have since fallen off the original. Thorkelin’s own working edition was destroyed when the British bombarded Copenhagen in 1807. The transcripts survived. He published in 1815.',

      'In 1845 the British Museum mounted every leaf in a paper frame, which stopped the crumbling and covered some of the letters. Since 1993 the Electronic Beowulf project has been going back over the manuscript with fibre-optic and ultraviolet light to read what the fire, the handling and the repair have between them obscured.',

      'So the poem exists because of a tight binding, an open window, the thoroughness of a scholar from Iceland, and a naval bombardment that happened to destroy the wrong copy. None of that is a system. It is the normal amount of luck behind anything old enough to be famous.'
    ],

    stepsLabel: 'The long tail of one fire',

    steps: [
      { when: '1600s',       what: 'Robert Cotton assembles the collection, much of it from dissolved monasteries.' },
      { when: '1700',        what: 'Willed to the nation; later housed at Ashburnham House, Westminster.' },
      { when: '23 Oct 1731', what: 'Fire. Of 958 manuscripts, hundreds damaged, thirteen destroyed outright.' },
      { when: '1731–1845',  what: 'No conservation. Scorched margins crumble away with handling — some 2,000 letters.' },
      { when: '1786',        what: 'Thorkelin has the Beowulf manuscript copied twice by hand.' },
      { when: '1807',        what: 'His own edition is destroyed in the British bombardment of Copenhagen. The copies survive.' },
      { when: '1815',        what: 'First printed edition of Beowulf, from the transcripts.' },
      { when: '1845',        what: 'Each leaf mounted in a paper frame — the crumbling stops, some letters disappear under it.' },
      { when: '1993–',      what: 'Electronic Beowulf reads the damaged edges with fibre-optic and ultraviolet imaging.' }
    ],

    record: 'Cotton Library, London',
    note: 'Record 036. An accidental fire with no perpetrator, and the longest tail of any entry in the catalogue.',

    src: [
      { label: 'Encyclopaedia Romana (University of Chicago) — Cotton Vitellius A.xv and the 1731 fire',
        url: 'https://penelope.uchicago.edu/~grout/encyclopaedia_romana/Britannia/anglo-saxon/beowulf/vitellius.html' },
      { label: 'McMaster University — The Beowulf Manuscript',
        url: 'https://humanities.mcmaster.ca/~beowulf/manuscript.html' },
      { label: 'The Nowell Codex — manuscript history and condition',
        url: 'https://en.wikipedia.org/wiki/Nowell_Codex' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'la-freezer',
    kicker: 'A rescue by refrigeration',
    title: 'Seven years in a frozen food warehouse',
    stand: 'The 1986 fire at the Los Angeles Central Library burned for seven and a half hours at over 2,500 degrees. The part nobody tells is what the city did with the 700,000 books that survived it soaking wet, with about two days before the mould started.',

    body: [

      'The fire started shortly before eleven in the morning on 29 April 1986 and took seven and a half hours to put out. Roughly 400,000 books were destroyed outright and about 700,000 more were damaged by water and smoke. It was ruled arson. A suspect was arrested and the case against him fell apart; nobody was ever convicted.',

      'Wet paper has a deadline. Soaked books have something like forty-eight hours before mould takes hold, after which they are not books any more. Seven hundred thousand volumes, two days, and no drying method on earth that works at that scale in that time.',

      'So the city stopped the clock instead. Thousands of volunteers turned up, were handed hard hats, and formed a chain to carry the books out of the building. The wet ones went into commercial frozen food warehouses around Los Angeles and were frozen solid — which converts a forty-eight hour emergency into a problem you can take years over.',

      'Years is what it took. The books came out of the freezers in batches over roughly seven years and were dried in vacuum chambers, some of them equipment built to test spacecraft, with engineers connected to the Jet Propulsion Laboratory working out the process. In a vacuum, the ice in the paper sublimates straight to vapour without ever becoming liquid, which is the step that would have destroyed them. It was the largest book restoration project ever attempted.',

      'The same move turns up elsewhere once you know to look for it. The Iraqi Jewish Archive, pulled out of a flooded basement in Baghdad in 2003, was frozen in trucks for exactly this reason before it went anywhere. A lot of conservation is not repair at all. It is buying time — pressing pause on a decay you cannot outrun, until somebody can afford the slow work.',

      'A second fire broke out while the building was under repair from the first. The rebuilt Central Library opened on 3 October 1993, seven years after the fire, and the dried books went back onto the shelves.',

      'A book that comes back from a freezer looks like a book that was never in a fire. That is the entire point of the work, and it is also why this half of the story almost never gets told.'
    ],

    stepsLabel: 'The save',

    steps: [
      { when: '29 Apr 1986', what: 'Fire burns for seven and a half hours at over 2,500 degrees.' },
      { when: 'The next day', what: 'Thousands of volunteers form a chain and carry the books out.' },
      { when: '48 hours',    what: 'The deadline before mould takes 700,000 soaked volumes.' },
      { when: 'Days after',  what: 'The wet books are frozen solid in commercial food warehouses.' },
      { when: '1986–1993',  what: 'Vacuum drying in batches, in chambers built to test spacecraft.' },
      { when: 'Later in 1986', what: 'A second fire breaks out while the building is under repair.' },
      { when: '3 Oct 1993',  what: 'The rebuilt Central Library opens. The dried books go back on the shelves.' }
    ],

    record: 'Los Angeles Central Library',
    note: 'Record 075 — one of the eight entries flagged as partly rescued, and the only one where the rescue was mostly refrigeration.',

    src: [
      { label: 'Los Angeles Public Library — The Central Library fire, forty years later',
        url: 'https://www.lapl.org/collections-resources/blogs/lapl/central-library-fire-40-years-later' },
      { label: 'Wisconsin Public Radio — Susan Orlean on the fire and the salvage operation',
        url: 'https://wpr.org/books/book-burning-brought-all-los-angeles-together' },
      { label: 'WAAC Newsletter (Sept 1986) — contemporary conservation account of the salvage',
        url: 'https://cool.culturalheritage.org/waac/wn/wn08/wn08-3/wn08-307.html' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'jaffna',
    kicker: 'What a library is worth',
    title: 'Ninety-seven thousand books, and a war',
    stand: 'An organised mob burned the Jaffna Public Library in northern Sri Lanka over the nights of 31 May and 1 June 1981. It is widely treated since as the moment the country lost the ability to settle anything politically.',

    body: [

      'Jaffna’s library was among the largest in Asia: some 97,000 books and manuscripts, palm leaf manuscripts, runs of old regional newspapers, work by Ananda Coomaraswamy and Isaac Thambiah, memoirs of physicians and dramatists and politicians, and the only original copy of the Yalpana Vaipava Malai, an eighteenth-century history of the Jaffna kingdom.',

      'On 31 May 1981, gunmen killed two policemen at a political rally. What followed over the next three days was a pogrom. Investigators for the Movement for Inter-Racial Justice and Equality estimated that between 100 and 175 police personnel took part in the destruction. Two cabinet ministers were in Jaffna at the time. The official account afterwards was that a few drunk policemen had acted on their own. There was no independent investigation, which Amnesty International noted at the time. Years later President Jayewardene acknowledged that his party had encouraged anti-Tamil violence.',

      'Four people were taken from their homes and killed during those days. H. S. David, a priest and scholar, watched the library burn and died the following day of shock.',

      'The reason the number of volumes understates it is that for Tamils in the north the library was the physical form of a claim — that this was a community with its own literature, its own scholarship and its own history, written down. Burning it said something that killing four people did not, and it was heard that way. It became a rallying point for the armed movements, and it is still cited as a turning point towards the civil war.',

      'The building kept being destroyed. It was damaged again in the fighting that followed 1983, and in 1985 soldiers set off explosives inside the partly restored shell. In 1982, in between, the community ran a library week and collected thousands of books out of people’s own houses.',

      'Rebuilding began in 1998 at a cost of around a million US dollars, with more than 25,000 books collected for it, and the replacement building was finished by 2001. Even the reopening was a fight: the LTTE opposed it, and all twenty-one members of the Jaffna municipal council resigned in protest at the pressure to delay. It opened to the public in 2003.',

      'That is the thing about a library burned for what it represents rather than for what is in it. Rebuilding it is also symbolic, so rebuilding it is also contested — which is how a building takes twenty-two years to reopen.'
    ],

    stepsLabel: 'What happened',

    steps: [
      { when: 'Before 1981', what: '97,000 volumes, palm leaf manuscripts, and the only copy of the Yalpana Vaipava Malai.' },
      { when: '31 May 1981', what: 'Two policemen shot at a rally. A three-day pogrom begins that night.' },
      { when: '1 June 1981',  what: 'The library is burned. MIRJE later estimates 100–175 police took part.' },
      { when: 'June 1981',    what: 'Four people killed. The scholar H. S. David dies the day after watching it burn.' },
      { when: '1982',         what: 'A community library week collects thousands of books from private homes.' },
      { when: '1985',         what: 'Soldiers detonate explosives inside the partly restored building.' },
      { when: '1998–2001',   what: 'Rebuilt for about $1m, with 25,000 donated books.' },
      { when: '2003',         what: 'Reopens, over opposition. The entire municipal council resigns in the row.' }
    ],

    record: 'Jaffna Public Library',
    note: 'Record 070. The catalogue calls it a cultural assassination; this is why that is not an overstatement.',

    src: [
      { label: 'Burning of the Jaffna Public Library — chronology, estimates and aftermath',
        url: 'https://en.wikipedia.org/wiki/Burning_of_Jaffna_Public_Library' },
      { label: 'Rebecca Knuth (IFLA) — Destroying a Symbol: Checkered History of Sri Lanka’s Jaffna Public Library',
        url: 'http://www.ifla.org/IV/ifla72/papers/119-Knuth-en.pdf' },
      { label: 'NPR — Up From the Ashes: A Public Library in Sri Lanka Welcomes New Readers (2015)',
        url: 'https://www.npr.org/sections/parallels/2015/08/19/432779251/up-from-the-ashes-a-public-library-in-sri-lanka-welcomes-new-readers' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'herculaneum',
    kicker: 'Still being read',
    title: 'The library saved by the thing that destroyed it',
    stand: 'Vesuvius turned roughly 1,800 scrolls into carbon in 79 AD. They sat unreadable for 270 years, because the only way to open one was to wreck it. In June this year a scroll was read from beginning to end without being opened at all.',

    body: [

      'The Villa of the Papyri at Herculaneum went under a pyroclastic flow in 79 AD. Its library was not burned to ash; it was carbonised — cooked at high temperature without oxygen, so the rolls turned into blackened lumps that look like charcoal and behave like charcoal. That is why they survived. Ordinary papyrus in an ordinary Roman house rotted away centuries ago.',

      'Bourbon tunnellers found them in the 1750s and the next two centuries were mostly a record of destruction by well-meaning people. Scrolls were sliced in half, scraped, dissolved with chemicals, attacked with mercury. Antonio Piaggio built a machine that unrolled them at a rate measured in centimetres a day, and even that tore them apart. Whatever a scroll said, reading it usually cost you the scroll.',

      'The collection is Epicurean, heavy on the philosopher Philodemus, and much of the villa has still never been excavated — which is the genuinely tantalising part, because a second library, possibly a Latin one, may still be down there.',

      'In 2023 the Vesuvius Challenge put prize money behind a different idea: scan the sealed rolls with X-rays and read them from the scan. The scanning was the easy half. The hard half is that the ink is carbon sitting on carbon, so it barely registers as a density difference at all — until machine learning was trained to spot the faint surface texture the ink leaves behind. The first word came out in October 2023. It was πορφύρας — purple.',

      'On 25 June 2026 the project announced that PHerc. 1667 had been read end to end: about 1.4 metres of papyrus, some 22 columns of Greek, a Stoic treatise on ethics whose last surviving column names Aristocreon, the nephew and student of Chrysippus. It was imaged at the ESRF synchrotron in Grenoble, on a beamline called BM18, with the National Library of Naples; the surface was reconstructed and flattened in software, the ink picked out by machine learning, and the result handed to papyrologists to transcribe. In the same announcement another scroll, PHerc. 139, was identified as Philodemus, On Gods, Book 8.',

      'It is not magic and it is not complete. Only the inner core of PHerc. 1667 survives — about 8 centimetres of an original 19 to 24 — and the readings have holes in them. Hundreds of rolls are still sealed and unread.',

      'This is the Ashurbanipal trick again, two thousand years later: the catastrophe is the only reason there is anything to read. Every other entry in this catalogue is a list of things that are gone. This one is a list of things that are not gone yet, being read for the first time by people who are alive right now.'
    ],

    stepsLabel: 'Two hundred and seventy years of trying',

    steps: [
      { when: '79 AD',     what: 'Vesuvius buries the Villa of the Papyri. The scrolls carbonise rather than burn.' },
      { when: '1750s',     what: 'Bourbon tunnellers find them. Early attempts to open them destroy many.' },
      { when: '1750s on',  what: 'Piaggio’s machine unrolls at centimetres a day, and still breaks them.' },
      { when: '2023',      what: 'The Vesuvius Challenge offers prizes for reading X-ray scans.' },
      { when: 'Oct 2023',  what: 'The first word is recovered: πορφύρας, purple.' },
      { when: '25 Jun 2026', what: 'PHerc. 1667 read end to end — 22 columns of Stoic ethics, never unrolled.' },
      { when: 'Now',       what: 'Hundreds of rolls still sealed. Most of the villa still unexcavated.' }
    ],

    src: [
      { label: 'Vesuvius Challenge — An entire Herculaneum scroll has been read for the first time (June 2026)',
        url: 'https://scrollprize.org/firstscroll' },
      { label: 'ESRF — The day the Herculaneum scrolls began speaking again',
        url: 'https://www.esrf.fr/home/news/general/content-news/general/the-day-the-herculaneum-scrolls-began-speaking-again.html' },
      { label: 'Scientific American — Ancient Roman scrolls destroyed by Vesuvius digitally unrolled in full',
        url: 'https://www.scientificamerican.com/article/ancient-roman-scrolls-destroyed-by-mount-vesuvius-digitally-unrolled-in-full-for-first-time/' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'fisheries',
    kicker: 'No fire, no villain',
    title: 'Seven libraries, four hundred and forty-three thousand dollars',
    stand: 'In 2013 the Canadian government closed seven of its nine Fisheries and Oceans science libraries. No army, no arson, no mob. The claimed saving was $443,000 a year.',

    body: [

      'These were working collections, some of them more than a century old: the Freshwater Institute in Winnipeg, the St Andrews Biological Station in New Brunswick, the Northwest Atlantic Fisheries Centre in St John’s, the Maurice Lamontagne Institute in Mont-Joli. Rachel Carson corresponded with researchers at St Andrews while she was writing Silent Spring. What sat on those shelves was mostly field notes, survey data and unpublished technical reports — the kind of material that exists in one or two copies anywhere in the world, because it was never commercially published and nobody else kept it.',

      'The department’s position was that consolidating into two libraries improved access regardless of where you were, that few members of the public used the libraries anyway, and that most of the material would be digitised.',

      'What scientists described was different. The Maurice Lamontagne collection in dumpsters. Freshwater Institute material picked over by passing citizens, scientists and consultants and carried off. Other collections burned or sent to landfill. Books out on loan to researchers never recalled. And no record kept of what was thrown away.',

      'On the digitisation promise: using the department’s own figures, scientists calculated that about one book in twenty of a collection of more than 600,000 had actually been digitised.',

      'This record belongs in the catalogue because it is the shape of the thing the rest of the catalogue can barely see. There is a perpetrator here — a government, acting on a policy, in a democracy, in public, with a line item. There is simply nothing to photograph. As the biologist Jeff Hutchings put it at the time, losing libraries is not a neutral act.',

      'And there is one way this entry is worse than a fire. After a fire you can usually say what you lost, because the building had a catalogue. Here nobody kept a list of what went into the dumpsters. The loss is not only the material; it is the absence of any record of what the material was.',

      'Everything about this entry is documented except the thing that was destroyed.'
    ],

    stepsLabel: 'How it went',

    steps: [
      { when: '1900s–2012', what: 'Nine regional science libraries accumulate field notes, survey data and technical reports.' },
      { when: '2012–13',    what: 'Consolidation announced: seven of nine libraries to close, two to remain.' },
      { when: '2013',        what: 'Collections dispersed — dumpsters, giveaways, landfill. No disposal records kept.' },
      { when: '2013',        what: 'Stated saving: $443,000 a year. Stated plan: digitisation.' },
      { when: 'Dec 2013',    what: 'Reporting by The Tyee brings the dismantling into public view.' },
      { when: 'After',       what: 'By the department’s own numbers, roughly 1 book in 20 had been digitised.' }
    ],

    record: 'Fisheries and Oceans Canada Libraries',
    note: 'Record 091. The only entry in the catalogue where nobody can say what was in the building.',

    src: [
      { label: 'Andrew Nikiforuk, The Tyee — What’s driving the chaotic dismantling of Canada’s science libraries? (Dec 2013)',
        url: 'https://thetyee.ca/News/2013/12/23/Canadian-Science-Libraries/' },
      { label: 'The Narwhal — The loss of librarians is devastating science and knowledge in Canada',
        url: 'https://thenarwhal.ca/loss-librarians-devastating-science-and-knowledge-canada/' },
      { label: 'CAPAL — New information about the closure of major science research libraries in Canada',
        url: 'https://capalibrarians.org/?p=861' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'zaluski',
    kicker: 'Destroyed twice',
    title: 'A library can be stolen and still be burned',
    stand: 'Europe’s first great public library was carted off to St Petersburg by an empress in 1795. A fraction of it came home a century and a quarter later, in time for German troops to burn it in 1944.',

    body: [

      'The brothers Józef and Andrzej Załuski, both bishops, opened their library to the public in Warsaw in 1747. It began at roughly 200,000 items and by the end of the 1780s held around 400,000 printed books, maps and manuscripts, along with instruments and natural history collections. It was open to anyone, Tuesdays and Thursdays, seven in the morning to seven at night.',

      'Theft was enough of a problem that in 1752 the Pope issued a bull threatening excommunication for anyone who removed a book. It did not work especially well, which is a detail worth keeping for the pleasure of it.',

      'In 1795, after the Kościuszko Uprising, Russian troops emptied the building on Catherine II’s orders and shipped the entire collection to St Petersburg, where it became the foundation of the Imperial Public Library. The removal itself destroyed a great deal: crates mishandled, items stolen on the road. The historian Joachim Lelewel said the books could be bought at Grodno by the basket.',

      'Some material trickled back in 1842 and 1863. After the Polish-Soviet War, under the Treaty of Riga, about 50,000 items were repatriated in the 1920s, and they became a cornerstone of the re-established National Library of Poland in 1928. A hundred and thirty years after the theft, a twentieth of the collection was home.',

      'In October 1944, after the Warsaw Uprising had been crushed, German troops went through the city burning it street by street as policy. The Załuski material, by then held in the Krasiński Library, was destroyed deliberately — not as a side effect of fighting, but as part of an organised programme of destroying Warsaw.',

      'Of the original library, 1,800 manuscripts and about 30,000 printed items survive anywhere in the world.',

      'The useful thing about this entry is that it refuses the usual shape. There is no single event to date, no one perpetrator to name, and no moment at which the library was destroyed. There is an empress, a hundred and fifty years of dispersal, a brief partial homecoming, and then a man with a flamethrower following orders. The catalogue gives it one line and one year. It needed about six.'
    ],

    stepsLabel: 'A hundred and ninety-seven years',

    steps: [
      { when: '1747',      what: 'The Załuski brothers open the library in Warsaw. Public, free, two days a week.' },
      { when: '1780s',     what: 'Around 400,000 printed books, maps and manuscripts.' },
      { when: '1795',      what: 'Catherine II has the whole collection removed to St Petersburg.' },
      { when: 'In transit',what: 'Heavy losses to mishandling and theft — “sold at Grodno by the basket”.' },
      { when: '1842, 1863',what: 'Small returns to Congress Poland.' },
      { when: '1920s',     what: 'About 50,000 items repatriated under the Treaty of Riga.' },
      { when: '1928',      what: 'They become a cornerstone of the re-founded National Library of Poland.' },
      { when: 'Oct 1944',  what: 'Burned by German troops in the planned destruction of Warsaw.' },
      { when: 'Today',     what: '1,800 manuscripts and some 30,000 printed items survive.' }
    ],

    record: 'Zaluski Library',
    note: 'Record 038, dated to the theft. The burning is recorded separately under the Warsaw libraries of 1944.',

    src: [
      { label: 'Załuski Library — founding, removal to St Petersburg, returns and destruction',
        url: 'https://en.wikipedia.org/wiki/Za%C5%82uski_Library' },
      { label: 'The planned destruction of Warsaw, 1944',
        url: 'https://en.wikipedia.org/wiki/Destruction_of_Warsaw' },
      { label: 'Polish Libraries (National Library of Poland) — research on the Załuski manuscripts',
        url: 'https://polishlibraries.bn.org.pl/upload/pdf/00295_Tomasz_Szwacinski_An_Important_Milestone_in_Research_on_the_Manuscripts_from_the_Zaluski_Library_and_their_Documentation.pdf' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'paper-brigade',
    kicker: 'Smuggled the wrong way',
    title: 'The men and women who stole books back',
    stand: 'In Vilna the Nazis forced a few dozen Jewish scholars and poets to sort their own community’s libraries — deciding what would be shipped to Germany and what would go to the paper mills. They spent two years smuggling material out under their coats and burying it.',

    body: [

      'Vilna had been called the Jerusalem of Lithuania for its scholarship. YIVO, the Yiddish Scientific Institute, was there; so was the Strashun Library, one of the great Jewish collections in Europe. German forces ransacked the YIVO building in 1941.',

      'The Einsatzstab Reichsleiter Rosenberg — the Nazi apparatus for looting cultural property — then set up a sorting operation. Material judged valuable would be sent to Frankfurt, for an institute intended to study the people the regime was in the process of murdering. The rest would be pulped. To do the sorting they used prisoners from the ghetto who actually knew what they were looking at: a few dozen writers, librarians and scholars, among them the poets Abraham Sutzkever and Shmerke Kaczerginski, the librarian and diarist Herman Kruk, and the teacher Rachela Krinsky. In the ghetto they were known as the Paper Brigade.',

      'What they did was smuggle in the opposite direction from everyone else. Books and manuscripts went out of the sorting rooms under their clothes, past guards, back into the ghetto, and into bunkers, attics and cavities in walls. Being caught with a book carried the same penalty as being caught with a gun. Kruk, who ran the ghetto library, kept a diary through all of it and buried the diary before he was deported; it was dug up after the war.',

      'Most of the brigade were killed. Sutzkever and Kaczerginski survived, came back to the ruins in 1944, dug up what they could find and opened a Jewish museum in Vilnius. In 1949 the Soviet authorities closed it and ordered the material destroyed — the second regime in a decade to decide these particular books should be pulp.',

      'At which point a Lithuanian librarian named Antanas Ulpis took the material out of the path of the pulping mills and hid it in the basement of St George’s Church, where it sat for forty years while he said nothing to anyone. He was risking his life and his family’s.',

      'The first caches surfaced in the late 1980s and early 1990s. Then, in October 2017, YIVO announced that a further 170,000 pages had been found in a separate room of the same church, undocumented and unknown — unpublished manuscripts by Chaim Grade, letters from Sholem Aleichem, poetry Sutzkever had written inside the ghetto. Together with the collections already recovered, something like 1.2 million documents have come back.',

      'The arithmetic of this one is strange and worth stating plainly. The Germans sorted these books in order to destroy most of them. The Soviets ordered the survivors pulped. The material exists because a handful of prisoners stole it from their captors a few pages at a time, and because one librarian with no connection to any of them spent four decades not mentioning a basement.'
    ],

    stepsLabel: 'Out of the building, into the ground',

    steps: [
      { when: '1941',       what: 'German forces ransack the YIVO building in Vilna.' },
      { when: '1942–43',   what: 'The Paper Brigade sorts Jewish books for shipment or pulping — and smuggles.' },
      { when: '1943–44',   what: 'Most of the brigade are murdered. Material stays buried in bunkers and walls.' },
      { when: '1944',       what: 'Sutzkever and Kaczerginski return, dig up what they can, open a museum.' },
      { when: '1949',       what: 'Soviet authorities close the museum and order the material destroyed.' },
      { when: '1949–1989', what: 'Antanas Ulpis hides it in the basement of St George’s Church and says nothing.' },
      { when: 'Late 1980s', what: 'The first caches surface.' },
      { when: 'Oct 2017',   what: '170,000 further pages found in another room of the same church.' }
    ],

    src: [
      { label: 'YIVO — announcement of the 2017 Vilna discovery: 170,000 pages',
        url: 'https://www.infodocket.com/2017/10/26/yivo-announces-discovery-of-170000-lost-jewish-documents-thought-to-have-been-destroyed-during-the-holocaust/' },
      { label: 'JTA — Five remarkable documents from the trove hidden during the Holocaust',
        url: 'https://www.jta.org/2017/11/15/united-states/5-amazing-discoveries-from-a-trove-of-documents-hidden-during-the-holocaust' },
      { label: 'YIVO — Reuniting YIVO’s prewar collections',
        url: 'https://collections.yivo.org/reuniting-yivos-prewar-collections-digitally' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'buturovic',
    kicker: 'One librarian',
    title: 'Aida Buturović was thirty-two',
    stand: 'The catalogue entry for the National Library of Bosnia and Herzegovina says a librarian was killed rescuing books. This is who she was.',

    body: [

      'Aida Buturović was born in 1959. She studied general literature and philosophy at the Faculty of Philosophy in Sarajevo, translated from several languages, worked in the international exchange department of the National Library, and was writing a doctoral thesis when the siege began.',

      'Serb forces began shelling the Vijećnica, the City Hall building that housed the library, at nine in the morning on 25 August 1992. Firefighters from Skenderija and the volunteer station at Vratnik fought it for hours, until the water ran out and they came under sniper fire. Librarians, colleagues and ordinary residents formed a chain and carried books out of a burning building while it was being shot at. The building burned for three days. Something like ninety per cent of the collection was lost.',

      'Aida was there through the night of 25 August. She was killed on her way home afterwards, on Titova Street between the Presidency and Marijin Dvor, by shrapnel from a shell. Her family found her days later at a morgue, where people who had been nearby had taken her.',

      'There is a temptation to make a librarian who dies rescuing books into a symbol, and the temptation should be resisted, because she did not die for a symbol. She was thirty-two, mid-thesis, and she went to work.',

      'The books that came out of the Vijećnica those nights were carried out by hand, by people who knew the building was a target and went in anyway. That is the whole mechanism of every rescue in this catalogue. Someone decides the risk is worth a load of paper, and then carries the paper.'
    ],

    stepsLabel: 'Three days in August',

    steps: [
      { when: '1959',        what: 'Born in Sarajevo. Literature and philosophy; translator; library exchange department.' },
      { when: '25 Aug 1992', what: 'Shelling of the Vijećnica begins at 09:00.' },
      { when: 'That night',  what: 'Human chains carry books out under sniper fire. The water runs out.' },
      { when: '26 Aug 1992', what: 'Aida Buturović killed by shrapnel on Titova Street, walking home.' },
      { when: '27 Aug 1992', what: 'The building has burned for three days. Around 90% of the collection is gone.' }
    ],

    record: 'National Library of Bosnia and Herzegovina',
    note: 'Record 079. Her name is in the record; this is the rest of it.',

    src: [
      { label: 'DWP Balkan — About Aida Buturović and books',
        url: 'https://dwp-balkan.org/about-aida-buturovic-and-books/' },
      { label: 'Literary Hub — Thirty years ago tonight, Sarajevo’s national library was burned to the ground',
        url: 'https://lithub.com/30-years-ago-tonight-sarajevos-national-library-was-burned-to-the-ground/' },
      { label: 'CENL — The National and University Library of Bosnia and Herzegovina marks the destruction of the Vijećnica',
        url: 'https://www.cenl.org/the-national-and-university-library-of-bosnia-and-herzegovina-commemorated-33-years-since-the-shelling-and-destruction-of-its-main-building-vijecnica-in-sarajevo/' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'weimar',
    kicker: 'Put back together',
    title: 'The ash books',
    stand: 'Faulty wiring set the Duchess Anna Amalia Library alight in 2004. A human chain got thousands of books out that night. The interesting part is the 25,000 volumes that came out as fragments, and are being reassembled page by page, twenty years later.',

    body: [

      'The fire started on 2 September 2004, in old and faulty electrical wiring, weeks before the building was due to be renovated. It took the historic building and its Rococo hall — the reading room Goethe used when he ran the place.',

      'On the night itself, emergency workers, library staff and people from the town formed a chain and passed books out of the building hand to hand. Forty-seven tonnes of soaked and damaged material went to the Centre for Book Conservation in Leipzig, where it was bandaged and freeze-dried — the same trick Los Angeles used in 1986, for the same reason.',

      'Around 50,000 books were destroyed outright. Another 118,000 were damaged; by the beginning of 2016, 95,660 of those had been restored.',

      'Then there are the ash books. About 25,000 volumes came out burned to fragments, and were kept exactly as they were, in containers of blackened remnants: charred page edges, loose scraps, pieces of bindings. Something over 1.2 million pages of material, with no order to it.',

      'The library decided to put them back. Restorers developed and patented a method for giving several extremely fragile pages a wet repair treatment at once, then storing and moving them in a compression cartridge. More than half of those 1.2 million pages have now been treated. The work is expected to run for roughly another eight years.',

      'The building reopened in 2007 after a €13 million restoration. The conservation programme is a separate and much longer bill — €40.5 million raised by the end of 2015 towards an estimated €67 million.',

      'Weimar is the clearest example in this catalogue of a thing the catalogue cannot show: that destruction and rescue are not two events, one after the other. The fire took one night. The rescue is in its twenty-second year.'
    ],

    stepsLabel: 'One night, twenty-two years',

    steps: [
      { when: '2 Sept 2004', what: 'Fire from faulty wiring takes the historic building and the Rococo hall.' },
      { when: 'That night',  what: 'A human chain of staff, firefighters and residents passes books out.' },
      { when: 'Days after',  what: '47 tonnes go to Leipzig to be bandaged and freeze-dried.' },
      { when: 'The toll',    what: '50,000 destroyed; 118,000 damaged; 25,000 reduced to fragments.' },
      { when: '2007',        what: 'The building reopens after a €13m restoration.' },
      { when: 'By 2016',     what: '95,660 of the damaged books restored.' },
      { when: 'Ongoing',     what: 'Over half of 1.2 million pages of ash-book fragments treated. Roughly eight years to go.' }
    ],

    record: 'Duchess Anna Amalia Library',
    note: 'Record 086 — flagged as partly rescued, which covers one night out of twenty-two years.',

    src: [
      { label: 'The Art Newspaper — Weimar blazes a trail with the restoration of burned books',
        url: 'https://www.theartnewspaper.com/news/weimar-blazes-a-trail-with-restoration-of-burned-books' },
      { label: 'Duchess Anna Amalia Library — the 2004 fire and its aftermath',
        url: 'https://en.wikipedia.org/wiki/Duchess_Anna_Amalia_Library' },
      { label: 'UNESCO — statement on the fire at the Anna Amalia Library',
        url: 'https://whc.unesco.org/en/news/299' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'bessarion',
    kicker: 'A rescue with a shopping list',
    title: 'Bessarion bought a civilisation and gave it to Venice',
    stand: 'The usual story is that scholars fled Constantinople in 1453 with manuscripts under their arms and accidentally started the Renaissance. The better story is a cardinal who saw it coming, spent thirty years buying Greek books deliberately, and then worried hard about where to leave them.',

    body: [

      'Constantinople’s libraries had been dying for two centuries before the city fell. The Fourth Crusade sacked it in 1204 — that is a separate entry in this catalogue — and by the 1400s the empire was effectively a city and its suburbs. Greek scholars had been going west for decades already; Manuel Chrysoloras was teaching Greek in Florence from 1397.',

      'Basilios Bessarion was born in Trebizond, became an Orthodox bishop, and came to Italy for the Council of Ferrara-Florence in 1438 to negotiate union between the churches. He stayed, converted, and was made a cardinal. After 1453 he began acquiring rare Greek and Byzantine texts systematically — buying from refugees, commissioning copies — on an explicit theory: that Greek learning was about to be scattered across Europe in private hands and quietly lost, and that somebody had to deliberately concentrate it instead.',

      'In 1468 he gave the whole thing away. Four hundred and eighty-two Greek codices and two hundred and sixty-four Latin ones went to the Republic of Venice, on the condition that Venice found a public library to hold them and let scholars use them. His letter to Doge Cristoforo Moro, dated 31 May 1468, explains the choice: Venice had the largest community of Greek refugees anywhere, and he called it alterum Byzantium — another Byzantium.',

      'The condition is the clever part. He had watched a state fail and take its institutions with it, so he placed the books with the most durable government available and attached a legal obligation to them. He was not looking for a shelf. He was looking for a successor.',

      'Venice took its time. Legal possession was handed over in Rome on 26 June 1468 and 466 codices were shipped across in crates the following year, where they sat in the Doge’s Palace. In 1485 they were stacked tighter, which made consulting them nearly impossible. Books went out on loan without the deposits being enforced, and some later surfaced in private collections and in bookshops. The collection moved upstairs at St Mark’s in 1532 and finally into Sansovino’s purpose-built library, constructed between 1537 and 1588 — a hundred and twenty years after the gift.',

      'It worked anyway. The Marciana today holds 548 Greek and 337 Latin Bessarion codices, more than he gave it, plus 27 incunabula.',

      'So the rescue at the fall of Constantinople was not really a man running out of a burning city with an armful of books. It was a man with money, a theory about institutional failure, and a contract.'
    ],

    stepsLabel: 'The long handover',

    steps: [
      { when: '1397',      what: 'Chrysoloras teaching Greek in Florence — the westward drift begins long before 1453.' },
      { when: '1438–39',  what: 'Bessarion comes to Italy for the Council of Ferrara-Florence, and stays.' },
      { when: '1453',      what: 'Constantinople falls. He begins acquiring Greek manuscripts in earnest.' },
      { when: '31 May 1468', what: 'His letter to the Doge: keep them in “another Byzantium”.' },
      { when: '26 Jun 1468', what: '482 Greek and 264 Latin codices made over to Venice, with conditions.' },
      { when: '1469',      what: '466 codices shipped in crates — and left in crates.' },
      { when: '1485',      what: 'Stacked tighter for storage. Consultation becomes nearly impossible.' },
      { when: '1537–1588', what: 'Sansovino’s library finally built. The condition is honoured, 120 years late.' }
    ],

    record: 'Libraries of Constantinople (Ottoman Conquest)',
    note: 'Record 026 — flagged as partly rescued. This is who did the rescuing, and how long it took to land.',

    src: [
      { label: 'Biblioteca Marciana — the Bessarion donation, its conditions and its slow fulfilment',
        url: 'https://en.wikipedia.org/wiki/Biblioteca_Marciana' },
      { label: 'Biblioteca Nazionale Marciana — Bessarion: biographical overview',
        url: 'https://bibliotecanazionalemarciana.cultura.gov.it/en/?p=5623' },
      { label: 'Manuscripts in the Biblioteca Marciana — what survives of the collection',
        url: 'https://en.wikipedia.org/wiki/Manuscripts_in_the_Biblioteca_Marciana' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'alamut',
    kicker: 'The rescuer was the arsonist',
    title: 'Who saved the library at Alamut',
    stand: 'The Mongols destroyed the Nizari Ismaili library at Alamut in 1256. One man was put in charge of deciding what to keep and what to burn — and he then wrote the only surviving account of the whole affair, which is why we know anything about it at all.',

    body: [

      'Alamut was the mountain fortress of the Nizari Ismailis in northern Persia, their centre for about 170 years. Its library was known for astronomy, philosophy, theology and the movement’s own history. Hulagu’s campaign broke the Nizari fortresses in 1256: the imam Rukn al-Din Khurshah surrendered Maymun-Diz on 19 November, Alamut capitulated in December, and the fortress was dismantled.',

      'Ata-Malik Juvayni was a Persian administrator working for the Mongols, and a historian writing an account of their conquests. He asked to be made responsible for the library, and was.',

      'By his own account he kept copies of the Qur’an, a selection of “choice” books, and astronomical instruments including astrolabes — and burned the rest. The rest meant, above all, the Ismaili theological and historical works of a community that both his Mongol employers and the Sunni establishment he wrote for considered heretical.',

      'He describes picking up one book in particular: the Sargudhasht-i Sayyidna, a biography of Hasan-i Sabbah, who founded the movement. He says he read it because it interested him, and then burned it. He then used it extensively as a source for the chapter of his own history dealing with the Ismailis, and cites a second Alamut book as well.',

      'Sit with what that means. For seven centuries, nearly everything the wider world knew about the Ismailis of Alamut came through the writing of the man who burned their library, in the employ of the people who destroyed them, composed for an audience that despised them. Their own account of themselves went into the fire. A hostile summary of that account survived, was copied, and became the history.',

      'And there is no way to check any of it. Everything we know about what was saved and what was burned at Alamut is Juvayni’s own statement about his own conduct. He may have kept more than he admits, or less.',

      'A library is not only its books. It is also who gets to describe them afterwards. At Alamut those were the same person.'
    ],

    stepsLabel: 'December 1256',

    steps: [
      { when: 'c. 1090–1256', what: 'Alamut is the Nizari Ismaili centre; its library holds their own history.' },
      { when: '8 Nov 1256',   what: 'Hulagu camps opposite Maymun-Diz.' },
      { when: '19 Nov 1256',  what: 'Rukn al-Din Khurshah surrenders.' },
      { when: 'Dec 1256',     what: 'Alamut capitulates. Juvayni takes charge of the library.' },
      { when: 'Dec 1256',     what: 'Qur’ans, selected books and astronomical instruments kept. The rest burned.' },
      { when: 'After',        what: 'Juvayni writes the Ismailis’ history using the books he says he destroyed.' }
    ],

    record: 'Alamut Castle Library',
    note: 'Record 024. The catalogue entry originally credited the rescue to the astronomer Nasir al-Din al-Tusi; the sources put it with Juvayni, and the record has been corrected to match.',

    src: [
      { label: 'Siege of Alamut (1256) — the surrender, the dismantling and the library',
        url: 'https://en.wikipedia.org/wiki/Siege_of_Alamut_(1256)' },
      { label: 'Ata-Malik Juvayni — the historian who sorted the collection',
        url: 'https://en.wikipedia.org/wiki/Ata-Malik_Juvayni' },
      { label: 'Simerg — The Inferno of Alamut in the year 1256',
        url: 'https://simerg.com/2019/02/08/the-inferno-of-alamut-in-the-year-1256/' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'occupy',
    kicker: 'Two months old',
    title: 'A library does not have to be ancient',
    stand: 'The People’s Library in Zuccotti Park lasted about two months, catalogued more than 5,500 donated books, and went into sanitation trucks in the early hours of 15 November 2011.',

    body: [

      'It started as a pile of donated books on a tarpaulin in September 2011 and turned into something with a reference desk, a catalogue, a periodicals section, a poetry section and several professionally trained librarians working it. The lending policy was roughly: take it, bring it back if you can. It was a library in the sense that matters — you could walk up, take a book, read it, and nobody asked who you were.',

      'At around one in the morning on 15 November 2011, the NYPD cleared the park. Roughly 3,600 books were seized and loaded into sanitation trucks. The city said the property could be reclaimed; when librarians went to collect it, a fraction came back, much of it damaged.',

      'The organisers sued, represented by Norman Siegel, on the grounds that the raid violated the First Amendment. In April 2013 the city and Brookfield Properties, which owned the park, settled for more than $230,000.',

      'By volume this is the smallest entry in the catalogue. Three thousand six hundred paperbacks is nothing beside Nineveh or Sarajevo, and most of the titles could be bought again the next day. That is exactly why it is worth having.',

      'What it isolates is the thing all 118 entries share once you strip out the scale and the centuries: somebody with power decided a collection of books was in the way, and removed it. No ideology is needed, no invading army, no fire. A municipal cleaning operation is sufficient.',

      'And what was actually unrecoverable was not the books. It was the inscriptions in the donated copies, the record of who had given what, and the specific fact of that collection standing in that square as an argument about what public space is for. You can rebuy a paperback. You cannot rebuy the argument.',

      'It is also the only entry in this catalogue where the loss was eventually assigned a dollar figure.'
    ],

    stepsLabel: 'Sixty days',

    steps: [
      { when: 'Sept 2011',   what: 'Donated books accumulate in Zuccotti Park and are catalogued.' },
      { when: 'Autumn 2011', what: 'Over 5,500 volumes, a reference desk, and trained librarians staffing it.' },
      { when: '15 Nov 2011', what: 'The park is cleared at about 1am. Roughly 3,600 books go into sanitation trucks.' },
      { when: 'Days after',  what: 'A fraction is recovered from a city facility, much of it damaged.' },
      { when: 'April 2013',  what: 'The city and Brookfield Properties settle for more than $230,000.' }
    ],

    record: 'People\'s Library, Occupy Wall Street',
    note: 'Record 087.',

    src: [
      { label: 'Associated Press — NYC settles lawsuit over seizure of Occupy books',
        url: 'https://news.yahoo.com/nyc-settles-lawsuit-over-seizure-134454367.html' },
      { label: 'Maclean’s — Occupy protesters won’t get the People’s books back, but they will get $230,000',
        url: 'https://macleans.ca/general/occupy-protesters-wont-get-the-peoples-books-back-but-they-will-get-230000/' },
      { label: 'NPR — New York City to pay Occupy Wall Street for destroyed books',
        url: 'https://www.vermontpublic.org/2013-04-11/book-news-nyc-to-pay-occupy-wall-street-for-destroyed-books' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'operation-legacy',
    kicker: 'Erasure as policy',
    title: 'Destruction certificates',
    stand: 'As the British Empire wound down, colonial administrations burned and removed the records that might embarrass Britain, and sent paperwork back to London certifying that they had done it. The files that were not burned were admitted to exist in 2011.',

    body: [

      'Operation Legacy ran from the 1950s into the 1970s across at least twenty-three countries, timed to decolonisation. Its purpose was to make sure that successor governments did not inherit documents that could implicate Britain in what had been done in their countries.',

      'The selection criteria are the part to sit with. Officers from MI5 or Special Branch went through the files looking for anything that might embarrass Her Majesty’s Government, or that showed racial prejudice or religious bias. In other words, the material most worth keeping, from the point of view of anyone who would later want to know what happened, was precisely the material marked for destruction.',

      'The methods specified were burning and dumping at sea. Officials were required to send destruction certificates back to London, so that the programme itself would leave a clean record and the incoming governments would never learn it had taken place. One administrator warned that the scale of the burning risked “celebrating Independence Day with smoke”.',

      'Not everything was destroyed. Around 8,800 files were quietly shipped to Britain instead and held there, unacknowledged, for half a century — the so-called migrated archives. Some of them describe methods of torture used against opponents of colonial rule, including during the Mau Mau uprising in Kenya.',

      'They surfaced because of litigation. Kenyans who had been detained during the uprising brought a case; in 2011 the British government admitted that the documents existed, and began declassifying them. By November 2013 about 20,000 files had been released as the FCO 141 series at the National Archives in Kew, where historians have been working through them since.',

      'These were not libraries. They were state archives, which is to say the records a country needs in order to establish what was done to it, by whom, and on whose instructions. Losing them is not the same as losing a library, and in a courtroom it is worse.',

      'There is no entry in the catalogue for this one, because there is no date to give it and no single place to put a pin. That is the point. Done properly, with forms and certificates and a retention schedule, erasure does not look like a fire. It looks like administration.'
    ],

    stepsLabel: 'How it was done',

    steps: [
      { when: '1950s–70s', what: 'Operation Legacy runs across at least 23 countries as they approach independence.' },
      { when: 'Criteria',   what: 'Files vetted for anything that might embarrass Britain or show racial or religious bias.' },
      { when: 'Methods',    what: 'Burning and dumping at sea, with destruction certificates returned to London.' },
      { when: '1961',       what: 'Colonial Secretary Iain Macleod telegraphs embassies on retrieving sensitive documents.' },
      { when: 'Instead',    what: 'About 8,800 files shipped to Britain and held unacknowledged — the migrated archives.' },
      { when: '2011',       what: 'Their existence admitted during Mau Mau litigation. Declassification begins.' },
      { when: 'Nov 2013',   what: 'Around 20,000 files released as FCO 141 at the National Archives, Kew.' }
    ],

    src: [
      { label: 'Operation Legacy — scope, criteria, methods and the migrated archives',
        url: 'https://en.wikipedia.org/wiki/Operation_Legacy' },
      { label: 'The Elephant — Unhistories: Kenya’s Mau Mau, a walk through the archives',
        url: 'https://www.theelephant.info/analysis/2021/11/25/unhistories-kenyas-mau-mau-a-walk-through-the-archives/' },
      { label: 'Imperial & Global Forum — Destroying and doctoring the empire’s past',
        url: 'https://imperialglobalexeter.com/2025/10/16/destroying-and-doctoring-the-empires-past-comparing-hong-kong-with-other-british-colonies/' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'maya',
    kicker: 'Four books',
    title: 'Everything they wrote, minus four',
    stand: 'A Franciscan friar burned Maya books at Maní in 1562, then wrote a description of Maya culture while defending himself in Spain. That book turned out to be the key that let the writing be read again four hundred years later.',

    body: [

      'The Maya had a complete writing system — part syllabic, part logographic — used for dynastic history, astronomy, prophecy and ritual. Their books were bark paper, coated and folded like a screen. There were a great many of them.',

      'At Maní in Yucatán in 1562, Diego de Landa staged an auto-da-fé. By his own account twenty-seven books went onto the fire, along with some five thousand ritual objects. The wider campaign it belonged to involved torture, and Landa was censured for it and sent back to Spain in 1563. He was cleared, and returned to Yucatán as its bishop from 1573.',

      'Four Maya books survived into the twentieth century: the codices now in Dresden, Madrid and Paris, and the one in Mexico City — long known as the Grolier, long doubted, authenticated in 2018, and now reckoned the oldest surviving book of the Americas. Four books. That is the entire surviving literature of a literate civilisation.',

      'While defending himself in Spain, Landa wrote the Relación de las cosas de Yucatán, describing the calendar, the rituals and the writing. He tried to record a Maya “alphabet” by asking an informant for the sign matching each Spanish letter. As linguistics this was simply wrong — the script is not alphabetic — and for centuries the list was treated as a curiosity produced by a man who had not understood what he was looking at.',

      'In 1952 Yuri Knorozov, working in Moscow with no access to any Maya site, realised Landa had been wrong in a useful way. The informant had been giving the sounds of the Spanish letter names, so the list was not an alphabet but a set of syllables — which meant the script was phonetic. That is the hinge the whole decipherment turns on. Most of what can now be read in Maya inscriptions is readable because of a document written by the man who burned the books.',

      'One caution, because this catalogue keeps having to apply it to itself: Landa burned twenty-seven books at Maní, not every Maya book in existence. The writing and the books were disappearing across a century of conquest, epidemic and mission work, almost all of it undated and unattributed. Maní is the moment with a name and a date attached, which is exactly why it gets remembered as the whole story.',

      'The things that survive a destruction are rarely the things anyone chose to save.'
    ],

    stepsLabel: 'Four hundred years',

    steps: [
      { when: 'Pre-conquest', what: 'Bark-paper codices record history, astronomy, prophecy and ritual.' },
      { when: 'July 1562',    what: 'Landa burns twenty-seven books and some 5,000 ritual objects at Maní.' },
      { when: '1563',         what: 'Censured and sent to Spain, where he writes the Relación in his own defence.' },
      { when: '1573–1579',    what: 'Returns as Bishop of Yucatán.' },
      { when: 'Survivors',    what: 'Four codices: Dresden, Madrid, Paris, Mexico City.' },
      { when: '1952',         what: 'Knorozov recognises Landa’s “alphabet” as syllables. The script begins to open.' },
      { when: '2018',         what: 'The Mexico City codex authenticated — the oldest surviving book of the Americas.' }
    ],

    record: 'Maya Codices of the Yucatan',
    note: 'Record 032.',

    src: [
      { label: 'EBSCO Research Starters — Maya books: destruction',
        url: 'https://www.ebsco.com/research-starters/literature-and-writing/maya-books-destruction' },
      { label: 'The de Landa alphabet — what he recorded, and why it mattered',
        url: 'https://en.wikipedia.org/wiki/De_Landa_alphabet' },
      { label: 'RFE/RL — Yuri Knorozov: the maverick scholar who cracked the Maya code',
        url: 'https://rferl.org/a/maya-code-deciphered-knorozov-centenary-ukraine-russia/32136439.html' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'alcuin',
    kicker: 'Copying as rescue',
    title: 'The handwriting you are reading this in',
    stand: 'Most Latin literature that survives at all survives because somebody in the ninth century copied it out. The shapes of the letters on this screen come from the script they used to do it.',

    body: [

      'Record 013 in the catalogue is the library at York, sacked by the Viking Great Heathen Army in 867. In the eighth century it was arguably the best library in Europe, and the man who catalogued it — in a poem, naming more than two hundred authors — was Alcuin, who left for Charlemagne’s court in 782.',

      'Charlemagne’s motive was not romantic. He wanted a literate clergy, a standard liturgy and texts that did not contradict one another across his empire, and what existed was a mess of errors accumulated by generations of careless copying. The Carolingian programme was, at bottom, a correction programme. It set monastic scriptoria to copying whatever ancient manuscripts could be tracked down, many of them already crumbling fourth and fifth century codices.',

      'The consequence is the largest rescue in the history of writing, and it has no scene in it. The great majority of classical Latin literature survives in ninth-century Carolingian copies rather than in ancient manuscripts. When a modern edition prints Cicero or Lucretius or Tacitus, the text has normally been reconstructed from manuscripts written by monks a thousand years after the author died.',

      'Then there is the handwriting. The script those scriptoria developed — Carolingian minuscule — was a legibility reform: clear and consistent lowercase letterforms, spaces between words, which were not standard before, and punctuation. It was built so that a copyist in one monastery could read what a copyist in another had written without having to guess.',

      'Six hundred years later, Italian humanists hunting for classical texts found them in Carolingian copies, took the ninth-century hand for genuine ancient Roman writing, and imitated it in their own manuscripts. When printing arrived, the first roman typefaces were cut in imitation of that humanist hand. The lowercase alphabet on this screen is a Renaissance imitation of a Carolingian reform designed to make copies readable.',

      'This is the only kind of rescue that scales. Nobody ran into a burning building. A standard was set, a great many people copied a great many books over several generations, and the copies outlived the originals by a thousand years.',

      'York burned in 867, and it mattered less than it would have a century earlier, because the contents had already been moved — not carried out, which is the fragile way, but copied out, which is the durable one.'
    ],

    stepsLabel: 'How it scaled',

    steps: [
      { when: '8th c.',     what: 'York’s library. Alcuin catalogues it in a poem naming 200+ authors.' },
      { when: '782',        what: 'Alcuin goes to Charlemagne’s court; texts and copies travel west with him.' },
      { when: '780s–800s', what: 'Scriptoria set to copying ancient manuscripts, as a correction programme.' },
      { when: '9th c.',     what: 'Carolingian minuscule: lowercase, word spaces, punctuation. Legibility by design.' },
      { when: '867',        what: 'York is sacked. What was there is lost; what had been copied is elsewhere.' },
      { when: '15th c.',    what: 'Humanists mistake the ninth-century hand for Roman, and imitate it.' },
      { when: 'Printing',   what: 'Roman type is cut in imitation of the humanist hand. The shapes survive.' }
    ],

    record: 'Library of York (Eboracum)',
    note: 'Record 013. The entry notes that Alcuin had already left. This is what he did next.',

    src: [
      { label: 'Carolingian minuscule — the script reform and its afterlife in roman type',
        url: 'https://en.wikipedia.org/wiki/Carolingian_minuscule' },
      { label: 'The Carolingian Renaissance — the copying programme and what it preserved',
        url: 'https://en.wikipedia.org/wiki/Carolingian_Renaissance' },
      { label: 'SUNY Oneonta — Carolingian scripts',
        url: 'https://www.oneonta.edu/faculty/farberas/arth/arth212/Carolingian_Culture/carolingian_scripts.html' },
      { label: 'L. D. Reynolds and N. G. Wilson, Scribes and Scholars: A Guide to the Transmission of Greek and Latin Literature — the standard account of how these texts reached us' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'jewish-archive',
    kicker: 'Still unresolved',
    title: 'Rescued, and never sent home',
    stand: 'American soldiers found it rotting in a flooded basement in Baghdad in 2003. It was frozen, flown to Washington, conserved and digitised at a cost of around $3 million. It is still in Washington.',

    body: [

      'The Iraqi Jewish Archive is roughly 2,700 books and tens of thousands of documents belonging to the Jewish community of Iraq — religious texts, school records, community registers, personal papers. Iraqi intelligence had gathered the material from synagogues and community institutions after almost the entire Jewish population left in the early 1950s, under an emigration scheme whose condition was that they leave their property behind.',

      'In 2003 US forces searching the flooded basement of the intelligence headquarters found it under water. Sewage, heat, saturated paper: a collection with days to live.',

      'The rescue was refrigeration, again. It was frozen to arrest the mould, then flown to the United States with the consent of the provisional Iraqi authority, conserved at the National Archives, and digitised for about $3 million. The digital version is public and free, which is more access than the collection has ever had.',

      'The understanding was that it would go back. In 2014 the two governments agreed that most of it would stay until September 2018. In 2017 the State Department said it would not seek another extension. In 2018 it reversed, and worked with Iraq on a further delay. As of this year the material is still in Washington.',

      'Both sides of the argument are serious. Iraq says it is Iraqi state property, and that a foreign power removing a country’s documentary heritage is precisely the thing this catalogue exists to record. Iraqi Jews in exile, and their descendants, say the material was confiscated from them by a state that then drove them out, that returning it hands it to the confiscator’s successor, and that virtually none of the community it documents remains in Iraq to consult it.',

      'There is no catalogue entry for this one, because nothing was destroyed. It sits here because it is the far end of the Gilgamesh story: an object taken out of Iraq by Americans — openly this time, for good reasons, with paperwork and a budget — and still not back.',

      'The tablet went home in 2021 because the question was legal and a court could answer it: it was stolen, so it goes back. The archive has not, because the question is not legal. It is about who a community’s records belong to once the community itself is gone, and nobody has been willing to answer that one.'
    ],

    stepsLabel: 'Twenty-three years',

    steps: [
      { when: '1950s', what: 'Iraq’s Jewish population leaves, property left behind. Intelligence collects the records.' },
      { when: '2003',  what: 'Found under water in the flooded basement of the intelligence headquarters.' },
      { when: '2003',  what: 'Frozen to stop the mould, then flown to the US National Archives.' },
      { when: 'After', what: 'Conserved and digitised for about $3 million, and published online, free.' },
      { when: '2014',  what: 'Agreement: most of it stays in the US until September 2018.' },
      { when: '2017',  what: 'The State Department says it will not seek a further extension.' },
      { when: '2018',  what: 'It reverses, and works with Iraq to delay the return.' },
      { when: 'Now',   what: 'Still in Washington. Unresolved rather than contested in court.' }
    ],

    src: [
      { label: 'The Iraqi Jewish Archive — discovery, conservation and the disputed return',
        url: 'https://en.wikipedia.org/wiki/Iraqi_Jewish_Archive' },
      { label: 'Times of Israel — Despite protests, US to return trove of Jewish artifacts to Iraq',
        url: 'https://www.timesofisrael.com/despite-protests-us-to-return-trove-of-jewish-artifacts-to-iraq/' },
      { label: 'World Jewish Congress — Baghdad and Washington reach a deal to allow the archive to stay in the US',
        url: 'https://www.worldjewishcongress.org/en/news/baghdad-washington-reach-deal-to-allow-iraqi-jewish-archive-to-stay-in-us' }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    id: 'mosul',
    kicker: 'Afterwards',
    title: 'Restocking a million books',
    stand: 'ISIS destroyed something like 85 per cent of the University of Mosul’s library, a collection of roughly a million titles. The rebuilt library opened with 32,000 books on the shelves.',

    body: [

      'The destruction is in this catalogue twice: the university and museum libraries in 2014, and the central public library in 2015, where Syriac and Latin printed books from the sixteenth and seventeenth centuries and runs of rare Ottoman newspapers were burned in public and filmed for propaganda. The Waqf library held manuscripts up to four hundred years old. Its head says they have all disappeared.',

      'Mosul was retaken in mid-2017. Rebuilding a library is not like rebuilding a bridge. Nobody can give you back the specific thing that burned, so what you do instead is accumulate, and accept that the result is a different library with the same name.',

      'The central public library reopened in late 2019. Against more than 120,000 titles before the occupation and a documented loss of 2,350 volumes, it has since climbed to around 132,000 — rebuilt by public donation and ordinary purchasing.',

      'The university library took longer. The refurbished building, financed by a UN agency, opened in 2022 with 32,000 books and a stated goal of returning to a million, alongside a digital collection. Donations came from Arab and international universities, and from well-known figures in Mosul and elsewhere in Iraq handing over their own personal libraries.',

      'Omar Mohammed spent the occupation blogging anonymously from inside the city as Mosul Eye, documenting what was happening while being hunted for doing it, and revealed his identity at the end of 2017. He then ran an international appeal for books for the university.',

      'What cannot be restocked is the part that was irreplaceable to begin with. A donated engineering textbook genuinely does replace a burned engineering textbook. Nothing replaces a four-hundred-year-old Waqf manuscript, and nothing is going to.',

      'So Mosul has a library again. It does not have its library. Both halves of that sentence are worth saying, because most entries in this catalogue never got the first half at all.'
    ],

    stepsLabel: 'Burned, then restocked',

    steps: [
      { when: '2014',      what: 'University and museum libraries burned; private collections destroyed.' },
      { when: 'Feb 2015',  what: 'The central public library burned in public, and filmed.' },
      { when: 'Mid 2017',  what: 'Mosul retaken. Roughly 85% of the university collection is gone.' },
      { when: 'Dec 2017',  what: 'Omar Mohammed reveals himself as Mosul Eye and appeals internationally for books.' },
      { when: 'Late 2019', what: 'The public library reopens; donations push it past its pre-war count.' },
      { when: '2022',      what: 'The university library reopens with 32,000 books against a target of a million.' },
      { when: 'Not returning', what: 'The Waqf manuscripts, up to four hundred years old.' }
    ],

    record: 'Mosul University Libraries',
    note: 'Record 094, with the public library at record 098.',

    src: [
      { label: 'Rudaw — In Iraq’s Mosul, a library rises from the ashes of IS rule (2022)',
        url: 'https://www.rudaw.net/english/middleeast/iraq/09022022' },
      { label: 'Public Libraries Online — Library rebuilding begins at the University of Mosul (2017)',
        url: 'https://publiclibrariesonline.org/2017/09/library-rebuilding-begins-at-university-of-mosul/' },
      { label: 'Mosul Eye — the appeal for books, in Omar Mohammed’s own words',
        url: 'https://mosul-eye.org/2017/11/04/the-message-of-mosul-eye-reached-the-world-appropriately/' }
    ]
  }
  /* ---------------------------------------------------------- */

];
