/* Data Definition */  
type dillo = { length : int, is_dead : bool };

/* Examples of Data */
let baby_dillo = {length: 8, is_dead: false};
let adult_dillo = {length: 24, is_dead: false}; 
let huge_dead_dillo = {length: 65, is_dead: true}; 

/* A Function */
let can_shelter = (d) => 
    d.length > 60 && d.is_dead ;

/* Test cases */
can_shelter(baby_dillo) /* should be false */
can_shelter(huge_dead_dillo) /* should be true */
