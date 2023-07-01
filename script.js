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
      "ah, smoothie king...my first job. I remember my only references being my math and physics teacher. During the interview, the manager asked me 'why should i hire you?' (he didn't ask that, he said when am i available to work and if i could lift heavy things.). it was pretty chill. i worked evenings and weekends, and not many people came in during either of those times. i mostly talked with my coworkers, stocked fruits, played with the industrial sink sprayer, and made milkshakes (i didn't like smoothies). my coworkers were chill mostly; i got along with them. i don't recall ever messing up a smoothie. the software we used for orders was pretty complicated, however, so sometimes when i was given an obscure order i needed to ask for help. working sunday nights was very fun. though that's kind of ironic, because working sunday nights were fun because i didn't have to work that much. no one came in, it was quiet, and i got to enjoy my milkshake in peace. my ending at smoothie king was weird. i was never fired, and i never quit, but i just stopped getting hours. i called, texted, and emailed my manager. no response. however, that led to the aquire-ation (that's a word, i promise) of my next job, which was amazing.";
  } else if (content === "BP Gas") {
    bubbleContent.textContent =
      "the sweet, sweet smell of gas. shortly after the smoothie king fiasco, a senior on the cross country team said he was leaving his job at the local gas station and they were looking for someone. he said they were all chill people and the job was super easy. well lucky me! i was in need of a job. I headed down with my math-teacher-as-my-professional-reference resume and said 'hello! are you guys hiring?' they were and shortly after i got a phone call saying i got the job. on the next saturday i started my first job. it was simply enough: ring up customers' snacks, help them pump gas/fill their tires up with air sometimes, and run work orders to the mechanic shop (it was connected to the store). my teammate was right; it was very easy. i essentially got paid to hang out with my coworkers, do my homework, and watch netflix. it was a true sinecure. take that, papa! (for those that don't know (which will of course be everyone besides my dad) my dad got on me for wanting a sinecure; a job that takes little to no work but has big benefit, saying that they don't exist. well think again!). anyway, overall a great job, and i got a very good sense of what the general population was like.";
  } else if (content === "OrangeTheory Fitness") {
    bubbleContent.textContent =
      "a boutique fitness studio? 'anand how does this relate to furthering your career or your previous jobs at all?' it doesn't. shortly after graduating high school i moved to houston, tx. i knew i needed a summer job, and thought 'oh, well bp was easy and fun, i'll just work at a gas station here'. i went to several near my house, none called me back :( after that, i was thinking maybe it would be good to work at a gym so i could get free membership, since i had recently started getting into lifting. the problem was, all the gyms around me were really fancy: lifetime fitness, the equinox, etc. i applied online to each of those and went in person to introduce myself; no dice. it's ok. after retrospection i decided i wouldn't hire me either, as i had no experience. finally, there was some gym i'd never heard of: orangetheory fitness. i went to the studio near me, and the manager said they weren't hiring, but they'd send word around in case anyone was. ding! a message from an orangetheory manager, asking if i would be interested in coming in for an interview. i interviewed and got the job! this job was very fun, i had great coworkers, and i learned the tricks of being a good salesman (i sold memberships).";
  } else if (content === "Baylor College of Medicine") {
    bubbleContent.textContent =
      "at last, my first real job. i learned that a new researcher, from the scripps research institute right by my school actually, was moving to baylor college of medicine, where my parents worked. I sent her an email expressing interest in her lab, and i was invited to interview. i did the interview, it went well (clearly), and i got the job! good thing i got in early, because later i learned there were about 20 other undergrads applying for the same position. the lab was also brand new to baylor, so i was a big part in setting up the lab. i was part of managing inventory and organizing the lab. again, my coworkers were great. since the lab was still in its infant stages, it was me, a post-doc staff scientist, and a masters lab technician. throughout the summer there were some rotation students as well. as always, i was by far the youngest. a fond memory was when i asked 'do adults use venmo?'. the adults found that quite funny. i learned a lot about setting up a lab, and i worked closely with the staff scientist who humored all my science questions such as 'what happens if you drink double distilled water?' (apparently some violent things), as well as mentored me about research and the process in general.";
  } else if (content === "UC San Diego") {
    bubbleContent.textContent =
      "monkeys!!! i searched up behavioral labs ucsd into google and started reading through the professors. one caught my eye. he was doing behavioral research with monkeys! marmosets to be exact. i reached out, expressing my interest, but didn't hear back. I had forgotten that i emailed him, but about a month later i got a response saying one of his grad students is starting a new project and needs an undergrad helper. i interviewed with the grad student, and a few days later i got the job! there were forms after forms and documents on documents that i had to submit. oh! the training modules were relentless. i learned enough about safety to protect a country. my first day on the job, i suited up in lab coat, hairnet, gloves, shoe covers, scrubs, and set foot into the monkey colony. gah. lee. it smelled so bad. and they all went silent and stared at me, like i was a predator. i couldn't help but think 'what are ya'll worried about?! we're the same!'. also, i had to feed the monkeys live crickets, which was terrifying. i was so scared of them jumping on me. i got over it though. i learned a lot about behavioral research, and i got to work with monkeys! i also got to work with a grad student, which was a great experience.";
  } else if (content === "MD Anderson") {
    bubbleContent.textContent = "under construction";
  }

  if (content === "Smoothie King ") {
    bubbleContent.textContent =
      "i made smoothies; i used company software to take orders; i did janitorial related tasks; i dealt with the general public; i used an industrial sink sprayer to wash dishes";
  } else if (content === "BP Gas ") {
    bubbleContent.textContent =
      "i learned the ins and outs of how a gas pump works; i learned how to use a cash register; i restocked; i ran work orders back and forth; i assisted customers with simple vehicle-related tasks (filling up tires with air, plugging holes)";
  } else if (content === "OrangeTheory Fitness ") {
    bubbleContent.textContent =
      "i sold memberships; i made out-going sales calls; i repaired electronic fitness equipment (heartrate monitors); i mopped post-class; i performed first-class walkthroughs for prospective members";
  } else if (content === "Baylor College of Medicine ") {
    bubbleContent.textContent =
      "i had an independent project where i took wildtype and knockout slides and used ImageJ/FIJI (an image analysis software) to determine whether there was a significant difference in urothelial lining thickness. also part of that project was determining the percent collagen in each tissue sample to see if there was a significant difference. the collagen was stained blue, so i had to use imageJ to isolate the blue pixels and determine the percent of the image that was blue; i had another independent project where i stained slides and imaged them using florescence microscopy. i also experienced every step of an experiment. starting from the beginning, i watched the mouse be sacrificed, i dissected it to retrieve its tissues, i cryosectioned the tissue and fixed them to slides, i stained the slides, i imaged the slides, i analyzed the images, and i presented my findings to the lab; i managed inventory and organized the lab; i performed general lab maintenance; i gave a 2 hour presentation for journal club on interoception and its effects on mood disorders, namely anxiety, depression, and ptsd";
  } else if (content === "UC San Diego ") {
    bubbleContent.textContent =
      "the goal of the experiment was to see if monkeys turn their head in the direction of a monkey sound. to solve this, i wrote a program in python that took the raw data produced by a computer vision algorithm, sleap, (trained to distinguish animal body parts) in the form of a 3d list of frames (of a video), points (ears and nose), and coordinates (x and y positions in space) and isolated the coordinates of the ears and nose. then, the function calculated the angle of head rotation with respect to the body. the raw speaker csv data was also imported. this contained the frame of the start and end of a speaker call from several different speakers. with the speaker data and head angles, i calculated the circular mean head angle during each speaker call. from then, i cleaned the data (removed nans), and plotted the circular means on a polar chart. i also learned about marmoset upkeep and general animal care. i helped build a behavioral testing chamber. ";
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
