// ══════════ ALGEBRA 2 HUB — DATA (external file, no inline-string escaping issues) ══════════

const problems = [
  {
    topic:"Function Notation",
    q:"Szoboszlai's pass accuracy model: <strong>f(x) = x + 9</strong> where x = match intensity (1–10).<br>Find <strong>f(8)</strong>.",
    hint:"Replace x with 8 in f(x) = x + 9",
    answer:"17",
    steps:["f(8) = (8) + 9","= 17 ✅"]
  },
  {
    topic:"Function Notation",
    q:"<strong>Bilal El Khanous</strong> defensive pressure model: <strong>g(x) = 6 − 5x</strong><br>Find <strong>g(−1)</strong>.",
    hint:"Replace x with −1. Remember: 5×(−1) = −5, and 6−(−5) = 6+5",
    answer:"11",
    steps:["g(−1) = 6 − 5(−1)","= 6 − (−5)","= 6 + 5","= 11 ✅"]
  },
  {
    topic:"Function Notation",
    q:"Payton Pritchard's 3-point model: <strong>h(x) = 4x + 3</strong><br>Find <strong>h(10)</strong>.",
    hint:"Plug in x = 10",
    answer:"43",
    steps:["h(10) = 4(10) + 3","= 40 + 3","= 43 ✅"]
  },
  {
    topic:"Absolute Value",
    q:"<strong>Sofiane Boufal</strong>'s dribble power model: <strong>h(x) = |3x − 8|</strong><br>Find <strong>h(1)</strong>.",
    hint:"Plug in x = 1 first, THEN take absolute value of the result",
    answer:"5",
    steps:["h(1) = |3(1) − 8|","= |3 − 8|","= |−5|","= 5 ✅"]
  },
  {
    topic:"Function Notation",
    q:"<strong>Anas El Aynaoui</strong>'s pass rating is <strong>f(x) = 3x + 5</strong>. Is the point <strong>(−1, 2)</strong> on this model?<br>Type YES or NO.",
    hint:"Plug x = −1 into f(x) = 3x + 5. Does the output equal 2?",
    answer:"yes",
    steps:["f(−1) = 3(−1) + 5","= −3 + 5","= 2","Output = 2, which matches! → YES ✅"]
  },
  {
    topic:"Function Notation",
    q:"<strong>Ben Seghir</strong>'s xG model is <strong>h(x) = 7x − 2</strong>. Is <strong>(−3, −19)</strong> on it?<br>Type YES or NO.",
    hint:"Plug x = −3 into h(x) = 7x − 2. Does the output equal −19?",
    answer:"no",
    steps:["h(−3) = 7(−3) − 2","= −21 − 2","= −23","−23 ≠ −19 → NO ✅"]
  },
  {
    topic:"Slope & Lines",
    q:"<strong>y = −3x − 8</strong><br>What is the <strong>slope</strong>? (just type the number)",
    hint:"y = mx + b. The slope is the coefficient of x.",
    answer:"-3",
    steps:["y = −3x − 8 is already in y = mx + b form","m = −3 ✅"]
  },
  {
    topic:"Slope & Lines",
    q:"<strong>y = −3x − 8</strong><br>What is the <strong>y-intercept</strong>? (just type the number)",
    hint:"y = mx + b. The y-intercept is the constant term b.",
    answer:"-8",
    steps:["y = −3x − 8","b = −8 ✅"]
  },
  {
    topic:"Slope & Lines",
    q:"<strong>2x + 3y = 12</strong><br>Find the <strong>x-intercept</strong>. (type the x-coordinate only)",
    hint:"Set y = 0 and solve for x.",
    answer:"6",
    steps:["Set y = 0: 2x + 3(0) = 12","2x = 12","x = 6 → x-intercept is (6, 0) ✅"]
  },
  {
    topic:"Slope & Lines",
    q:"<strong>2x − 5y = 10</strong><br>Find the <strong>y-intercept</strong>. (type the y-coordinate only)",
    hint:"Set x = 0 and solve for y.",
    answer:"-2",
    steps:["Set x = 0: 2(0) − 5y = 10","−5y = 10","y = −2 → y-intercept is (0, −2) ✅"]
  },
  {
    topic:"Systems",
    q:"Solve by substitution:<br><strong>y = 1 − x</strong><br><strong>−2x + y = 4</strong><br>Type the x-value only.",
    hint:"Substitute y = 1 − x into the second equation.",
    answer:"-1",
    steps:["Sub y=1−x into −2x + y = 4:","−2x + (1 − x) = 4","−3x + 1 = 4","−3x = 3","x = −1 ✅"]
  },
  {
    topic:"Systems",
    q:"Solve by substitution:<br><strong>y = 1 − x</strong><br><strong>−2x + y = 4</strong><br>Now find y. Type the y-value.",
    hint:"You found x = −1. Plug into y = 1 − x.",
    answer:"2",
    steps:["y = 1 − (−1)","= 1 + 1","= 2 ✅","Solution: (−1, 2)"]
  },
  {
    topic:"Systems",
    q:"Solve by elimination:<br><strong>−2x + 2y = −2</strong><br><strong>2x + y = 5</strong><br>Type the y-value.",
    hint:"Add both equations together — what happens to x?",
    answer:"1",
    steps:["Add equations: (−2x+2x) + (2y+y) = (−2+5)","0 + 3y = 3","y = 1 ✅"]
  },
  {
    topic:"Systems",
    q:"Continuing the elimination problem above:<br><strong>2x + y = 5</strong>, y = 1<br>Find x.",
    hint:"Substitute y = 1 into 2x + y = 5.",
    answer:"2",
    steps:["2x + 1 = 5","2x = 4","x = 2 ✅","Solution: (2, 1)"]
  },
  {
    topic:"Systems — Special Case",
    q:"Salim Louza and Abde Ezzalzouli's overlapping run paths are modeled by:<br><strong>2x + 3y = 5</strong> and <strong>4x + 6y = −10</strong><br>How many times do their paths cross? Type: ONE, NONE, or INFINITE",
    hint:"Multiply the first equation by 2 and compare to the second.",
    answer:"none",
    steps:["Multiply eq 1 by 2: 4x + 6y = 10","Compare to eq 2: 4x + 6y = −10","10 ≠ −10 → Contradiction!","Parallel lines → NO SOLUTION ✅"]
  }
];

