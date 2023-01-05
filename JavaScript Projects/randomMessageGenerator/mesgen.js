    const wordList = {
    a: ["apple", "army", "animal", "argument", "armchair"],
    b: ["boy", "book", "bed", "blue", "banana"],
    c: ["cat", "car", "coat", "cup", "cake"],
    d: ["dog", "door", "desk", "diamond", "doctor"],
    e: ["elephant", "egg", "ear", "envelope", "eraser"],
    f: ["fish", "flamingo", "flower", "fork", "fire"],
    g: ["giraffe", "game", "guitar", "girl", "glass"],
    h: ["hat", "horse", "house", "heart", "helicopter"],
    i: ["igloo", "ice", "iron", "ink", "insect"],
    j: ["jellyfish", "juice", "joker", "jam", "jump"],
    k: ["king", "kangaroo", "key", "kite", "kitchen"],
    l: ["lion", "lamp", "leg", "lemon", "letter"],
    m: ["mouse", "moon", "mountain", "monkey", "milk"],
    n: ["nest", "net", "nail", "nose", "notebook"],
    o: ["owl", "orange", "octopus", "oven", "onion"],
    p: ["penguin", "pencil", "pizza", "puppy", "palace"],
    q: ["queen", "quarter", "question", "quill", "quilt"],
    r: ["rabbit", "rainbow", "radio", "ring", "robot"],
    s: ["snake", "sock", "sun", "square", "star"],
    t: ["tree", "turtle", "tooth", "tomato", "train"],
    u: ["umbrella", "unicorn", "underwear", "uncle", "university"],
    v: ["volcano", "vase", "village", "velvet", "vacuum"],
    w: ["whale", "watch", "water", "web", "window"],
    x: ["x-ray", "xylophone", "fox", "box", "ox"],
    y: ["yogurt", "yoyo", "yarn", "yacht", "yawn"],
    z: ["zebra", "zoo", "zucchini", "zipper", "zen"]
    };
    

   

const generateMessage = (word = 'hello') => {
    let letters = word.toLowerCase().split("")
    let randomNumber = () => Math.floor(Math.random() * 5)
    let words = []
    for (let letter in letters) {
        words.push(wordList[letters[letter]][randomNumber()])
    }
    let message = `You're message is ${words.join(' ')}!`
    console.log(message)
}
    
generateMessage();
