var starbucks = [
    { name: "американо", type: "кофе", ingredients: ["вода 100мл", "кофе 50мл"] },
    {
      name: "капучино",
      type: "кофе",
      ingredients: ["эспрессо 60мл", "горячее молоко 60мл", "молочная пена 60мл"],
    },
    {
      name: "латтэ",
      type: "кофе",
      ingredients: ["эспрессо 50мл", "молоко 150мл", "молочная пена 50мл"],
    },
    {
      name: "Матча латте",
      type: "чай",
      ingredients: [
        "порошковый чай Матча – 1 ч.л",
        "молоко – 150-200 мл (по вкусу),",
        "вода – 50-70 мл (по вкусу),",
        "подсластитель – сахар, мед, любимый сироп (по вкусу).",
      ],
    },
    {
      name: "чай ананас маракуйя",
      type: "чай",
      ingredients: [
        "ананас свежезамороженный",
        " маракуйя свежезамороженная",
        "мята свежезамороженная",
        "анис корица",
        "кардамон",
        "бадьян",
      ],
    },
  ];
  
  console.log(starbucks);
  
  
  var day = prompt("Введите число от 1 до 7");
  switch (day) {
    case "1":
      console.log("понедельник");
      break;
    case "2":
      console.log("вторник");
      break;
    case "3":
      console.log("среда");
      break;
    case "4":
      console.log("четверг");
      break;
    case "5":
      console.log("пятница");
      break;
    case "6":
      console.log("суббота");
      break;
    case "7":
      console.log("воскресенье");
      break;
  
    default:
      console.log("ERROR");
      break;
  }
  
  
