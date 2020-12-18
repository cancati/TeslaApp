import React from 'react';

interface QuestionService {
  todo?: string;
  id?: string;
}

const QuestionService = {
  fetchNewQuestions: async () => {
    const list = await fetch('https://api.collectapi.com/book/newBook', {
      headers: {
        'content-type': 'application/json',
        authorization: 'apikey 4e74xsUhvHNEOl28kjYRpM:4B6PtaCaZXrX8llHmhgcfw',
      },
    });
    return list.json();
  },
};

export default QuestionService;
