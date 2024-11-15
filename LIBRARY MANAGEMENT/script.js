// Sample books data by branch
const booksByBranch = {
    cse: [
        { title: "Introduction to Algorithms", author: "Thomas H. Cormen" },
        { title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell" },
        { title: "Operating System Concepts", author: "Abraham Silberschatz" },
        { title: "Data Structures and Algorithms in Java", author: "Robert Lafore" },
        { title: "Computer Networking: A Top-Down Approach", author: "James Kurose" },
      ],
      eee: [
        { title: "Electric Machinery Fundamentals", author: "Stephen J. Chapman" },
        { title: "Power Systems Analysis", author: "John J. Grainger" },
        { title: "Modern Control Engineering", author: "Ogata Katsuhiko" },
        { title: "Introduction to Electric Circuits", author: "Richard C. Dorf" },
        { title: "Fundamentals of Electric Circuits", author: "Alexander and Sadiku" },
      ],
      ee: [
        { title: "Electrical Engineering: Principles & Applications", author: "Albert Paul Malvino" },
        { title: "Electrical Power Systems", author: "C.L. Wadhwa" },
        { title: "Electric Power Generation, Transmission, and Distribution", author: "Leonard L. Grigsby" },
        { title: "Control Systems Engineering", author: "Norman S. Nise" },
        { title: "Power System Analysis and Design", author: "B. M. Weedy" },
      ],
      ise: [
        { title: "Introduction to Information Systems", author: "Ralph M. Stair" },
        { title: "Database System Concepts", author: "Abraham Silberschatz" },
        { title: "Computer Organization and Design", author: "David A. Patterson" },
        { title: "Design and Analysis of Algorithms", author: "Anany Levitin" },
        { title: "Information Systems for Business and Beyond", author: "Paul Bocij" },
      ],
      ce: [
        { title: "Fundamentals of Structural Analysis", author: "C. K. Wang" },
        { title: "Principles of Geotechnical Engineering", author: "Braja M. Das" },
        { title: "Construction Project Management", author: "Frederick E. Gould" },
        { title: "Water Resources Engineering", author: "Larry W. Mays" },
        { title: "Design of Concrete Structures", author: "Arthur H. Nilson" },
      ],
      aiml: [
        { title: "Deep Learning", author: "Ian Goodfellow" },
        { title: "Pattern Recognition and Machine Learning", author: "Christopher M. Bishop" },
        { title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell" },
        { title: "Machine Learning Yearning", author: "Andrew Ng" },
        { title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", author: "Aurélien Géron" },
      ],
      me: [
        { title: "Engineering Mechanics: Dynamics", author: "J.L. Meriam" },
        { title: "Fluid Mechanics", author: "Frank M. White" },
        { title: "Mechanical Engineering Design", author: "J.E. Shigley" },
        { title: "Thermodynamics: An Engineering Approach", author: "Yunus A. Cengel" },
        { title: "Introduction to Heat Transfer", author: "Frank P. Incropera" },
      ],
      mba: [
        { title: "Principles of Marketing", author: "Philip Kotler" },
        { title: "Business Law and the Legal Environment", author: "Jeffrey F. Beatty" },
        { title: "Financial Management: Theory and Practice", author: "Eugene F. Brigham" },
        { title: "Strategic Management", author: "Fred R. David" },
        { title: "Operations Management", author: "Jay Heizer" },
      ],
  };
  
  // Borrowed book history
  const borrowedBooks = [];
  
  // Function to display books based on selected branch
  function displayBooks() {
    const branch = document.getElementById('branch').value;
    const books = booksByBranch[branch] || [];
    updateBookList(books);
  }
  
  // Function to update the book list in the table
  function updateBookList(books) {
    const tableBody = document.getElementById('bookTableBody');
    tableBody.innerHTML = '';
  
    books.forEach((book, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button onclick="borrowBook(${index})">Borrow</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to handle borrowing a book
  function borrowBook(index) {
    const branch = document.getElementById('branch').value;
    if (branch && booksByBranch[branch][index]) {
      borrowedBooks.push(booksByBranch[branch][index]);
      alert("Book added to history!");
    } else {
      alert("Please select a branch first.");
    }
  }
  
  // Function to view borrowing history
  function viewHistory() {
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    window.location.href = "history.html";
  }
  
  // Function to search within displayed books
  function searchBook() {
    const searchTerm = document.getElementById('searchBook').value.toLowerCase();
    const branch = document.getElementById('branch').value;
    const books = booksByBranch[branch] || [];
  
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
    );
  
    updateBookList(filteredBooks);
  }
  