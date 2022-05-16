const { TeamMember } = require("../backend/model");

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  // create table
  await TeamMember.sync({ force: true });
  // insert data
  await Promise.all([
    TeamMember.create({
      firstName: "Michael",
      lastName: "Scott",
      title: "Regional Manager",
      photoUrl:
        "http://economicsoftheoffice.com/static/images/people/Michael.png",
      story:
        "I was born in a hospital. My mom was a doctor, my dad was an architect, and my older brother was an engineer. I was always good at what I do, and I never looked back. I got into tech when I was 17, and I still do today.",
      favoriteColor: "#3466F2",
    }),
    TeamMember.create({
      firstName: "Dwight",
      lastName: "Schrute",
      title: "Assistant to the Regional Manager",
      photoUrl:
        "http://economicsoftheoffice.com/static/images/people/Dwight.png",
      story:
        "My name is Dwight Schrute and I am an assistant to the regional manager. I am a very popular guy in the office, and I am always up for a good joke. I love to play the foosball, and I have a pet pug named Scooter.",
      favoriteColor: "#3466F2",
    }),
    TeamMember.create({
      firstName: "Jim",
      lastName: "Halpert",
      title: "Assistant to the Regional Manager",
      photoUrl: "http://economicsoftheoffice.com/static/images/people/Jim.png",
      story:
        "My name is Jim Halpert and I am an assistant to the regional manager. I am a very popular guy in the office, and I am always up for a good joke. I love to play the foosball, and I have a pet pug named Scooter.",
      favoriteColor: "#3466F2",
    }),
    TeamMember.create({
      firstName: "Pam",
      lastName: "Beesly",
      title: "Receptionist",
      photoUrl: "http://economicsoftheoffice.com/static/images/people/Pam.png",
      story:
        "My name is Pam Beesly and I am a receptionist. I am a very popular guy in the office, and I am always up for a good joke. I love to play the foosball, and I have a pet pug named Scooter.",
      favoriteColor: "#3466F2",
    }),
  ]);
}
