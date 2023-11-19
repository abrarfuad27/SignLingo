import React, { Component } from "react";

const questions = [
  {
    id: 0,
    type: "texttoimage",
    question: "What is A in sign language?",
    answers: [
      {image: "/assets/alphabet_image/A.jpg", correct: true },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/1.jpg", correct: false },
      {image: "/assets/alphabet_image/T.jpg", correct: false },
    ]
  },

  {
    id: 1,
    type: "texttoimage",
    question: "What is B in sign language?",
    answers: [
      {image: "/assets/alphabet_image/1.jpg", correct: false },
      {image: "/assets/alphabet_image/P.jpg", correct: false },
      {image: "/assets/alphabet_image/B.jpg", correct: true },
      {image: "/assets/alphabet_image/Q.jpg", correct: false },
    ]
  },

  {
    id: 2,
    type: "texttoimage",
    question: "What is C in sign language?",
    answers: [
      {image: "/assets/alphabet_image/M.jpg", correct: false },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/1.jpg", correct: false },
      {image: "/assets/alphabet_image/C.jpg", correct: true },
    ]
  },

  {
    id: 3,
    type: "texttoimage",
    question: "What is D in sign language?",
    answers: [
      {image: "/assets/alphabet_image/B.jpg", correct: false },
      {image: "/assets/alphabet_image/D.jpg", correct: true },
      {image: "/assets/alphabet_image/Z.jpg", correct: false },
      {image: "/assets/alphabet_image/L.jpg", correct: false },
    ]
  },

  {
    id: 4,
    type: "texttoimage",
    question: "What is E in sign language?",
    answers: [
      {image: "/assets/alphabet_image/G.jpg", correct: false },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/E.jpg", correct: true },
      {image: "/assets/alphabet_image/3.jpg", correct: false },
    ]
  },

  {
    id: 5,
    type: "texttoimage",
    question: "What is F in sign language?",
    answers: [
      {image: "/assets/alphabet_image/B.jpg", correct: false },
      {image: "/assets/alphabet_image/D.jpg", correct: false },
      {image: "/assets/alphabet_image/Z.jpg", correct: false },
      {image: "/assets/alphabet_image/F.jpg", correct: true },
    ]
  },
  
  {
    id: 6,
    type: "texttoimage",
    question: "What is G in sign language?",
    answers: [
      {image: "/assets/alphabet_image/G.jpg", correct: false },
      {image: "/assets/alphabet_image/K.jpg", correct: true },
      {image: "/assets/alphabet_image/Z.jpg", correct: false },
      {image: "/assets/alphabet_image/L.jpg", correct: false },
    ]
  },

  {
    id: 7,
    type: "texttoimage",
    question: "What is H in sign language?",
    answers: [
      {image: "/assets/alphabet_image/X.jpg", correct: false },
      {image: "/assets/alphabet_image/K.jpg", correct: false },
      {image: "/assets/alphabet_image/Z.jpg", correct: false },
      {image: "/assets/alphabet_image/H.jpg", correct: true },
    ]
  },

  {
    id: 8,
    type: "texttoimage",
    question: "What is I in sign language?",
    answers: [
      {image: "/assets/alphabet_image/Y.jpg", correct: false },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/I.jpg", correct: true },
      {image: "/assets/alphabet_image/3.jpg", correct: false },
    ]
  },

  {
    id: 9,
    type: "texttoimage",
    question: "What is J in sign language?",
    answers: [
      {image: "/assets/alphabet_image/J.jpg", correct: true },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/9.jpg", correct: false },
      {image: "/assets/alphabet_image/3.jpg", correct: false },
    ]
  },

  {
    id: 10,
    type: "texttoimage",
    question: "What is K in sign language?",
    answers: [
      {image: "/assets/alphabet_image/6.jpg", correct: false },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/E.jpg", correct: false },
      {image: "/assets/alphabet_image/K.jpg", correct: true },
    ]
  },

  {
    id: 11,
    type: "texttoimage",
    question: "What is L in sign language?",
    answers: [
      {image: "/assets/alphabet_image/O.jpg", correct: false },
      {image: "/assets/alphabet_image/L.jpg", correct: true },
      {image: "/assets/alphabet_image/X.jpg", correct: false },
      {image: "/assets/alphabet_image/M.jpg", correct: false },
    ]
  },

  {
    id: 12,
    type: "texttoimage",
    question: "What is M in sign language?",
    answers: [
      {image: "/assets/alphabet_image/M.jpg", correct: false },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/1.jpg", correct: false },
      {image: "/assets/alphabet_image/C.jpg", correct: true },
    ]
  },

  {
    id: 13,
    type: "texttoimage",
    question: "What is N in sign language?",
    answers: [
      {image: "/assets/alphabet_image/R.jpg", correct: false },
      {image: "/assets/alphabet_image/F.jpg", correct: false },
      {image: "/assets/alphabet_image/P.jpg", correct: false },
      {image: "/assets/alphabet_image/N.jpg", correct: true },
    ]
  },


  {
    id: 14,
    type: "texttoimage",
    question: "What is O in sign language?",
    answers: [
      {image: "/assets/alphabet_image/X.jpg", correct: false },
      {image: "/assets/alphabet_image/E.jpg", correct: false },
      {image: "/assets/alphabet_image/O.jpg", correct: true },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
    ]
  },

  {
    id: 15,
    type: "texttoimage",
    question: "What is P in sign language?",
    answers: [
      {image: "/assets/alphabet_image/P.jpg", correct: true },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/V.jpg", correct: false },
      {image: "/assets/alphabet_image/7.jpg", correct: false },
    ]
  },

  {
    id: 16,
    type: "texttoimage",
    question: "What is Q in sign language?",
    answers: [
      {image: "/assets/alphabet_image/P.jpg", correct: false },
      {image: "/assets/alphabet_image/N.jpg", correct: false },
      {image: "/assets/alphabet_image/Q.jpg", correct: true },
      {image: "/assets/alphabet_image/9.jpg", correct: false },
    ]
  },

  {
    id: 17,
    type: "texttoimage",
    question: "What is R in sign language?",
    answers: [
      {image: "/assets/alphabet_image/U.jpg", correct: false },
      {image: "/assets/alphabet_image/Q.jpg", correct: false },
      {image: "/assets/alphabet_image/T.jpg", correct: false },
      {image: "/assets/alphabet_image/R.jpg", correct: true },
    ]
  },

  {
    id: 18,
    type: "texttoimage",
    question: "What is S in sign language?",
    answers: [
      {image: "/assets/alphabet_image/Y.jpg", correct: false },
      {image: "/assets/alphabet_image/S.jpg", correct: true },
      {image: "/assets/alphabet_image/I.jpg", correct: false },
      {image: "/assets/alphabet_image/3.jpg", correct: false },
    ]
  },

  {
    id: 19,
    type: "texttoimage",
    question: "What is T in sign language?",
    answers: [
      {image: "/assets/alphabet_image/B.jpg", correct: false },
      {image: "/assets/alphabet_image/0.jpg", correct: false },
      {image: "/assets/alphabet_image/T.jpg", correct: true },
      {image: "/assets/alphabet_image/3.jpg", correct: false },
    ]
  },

  {
    id: 20,
    type: "texttoimage",
    question: "What is U in sign language?",
    answers: [
      {image: "/assets/alphabet_image/F.jpg", correct: false },
      {image: "/assets/alphabet_image/S.jpg", correct: false },
      {image: "/assets/alphabet_image/U.jpg", correct: true },
      {image: "/assets/alphabet_image/C.jpg", correct: false },
    ]
  },

  {
    id: 21,
    type: "texttoimage",
    question: "What is V in sign language?",
    answers: [
      {image: "/assets/alphabet_image/Z.jpg", correct: false },
      {image: "/assets/alphabet_image/V.jpg", correct: true },
      {image: "/assets/alphabet_image/P.jpg", correct: false },
      {image: "/assets/alphabet_image/3.jpg", correct: false },
    ]
  },

  {
    id: 22,
    type: "texttoimage",
    question: "What is W in sign language?",
    answers: [
      {image: "/assets/alphabet_image/W.jpg", correct: true },
      {image: "/assets/alphabet_image/0.jpg", correct: false },
      {image: "/assets/alphabet_image/2.jpg", correct: false },
      {image: "/assets/alphabet_image/I.jpg", correct: false },
    ]
  },

  {
    id: 23,
    type: "texttoimage",
    question: "What is X in sign language?",
    answers: [
      {image: "/assets/alphabet_image/L.jpg", correct: false },
      {image: "/assets/alphabet_image/P.jpg", correct: false },
      {image: "/assets/alphabet_image/X.jpg", correct: true },
      {image: "/assets/alphabet_image/C.jpg", correct: false },
    ]
  },

  {
    id: 24,
    type: "texttoimage",
    question: "What is Y in sign language?",
    answers: [
      {image: "/assets/alphabet_image/U.jpg", correct: false },
      {image: "/assets/alphabet_image/Q.jpg", correct: false },
      {image: "/assets/alphabet_image/Y.jpg", correct: true },
      {image: "/assets/alphabet_image/R.jpg", correct: false },
    ]
  },

  {
    id: 25,
    type: "texttoimage",
    question: "What is Z in sign language?",
    answers: [
      {image: "/assets/alphabet_image/Z.jpg", correct: true },
      {image: "/assets/alphabet_image/H.jpg", correct: false },
      {image: "/assets/alphabet_image/9.jpg", correct: false },
      {image: "/assets/alphabet_image/C.jpg", correct: false },
    ]
  },

  {
    id: 26,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/A.jpg",
    answers: [
      {image: "A", correct: true },
      {image: "S", correct: false },
      {image: "1", correct: false },
      {image: "T", correct: false },
    ]
  },

  {
    id: 27,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/B.jpg",
    answers: [
      {image: "1", correct: false },
      {image: "P", correct: false },
      {image: "B", correct: true },
      {image: "Q", correct: false },
    ]
  },

  {
    id: 28,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/C.jpg",
    answers: [
      {image: "M", correct: false },
      {image: "S", correct: false },
      {image: "1", correct: false },
      {image: "C", correct: true },
    ]
  },

  {
    id: 29,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/D.jpg",
    answers: [
      {image: "B", correct: false },
      {image: "D", correct: true },
      {image: "Z", correct: false },
      {image: "L", correct: false },
    ]
  },

  {
    id: 30,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/E.jpg",
    answers: [
      {image: "G", correct: false },
      {image: "S", correct: false },
      {image: "E", correct: true },
      {image: "3", correct: false },
    ]
  },

  {
    id: 31,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/F.jpg",
    answers: [
      {image: "B", correct: false },
      {image: "D", correct: false },
      {image: "Z", correct: false },
      {image: "F", correct: true },
    ]
  },
  
  {
    id: 32,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/G.jpg",
    answers: [
      {image: "G", correct: false },
      {image: "K", correct: true },
      {image: "Z", correct: false },
      {image: "L", correct: false },
    ]
  },

  {
    id: 33,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/H.jpg",
    answers: [
      {image: "X", correct: false },
      {image: "K", correct: false },
      {image: "Z", correct: false },
      {image: "H", correct: true },
    ]
  },

  {
    id: 34,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/I.jpg",
    answers: [
      {image: "Y", correct: false },
      {image: "S", correct: false },
      {image: "I", correct: true },
      {image: "3", correct: false },
    ]
  },

  {
    id: 35,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/J.jpg",
    answers: [
      {image: "J", correct: true },
      {image: "S", correct: false },
      {image: "9", correct: false },
      {image: "3", correct: false },
    ]
  },

  {
    id: 36,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/K.jpg",
    answers: [
      {image: "6", correct: false },
      {image: "S", correct: false },
      {image: "E", correct: false },
      {image: "K", correct: true },
    ]
  },

  {
    id: 37,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/L.jpg",
    answers: [
      {image: "O", correct: false },
      {image: "L", correct: true },
      {image: "X", correct: false },
      {image: "M", correct: false },
    ]
  },

  {
    id: 38,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/M.jpg",
    answers: [
      {image: "M", correct: false },
      {image: "S", correct: false },
      {image: "1", correct: false },
      {image: "C", correct: true },
    ]
  },

  {
    id: 39,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/N.jpg",
    answers: [
      {image: "R", correct: false },
      {image: "F", correct: false },
      {image: "P", correct: false },
      {image: "N", correct: true },
    ]
  },


  {
    id: 40,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/O.jpg",
    answers: [
      {image: "X", correct: false },
      {image: "E", correct: false },
      {image: "O", correct: true },
      {image: "S", correct: false },
    ]
  },

  {
    id: 41,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/P.jpg",
    answers: [
      {image: "P", correct: true },
      {image: "S", correct: false },
      {image: "V", correct: false },
      {image: "7", correct: false },
    ]
  },

  {
    id: 42,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/Q.jpg",
    answers: [
      {image: "P", correct: false },
      {image: "N", correct: false },
      {image: "Q", correct: true },
      {image: "9", correct: false },
    ]
  },

  {
    id: 43,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/R.jpg",
    answers: [
      {image: "U", correct: false },
      {image: "Q", correct: false },
      {image: "T", correct: false },
      {image: "R", correct: true },
    ]
  },

  {
    id: 44,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/S.jpg",
    answers: [
      {image: "Y", correct: false },
      {image: "S", correct: true },
      {image: "I", correct: false },
      {image: "3", correct: false },
    ]
  },

  {
    id: 45,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/T.jpg",
    answers: [
      {image: "B", correct: false },
      {image: "0", correct: false },
      {image: "T", correct: true },
      {image: "3", correct: false },
    ]
  },

  {
    id: 46,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/U.jpg",
    answers: [
      {image: "F", correct: false },
      {image: "S", correct: false },
      {image: "U", correct: true },
      {image: "C", correct: false },
    ]
  },

  {
    id: 47,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/V.jpg",
    answers: [
      {image: "Z", correct: false },
      {image: "V", correct: true },
      {image: "P", correct: false },
      {image: "3", correct: false },
    ]
  },

  {
    id: 48,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/W.jpg",
    answers: [
      {image: "W", correct: true },
      {image: "0", correct: false },
      {image: "2", correct: false },
      {image: "I", correct: false },
    ]
  },

  {
    id: 49,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/X.jpg",
    answers: [
      {image: "L", correct: false },
      {image: "P", correct: false },
      {image: "X", correct: true },
      {image: "C", correct: false },
    ]
  },

  {
    id: 50,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/Y.jpg",
    answers: [
      {image: "U", correct: false },
      {image: "Q", correct: false },
      {image: "Y", correct: true },
      {image: "R", correct: false },
    ]
  },

  {
    id: 51,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/Z.jpg",
    answers: [
      {image: "Z", correct: true },
      {image: "H", correct: false },
      {image: "9", correct: false },
      {image: "C", correct: false },
    ]
  }

]
export default function Quiz2() {
  return <>Quiz2</>;
}
