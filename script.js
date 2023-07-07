// text animation
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "a student";
  }, 0);
  setTimeout(() => {
    text.textContent = "an athlete";
  }, 2000);
  setTimeout(() => {
    text.textContent = "a scientist";
  }, 4000);
  setTimeout(() => {
    text.textContent = "a chef";
  }, 6000);
  setTimeout(() => {
    text.textContent = "a musician";
  }, 8000);
  setTimeout(() => {
    text.textContent = "a son";
  }, 10000);
};

textLoad();
setInterval(textLoad, 12000);

// pop up menu
function toggleDropdown(type) {
  var dropdownStories = document.getElementById("dropdown-stories");
  var dropdownExperience = document.getElementById("dropdown-experience");

  if (type === "stories") {
    dropdownExperience.classList.remove("active");
    dropdownStories.classList.toggle("active");
  } else if (type === "experience") {
    dropdownStories.classList.remove("active");
    dropdownExperience.classList.toggle("active");
  } else {
    dropdownStories.classList.remove("active");
    dropdownExperience.classList.remove("active");
  }
}

function showBubble(content) {
  var bubble = document.getElementById("bubble");
  var bubbleContent = document.getElementById("bubble-content");
  var dropdownContent = document.getElementById("dropdown-content");

  if (content === "Smoothie King") {
    bubbleContent.textContent =
      "Ah, Smoothie King...my first job. I remember my only references being my math and physics teachers. During the interview, the manager asked me, 'Why should I hire you?' (He didn't ask that, he asked when I was available to work and if I could lift heavy things). It was pretty chill. I worked evenings and weekends, and not many people came in during either of those times. I mostly talked with my coworkers, stocked fruits, played with the industrial sink sprayer, and made milkshakes (I didn't like smoothies). My coworkers were chill, mostly; I got along with them. I don't recall ever messing up a smoothie. The software we used for orders was pretty complicated, however, so sometimes when I was given an obscure order, I needed to ask for help. Working Sunday nights was very fun. Though that's kind of ironic, as working Sunday nights was fun because I didn't have to work that much. No one came in, it was quiet, and I got to enjoy my milkshake in peace. My ending at smoothie king was weird. I was never fired, and I never quit, but I just stopped getting hours. I called, texted, and emailed my manager. No response. However, that led to the aquire-ation (that's a word, I promise) of my next job, which was amazing.";
  } else if (content === "BP Gas") {
    bubbleContent.textContent =
      "The sweet, sweet smell of gas. Shortly after the smoothie king fiasco, a senior on the cross country team said he was leaving his job at the local gas station, and they were looking for someone. He said they were all chill people, and the job was super easy. Well, lucky me! I needed a job. I headed down with my math-teacher-as-my-professional-reference resume and said, 'Hello! Are you guys hiring?' they were, and shortly after, I got a phone call saying I got the job. On the next Saturday, I started my first day. It was simple enough: ring up customers' snacks, help them pump gas/fill their tires up with air (sometimes), and run work orders to the mechanic shop (it was connected to the store). My teammate was right; it was very easy. I essentially got paid to hang out with my coworkers, do my homework, and watch Netflix; it was a true sinecure. Take that, papa! (for those that don't know (which will, of course, be everyone besides my dad), my dad got on me for wanting a sinecure: a job that takes little to no work but has big benefits, saying that they don't exist. Well, think again!). Anyways, overall a great job, and I got a very good sense of what the general population was like.";
  } else if (content === "OrangeTheory Fitness") {
    bubbleContent.textContent =
      "'A boutique fitness studio? Anand, how does this relate to furthering your career or your previous jobs at all?' It doesn't. Shortly after graduating high school, I moved to Houston, TX. I knew I needed a summer job and thought, 'Oh, well, bp was easy and fun; I'll just work at a gas station here.' I went to several near my house; none called me back :( After that, I thought maybe it would be good to work at a gym so I could get free membership since I had recently started getting into lifting. The problem was that all the gyms around me were really fancy: Lifetime Fitness, Equinox, etc. I applied online to each of those and went in person to introduce myself; no dice. It's ok. After retrospection, I decided I wouldn't hire me either, as I had no experience. Finally, there was some gym I'd never heard of: OrangeTheory Fitness. I went to the studio near me, and the manager said they weren't hiring, but they'd send word around in case anyone was. Ding! I got a message from an OrangeTheory manager asking if I would be interested in coming in for an interview. I interviewed and got the job! This job was very fun, I had great coworkers, and I learned the tricks of being a good salesman (I sold memberships).";
  } else if (content === "Baylor College of Medicine") {
    bubbleContent.textContent =
      "At last, my first real job. I learned that a researcher from the Scripps research institute (which is right by my school, actually) was moving to Baylor College of Medicine, where my parents worked. I sent her an email expressing interest in her lab, and I was invited to interview. I did the interview. It went well (clearly), and I got the job! Good thing I got in early because later, I learned that there were about 20 other undergrads applying for the same position. The lab was also brand new to Baylor, so I was a big part of setting up the lab. I was part of managing inventory and organizing the lab. My coworkers were great again as well. Since the lab was still in its infant stages, it was just me, a post-doc staff scientist, and a master's student lab technician. Throughout the summer, there were some rotation students as well. As always, I was by far the youngest. A fond memory was when I asked, 'Do adults use Venmo?'. The adults found that quite funny. I learned a lot about setting up a lab, and I worked closely with the staff scientist who humored all my science questions, such as 'What happens if you drink double distilled water?' (apparently some violent things), as well as mentored me about research and the process in general.";
  } else if (content === "UC San Diego") {
    bubbleContent.textContent =
      "Monkeys!!! I searched behavioral labs ucsd into Google and started reading through the professors -- one caught my eye. He was doing behavioral research with monkeys! (Marmosets, to be exact). I reached out to express my interest, but I didn't hear back. I had forgotten that I emailed him, but about a month later, I got a response saying one of his grad students was starting a new project and needed an undergrad helper. I interviewed with the grad student, and a few days later, I got the job! There were forms after forms and documents on documents that I had to submit. Oh! The training modules were relentless. I learned enough about safety to protect a country. On my first day on the job, I suited up in a lab coat, hairnet, gloves, shoe covers, and scrubs and set foot into the monkey colony. Gah. Lee. It smelled so bad. They all went silent and stared at me as if I was a predator. I couldn't help but think, 'What are ya'll worried about?! We're the same!' Also, I had to feed the monkeys live crickets, which was terrifying. I was so scared of them jumping on me. I eventually got over it, though. I learned a lot about behavioral research, and I got to work with monkeys! I also got to work with a grad student, which was a great experience.";
  } else if (content === "MD Anderson") {
    bubbleContent.textContent = "under construction";
  }

  if (content === "Smoothie King ") {
    bubbleContent.textContent =
      "I made smoothies; I used company software to take orders; I did janitorial related tasks; I dealt with the general public; I used an industrial sink sprayer to wash dishes";
  } else if (content === "BP Gas ") {
    bubbleContent.textContent =
      "I learned the ins and outs of how a gas pump works; I learned how to use a cash register; I restocked; I ran work orders back and forth; I assisted customers with simple vehicle-related tasks (filling up tires with air, plugging holes)";
  } else if (content === "OrangeTheory Fitness ") {
    bubbleContent.textContent =
      "I sold memberships; I made out-going sales calls; I repaired electronic fitness equipment (heart rate monitors); I mopped post-class; I performed first-class walkthroughs for prospective members";
  } else if (content === "Baylor College of Medicine ") {
    bubbleContent.textContent =
      "I had an independent project where I took wildtype and knockout slides and used ImageJ/FIJI (an image analysis software) to determine whether there was a significant difference in urothelial lining thickness. Also, part of that project was determining the percent collagen in each tissue sample to see if there was a significant difference. The collagen was stained blue, so I had to use ImageJ to isolate the blue pixels and determine the percent of the image that was blue. I had another independent project where I stained slides and imaged them using fluorescence microscopy. I also experienced every step of an experiment. Starting from the beginning, I watched the mouse be sacrificed, I dissected it to retrieve its tissues, I cryosectioned the tissue and fixed them to slides, I stained the slides, I imaged the slides, I analyzed the images, and I presented my findings to the lab; I managed inventory and organized the lab; I performed general lab maintenance; I gave a 2-hour presentation for journal club on interoception and its effects on mood disorders, namely anxiety, depression, and PTSD";
  } else if (content === "UC San Diego ") {
    bubbleContent.textContent =
      "The goal of the experiment was to see if monkeys turn their head in the direction of a monkey sound. To solve this, I wrote a program in Python that took raw data produced by a computer vision algorithm (Sleap, trained to distinguish animal body parts) in the form of a 3d list of frames (of a video), points (ears and nose), and coordinates (x and y positions in space) and isolated the coordinates of the ears and nose. Then, the function calculated the angle of head rotation with respect to the body. The raw speaker CSV data was also imported. This contained the frame of the start and end of a speaker call from several different speakers. With the speaker data and head angles, I calculated the circular mean head angle during each speaker call. From then, I cleaned the data (removed nans), and I plotted the circular means on a polar chart. I also learned about marmoset upkeep and general animal care. I helped build a behavioral testing chamber. ";
  } else if (content === "MD Anderson ") {
    bubbleContent.textContent = "md anderson experience";
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
