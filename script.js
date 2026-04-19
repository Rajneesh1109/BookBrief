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
        }
        // More books can simply be added as objects here later!
    ];

    // Function to render books from the array to the Grid
    function renderBooks() {
        booksGrid.innerHTML = ''; // Ensure the grid is empty first

        booksDatabase.forEach(book => {
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

    // Start App
    renderBooks();
});
