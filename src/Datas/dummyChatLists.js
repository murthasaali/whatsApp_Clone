const dummyData = [
  {
    id: 1,
    statusPosted: true,
    name: "John Doe",
    profilePic: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1715862612~exp=1715866212~hmac=a28bc2564b13adf842bdc8b51fa65e0438bcec08e93907841be689275422d323&w=1060",
    chatHistory:[
      { "sender": "John Doe", "message": "Hey, how are you?", "timestamp": "2:30 PM" },
      { "sender": "Me", "message": "I'm good, how about you?", "timestamp": "2:32 PM" },
      { "sender": "John Doe", "message": "Doing well, thanks! By the way, have you seen our new product line?", "timestamp": "2:35 PM" },
      { 
          "sender": "John Doe", 
          "message": "", 
          "timestamp": "2:36 PM", 
          "image": "https://images3.alphacoders.com/100/thumb-1920-1009958.jpg",
          "caption": "Check out our latest product! High-quality and affordable."
      },
      { 
          "sender": "John Doe", 
          "message": "", 
          "timestamp": "2:36 PM", 
          "image": "https://cdna.artstation.com/p/assets/images/images/007/064/664/large/triple-a-juglernauts.jpg?1503419136",
          "caption": "😘😘😘😘😘"
      },
      { "sender": "Me", "message": "Looks great! Can you tell me more about it?", "timestamp": "2:40 PM" }
  ]
  
  },
  {
    id: 2,
    statusPosted: false,
    name: "Jane Smith",
    profilePic: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?t=st=1715862648~exp=1715866248~hmac=8101608ff06fb3727b33d0f69556a05a8f91f57aa3a5b6c103a77d943e477901&w=1060",
    chatHistory: [
      { sender: "Jane Smith", message: "Let's catch up later.", timestamp: "1:45 PM" },
      { sender: "Me", message: "Sure, sounds good!", timestamp: "1:46 PM" },
      { sender: "Jane Smith", message: "Great, talk to you then.", timestamp: "1:50 PM" }
    ]
  },
  {
    id: 3,
    statusPosted: true,
    name: "Michael Johnson",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    chatHistory: [
      { sender: "Michael Johnson", message: "Got it, thanks!", timestamp: "12:00 PM" },
      { sender: "Me", message: "No problem, happy to help.", timestamp: "12:01 PM" },
      { sender: "Michael Johnson", message: "👍", timestamp: "12:02 PM" }
    ]
  },
  {
    id: 4,
    statusPosted: true,
    name: "Emily Davis",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    chatHistory: [
      { sender: "Emily Davis", message: "See you soon! 😁😁😀", timestamp: "11:15 AM" },
      { sender: "Me", message: "Looking forward to it!", timestamp: "11:17 AM" },
      { sender: "Emily Davis", message: "Same here!", timestamp: "11:18 AM" }
    ]
  },
  {
    id: 5,
    statusPosted: false,
    name: "David Brown",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    chatHistory: [
      { sender: "David Brown", message: "Can we reschedule?", timestamp: "10:05 AM" },
      { sender: "Me", message: "Sure, when would work for you?", timestamp: "10:07 AM" },
      { sender: "David Brown", message: "How about tomorrow?", timestamp: "10:10 AM" }
    ]
  }
];

export default dummyData;