const cards = [
  { front:"parent function", back:"The most basic function in a family of functions.", ex:"f(x) = x is the parent of all linear functions" },
  { front:"transformation", back:"A change in size, shape, position, or orientation of a graph.", ex:"Shifting, reflecting, stretching, shrinking" },
  { front:"translation", back:"A transformation that moves every point of a figure the same distance and direction (a shift).", ex:"f(x) + 3 shifts the graph UP 3 units" },
  { front:"reflection", back:"A transformation that flips a graph over a line (like the x-axis or y-axis).", ex:"−f(x) reflects over the x-axis" },
  { front:"vertical stretch", back:"A transformation that multiplies all y-values by a factor greater than 1, making the graph taller/steeper.", ex:"2f(x) stretches vertically by factor of 2" },
  { front:"vertical shrink", back:"A transformation that multiplies all y-values by a factor between 0 and 1, making the graph flatter.", ex:"½f(x) shrinks vertically — graph gets flatter" },
  { front:"horizontal stretch", back:"A transformation that multiplies all x-values by a factor greater than 1, making the graph wider.", ex:"f(½x) stretches horizontally" },
  { front:"horizontal shrink", back:"A transformation that divides all x-values by a factor greater than 1, making the graph narrower.", ex:"f(2x) shrinks horizontally" },
  { front:"correlation coefficient", back:"A number r between −1 and 1 that describes the strength and direction of a linear relationship. r ≈ ±1 → strong | r ≈ 0 → weak", ex:"r = 0.95 means strong positive correlation" },
  { front:"line of fit", back:"A line drawn on a scatter plot that is close to most data points — used to model a trend.", ex:"Drawn by visual judgment (not calculated)" },
  { front:"line of best fit", back:"The mathematically calculated line that minimizes total distance to all data points. More precise than a line of fit.", ex:"Found using linear regression / calculator" },
  { front:"ordered triple", back:"A solution (x, y, z) to a system of three linear equations in three variables.", ex:"(1, 2, 3) satisfies x + y + z = 6" },
  { front:"system of equations", back:"A set of two or more equations with the same variables. The solution is the point(s) that satisfy ALL equations.", ex:"Three methods: graphing, substitution, elimination" }
];

const categories = ["Function Facts","Slope & Lines","Transformations","Systems","Sports Math"];

