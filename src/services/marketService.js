const categories = [
    { name: 'Space'},
    { name: 'Dogs'},
    { name: 'Video Games'},
    { name: 'Food'},
    { name: 'Plants'},
];

class marketService {

  loadCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categories);
      }, 2000);
    });
  }
}

export default new marketService();