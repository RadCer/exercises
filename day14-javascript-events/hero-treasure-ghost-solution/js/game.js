/**
 * moves any stone (hero, ghost, treasure) to a designated
 * location
 *
 * If that location is out of bounds, does nothing
 * After movement, checks collisions
 */
const moveTo = (stone, x, y) => {
    // prevent going out of bounds
    if (x < 0 || y < 0 || x >= map_width || y >= map_height) {
        return false;
    }

    if (stone.classList.contains('hero')) {
        hero_x = x;
        hero_y = y;
    } else if (stone.classList.contains('ghost')) {
        ghost_x = x;
        ghost_y = y;
    } else if (stone.classList.contains('treasure')) {
        treasure_x = x;
        treasure_y = y;
    }

    stone.style.left = x * 100 + 'px';
    stone.style.top  = y * 100 + 'px';

    detectCollisions();
}

/**
 * moves a stone (hero, ghost, treasure) up in the map
 */
const moveUp = stone => {
    if (stone.classList.contains('hero')) {
        moveTo(stone, hero_x, hero_y - 1);
    } else if (stone.classList.contains('ghost')) {
        moveTo(stone, ghost_x, ghost_y - 1);
    }
}

/**
 * moves a stone (hero, ghost, treasure) down on the map
 */
const moveDown = stone => {
    if (stone.classList.contains('hero')) {
        moveTo(stone, hero_x, hero_y + 1);
    } else if (stone.classList.contains('ghost')) {
        moveTo(stone, ghost_x, ghost_y + 1);
    }
}

/**
 * moves a stone (hero, ghost, treasure) left on the map
 *
 * adds a class so that the graphics can turn left as well
 */
const moveLeft = stone => {
    if (stone.classList.contains('hero')) {
        moveTo(stone, hero_x - 1, hero_y);
    } else if (stone.classList.contains('ghost')) {
        moveTo(stone, ghost_x - 1, ghost_y);
    }

    stone.classList.add('turned-left');
}

/**
 * moves a stone (hero, ghost, treasure) right the map
 */
const moveRight = stone => {
    if (stone.classList.contains('hero')) {
        moveTo(stone, hero_x + 1, hero_y);
    } else if (stone.classList.contains('ghost')) {
        moveTo(stone, ghost_x + 1, ghost_y);
    }

    stone.classList.remove('turned-left');
}

/**
 * determines the next move of the ghost and moves it
 *
 * the ghost is always trying to get closer to the hero.
 * If it can go on both X and Y axis to fulfill this
 * requirement, it chooses an axis with a 50% chance
 */
const moveGhost = () => {
    if (game_over) {
        return false;
    }

    if (hero_x !== ghost_x && (Math.random() > 0.5 || hero_y === ghost_y)) {
        // move on the X axis
        if (hero_x < ghost_x) {
            moveLeft(ghost);
        } else {
            moveRight(ghost);
        }
    } else if (hero_y !== ghost_y) {
        // move on the Y axis
        if (hero_y < ghost_y) {
            moveUp(ghost);
        } else {
            moveDown(ghost);
        }
    }
}

/**
 * detects whether some stones appear in the same position
 * and their collision means something
 *
 * declares defeat when the hero is in the same position as the ghost
 * declares victory when the hero is in the same position as the treasure
 */
const detectCollisions = () => {
    if (hero_x === ghost_x && hero_y === ghost_y) {
        defeat();
    }

    if (hero_x === treasure_x && hero_y === treasure_y) {
        victory();
    }
}

/**
 * heralds game over with a victory status
 */
const victory = () => {
    gameOver();
    document.body.classList.add('victory');
}

/**
 * heralds game over with a defeat status
 */
const defeat = () => {
    gameOver();
    document.body.classList.add('defeat');
}

/**
 * stops the game
 *
 * clears the interval which was moving the ghost
 */
const gameOver = () => {
    game_over = true;
    clearInterval(ghost_move_interval);
}

// game stones
const hero = document.querySelector('.hero'),
      ghost = document.querySelector('.ghost'),
      treasure = document.querySelector('.treasure');

// map size
const map_width = 8;
const map_height = 6;

// stone positions
let hero_x = 0,
    hero_y = 0,
    ghost_x = 0,
    ghost_y = 0,
    treasure_x = 0,
    treasure_y = 0;

// game status
let game_over = false;

// set initial stone positions
moveTo(hero, 1, 5);
moveTo(ghost, 6, 2);
moveTo(treasure, 4, 0);

// start waiting for keypresses
document.addEventListener('keyup', event => {
    if (game_over) {
        return false;
    }

    if (event.key === 'ArrowLeft' || event.key === 'a') {
        moveLeft(hero);
    } else if (event.key === 'ArrowRight' || event.key === 'd') {
        moveRight(hero);
    } else if (event.key === 'ArrowUp' || event.key === 'w') {
        moveUp(hero);
    } else if (event.key === 'ArrowDown' || event.key === 's') {
        moveDown(hero);
    }
})

// start the ghost's movement
let ghost_move_interval = setInterval(moveGhost, 500);