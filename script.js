// Store user answers in an array
let answers = [];

// All the questions and options
const questions = [
    {
        question: "What’s your ideal romantic date?",
        options: [
            "A candlelit dinner on the moon",
            "Netflix and chill with endless snacks",
            "A spontaneous road trip to somewhere random",
            "A scavenger hunt around the city with clues that lead to cake"
        ]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: [
            "The more PDA, the better!",
            "I like a little affection in private… and a lot in private!",
            "Keep it cute, but not in front of the whole world.",
            "I’d rather give my partner a high-five and call it a day."
        ]
    },
    {
        question: "If I surprised you with a bouquet of flowers, how would you react?",
        options: [
            "Cry happy tears and start planning our wedding.",
            "Say 'Aww, thanks!' but secretly think, 'What did you do wrong?'",
            "Tell you they’re beautiful but wonder how long they’ll last.",
            "Run to Google to check if they’re allergic to flowers."
        ]
    },
    {
        question: "When it comes to saving money, what’s your strategy?",
        options: [
            "I hoard it like a squirrel with acorns.",
            "I save a little, then spend it all on impulse buys.",
            "I put it in a jar and pretend it doesn’t exist until I need it.",
            "I use a secret savings account called 'The I Don’t Know What I’m Doing Fund.'"
        ]
    },
    {
        question: "How would you react if someone asks you to split the bill?",
        options: [
            "I’ve got the calculator out, let’s get this split exactly right.",
            "“Oh, I thought you were treating me!” looks around nervously",
            "I’ll pretend I didn’t hear it and just smile awkwardly.",
            "“Sure, but only if you want to get me a second drink afterward.”"
        ]
    },
    {
        question: "How do you feel about budgeting?",
        options: [
            "My budget is called 'whatever I feel like doing today.'",
            "I’m working on it… one spontaneous purchase at a time.",
            "I’m trying to be responsible, but it’s hard to resist sale signs.",
            "Budgets? I thought they were optional."
        ]
    },
    {
        question: "What’s your ideal shopping strategy?",
        options: [
            "One item at a time. Slowly, but surely.",
            "Rush in, grab everything, and then reconsider later.",
            "“I’ll buy it, but only if it's 80% off.”",
            "Let me have the entire store. Just let me look."
        ]
    },
    {
        question: "Where’s your dream honeymoon destination?",
        options: [
            "Maldives – just us and a tiny hut over the water.",
            "Paris – I’ll eat croissants and wear a beret all day.",
            "Anywhere with Wi-Fi so we can still binge-watch shows.",
            "A castle in Scotland with a pet dragon."
        ]
    },
    {
        question: "If we went on a honeymoon, what would be the first thing you’d do?",
        options: [
            "Build a sandcastle and pretend we’re royalty.",
            "Find the best local food and eat it until I’m full.",
            "Take a nap because I need vacation from life.",
            "Take an awkward selfie with a local wildlife creature."
        ]
    },
    {
        question: "How would you describe your honeymoon vibe?",
        options: [
            "Adventure and exploring hidden gems.",
            "Chill and relax by the pool with endless drinks.",
            "Trying new things, like underwater basket weaving or cooking classes.",
            "A series of spontaneous dance-offs on the beach."
        ]
    },
    {
        question: "What’s your go-to method for dealing with stress?",
        options: [
            "Deep breathing exercises while eating pizza.",
            "Call a friend to complain for an hour.",
            "Do a yoga pose I’m definitely not good at and hope for the best.",
            "Take a nap and hope everything magically resolves itself."
        ]
    },
    {
        question: "How often do you clean your house?",
        options: [
            "Only when I’m expecting guests.",
            "Every week, but mostly just rearranging the mess.",
            "I clean... in my mind. Does that count?",
            "What’s cleaning? I prefer organized chaos."
        ]
    },
    {
        question: "How do you usually spend a lazy day at home?",
        options: [
            "Netflix, snacks, and ignoring any responsibilities.",
            "Lying in bed, making 'life plans' that never happen.",
            "Cleaning like a tornado hit the place.",
            "Just sitting around in pajamas until I have to be productive."
        ]
    },
    {
        question: "How do you feel about online shopping?",
        options: [
            "Add to cart, buy, repeat. No regrets.",
            "I put 50 things in my cart, then abandon it all.",
            "One item, one month, slowly but surely.",
            "I check my order tracking like it's the stock market."
        ]
    },
    {
        question: "What’s the first thing you check in a store?",
        options: [
            "The sale section, obviously.",
            "Shoes. Always shoes.",
            "The snack aisle. Because, priorities.",
            "The dressing room to see how much I really need to spend."
        ]
    },
    {
        question: "How would you react if you saw someone wearing the same outfit as you?",
        options: [
            "We’re twins! Let’s take a selfie.",
            "I’d hide in a corner and pray no one notices.",
            "Challenge them to a fashion showdown.",
            "I’d congratulate them on their excellent taste."
        ]
    },
    {
        question: "How do you describe your style?",
        options: [
            "Casual, comfy, and 100% unbothered.",
            "Always trendy—who’s got time for boring?",
            "I like a mix of 'I woke up like this' and 'I’m a fashionista.'",
            "Just ask my closet—it's a mysterious wonderland of 'what was I thinking?'"
        ]
    },
    {
        question: "What’s your opinion on accessories?",
        options: [
            "They make or break an outfit. All about the statement necklace.",
            "I like them, but only if they don’t distract from my coffee.",
            "Accessories? I’m just here for the shoes.",
            "What are accessories? I’ve only heard of clothes."
        ]
    },
    {
        question: "How do you feel about wearing heels?",
        options: [
            "Bring on the pain! Fashion is pain, right?",
            "I wear them only when necessary—mostly to reach the top shelf.",
            "Comfort > Style. I’ll stick with flats.",
            "Heels? I prefer shoes with wheels."
        ]
    },
    {
        question: "How do you usually react in stressful situations?",
        options: [
            "Stay calm and think logically",
            "Get anxious but try to handle it",
            "Cry or express my emotions",
            "Push through without showing it"
        ]
    },
    {
        question: "How do you usually handle conflict in relationships?",
        options: [
            "I try to talk things through calmly",
            "I need some time to cool off before I talk",
            "I express my feelings openly and directly",
            "I avoid confrontation and hope it resolves itself"
        ]
    },
    {
        question: "Which of these activities sounds the most fun to you?",
        options: [
            "Reading a good book",
            "Going on an adventure outdoors",
            "Trying something new or challenging",
            "Spending time with loved ones"
        ]
    },
    {
        question: "What would you say is your biggest strength?",
        options: [
            "Empathy and understanding",
            "Creativity and problem-solving",
            "Confidence and leadership",
            "Patience and perseverance"
        ]
    },
    {
        question: "Will you marry me??",
        options: [
            "I don't know!!",
            "No, I have better taste.",
            "Marry you? I won't even date you.",
            "Yessssss!! I LOVE YOU !!!"
        ]
    }
];

