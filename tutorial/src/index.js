import React from 'react'
import ReactDom from 'react-dom';

//CSS
import './index.css'


// Plain React
// function Greeting() {
//   return <h4> Hello</h4>;
// }


const books = [
  {
    id:1,
    Author: "Will Smith",
    title :  "nice book",
    img   : "https://m.media-amazon.com/images/I/911cmGSgcvL._AC_UY218_.jpg",
  
  },
  
  {
    id:2,
    Author: "Jeff Kiney",
    title :  "Big Shot Diary of a Wimpy Kid Book 16",
    img   : "https://m.media-amazon.com/images/I/81z6xJd6mrS._AC_UY218_.jpg",
  
  },
  {
    id:3,
    Author: "Jeff Kiney",
    title :  "Atomic Habits:",
    img   : "https://m.media-amazon.com/images/I/71rDThWVwES._AC_UY218_.jpg",
  
  },
];




//JSX
const BookList = () => { 
  return (
    <section className='booklist'>
      {books.map((book)=> {
        return (
          // <Book key={book.id} book={book}></Book>
          <Book key={book.id} {...book}></Book>

        );
      })}
    </section>
  );
}



// const Book = ({img,title,Author,children}) => {
const Book = (props) => {
// attributes, eventHanlder
//onClick, onMouseOver
const {img,title,Author} = props;
const clickHandler = () => {
  alert('Hello World');
};
const complexExample = (Author) => {
  console.log(Author);
}
  return (
    <article className='book'>
    <img src={img} alt="" />
    <h1 onClick = {() => alert('Inline Event')}>{title}</h1>
    <h4>{Author}</h4>
    <button type='button' onClick={clickHandler}>Refernce Example</button>
    <button type="button" onClick={()=> complexExample(Author)} >More comples example</button>
    {/* {children} */}
  </article>
  );
};






ReactDom.render(<BookList />, document.getElementById('root'));


