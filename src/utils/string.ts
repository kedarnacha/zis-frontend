export const getInitials = (name: string) => {
  // Split the name into words
  const words = name.split(' ');

  // Initialize an empty string to store initials
  let initials = '';

  // Iterate through each word and get the first character
  for (const word of words) {
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }

  // Return the two first initials
  return initials.slice(0, 2);
};
