import manAtBath from "../images/caillebotte_manAtHisBath.jpg";
import modernMagdalen from "../images/chase_aModernMagdalen.jpg";
import recliningNude from "../images/kirchner_recliningNude.jpg";
import twoNudeLovers from "../images/kokoschka_twoNudesLovers.jpg";
import paxtonNude from "../images/paxton_nude.jpg";
import threeGraces from "../images/petel_theThreeGraces.jpg";

export const questions = {
  americas: {
    blockTitle: "The Americas",
    questions: [
      {
        id: "americas_1",
        question:
          "In this iconic harbor scene by John Singleton Copley, how many people are in the boat?",
        answer: "9",
        points: 2,
        hint:
          "Although the painting pre-dates Jaws by a couple of centuries, it captured the public imagination in much the same way"
      },
      {
        id: "americas_2",
        question:
          "Placed near John Singer Sargent’s potentially most famous work is a painting by Obama’s portraitist. What is the last name of the artist whose work inspired Obama’s portraitist for this painting?",
        answer: "dobson",
        points: 3,
        hint:
          "You are looking for a stunning painting with a red flowery background"
      },
      {
        id: "americas_3",
        question:
          "Samuel McIntire was commissioned to produce a gilded statue of an eagle for a house in Salem, Massachusetts. What is the house number of that house?",
        answer: "70",
        points: 3,
        hint:
          "It's a rather large eagle, in a corner of one of the main galleries. Tbh, I'm kind of surprised you needed a hint for this one..."
      },
      {
        id: "americas_4",
        question:
          "What kind of slip glaze does the pitcher possibly depicting Toussaint L'Ouverture use?",
        answer: "albany",
        points: 8,
        hint:
          "This piece is not in a proper gallery because the MFA is unsure of whether the piece is a celebration or caricaturization of L'Ouverture"
      },
      {
        id: "americas_5",
        question:
          "What is the last name of the American artist who designed a statue of a blind flower seller from a massively popular novel of his time?",
        answer: "rogers",
        points: 4,
        hint:
          "This statue doesn't have a description on the placard - you almost need to infer who she is. (Side note: it's totally worth it to ask the museum staff about this piece, the story is fascinating)"
      },

      {
        id: "americas_6",
        question:
          "One room in the MFA contains a depiction of itself. What is the last name of the artist who produced that work?",
        answer: "prosperi",
        points: 7,
        hint:
          "You can see the statue referenced in the question above in this painting"
      }
    ]
  },
  womenTakeTheFloor: {
    blockTitle: "Women Take the Floor",
    questions: [
      {
        id: "womenTakeTheFloor_1",
        question:
          'What sacred art form does Lalla Essaydi make use of in her photograph in the "Women Take the Floor" exhibit?',
        answer: "calligraphy",
        points: 1,
        hint: "Art Form-ception!"
      },
      {
        id: "womenTakeTheFloor_2",
        question:
          "What household tool is CeCe McDonald carrying in her 2016 portrait by Andrea Bowers?",
        answer: "hammer",
        points: 5,
        hint: "Peter, Paul, and Mary would use it in the morning"
      },
      {
        id: "womenTakeTheFloor_3",
        question:
          'What color shirt is the rear sister wearing in Frida Kahlo\'s "Dos Mujeres"?',
        answer: "yellow",
        points: 3,
        hint: "No hints about Frida Kahlo"
      },
      {
        id: "womenTakeTheFloor_4",
        question: 'What word is at the top of Lorna Simpson\'s work "She"?',
        answer: "female",
        points: 2,
        hint: "You're looking for a piece with 4 suits"
      }
    ]
  },
  monet: {
    blockTitle: "Monet",
    questions: [
      {
        id: "monet_1",
        question: "What is the audio tour ID number for Monet’s Water Lilies?",
        answer: "853",
        points: 1,
        hint: "No hints in the Monet room"
      },
      {
        id: "monet_2",
        question:
          "Monet spent the winter of 1892 studying and painting the facade of what kind of building in Rouen?",
        answer: "cathedral",
        points: 2,
        hint: "No hints in the Monet room"
      },
      {
        id: "monet_3",
        question:
          "A woman embroiders while a child reads nearby. What kind of animal is the toy?",
        answer: "horse",
        points: 2,
        hint: "No hints in the Monet room"
      },
      {
        id: "monet_4",
        question:
          "A humanoid shape walks through a meadow with red and purple flowers. What kind of tree occupies this meadow?",
        answer: "poplar",
        points: 2,
        hint: "No hints in the Monet room"
      }
    ]
  },
  findThatBooty: {
    blockTitle: "Find That Booty",
    questions: [
      {
        id: "findThatBooty_1",
        image: manAtBath,
        alt: "a cropped painting of a butt",
        question:
          "The owner of this booty is drying his back while facing away from the painter. What do you see at the foot of the chair?",
        answer: "boots",
        points: 3,
        hint:
          "Ask your engineer friends for the highest possible unsigned integer that can be expressed in one byte. Then check that gallery."
      },
      {
        id: "findThatBooty_2",
        image: paxtonNude,
        alt: "a cropped painting of a woman's butt",
        question:
          "What name is written in the upper right corner of this booty's painting?",
        answer: "paxton",
        points: 3,
        hint: "You should check out gallery CCXXIII"
      },
      {
        id: "findThatBooty_3",
        image: modernMagdalen,
        alt: "a cropped painting of a woman's butt",
        question:
          "The title of this work compares the owner of this booty to a famous biblical figure. What word in the title creates this connection?",
        answer: "magdalen",
        points: 2,
        hint: "Ask your engineer friends where to find Gallery b11100100"
      },
      {
        id: "findThatBooty_4",
        image: recliningNude,
        alt:
          "a cropped painting of a person's butt, done in the expressionist style",
        question:
          "The owner of this booty was posing for a German Expressionist artist who was a member of The Bridge (Die Brücke). What city was he based in?",
        answer: "dresden",
        points: 3,
        hint:
          "You should look in gallery 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17"
      },
      {
        id: "findThatBooty_5",
        image: twoNudeLovers,
        alt: "a cropped painting of a highly abstract butt",
        question:
          "The owner of this booty had an affair with the widow (also depicted) of what famous composer? (Composer's last name only)",
        answer: "mahler",
        points: 3,
        hint: "Check out gallery 1! + 2! + 3! + 4! + 5!"
      },
      {
        id: "findThatBooty_6",
        image: threeGraces,
        alt: "a cropped picture of the butt on a sculpture",
        question:
          "This gilded bronze statue has only one visible booty, although three nude figures are depicted. What is the last name of the sculptor?",
        answer: "petel",
        points: 3,
        hint: 'Check the gallery of Mister Rogers\' "I love you"'
      }
    ]
  },
  contemporaryArt: {
    blockTitle: "Contemporary Art",
    questions: [
      {
        id: "contemporaryArt_1",
        question:
          "What is the third crossed out word in the MFA Contemporary Art neon sign?",
        answer: "eat",
        points: 1,
        hint:
          "Ironically, the piece is not far from where you may do the very thing it suggests you DON'T do..."
      },
      {
        id: "contemporaryArt_2",
        question:
          "Which artist uses styrofoam cups to engage with the architecture of the MFA? (Last name only)",
        answer: "donovan",
        points: 2,
        hint: "I suggest looking up from your phone to find this piece..."
      },
      {
        id: "contemporaryArt_3",
        question:
          "What is the title of the painting created by an artist whose surname sounds similar to the monster who lives in the Chamber of Secrets?",
        answer: "lazarus",
        points: 5,
        hint: "The monster is a basilisk, and the gallery is 261"
      },
      {
        id: "contemporaryArt_4",
        question:
          "What bird is suggested in the minimalist sculpture whose name evokes a barren, frozen landscape?",
        answer: "falcon",
        points: 3,
        hint: "Gallery 260"
      }
    ]
  },
  nubia: {
    blockTitle: "Ancient Nubia Now",
    questions: [
      {
        id: "nubia_1",
        question:
          "What is the last name of the archaeologist who was far ahead of his time in regard to keeping meticulous records and photographing the excavation process, but whose prejudices led him to misinterpret his Nubian finds?",
        answer: "reisner",
        points: 3,
        hint:
          "Check the large exhibition description texts, not a particular piece of art"
      },
      {
        id: "nubia_2",
        question:
          "What material is the blue lion in the Nubia exhibit made of?",
        answer: "faience",
        points: 2,
        hint:
          "Many of the other blue pieces of art are made from the same material"
      },
      {
        id: "nubia_3",
        question:
          "The statue of this Lady originally stood in either the family tomb at Asyut or in a sanctuary in Southern Egypt, but was later transported to the tomb of Kerma's last ruler.",
        answer: "sennuwy",
        points: 6,
        hint: "This large stone statue looks strikingly Egyptian"
      },
      {
        id: "nubia_4",
        question:
          "The statue of this Nubian king, who was a prolific builder at Gebel Barkal, is missing a large chunk. What body part is missing?",
        answer: "shoulder",
        points: 2,
        hint: "You're looking for the statue of King Senkamanisken"
      }
    ]
  },
  bestOf: {
    blockTitle: "MFA Greatest Hits",
    questions: [
      {
        id: "bestOf_1",
        question:
          "Around what year was the MFA's most famous sculpture of Guanyin, the Bodhisattva of Compassion, made?",
        answer: "1200",
        points: 2,
        hint: "I'm on the MFA map!"
      },
      {
        id: "bestOf_2",
        question:
          "The bowl which is a declaration of political defiance would have been used for what kind of alcohol?",
        answer: "rum",
        points: 5,
        hint:
          "This piece by Paul Revere is one of the prize possessions of the museum, but the answer is not on the placard"
      },
      {
        id: "bestOf_3",
        question: "How many pieces of glassware are in the McElheny display?",
        answer: "48",
        points: 2,
        hint: "I'm on the MFA map!"
      },
      {
        id: "bestOf_4",
        question:
          "This artist’s upside down chandelier was not originally going to stay in the MFA, but was kept due to its wide popularity. (Artist’s last name only)",
        answer: "chihuly",
        points: 3,
        hint: "You're looking for an enormous green piece of glassware"
      },
      {
        id: "bestOf_5",
        question:
          "The ruler in this statue, who may be Oba Esigie or even Prince Oranmiyan, ruled over what region?",
        answer: "benin",
        points: 4,
        hint: "I'm on the map!"
      },
      {
        id: "bestOf_6",
        question:
          "The MFA’s oldest piece of art is estimated to have been made in 6400 BC. What animal is it shaped like?",
        answer: "hare",
        points: 6,
        hint:
          "To find this gallery, you'll need to know what birthday Bilbo was celebrating one year before the beginning of the Lord of the Rings"
      }
    ]
  },
  misc: {
    blockTitle: "Hard Stuff",
    questions: [
      {
        id: "misc_1",
        question:
          "Which Old Testament figure is portrayed in Sargent's oil sketch for the Boston Public Libray murals?",
        answer: "moses",
        points: 3,
        hint: "It wouldn't be the hard stuff if I gave you a hint..."
      },
      {
        id: "misc_2",
        question:
          "This mirror in which you can’t see yourself was inspired by what Shakespeare play?",
        answer: "othello",
        points: 5,
        hint: "It wouldn't be the hard stuff if I gave you a hint..."
      },
      {
        id: "misc_3",
        question:
          "What is the name of the mask with exaggerated eyes used in the coming of age traditions of the Democratic Republic of the Congo?",
        answer: "gitenga",
        points: 7,
        hint: "It wouldn't be the hard stuff if I gave you a hint..."
      },
      {
        id: "misc_4",
        question:
          "What is the first name of the knight depicted in this kneeling statue, which is set in front of an early 15th century stained glass window?",
        answer: "alonso",
        points: 8,
        hint: "It wouldn't be the hard stuff if I gave you a hint..."
      },
      {
        id: "misc_5",
        question:
          "This piece, which contains Mexican, Spanish-Islamic, and Chinoiserie elements, contains depictions of the first free black settlement in Mexico. What is the surname of the family who owned this estate?",
        answer: "rivandeneira",
        points: 9,
        hint: "It wouldn't be the hard stuff if I gave you a hint..."
      }
    ]
  }
};
