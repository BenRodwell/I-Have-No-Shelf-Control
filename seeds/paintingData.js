const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'The Running Man',
    author: 'Steven King',
    year_of_publication: '1982',
    gallery_id: 21,
    filename: 'the_running_man.jpg',
    summary:
    "Ben Richards is out of work and out of luck. His eighteen-month-old daughter is sick, and neither Ben nor his wife can afford to take her to a doctor. For a man from the poor side of town with no cash and no hope, there's only one thing to do: become a contestant on one of the Network's Games, shows where you can win more money than you've ever dreamed of—or die trying. Now Ben's going prime-time on the Network's highest-rated viewer participation show. And he's about to become a prey for the masses..."
  },
  {
    title: "Akira: Vol 1",
    author: "Katsuhiro Otomo",
    year_of_publication: "1991",
    gallery_id: 9,
    filename: "akira_vol_1.jpg",
    summary: "Welcome to Neo-Tokyo, built on the ashes of a Tokyo annihilated by a blast of unknown origin that triggered World War III. The lives of two streetwise teenage friends, Tetsuo and Kaneda, change forever when paranormal abilities begin to waken in Tetsuo, making him a target for a shadowy agency that will stop at nothing to prevent another catastrophe like the one that leveled Tokyo. At the core of the agency’s motivation is a raw, all-consuming fear of an unthinkable, monstrous power known only as Akira. Katsuhiro Otomo’s stunning science fiction masterpiece is considered by many to be the finest work of graphic fiction ever produced, and Otomo’s brilliant animated film version is regarded worldwide as a classic."
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    year_of_publication: "1984",
    gallery_id: 21,
    filename: "neuromancer.jpg",
    summary: "Hotwired to the leading edges of art and technology, Neuromancer is a cyberpunk, science fiction masterpiece—a classic that ranks with 1984 and Brave New World as one of the twentieth century’s most potent visions of the future. The Matrix is a world within the world, a global consensus-hallucination, the representation of every byte of data in cyberspace... Henry Dorsett Case was the sharpest data-thief in the business, until vengeful former employees crippled his nervous system. But now a new and very mysterious employer recruits him for a last-chance run. The target: an unthinkably powerful artificial intelligence orbiting Earth in service of the sinister Tessier-Ashpool business clan. With a dead man riding shotgun and Molly, mirror-eyed street-samurai, to watch his back, Case embarks on an adventure that ups the ante on an entire genre of fiction."
  },
  {
    title: "The Rise and Fall of the British Empire",
    author: "William Gibson",
    year_of_publication: "1997",
    gallery_id: 13,
    filename: "the_rise_and_fall_of_the_british_empire.jpg",
    summary: "Great Britain's geopolitical role has undergone many changes over the last four centuries. Once a maritime superpower and ruler of half the world, Britain now occupies an isolated position as an economically fragile island often at odds with her European neighbors. In The Rise and Fall of the British Empire, Lawrence James has written a comprehensive, perceptive, and insightful history of the British Empire. Spanning the years from 1600 to the present day, this critically acclaimed book combines detailed scholarship with readable popular history."
  },
  {
    title: "The Hobbit",
    author: "JRR Tolkein",
    year_of_publication: "1937",
    gallery_id: 8,
    filename: "the_hobbit.jpg",
    summary: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001)."
  },
  {
    title: "Charlotte's Web",
    author: "E.B White",
    year_of_publication: "1952",
    gallery_id: 8,
    filename: "charlotte_web.jpg",
    summary: "This beloved book by E. B. White, author of Stuart Little and The Trumpet of the Swan, is a classic of children's literature that is just about perfect. This high-quality paperback features vibrant illustrations colorized by Rosemary Wells! Some Pig. Humble. Radiant. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter. E. B. White's Newbery Honor Book is a tender novel of friendship, love, life, and death that will continue to be enjoyed by generations to come. This edition contains newly color illustrations by Garth Williams, the acclaimed illustrator of E. B. White's Stuart Little and Laura Ingalls Wilder's Little House series, among many other books."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year_of_publication: "1988",
    gallery_id: 12,
    filename: "the_alchemist.jpg",
    summary: "Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
  },
  {
    title: "Childrens Birthday Cake Cookbook",
    author: "Womans Weekly",
    year_of_publication: "1980",
    gallery_id: 10,
    filename: "childrens_birthday_cake_cookbook.jpg",
    summary: "The Australian Women's Weekly's Children's Birthday Cake Book was first published in 1980 and has sold more than half a million copies. In response to all the requests we have had, often from mothers who remember fondly all the cakes from their own childhood, we have taken this book from our archives and reprinted it 30 years after it first appeared. We have had to make a minor change - four of your little friends are missing, but they've been replaced by other cakes you'll love just as much. Apart from that we've left it just as it was - a true collectors' cookbook especially for you. Now you can recreate your favourite cakes - the swimming pool, rocket and that train from the cover for your own child."
  },
  {
    title: "How To Build A Car",
    author: "Adrian Newey",
    year_of_publication: "2017",
    gallery_id: 2,
    filename: "how_to_build_a_car.jpg",
    summary: "Beautifully illustrated with never-before-seen drawings, How to Build a Car encapsulates, through Adrian's remarkable life story, precisely what makes Formula One so thrilling – its potential for the total synchronicity of man and machine, the perfect combination of style, efficiency and speed."
  },
  {
    title: "Porsche Carrera 4 Cam Engines",
    author: "Peter Pohl",
    year_of_publication: "2016",
    gallery_id: 3, 
    filename: "porsche_carrera_4_cam_engines.jpg",
    summary: "The Porsche 4 cam engine designed by Dr. Ernst Fuhrmann is one of the most interesting and technically demanding designs in the automotive industry of the 1950s and 60s. In this book Peter Pohl summarises and shares his knowledge and practical experience he acquired over 35 years of repairing, rebuilding and operating these rare power plants. The design of the engine type is analysed, classified and its weak points are identified. Ways to increase the engine’s performance are explained and the assembly of the Porsche 4-cam engine is described step by step. Practical tips for the proper maintenance and the operation of this engine complete the book. With forewords by Ulrich Trispel, Andy Prill and Dietrich Hatlapa."
  },
  {
    title: "Lotus Twin-Cam Engine",
    author: "Miles Wilkins",
    year_of_publication: "1988",
    gallery_id: 3,
    filename: "lotus_twin-cam_engine.jpg",
    summary: "Lotus Twin-Cam Engine is a comprehensive guide to the design, development, restoration, and maintenance of the Lotus-Ford twin-cam engine. During its career, the engine attracted several larger-than-life characters, not least Colin Chapman, Harry Mundy, and Keith Duckworth, as highlighted within the text."
  },
  // {
  //   title: "The Art of Frederick McCubbin",
  //   author: "",
  //   year_of_publication: "1986",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   summary: 
  // }
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year_of_publication: "2022",
    gallery_id: 5,
    filename: "the_psychology_of_money.jpg",
    summary: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. Money-investing, personal finance, and business decisions is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world people don't make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your own unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life's most important topics."
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    year_of_publication: "1936",
    gallery_id: 5,
    filename: "how_to_win_friends_and_influence_people.jpg",
    summary: "About the Author: Dale Carnegie (November 24, 1888 -- November 1, 1955) was a celebrated American author and self-improvement guru. Born in poverty on a farm in Missouri, he built himself a successful career as a traveling salesman before moving on to teach public speaking at a New York YMCA in 1912. His course was a hit, and within two years he had moved out of the YMCA and founded the Dale Carnegie Institute to accommodate the huge demand for his classes. His 1936 book HOW TO WIN FRIENDS AND INFLUENCE PEOPLE was a global bestseller, selling almost 5 million copies during his lifetime and becoming a staple of business curriculums around the world. The book emphasizes the importance of showing genuine interest in others, listening actively, and making others feel important and appreciated. It also suggests that to influence others, one should avoid arguments, admit mistakes, and let others take credit for ideas or work."
  },
  {
    title: "Selected Poems and Tales of Edgar Allen Poe",
    author: "Edgar Allen Poe",
    year_of_publication: "1914",
    gallery_id: 18,
    filename: "selected_poems_and_tales_of_edgar_allen_poe.jpg",
    summary: "",
  },
  {
    title: "Fill Your Oil Paintings with Light & Color",
    author: "Kevin Macpherson",
    year_of_publication: "2000",
    gallery_id: 1,
    filename: "fill_your_oil_paintings_with_light_&_color.jpg",
    summary: "These pages practically glow with Kevin Macpherson's rich and powerful paintings! He shares his techniques for quickly capturing the mood of a scene in bold, direct brushstrokes, with step-by-step instructions that make it easy—simply a matter of painting the colors you see. Follow his lead and you too, can create landscapes and still lives in a vibrant, impressionistic style."
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    year_of_publication: "2011",
    gallery_id: 4,
    filename: "steve_jobs.jpg",
    summary: "Steve Jobs is the authorized self-titled biography of American business magnate and Apple co-founder Steve Jobs. The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and Time who had previously written best-selling biographies of Benjamin Franklin and Albert Einstein."
  },
  {
    title: "Alexandras Outing",
    author: "Pamela Allen",
    year_of_publication: "",
    gallery_id: 6,
    filename: "alexanders_outing.jpg",
    summary: "",
  },
  {
    title: "The Bible",
    author: "",
    year_of_publication: "",
    gallery_id: 7,
    filename: "the_bible.jpg",
    summary: "",
  },
  {
    title: "The Lord of the Rings",
    author: "JRR Tolkien",
    year_of_publication: "",
    gallery_id: 11,
    filename: "thr_lord_of_the_rings.jpg",
    summary: "",
  },
  {
    title: "Cujo",
    author: "Stephen King",
    year_of_publication: "",
    gallery_id: 14,
    filename: "cujo.jpg",
    summary: "",
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
