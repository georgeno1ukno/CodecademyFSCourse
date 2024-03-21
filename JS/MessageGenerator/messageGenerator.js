

const randomPhrases = [
    "Your aura is in alignment with the cosmos today.",
    "The stars suggest new beginnings are on the horizon.",
    "A journey of self-discovery awaits you.",
    "Embrace the unknown, for it holds great potential.",
    "Your intuition will guide you towards enlightenment.",
    "Beware of negative energies, they may disrupt your harmony.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why was the math book sad? Because it had too many problems.",
    "What do you call a fish wearing a crown? A kingfish!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How do you organize a space party? You planet!"
  ];

const emojiArt=['(^_^)', '(^^ゞ','(^_^;)','(-_-;)','(~_~;)','(・。・;)','(・_・;)','(・・;)','^^','^_^;','(#^.^#)','(^ ^;)'];

  const messageGeneratorFunction = (namePlayer) =>{

    const randomNumber = Math.floor(Math.random()*randomPhrases.length);
    const emojiArt1 = Math.floor(Math.random()*emojiArt.length);
    const emojiArt2 = Math.floor(Math.random()*emojiArt.length);

    return `Hi ${namePlayer} ${emojiArt[emojiArt1]}, You're in Message Generator Codecademy; ${randomPhrases[randomNumber]}. ${emojiArt[emojiArt2]}!!`;
  };

  console.log(messageGeneratorFunction('Jorge'));



  