// Current question index
let currentQuestion = 0;

// Load the question and options dynamically
function loadQuestion(questionIndex) {
    if (questionIndex < questions.length) {
        const question = questions[questionIndex];
        document.getElementById("question").textContent = question.question;
        const options = document.querySelectorAll(".option");

        // Randomize colors on each question page
        document.body.style.backgroundColor = getRandomColor();

        question.options.forEach((option, index) => {
            options[index].textContent = option;
            options[index].setAttribute("data-next", questionIndex + 1);
            options[index].classList.remove('hidden');
        });

        // Last question special handling
        if (questionIndex === questions.length - 1) {
            const lastOption = options[3];
            lastOption.setAttribute("data-next", "end");
        }
    }
}

// Random color generator function
function getRandomColor() {
    const colors = ['#ff79c6', '#ffccff', '#ff4f9e', '#ff66b3', '#f9d6e3'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Track answers and progress through questions
document.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", (e) => {
        const selectedOption = e.target.innerText;
        answers.push(selectedOption);

        const nextQuestionId = e.target.getAttribute("data-next");
        if (nextQuestionId === "end") {
            showThankYouPage();
        } else {
            loadQuestion(parseInt(nextQuestionId));
        }
    });
});

// Show Thank You Page
function showThankYouPage() {
    document.getElementById("question-section").classList.add("hidden");
    document.getElementById("thank-you-page").classList.remove("hidden");
    animateThankYouMessage();
}

// Animate the Thank You Message
function animateThankYouMessage() {
    const message = document.getElementById('thank-you-message');
    message.style.opacity = 1;
}

// Initialize the welcome page
document.getElementById("start-button").addEventListener("click", () => {
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("question-section").classList.remove("hidden");
    loadQuestion(currentQuestion);
});

// Restart the quiz
document.getElementById("restart-button").addEventListener("click", () => {
    answers = [];
    currentQuestion = 0;
    document.getElementById("thank-you-page").classList.add("hidden");
    document.getElementById("welcome-page").classList.remove("hidden");
});
// Initialize EmailJS
emailjs.init('your_user_id'); // Replace 'your_user_id' with your EmailJS user ID

function sendEmail() {
    const data = {
        answers: answers.join(', '), // Join answers as a string
        subject: 'Quiz Responses',  // The subject of the email
        from_name: 'Your Quiz',     // Your name or quiz name
        to_email: 'koushalb19@gmail.com' // Your email where responses will be sent
    };

    // Send the email through EmailJS
    emailjs.send('your_service_id', 'your_template_id', data)
        .then(function(response) {
            console.log('Email sent successfully:', response);
        }, function(error) {
            console.log('Failed to send email:', error);
        });
}

// Call this function when the quiz ends
function showThankYouPage() {
    document.getElementById("question-section").classList.add("hidden");
    document.getElementById("thank-you-page").classList.remove("hidden");

    // Send email with quiz responses
    sendEmail();

    animateThankYouMessage();
}

