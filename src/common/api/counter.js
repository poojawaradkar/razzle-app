const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const fetchCounter = () => {
  // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
  const randomNum = getRandomInt(1, 100);
  // return new Promise(setTimeout(() => (randomNum), 500));
  return new Promise(resolve => {
    setTimeout(() => resolve(randomNum), 500);
  });

  // In the case of a real world API call, you'll normally run into a Promise like this:
  // API.getUser().then(user => callback(user))
};

export default fetchCounter;
