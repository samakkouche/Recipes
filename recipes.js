// Add new recipes inside this list (copy an existing {...} block, add a comma between recipes).
// id: unique short name | n: title | e: emoji | total: minutes start to finish | note: shown under the title
// ing: shopping list | st: steps. a = minutes after start, d = how long it takes, t = title, x = detail, g = optional temp/heat tag
var R=[
{id:"curry",n:"Wagamama Chicken Coconut Curry",e:"🍛",total:50,
 note:"Timings are my estimates; your saved recipe didn’t include any.",
 ing:["Chicken","Ghee","Turmeric","Curry powder","Salt","Pepper","Rice","Onion","Garlic cloves (a couple)","Peppers","Coconut milk","Chicken stock","Stringless or runner beans (optional)"],
 st:[
 {a:0,d:5,t:"Wash and season the chicken",x:"Wash the chicken, then season lightly with turmeric, salt, pepper and curry powder."},
 {a:5,d:25,t:"Chicken into the pan",x:"Melt ghee in a pan and cook the chicken slowly, turning now and then until cooked through.",g:"Medium-low heat"},
 {a:10,d:15,t:"Wash the rice and put it on",x:"While the chicken cooks: wash the rice until the water runs clear, then put it on to cook.",g:"Rice about 12–15 min"},
 {a:15,d:10,t:"Chop everything",x:"While chicken and rice cook: chop the onion and garlic, and slice the peppers (and beans if using)."},
 {a:30,d:2,t:"Chicken out",x:"Set the chicken aside and leave the juices in the pan. Turn the rice off and keep it covered."},
 {a:32,d:5,t:"Sauté onion and garlic",x:"Cook in the chicken juices, stirring in curry powder and turmeric as they cook.",g:"Medium heat"},
 {a:37,d:3,t:"Add coconut milk and stock",x:"Pour in both and bring to a gentle simmer."},
 {a:40,d:8,t:"Chicken and peppers back in",x:"Return the chicken, add the peppers (and beans) and simmer a little. Taste and adjust the seasoning.",g:"Gentle simmer"},
 {a:48,d:2,t:"Serve over rice",x:"Fluff the rice and serve."}]},
{id:"lamb",n:"Greek-Style Roast Leg of Lamb",e:"🍋",total:360,
 note:"Night before: thaw in a sealed leak-proof bag fully submerged in cold water, changing the water every 30 min (about 4–5 h for a 2.2 kg leg), then straight into the fridge overnight. Times below fit a 2.2 kg leg.",
 ing:["Bone-in leg of lamb","Garlic (a few cloves to sliver, 2–3 to crush)","Lemons (juice, plus zest of one)","Smooth Dijon mustard (a couple of tsp)","Extra virgin olive oil","Dried oregano (plenty)","Chicken or lamb stock","White wine (optional)","Honey (optional)","Potatoes (for wedges)","Salt","Pepper"],
 st:[
 {a:0,d:60,t:"Lamb out of the fridge, sauce, stud and rub",x:"Whisk lemon juice, zest, Dijon, olive oil, crushed garlic and oregano into a sauce. Pierce the lamb all over, push garlic slivers into the slits, then rub the sauce all over."},
 {a:45,d:15,t:"Preheat the oven",x:"Get it up to temperature before the lamb goes in.",g:"160–170°C"},
 {a:60,d:150,t:"Lamb into the oven, covered",x:"Lamb in a roasting tray, stock (and wine) poured around it, covered tightly with foil or wet parchment.",g:"160–170°C"},
 {a:210,d:20,t:"Steam the potato wedges",x:"Cut into wedges and steam briefly so they stay firm. Toss in olive oil, oregano, salt, pepper and drippings from the lamb tray."},
 {a:300,d:10,t:"Check the lamb",x:"It should be very tender and shred with a fork. Use a meat thermometer rather than time alone."},
 {a:315,d:45,t:"Uncover, honey, potatoes in",x:"Take the foil off, brush a little honey on top, turn the oven up and put the potatoes in alongside for 30–40 min.",g:"200°C"},
 {a:360,d:10,t:"Everything out and serve",x:"Rest about 10 min under foil if you can (optional). Spoon the lemony mustard pan juices over to serve."}]}
];
