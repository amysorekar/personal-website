// pop up menu
function toggleDropdown(type) {
  var dropdownStories = document.getElementById("dropdown-stories");
  var dropdownExperience = document.getElementById("dropdown-experience");

  if (type === "stories") {
    dropdownExperience.classList.remove("active");
    dropdownStories.classList.toggle("active");
  } else {
    dropdownStories.classList.remove("active");
    dropdownExperience.classList.remove("active");
  }
}

function showBubble(content) {
  var bubble = document.getElementById("bubble");
  var bubbleContent = document.getElementById("bubble-content");
  var dropdownContent = document.getElementById("dropdown-content");

  if (content === "xc") {
    bubbleContent.textContent =
      "Cross Country, my first real sport. I had played rec soccer and baseball in my early years, but that was just for fun. I started running xc (cross country) in 6th grade. I had never done real running before that. I remember on the first day of practice, the run was 1 mile around the school. I couldn't even do it without walking. I continued through middle school, and my best ever 2 mile to end middle school was mid 15 mins. Not bad. Throughout highschool, however, my improvement was phenomenal. My freshman year I ran a pr 5k of 20:40. Sophomore year, I took off. I'm not sure what happened. Maybe a mindset switch, or simply my body developing, but my improvement skyrocketed. I was running faster than ever before. Every single race but one I PRd. I started at a rough 23:xx as it was super hot that day and I mentally gave up mid race. I worked my way down, breaking 20, 19, 18, 17:30, PRing at 17:25 at the districts race. I actually copped the final spot for individual state qualifiers (top 15 qualify, I got 15th). At the state race in 2018, I got 88th out of 3XX, which was pretty spectacular as the previous year I didn't even break 20 minutes in the 5k. Junior year, my progression stagnated. I didn't pr that year. Though, we did receive a 4th place state trophy as a team; the first Clayton High School men's cross country team trophy since 1998!! Senior year, my times weren't much faster, but were more consistently faster. What I mean is, even though my fastest time didn't increase (or decrease, really), my average time was much faster. To finish out my cross country career, I ran my fastest ever race (17:23) at the state cross country championships and I placed 49th out of several hundred. Finishing on a pr at the state race in the top 50 was more than I could have ever asked for, especially considering that I started from the absolute bottom. My teammates over the years and my coach were absolutely amazing and I could not have asked for a better experience.";
  } else if (content === "track") {
    bubbleContent.textContent =
      "'Finally! I get to sprint!' so I thought. I was always very fast in short bursts, even as a kid. Not to brag but I was the fastest kid in elementary school 3 years running. I was so excited for track as I thought I would be able to sprint and be very good at it. I was wrong. My first few races in the 100m, I got absolutely dusted. It turns out that other fast kids existed as well. I also started track in 6th grade. My middle school career was not very impressive to say the least. High school was a different story. My freshman year, since I was significantly better at distance running, my coach (same as xc) had me do the distance events: 800m, mile, 2 mile 4x800m. I was pretty good. I broke 6 minutes in the mile for the first time which was pretty awesome. Otherwise, freshman year was not too special. Sophomore year, just like cross country, was another breakout year. My speed soared, and I ran a blistering 5:05 in the mile! This was unbelievable. I had also broken 11 minutes for the 2 mile. Junior year was taken by covid, sadly, but it just gave us several more months to train for the upcoming cross country season. My senior track season was very special. It had been over two years since I competed in a track meet. I had also done some insane winter training with my teammate and was feeling more fit than ever. To start the season off, we did a time trial a week before the season started, and I already ran 5:09! Just 4 seconds off my all-time best and I hadn't even done any speed work yet, just aerobic running! I knew the season was heading in a good direction. My goals for the season were sub 2:10, low 4:40s, and low 10s for the 800, mile, and 2 mile respectively, and compete at state. I ended the season with 2:07, 4:41, and 10:11 as my prs. I even ran the mile at the state track and field meet!! Running at such a competitive level especially after not being able to run a mile at all when I started was so special.";
  } else if (content === "lax") {
    bubbleContent.textContent =
      "A collegiate athlete, I can call myself! Lacrosse was a switch I, or probably anyone, ever saw coming. I had never played lacrosse before college. I had never even seen a lacrosse game before college. I had never even held a lacrosse stick before college. All I knew was that it was violent and it was like soccer but with sticks (or so I thought). The reason I joined the lacrosse team was a sequence of events. I tried to run at college, and my times were just about fast enough (the walk on mile was 4:37, I had 4:41), but the coaches said they were not holding open tryouts. That kind of killed my running dreams, as it was unfeasible to train at a college level alone for a year and a half. Then, my freshman year fall quarter I was not as social as I wanted to be. Next, winter quarter was put online for the first 5 weeks due to covid. So finally, when I first got back to campus halfway through winter quarter, when my buddy who was already on the team said 'Anand, you're coming out to lacrosse practice tonight' I said 'Let's do it.' Everyone I met on the first day of practice was so helpful. Mind you, I knew literally nothing about lacrosse. They gave me all sorts of pointers and were patient and just genuinely nice people. That's what caused me to stay. My closest friends in high school were on my varsity cross country and track squad, and I was looking for that group in college. Lacrosse was that group. Ever since then, some of my teammates are some of my closest friends. In addition, the exercise, the clout :), and the feeling of being on a team and working towards one goal is so special about the team. I would say joining the lacrosse team is one of if not THE best decision(s) I have made in college. I am still on the team, and my improvement since the beginning is unreal. I even scored a goal this past season! There is much more to come.";
  }

  bubble.classList.add("active");
  dropdownContent.classList.add("no-border");
}

function closeBubble() {
  var bubble = document.getElementById("bubble");
  var dropdownContent = document.getElementById("dropdown-content");

  bubble.classList.remove("active");
  dropdownContent.classList.remove("no-border");
}

// open menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
}