const jepData = [
  // Function Facts
  [
    { q:"What does f(x) mean?", choices:["The letter f times x","The output of function f at x","A fraction","None of these"], a:1, explanation:"f(x) is read 'f of x' — it's the output value when you input x." },
    { q:"Find f(5) if f(x) = 2x + 1", choices:["10","11","12","9"], a:1, explanation:"f(5) = 2(5)+1 = 10+1 = 11 ✅" },
    { q:"Which is the parent function of all linear functions?", choices:["f(x) = x²","f(x) = |x|","f(x) = x","f(x) = 1"], a:2, explanation:"f(x) = x is the simplest linear function — the parent." },
    { q:"Is (2, 7) on f(x) = 3x + 1?", choices:["Yes","No","Can't tell","Only if x>0"], a:0, explanation:"f(2) = 3(2)+1 = 7 ✅ Yes, (2,7) is on the graph." },
    { q:"h(x) = |3x − 8|. Find h(1).", choices:["5","−5","11","3"], a:0, explanation:"h(1) = |3(1)−8| = |3−8| = |−5| = 5 ✅" }
  ],
  // Slope & Lines
  [
    { q:"In y = mx + b, what does m represent?", choices:["y-intercept","x-intercept","slope","constant"], a:2, explanation:"m is the slope — how steep the line is." },
    { q:"What is the slope of y = −3x + 7?", choices:["7","3","−3","−7"], a:2, explanation:"y = mx + b → m = −3 ✅" },
    { q:"Find the y-intercept of 4x + 2y = 8", choices:["2","4","8","−4"], a:1, explanation:"Set x=0: 2y=8 → y=4 ✅" },
    { q:"Find the x-intercept of 2x + 3y = 12", choices:["4","6","12","3"], a:1, explanation:"Set y=0: 2x=12 → x=6 ✅" },
    { q:"What slope indicates a horizontal line?", choices:["Undefined","1","−1","0"], a:3, explanation:"Horizontal lines have slope = 0. Vertical lines have undefined slope." }
  ],
  // Transformations
  [
    { q:"g(x) = f(x) + 5 shifts the graph...", choices:["Right 5","Left 5","Up 5","Down 5"], a:2, explanation:"Adding outside the function shifts UP. ✅" },
    { q:"g(x) = f(x − 3) shifts the graph...", choices:["Right 3","Left 3","Up 3","Down 3"], a:0, explanation:"Inside changes: (x−3) → shift RIGHT. Counter-intuitive but true! ✅" },
    { q:"g(x) = −f(x) is a reflection over the...", choices:["y-axis","x-axis","origin","z-axis"], a:1, explanation:"Negating the output flips over the x-axis. ✅" },
    { q:"g(x) = 3f(x) is a vertical...", choices:["stretch by 3","shrink by 3","shift up 3","shift right 3"], a:0, explanation:"Multiplying by 3 (>1) stretches vertically. ✅" },
    { q:"g(x) = ½f(x) is a vertical...", choices:["stretch","shrink","reflection","translation"], a:1, explanation:"Multiplying by ½ (between 0 and 1) shrinks vertically. ✅" }
  ],
  // Systems
  [
    { q:"The solution to a system of equations is...", choices:["Any point on one line","The point where both lines meet","The slope","The y-intercept"], a:1, explanation:"The solution satisfies BOTH equations — where the lines intersect. ✅" },
    { q:"Solve: y = 3 and x + y = 7. Find x.", choices:["10","4","3","7"], a:1, explanation:"Sub y=3: x+3=7 → x=4 ✅" },
    { q:"When elimination gives 0 = 5, the system has...", choices:["One solution","No solution","Infinite solutions","Two solutions"], a:1, explanation:"0=5 is always false → contradiction → no solution (parallel lines). ✅" },
    { q:"Best method when one equation is already solved for y?", choices:["Graphing","Elimination","Substitution","Guessing"], a:2, explanation:"Substitution! Plug the solved equation directly into the other. ✅" },
    { q:"Solve: 2x+y=7 and x−y=2. Find x.", choices:["1","3","5","9"], a:1, explanation:"Add equations: 3x=9 → x=3 ✅" }
  ],
  // Sports Math
  [
    { q:"Szoboszlai (#8 Liverpool) covers distance f(x) = 1.5x + 2 km where x = match minutes. Distance at minute 60?", choices:["90 km","92 km","95 km","89 km"], a:1, explanation:"f(60) = 1.5(60)+2 = 90+2 = 92 km ✅" },
    { q:"Brahim Diaz's dribble success: d(x) = 3x + 1 where x = games played. After 4 games?", choices:["11","13","12","10"], a:1, explanation:"d(4) = 3(4)+1 = 12+1 = 13 ✅" },
    { q:"Payton Pritchard's 3PM function: h(x) = 2x. He attempts 6 shots. 3PMs made?", choices:["4","10","12","6"], a:2, explanation:"h(6) = 2(6) = 12 ✅" },
    { q:"Abde Ezzalzouli's crosses: C(x) = 4x − 2 per match where x = games started. Find C(3).", choices:["8","10","12","6"], a:1, explanation:"C(3) = 4(3)−2 = 12−2 = 10 ✅" },
    { q:"El Khanous and Ben Seghir's passes converge. El Khanous: y = 2x+1. Ben Seghir: y = x+4. Where do they meet?", choices:["(3,7)","(2,5)","(4,9)","(1,3)"], a:0, explanation:"Set equal: 2x+1=x+4 → x=3, y=7. Meeting point: (3,7) ✅" }
  ]
];
