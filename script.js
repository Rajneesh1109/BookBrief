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
            coverUrl: "stranger-again.jpg",
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
