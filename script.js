document.addEventListener('DOMContentLoaded', () => {
    const booksGrid = document.getElementById('booksGrid');
    const bookModal = document.getElementById('bookModal');
    const modalBody = document.getElementById('modalBody');
    
    // Custom manual database to add books easily later
    const booksDatabase = [
        {
            id: 'silent-patient',
            title: "The Silent Patient",
            author: "Alex Michaelides",
            genre: "Psychological Thriller",
            pages: 325,
            rating: 4.5,
            coverUrl: "silent-patient.jpg",
            coverColor: "linear-gradient(135deg, #0f172a, #334155)", // Thriller dark aesthetic
            summary: `
                <p>Alicia Berenson, a famous painter, shoots her husband Gabriel five times and then never speaks another word. She is sent to a secure forensic unit called The Grove. Theo Faber, a criminal psychotherapist, is obsessed with her case and fights to become her therapist.</p>
                <p>As Theo digs deeper into Alicia's past, he discovers her diary which reveals the events leading up to the murder. The story builds tension as Theo uncovers secrets about Alicia's childhood trauma, her marriage problems, and a mysterious stranger who visited her.</p>
                <p>The ending delivers a shocking twist that completely changes everything the reader thought they knew. The killer's true identity and motive are revealed in the final pages in a way that will leave readers speechless.</p>
            `,
            keyLessons: [
                "Silence can speak louder than words",
                "Past trauma shapes our present actions",
                "Nothing is as it seems"
            ]
        },
        {
            id: 'can-we-be-strangers-again',
            title: "Can We Be Strangers Again?",
            author: "Shrijeet Shandilya",
            genre: "Romance / Contemporary Fiction",
            pages: 230,
            rating: 3.6,
            coverUrl: "stranger-again.png",
            coverColor: "linear-gradient(135deg, #9f1239, #fb7185)", // Romance pink aesthetic
            summary: `
                <p>A story of three college friends - Dev, Avantika, and Tanishka set during the pandemic era when everything was online. It all started with a simple 'Hi' in a college group chat.</p>
                <p>Dev falls deeply in love but soon faces the pain of heartbreak and betrayal. The story explores the thin line between infatuation and love, and the question - after sharing everything, is it really possible to become strangers again?</p>
            `,
            keyLessons: [
                "Don't confuse attraction for love",
                "Realise someone's worth before losing them",
                "Moving on is painful but necessary"
            ]
        },
        {
            id: 'atomic-habits',
            title: "Atomic Habits",
            author: "James Clear",
            genre: "Self Help / Personal Development",
            pages: 320,
            rating: 4.3,
            coverUrl: "atomic-habits.jpg",
            coverColor: "linear-gradient(135deg, #fbbf24, #d97706)", // Yellow/orange aesthetic
            summary: `
                <p>Atomic Habits is one of the most practical and powerful books ever written on the science of building good habits and breaking bad ones. James Clear presents a simple yet revolutionary framework called the Four Laws of Behavior Change. The core idea of the book is that you do not rise to the level of your goals — you fall to the level of your systems. Small habits, done consistently, compound into remarkable results over time.</p>
                <p>The book begins with Clear's own story — a baseball player who suffered a serious injury and rebuilt himself through tiny daily improvements. This personal story sets the tone: transformation is not about massive overnight change but about getting 1% better every day.</p>
                <p>Clear introduces the Habit Loop — every habit has four parts: Cue, Craving, Response, and Reward. Understanding this loop is the foundation of changing any behavior. He then builds on this with his Four Laws:</p>
                <p>Law 1 - Make It Obvious: Design your environment so good habits are visible and easy to start. For example, if you want to read more, keep a book on your pillow.<br>
                Law 2 - Make It Attractive: Pair habits you need to do with things you enjoy. This increases motivation.<br>
                Law 3 - Make It Easy: Reduce friction. The easier a habit is to start, the more likely you will do it. Start with just 2 minutes.<br>
                Law 4 - Make It Satisfying: Reward yourself immediately after completing a habit. The brain remembers what feels good.</p>
                <p>One of the most powerful concepts is Identity-Based Habits. Instead of saying "I want to run a marathon", say "I am a runner." When your habits match your identity, they become effortless. Clear also introduces Habit Stacking — linking a new habit to an existing one, like "After I brush my teeth, I will meditate for 2 minutes."</p>
            `,
            keyLessons: [
                "Small changes compound into huge results over time",
                "Focus on systems, not goals",
                "Your environment shapes your behavior more than your willpower",
                "Identity drives long-term habit change",
                "The 2-minute rule: start any habit in under 2 minutes"
            ]
        },
        {
            id: 'the-alchemist',
            title: "The Alchemist",
            author: "Paulo Coelho",
            genre: "Fiction / Inspirational / Philosophy",
            pages: 182,
            rating: 4.0,
            coverUrl: "alchemist.jpg",
            coverColor: "linear-gradient(135deg, #fcd34d, #b45309)", // Sand/gold aesthetic
            summary: `
                <p>The Alchemist is one of the most beloved novels in the world, translated into over 65 languages and selling more than 150 million copies. It is the story of Santiago, a young Andalusian shepherd boy from Spain who has a recurring dream about a treasure hidden near the Egyptian Pyramids.</p>
                <p>Santiago consults a fortune teller and then meets a mysterious old king named Melchizedek who tells him about his Personal Legend — the thing a person has always wanted to accomplish in life. The king urges him to follow his dream and pursue his treasure. Santiago sells his sheep and begins his journey from Spain to Africa.</p>
                <p>In Africa, Santiago is robbed immediately and left with nothing. He starts working for a crystal merchant and stays for almost a year, learning important life lessons about patience, work, and persistence. His presence transforms the merchant's business. Eventually Santiago joins a caravan crossing the Sahara Desert toward Egypt.</p>
                <p>During the journey, he falls in love with a woman named Fatima and meets an Englishman who is searching for an alchemist. Santiago eventually finds the mysterious alchemist who teaches him the most important lesson of all — to listen to his heart and read the Soul of the World. The alchemist tells him that when you want something with all your heart, the entire universe conspires to help you achieve it.</p>
                <p>After many trials and dangers, Santiago finally reaches the Pyramids — only to discover that the real treasure was back where his journey began. The treasure was never about gold. It was about the journey itself, the person he became, and the wisdom he gained.</p>
            `,
            keyLessons: [
                "Follow your Personal Legend — your true purpose in life",
                "The universe helps those who truly pursue their dreams",
                "Every journey teaches you more than the destination",
                "Listen to your heart — it knows what you truly want",
                "Treasure is often found where you least expect it"
            ]
        },
        {
            id: 'it-ends-with-us',
            title: "It Ends With Us",
            author: "Colleen Hoover",
            genre: "Romance / Contemporary Fiction",
            pages: 384,
            rating: 4.1,
            coverUrl: "it-ends-with-us.jpg",
            coverColor: "linear-gradient(135deg, #fda4af, #be123c)", // Soft pink/rose aesthetic
            summary: `
                <p>It Ends With Us is one of the most emotionally powerful and important romance novels ever written. Colleen Hoover herself has said it was the hardest book she ever wrote, as it is based on the real relationship between her own parents.</p>
                <p>The story follows Lily Bloom, a young woman who moves to Boston from a small town in Maine after graduating college. She wants to open her own flower shop and start a fresh new life. On the rooftop of a building one night, she meets Ryle Kincaid — a charming, brilliant, and handsome neurosurgeon. Ryle is confident and attractive but claims he never wants a relationship. Despite this, the chemistry between him and Lily is undeniable.</p>
                <p>As Lily and Ryle slowly fall deeply in love, Lily also shares her old journal with the reader — entries she wrote as a teenager about her first love, a homeless boy named Atlas Corrigan whom she secretly helped and fell in love with. These flashbacks show a pure, gentle first love that shaped who Lily became.</p>
                <p>Everything seems perfect until Ryle's behavior begins to change. Small moments of anger turn into something more frightening. Lily begins to see a pattern that feels terrifyingly familiar — the same pattern she witnessed between her own parents growing up, where her father was abusive to her mother. She had always judged her mother for staying. Now she understands how complicated love really is.</p>
                <p>When Atlas suddenly reappears in Lily's life, it forces her to face difficult truths. She must make an impossible choice — one that requires incredible strength and courage.</p>
            `,
            keyLessons: [
                "Love alone is not enough to sustain a relationship",
                "Recognizing cycles of abuse is the first step to breaking them",
                "Strength means making hard choices, not just enduring pain",
                "Your worth is not defined by how much you are willing to suffer",
                "It ends with us — we have the power to stop generational pain"
            ]
        },
        {
            id: 'gone-girl',
            title: "Gone Girl",
            author: "Gillian Flynn",
            genre: "Psychological Thriller / Mystery",
            pages: 422,
            rating: 4.1,
            coverUrl: "gone-girl.jpg",
            coverColor: "linear-gradient(135deg, #1e293b, #0f172a)", // Dark blue thriller theme
            summary: `
                <p>Gone Girl is one of the most gripping and shocking psychological thrillers ever written. The story is told from two alternating perspectives — Nick Dunne and his wife Amy Dunne — and from the very first chapter, the reader is never quite sure who is telling the truth.</p>
                <p>On the morning of their fifth wedding anniversary, Nick comes home to find the front door open, furniture overturned, and Amy completely missing. The police are called, and what begins as a missing person investigation quickly turns into something far darker. The media becomes obsessed with the case, and Nick — awkward, secretive, and unable to display the right emotions — quickly becomes the prime suspect in his own wife's disappearance.</p>
                <p>As the investigation unfolds, Amy's diary entries are shared with the reader. Through them, we see a picture of a once-perfect marriage that slowly began to crack after the couple lost their jobs in New York and moved to Nick's small hometown in Missouri. Amy comes across as charming, intelligent, and deeply in love — but increasingly afraid of her husband.</p>
                <p>But nothing in this book is what it seems. As secrets begin to surface — Nick's affairs, his lies, Amy's obsessive personality — the story takes a stunning turn that completely shatters everything the reader believed. The twist in Gone Girl is one of the most jaw-dropping moments in modern thriller fiction. It forces the reader to go back and reread every chapter with completely new eyes.</p>
                <p>The book explores dark themes: the performance of marriage, how people construct public versions of themselves, media manipulation, and the terrifying lengths some people will go to in order to win.</p>
            `,
            keyLessons: [
                "People are never truly what they appear to be",
                "Marriage can become a battlefield of manipulation",
                "The media shapes public perception of truth",
                "Jealousy and control can destroy relationships",
                "Never trust a single narrator — always question the story"
            ]
        },
        {
            id: 'da-vinci-code',
            title: "The Da Vinci Code",
            author: "Dan Brown",
            genre: "Mystery / Thriller / Adventure",
            pages: 489,
            rating: 3.9,
            coverUrl: "da-vinci-code.jpg",
            coverColor: "linear-gradient(135deg, #78350f, #451a03)", // Brown ancient text aesthetic
            summary: `
                <p>The Da Vinci Code is one of the best-selling mystery novels of all time, with over 80 million copies sold worldwide. It is a breathless, fast-paced adventure that combines art history, religion, secret societies, and conspiracy into one unforgettable thriller.</p>
                <p>The story begins in Paris, late at night. Jacques Sauniere, the elderly curator of the Louvre museum, is murdered inside the museum itself. Before dying, he leaves behind a series of cryptic codes and symbols on his own body and on the floor around him. Harvard professor Robert Langdon, a specialist in religious symbols, is called in to help decode the clues.</p>
                <p>He is joined by Sophie Neveu, a brilliant French cryptologist and granddaughter of the murdered man. As they begin to decode the messages, they realize they are being framed for the murder — and that the clues point toward one of the greatest secrets in human history, hidden inside the paintings of Leonardo da Vinci himself.</p>
                <p>Their investigation leads them across Paris, to London, and through ancient churches and castles, as they race against both the police and a mysterious albino monk named Silas who is hunting them on behalf of a powerful religious organization. The secret they are chasing involves the Holy Grail, Mary Magdalene, and a truth about Jesus Christ that a secret society called the Priory of Sion has protected for centuries.</p>
                <p>Every chapter ends on a cliffhanger, making this one of the most unputdownable books ever written. Brown weaves real history, real art, and real architecture into his fictional thriller so seamlessly that millions of readers visited the Louvre and other locations mentioned in the book.</p>
            `,
            keyLessons: [
                "Question everything — official history is written by the powerful",
                "Art and symbols carry hidden meanings",
                "Faith and facts do not always align",
                "The greatest secrets are often hidden in plain sight",
                "Knowledge is power — and sometimes dangerous"
            ]
        },
        {
            id: 'dragon-tattoo',
            title: "The Girl with the Dragon Tattoo",
            author: "Stieg Larsson",
            genre: "Crime / Psychological Thriller",
            pages: 590,
            rating: 4.2,
            coverUrl: "dragon-tattoo.jpg",
            coverColor: "linear-gradient(135deg, #09090b, #3f3f46)", // Very dark steel vibe
            summary: `
                <p>The Girl with the Dragon Tattoo is a masterpiece of Scandinavian crime fiction, originally published in Swedish and translated into over 40 languages. It is the first book in the Millennium series, and it introduces one of the most iconic characters in modern thriller fiction — Lisbeth Salander.</p>
                <p>The story has two main threads that gradually come together. The first follows Mikael Blomkvist, a crusading financial journalist who has just lost a libel case and is facing prison time. He is hired by Henrik Vanger, the elderly patriarch of one of Sweden's most powerful and dysfunctional families, to investigate the disappearance of his niece Harriet Vanger — a case that is over 40 years old.</p>
                <p>The second thread follows Lisbeth Salander, a 24-year-old genius hacker with a troubled past, photographic memory, and a dragon tattoo on her back. She is antisocial, brilliant, and deeply distrustful of authority — for very good reasons that are slowly revealed throughout the book. She becomes Mikael's research partner, and together they begin to uncover something far darker than a simple disappearance.</p>
                <p>As Mikael and Lisbeth dig deeper into the Vanger family history, they discover a trail of violence, abuse, and murder that spans decades. The Vanger family is full of dark secrets — Nazi sympathizers, financial crimes, and a serial killer operating within the family itself.</p>
                <p>The book is long and detailed, but every page builds the tension. Stieg Larsson wrote it with a deep anger about violence against women — a theme that runs throughout the entire trilogy. The Swedish title actually translates to "Men Who Hate Women," which gives a clear signal about what the book is truly about.</p>
            `,
            keyLessons: [
                "Corruption and abuse thrive when protected by power and silence",
                "Justice does not always come from the legal system",
                "Strength comes in unexpected forms",
                "The past never truly stays buried",
                "Women survivors of abuse deserve justice, not silence"
            ]
        },
        {
            id: 'the-housemaid',
            title: "The Housemaid",
            author: "Freida McFadden",
            genre: "Psychological Thriller / Domestic Suspense",
            pages: 329,
            rating: 4.3,
            coverUrl: "housemaid.jpg",
            coverColor: "linear-gradient(135deg, #27272a, #52525b)", // Grey suspense theme
            summary: `
                <p>The Housemaid is a #1 New York Times bestselling psychological thriller that has taken the world by storm, with over 3 million copies sold and a major film adaptation released in 2025. It is the kind of book you start in the morning and cannot put down until midnight.</p>
                <p>The story follows Millie Calloway, a young woman with a troubled past and a criminal record that makes it nearly impossible for her to find a job. Desperate and homeless, living out of her car, she answers an advertisement for a live-in housemaid position at the beautiful home of Andrew and Nina Winchester on Long Island.</p>
                <p>At first, the Winchester home seems like a dream — a stunning mansion, a good salary, and a charming employer in Andrew. But Nina, his wife, is cold, controlling, and erratic. She creates messes just to watch Millie clean them up. She tells strange lies about their young daughter Cecelia. She seems to resent Millie deeply, yet keeps her employed.</p>
                <p>Millie is confined to a tiny room at the top of the house, barely bigger than a closet. She begins to notice things — locked doors, hushed arguments, the way Nina watches her, the way Andrew looks at her with something she cannot quite name. And then there is the attic. She is never allowed in the attic.</p>
                <p>As Millie digs deeper into the family secrets, she begins to unravel the dark truth about what really goes on behind the Winchesters' perfect front door. Nothing is what it seems — not Nina, not Andrew, not even Millie herself. The book builds to a shocking, jaw-dropping twist that will leave readers completely speechless.</p>
            `,
            keyLessons: [
                "Beautiful homes can hide the ugliest secrets",
                "Power imbalances create dangerous situations",
                "Never judge someone by their past alone",
                "The most dangerous people are those who appear perfect",
                "Survival sometimes requires extraordinary courage"
            ]
        },
        {
            id: 'woman-in-window',
            title: "The Woman in the Window",
            author: "A.J. Finn",
            genre: "Psychological Thriller / Suspense",
            pages: 448,
            rating: 4.1,
            coverUrl: "woman-in-window.jpg",
            coverColor: "linear-gradient(135deg, #1e293b, #334155)",
            summary: `
                <p>The Woman in the Window is a masterpiece of psychological suspense, a #1 New York Times Bestseller that sold millions of copies worldwide and was adapted into a Netflix film starring Amy Adams. It is the kind of book that grabs you from the very first page and does not let go until the shocking final revelation.</p>
                <p>The story centers on Dr. Anna Fox, a child psychologist in her late thirties who lives alone in a beautiful but suffocating four-story townhouse in Harlem, New York City. Anna has not stepped outside her front door in ten months. She suffers from agoraphobia — a crippling anxiety disorder triggered by a traumatic event in her past that she cannot bring herself to fully confront. Every time she tries to open the front door, panic seizes her completely. Her world has shrunk to the four walls of her home.</p>
                <p>To fill the endless, lonely hours, Anna has developed a set of routines. She drinks far too much red wine — a habit that has spiraled far beyond her control. She watches classic black-and-white films obsessively — Hitchcock, noir thrillers, old Hollywood mysteries. She plays chess online with strangers she will never meet. She attends virtual therapy sessions with her psychiatrist. And most significantly of all — she watches her neighbors through the windows of her home, using a long-lens camera to observe the lives being lived just across the street.</p>
                <p>Anna knows almost everything about the people in her neighborhood. She has watched them for months — their arguments, their routines, their private moments. It is voyeuristic and she knows it, but it is the only connection she has left to the outside world. Then the Russell family moves into the house directly across the street — Alistair, a tall and imposing father; his wife Jane, warm and vivacious; and their teenage son Ethan, quiet and clearly troubled.</p>
                <p>Ethan visits Anna one afternoon, and they form an unlikely friendship over old films and conversation. Shortly after, Jane Russell herself comes to visit — a vibrant, generous woman who shares wine with Anna and makes her feel, for the first time in months, like a real person again. Anna is charmed by her completely.</p>
                <p>Then comes the night that changes everything.</p>
                <p>While watching through her camera lens from her darkened living room, Anna witnesses what she believes is a violent assault in the Russell house. A woman — screaming. A flash of something bright. Blood. Anna calls the police in a panic. The officers arrive quickly and investigate the Russell house. But when they return, they bring a woman with them who claims to be Jane Russell — and she is completely different from the Jane that Anna met. This woman is cold, composed, and insists she has never met Anna in her life.</p>
                <p>The police are skeptical of Anna immediately. She has been drinking. She is on multiple medications. She has not left her home in nearly a year. Her ex-husband Ed, who calls regularly and has custody of their young daughter Olivia, is concerned about her mental state. Her tenant David, who rents the basement apartment, tries to comfort her but keeps his own secrets. Even Anna herself begins to wonder — did she imagine it all? Is her mind playing tricks on her? Are the wine and the pills causing hallucinations?</p>
                <p>But Anna cannot let it go. Something inside her insists that what she saw was real. She begins investigating obsessively — digging into the Russell family's background online, replaying the photographs she took that night, reaching out to Ethan secretly. And the more she digs, the more she realizes that the Russell family is hiding something deeply sinister behind their perfect suburban facade.</p>
                <p>The story peels back layer after layer of deception. Anna's own past begins to surface in fragments — the traumatic car accident that triggered her agoraphobia, the truth about her estrangement from Ed and Olivia, the real reason she stopped working. These revelations reframe everything the reader thought they understood about Anna and make her an even more complex and heartbreaking character.</p>
                <p>As the tension builds to an unbearable level, Anna finds herself in genuine danger inside her own home — the one place she believed she was safe. The climax is violent, terrifying, and completely unexpected. The final twist recontextualizes the entire novel and will leave readers sitting in stunned silence before rushing back to reread the opening chapters with new eyes.</p>
                <p>The Woman in the Window has been praised by Stephen King as "unputdownable" and by Gillian Flynn as "astounding." It draws heavily from Hitchcock's classic film Rear Window but builds something entirely original and deeply human on top of that foundation — a story not just about a crime, but about grief, guilt, isolation, and the desperate human need for connection.</p>
            `,
            keyLessons: [
                "Isolation can slowly destroy a person's grip on reality",
                "Grief and trauma manifest in ways we do not always recognize",
                "Always trust your instincts, even when the whole world doubts you",
                "The most dangerous secrets are those hidden in perfectly ordinary homes",
                "Healing requires confronting the truth, no matter how painful",
                "Addiction is never just a habit — it is always a symptom of something deeper",
                "The people we watch from a distance are never who we think they are"
            ]
        }
        // More books can simply be added as objects here later!
    ];

    // Function to render books from the array to the Grid
    function renderBooks(filter = 'All Books') {
        booksGrid.innerHTML = ''; // Ensure the grid is empty first

        const filteredBooks = booksDatabase.filter(book => {
            if (filter === 'All Books') return true;
            return book.genre.toLowerCase().includes(filter.toLowerCase());
        });

        filteredBooks.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';

            card.innerHTML = `
                <img src="${book.coverUrl}" class="book-cover-img" alt="${book.title} cover">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">by ${book.author}</p>
                    
                    <div class="book-meta">
                        <span class="meta-tag rating"><i class="fa-solid fa-star"></i> ${book.rating}/5</span>
                        <span class="meta-tag"><i class="fa-solid fa-layer-group"></i> ${book.genre}</span>
                        <span class="meta-tag"><i class="fa-regular fa-file-lines"></i> ${book.pages} pages</span>
                    </div>

                    <button class="read-btn" data-id="${book.id}">
                        <i class="fa-solid fa-book-open"></i> Read Summary
                    </button>
                </div>
            `;
            booksGrid.appendChild(card);
        });

        // Add event listeners to the generated 'Read Summary' buttons
        document.querySelectorAll('.read-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const bookId = e.currentTarget.getAttribute('data-id');
                const selectedBook = booksDatabase.find(b => b.id === bookId);
                if(selectedBook) openModal(selectedBook);
            });
        });
    }

    // Opens the curated detailed modal
    function openModal(book) {
        // Calculate read time assuming 200 words per min & 250 words per page average
        const readTime = Math.ceil(book.pages * 1.25);
        
        let lessonsHtml = '';
        if(book.keyLessons && book.keyLessons.length > 0) {
            const listItems = book.keyLessons.map(lesson => 
                `<li><i class="fa-solid fa-check"></i> <span>${lesson}</span></li>`
            ).join('');
            
            lessonsHtml = `
                <div class="lessons-section">
                    <h3><i class="fa-regular fa-lightbulb"></i> Key Lessons</h3>
                    <ul class="lessons-list">
                        ${listItems}
                    </ul>
                </div>
            `;
        }

        modalBody.innerHTML = `
            <div class="modal-header-color" style="background: linear-gradient(to top, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.3) 100%), url('${book.coverUrl}') center/cover no-repeat; border-radius: 24px 24px 0 0;">
                <span class="close-modal">&times;</span>
                <h2 class="modal-title">${book.title}</h2>
                <p class="modal-author">by ${book.author}</p>
            </div>
            
            <div class="modal-body-content">
                <div class="modal-badges">
                    <div class="meta-tag rating"><i class="fa-solid fa-star"></i> ${book.rating}/5 Rating</div>
                    <div class="meta-tag"><i class="fa-regular fa-clock"></i> ~${readTime} min read</div>
                    <div class="meta-tag"><i class="fa-solid fa-layer-group"></i> ${book.genre}</div>
                    <div class="meta-tag"><i class="fa-regular fa-file-lines"></i> ${book.pages} pages</div>
                </div>

                <div class="summary-content">
                    <h3><i class="fa-solid fa-book-open-reader"></i> Comprehensive Summary</h3>
                    ${book.summary}
                </div>

                ${lessonsHtml}
            </div>
        `;

        bookModal.classList.remove('hidden');

        // Close modal button logic
        modalBody.querySelector('.close-modal').addEventListener('click', () => {
            bookModal.classList.add('hidden');
        });
    }

    // Close modal on background click
    window.addEventListener('click', (e) => {
        if (e.target === bookModal) {
            bookModal.classList.add('hidden');
        }
    });

    // Dropdown Logic
    const menuBtn = document.getElementById('menuBtn');
    const genreDropdown = document.getElementById('genreDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    if (menuBtn && genreDropdown) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            genreDropdown.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!genreDropdown.contains(e.target) && e.target !== menuBtn) {
                genreDropdown.classList.remove('show');
            }
        });

        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // Ignore click if it's the dark mode container
                if (e.currentTarget.classList.contains('dark-mode-toggle-container')) return;
                
                const filterValue = e.currentTarget.getAttribute('data-filter');
                if (filterValue) {
                    renderBooks(filterValue);
                    genreDropdown.classList.remove('show');
                }
            });
        });
    }

    // Dark Mode Logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            darkModeToggle.checked = true;
        }
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Start App
    renderBooks();
});
