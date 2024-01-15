
const customQuestions = [
    {
      question: "What does the road sign H mean?",
      options: ["Hospital ahead", "Highway ahead", "Crossroads", "Intersection ahead"],
      correctAnswer: "Hospital ahead",
      category: "Road signs",
    },

    {
      question: "What is the correct sequence to move off in a motor vehicle?",
      options: ["Doors, Seat, Seatbelt, Mirrors, Ignition, Move Off, Checks",
               "Doors, Seatbelt, Seat, Mirrors, Ignition, Checks, Move off",
                "Doors, Seat, Seatbelt, Mirrors, Ignition, Checks, Move off",
                 "Doors, Seat, Seatbelt, Ignition, Mirrors, Checks, Move off"],
      correctAnswer: "Doors, Seat, Seatbelt, Mirrors, Ignition, Checks, Move off",
      category: "Starting a car",
    },

    {
      question: "What does an unbroken white line indicate?",
      options: ["You may switch lanes if it is safe to do so",
               "You may not overtake",
                "You may cross lanes and park ",
                "The road is poorly maintained and needs caution"],
      correctAnswer: "You may not overtake",
      category: "Road Markings",
    },

    {
      question: "Which of the following persons is not authorized to stop traffic?",
      options: ["School warden",
               "Policeman or warden",
                "Herdsman with a red flag ",
                "A mother in the pedestrian crossing"],
      correctAnswer: "A mother in the pedestrian crossing",
      category: "Road Safety",
    },

    {
      question: "How many L plates are required for a learner driver?",
      options: ["3",
               "1",
                "2",
                "4"],
      correctAnswer: "2",
      category: "Learning to Drive",
    },

    {
      question: "What do the colors of the kerb indicate? Yellow, White, Yellow and Black stripes",
      options: ["No parking, No parking or stopping, Parking permitted",
               "No parking, Parking permitted, No parking or stopping",
                "Parking permitted, No parking, No parking or stopping",
                "Parking permitted, No parking or stopping, No parking"],
      correctAnswer: "No parking, Parking permitted, No parking or stopping",
      category: "Road Markings",
    },

    {
      question: "The safest way to drive on a steep downward hill is in which gear?",
      options: ["Reverse",
               "Reverse or Low",
                "Drive",
                "Neutral"],
      correctAnswer: "Reverse or Low",
      category: "Road Safety",
    },

    {
      question: "When must you dip your lights?",
      options: ["In brightly lit areas, approaching an oncoming vehicle",
               "Where rain is falling incessantly",
                "Where the battery may drain quickly",
                "Where the road narrows"],
      correctAnswer: "In brightly lit areas, approaching an oncoming vehicle",
      category: "Driving in special situations",
    },

    {
      question: "What is the speed limit for a learner driver?",
      options: ["There is no speed limit",
               "50 km/h",
                "30 km/h",
                "40 km/h"],
      correctAnswer: "40 km/h",
      category: "Learning to Drive",
    },

    {
      question: "Which of the following is an illegal action?",
      options: ["Yield right of way when a pedestrian enters crossing",
               "Overtaking in an express lane",
                "Parking within 12m (40 ft) of an intersection",
                "Parking on a one way street where the curb is white"],
      correctAnswer: "Parking within 12m (40 ft) of an intersection",
      category: "Learning to Drive",
    },
    
    {
      question: "What is the purpose of white diagonal lines on the road?",
      options: ["To signal vehicles to slow down",
               "To allow vehicles to cross lanes and follow the lines",
                "To create a third/additional lane in the road",
                "To filter and protect oncoming traffic"],
      correctAnswer: "To filter and protect oncoming traffic",
      category: "Road Markings",
    },

    {
      question: "What is the correct sequence to park a car?",
      options: ["Signal and adjust speed, apply brakes, switch to Park, apply hand brake",
               "Signal and adjust speed, switch to Park, apply brakes, apply park brake",
                "Signal and adjust speed, apply brakes, apply park brake, switch to Park",
                "Signal and adjust speed, switch to Park, apply park brake, apply brakes"],
      correctAnswer: "Signal and adjust speed, apply brakes, switch to Park, apply hand brake",
      category: "Learning to Drive",
    },

    {
      question: "What is the first thing to do on approaching a roundabout?",
      options: ["Speed up",
               "Slow down",
                "Signal appropriately",
                "Honk at vehicles ahead to move out of the way"],
      correctAnswer: "Slow down",
      category: "Driving in special situations",
    },

    {
      question: "A good driver will",
      options: ["check mirrors only when they're foggy or dirty",
               "disobey policemen",
                "Never overtake at a corner or bend",
                "drive beyond the speed limit indicated by road signs"],
      correctAnswer: "Never overtake at a corner or bend",
      category: "Driving Morals",
    },

    {
      question: "A driver wishes to turn right at an intersection. The stoplight shows Red and Amber, with a green filter light. He will",
      options: ["Do as he pleases",
               "Wait on the light to turn green",
                "Turn right and disregard other signs",
                "Turn right when exit is clear and disregard other signs"],
      correctAnswer: "Turn right when exit is clear and disregard other signs",
      category: "Road safety",
    },

    {
      question: "Who has the right of way on a hill?",
      options: ["The vehicle going downhill, but the smaller up or down",
               "No one",
                "The vehicle going downhill, but heavier has right of way up or down",
                "The vehicle going uphill, but heavier up or down"],
      correctAnswer: "The vehicle going downhill, but heavier has right of way up or down",
      category: "Driving in special situations",
    },

    {
      question: "Parking in between two parked cars is best done using ?",
      options: ["Steering sharply in between the cars and parking perpendicular",
               "Parallel parking",
                "Reverse parking",
                "Tailgating"],
      correctAnswer: "Parallel parking",
      category: "Learning to Drive",
    },

    {
      question: "A slip road is used to?",
      options: ["Change roads safely without obstructing traffic",
               "Take emergency exits only",
                "Take shortcuts around the intersection",
                "Stop police vehicles from chasing you"],
      correctAnswer: "Change roads safely without obstructing traffic",
      category: "Road safety",
    },

    {
      question: "What is defensive driving best made up of?",
      options: ["Observing, Ignoring, Proceeding",
               "Planning, Observing, Anticipating, Honking",
                "Planning, Observing, Waiting, Executing",
                "Planning, Observing, Anticipating, Staying in control"],
      correctAnswer: "Planning, Observing, Anticipating, Staying in control",
      category: "Learning to Drive",
    },

    {
      question: "Where should you position your vehicle to turn right?",
      options: ["By the center line or just left of the centre",
               "On the right side of the lane",
                "In between the left and right lane",
                "To the right of the center line"],
      correctAnswer: "By the center line or just left of the centre",
      category: "Learning to Drive",
    },

  ];
  
  export default customQuestions;