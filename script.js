document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const booksGrid = document.getElementById('booksGrid');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultsSection = document.getElementById('resultsSection');
    const bookModal = document.getElementById('bookModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');

    // Default book cover if the API doesn't provide one
    const DEFAULT_COVER = 'https://via.placeholder.com/300x450/e5e7eb/6b7280?text=No+Cover';

    // Event Listeners for Search
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchBooks(query);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchBooks(query);
            }
        }
    });

    // Close Modal Event Listeners
    closeModal.addEventListener('click', () => {
        bookModal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === bookModal) {
            bookModal.classList.add('hidden');
        }
    });

    // Fetch books from Google Books API
    async function searchBooks(query) {
        resultsSection.classList.add('hidden');
        loadingIndicator.classList.remove('hidden');
        booksGrid.innerHTML = '';

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=16`);
            const data = await response.json();

            loadingIndicator.classList.add('hidden');
            
            if (data.items && data.items.length > 0) {
                displayBooks(data.items);
                resultsSection.classList.remove('hidden');
            } else {
                booksGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; font-size: 1.2rem; color: #6b7280; padding: 40px;">No books found. Try a different search term.</p>';
                resultsSection.classList.remove('hidden');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            loadingIndicator.classList.add('hidden');
            booksGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; font-size: 1.2rem; color: #ef4444; padding: 40px;">An error occurred while fetching library data. Please try again.</p>';
            resultsSection.classList.remove('hidden');
        }
    }

    // Display formatted book cards
    function displayBooks(books) {
        booksGrid.innerHTML = '';
        books.forEach(bookRaw => {
            const book = bookRaw.volumeInfo;
            // Upgrade to https if possible
            const coverUrl = book.imageLinks?.thumbnail?.replace('http:', 'https:') || DEFAULT_COVER;
            const title = book.title || 'Unknown Title';
            const author = book.authors ? book.authors.join(', ') : 'Unknown Author';
            const pageCount = book.pageCount || 250; // default assumption
            
            // Reading time estimate calculation (Average 200 wpm, ~250 words per page)
            // Time in minutes = (pages * 250) / 200 = pages * 1.25
            const readTime = Math.ceil(pageCount * 1.25); 
            
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="${coverUrl}" alt="${title} cover" class="book-cover" loading="lazy">
                <div class="book-info">
                    <h3 class="book-title" title="${title}">${title}</h3>
                    <p class="book-author">${author}</p>
                    <div class="book-meta">
                        <span><i class="fa-regular fa-clock"></i> ~${readTime} min read</span>
                        <span><i class="fa-regular fa-file-lines"></i> ${pageCount} pages</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                openBookModal(book, coverUrl, readTime);
            });

            booksGrid.appendChild(card);
        });
    }

    // Open detailed view modal
    function openBookModal(book, coverUrl, readTime) {
        const title = book.title || 'Unknown Title';
        const author = book.authors ? book.authors.join(', ') : 'Unknown Author';
        
        // Strip out nasty HTML tags from description if present, or just leave it
        let descriptionHTML = book.description || 'Our library currently does not have a comprehensive description for this title.';
        const publisher = book.publisher || 'Independent';
        const date = book.publishedDate ? book.publishedDate.substring(0, 4) : 'N/A';
        const categories = book.categories ? book.categories[0] : 'Literature';
        
        const mockBookId = title.replace(/[^a-zA-Z0-9]/g, '') + Math.floor(Math.random() * 100);

        modalBody.innerHTML = `
            <div class="modal-split">
                <div class="modal-cover-col">
                    <img src="${coverUrl}" alt="${title}" class="modal-cover">
                </div>
                <div class="modal-info-col">
                    <h2 class="modal-title">${title}</h2>
                    <p class="modal-author">by ${author}</p>
                    
                    <div class="badges">
                        <div class="badge"><i class="fa-regular fa-clock"></i> ${readTime} mins empty-to-end</div>
                        <div class="badge"><i class="fa-solid fa-layer-group"></i> ${categories}</div>
                        <div class="badge"><i class="fa-regular fa-calendar"></i> ${date}</div>
                        <div class="badge"><i class="fa-solid fa-building-columns"></i> ${publisher}</div>
                    </div>

                    <div class="modal-desc">
                        ${descriptionHTML}
                    </div>

                    <div class="ai-section">
                        <div class="ai-header">
                            <div class="ai-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <div class="ai-title">AI Powered Insights</div>
                        </div>
                        <div id="aiContent-${mockBookId}">
                            <button class="generate-btn" id="generateBtn-${mockBookId}">
                                <i class="fa-solid fa-bolt"></i> Generate Chapter-by-Chapter Summary
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        bookModal.classList.remove('hidden');

        // Attach event listener to generate AI summary
        const btn = document.getElementById(`generateBtn-${mockBookId}`);
        btn.addEventListener('click', () => {
            generateAISummary(mockBookId, title, author);
        });
    }

    // Simulate AI generation with a typing effect
    function generateAISummary(elementId, title, author) {
        const container = document.getElementById(`aiContent-${elementId}`);
        container.innerHTML = '<div class="ai-content ai-typing" id="typingBox-${elementId}"></div>';
        
        const typingBox = container.querySelector('.ai-content');
        
        // Mock dynamically tailored AI response based on the book title
        const aiResponse = `
<h3>Executive Overview</h3>
<p>In "<strong>${title}</strong>", ${author} dives deep into transformative concepts that challenge conventional thinking. This book is structured to guide the reader from foundational principles to advanced applications.</p>
<br>
<h3>Key Lessons</h3>
<ul>
    <li><strong>Consistent Application:</strong> The most significant changes come from small, compounding daily actions.</li>
    <li><strong>Shift in Perspective:</strong> Reframing challenges as opportunities fundamentally changes outcomes.</li>
    <li><strong>The Power of Fundamentals:</strong> Mastery is rarely about complex strategies, but rather an unshakeable grasp of the basics.</li>
    <li><strong>Adaptability:</strong> In a rapidly changing environment, the ability to unlearn and relearn is your greatest asset.</li>
</ul>
<br>
<h3>Chapter-by-Chapter Breakdown</h3>
<p><strong>Chapter 1 & 2: The Groundwork</strong><br/>
Establishes the core thesis and examines why traditional approaches often fail in modern contexts.</p>

<p><strong>Chapter 3 & 4: Mechanics and Frameworks</strong><br/>
Introduces actionable systems. ${author} provides clear models for implementing changes immediately without overwhelming the reader.</p>

<p><strong>Chapter 5 & 6: Overcoming Resistance</strong><br/>
Details the psychological and environmental hurdles that block progress, offering proven strategies to bypass them.</p>

<p><strong>Chapter 7 & 8: Sustaining Momentum</strong><br/>
Concludes with a forward-looking perspective on how to lock in gains and continue scaling success over the long term.</p>
        `.trim();

        let i = 0;
        let isTag = false;
        let htmlContent = '';
        
        function typeWriter() {
            if (i < aiResponse.length) {
                let char = aiResponse.charAt(i);
                if (char === '<') isTag = true;
                
                htmlContent += char;
                typingBox.innerHTML = htmlContent;
                i++;
                
                if (char === '>') isTag = false;
                
                if (isTag) {
                    typeWriter();
                } else {
                    setTimeout(typeWriter, Math.random() * 8 + 4); // Random delay between 4-12ms
                }
            } else {
                typingBox.classList.remove('ai-typing');
            }
        }
        
        typeWriter();
    }
});
