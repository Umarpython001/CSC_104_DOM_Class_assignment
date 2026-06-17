/*

Build a Library Management System using classes. Create a Book
class with properties: title, author, year, and available. Create a
Library class with methods to add a book, borrow a book (marks it
unavailable), return a book, and list all currently available books.

*/

class Book{
    constructor(title, author, year, available){

        this.title = title
        this.author = author
        this.year = year
        this.available = available ? true : false

    }


}

class Library{
    constructor(){
        this.books = []
    }

    addBook(book){
        if(book instanceof Book){
            this.books.push(book)
        }else{
            console.log("Invalid book")
        }
    }

    borrowBook(book){
        if(book instanceof Book && book.available){
            book.available = false
            console.log(`You have borrowed "${book.title}"`)
        }else{
            console.log(`Sorry, "${title}" is not available`)
        }
    }

    returnBook(book){
        if(book instanceof Book && !book.available){
            book.available = true
            console.log(`You have returned "${book.title}"`)
        }else{
            console.log(`"${title}" is already available`)
        }
    }

    listAvailableBooks(){
        if(this.books.length === 0){
            console.log("No books in the library")
            return
        }

        for (let i = 0; i < this.books.length; i++){
            let book = this.books[i] 
            if (book.available){
                console.log(`- ${book.title} by ${book.author} (${book.year})`)
            }
        } 
    }
}