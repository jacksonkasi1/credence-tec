/**
 * Variants for bottom to top animation.
 */
const bottom_top_variants = {
  initial: { y: "10%" }, // Starts slightly lower and fully transparent
  visible: (i) => ({
    y: 0, // Moves to the normal position
    transition: { duration: 1, delay: i },
  }),
};

/**
 * Variants for  bottom to top animation with a fade-in effect.
 */
const bottom_top_variants_fade = {
  initial: { y: "10%", opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: i },
  }),
}

/**
 * Variants for left to right animation.
 */
const left_right_variants = {
  initial: { x: "-15%", opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: i },
  }),
};

/**
 * Variants for top to bottom animation.
 */
const top_bottom_variants = {
  initial: { y: "-30%" },
  visible: (i) => ({
    y: 0,
    transition: { duration: 1, delay: i },
  }),
};

/**
 * Variants for bottom to top animation with a scale effect.
 */
const bottom_top_variants_scale = {
  initial: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: i },
  }),
};

/**
 * Variants for right to left animation with a fade-in effect.
 */
const right_left_variants = {
  initial: { x: "15%", opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: i },
  }),
};

/**
 * Variants for zoom in animation.
 */
const zoom_in_variants = {
  initial: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: i },
  }),
}

/**
 * Animation variants object containing various animation types.
 * @typedef {Object} AnimationVariants
 * @property {Object} b_t_t - Bottom to top animation variants.
 * @property {Object} b_t_t_fade - Bottom to top fade-in animation variants.
 * @property {Object} l_t_r - Left to right animation variants.
 * @property {Object} t_t_b - Top to bottom animation variants.
 * @property {Object} b_t_t_scale - Bottom to top scale animation variants.
 * @property {Object} r_t_l - Right to left animation variants.
 * @property {Object} zoom_in - Zoom in animation variants.
 */
export const animationVariants = {
  b_t_t_scale: bottom_top_variants_scale,
  b_t_t: bottom_top_variants,
  b_t_t_fade: bottom_top_variants_fade,
  l_t_r: left_right_variants,
  t_t_b: top_bottom_variants,
  r_t_l: right_left_variants,
  zoom_in: zoom_in_variants,
};
